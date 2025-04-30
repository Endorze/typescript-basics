"use strict";
console.log("Hello World from TypeScript");
let myName = "Alex";
let myAge;
myAge = 26;
console.log(myAge);
const sayName = (myName) => {
    return `Hi! My name is ${myName}`;
};
console.log(sayName(myName));
let total;
const squareRoot = (num) => {
    total = num * num;
};
let age = "12";
const calcAgeTenYears = (age) => {
    if (typeof age === "string") {
        return "Thats not a number!";
    }
    else {
        return `Current age in 10 years will be ${age + 10}`;
    }
};
console.log(calcAgeTenYears("12"));
