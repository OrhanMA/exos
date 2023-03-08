"use strict";

// ex 1

console.log("----- EX 1 -----");

function fullAdress() {
  const adress: string = "Blvd des Champs Elysees";
  const zipCode: number = 75000;
  return adress + "" + zipCode;
}
console.log(fullAdress());

// ex 2

console.log("----- EX 2 -----");

const osef: number = 1;
function osefTo10(osef) {
  for (let i = 0; osef < 10; i++) {
    console.log(osef);
    osef++;
  }
  return osef;
}
console.log(osefTo10(osef));

// ex 3

console.log("----- EX 3 -----");

function favoriteCountries() {
  let country: string[] = ["France", "Turkey", "Comoros", "Morocco", "Canada"];
  for (let i = 0; i < country.length; i++) {
    console.log(country[i]);
  }
  console.log("End of array");
}
console.log(favoriteCountries());

// ex 4

console.log("----- EX 4 -----");

const phrase: string = "developpement";
function splitString(phrase) {
  return phrase.split("").join(",");
}

console.log(splitString(phrase));

console.log(Array.from(phrase));

// ex  5

console.log("----- EX 5 -----");

const destroyedPhrase: string[] = [
  "d",
  "e",
  "v",
  "e",
  "l",
  "o",
  "p",
  "p",
  "e",
  "m",
  "e",
  "n",
  "t",
];
console.log(destroyedPhrase.join(""));
