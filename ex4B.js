const prompt = require("prompt-sync")();
let notas = [];

for (let i = 0; i < 35; i++) {
    let nota = Number(prompt(`Nota do aluno ${i + 1}: `));
    notas.push(nota);
}

console.log("Notas maiores ou iguais a 7.0:");
for (let i = 0; i < notas.length; i++) {
    if (notas[i] >= 7.0) {
        console.log(`Aluno ${i + 1}: ${notas[i]}`);
    }
}
