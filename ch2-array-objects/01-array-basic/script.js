let x; 

//Array Literal 
const numbers = [1, 34, 5, 78]

//Array Constructor 
const fruit = new Array('Apple', 'Orange', 'Grapes')
console.log(fruit[2])


x = fruit[0];
console.log(x)

x = `My favorite fruit is an ${fruit[2]}` 
console.log(x);

x = numbers[0] + numbers[2] //adding to values from the array 
console.log(x);
 x = numbers.length; 
console.log(x);

//add value at the end of the array
x = fruit[2] = 'pear'; 
console.log(x);

fruit[fruit.length] = 'blueberry'

x = fruit[5]
console.log(x);


let fruit2 = ['apple', 'orange']
console.log(fruit2);

 fruit2[6] = 'grape'

console.log(fruit2)

// x = fruit.length = 2;

// //we could use push 
// fruit[fruit.length] = 'blueberry'; 





//console.log(x);
