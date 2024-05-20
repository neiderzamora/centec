"use client";

import React, { useState, useEffect } from "react";

const PaymentForm = ({ product, onFeeSelect, onPaymentMethodChange }) => {
  const [paymentMethod, setPaymentMethod] = useState("contado");
  const [selectedFee, setSelectedFee] = useState(null);

  const handlePaymentMethodChange = (event) => {
    const selectedPaymentMethod = event.target.value;
    setPaymentMethod(selectedPaymentMethod);
    onPaymentMethodChange(selectedPaymentMethod);
  };

  const handleFeeChange = (event) => {
    const selectedFeeName = event.target.value;
    const selectedFee = product.financing.find(
      (fee) => fee.name === selectedFeeName
    );
    setSelectedFee(selectedFee);
    onFeeSelect(selectedFee);
  };

  const handleFeeTwoChange = (event) => {
    const selectedFeeName = event.target.value;
    const selectedFee = product.financing_two.find(
      (fee) => fee.name === selectedFeeName
    );
    setSelectedFee(selectedFee);
    onFeeSelect(selectedFee);
  };

  useEffect(() => {
    if (paymentMethod === "plan_de_financiacion_uno" && product.financing.length > 0) {
      setSelectedFee(product.financing[0]);
      onFeeSelect(product.financing[0]);
    } else if (
      paymentMethod === "plan_de_financiacion_dos" &&
      product.financing_two.length > 0
    ) {
      setSelectedFee(product.financing_two[0]);
      onFeeSelect(product.financing_two[0]);
    }
  }, [paymentMethod, product.financing, product.financing_two]);

  return (
    <div className="text-white lg:col-span-1">
      <h2 className="text-xl font-semibold mb-4">
        Selecciona el tipo de financiacion:
      </h2>
      <div className="flex items-center mb-4">
        <input
          type="radio"
          id="contado"
          name="paymentMethod"
          value="contado"
          checked={paymentMethod === "contado"}
          onChange={handlePaymentMethodChange}
          className="mr-2 h-4 w-4 border-gray-300 text-secondaryGreen focus:ring-secondaryGreen"
        />
        <label htmlFor="contado" className="mr-4">
          Contado
        </label>
        <input
          type="radio"
          id="plan_de_financiacion_uno"
          name="paymentMethod"
          value="plan_de_financiacion_uno"
          checked={paymentMethod === "plan_de_financiacion_uno"}
          onChange={handlePaymentMethodChange}
          className="mr-2 h-4 w-4 border-gray-300 text-secondaryGreen focus:ring-secondaryGreen"
        />
        <label htmlFor="plan_de_financiacion_uno" className="mr-4">
          Tipo 1
        </label>

        <input
          type="radio"
          id="plan_de_financiacion_dos"
          name="paymentMethod"
          value="plan_de_financiacion_dos"
          checked={paymentMethod === "plan_de_financiacion_dos"}
          onChange={handlePaymentMethodChange}
          className="mr-2 h-4 w-4 border-gray-300 text-secondaryGreen focus:ring-secondaryGreen"
        />
        <label htmlFor="plan_de_financiacion_dos" className="mr-4">
          Tipo 2
        </label>
      </div>

      {paymentMethod === "plan_de_financiacion_uno" && (
        <div>
          <ul>
            {product.financing.map((fee, index) => (
              <li key={index} className="flex justify-between">
                <span>
                  <input
                    type="radio"
                    id={fee.name}
                    name="fee"
                    value={fee.name}
                    checked={selectedFee === fee}
                    onChange={handleFeeChange}
                    className="mr-2"
                  />
                  <label htmlFor={fee.name}>{fee.name}</label>
                </span>
                <span className="ml-2">{fee.price.toLocaleString()}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {paymentMethod === "plan_de_financiacion_dos" && (
        <div>
          <ul>
            {product.financing_two.map((fee, index) => (
              <li key={index} className="flex justify-between">
                <span>
                  <input
                    type="radio"
                    id={fee.name}
                    name="fee"
                    value={fee.name}
                    checked={selectedFee === fee}
                    onChange={handleFeeTwoChange}
                    className="mr-2"
                  />
                  <label htmlFor={fee.name}>{fee.name}</label>
                </span>
                <span className="ml-2">{fee.price.toLocaleString()}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default PaymentForm;
