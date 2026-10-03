const firstName = "Najmo";
const lastName = "Hassan";


const person = {
    firstName,
    lastName, 
};

console.log(person.lastName)


const toDo = {
    id: 15,
    title: "clean house",
    user: {
        name: "James",
        age: 25,
        gender: 'male',
    }
        
    

}


const {user: {gender}} = toDo
//Or you can also do 
//const {gender} = toDo.user 
// //this is equivalent to {user: {gender}} = toDo AND 

//const gender = toDo.user.gender 
//only different is syntax  

console.log(gender);

//Destucturing Arrays

const arr = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

const [first, second, ...rest] = arr; 

console.log(first, second, rest);

//The main difference with array destructuring is that 
//It matches the values by position whereas object is by property name. 

//...rest keyword means put the rest of the element inside a new array 



//Exercise One: Object Destructuring 

const person2 = {
  userName: "James",
  age: 25,
  job: "developer"
};

//Create a variable called firstName and age

//const {userName} = person2;
//console.log(userName);


//Exercise Two: Renaming a variable 
//Destructure userName but store inside a variable called name

const {userName: name} = person2; 
console.log(name);

//Exercise Three 

const order = {
  id: 101,
  product: "Laptop",

  customer: {
    name1: "Sarah",
    city: "London",
    age: 30
  }

};

const {id, product, customer: {name1, city}} = order
console.log(id, product, name1, city);

//Exercise 4: Array Destructuring

const colours = ["red", "blue", "green", "yellow", "purple"];

const [first1, second1, third] = colours 

console.log(first1, second1, third);

//Exercise 5: Objects and Arrays

const student = {
  id4: 12,
  details: {
    firstName1: "Alex",
    lastName1: "Smith"
  },
  grades: [80, 90, 75]
};

const {id4, details: {firstName1, lastName1}, grades: [firstGrade, secondGrade]
} = student
//console.log(student);
console.log(id4, firstName1, lastName1, firstGrade, secondGrade);

/*
It should be like this:
id
firstName
lastName
firstGrade
secondGrade
*/

/*
Cheat Code

// Object
const { property } = object;

// Rename
const { property: newName } = object;

// Nested object
const { outer: { inner } } = object;

// Array
const [first, second] = array;

// Array with rest
const [first, second, ...rest] = array;



*/