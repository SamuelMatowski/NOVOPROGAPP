const prompt = require("prompt-sync")();
let n = Number(prompt("Digite um número: "));
console.log(`Divisores de ${n}:`);

for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
        console.log(i);
    }
}
