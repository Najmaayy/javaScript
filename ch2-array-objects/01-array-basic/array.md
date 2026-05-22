let fruit = ['apple', 'banana', 'orange']

fruit[fruit.length] = 'blueberry'
fruit[fruit.length] = 'grape'
fruit[fruit.length] = 'mango'

console.log(fruit)

What happens each time:

first add: fruit.length is 3, so it adds at index 3
next add: fruit.length is now 4, so it adds at index 4
next add: fruit.length is now 5, so it adds at index 5

So JavaScript is not filling a pre-made empty space. It is extending the array by creating a new element at the next available index.