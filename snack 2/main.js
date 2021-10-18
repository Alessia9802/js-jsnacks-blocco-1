/*
L’utente inserisce due parole in successione, con due prompt.
Il software stampa prima la parola più corta, poi la parola più lunga. 
 */

/* console.log(primaParola, secondaParola); */

const corta = prompt("Inserisci una parola");
const lunga = prompt("Inserisci un'altra parola");

/* console.log("corta", "lunga"); */

if (corta < lunga) {
  console.log(corta);
} else if (lunga > corta) {
  console.log(lunga);
} else {
  console.log(corta, lunga);
}
