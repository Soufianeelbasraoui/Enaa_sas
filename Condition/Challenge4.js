const prompt=require('prompt-sync')();
let nomber1=prompt("Entre le premier nomber: ");
let nomber2=prompt("Entre le desiem nomber: ");
if(nomber1>nomber2){
    console.log("le plus grand est : ",nomber1);
}
else if(nomber1<nomber2){
    console.log("le plus grand est:",nomber2);
}
else{
    console.log("les nomber equale")
}