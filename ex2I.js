const prompt = require("prompt-sync")();

let anos = Number(prompt("Quantos anos você fuma? "));
let cigarrosPorDia = Number(prompt("Quantos cigarros por dia? "));
let precoCarteira = Number(prompt("Preço da carteira com 20 cigarros: "));

let totalCigarros = cigarrosPorDia * 365 * anos;
let totalCarteiras = totalCigarros / 20;
let gasto = totalCarteiras * precoCarteira;

console.log(`Você já gastou R$${gasto.toFixed(2)}`);
if (gasto > 10000) {
    console.log("Você já gastou muito!");
}
