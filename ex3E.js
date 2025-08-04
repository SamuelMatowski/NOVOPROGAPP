const prompt = require("prompt-sync")();
let soma = 0, count = 0;
let maior = -Infinity, menor = Infinity;

while (true) {
    let num = Number(prompt("Digite um número (0 para sair): "));
    if (num === 0) break;

    soma += num;
    count++;

    if (num > maior) maior = num;
    if (num < menor) menor = num;
}

if (count > 0) {
    let media = soma / count;
    console.log(`Maior: ${maior}, Menor: ${menor}, Média: ${media.toFixed(2)}`);
} else {
    console.log("Nenhum número foi inserido.");
}
