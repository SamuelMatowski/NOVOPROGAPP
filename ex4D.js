const prompt = require("prompt-sync")();
let vetor1 = [], vetor2 = [], vetorSoma = [];

for (let i = 0; i < 15; i++) {
    vetor1.push(Number(prompt(`Valor ${i + 1} do vetor 1: `)));
}
for (let i = 0; i < 15; i++) {
    vetor2.push(Number(prompt(`Valor ${i + 1} do vetor 2: `)));
}

for (let i = 0; i < 15; i++) {
    vetorSoma.push(vetor1[i] + vetor2[i]);
}

console.log("Vetor soma:", vetorSoma);
