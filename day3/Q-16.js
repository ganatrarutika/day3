function calculateElectricityBill(units) {
    let billAmount = 0;

    if (units <= 50) {
        billAmount = units * 0.50;
    } else if (units <= 150) {
        billAmount = (50 * 0.50) + ((units - 50) * 0.75);
    } else if (units <= 250) {
        billAmount = (50 * 0.50) + (100 * 0.75) + ((units - 150) * 1.20);
    } else {
        billAmount = (50 * 0.50) + (100 * 0.75) + (100 * 1.20) + ((units - 250) * 1.50);
    }

    // Adding a surcharge of 20%
    billAmount += billAmount * 0.20;

    return billAmount.toFixed(2); // return the bill amount rounded to 2 decimal places
}

// Example input
const units = 435;
const totalBill = calculateElectricityBill(units);
console.log(`Electricity Bill = Rs. ${totalBill}`);
