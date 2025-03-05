/*
  JavaScript is a powerful programming language used to make web pages interactive.
  This file covers basic and advanced JavaScript concepts with explanations.
*/

// 1. Variables and Data Types
let name = "Alice"; // String variable
const age = 25; // Number (constant)
let isStudent = false; // Boolean

// 2. Functions - Block of reusable code
function greetUser(username) {
    return "Hello, " + username + "!";
}
console.log(greetUser(name)); // Calls function and logs output

// 3. Conditional Statements
if (age >= 18) {
    console.log("You are an adult.");
} else {
    console.log("You are a minor.");
}

// 4. Loops - Used to repeat code
for (let i = 0; i < 5; i++) {
    console.log("Iteration " + i);
}

// 5. Arrays - Collection of elements
let fruits = ["Apple", "Banana", "Cherry"];
console.log(fruits[1]); // Accessing second element
fruits.push("Orange"); // Adding new element

// 6. Objects - Grouping related data
let person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    fullName: function() {
        return this.firstName + " " + this.lastName;
    }
};
console.log(person.fullName()); // Calling object function

// 7. Event Listeners - Handling user interactions
document.addEventListener("DOMContentLoaded", function() {
    document.querySelector(".button").addEventListener("click", function() {
        alert("Button clicked!");
    });
});

// 8. DOM Manipulation - Changing web content dynamically
let title = document.getElementById("main-title");
title.style.color = "red"; // Changes text color to red

document.querySelector(".highlight").innerText = "Text changed!";

// 9. Asynchronous JavaScript - Using setTimeout and setInterval
setTimeout(() => {
    console.log("This message appears after 2 seconds");
}, 2000);

let counter = 0;
let interval = setInterval(() => {
    console.log("Counter: " + counter);
    counter++;
    if (counter > 5) clearInterval(interval); // Stops interval
}, 1000);

// 10. Fetch API - Making HTTP Requests
fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error("Error fetching data:", error));

// 11. Local Storage - Saving data in browser
localStorage.setItem("username", "JohnDoe");
console.log(localStorage.getItem("username"));

// 12. ES6 Features
// Arrow functions
const multiply = (a, b) => a * b;
console.log(multiply(4, 5));

// Template literals
console.log(`Welcome, ${name}! You are ${age} years old.`);

// Destructuring
let [fruit1, fruit2] = fruits;
console.log(fruit1, fruit2);

// Spread operator
let newFruits = [...fruits, "Grapes"];
console.log(newFruits);

// 13. Classes and Objects
class Animal {
    constructor(name, type) {
        this.name = name;
        this.type = type;
    }
    describe() {
        return `${this.name} is a ${this.type}.`;
    }
}
let dog = new Animal("Buddy", "Dog");
console.log(dog.describe());

// 14. Promises - Handling async operations
const asyncTask = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Task completed!");
    }, 3000);
});
asyncTask.then(message => console.log(message));

// 15. Async/Await - Modern way to handle async code
async function fetchData() {
    try {
        let response = await fetch("https://jsonplaceholder.typicode.com/users");
        let data = await response.json();
        console.log(data);
    } catch (error) {
        console.error("Error fetching users:", error);
    }
}
fetchData();

// 16. Error Handling - Using try-catch
try {
    let result = multiply(10, "a");
    if (isNaN(result)) throw "Invalid number";
    console.log(result);
} catch (error) {
    console.error("Error:", error);
}

// 17. Modules (ES6) - Splitting code into files (For Node.js or browsers with module support)
// import { someFunction } from './module.js';

// 18. Callback Functions - Function passed as an argument
function processUserInput(callback) {
    let userInput = "User's response";
    callback(userInput);
}
processUserInput(response => console.log("Received: " + response));

// 19. Map, Filter, and Reduce - Array methods
let numbers = [1, 2, 3, 4, 5];
let doubled = numbers.map(num => num * 2);
console.log(doubled);

let evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers);

let sum = numbers.reduce((acc, num) => acc + num, 0);
console.log("Sum:", sum);

// 20. Object Destructuring and Rest Operator
const user = {
    username: "Alice",
    age: 28,
    country: "USA"
};
const { username, ...rest } = user;
console.log(username, rest);

// End of JavaScript Course File
