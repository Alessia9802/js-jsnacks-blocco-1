// JS Snack 1

/* L’utente inserisce due numeri in successione, con due prompt.
Il software stampa il maggiore. */

const successione = ["2", "3", "5", "7", "11"];

let play = true;

for (let i = 0; i < successione.length; i++) {
  const playNumber = parseInt(prompt("Inserisci un numero 2"));
  console.log(playNumber);
  const playMultiplo = parseInt(prompt("Inserisci un suo multiplo"));
  console.log(playMultiplo);

  if (playNumber > playMultiplo) {
    console.log("you lose");
  } else if (playMultiplo > playNumber) {
    console.log("you win");
  } else {
    console.log("Riprova");
  }
}
