//Gioco carta sasso o forbici

//Creo un array con i tre elementi

var gioco = ["sasso", "carta", "forbici"];
console.log(gioco);

//devo creare un sistema che mi faccia scegliere, in modo casuale, gli elementi

var giocatore_1 = Math.floor(Math.random()* 3);
console.log(giocatore_1);

var giocatore_2 = Math.floor(Math.random()* 3);
console.log(giocatore_2);

//creo un sistema che non mi stampi la posizione degli elementi di gioco, ma gli
//elementi presenti nella variabile gioco
var azione_giocatore_1 = gioco[giocatore_1];
console.log(azione_giocatore_1);

var azione_giocatore_2 = gioco[giocatore_2];
console.log(azione_giocatore_2);

//ora devo stampare i risultati
//partiamo con il caso più facile: il pareggio

//se il numero random di giocatore_1 è uguale a quello di giocatore_2: pareggio
if (azione_giocatore_1 == azione_giocatore_2) {
  document.writeln("Pareggio")
}
//Solo se non hanno pareggiato, si verificheranno le altre condizioni:

//se giocatore_1 gioca sasso e giocatore_2 gioca forbici, vince giocatore_1
else if (azione_giocatore_1 == "sasso" && azione_giocatore_2 == "forbici") {
  document.writeln("Giocatore 1 Ha vinto!")
}

//se giocatore_1 gioca carta e giocatore_2 gioca sasso, vince giocatore_1
else if (azione_giocatore_1 == "carta" && azione_giocatore_2 == "sasso") {
  document.writeln("Giocatore 1 Ha vinto!")
}
//se giocatore_1 gioca forbici e giocatore_2 gioca carta, vince giocatore_1
else if (azione_giocatore_1 == "forbici" && azione_giocatore_2 == "carta") {
  document.writeln("Giocatore 1 Ha vinto!")
}

//se giocatore_2 gioca sasso e giocatore_1 gioca forbici, vince giocatore_2
else if (azione_giocatore_2 == "sasso" && azione_giocatore_1 == "forbici") {
  document.writeln("Giocatore 2 Ha vinto!")
}

//se giocatore_2 gioca carta e giocatore_1 gioca sasso, vince giocatore_2
else if (azione_giocatore_2 == "carta" && azione_giocatore_1 == "sasso") {
  document.writeln("Giocatore 2 Ha vinto!")
}

//se giocatore_2 gioca forbici e giocatore_1 gioca carta, vince giocatore_2
else if (azione_giocatore_2 == "forbici" && azione_giocatore_1 == "carta") {
  document.writeln("Giocatore 2 Ha vinto!")
}
