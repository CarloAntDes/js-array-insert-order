

function generate_random_number(numero_minimo, numero_massimo) {

var numero_random = Math.floor(Math.random() * (numero_massimo - numero_minimo + 1) + numero_minimo);

return numero_random;
}

//numero compreso tra 0 e 10
var numero_1 = generate_random_number(0, 10);
console.log(numero_1);

//numero compreso da 100 e 1000
var numero_2 = generate_random_number(100, 1000);
console.log(numero_2);
