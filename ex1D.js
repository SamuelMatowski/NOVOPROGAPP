const prompt = require("prompt-sync")();

let valorProduto = 120;
let desconto = valorProduto * 0.15;
let valorComDesconto = valorProduto - desconto;
let taxaEntrega = 10;
let valorFinal = valorComDesconto + taxaEntrega;
console.log("Valor final do pedido:", valorFinal.toFixed(2));
