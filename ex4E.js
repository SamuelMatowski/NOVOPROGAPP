const prompt = require("prompt-sync")();
let vetor = [];

for (let i = 0; i < 30; i++) {
    let valor = Number(prompt(`Valor ${i + 1}: `));
    if (i % 2 === 0) {
        valor *= 1.02; // posição par
    } else {
        valor *= 1.05; // posição ímpar
    }
    vetor.push(Number(valor.toFixed(2)));
}

console.log("Vetor com valores atualizados:", vetor);
