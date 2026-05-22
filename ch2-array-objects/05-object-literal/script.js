//Literal is a data value that is used directly in code.
//Its a value written exactly as it's meant to be interpreted 

let x; 

const person = {
    name: 'John Doe',
    age: 30,
    isAdmin: true,
    address: {
        street: 10,
        city: 'London',
        state: 'MA'
    }, 
    hobbies: ['music', 'sports']
}

//console.log(person)
//Accessing properties using the dot notation 
x = person.name;
x = person['age']
x = person.age

//accessing a nested object 
x = person.address.city

//modify properties using dot 
person.name = 'Jane Doe'


//To access an object we have two ways 
//Dot notation and bracket notation

person['name'] = 'Najma bracket '
x = person; 


//Add properties

person.hasChildren = true; 
person.hasNoChildren = true;

//Delete properties 

delete person.age; 


//function 

person.greet = function () {
    console.log(`Hello, my name is ${this.name}` )

}

person.greet(); 
console.log(x)


const person2 = { 
   'first name': 'Brad',
   'last name': 'Traversy'


};

x = person2['first name']
console.log(x)