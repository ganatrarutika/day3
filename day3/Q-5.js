var mealCost = 40; 

var tipRate = 0.15; 
var tipAmount = mealCost * tipRate;
var totalBillAmount = mealCost + tipAmount;

console.log("Total bill amount with tip: $", totalBillAmount.toFixed(2));
