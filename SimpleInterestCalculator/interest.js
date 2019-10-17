// compound interest calculation

var presentValue = 10000; // also called the initial investment
var futureValue; // your $ amount after added interest
var rate = 0.13; // the rate of interest you get per annum
var n = 4; // # of years your investment sits in the bank or whatever

futureValue = presentValue * (Math.pow((1 + rate), n)); 
futureValue = Math.round(futureValue);

console.log("Your Initial Investment: $" + presentValue);
console.log("Interest Earned: $" + (futureValue - presentValue));
console.log("Your Investment Now Stands At: $" + futureValue);

