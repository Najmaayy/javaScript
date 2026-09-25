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

const {id, product, customer: {name1, city, age}} = order
console.log(id, product, name1, city);