/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.

*/

/* SCRIVI QUI LA TUA RISPOSTA */
let x = 10;
let y = 20;

if (x > y) {
  console.log("il numero più grande è ", x);
} else if (x === y) {
  console.log("I numeri sono uguali");
} else console.log("il numero più grande è ", y);

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
console.log("ESERCIZIO 2");
x = 5;
console.log(x !== 5 ? "Not equal" : "Equal");

x = 10;

if (x !== 5) {
  console.log("not equals");
} else console.log("equal");

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un xro fornito è perfettamente divisibile per 5 (suggerimento: usa l'operatore modulo)
*/
/* SCRIVI QUI LA TUA RISPOSTA */
console.log("ESERCIZIO 3");
x = 10;
if (x % 5) {
  console.log("divisibile per 5");
} else console.log("non divisibile per 5");
/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
console.log("ESERCIZIO 4");
x = 4;
y = 4;
//! x=8
console.log(x + y === 8 || x === 8 || y === 8);

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
console.log("ESERCIZIO 5");
let totalShoppingCart = 100;
const spedizione = 10;
console.log(
  totalShoppingCart > 50
    ? "il totale è " + totalShoppingCart
    : "il totale è " + (totalShoppingCart + spedizione)
);

console.log(totalShoppingCart + 10 * (totalShoppingCart <= 50)); //!
/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
console.log("ESERCIZIO 6");
console.log(totalShoppingCart * 0.8 + 10 * (totalShoppingCart <= 50));
//1 metodo
totalShoppingCart = totalShoppingCart * 0.8;
console.log(
  totalShoppingCart > 50
    ? "il totale è " + totalShoppingCart
    : "il totale è " + (totalShoppingCart + spedizione)
);
//2 metodo
console.log(totalShoppingCart + 10 * (totalShoppingCart <= 50));
//3 metodo

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
console.log("ESERCIZIO 7");
const numeri = [10, 40, 30];
console.log(numeri.sort().reverse());

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/
/* SCRIVI QUI LA TUA RISPOSTA */
console.log("ESERCIZIO 8");
x = "cadrega";
console.log(typeof x === "number");
/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/
/* SCRIVI QUI LA TUA RISPOSTA */
console.log("ESERCIZIO 9");
x = 10;
console.log(x % 2 === 0 ? "Pari" : "Dispari");

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  
*/
/* SCRIVI QUI LA TUA RISPOSTA */
console.log("ESERCIZIO 10");

let val = 7.3;
// prova con val = "A"
if (typeof val === "number") {
  if (val < 10) {
    console.log("Meno di 10");
  } else if (val < 5) {
    console.log("Meno di 5");
  } else {
    console.log("Uguale a 10 o maggiore");
  }
} else console.log("non è un numero");

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/
/* SCRIVI QUI LA TUA RISPOSTA */
console.log("ESERCIZIO 11");

const me = {
  name: "John",
  lastName: "Doe",
  skills: ["javascript", "html", "css"],
};

me.city = "Toronto";
console.log(me);
console.log(me.city);

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/
/* SCRIVI QUI LA TUA RISPOSTA */
console.log("ESERCIZIO 12");

delete me.lastName;
console.log(me);
/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/
/* SCRIVI QUI LA TUA RISPOSTA */
console.log("ESERCIZIO 13");

me.skills.pop();
console.log(me);

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
console.log("ESERCIZIO 14");

let numeri2 = [];
for (let i = 1; i <= 10; i++) {
  numeri2 = numeri2 + i;
}
console.log(numeri2);

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("ESERCIZIO 15");

let numeri3 = new Array(10);

for (let i = 0; i < 10; i++) {
  numeri3[i] = i + 1;
}

console.log(numeri3);
numeri3.splice(9, 1, 100);
console.log(numeri3);
