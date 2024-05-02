const PAYU_API_URL = 'https://sandbox.api.payulatam.com/payments-api/4.0/service.cgi'; // URL de prueba

async function payUTransaction() {
  const transactionData = {
    test: true,
    language: 'es',
    command: 'SUBMIT_TRANSACTION',
    merchant: {
      apiKey: 'z58rjJlt3AT8IEvyluu6L51R9T', // Reemplaza con tu API Key
      apiLogin: 'VGsSK0A27omP5AJ' // Reemplaza con tu API Login
    },
    transaction: {
      order: {
        accountId: '512321', // Reemplaza con tu Account ID
        referenceCode: 'TestPayU',
        description: 'payment test',
        language: 'es',
        signature: '7ee7cf808ce6a39b17481c54f2c57acc', // Reemplaza con tu firma
        additionalValues: {
          TX_VALUE: {
            value: 4000,
            currency: 'COP'
          }
        },
        buyer: {
          // Detalles del comprador
        },
        shippingAddress: {
          // Dirección de envío
        }
      },
      paymentMethod: 'PSE',
      paymentCountry: 'CO',
      deviceSessionId: 'vghs6tvkcle931686k1900o6e1',
      ipAddress: '127.0.0.1',
      cookie: 'pt1t38347bs6jc9ruv2ecpv7o2',
      userAgent: 'Mozilla/5.0 (Windows NT 5.1; rv:18.0) Gecko/20100101 Firefox/18.0'
    }
  };

  const response = await fetch(PAYU_API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(transactionData),
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return await response.json();
}

payUTransaction();
