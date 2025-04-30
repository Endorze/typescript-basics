console.log("Hello World from TypeScript")

let myName: string = "Alex"
let myAge: number
myAge = 26;

console.log(myAge);

const sayName = (myName: string): string => {
    return `Hi! My name is ${myName}`
}
console.log(sayName(myName));

let total: number;

const squareRoot = (num: number):void => {
    total = num * num;
}

let age: string | number = "12";

const calcAgeTenYears = (age: number | string) => {
    if (typeof age === "string") {
        return "Thats not a number!"
    } else {
        return `Current age in 10 years will be ${age + 10}`
    }
}

console.log(calcAgeTenYears(myAge))


interface Animal {
    name: string,
    type: string,
    lifespan: number,
    european: boolean
}

let capybara:Animal = {
    name: "Capybara",
    type: "Mammal",
    lifespan: 20,
    european: true
}

let cat:Animal = {
    name: "Kissekatt",
    type: "Mammal",
    lifespan: 15,
    european:true
}

type Person = {
    firstName: string,
    lastName: string,
    age: number,
    alive: boolean
}

type Parent = Person &  {
    custody: boolean;
    hasIncome: boolean;
    monthlyIncome: number;
}

let Alex:Person = {
    firstName: "Alex",
    lastName: "Hallgren",
    age: 26,
    alive: true
}