let romario = 1.50;
let bebeto = 1.10;
let anos = 0;

while (bebeto <= romario) {
    romario += 0.02;
    bebeto += 0.03;
    anos++;
}

console.log(`Bebeto será mais alto que Romário em ${anos} anos.`);
