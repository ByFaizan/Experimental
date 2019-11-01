var x = [55, 65, 97, 65, 66, 77, 79]; //enter any collection of data


var len = x.length;
var sum = 0;
for (var i = 0; i < len; i++) {
    sum += x[i];
}

var xBar = (sum / len); //fancy way to write mean
console.log("Mean: " + xBar)

var xMinusxBarSqd = [];
for (var i = 0; i < len; i++) {
    xMinusxBarSqd[i] = Math.pow((x[i] - xBar), 2);
}

var standardDeviation = 0;
for (var i = 0; i < len; i++) {
    standardDeviation += xMinusxBarSqd[i];
}

// getting the final value
var sd = Math.sqrt(standardDeviation / len)
sd = sd.toFixed(2)
console.log("Standard Deviation: " + sd);



