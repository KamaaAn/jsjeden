// plik scripts.js
var text = "Papugi koszą trawę, unosząc się nad ziemią 15 centymetrów, na czerwonych dywanach.";
var animal = "Zielone słonie";
var upperCaseAnimal = animal.toUpperCase();
var newText = text.replace("Papugi", upperCaseAnimal);
var shortNewText = newText.substr(0, newText.length/2);
console.log(shortNewText);
