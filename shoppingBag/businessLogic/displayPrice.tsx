export const displayPrice = (amount?: number) => {
  if (amount === undefined) {
    return "";
  }
  if (Number.isInteger(amount)) {
    return `£${amount}`;
  }
  if (amount < 1) {
    return `${amount * 100}p`;
  }
  return `£${amount.toFixed(2)}`;
};
