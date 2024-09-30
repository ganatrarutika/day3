var purchaseAmount = 80; 

var taxRate = 0.12; 
var taxAmount = purchaseAmount * taxRate;
var totalBillAmount = purchaseAmount + taxAmount;

console.log("Total bill amount: $", totalBillAmount.toFixed(2));
