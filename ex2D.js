const prompt = require("prompt-sync")();
let idade = Number(prompt("Digite a idade: "));
let sexo = prompt("Digite o sexo (M/F): ").toUpperCase();

if (sexo === "M" && idade >= 18) {
    console.log("Alistamento militar obrigatório");
} else {
    console.log("Alistamento não obrigatório");
}
                                