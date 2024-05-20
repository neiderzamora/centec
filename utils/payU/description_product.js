export function getProductDescription(
  productName,
  hasCoupon,
  selectedFee,
  paymentMethod,
  centecSelect,
  producSchool
) {
  let description = `${productName} --`;
  const selectedProduct = centecSelect.items.find(
    (product) => product.name === productName
  );

  if (centecSelect.id === "labor_tecnicians") {
    description += hasCoupon
      ? `\nSubsidio Aplicado --\n${
          selectedFee
            ? `Producto: ${selectedFee.name} --\n${paymentMethod}`
            : "Tipo de pago: Contado"
        }`
      : "\nSubsidio No Aplicado --";
  } else if (centecSelect.id === "school_products") {
    description += `\n${centecSelect.type} -- \n${producSchool.name ?? ''}`;
  } else if (centecSelect.id === "continuing_education") {
    description += `\n${selectedProduct?.type ?? ''}`;
  }

  return description;
}
