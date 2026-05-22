//Basic Array
//**************** Mutating methods (change the array)****************

const arr = [1, 2, 3, 4, 5];

/*
Modifying (mutating) means the original array is changed directly.

Methods like:

push() //adds the specific elements to the end of an array and returns new length

pop() //removes last element from an array 

shift() //removes the first element from an array and returns that removed element. 

unshift() //adds one or more items to the beginning of an array and returns a new length of the array


reverse() // flips an array backwards; first becomes last and last becomes first

All change the same array in memory.
*/

//push() adds one or more elements to the end of an array.
//arr.push(20);


//pop() removes the last element from an array and returns it.
//arr.pop();


//unshift() adds one or more elements to the beginning of an array.
//arr.unshift(100, 200)


//shift() removes the first element from an array and returns it

//arr.shift();


//reverse() reverses the order of element in an array.
//arr.reverse(); 


//****************Non-mutating / checking methods (return a value)*****************************
//-------These do not change the original array but they return a new value instead. 
// Common Non Mutating: 
// Slice()
// concat()
// map()
// filter()
// find()


//includes() --> use when you need to know where it is 
//indexOf() --> use when you only care if its there 




//checks weather an array (or string) contains a specific value
//returns true -> value is found 
//or false -> value not found


x = arr.includes(26); 


//indexOf() returns the index (position) of a value in an array or string
//if value is found --> it returns the index number
//if the value is not found --> it returns -1 
//-1 lets us know the value does not exist in this array
x = arr.indexOf(100)



//Slice 

//slice() copies part of an array or string and returns a new one
//--> It does NOT change the original array 
//Start index is included
//End index is excluded


x = arr.slice(1,4)

//let name = 'Najma'
//n = name.slice(1,3)




//--------splice()--------------

//x = arr.splice(1, 3)

//x = arr.splice(1, 4)

//x = arr.splice(1, 4).reverse().toString().charAt(); 

const arr1 = [25, 35, 45, 55, 65, 75, 85]; 

//x = arr1.splice(1,4)
//x = arr1.splice(2, 0, 'Hi')

x = arr1.splice(1,3)
//console.log(arr)
console.log(arr1)

