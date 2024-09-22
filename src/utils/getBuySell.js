function getBuySell(data) {
  const rateEntries = Object.entries(data.rates);
  const formattedRates = rateEntries.map((rateEntry) => {
    const [symbol, exchangeRate] = rateEntry;
    const rate = parseFloat(exchangeRate).toFixed(4);
    const buyRate = (rate * 0.95).toFixed(4);
    const sellRate = (rate * 1.05).toFixed(4);

    return {
      buyRate,
      sellRate,
      exchangeRate: rate,
      symbol,
    };
  });

  return { ...data, rates: formattedRates };
}

export default getBuySell;
