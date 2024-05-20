export function calculateFinalPrice(validCoupon, selectedFee, selectedProduct, selectedProductPrice, paymentMethod, setFinalPrice, centecSelect, productSchool) {

  let final_price = selectedProductPrice;

  if (centecSelect.id === "labor_tecnicians") {
    if (validCoupon && selectedFee && selectedProduct) {
      if (paymentMethod !== "contado") {
        final_price = selectedFee.price;
      } else {
        final_price = selectedProduct.price_subsidies ?? selectedProductPrice;
      }
    } else if (validCoupon && !selectedFee && selectedProduct) {
      final_price = selectedProduct?.price_subsidies ?? selectedProductPrice;
    }
  }
  if (centecSelect.id === "school_products" ) {
    if (selectedProduct && productSchool){
      final_price = productSchool.price
    } 
  }

  setFinalPrice(final_price);
}
