import React, { useState } from 'react';
import { HiCheckCircle } from "react-icons/hi";
import { HiXCircle } from "react-icons/hi";

const Coupon = ({ coupon, setCoupon, checkCoupon, validCoupon }) => {
  const [pressBtn, setPressBtn] = useState(false); 

  const handleChange = (e) => {
    setCoupon(e.target.value);
  };

  const handleCheckCoupon = () => {
    checkCoupon();
    setPressBtn(true);
  };

  return (
    <div className='mt-8 grid grid-cols-6 gap-2 p-2'>
      <input
        type="text"
        className="px-2 py-1 text-gray-700 rounded-sm text-md col-span-3 lg:col-span-2 shadow-sm focus-within:ring-1 focus-within:ring-inset focus-within:ring-secondaryGreen"
        value={coupon}
        onChange={handleChange}
        placeholder="Introduce tu cupón"
      />
      <button className="text-md font-semibold py-0.5 col-span-2 lg:col-span-1 hover:scale-105 hover:delay-75 hover:opacity-80 cursor-pointer px-4 bg-secondaryGreen text-white rounded-md" onClick={handleCheckCoupon}>Verificar</button>
      {pressBtn && (
        <>
          {validCoupon && (
            <div className='text-green-500 col-span-6 flex items-center justify-start'><HiCheckCircle className="inline-flex w-6 h-full mr-1" /> <span>¡Cupón válido! ¡Disfruta tu regalo!</span> </div>
          )}
          {!validCoupon && (
            <div className='text-red-500 col-span-6 flex items-center justify-start'><HiXCircle className="inline-flex w-6 h-full mr-1" /><span>Lo siento, el cupón no es válido.</span></div>
          )}
        </>
      )}
    </div>
  );
};

export default Coupon;
