const prompt = require('prompt-sync')();
let rayon = parseFloat(prompt("Entrez le rayon du cercle : "));
let  circonférence=2 * Math.PI * rayon;
console.log(`La circonférence du cercle est: ${circonférence} `)
