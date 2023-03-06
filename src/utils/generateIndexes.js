const generateIndexes = (length, amountMin, amountMax = amountMin) => {
  if (amountMin >= length || amountMax >= length || amountMax < amountMin) return [0];

  const result = [];
  const amount = Math.floor(Math.random() * (amountMax - amountMin)) + amountMin;
  while (result.length < amount) {
    const newIndex = Math.floor(Math.random() * length);
    if (!result.includes(newIndex)) result.push(newIndex);
  }
  return result;
};

module.exports = generateIndexes;
