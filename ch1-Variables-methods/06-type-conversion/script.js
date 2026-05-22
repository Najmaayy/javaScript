let amount = '100';

//********************Convert String to Number********************C

// amount = +amount 
// amount = parseInt(amount);  
//amount = Number(amount)

//console.log(amount, typeof amount)

//************** Explanation **************
// Using the parseInt() function
// parseInt reads the string from left to right
// It stops parsing when it encounters a non-numeric character (like 'A')
// and returns the number it has read so far
// If the string does not start with a number, it returns NaN


// let price = '123a456b'
// price = parseInt(price)


// console.log(price, typeof price)



//**************Convert number to string**************

//let amounts = 10;
//amounts = amounts.toString()
//amounts = String(amounts)

//console.log(amounts, typeof amounts)


//**************Convert string to decimal**************
// let number = 99.5
// amount = parseFloat(number);
// console.log(number, typeof number)

//************** Explanation **************
// parseFloat converts a string into a number and keeps the decimal part.
// JavaScript does not have a separate float type, so the result is still of type "number".

// console.log(number, typeof number)

//**************Convert number to boolean**************

let amounts = 100;
amounts = Boolean(amounts)
console.log(amounts, typeof amounts)



