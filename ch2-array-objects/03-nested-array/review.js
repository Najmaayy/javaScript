const { all } = require("express/lib/application");

const fruits = ['apple', 'pear', 'orange']
const berries = ['strawberry', 'blueberry', 'raspberry']
let x; 

fruits.push(berries)
//console.log(fruits)

const allFruits = [fruits, berries]

console.log(allFruits);