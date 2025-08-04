const prompt = require("prompt-sync")();
let nomes = [];
let notas = [];

for (let i = 0; i < 35; i++) {
    let nome = prompt(`Nome do aluno ${i + 1}: `);
    let nota = Number(prompt(`Nota do ${nome}: `));
    nomes.push(nome);
    notas.push(nota);
}

console.log("Alunos com nota >= 7.0:");
for (let i = 0; i < notas.length; i++) {
    if (notas[i] >= 7.0) {
        console.log(`${nomes[i]}: ${notas[i]}`);
    }
}
