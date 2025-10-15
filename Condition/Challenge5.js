const prompt=require('prompt-sync')();
let scor=prompt("Entre le nomber de score: ");
if(scor>=0 && scor<=100){
    console.log("nomber inccorrect")
    if(scor<100 && scor>90){
    console.log("A");
}
else if(scor<89 && scor>80){
    console.log("B");
}
else if(scor<79 && scor>70){
    console.log("C")
}
else if(scor<69 && scor>60){
    console.log("D");
}
else{
    console.log("F")
}
}