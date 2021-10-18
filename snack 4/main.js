/*
In un array sono contenuti i nomi degli invitati alla festa del grande
Gatsby, chiedi all’utente il suo nome e comunicagli se può partecipare o
no alla festa. 
 */

const invitatiGatsby = [
  "Jay Gatsby",
  "Tom Buchanan",
  "Jordan Backer",
  "Daisy Buchanan",
];

console.log(invitatiGatsby);

const userName = prompt("Qual è il tuo nome?");
let invito;

if (userName != invitatiGatsby) {
  console.log("Puoi partecipare");
} else if (userName == invitatiGatsby) {
  console.log("non puoi partecipare");
} else {
  console.log("alla prossima");
}
