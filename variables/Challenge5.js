const prompt=require('prompt-sync')();
let N1=prompt("Enter le N1");
let N2=prompt("Enter le N2");
let N3=prompt("Enter le N3");
let N4=prompt("Enter le N4");

let somme=N1+N2+N3+N4;
let moyenne=somme/4;

console.log(`la somme et: ${somme}`);
console.log(`la moyenne et: ${moyenne}`);
