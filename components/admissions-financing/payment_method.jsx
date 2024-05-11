"use client"

import { useState } from 'react';

const PaymentForm = () => {
  const [paymentMethod, setPaymentMethod] = useState('');

  return (
    <div className='text-white lg:col-span-1'>
      <h2 className="text-xl font-semibold mb-4">Selecciona el tipo de financiacion:</h2>
      <div className="flex items-center mb-4">
        <input
          type="radio"
          id="tarjeta"
          name="paymentMethod"
          value="tarjeta"
          checked={paymentMethod === 'tarjeta'}
          onChange={() => setPaymentMethod('tarjeta')}
          className="mr-2"
        />
        <label htmlFor="tarjeta" className="mr-4">Tarjeta</label>

        <input
          type="radio"
          id="contado"
          name="paymentMethod"
          value="contado"
          checked={paymentMethod === 'contado'}
          onChange={() => setPaymentMethod('contado')}
          className="mr-2"
        />
        <label htmlFor="contado">Contado</label>
      </div>

      {paymentMethod === 'tarjeta' && (
        <button className="bg-blue-500 text-white py-2 px-4 rounded">Pagar con Tarjeta</button>
      )}

      {paymentMethod === 'contado' && (
        <button className="bg-green-500 text-white py-2 px-4 rounded">Pagar de Contado</button>
      )}
    </div>
  );
};

export default PaymentForm;
