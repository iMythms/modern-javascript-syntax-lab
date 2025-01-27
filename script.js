// Example 1
const array1 = ['vanilla', 'chocolate', 'strawberry']
const array2 = array1.map((currentElement) => {
	return currentElement + ' ice cream'
})

console.log('Example 1')
console.log(array2)

// Exercise 1: Use `.map()` to iterate over the following array
const numbers = [13, 87, 2, 12, 4, 90, 63]

// Create a new array where each value is multiplied by 2 and log the new array
const doubledNumbers = numbers.map((number) => number * 2)

console.log('Exercise 1')
console.log(doubledNumbers)

// Example 2
const petsArray = ['Rover', 'Snuffles', 'Toto', 'Spot']

const [firstPet, secondPet] = petsArray

console.log(firstPet) // 'Rover'
console.log(secondPet) // 'Snuffles'

// Equivalent in traditional bracket notation:
console.log(petsArray[0]) // 'Rover'
console.log(petsArray[1]) // 'Snuffles'

/*Exercise 2: 
  Given the following array, use destructuring to pull out the first and second values and place them into variables. 
  Log both variables.
*/
const pizzaToppings = ['Pineapple', 'Olives', 'Anchovies']

// Your code here
const [firstTopping, secondTopping] = pizzaToppings

console.log('Exercise 2')
console.log(firstTopping)
console.log(secondTopping)

/* Example 3 */
const person = {
	name: 'Alex',
	role: 'Software Engineer',
}

// Object destructuring:
const { name, role } = person

console.log(name) // 'Alex'
console.log(role) // 'Software Engineer'

// Equivalent in traditional dot notation:
console.log(person.name) // 'Alex'
console.log(person.role) // 'Software Engineer'

/*Exercise 3: 
  Given the following object, use destructuring to create variables `make` and `model` that will hold the respective values. 
*/
const car = {
	make: 'Audi',
	model: 'q5',
}

// Your code here
const { make, model } = car

console.log('Exercise 3')
console.log(car)

// Exercise 4: Applying the spread operator on arrays
// Duplicate the following array using the spread operator and assign it to `controversialPizzaToppings`. Then, log the variable.

// const pizzaToppings = ['Pineapple', 'Olives', 'Anchovies']

// Your code here
const controversialPizzaToppings = [...pizzaToppings]

console.log('Ex.4 - Copied array: ', controversialPizzaToppings)

// Exercise 5: Applying the spread operator on objects
// Duplicate the following object and spread its values into a new variable `myCar`.

/* const car = {
  make: 'Audi',
  model: 'q5'
} */

// Change the `model` property of `myCar` to 'q7'. Log both objects.

// Your code here

const myCar = { ...car }
myCar.model = 'q7'

console.log('Ex.5 - car', car)
console.log('Ex.5 - myCar', myCar)

// Exercise 6: Dynamic keys in objects
// Create an object named userProfile.
// Define a variable named propertyName and assign a string to it (like a username, age, or email).
// Use propertyName as a dynamic key in userProfile, assigning a relevant value.

// Your code here
const userProfile = {
	username: 'Salman',
	age: '38',
	email: 'sjs29@hotmail.com',
}

const propertyName = 'username'
console.log('Ex.6 "username": ', userProfile[propertyName])

// Exercise 7: Import and Export (separated files)
console.log('Ex.7: -- separated files done')

// Exercise 8: Default parameters
// Create a function that takes two parameters, `noun` and `adjective`, both with the following respective default values:

// 1. `cat`

// 2. `white`

// The function should log a sentence 'The cat is white.' by default. The function should substitute the appropriate parameters when supplied arguments.

// Your code here
const nounAdjective = (noun = 'cat', adjective = 'white') => {
	console.log('Ex.8: ', `The ${noun} is ${adjective}`)
}

nounAdjective()
nounAdjective('car', 'red')

// Exercise 9: Ternary operator
// Convert the following `if...else` statement in to a ternary:

let pizza = 'tasty'

/* if (pizza === 'tasty') {
  console.log('yum');
} else {
  console.log('yuck');
} */

// Your code here
console.log('Ex.9: ', pizza === 'tasty' ? 'yum' : 'yuck')

// Exercise 10: Boolean gates
// 1. SET LANGUAGE

// Construct a single line of code that assigns a default value using the logical OR operator. This line should match the logic of the following statement:

// "LANG is equal to localLangConfig or the default value of English."
const localLangConfig = null // Change to 'es', 'fr', etc., or keep it null

// a. Create a variable called LANG
// b. Assign LANG the value of localLangConfig or 'en' as a default

// Your code here
const LANG = localLangConfig || 'en'
// Log the result
console.log('Ex.10-1: ', 'Language setting:', LANG)

// 2. SET WEBSITE THEME

const userSavedTheme = null // Change to 'dark', 'contrast', etc., or keep it null

// a. Create a variable called USER_THEME
// b. Assign USER_THEME the value of userSavedTheme or 'light' as a default

// Your code here
const USER_THEME = userSavedTheme || 'light'
// Log the result
console.log('Ex.10-2: ', 'User theme setting:', USER_THEME)

// Exercise 11: Optional chaining
// Now check for `cat.age` on `adventurer`. See how it errors out? Use optional chaining in a console.log that it returns undefined instead.

const adventurer = {
	name: 'Alice',
}

let cat // Your code here
cat = adventurer.cat?.age
console.log('Ex.11: ', cat)
