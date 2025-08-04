let frutas = ["banana", "morango", "uva", "maçã", "melancia", "abacate"];


console.log("=== BLOCO 1: Frutas ===");
console.log("Fruta na posição 1:", frutas[1]);
console.log("-----------------------------");

for (let contador = 0; contador <= 5; contador++) {
    console.log(`Contador: ${contador}`);
    console.log("Fruta:", frutas[contador]);
    console.log(`A fruta ${frutas[contador]} está na posição ${contador}`);
    console.log("A fruta", frutas[contador] + " está na posição", contador);
    console.log("-----------------------------");
}

console.log("\n===============================\n");


console.log("=== BLOCO 2: Contagem Regressiva ===");

for (let i = 10; i >= 0; i--) {
    if (i == 10) {
        console.log("Iniciando contagem regressiva...");
    }
    console.log(i);
    if (i == 0) {
        console.log("💥 BOOMMMMMMMMMM 💥");
    }
}
