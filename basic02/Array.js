// array in javascript

// array is a data structure that can hold multiple values in a single variable
// array is an ordered collection of items
// array is a list of items

// creating an array
let fruits = ["apple", "banana", "orange"];
console.log(fruits); 


// modifying array elements
fruits[0] = "grape";
console.log(fruits); // ["grape", "banana", "orange"]

// adding new elements to the array
fruits.push("kiwi");
console.log(fruits); // ["grape", "banana", "orange", "kiwi"]

// removing elements from the array
fruits.pop();
console.log(fruits); // ["grape", "banana", "orange"]

const arr = [1, 2, 3, 4, 5];
console.log(arr); 

arr.push(6);
console.log(arr); 
arr.pop();
console.log(arr);

//unshift() method adds a new element to the beginning of an array and returns the new length of the array.
arr.unshift(10);
console.log(arr);

//but this is not a good way to add an element to the beginning of an array because it is not efficient.
// beacuse it has to shift all the elements to the right to make room for the new element at the beginning of the array.

//shift() method removes the first element from an array and returns that removed element.
//  This method changes the length of the array.
arr.shift();
console.log(arr); 

arr.includes(3);  
console.log(arr.includes(3)); // true
arr.includes(10); 
console.log(arr.includes(10)); // false

// length of the array
console.log(arr.length); 
console.log(fruits.length);

arr.slice(1, 4);
console.log(arr.slice(1, 4)); 


const newArray = [10, 20, 30, 40, 50];
const slicedArray = newArray.slice(0, 4);
console.log(slicedArray); // This will print [10, 20, 30, 40]

const splicedArray = newArray.splice(1, 3);
console.log(splicedArray); // This will print [20, 30, 40]
console.log(newArray); // This will print [10, 50] because the elements at index 1, 2, and 3 have been removed

newArray.join("Ayushi");
console.log(typeof newArray.join(" Ayushi ")); // This will print "10 Ayushi 20 Ayushi 30 Ayushi 40 Ayushi 50" 
// because the elements of the array are joined together with "Ayushi" in between them));

