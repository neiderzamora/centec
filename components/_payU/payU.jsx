"use client";

import { useState } from "react";
import { API_KEY, MERCHAND_ID, CURRENCY } from "@/utils/payU/sandbox_account";
import { calculateMD5 } from "@/utils/payU/create_hash";
import { PRODUCTS } from "@/utils/payU/products";
import { FORM_PAYU } from "@/utils/payU/inputs";
import PaymentForm from "../admissions-financing/payment_method";
import DiscountCode from "./discount_code";

export default function FormPayU() {
  const [formData, setFormData] = useState({});
  const [selectedProductName, setSelectedProductName] = useState("");
  const [selectedProductPrice, setSelectedProductPrice] = useState(0);
  const [selectedProductReference, setSelectedProductReference] = useState(0);
  const [selectedProductCompletePrice, setSelectedProductCompletePrice] =
    useState(0);

  const [cupon, setCupon] = useState("");
  const [cuponValido, setCuponValido] = useState(false);

  const verificarCupon = () => {
    // Verificar si el cupón es válido (en este caso, si es igual a "regalo")
    if (cupon.toLowerCase() === "regalo") {
      setCuponValido(true);
    } else {
      setCuponValido(false);
    }
  };

  const handleProductChange = (event) => {
    const productName = event.target.value;
    setSelectedProductName(productName);
    const selectedProduct = PRODUCTS.find(
      (product) => product.name === productName
    );
    if (selectedProduct) {
      setSelectedProductPrice(selectedProduct.price);
      setSelectedProductReference(selectedProduct.reference);
      setSelectedProductCompletePrice(selectedProduct.price_complete);
    } else {
      setSelectedProductPrice(0);
      setSelectedProductReference(0);
      setSelectedProductCompletePrice(0);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  /* 
  const handleSubmit = (e) => {
    e.preventDefault();
    
    fetch("https://checkout.payulatam.com/ppp-web-gateway-payu/", {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "application/json",
        
      },
    })
      .then((response) => response.json())
      .then((data) => {
        
        window.location.href = data.redirectUrl;
      })
      .catch((error) => console.error("Error:", error));
  }; */

  const md5Hash = calculateMD5(
    API_KEY,
    MERCHAND_ID,
    selectedProductReference,
    selectedProductPrice,
    CURRENCY
  );

  console.log(md5Hash, selectedProductPrice, selectedProductReference);
  return (
    <section className="pt-6">
      {selectedProductName && (
        <div className="flex justify-between text-lg lg:text-xl mb-2 py-3 px-6 font-semibold rounded-2xl bg-gradient-to-l from-secondaryGreen to-primaryBlue">
          <p>{selectedProductName}</p>
          <p>
            {
              PRODUCTS.find((product) => product.name === selectedProductName)
                ?.price
            }{" "}
            COP
          </p>
        </div>
      )}
      <form
        className="p-2 text-gray-600 grid grid-cols-1 lg:grid-cols-2 gap-4"
        method="post"
        action="https://sandbox.checkout.payulatam.com/ppp-web-gateway-payu/"
      >
        {FORM_PAYU.map((item, index) => (
          <div className="" key={index}>
            <input
              className="p-2 w-full rounded-sm bg-secondaryDarkBlue border border-gray-200/50 text-white"
              name={item.name}
              type={item.type}
              placeholder={item.placeholder}
              value={formData[item.name] || ""}
              onChange={handleChange}
            />
          </div>
        ))}

        <select
          name="description"
          className="bg-secondaryDarkBlue border border-gray-200/50 text-gray-400 rounded-md text-lg font-semibold p-2 pl-0.5 text-center lg:col-span-2"
          value={selectedProductName}
          onChange={handleProductChange}
        >
          <option value="">Selecciona un producto</option>
          {PRODUCTS.map((product, index) => (
            <option className="text-gray-300" key={index} value={product.name}>
              {product.name}
            </option>
          ))}
        </select>


        <div>
          <input name="merchantId" type="hidden" value="508029" />
          <input name="accountId" type="hidden" value="512321" />
          <input
            name="referenceCode"
            type="hidden"
            value={selectedProductReference}
          />
          <input name="amount" type="hidden" value={selectedProductPrice} />
          <input name="tax" type="hidden" value="0" />
          <input name="taxReturnBase" type="hidden" value="0" />
          <input name="currency" type="hidden" value="COP" />
          <input name="signature" type="hidden" value={md5Hash} />
          <input name="test" type="hidden" value="0" />
          <input name="responseUrl" type="hidden" value="/api/response" />
          <input
            name="confirmationUrl"
            type="hidden"
            value="/api/confirmation"
          />
        </div>
        <input
          name="submit"
          type="submit"
          value="Enviar"
          className="text-xl font-semibold py-2 hover:scale-105 hover:delay-75 hover:opacity-80 cursor-pointer px-4 bg-primaryBlue text-white rounded-lg lg:col-span-1"
        />
      </form>
      <DiscountCode
        cupon={cupon}
        setCupon={setCupon}
        verificarCupon={verificarCupon}
        cuponValido={cuponValido}
      />
      {cuponValido && <PaymentForm />}
    </section>
  );
}
