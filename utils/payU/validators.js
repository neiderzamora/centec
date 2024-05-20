export const handleVerification = ({ setErrorMessage, formData, FORM_PAYU, setFormCompleted }) => {
  const emptyFields = FORM_PAYU.filter((item) => !formData[item.name]);
  if (emptyFields.length > 0) {
    setErrorMessage("Por favor, complete todos los campos del formulario.");
    setTimeout(() => {
      setErrorMessage("");
    }, 10000);
  } else {
    const regexCedula = /^[0-9]+$/;
    if (!formData.extra1.trim() || !regexCedula.test(formData.extra1)) {
      setErrorMessage("Ingrese un número de cédula válido");
      return;
    }
    const regexTel = /^[0-9]+$/;
    if (!formData.mobilePhone.trim() || !regexTel.test(formData.mobilePhone)) {
      setErrorMessage("Ingrese un número de teléfono móvil válido");
      return;
    }
    const fullNameValidator = formData.buyerFullName.trim().split(" ");
    if (fullNameValidator.length < 3) {
      setErrorMessage('Ingrese su nombre completo en el formato "Nombre Apellido1 Apellido2"');
      return;
    }

    setFormCompleted(true);
  }
};
