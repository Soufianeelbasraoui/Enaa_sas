const prompt=require('prompt-sync')();
let age=prompt("Entre l’âge: ");
if(age>=18){
console.log("Éligibldeux e au vote");
}
else{
    console.log("Non éligible")
}