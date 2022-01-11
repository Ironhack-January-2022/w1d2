// functions

// function declaration -> this is hoisted -> moved to the top of the file

// function greet() {
// 	console.log('this is the greet function')
// }
// use the function -> call or invoke the function

// function expression - this uses an anomymous function
// const greet = function () {
// 	console.log('this is the greet function')
// }



function greet(name, greeting) {
	const result = greeting + ' ' + name
	return result
	console.log('this will not be executed')
}

const someName = 'stephen'

const message = greet('rahaf', 'hello')
// console.log(message) // -> 'hello rahaf'

function sum(a, b) {
	const result = a + b
	return a + b
}

const res = sum(5, 2)
// console.log(res)

// arrays - ordered collection of multiple (different) values

const numbers = [2, 4, 6]
// console.table(numbers)
// to access an element use [] and the index
// console.log(numbers[0])
// numbers.at(- 1) -> this works in the newest js version
const empty = []
// adding elements
empty[0] = 'foo'
empty[5] = 'bar'
// console.log(empty) // -> [ 'foo', <4 empty items>, 'bar' ] 

// push() - pop() -> adding and removing elements to or from the end of the array

const chars = []
chars.push('a')
chars.push('b')
console.log(chars)
chars.pop()
console.log(chars)

let str = 'abc'
str = str.toUpperCase()
console.log(str)

// adding and removing from the beginning -> unshift() and shift() 

const nums = []
nums.unshift(2)
nums.unshift(1)
console.log(nums) // -> [1, 2]

// check at which index is an element -> returns - 1 if the element is not there
console.log(nums.indexOf(2))

// check if an element is contained inside an array -> returns a boolean
console.log(numbers.includes(5))

const countries = ['usa', 'france', 'uruguay', 'england', 'poland']

// splice()
countries.splice(1, 1, 'italy', 'portugal')
console.log(countries)

// write a function that gets the countries array and returns an array containing only the countries 
// that start with 'u'
function filterCountries(arr) {
	// create a new array 
	const filtered = []
	// iterate over the input array
	for (let i = 0; i < arr.length; i++) {
		// check if the country starts with 'u'
		if (arr[i][0] === 'u') {
			// if that is true then add it to the filtered array
			filtered.push(arr[i])
		}
	}
	return filtered
}

const filtered = filterCountries(countries)
console.log(filtered)

// const countries = ['usa', 'france', 'uruguay', 'england', 'poland']

// iterating over an array
// for of loop -> for (let <one of the elements> of <name of the array>)
for (let country of countries) {
	console.log(country)
}

// multidimensional arrays 

const multi = [['a', 'b'], ['j', 'k'], ['y', 'z']]
// access -> 'y'
console.log(multi[2][0])