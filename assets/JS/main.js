console.log('Olá.');

let nomeDaVariavel = 'Valor da variável';
let outraVariavel = 'valor de outra variável';
let variavelNumero = 1980;
let variavelCheiroNaSala = false;
let variavelIndefinida;
// const nome = 'Nomezinho'; -- não poderá ser re-atribuída
// let contatodor = 0; -- o valor pode ser alterado
// var antigo = 'evite!' -- forma antiga, n usar!!!!111!11!!11!!!1
// nome = 'Joohnnnn'

console.log(nomeDaVariavel);
console.log(outraVariavel);
console.log(variavelNumero);
console.log(variavelCheiroNaSala);
console.log(variavelIndefinida);




// dia 07


const texto = 'A Rafaella não pode falar nada q o Maçaneta incomoda';
const num = 42;
const ativo = true;

console.log(typeof texto);
console.log(typeof num);
console.log(typeof ativo);

const aluno = 'Rafaela';
const conceito1T = 8.5;
const conceito2T = 2.0;
const conceito3T = 5.0;

const media = ((conceito1T + conceito2T + conceito3T)/3)
const resultado = media >= 7 ? 'Aprovado' : 'Reprovado';

console.log(`O aluno ${aluno} obteve média ${media.toFixed(2)} e foi ${resultado}`)

document.getElementById('saida').textContent = `O aluno ${aluno} obteve média ${media.toFixed(2)} e foi ${resultado}`;