const prompt = require("prompt-sync")();
let qtd = Number(prompt("Quantas pessoas? "));

let maisJovem = Infinity, maisVelho = -Infinity;
let nomeJovem = "", nomeVelho = "";

for (let i = 1; i <= qtd; i++) {
    let nome = prompt(`Nome da pessoa ${i}: `);
    let idade = Number(prompt("Idade: "));

    if (idade < maisJovem) {
        maisJovem = idade;
        nomeJovem = nome;
    }

    if (idade > maisVelho) {
        maisVelho = idade;
        nomeVelho = nome;
    }
}

console.log(`Mais jovem: ${nomeJovem}, ${maisJovem} anos`);
console.log(`Mais velho: ${nomeVelho}, ${maisVelho} anos`);
