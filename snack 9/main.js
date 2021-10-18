/* 
Calcola la somma e la media dei primi 10 numeri.
 */

const dieciNumeri = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
console.log(dieciNumeri);

//somma
let sum = 0;

for (let i = 0; i < dieciNumeri.length; i++) {
  sum += parseInt(dieciNumeri[i]);
}
console.log(sum);
//media
console.log(sum / dieciNumeri.length);
