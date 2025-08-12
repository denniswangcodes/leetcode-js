function maxProfit(prices) {
  let minPrice = Infinity;   // Start with something larger than any possible price
  let maxProfit = 0;         // No profit yet

  for (let price of prices) {
    // Update the lowest price if today's price is lower
    if (price < minPrice) {
      minPrice = price;
    }
    // Calculate profit if we sold today
    let profit = price - minPrice;

    // Update maxProfit if today's profit is higher
    if (profit > maxProfit) {
      maxProfit = profit;
    }
  }

  return maxProfit;          // Max profit found over all days
}