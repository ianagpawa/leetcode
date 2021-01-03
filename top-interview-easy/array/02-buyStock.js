/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    if (prices.length < 2) { return 0; }
    let profit = 0;
    let previousInd = 0;
    for (let i = 1; i < prices.length; i++) {
        const diff = prices[i] - prices[previousInd];
        if (diff > 0) { profit += diff; }
        previousInd += 1;
    }
    return profit;
};