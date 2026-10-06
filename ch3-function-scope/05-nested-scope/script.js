function first(){
    const x = 100;

    function second(){
        const y = 200;
        console.log(x + y);
    }
    
    second()
    
}

first()




//If a function is nested inside another function, 
// the nested function can only be accessed from within the scope where it was declared.

//for example: inner can only be access through outer scope 


function outer() {
  const x = 10;

  function inner() {
    const y = 20;
    console.log(x);
    console.log(y);
  }

  inner(); // works because we're inside outer()
}

outer();
/*
Global scope
└── outer
    └── inner
*/

//example 2:

if(true) {
    const x = 100;

    if(x === 100) {
        const y = 200;
        console.log(x + y);
    }
    
}
