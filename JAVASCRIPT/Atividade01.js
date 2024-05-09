//Uso de if, else e else if

//Utilizando um laço de repetição para verificar se um número é par ou ímpar

let numero = 8;
if (numero % 2 == 0) {
    console.log("O número é par");
} else {
    console.log("O número é ímpar");
}

// Verificando o tipo de triângulo com base nos lados
let lado1 = 15;
let lado2 = 10;
let lado3 = 11;

if (lado1 == lado2 && lado2 == lado3) {
    console.log("Triângulo Equilátero");
} else if (lado1 == lado2 || lado2 == lado3 || lado1 == lado3) {
    console.log("Triângulo Isósceles");

} else {
    console.log("Triângulo Escaleno");
}
 // Utilizando o laço de repetição WHILE
 //Contando o número de trás para frente
let numero1 = 10;
while (numero1 >= 0) {
    console.log(numero1);
    numero1--;
}

//Simulação de jogo de dados até tirar 6
let resultado, tentativas = 0;
while (resultado != 6) {
    resultado = Math.floor(Math.random() * 6) + 1;
    tentativas++;
    console.log(resultado);
}
console.log("Você tirou 6 em " + tentativas + " tentativas");

// Utilizando o laço de repetição FOR
//Contando de 0 a 10
for (let i = 0; i <= 10; i++) {
    console.log(i);
}

//Imprimindo uma lista de cores
let cores = ["vermelho", "cinza", "azul", "rosa"]
for (let i = 0; i <cores.length; i++){
    console.log(cores[i]);
}

// Utilizando o Switch Case
// Verificando o dia da semana
let dia = 1;
switch (dia) {
    case 1:
        console.log("Segunda-feira");
        break;
    case 2:

        console.log("Terça-feira");
        break;
    case 3:
        console.log("Quarta-feira");
        break;
    case 4:

        console.log("Quinta-feira");
        break;
    case 5:
        console.log("Sexta-feira");
        break;
    case 6:
        console.log("Sábado");
        break;
    case 7:
        console.log("Domingo");
        break;
    default:
        console.log("Dia inválido");
        break;
}

// Verificando o tipo de operação matemática
let operacao = "+";
let resultado1;
let num1 = 10;
let num2 = 5;
switch (operacao) {
    case "+":
        resultado1 = num1 + num2;
        console.log(resultado1);
        break;
    case "-":
        resultado1 = num1 - num2;
        console.log(resultado1);
        break;
    case "*":
        resultado1 = num1 * num2;
        console.log(resultado1);
        break;
    case "/":
        resultado1 = num1 / num2;
        console.log(resultado1);
        break;
    default:
        console.log("Operação inválida");
        break;
}
console.log ("O resultado da operação " + num1 + " " + operacao + " " + num2 + " é: " + resultado1);
