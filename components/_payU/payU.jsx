"use client";

import { useState, useEffect } from "react";

import { API_KEY, MERCHAND_ID, CURRENCY } from "@/utils/payU/sandbox_account";
import { calculateMD5 } from "@/utils/payU/create_hash";
import { PRODUCTS } from "@/utils/payU/products";
import { FORM_PAYU } from "@/utils/payU/inputs";
import PaymentForm from "../admissions-financing/payment_method";
import Coupon from "./discount_code";

export default function FormPayU() {
  const [formData, setFormData] = useState({});
  const [errors, setErrors] = useState({});

  const [selectedProductName, setSelectedProductName] = useState("");
  const [selectedProductPrice, setSelectedProductPrice] = useState(0);
  const [selectedProductReference, setSelectedProductReference] = useState(0);

  const [showDiscountCode, setShowDiscountCode] = useState(false);

  const [coupon, setCoupon] = useState("");
  const [validCoupon, setValidCoupon] = useState(false);
  const [selectedFee, setSelectedFee] = useState(null);

  const [finalPrice, setFinalPrice] = useState(0);
  const [paymentMethod, setPaymentMethod] = useState("");

  const selectedProduct = PRODUCTS.find(
    (product) => product.name === selectedProductName
  );

  const handlePaymentMethodChange = (selectedPaymentMethod) => {
    setPaymentMethod(selectedPaymentMethod);
    if (selectedPaymentMethod === "contado") {
      setSelectedFee(null);
    }
  };

  const CheckCoupon = () => {
    if (coupon.toUpperCase() === "REGALO") {
      setValidCoupon(true);
    } else {
      setValidCoupon(false);
    }
  };

  const handleFeeSelect = (fee) => {
    setSelectedFee(fee);
  };

  const CALCULATE_FINAL_PRICE = () => {
    let final_price = selectedProductPrice;

    if (validCoupon && selectedFee && selectedProduct) {
      if (paymentMethod != "contado") {
        final_price = selectedFee.price;
      } else {
        final_price = selectedProduct.price_subsidies ?? selectedProductPrice;
      }
    }

    if (validCoupon && !selectedFee && selectedProduct) {
      final_price = selectedProduct?.price_subsidies ?? selectedProductPrice;
    }

    setFinalPrice(final_price);
  };

  useEffect(() => {
    CALCULATE_FINAL_PRICE();
  }, [selectedProductName, selectedFee, validCoupon]);

  const handleProductChange = (event) => {
    const productName = event.target.value;
    setSelectedProductName(productName);
    const selectedProduct = PRODUCTS.find(
      (product) => product.name === productName
    );
    if (selectedProduct) {
      setSelectedProductPrice(selectedProduct.price);
      setSelectedProductReference(selectedProduct.reference);
    } else {
      setSelectedProductPrice(0);
      setSelectedProductReference(0);
    }
    setShowDiscountCode(selectedProduct !== "");
  };

  
  const md5Hash = calculateMD5(
    API_KEY,
    MERCHAND_ID,
    selectedProductReference,
    finalPrice,
    CURRENCY
  );
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (value.trim() === "") {
      setErrors({
        ...errors,
        [name]: "Este campo no puede estar vacío",
      });
      return;
    }
    setErrors({
      ...errors,
      [name]: "",
    });
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Evita que el formulario se envíe automáticamente
  
    // Verifica si hay algún campo vacío en el formData
    for (const key in formData) {
      if (formData[key].trim() === "") {
        setErrors({
          ...errors,
          [key]: "Este campo no puede estar vacío",
        });
        return; // Detiene el envío del formulario si hay campos vacíos
      }
    }
  
    // Si no hay campos vacíos, puedes continuar con el envío del formulario
    // Aquí podrías realizar otras validaciones necesarias
  
    // Envío del formulario
    e.target.submit();
  };
  

  const renderError = (fieldName) => {
    return errors[fieldName] && (
      <div className="text-red-500 text-xs mt-1">{errors[fieldName]}</div>
    );
  };
  
  return (
    <section className="pt-6">
      {selectedProductName && (
        <div className="flex justify-between text-sm lg:text-xl mb-2 py-3 px-3 lg:px-6 font-semibold rounded-2xl bg-gradient-to-l from-secondaryGreen to-primaryBlue">
          <p>{selectedProductName}</p>
          <p>
            {finalPrice.toLocaleString()} {" "}
            COP
          </p>
        </div>
      )}
      <form
      onSubmit={handleSubmit}
        className="p-2 text-gray-600 grid grid-cols-1 lg:grid-cols-2 gap-4"
        method="post"
        action="https://sandbox.checkout.payulatam.com/ppp-web-gateway-payu/"
      >
        {FORM_PAYU.map((item, index) => (
          <div className="" key={index}>
            <input
              className="p-2 w-full rounded-sm bg-secondaryDarkBlue border border-gray-200/50 text-white shadow-sm focus-within:ring-1 focus-within:ring-inset focus-within:ring-secondaryGreen"
              name={item.name}
              type={item.type}
              placeholder={item.placeholder}
              value={formData[item.name]}
              onChange={handleChange}
            />
              {renderError(item.name)}
          </div>
        ))}

        <select
          name="description"
          className="bg-secondaryDarkBlue border border-gray-200/50 text-gray-400 rounded-md text-lg font-semibold p-2 pl-0.5 lg:col-span-2 shadow-sm focus-within:ring-1 focus-within:ring-inset focus-within:ring-secondaryGreen"
          value={selectedProductName}
          onChange={handleProductChange}
        >
          <option value="" className="text-gray-300">
            Selecciona un producto
          </option>
          {PRODUCTS.map((product, index) => (
            <option className="text-gray-300" key={index} value={product.name}>
              {product.name}
            </option>
          ))}
        </select>

        {validCoupon && (
          <PaymentForm
            product={selectedProduct}
            onFeeSelect={handleFeeSelect}
            onPaymentMethodChange={handlePaymentMethodChange}
          />
        )}

        <div className="hidden">
          <input name="merchantId" type="hidden" value="508029" />
          <input name="accountId" type="hidden" value="512321" />
          <input
            name="referenceCode"
            type="hidden"
            value={selectedProductReference}
          />
          <input name="amount" type="hidden" value={finalPrice} />
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
          value="Proceder al pago"
          className="text-xl font-semibold py-2 hover:scale-105 hover:delay-75 hover:opacity-80 cursor-pointer px-4 bg-primaryBlue text-white rounded-lg lg:col-span-2"
        />
      </form>
      {showDiscountCode && selectedProductName !== "" && (
        <Coupon
          coupon={coupon}
          setCoupon={setCoupon}
          checkCoupon={CheckCoupon}
          validCoupon={validCoupon}
        />
      )}
    </section>
  );
}
