/* Il software deve chiedere per 10 volte all’utente di inserire un numero.
Il programma stampa la somma di tutti i numeri inseriti. */

const arr = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
var length = arr.length;
for (var i = 0; i < arr.length; i++) {
  const askNumber = parseInt(prompt("Inserisci un numero"));
  console.log(askNumber + arr[1]);
}
