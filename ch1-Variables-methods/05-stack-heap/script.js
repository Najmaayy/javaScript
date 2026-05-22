//values are stored on the stack
const name = 'John'
const age = 20

//Reference values are stored on the heap 

const person = {
    name: 'Brad',
    age: 40,
}



let newName = name;
newName = 'Johnathan'

//person and newPerson are both pointing to the same reference in heap
let newPerson = person

console.log(name, newName)
console.log(person, newPerson)