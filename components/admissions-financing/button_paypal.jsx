"use client";

import React, { useState } from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

const products = [
  {name: "course one", price: 30.00, price_complete: 100.00, price_subsidies: 50.00, price_subsidies_f_one: 10.00, price_subsidies_f_two: 12.00},
  {name: "course two", price: 40.00, price_complete: 100.00, price_subsidies: 50.00, price_subsidies_f_one: 10.00, price_subsidies_f_two: 12.00},
  {name: "course three", price: 50.00, price_complete: 100.00, price_subsidies: 50.00, price_subsidies_f_one: 10.00, price_subsidies_f_two: 12.00},
];

const COURSES = [
  { name: "Saneamiento Ambiental", price: 820.0 },
  { name: "Asistente Social y Comunitario", price: 820.0 },
  { name: "Investigación Criminalistica y Judicial", price: 820.0 },
  { name: "Preparación Física y Deportes", price: 770.0 },
  { name: "Operaciones Comerciales en Retail", price: 770.0 },
  { name: "Producción Agrícola", price: 770.0 },
  { name: "Tránsito y Seguridad Vial", price: 770.0 },
  { name: "Asistencia Administrativa", price: 825.0 },
  { name: "Atención Integral a la Primera Infancia", price: 825.0 },
  { name: "Seguridad en el Trabajo", price: 825.0 },
  { name: "Sistemas Informáticos", price: 825.0 },
  { name: "Producción de Hidrocarburos", price: 950.0 },
  { name: "Soldadura", price: 950.0 },
  { name: "Auxiliar Administrativo", price: 780.0 },
  { name: "Auxiliar Contable y Financiero", price: 780.0 },
  { name: "Auxiliar en Talento Humano", price: 780.0 },
  { name: "Asistente de Preescolar", price: 780.0 },
  { name: "Perforador Pozos de Petróle y Gas", price: 1020.0 },
  { name: "Mecánico de Motores Diésel", price: 1020.0 },
  { name: "Electricista Industrial", price: 1020.0 },
  { name: "Operador de Equipo Pesado", price: 1020.0 },
  { name: "Oficial de Construcción", price: 1020.0 },
  { name: "Modisto/a", price: 1020.0 },
  { name: "Estilista", price: 1020.0 },
  { name: "Cocinero Principal", price: 1020.0 },
];

const ButtonPaypal = () => {
  const [selectedProductName, setSelectedProductName] = useState("");

  const handleProductChange = (event) => {
    setSelectedProductName(event.target.value);
  };
  console.log(process.env.PAYPAL_CLIENT_ID);
  const handleCreateOrder = async () => {
    const product = products.find(
      (product) => product.name === selectedProductName
    );

    if (product) {
      try {
        const res = await fetch("/api/checkout", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(product),
        });

        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        const order = await res.json();
        return order.id;
      } catch (error) {
        console.error("Error al crear la orden:", error);
      }
    }
  };

  return (
    <section className="p-2 grid grid-cols-1 gap-4">
      <PayPalScriptProvider
        options={{
          clientId:
            "AY52Lwk5hegcAFdmfh34YUNBLCh6n3_a8-hO8Pw8na068p-vL2BGki1ljfEY1_AgqvYCEqchvDAyP1eA",
          locale: "es_ES",
        }}
      >
        <select
          className="bg-gray-50 rounded-md text-gray-700 text-lg font-semibold p-4 px-4 text-center"
          value={selectedProductName}
          onChange={handleProductChange}
        >
          <option value="">Selecciona un producto</option>
          {products.map((product, index) => (
            <option
              className="font-normal text-gray-600"
              key={index}
              value={product.name}
            >
              {product.name}
            </option>
          ))}
        </select>

        {selectedProductName && (
          <div className="p-2 rounded-lg bg-gradient-to-t from-white/90 to-white/30">
            <PayPalButtons
              style={{ color: "white" }}
              createOrder={handleCreateOrder}
            />
          </div>
        )}
      </PayPalScriptProvider>
    </section>
  );
};

export default ButtonPaypal;
