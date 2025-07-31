const prompt = require("prompt-sync")();

let largura = Number(prompt("Digite a largura do terreno (m): "));
let profundidade = Number(prompt("Digite a profundidade (m): "));
let area = largura * profundidade;

let tipo = "";
if (area < 50) tipo = "Mercearia";
else if (area < 400) tipo = "Mercadinho";
else if (area < 1000) tipo = "Mercado";
else if (area < 2500) tipo = "Supermercado";
else tipo = "Hipermercado";

console.log(`Área: ${area} m² - Classificação: ${tipo}`);
