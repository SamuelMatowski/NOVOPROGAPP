const prompt = require("prompt-sync")();
let idade = Number(prompt("Digite sua idade: "));

if (idade <= 12) {
    console.log("Criança");
} else if (idade <= 17) {
    console.log("Adolescente");
} else if (idade <= 64) {
    console.log("Adulto");
} else {
    console.log("Idoso");
}
