const prompt = require("prompt-sync")();

let n1 = Number(prompt("Nota 1:"));
let n2 = Number(prompt("Nota 2:"));
let n3 = Number(prompt("Nota 3:"));
let media = (n1 + n2 + n3) / 3;

if (media >=7) {
    console.log ("Aprovado com média:", media.toFixed (2));
} else {
    console.log ("Reprovado com média:", media.toFixed (2));
}