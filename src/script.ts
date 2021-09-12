const a = 2;
console.log(a);

const myName = "Farhan";
console.log(myName);

/* 

                string 🍔🌭🍗

*/

let country = "Bangladesh";

// if i assign a number type value it's will give us en error
country = "Bhutan";
console.log(country);

/* 

                number 🍔🌭🍗

*/

let age: number = 20;

// if i assign a string type value it's will give us en error
age = 21;
console.log(age);

/* 

                array 🍔🌭🍗

*/

const myArray = [20, 30, 40, false, 9, 8, true];

// we can't push any string or object in this array
myArray.push(6);
myArray.push(false);

/* 

                object 🍔🌭🍗

*/

const player = {
  name: "Mashrafi",
  isCaptain: true,
  age: 35,
};

player.name = "Shakib";
// but we cannot give hare any property which is not in object
