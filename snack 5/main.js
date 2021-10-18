/*
Crea un array vuoto.
Chiedi per 6 volte all’utente di inserire un numero,
se è dispari inseriscilo nell’array. 
 */

const arr = [];
var length = arr.length;

console.log(arr);

for (var i = 0; i < 6; i++) {
  const arrNumber = parseInt(prompt("Inserisci un numero"));
  console.log(arrNumber);
  if (arrNumber % 3 == 0) {
    arr.push("dispari");
  }
}
