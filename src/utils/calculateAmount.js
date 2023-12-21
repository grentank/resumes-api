function calculateAmount(queryAmount) {
  if (!queryAmount) return 10;
  const amount = parseInt(queryAmount, 10);
  if (Number.isNaN(amount)) return 10;
  if (amount < 1) return 1;
  if (amount > 50) return 50;
  return amount;
}

module.exports = calculateAmount;
