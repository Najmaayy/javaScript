
//Working with strings 

let x;
const name = 'John';
const age = 30

x = 'Hello, my name is ' + name + ' and I am ' + age + ' years old'; 

//Template Literals 

x = `Hello my name is ${name} and I am ${age} years old`;
console.log(x)

/*
Template literals are strings created using 
backticks that allow variable interpolation and multi line text using this syntax --> ${}
*/


//String properties and methods

const s = 'Hello World!'

x = s.length; 

//Access value by key
x = s[1]

console.log(x);

x = s.__proto__;
x = s.toUpperCase(); 
x = s.toLowerCase(); 
x = s.charAt(4) //returns the character at index 4 in the string s 
x = s.indexOf('d')


//substring = include start, exclude end
x = s.substring(2, 5) //(start, end) the end is excluded 




//String Slicing - creating a substring from 
//from a portion of another string
//string.slice(start, end)

const fullName = "Bro Code";

let firstName = fullName.slice(0,2);

console.log(firstName)





x = s.slice(-11, -6) //slice is used for strings and arrays 

//whereas substring is along used for strings

//substring() and slice() are string methods used to extract parts of a string, but slice() also works with arrays and supports negative indexes.



//trim removes white space
//x = '        Hi      Najma      '
//x = x.trim() 

//x = s.replace('Hello', 'Hi')

x = s.includes('Hello') // checks if the string contains "Hello" (returns true or false)

x = s.split(x)          // splits the string using x as the separator (x is true/false here, so it usually won’t split)

x = s.split(' ')        // splits the string into an array of words (splits at each space)

x = s.split('')         // splits the string into an array of individual characters


console.log(x)





