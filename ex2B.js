const prompt = require("prompt-sync")();

let numero = Number(prompt("Digite um número: "));
if (numero % 2 === 0) {
    console.log("Número par");
} else {
    console.log("Número ímpar");
}
