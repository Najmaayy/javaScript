//My own attempt
// const myString = 'najma'; 

// x = myString.slice(0,1)

// x.toUpperCase()
// y = myString.slice(1)

// myNewString = x + y 

// console.log(myNewString)


//Tutorial exercise 

const myString = 'developer'

let myNewString; 

myNewString = myString.charAt(0).toUpperCase() + myString.slice(1); //output 'd'

console.log(myNewString)




const names = 'Najma'

let newName; 
//solution 1: 
newName = names.charAt(0).toUpperCase() + names.slice(1);

//solution 2: 

newName = names[0].charAt(0).toUpperCase() + names.substring(1)

//solution 3;
newName = ` ${ names[0].toUpperCase()}${names.substring(1)}`; 

console.log(newName)
