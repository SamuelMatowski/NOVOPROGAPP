const prompt = require("prompt-sync")();
let vetor = [];
let maior = -Infinity;
let indiceMaior = -1;

for (let i = 0; i < 30; i++) {
    let valor = Number(prompt(`Valor ${i + 1}: `));
    vetor.push(valor);
    if (valor > maior) {
        maior = valor;
        indiceMaior = i;
    }
}

console.log(`Maior valor: ${maior} na posição ${indiceMaior}`);
