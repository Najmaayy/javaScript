//Nested Concat and Spread

//Nested array is an array inside another array 
//Thing of it like a box inside a bigger box 

const fruits = ['apple', 'pear', 'orange']
const berries = ['strawberry', 'blueberry', 'raspberry']
let x; 

//fruits.push(berries)

//x = fruits[3][1]
//console.log(fruits)

//access nested array 
const allFruits = [fruits, berries]
x = allFruits[1][0]
//console.log(x)

//concat array
// concat() merges the berries array with the fruits array
// A new array is created in memory and stored in x
// The original berries and fruits arrays remain unchanged


x = berries.concat(fruits)



//Spread operator
//--is used with arrays but more so with objects
/*
// The spread operator (...) expands each element in the arrays
// A new array is created in memory
// The original fruits and berries arrays are not modified

*/

x = [...fruits, ...berries]
console.log(x)

//Flatten Arrays

const arr = [1, 2, 3, [3, 4, 3], 5, [6, 7], 8]
x = arr.flat()
//console.log(arr)
console.log(x)
//returns 
//[1, 2, 3, 3, 4, 3, 5, 6, 7, 8]
//It flattens nested arrays and makes it one whole array. 


//Static Methods on Array Object

x = Array.isArray(fruits);


x = Array.from('12345');



//Array.from() creates a new array from an array like or iterable object 
//It turns things that look like arrays into real arrays
/*
let arr = Array.from('hello');
console.log(arr)

["h", "e", "l", "l", "o"]


*/

//Array.of() creates a new array from the arguments you pass in. 


const a = 1;
const b = 2;
const c = 3;
x = Array.of(a, b, c)

console.log(x)


// const arr5 = [1,2,3,4,5,6,7,[2,3,4]]

// const u = [...arr5]
// console.log(u)


