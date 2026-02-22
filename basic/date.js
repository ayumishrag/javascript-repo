console.log("Hello, World!");

const d = new Date(1800000000000);
console.log(d.toString()); // This will print the date corresponding to the timestamp 1700000000000

// date is an object in JavaScript that represents a single moment in time. 
// It contains a number that represents the milliseconds since January 1, 1970, 00:00:00 UTC.


// To create a new date object, you can use the Date constructor:
const date = new Date();
console.log(date.toDateString()); // This will print the current date and time

// You can also create a date object for a specific date and time:
const specificDate = new Date('2022-01-01T00:00:00');
console.log(specificDate); // This will print January 1, 2022, at 00:00:00

// You can also create a date object using individual components:
const anotherDate = new Date(2022, 0, 1); // Note: month is 0-indexed (0 = January)
console.log(anotherDate); // This will also print January 1, 2022

// You can get the current timestamp (milliseconds since January 1, 1970) using:
const timestamp = Date.now();
console.log(timestamp); // This will print the current timestamp

// You can also get the timestamp from a date object:
const dateTimestamp = date.getTime();
console.log(dateTimestamp); // This will print the timestamp of the current date and time

// You can also get various components of the date:
console.log(date.getFullYear()); // This will print the current year
console.log(date.getMonth()); // This will print the current month (0-11)
console.log(date.getDate()); // This will print the current day of the month (1-31)
console.log(date.getHours()); // This will print the current hour (0-23)
console.log(date.getMinutes()); // This will print the current minutes (0-59)
console.log(date.getSeconds()); // This will print the current seconds (0-59)