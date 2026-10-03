//JSON: JavaScript Object Notation




const post = {
    id: 1, 
    name: "post",
    body:"body"
}

//convert to JSON string 

console.log(post);
const str = JSON.stringify(post)
console.log(str);


const obj = JSON.parse(post)
console.log(post.name);



