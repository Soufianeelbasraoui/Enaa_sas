const prompt=require('prompt-sync')();
let nomber=prompt("Entre le nomber: ");
if(nomber>0){
    console.log("le nomber est positif");
}
else if(nomber<0){
    console.log("le nomber est négatif");
}
else{
    console.log("le nomber est nul")
}