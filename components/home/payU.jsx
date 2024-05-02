"use client"

import payUTransaction from "@/utils/payU/transaction"

function PayButton() {
  const handleClick = async () => {
    try {
      const response = await payUTransaction();
      console.log(response);
      // Aquí puedes manejar la respuesta de la transacción
    } catch (error) {
      console.error('Error al realizar la transacción', error);
    }
  };

  return (
    <button onClick={handleClick}>
      Pagar con PayU
    </button>
  );
}

export default PayButton;
