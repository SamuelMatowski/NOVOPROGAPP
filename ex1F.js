const prompt = require("prompt-sync")();

let totalConta = Number(prompt("Digite o valor total da conta: "));
let qtdPessoas = Number(prompt("Digite o número de pessoas: "));
let valorPorPessoa = totalConta / qtdPessoas;
console.log(`Cada pessoa deve pagar R$${valorPorPessoa.toFixed(2)}`);
