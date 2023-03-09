// Exercice # 1

// - Écrivez la suite d'actions à réaliser pour vérifier si le ticket de loterie que le client vous tend est gagnant.
// - Si le chiffre est compris entre 1 et 5 annoncer au client qu'il a gagné, autrement indiquer lui qu'il à perdu et invitez le à rejouer.
// - Écrivez cette algortihme en pseudo code à l'aide des commentaires Javascript.

// prendre le ticket du client et sauvegarder sa valeur dans une variable constante;
// créer une variable boolean nommée 'clientGagnant' et l'assigner false;
// SI la valeur du ticket est entre 1 (inclus) et 5 (inclus), réassigner la constante 'clientGagant' à true.
// AUTREMENT, laisser la variable assignée à false;
// RETURN la variable 'clientGagnant'

let clientGagnant: boolean = false;
const clientTicket: number = 5;

function declareWinner(clientTicket: number) {
  if (clientTicket >= 1 || clientTicket <= 5) {
    let clientGagnant = true;
    console.log("Bravo vous avez gagné");
    return clientGagnant;
  } else {
    let clientGagnant = false;
    console.log("Dommage... Voulez-vous rejouer?");
  }
}
/* declareWinner(5); */
// Exerice # 2

// - Écrivez la suite d'actions à réaliser pour connaitre le montant des courses du clients TTC.
// - Votre caisse enregistreuse est cassées, vous devez aditionner les prix HT de chaque produit du client et y ajouter la TVA de 20%.
// - Écrivez cette algortihme en pseudo code à l'aide des commentaires Javascript.

// Enregister le montant HT dans une variable 'montantHT'
// Déclarer une fonction calculTTC qui prend comme argument la valeur de la variable.
// La fonction crée une variable prixTTC à laquelle on assigne montantHT * 1,2.
// La fonction retourne prixTTC.
// const montantHT: number = 1000;
function calculTTC(...elements) {
  for (let element of elements) {
    return element * 1.2;
  }
  // let prixTTC: number;
  // return (prixTTC = montantHT * 1.2);
}

// Exercice # 3

// - Typer les constantes suivantes :
// const organism: string = "Simplon";
// const learners: number = 15;
// const promotionStarted: boolean = true;
// const learnerNames: Array<string> = [
//   "Vincent",
//   "Toufik",
//   "Tom",
//   "Samuel",
//   "Orhan",
// ];
// const pedagogicalReferent: Object = { name: "Tiphaine", work: "Simplon" };
// const absentLearner: undefined = undefined;
// const excludedLearner: unknown = unknown;

// Exercice # 4

// - Créer une fonction Javascript avec une constante nommée "country", cette constante est typée grâce à Typescript et contient le nom d'un pays.
// - Faire s'afficher le contenu de la constante dans la console du navigateur.
const country = "France";
function displayCountry(countryName: string) {
  console.log(countryName);
}
/* displayCountry(country); */

// Exercice # 5

// - Créer une fonction Javascript avec deux constantes nommées : "firstName" et "lastName", ces deux constantes sont typées grâce à Typescript et contiennent vos nom / prénom.
// - Faire s'afficher la concaténation de ces deux variables dans la console du navigateur.

function displayName(firstName: string, lastName: string) {
  // const firstName: string = "Orhan";
  // const lastName: string = "Madi Assani";
  console.log(`My name is ${firstName} and my last name is ${lastName}`);
  console.log(firstName + lastName);
}
/* 
displayName("Chris", "Moron"); */
