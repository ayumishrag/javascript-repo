// here it will cover the required mathematical functions

// Math() is a buuilt in library in JavaScript which provides various mathematical functions and constants. 
// It is not a constructor, so you cannot create instances of it. Instead,
//  you can directly use its properties and methods.



// Some of the commonly used properties of Math include:
// - Math.PI: The value of π (pi), approximately 3.14159.
// - Math.E: The base of natural logarithms, approximately 2.71828.
// - Math.SQRT2: The square root of 2, approximately 1.41421.
// - Math.SQRT1_2: The square root of 1/2, approximately 0.70711.

console.log(Math.PI); // Output: 3.141592653589793

// it is an object that has properties and methods for mathematical constants and functions.

console.log(Math.abs(-5)); // Output: 5 // Absolute value of -5 // always gives the positive number
console.log(Math.sqrt(16)); // Output: 4 // Square root of 16
console.log(Math.pow(2, 3)); // Output: 8 , 2 raised to the power of 3
console.log(Math.random()); // Output: Always gives a random number between 0 and 1

console.log(Math.round(9.8)); // Output: 10 // Rounds to the nearest integer
console.log(Math.floor(9.8)); // Output: 9 // Rounds down to the nearest integer
console.log(Math.ceil(9.2)); // Output: 10 // Rounds up to the nearest integer  

console.log(Math.max(1, 5, 3)); // Output: 5 // Returns the largest of the given numbers
console.log(Math.min(1, 5, 3)); // Output: 1 // Returns the smallest of the given numbers

// These are just a few examples of the many functions and properties available in the Math object. 

// for taking the value between 10 and 20, we can use the following code:

const min = 10;
const max = 20;
const randomValue = Math.random() * (max - min) + min;
console.log(randomValue); // Output: A random number between 10 and 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min); 

// now by using this syntax we can get the random number between 10 and 20 including both 10 and 20. 


//heres all about the math library in JavaScript. It provides a wide range of mathematical functions and constants that can be used for various calculations and operations. 
// You can explore the Math object further to discover more functions and properties 
// that may be useful for your specific needs.
