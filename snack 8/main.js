/*
Chiedi un numero di 4 cifre all’utente
e calcola la somma di tutte le cifre che compongono il numero. 
 */

const numberAsk = prompt("Inserisci un numero di quattro cifre");
console.log(numberAsk);

const calcolo = numberAsk / 4;
console.log(calcolo);

var value = 2568,
  sum = 0;

while (numberAsk) {
  sum += value % 10;
  value = Math.floor(value / 10);
}

console.log(sum);
