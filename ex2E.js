const prompt = require("prompt-sync")();
let maior = -Infinity;
let menor = Infinity;

for (let i = 1; i <= 5; i++) {
    let num = Number(prompt(`Digite o número ${i}: `));
    if (num > maior) maior = num;
    if (num < menor) menor = num;
}
console.log(`Maior número: ${maior}`);
console.log(`Menor número: ${menor}`);
