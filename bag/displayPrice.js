export const displayPrice = (amount) => {
  if (Number.isInteger(amount)) {
    return `£${amount}`;
  }
  if (amount < 1) {
    return `${amount * 100}p`;
  }
  return `£${amount.toFixed(2)}`;
};
