// declaring & taking input from the user
var firstNumb = prompt("Enter The First Digit", 0);
var symbol = prompt("What Do You Want To Compute?\n+\n-\n*\n/\n%");
var secNumb = prompt("Enter The Second Digit", 0);
firstNumb = parseInt(firstNumb);
secNumb = parseInt(secNumb);
var output;

// conditions for different operations
if (symbol === "+") {
    output = firstNumb + secNumb;
} else if (symbol === "-") {
    output = firstNumb - secNumb;
} else if (symbol === "*") {
    output = firstNumb * secNumb;
    symbol = "X";
} else if (symbol === "/") {
    output = firstNumb / secNumb;
} else if (symbol === "%") {
    output = firstNumb % secNumb;
}

// finally simple HTML for displaying the result on the browser
document.write("<h1>Calculator</h1>");
document.write("First Digit: " + firstNumb);
document.write("<br>Computation: " + symbol);
document.write("<br>Second Digit: " + secNumb);
document.write("<br>Output: " + output);
