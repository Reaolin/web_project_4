// index.js

import "./styles/index.css"; // add import of the main stylesheets file

const Hello = "hello yoohoo!";
console.log(Hello);

const numbers = [2, 3, 5];

// Arrow function. How will Internet Explorer cope with it?
const doubledNumbers = numbers.map(number => number * 2); 

console.log(doubledNumbers); // 4, 6, 10