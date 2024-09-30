var purchaseAmount = 50; 

var taxRate = 0.08; 
var taxAmount = purchaseAmount * taxRate;
var totalBillAmount = purchaseAmount + taxAmount;

console.log("Total bill amount: $", totalBillAmount.toFixed(2));
