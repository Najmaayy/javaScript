const { append } = require("express/lib/response");

const firstName = "Jane"
const lastName = "Doe"
const age = 30;



/*
const person = {
    firstName: firstName,
    lastName: lastName,
    age: age
}
*/

//Because the key value pairs are similar JS lets you shorten it.
const person = {
    firstName,
    lastName,
    age
}

console.log(person.age);


//Destructure 

//--The purpose of destructuring is to make it easier and shorter to pull values out of an object or array.
//syntax
//const { keyName } = objectName;
const todo = {
    id:1,
    title: "Take trash out "

}

//const id = todo.id 
const {id , title} = todo
console.log(id, title);

const person4 = {
    name1: "najma",
    age1: 25,
    student: false
}

const {name1, age1} = person4

console.log(name1, age1);

//destructing arrays
//syntax

//const [variable1, variable2] = arrayName;

const numbers = [1,2,3,4,5,6]

//The array only cares about position/order. so the name does not affect the order
//I can name it whatever 
//...rest is the variable name i gave for the rest of the array 

const [first, second, third, ...rest] = numbers

console.log(first, third, rest)

/********************* array indexing or accessing an array element by index. *******************************/
/* further examples using youtube videos to understand destructuring and restructuring arrays and objects */

/*
Grab the first element from alphabet
Store it in a new variable called a
*/
const alphabet = ['a', 'b', 'c', 'd', 'e']
const numbers1 = [1,2,3,4,5]

// const a = alphabet[0]
// const b = alphabet[1]

//destructing 
//Take the first value from alphabet and store it in a.
//Take the second value from alphabet and store it in b.

const [a, b] = numbers1

console.log(a, b);

