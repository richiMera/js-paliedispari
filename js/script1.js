// Chiedere all’utente di inserire una parola.
// Creare una funzione per capire se la parola inserita è palindroma.

var parolaUtente = prompt("insrisci una parola");

function revString(str) {
  return str.split("").reverse().join("");
};

var reverse = revString(parolaUtente)
console.log(reverse);

if (parolaUtente == reverse) {
  alert("la parola è polindroma ");
} else {
  alert("la parola è diversa");
};
