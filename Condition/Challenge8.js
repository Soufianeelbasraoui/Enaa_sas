const prompt = require('prompt-sync')()
let couleur = prompt("Entrez la couleur du feu (rouge, jaune ou vert) : ")
if (couleur === "rouge") {
  console.log("Arrêt !");
} else if (couleur === "jaune") {
  console.log("Préparez-vous !");
} else if (couleur === "vert") {
  console.log("Allez !");
} else {
  console.log("Couleur invalide !");
}