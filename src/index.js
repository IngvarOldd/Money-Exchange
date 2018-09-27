// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    // Your code goes here!
    // Return an object containing the minimum number of coins needed to make change
    if (currency > 10000) {
        return {error: "You are rich, my friend! We don't have so much coins for exchange"};
    }
    if (currency <= 0) {
        return {};
    }
    let h = parseInt(currency/50);
    let q = parseInt(currency%50/25);
    let d = parseInt((currency - h*50 - q*25)/10);
    let n = parseInt((currency - h*50 - q*25 - d*10)/5);
    let p = currency - h*50 - q*25 - d*10 - n*5;
    let answer = {"H": h, "Q": q, "D": d, "N": n, "P": p};
    for (let key in answer) {
        if (answer[key] == 0) {
            delete answer[key];
        }
    }
    return answer;
}
