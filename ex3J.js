const prompt = require("prompt-sync")();
let pares = 0, impares = 0;

for (let i = 1; i <= 30; i++) {
    let num = Number(prompt(`Número ${i}: `));
    if (num % 2 === 0) pares++;
    else impares++;
}

console.log(`Pares: ${pares}, Ímpares: ${impares}`);
