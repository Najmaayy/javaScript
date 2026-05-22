
const arr = [1,4,5,6,22,56,15]

arr.push(6); 
//the .push method adds a value at the end of an array


arr.pop() 
//the .pop() method removes the last value of an array 


arr.unshift(15)
//the .unshift method adds a value to the front of the array

arr.shift()
//the .shift method removes the first element of an array

arr.reverse()
//the reverse method reverses the order of the element. 

arr.sort()
//console.log(arr)

/*
The methods 
.push()
.pop()
.unshift()
.shift()
.reverse()

are used to manipulate the array 
*/





//now lets get something from the array
let x; 
const arr2 = [1,2,3,4,5,6,15]


x = arr2.includes(20)
x = arr2.indexOf(15)

//The slice() method returns selected elements in a new array.
//The slice() method selects from a given start, up to a (not inclusive) given end.
//The slice() method does not change the original array.

//x = arr2.slice(1,5)


//The splice() method adds and/or removes array elements.

//The splice() method overwrites the original array.


//x = arr2.splice(0,3)
//x = arr2.splice(6,1)

//chain methods 
x = arr2.splice(1,4).reverse().toString()


//chain methods 

console.log(typeof x)
















