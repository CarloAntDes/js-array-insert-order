/*
Chiedi all'utente il cognome, inseriscilo in un array con altri cognomi e
stampa la lista ordinata alfabeticamente.
Scrivi a che posizione della lista il nuovo utente si trova.
*/

//Creo l'array con all'interno i cognomi
var array_cognomi = ["desantis", "mosca", "basile", "forghieri", "navelli"];

//Chiedo all'utente il cognome
var cognome_utente = prompt("Dimmi cognome");

//Pusho il cognome nell'array
//Cosa devo pushare in array_cognomi? nome_utente
array_cognomi.push(cognome_utente);

//Stampo la lista ordinata alfabeticamente:
array_cognomi.sort();
document.writeln(array_cognomi);

var posizione_utente = 0;
//Devo dire a che posizione si trova l'utente, quindi devo
//eseguire un controllo di tutto l'array, utilizzando il ciclo for
for (var i = 0; i < array_cognomi.length; i++) {

  // posizione_utente == array_cognomi[i];

  if (cognome_utente == array_cognomi[i]) {
    posizione_utente = i;
  }

}
console.log(posizione_utente);
