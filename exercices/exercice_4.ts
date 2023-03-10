'use strict'

// Exercice # 1

// Typer la constante "students"
// Séparer les étudiants majeurs et non-majeurs dans deux tableaux différents.
// Faite la moyenne de l'âge des étudiants

const students: object[] = [
  {
    name: "Paul",
    age: 19,
    major: true,
  },
  {
    name: "Julie",
    age: 16,
    major: false,
  },
  {
    name: "Jacques",
    age: 49,
    major: true,
  },
  {
    name: "Marie",
    age: 12,
    major: false,
  },
];

const sum: number = 0;
for (let i = 0; i < students.length; i++) {
  if (students[i].major !== true) {
    console.log(
      `The student ${students[i].name} is ${students[i].age} so he's not major`
    );
  } else {
    console.log(
      `The student ${students[i].name} is ${students[i].age} so he's major`
    );
  }
  sum += students[i].age;
}
console.log(sum);

// Exercice 2

// Typer la constante "fruits"
// Séparer les fruits avec un date de péremption de :
// - moins de deux jours
// - entre trois jours et une semaine
// - plus d'une semaine

const fruits = [
  {
    name: "Pomme",
    expirationInDays: 1,
  },
  {
    name: "Poire",
    expirationInDays: 16,
  },
  {
    name: "Citron",
    expirationInDays: 5,
  },
  {
    name: "Tomate",
    expirationInDays: 4,
  },
];

let fruits2days: object[] = [];
let fruits3to7Days: object[] = [];
let fruitsAbove7Days: object[] = [];

for (let i = 0; i < fruits.length; i++) {
  if (fruits[i].expirationInDays < 2) {
    fruits2days.push(fruits[i]);
  } else if (
    fruits[i].expirationInDays >= 3 &&
    fruits[i].expirationInDays <= 7
  ) {
    fruits3to7Days.push(fruits[i]);
  } else {
    fruitsAbove7Days.push(fruits[i]);
  }
}
console.log(`Less than 2 days fruits contains: ${fruits2days.length} element`);
console.log(
  `Between 3 and 7 days fruits contains: ${fruits3to7Days.length} element`
);
console.log(`Above 7 days fruits contains: ${fruitsAbove7Days.length} element`);
// Exercice 3

// Typer la constante "players"
// Pour chaque joueur afficher dans la console un message comme celui-ci :
// "<nom_du_joueur> possède les cartes : <carte_1>, <carte_2>, <carte_3>, <carte .......>"

const players: object[] = [
  {
    name: "Marie",
    cards: ["Dracofeu", "Chenipan", "Rondoudou"],
  },
  {
    name: "Bilal",
    cards: ["Mew", "Tortank"],
  },
  {
    name: "Sarah",
    cards: ["Dracoloss", "Dardagnan", "Roucoul"],
  },
  {
    name: "Joe",
    cards: ["Roucoups", "Colosinge", "Insecateur", "Tignon"],
  },
];

for (let i = 0; i < players.length; i++) {
  console.log(`${players[i].name} owns the cards: ${players[i].cards}`);
}
