//Step 1
const library = [ {
    
    title: "The will of the many",
    author: "James Islington",
    status: {
        own: true,
        reading: false,
        read: false

    }},

{
    title: "A court of mist and fury",
    author: "Sarah J  Maas",
    status: {
        own: true,
        reading: false,
        read: false

    }},
    {
    title: "A court of thorn and roses",
    author: "Sarah J Maas",
    status: {
        own: true,
        reading: false,
        read: false

    }}

]; 
//Step 2
library[0].status.read = true; 
library[1].status.read = true; 
library[2].status.read = true; 

//console.log(library);

//Step three

const {title: firstBook} = library[0]
//to rename we use a colon: 
//const { property: newName } = object;
console.log(firstBook);

//Step 4: Turn the library object into a string

const str = JSON.stringify(library);

console.log(str);

