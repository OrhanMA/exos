"use strict";

console.log("---- fichier exercice_3.ts ----");

console.log("--- EX 1 ---");

// Exercice # 1

// Créer une constante "data", elle contient un tableau avec les valeurs suivantes : ['Théo', 'Martin', 'Lucas', 'Antoine', 'Etienne'], veillez à bien le typer.
// À l'aide d'une boucle parcourez le tableau "data" et n'afficher dans la console du navigateur que les prénoms avec moins ou egale 5 lettres.

const data: string[] = ["Theo", "Martin", "Lucas", "Antoine", "Etienne"];
for (let i = 0; i < data.length; i++) {
  if (data[i].length <= 5) {
    console.log(data[i]);
  } else {
    continue;
  }
}

console.log("--- EX 2 ---");

// Exercice # 2

// Créer une CONSTANTE "countries", elle contient un tableau avec 5 pays de votre choix, veillez à bien le typer.

const countries: string[] = [
  "France",
  "Espagne",
  "Italie",
  "Allemagne",
  "Suisse",
];
// Créer une VARIABLE "sentence", elle contient une string vide, veillez à bien le typer.
let sentence: string = "";
// À l'aide d'une boucle parcourez le tableau "countries" et ajouter chaque valeur dans la string de la variable "sentence" avec une virgule entre chaque.
for (let i = 0; i < countries.length; i++) {
  if (i === 0) {
    sentence += `${countries[i]}`;
  } else {
    sentence += `, ${countries[i]}`;
  }
}

console.log(sentence);
// Lorsque l'itération est terminée vous afficherez le tableau de resultat dans la console du navigateur.
// Attendu : "France, Allemagne, Italie, Suisse, Belgique"

console.log("--- EX 3 ---");

// Exercice # 3

// Créer une constante "numbers", elle contient le tableau suivant [123, 999, 340, 12390], veillez à bien le typer.
const numbers: number[] = [123, 999, 340, 12390];
// Créer une variable "results", elle contient un tableau vide. Ce tableau servira plus tard, veillez à bien le typer.
let results: number[] = [];
// À l'aide d'une boucle multiplier chaque valeur du tableau "numbers" par 180.
for (let i = 0; i < numbers.length; i++) {
  numbers[i] *= 180;
}
console.log(numbers);
// Vous stockerez chaque résultat dans le tableau "results", lorsque l'itération est terminée vous afficherez le tableau de resultat dans la console du navigateur.
// Aide : regarder sur Google comment insérer des valeurs dans un tableau, ici on cherche à pousser dans le tableau "results"

console.log("--- EX 4 ---");

// Exercice # 4

// Créer une constante contenant l'objet suivant : { name: 'Marchal', surname: 'Mickeal', age: 19 }, veillez à bien le typer.
let person: Object = {
  name: "Marchal",
  surname: "Mickeal",
  age: 19,
};
// À l'aide d'une condition vérifier si Mickeal est bien majeur, si c'est le cas afficher un message dans la console du navigateur.
if (person.age >= 18) {
  console.log(`${person.surname} est majeur`);
} else if (person.age < 18) {
  console.log(`${person.surname} est mineur`);
} else {
  console.log("Je sais pas poto");
}

console.log("--- EX 5 ---");

// Exercice # 5

// Créer une constante contenant un objet, cet objet contient les clés suivantes: "nom", "prénom", "age". Vous êtes libres de choisir les valeurs associées, veillez à bien typer.

class Person {
  name: string;
  surname: string;
  age: number;
  constructor(name: string, surname: string, age: number) {
    this.name = name;
    this.surname = surname;
    this.age = age;
  }
}
const orhan = new Person("Orhan", "Madi Assani", 20);
// Exploitez l'objet de sort à afficher dans le navigateur une phrase se présentant comme cela : "bonjour mon nom est <insérer nom> <insérer prénom>, j'ai <insérer age>"
console.log(
  `Bonjour, mon nom est ${orhan.name} ${orhan.surname} et j'ai ${orhan.age} ans`
);

console.log("--- EX 6 ---");

// Exercice # 6

// Créer une constante contenant contenant un tableau de 5 objets, chaque objet à la forme de celui de l'exercice # 5, veillez à bien le typer.
const bigArray: Object[] = [
  new Person("Pierre", "Pololo", 25),
  new Person("Luc", "Zapata", 30),
  new Person("Jean", "Pigeon", 50),
  new Person("John", "Tiktok", 15),
  new Person("Vic", "Pocho", 40),
];

for (let i = 0; i < bigArray.length; i++) {
  console.log(
    `Bonjour, mon nom est ${bigArray[i].name} ${bigArray[i].surname} et j'ai ${bigArray[i].age} ans`
  );
}
// À l'aide d'une boucle parcourez le tableau d'objet et afficher dans la console du navigateur la même phrase que l'exercice # 5 pour chaque valeur du tableau.

console.log("--- EX 7 ---");

// Exercice # 7

// Pousser ce que vous avez produit dans votre repo Github et partagez moi l'url ;)
