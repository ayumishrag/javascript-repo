let score = "50"; // string type

console.log(typeof score); //typeof will tell us the format ot type of any variable.
console.log(typeof (score));

//type conversion

let scoreInNumber = Number(score);  // if we remove(score) from here then it will be "function" type
console.log(typeof (scoreInNumber)); // number type


//conversion notes 
/*
33 => number
"33abc" => NaN 
true=> 1/ false=> 0
null => 0
undefined => NaN 
*/

let isloggedin = 1;
console.log(isloggedin);

let booleanisloggedin = Boolean(isloggedin);
console.log(booleanisloggedin);


// here we see that 
// "" => false 
// "Hitesh" => true
// 1 => true and 0 => false 


//same as we can convert the string into number and the number in to string.



// *******************************OPERATIONS****************************************

