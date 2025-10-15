const prompt = require('prompt-sync')();

let Nomdutilisateur = prompt("Entrez le nom d’utilisateur : ");
let motdepasse = prompt("Entrez le mot de passe : ");

if (Nomdutilisateur === "admin" && motdepasse === "1234") {
    console.log("Bienvenue Admin");
} 
else if (Nomdutilisateur === "admin" && motdepasse !== "1234") {
    console.log("Mot de passe incorrect");
} 
else {
    console.log("Utilisateur introuvable");
}


