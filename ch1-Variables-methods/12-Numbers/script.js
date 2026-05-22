let x; // variable that will store different results as we test number methods

// creates a Number object wrapper containing the value 5
// usually we would just write: const num = 5;
const num = new Number(5); 

// converts the number to a string
// 5 → "5"
x = num.toString(); 

// converts the number to a string, then gets the number of characters
// "5".length → 1
// x is now a number
x = num.toString().length; 

// formats the number with 2 decimal places
// returns a STRING because it is formatting for display
// 5 → "5.00"
x = num.toFixed(2)

// formats the number with 2 significant digits
// also returns a STRING
// 5 → "5.0"
// 123 → "1.2e+2"
x = num.toPrecision(2)

// typeof shows the data type, then prints the value
console.log(typeof x, x);

// toString()     → converts number to string
// length         → counts characters in a string
// toFixed(n)     → fixed decimal places
// toPrecision(n) → number of significant digits

// toFixed()      → decimal formatting
// toPrecision()  → significant digit formatting

