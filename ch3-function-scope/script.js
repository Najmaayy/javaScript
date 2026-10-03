//// A function is a block of code that we can save and run whenever we need it.

//Example 1:
//This creates a function called SayHello

function sayHello() {
    //Everything inside the curly braces is called the function body
    //This code will only run when the function is called
    console.log("Hello World!");   
}

//To run the function, we call it by writing its name followed by parentheses

sayHello(); 

//Example Two 

//When passing data into a function we use parameters
//Sometimes parameters can be used interchanably with arguments but there is a little difference

//The parameter is the num1 and num2 is what the function can take 
function add(num1, num2) {
    //evaluate the expression 
    console.log(num1 + num2);
}

//when we call this function we pass in the arguments. 
add(5, 10)

//Example 3: Return keyword

function subtract(num1, num2){
    return num1 - num2 

    //after return the function exits nothing writing after will be executed
    console.log("Hi");
}

//subtract(10,2)

const result = subtract(10,2);

console.log(result, subtract(20,5));


