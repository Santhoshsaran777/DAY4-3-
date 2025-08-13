// Import named exports and default export
import greet, { add, multiply } from "./mathUtils.js";

console.log(greet("Vishnu")); // Hello, Vishnu!

console.log("Add: ", add(5, 3));       // Add: 8
console.log("Multiply: ", multiply(4, 6)); // Multiply: 24
