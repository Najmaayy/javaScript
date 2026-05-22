let x;

const toDo = new Object(); 

toDo.id = 1;
toDo.name = 'Buy Milk'
toDo.complete = false; 

x = toDo; 












const obj1 = {a:1 , b:2}
const obj2 = {c:3 , d:4}


// This creates a new object called obj3
// Inside obj3, we are storing obj1 and obj2 as properties
// So obj3 becomes a nested object
//const obj3 = {obj1, obj2}



// The spread operator (...) copies the properties/key-value pairs
// from obj1 and obj2 into a brand new object
const obj3 = {...obj1, ...obj2}

x = obj3;

console.log(x)

// Output:
// { a: 1, b: 2, c: 3, d: 4 }

// In simple words:
// obj1 has: a: 1, b: 2
// obj2 has: c: 3, d: 4
// spread (...) takes those properties and puts them together
// inside one new object called obj3


//Methods

// Create a new empty object {}
// Copy obj1 properties into it
// Copy obj2 properties into it
// Store the final object in obj4

const obj4 = Object.assign({}, obj1, obj2)

x = obj4;


// {} is the target: the new empty object we are copying into
// obj1 is a source: copy properties from obj1
// obj2 is another source: copy properties from obj2
//const obj4 = Object.assign({}, obj1, obj2);



// Array of objects
// This means each item inside the array is an object
const toDos = [
  // First object in the array
  { id: 1, name: 'Buy Milk' },

  // Second object in the array
  { id: 2, name: 'Pickup Kids from school' },

  // Third object in the array
  { id: 3, name: 'Take out trash' },
];

// This gets the name value from the first object in the array
// toDos[0] means the first object
// .name gets the value of the name property
x = toDos[0].name;

// This stores the first object from the array into a variable called toDo
// Now toDo is: { id: 1, name: 'Buy Milk' }
const toDo = toDos[0];

// Object.keys() gets all the keys/property names from the toDo object
// Result: ['id', 'name']
x = Object.keys(toDo);

// .length counts how many keys are inside the array returned by Object.keys()
// Result: 2 because toDo has 2 keys: id and name
x = Object.keys(toDo).length;

// Object.values() gets all the values from the toDo object
// Result: [1, 'Buy Milk']
x = Object.values(toDo);

// Object.entries() gets the key-value pairs and puts each pair inside its own array
// Result: [['id', 1], ['name', 'Buy Milk']]
x = Object.entries(toDo);

// hasOwnProperty() checks if the object has a specific property/key
// Result: true because toDo has a key called 'name'
x = toDo.hasOwnProperty('name');

// This prints the final value of x
// Since this is the last x assignment, it prints: true
console.log(x);