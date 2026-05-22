let x; 

x = 5 + '5';  
x = 5 + Number('5'); //// Number() converts the string '5' into a number,
// so arithmetic addition is performed instead of string concatenation.

//The + operator concatenates if either operand is a string.
//Only the '+' operator does this string behavior. 

/*
Coercion means JavaScript automatically changes a value from one data type to another
*/

x = 5 + null; //null here is coercion into a 0
x = Number(null);   // 5 + 0; 

x = Number(true);   // true = 1 
x = Number(false); //false = 0


x = 5 + true;  //6
x = 5 + false; //5

x = 5 + undefined; //NaN -> In numeric operations, undefined is coerced to NaN 
console.log(x, typeof x)

