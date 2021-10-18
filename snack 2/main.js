/*
L’utente inserisce due parole in successione, con due prompt.
Il software stampa prima la parola più corta, poi la parola più lunga. 
 */

/* console.log(primaParola, secondaParola); */

let words = true;

while (words) {
  const primaParola = prompt("Inserisci una parola");
  const secondaParola = prompt("Inserisci un'altra parola");

  if (primaParola < secondaParola.length) {
    console.log("questa è la più corta");
  } else if (secondaParola > primaParola.length) {
    console.log("questa è la parola più lunga");
  } else {
    words = false;
  }
}
