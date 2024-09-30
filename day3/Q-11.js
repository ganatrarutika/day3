function calculateSimpleInterest(principal, rate, time) {
    return principal * (rate / 100) * time;
}

const principal = 2000;
const rate = 3;
const time = 4;

const simpleInterest = calculateSimpleInterest(principal, rate, time);
console.log(`Simple interest: $${simpleInterest}`);
