
const prompt = require('prompt-sync')();

let motdepasse = prompt("Entrez le mot de passe : ");

let Chiffre = /[0-9]/; 
let caractèresspéciaux  = /[!@#$%]/;

if (motdepasse.length < 6) {
    console.log("Faible");
}
else if (motdepasse.length >= 8 && Chiffre.test(motdepasse) && caractèresspéciaux.test(motdepasse)) {
    console.log("Fort");
}
else if (motdepasse.length >= 6 && Chiffre.test(motdepasse)) {
    console.log("Moyen");
}
else {
    console.log("Faible");
}
