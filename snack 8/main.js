/*
Chiedi un numero di 4 cifre all’utente
e calcola la somma di tutte le cifre che compongono il numero. 
 */

let sum = 0;
const numberAsk = prompt("Inserisci un numero di quattro cifre");
console.log(numberAsk);

for (let i = 0; i < numberAsk.length; i++) {
  const num = Number(numberAsk[i]);
  sum += num;
}

console.log(sum);
