"use client";

import React, { useState } from "react";

export default function SchoolPaymentMethod({ product, onProductSchool }) {
  const [productSchool, setProductSchool] = useState(null);

  const handleProductSelect = (event) => {
    const selectedProductSchoolName = event.target.value;
    const selectedProductSchool = product.financing.find(
      (item) => item.name === selectedProductSchoolName
    );
    setProductSchool(selectedProductSchool);
    onProductSchool(selectedProductSchool);
  };
  
  //console.log(selectedProductSchoolName)
  return (
    <div className="text-white lg:col-span-1">
      <h2 className="text-xl font-semibold mb-4">Selecciona una opción:</h2>
      <div className="flex items-center mb-4">
        {product != undefined && (
          <ul>
            {product.financing.map((item, index) => (
              <li key={index} className="flex justify-between">
                <span>
                  <input
                    type="radio"
                    id={item.name}
                    name="item"
                    value={item.name}
                    checked={productSchool?.name === item.name}
                    onChange={handleProductSelect}
                    className="mr-2 ring-1 ring-inset ring-gray-300 placeholder:text-gray-800 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                  />
                  <label htmlFor={item.name}>{item.name}</label>
                </span>
                <span className="ml-2">{item.price.toLocaleString()}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
