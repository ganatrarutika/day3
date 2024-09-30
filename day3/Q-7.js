var purchaseAmount = 120; 

var taxRate = 0.05; 
var taxAmount = purchaseAmount * taxRate;
var totalBillAmount = purchaseAmount + taxAmount;

console.log("Total bill amount: $", totalBillAmount.toFixed(2));
