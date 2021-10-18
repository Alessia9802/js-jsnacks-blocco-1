/*
L’utente inserisce due parole in successione, con due prompt.
Il software stampa prima la parola più corta, poi la parola più lunga. 
 */

/* console.log(primaParola, secondaParola); */

const parolaUno = prompt("Inserisci una parola");
const parolaDue = prompt("Inserisci un'altra parola");

/* console.log("corta", "lunga"); */

if (parolaUno.length < parolaDue.length) {
  console.log(parolaUno, parolaDue);
} else if (parolaDue.length < parolaUno.length) {
  console.log(parolaDue, parolaUno);
} else {
  console.log("sono uguali");
}
