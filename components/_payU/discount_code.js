import React, { useState } from 'react';

export default function DiscountCode() {
    const [cupon, setCupon] = useState('');
    const [cuponValido, setCuponValido] = useState(false);
    const [mensaje, setMensaje] = useState('');
  
    const verificarCupon = () => {
      // Verificar si el cupón es válido (en este caso, si es igual a "regalo")
      if (cupon.toUpperCase() === 'REGALO') {
        setCuponValido(true);
        setMensaje('¡Felicidades! Cupón válido.');
      } else {
        setCuponValido(false);
        setMensaje('Lo siento, el cupón no es válido.');
      }
    };
  return (
    
      <div className="mt-8 grid grid-cols-1 lg:grid-cols-5 gap-3">
        <label
          className="text-white text-left text-lg font-semibold col-span-5"
          htmlFor=""
        >
          ¿Tienes un cupón?
          </label>
          <input
        type="text"
        className="p-2 text-gray-800 text-lg font-semibold lg:col-span-2"
        value={cupon}
        onChange={(e) => setCupon(e.target.value)}
        placeholder="Introduce tu cupón"
      />
      <button
        className="text-md font-semibold py-1 hover:scale-105 hover:delay-75 hover:opacity-80 cursor-pointer px-4 bg-primaryGreen text-white rounded-lg"
        onClick={verificarCupon}
      >
        Verificar Cupón
      </button>
      {mensaje && <p className='text-left'>{mensaje}</p>}
      </div>
    
  );
}
