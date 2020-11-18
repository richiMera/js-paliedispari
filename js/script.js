// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri.
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione).
// Dichiariamo chi ha vinto.

var sceltaUtente = prompt("scegli pari o dispari");
var numeroUtente = parseInt(prompt("scegli un numero da 1 a 5"));
console.log(numeroUtente);

if (sceltaUtente == "pari") {
  sceltaUtente = true;
  console.log(sceltaUtente);
} else if (sceltaUtente == "dispari") {
  sceltaUtente = false;
};

function randomNumber(min, max) {
  return Math.floor(Math.random()* (max - min) + min);
};

var x = 1;
var y = 6;

var numeroRandom = randomNumber(x, y);
console.log(numeroRandom);

var somma = numeroUtente + numeroRandom;
console.log(somma);


function pariODidpari(numero) {

  return numero % 2 == 0;
};

var verifica = pariODidpari(somma);
console.log(verifica);

if (sceltaUtente == verifica) {
  alert("HAI VINTO");
} else {
  alert("hai perso");
};
