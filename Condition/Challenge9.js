const prompt =require('prompt-sync')();
let nomber=prompt("Enter le nomber :");
if(nomber%5===0 && nomber%3===0){
    console.log("FizzBuzz");
}
else if(nomber%3===0){
    console.log("Fizz")
}
else if(nomber%5===0){
    console.log("Buzz");
}

else{
    console.log(nomber)
}
