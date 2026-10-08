//A global variable is created outside the function, so the function can usually access it:
//example:

const name = "James";

function greet() {
  console.log(name);
}

greet(); // James


//But a variable created inside a function only exists inside that function:
/*
function greet() {
  const message = "Hello";
  console.log(message);
}

greet();

console.log(message); // ReferenceError

*/



const x = 100;

console.log(x, ' in global scope');

function run(){

    console.log(window.innerHeight);
}

run()

if(true){
    console.log(x, ' in global scope'); 
}

function add(){
    const y = 50;
    console.log(y);
    
}

add()

/*
A simple way to picture it:

Global scope
│
├── name
│
└── function greet()
      │
      └── message

The function can look outward and see name.

But code outside the function cannot look inward and see message.

So the rule is:

Outer scope → can usually be accessed inside inner scope
Inner scope → cannot be accessed outside
*/
const y = 10; 

function add1(){
    const x = 10;
    console.log(x * y);
}

add1(); 