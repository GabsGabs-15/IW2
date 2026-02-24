//Texto
let nome = "Gabriel";
let nome2 = "Filip";

console.log("Meu nome é: " + nome);
console.log(nome2);

//Números
let num = 17;
console.log("eu tenho " + num + " anos");

//Booleanos

let maiorDe18Anos = true;
console.log(maiorDe18Anos);

//null e undefined

let testeNull = null;
let numero2 = 3
if (testeNull != null) {
    console.log("não é nulo!");
}
else{
    console.log("É nulo")
}
let testeUndefined;

console.log(testeNull);
console.log(testeUndefined);
console.log(testeUndefined * 2);
console.log("6" + 4);
console.log("6" - 4);
console.log("6" * 4);
console.log("6" / 4);

let numero = 1;
let numeroString = String(numero);
let string = "86";
let stringNumero = Number(string);

console.log(typeof numero, numero);
console.log(typeof numeroString, numeroString);
console.log(typeof string, string);
console.log(typeof stringNumero, stringNumero);

//Tipos de variaveis em JS

//let

let teste = 2;
teste = 4;

if (teste == 4){
    console.log(teste);
}

//Operadores

let contador = 0;
contador++; //Pega o valor da variael contador e adiciona +1
contador=+ 3; // Pega o valor de contador e adiciona o valor especificado
console.log (contador += 3);

//>=, <=, ||, &&, ==, ===
//== identifica apenas o valor
//=== identifica o valor e o tipo