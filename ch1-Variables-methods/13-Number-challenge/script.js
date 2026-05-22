let x;
let y;

// Generate a random whole number between 1 and 100
x = Math.floor(Math.random() * 100 + 1);

// Generate a random whole number between 1 and 50
y = Math.floor(Math.random() * 50 + 1);

// Perform the arithmetic operations
let sumOutput = x + y;           // addition
let differenceOutput = x - y;    // subtraction
let productOutput = x * y;       // multiplication
let quotientOutput = x / y;      // division
let rmOutput = x % y;            // remainder (modulus)

// Using template literals to print results
console.log(`${x} + ${y} = ${sumOutput}`);
console.log(`${x} - ${y} = ${differenceOutput}`);
console.log(`${x} * ${y} = ${productOutput}`);

// Using string concatenation
console.log(x + " / " + y + " = " + quotientOutput);
console.log(x + " % " + y + " = " + rmOutput);