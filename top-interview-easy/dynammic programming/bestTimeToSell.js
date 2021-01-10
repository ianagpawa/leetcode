/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let lowest = prices[0];
    let profit = 0;
    prices.forEach(x => {
       if (x < lowest) {
           lowest = x;
       } else if (x - lowest > profit) {
           profit = x - lowest;
       }
    });
    return profit;
};