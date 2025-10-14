const prompt = require('prompt-sync')();
let distance=prompt("enter la Distance: ");
let vitesse =prompt("enter la vitesse: ");
let temps=prompt("enter temps: ");
distance=vitesse*temps;
console.log(distance)