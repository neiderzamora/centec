// app/api/route.js

"use client"

import http from 'http';

const PostPay = () => {
  const handlePago = () => {
    const options = {
      hostname: 'sandbox.api.payulatam.com',
      path: '/payments-api/4.0/service.cgi',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer z58rjJlt3AT8IEvyluu6L51R9T`,
      },
    };

    const req = http.request(options, (res) => {
      let data = '';

      res.on('data', (chunk) => {
        data += chunk;
      });

      res.on('end', () => {
        console.log('Respuesta de PayU:', data);
      });
    });

    req.on('error', (error) => {
      console.error('Error al hacer la petición:', error);
    });

    // Datos de la orden de pago (monto, descripción, etc.)
    // Utiliza tus propios datos aquí
    const orderData = {
      // ...
    };

    req.write(JSON.stringify(orderData));
    req.end();
  };

  return (
    <div>
      <button onClick={handlePago}>Realizar Pago</button>
    </div>
  );
};

export default PostPay;
