const prompt = require('prompt-sync')();
let nomber=prompt("Enter le nomber: ");

if(nomber%2==0){
    console.log("le nomber pair");
}
else{
    console.log("le nomber impair. ")
}