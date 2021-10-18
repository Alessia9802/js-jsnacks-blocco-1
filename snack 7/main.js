//Stampa le potenze di 2 fino a 1000.

const numero = 2;
const potenza = Math.pow(numero, 2);
console.log(numero, potenza);

let i = 0;

for (let i = 0; i <= 1000; i++) {
  console.log(Math.pow(i, 2));
}
