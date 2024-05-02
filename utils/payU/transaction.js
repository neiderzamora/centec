const PAYU_API_URL = "https://sandbox.api.payulatam.com/payments-api/4.0/service.cgi"; // URL de prueba

async function payUTransaction() {
  const transactionData = {
    language: "es",
    command: "SUBMIT_TRANSACTION",
    merchant: {
      apiKey: "z58rjJlt3AT8IEvyluu6L51R9T",
      apiLogin: "VGsSK0A27omP5AJ",
    },
    transaction: {
      order: {
        accountId: "1007567",
        referenceCode: "PRODUCT_TEST_2021-06-23T19:59:43.229Z",
        description: "Payment test description",
        language: "es",
        //notifyUrl: "http://www.payu.com/notify",
        additionalValues: {
          TX_VALUE: {
            value: 65000,
            currency: "COP",
          },
          TX_TAX: {
            value: 10378,
            currency: "COP",
          },
          TX_TAX_RETURN_BASE: {
            value: 54622,
            currency: "COP",
          },
        },
        buyer: {
          merchantBuyerId: "1",
          fullName: "First name and second buyer name",
          emailAddress: "buyer_test@test.com",
          contactPhone: "7563126",
          dniNumber: "123456789",
          shippingAddress: {
            street1: "Cr 23 No. 53-50",
            street2: "5555487",
            city: "Bogotá",
            state: "Bogotá D.C.",
            country: "CO",
            postalCode: "000000",
            phone: "7563126",
          },
        },
        shippingAddress: {
          street1: "Cr 23 No. 53-50",
          street2: "5555487",
          city: "Bogotá",
          state: "Bogotá D.C.",
          country: "CO",
          postalCode: "0000000",
          phone: "7563126",
        },
      },
      payer: {
        merchantPayerId: "1",
        fullName: "First name and second payer name",
        emailAddress: "payer_test@test.com",
        contactPhone: "7563126",
        dniNumber: "5415668464654",
        billingAddress: {
          street1: "Cr 23 No. 53-50",
          street2: "125544",
          city: "Bogotá",
          state: "Bogotá D.C.",
          country: "CO",
          postalCode: "000000",
          phone: "7563126",
        },
      },
      extraParameters: {
        RESPONSE_URL: "http://www.payu.com/response",
        PSE_REFERENCE1: "127.0.0.1",
        FINANCIAL_INSTITUTION_CODE: "1022",
        USER_TYPE: "N",
        PSE_REFERENCE2: "CC",
        PSE_REFERENCE3: "123456789",
      },
      type: "AUTHORIZATION_AND_CAPTURE",
      paymentMethod: "PSE",
      paymentCountry: "CO",
      deviceSessionId: "vghs6tvkcle931686k1900o6e1",
      ipAddress: "127.0.0.1",
      cookie: "pt1t38347bs6jc9ruv2ecpv7o2",
      userAgent:
        "Mozilla/5.0 (Windows NT 5.1; rv:18.0) Gecko/20100101 Firefox/18.0",
    },
    test: true,
  };

  try {
    const response = await fetch(PAYU_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(transactionData),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Error during transaction:", error);
    throw error; // Re-throw the error to propagate it
  }
}

// Manejo de la promesa devuelta por la función payUTransaction
payUTransaction()
  .then((response) => {
    console.log("Transaction response:", response);
  })
  .catch((error) => {
    console.error("Transaction failed:", error);
  });
