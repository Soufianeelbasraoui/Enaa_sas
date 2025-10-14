const prompt = require('prompt-sync')();
let A=prompt("Enter le nomber A: ");
let B=prompt("Enter le nomber B: ");
let C=prompt("Enter le nomber C: ");

A=B;
B=C;
C=A;
console.log(`Nomber A: ${A}`); 
console.log(`Nomber B: ${B}`);
console.log(`Nomber C: ${C}`)