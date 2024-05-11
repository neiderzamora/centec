import React from 'react';

const CuponComponent = ({ cupon, setCupon, verificarCupon, cuponValido }) => {
  const handleChange = (e) => {
    setCupon(e.target.value);
  };

  const handleVerificarCupon = () => {
    verificarCupon();
  };

  return (
    <div>
      <input
        type="text"
        className="p-2 text-gray-800 text-lg font-semibold lg:col-span-2"
        value={cupon}
        onChange={handleChange}
        placeholder="Introduce tu cupón"
      />
      <button className="text-md font-semibold py-1 hover:scale-105 hover:delay-75 hover:opacity-80 cursor-pointer px-4 bg-primaryGreen text-white rounded-lg" onClick={handleVerificarCupon}>Verificar Cupón</button>
      {cuponValido && (
        <p style={{ color: 'green', marginTop: '10px' }}>¡Cupón válido! ¡Disfruta tu regalo!</p>
      )}
      {!cuponValido && cupon.length > 0 && (
        <p style={{ color: 'red', marginTop: '10px' }}>Lo siento, el cupón no es válido.</p>
      )}
    </div>
  );
};

export default CuponComponent;
