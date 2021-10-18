// JS Snack 1

/* L’utente inserisce due numeri in successione, con due prompt.
Il software stampa il maggiore. */

const primo = parseInt(prompt("Inserisci un numero"));
console.log(primo);
const secondo = parseInt(prompt("Inserisci un secondo numero"));
console.log(secondo);

if (primo > secondo) {
  console.log(primo);
} else if (secondo > primo) {
  console.log(secondo);
} else {
  console.log("sono uguali");
}
