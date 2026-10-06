
const x = 100;

if(true) {
    const y = 200;
    console.log(x + y);
}
//The log below will not work because Y has not been defined on the global scope. 
//It is defined inside of the If block so it belongs to that block. 
//console.log(x + y);

//Example with Loop basic

for(let i = 0; i <=10; i++){
    console.log(i);
}

//Again here we can see an reference error and that is because
//i is scoped in the for loop block
//console.log(i);


//

if (true) {
    const a = 500;
    let b = 600;
    var c = 700;
}
//The difference between const, let and Var is that Var is not block scoped 
//If we have a variable that you created with var inside an if statement that can be accessible 
//from outside that block.
//Remember that is not good we want the variables to be block scoped and not accessed outside that scope
console.log(c);

//However Var is function scoped you cannot access the variable outside the function 

function run(){
    var d = 100;
    console.log(d);

}

run(); 

