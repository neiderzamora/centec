export function checkCoupon(setValidCoupon) {
  if (coupon.toUpperCase() === "REGALO") {
    setValidCoupon(true);
  } else {
    setValidCoupon(false);
  }
}
