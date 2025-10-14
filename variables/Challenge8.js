const prompt = require('prompt-sync')();

let nomber=prompt("Enter les 3 nombre entier: " );
if(nomber.length<=3){
     let inverse = nomber.split('').reverse().join(''); 
     console.log("L'inverse est : " , inverse);
}
else{
    console.log(" le nomber inccorrect")
}
