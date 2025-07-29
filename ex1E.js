const prompt = require("prompt-sync")();

let distancia = Number(prompt("Distância da viagem (km): "));
let consumo = Number(prompt("Consumo do carro (km/l): "));
let precoGasolina = Number(prompt("Preço da gasolina: "));

let litrosNecessarios = distancia / consumo;
let custo = litrosNecessarios * precoGasolina;

console.log(`Serão necessários ${litrosNecessarios.toFixed(2)} litros e a viagem custará R$${custo.toFixed(2)}`);
