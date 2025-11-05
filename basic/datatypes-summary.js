//datatypes in javascript
// 1. Primitive Data Types (call by value types)
// number;      // Represents both integer and floating-point numbers
const num = 42;
// string;      // Represents a sequence of characters
const str = "Hello, world!";
// boolean;     // Represents true or false values
const boolean = true;
// null;        // Represents the intentional absence of any object value
const emptyValue = null;
// undefined;   // Represents a variable that has not been assigned a value
let notAssigned;
// symbol;      // Represents a unique identifier
const sym = Symbol('unique');

const id = Symbol('123');

const anotherId = Symbol('123');
console.log(id === anotherId); // false



// bigint;      // Represents integers with arbitrary precision
const bigIntNum = 9007199254741991n;



// 2- non - primitive(reference types)
// Array;       // Represents a collection of elements
const arr = [1, 2, 3, 4, 5];
// Object;      // Represents a collection of key-value pairs
const obj = { key: 'value' };

let ayushi = {
    name: 'Ayushi',
    age: 22,
    isStudent: false
}

console.log(ayushi.name); // Ayushi
console.log(ayushi['age']); // 22

// Function;    // Represents a reusable block of code
const func = () => { console.log('Hello, world!'); };
// Date;        // Represents dates and times
const date = new Date();        
// RegExp;      // Represents regular expressions for pattern matching
const regex = /ab+c/;
// Map;         // Represents a collection of key-value pairs with any data type as keys
const map = new Map();
// Set;         // Represents a collection of unique values
const set = new Set();
// WeakMap;     // Represents a collection of key-value pairs with weakly held keys
const weakMap = new WeakMap();
// WeakSet;     // Represents a collection of unique values with weakly held references
const weakSet = new WeakSet();


let temprature = null;
console.log(typeof (temprature)); // object

const myFunction = () => {
    console.log('This is a function');
}

console.log(typeof (myFunction)); // function



//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//stack memory & heap memory

//stack memory hmesha primitive datatypes me use hoti hai qki ye direct variable ka copy deta hai

let myName = 'Ayushi';
let anotherName = myName; //copy by value

anotherName = "Rishu";

console.log(myName);  // Ayushi
console.log(anotherName); // Rishu

// heap memory non-primitive datatypes me use hoti hai qki ye reference ke through access hoti hai


let user = {
    name: 'Ayushi',
    age: 22
};
let admin = user; //copy by reference

admin.name = "Rishu";   
console.log(user.name); 
console.log(admin.name);

let userOne = {
    name: "rishu",
    email: "rishu@gmail.com",
}

let userTwo = userOne;
userTwo.email = "new@gmail.com";

userOne.name = "Cheeku";

console.log(userOne.name);
console.log(userTwo.name);
console.log(userOne.email);
console.log(userTwo.email);
