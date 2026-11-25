/*for (let n = 0; n <= 1000; n++) {
    if (n%7 === 0 && n%2 === 0) {
        console.log(n)
    }
}


let total = 0;
while (true) {
    const entrada = prompt('Valor do item (ou "fim para encerrar")');
}


for (let tabuada = 1; tabuada <= 10; tabuada++) {
    console.log(`------ Tabuada do ${tabuada} ------`)
    for (let x = 1; x <= 10; x++) {
        console.log(`${tabuada} X ${x} = ${tabuada*x}`)
    }
1
}


for (let linha = 1; linha <= 8; linha++) {
    const espacos = " ".repeat(8 - linha);
    const desenhu = "*".repeat(2 * linha - 1);
    console.log(espacos + desenhu);
}
console.log("      |||");
console.log("      |||");

*/
const qtdeAlunos = Number(prompt('Quantos alunos em sala?'));
let soma = 0;
let maior = -Infinity;
let menor = Infinity;
let aprovados = 0;

for (let j =1; j <=qtdeAlunos; j++) {
    const nota = Number(prompt(`Nota do aluno ${j}`));
    soma +=nota;
    if (nota > maior) maior=nota;
    if (nota < menor) menor=nota;
    if (nota >=60) aprovados++;
}
console.log(`Média geral ${(soma/qtdeAlunos).toFixed(1)}`)
console.log(`Maior: ${maior} | Menor: ${menor}`)
console.log(`Quantidade de aprovados: ${aprovados}`)