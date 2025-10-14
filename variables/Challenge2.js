const prompt = require('prompt-sync')();
let  C=prompt("enter le  Celsius: ");
let  F=(C * 1.8) + 32
console.log(`la température de ${C}°C  convertit en  ${F}°F.`);