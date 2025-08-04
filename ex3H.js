const prompt = require("prompt-sync")();
let totalClientes = 0, negativos = 0;

while (true) {
    let conta = Number(prompt("Número da conta (0 para sair): "));
    if (conta === 0) break;

    let saldo = Number(prompt("Saldo: "));
    let status = saldo >= 0 ? "Positivo" : "Negativo";
    console.log(`Conta ${conta}: Saldo R$${saldo} - ${status}`);

    totalClientes++;
    if (saldo < 0) negativos++;
}

if (totalClientes > 0) {
    let percentual = (negativos / totalClientes) * 100;
    console.log(`Percentual de clientes com saldo negativo: ${percentual.toFixed(2)}%`);
}
