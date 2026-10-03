//Step 1: Create an array of objects
const library = [
    {
    title: "The Will of The Many",
    author: "James Islington", 
    status: {
        own: true,
        reading: false,
        read: false
    }

},

 {
    title: "Verity",
    author: "Colleen Hoover", 
    status: {
        own: true,
        reading: false,
        read: false
    }

},

 {
    title: "The silent Patient",
    author: "Alex Michaelides", 
    status: {
        own: true,
        reading: false,
        read: false
    }

}
]

//step two: change the read value to true

library[0].status.read = true
library[1].status.read = true
library[2].status.read = true

console.log(library[0], library[1], library[2]);









/*
   ----------Challenge------------------

********   Step 1

Create an array of objects called library.
 Add 3 objects with a property of title, author, status. 
 Title and author should be strings (whatever value you want), 
 and status should be another object with the properties of own, 
 reading and read. Which should all be boolean values. 
 For all status, set own to true and reading and read to false.



 *******Step 2

You finished reading all of the books. Set the read value for all of them to true. Do not edit the initial object. 
Set the values using dot notation.

*******Step 3

Destructure the title from the first book and rename the variable to firstBook
    §
 */

