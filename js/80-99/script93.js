// Day 93 LeetCode 121. (easy) Best Time to Buy and Sell Stock

// You are given an array prices where prices[i] is the price of a given stock on the ith day.

// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

var maxProfit = function(prices) {
    let minPrice = prices[0]
    let maxProfit = 0

    for(let i=1; i<prices.length; i++){
         // Calculate potential profit for the current day
        let potentialProfit = prices[i] - minPrice;

        // Update maximum profit if the potential profit is greater
        maxProfit = Math.max(maxProfit, potentialProfit);

        // Update the minimum price if the current day's price is lower
        minPrice = Math.min(minPrice, prices[i]);
    }
    return maxProfit;
}