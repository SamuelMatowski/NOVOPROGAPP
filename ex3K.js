const prompt = require("prompt-sync")();
let fem21 = 0, masc18 = 0;
let somaMasc = 0, somaFem = 0, countMasc = 0, countFem = 0;

for (let i = 1; i <= 200; i++) {
    let nome = prompt(`Nome do estudante ${i}: `);
    let idade = Number(prompt("Idade: "));
    let sexo = prompt("Sexo (M/F): ").toUpperCase();

    if (sexo === "F") {
        countFem++;
        somaFem += idade;
        if (idade > 21) fem21++;
    } else if (sexo === "M") {
        countMasc++;
        somaMasc += idade;
        if (idade > 18) masc18++;
    }
}

let mediaMasc = somaMasc / countMasc;
let mediaFem = somaFem / countFem;

console.log(`Feminino com mais de 21 anos: ${fem21}`);
console.log(`Masculino com mais de 18 anos: ${masc18}`);
console.log(`Média de idade masculina: ${mediaMasc.toFixed(2)}`);
console.log(`Média de idade feminina: ${mediaFem.toFixed(2)}`);
