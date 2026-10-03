//Default Parameters 
function registerUser(user = 'Bot'){
    //default parameters 
    // if(!user){
    //     user = 'Bot';
    // }
    return user + ' is registered'; 


}

console.log(registerUser("John"));

//rest parameters 

function sum(...numbers){
    let total = 0;

    for(const num of numbers){
        total+=num; 
    }
   return total 

}

console.log(sum(1, 2, 3, 4 ,5));

//Object as parameters

function loginUser(user){
    return `The user ${user.name} with the id of ${user.id} is logged in`; 

}

const user = {
    id: 1,
    name: 'John',
};


console.log(loginUser(user));
console.log(loginUser({
                       id: 2,
                       name: 'Sara' }));


//Array Parms
//Pass in an Array

function getRandom(arr){
    const randomIndex = Math.floor(Math.random()* arr.length);

    const item = arr[randomIndex];
    
    //console.log(item);
}

getRandom([1,2,3,4,5,5,6,7,8,9,10])


//exercise one: Random Colours

function pickRandomNames(names){

    //Generate a random index using Math.random(), arr.length, and Math.floor().
    //Use that random index to get one name from the array.
    //Return the chosen name.
    //Log the result.

    //const names = ["James", "Sara", "Alex", "Maya", "John"];
    const randomIndex = Math.floor(Math.random() * names.length);
    const res = names[randomIndex]; 

    return res;

}
console.log(
pickRandomNames(["James", "Sara", "Alex", "Maya", "John"]));


//Exercise 2: Random Colours

function pickRandomColors(arr){
    const randomIndex = Math.floor(Math.random() * arr.length); 

    const item = arr[randomIndex];

    return item; 
  
}
console.log(
pickRandomColors(["red", "blue", "green", "yellow", "purple"]));



 /*
    Your function should:

accept the array as a parameter
create a random index
use that index to get one colour from the array
store that colour in a variable
return that colour
log the returned result outside the function

    */


/*
Input?
→ an array of scores

Output?
→ one random score

What do I need in the middle?
→ array length
→ random index
→ item at that index
→ return it

*/


function pickRandomScore(score){ 

    const randomIndex = Math.floor(Math.random() * score.length);

    //randomIndex[1]
    const item = score[randomIndex];
    return `Your maths score is: ${item}`;  
}

console.log(pickRandomScore([12, 25, 8, 9, 14, 30]));