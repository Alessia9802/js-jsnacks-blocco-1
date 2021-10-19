//Stampa le potenze di 2 fino a 1000.

/* const numero = 2;
const potenza = Math.pow(numero, 2);
console.log(numero, potenza); */

let i = 0;

for (let i = 0; Math.pow(2, n) < 1000; i++) {
  console.log(Math.pow(2, i));
}
