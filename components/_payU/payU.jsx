"use client";

import { useState, useEffect } from "react";

import { API_KEY, MERCHAND_ID, CURRENCY } from "@/utils/payU/sandbox_account";
import { calculateMD5 } from "@/utils/payU/create_hash";
import { FORM_PAYU } from "@/utils/payU/inputs";
import PaymentForm from "../admissions-financing/payment_method";
import SchoolPaymentMethod from "./school_payment_method";
import useGenerateHash from "@/utils/payU/create_hash_reference";
import Coupon from "./discount_code";
import { handleVerification } from "@/utils/payU/validators";

import { getProductDescription } from "@/utils/payU/description_product";
import { calculateFinalPrice } from "@/utils/payU/final_price";

export default function FormPayU({ centecSelect }) {
  const [formData, setFormData] = useState({});

  const [selectedProductName, setSelectedProductName] = useState("");
  const [selectedProductPrice, setSelectedProductPrice] = useState(0);
  const [selectedProductReference, setSelectedProductReference] = useState(0);

  const [showDiscountCode, setShowDiscountCode] = useState(false);

  const [coupon, setCoupon] = useState("");
  const [validCoupon, setValidCoupon] = useState(false);
  const [selectedFee, setSelectedFee] = useState(null);

  const [finalPrice, setFinalPrice] = useState(0);
  const [paymentMethod, setPaymentMethod] = useState("");
  const [productSchool, setProductSchool] = useState("");
  const [formCompleted, setFormCompleted] = useState(false);

  const [errorMessage, setErrorMessage] = useState("");

  const selectedProduct = centecSelect.items.find(
    (product) => product.name === selectedProductName
  );

  const handleSubmit = () => {
    handleVerification({
      setErrorMessage,
      formData,
      FORM_PAYU,
      setFormCompleted,
    });
  };

  const hash = useGenerateHash();

  const md5Hash = calculateMD5(
    API_KEY,
    MERCHAND_ID,
    hash,
    finalPrice,
    CURRENCY
  );

  const productDescription = getProductDescription(
    selectedProductName,
    validCoupon,
    selectedFee,
    paymentMethod,
    centecSelect,
    productSchool,
    formData
  );

  const handleProductSchool = (selectedProductSchool) => {
    setProductSchool(selectedProductSchool);
  };

  const handlePaymentMethodChange = (selectedPaymentMethod) => {
    setPaymentMethod(selectedPaymentMethod);
    if (selectedPaymentMethod === "contado") {
      setSelectedFee(null);
    }
  };

  const CheckCoupon = () => {
    if (coupon.toUpperCase() === "CENTEC@24") {
      setValidCoupon(true);
    } else {
      setValidCoupon(false);
    }
  };

  const handleFeeSelect = (fee) => {
    setSelectedFee(fee);
  };

  useEffect(() => {
    calculateFinalPrice(
      validCoupon,
      selectedFee,
      selectedProduct,
      selectedProductPrice,
      paymentMethod,
      setFinalPrice,
      centecSelect,
      productSchool
    );
  }, [
    selectedProductName,
    selectedFee,
    validCoupon,
    selectedProductPrice,
    paymentMethod,
    setFinalPrice,
    centecSelect,
    productSchool,
  ]);

  const handleProductChange = (event) => {
    const productName = event.target.value;
    setSelectedProductName(productName);
    const selectedProduct = centecSelect.items.find(
      (product) => product.name === productName
    );
    if (selectedProduct) {
      setSelectedProductPrice(selectedProduct.price);
      setSelectedProductReference(hash);
    } else {
      setSelectedProductPrice(0);
      setSelectedProductReference(0);
    }
    setShowDiscountCode(selectedProduct !== "");
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  console.log(selectedProductReference);

  return (
    <section className="pt-6">
      {selectedProductName && (
        <div className="grid justify-between text-sm grid-cols-5 lg:grid-cols-3 lg:text-xl mb-2 gap-12 lg:gap-2 py-3 px-3 lg:px-6 font-semibold rounded-2xl text-left bg-gradient-to-l from-secondaryGreen to-primaryBlue">
          <p className="col-span-3 lg:col-span-2">{selectedProductName}</p>
          <p className="col-span-2 lg:col-span-1 flex items-center justify-end p-1">
            {finalPrice.toLocaleString()} COP
          </p>
        </div>
      )}
      <form
        className="p-2 text-gray-600 grid grid-cols-1 lg:grid-cols-2 gap-4"
        method="post"
        action="https://checkout.payulatam.com/ppp-web-gateway-payu/"
        target="_blank"
      >
        {FORM_PAYU.map((item, index) => (
          <div className="" key={index}>
            <input
              className="p-2 w-full rounded-sm bg-secondaryDarkBlue border border-gray-200/50 text-white shadow-sm focus-within:ring-1 focus-within:ring-inset focus-within:ring-secondaryGreen"
              name={item.name}
              title="Ingrese un valor"
              type={item.type}
              placeholder={item.placeholder}
              value={formData[item.name]}
              onChange={handleChange}
            />
          </div>
        ))}
        {centecSelect.id === "school_products" && (
          <input
            name="extra3"
            type="text"
            placeholder="ID Centec del Estudiante"
            value={formData.name}
            onChange={handleChange}
            className="p-2 w-full lg:col-span-2 rounded-sm bg-secondaryDarkBlue border border-gray-200/50 text-white shadow-sm focus-within:ring-1 focus-within:ring-inset focus-within:ring-secondaryGreen"
          />
        )}
        {errorMessage && (
          <p className="text-red-500 lg:col-span-2">{errorMessage}</p>
        )}

        <select
          name="select_course"
          className="bg-secondaryDarkBlue border border-gray-200/50 text-gray-300 rounded-md text-lg font-semibold p-2 pl-0.5 lg:col-span-2 shadow-sm focus-within:ring-1 focus-within:ring-inset focus-within:ring-secondaryGreen"
          value={selectedProductName}
          onChange={handleProductChange}
        >
          <option value="" className="text-gray-400">
            Selecciona un item
          </option>
          {centecSelect.items.map((product, index) => (
            <option className="text-gray-200" key={index} value={product.name}>
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

        {centecSelect.id === "school_products" && selectedProduct && (
          <SchoolPaymentMethod
            product={selectedProduct}
            onProductSchool={handleProductSchool}
          />
        )}

        <div className="hidden">
          <input name="merchantId" type="hidden" value="1007567" />
          <input name="accountId" type="hidden" value="1016348" />
          <input name="description" type="hidden" value={productDescription} />
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
        </div>

        {formCompleted ? (
          <input
            name="submit"
            type="submit"
            value="Proceder al pago"
            className="text-xl font-semibold py-2 hover:scale-105 hover:delay-75 hover:opacity-80 cursor-pointer px-4 bg-primaryBlue text-white rounded-lg lg:col-span-2"
          />
        ) : (
          <div
            className="text-xl font-semibold py-2 hover:scale-105 hover:delay-75 text-center hover:opacity-80 cursor-pointer px-4 bg-primaryBlue text-white rounded-lg lg:col-span-2"
            onClick={handleSubmit}
          >
            Proceder al pago
          </div>
        )}
      </form>

      {showDiscountCode &&
        selectedProductName !== "" &&
        centecSelect.id === "labor_tecnicians" && (
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
