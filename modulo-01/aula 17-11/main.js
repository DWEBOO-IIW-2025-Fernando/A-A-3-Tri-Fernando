//Exercício 1
console.log(10 + 19 + 8 *4); //60
console.log((10/2) * 4); //20
console.log(2**3 + 1); //9
console.log(17 % 5); //2
console.log(20 % 4); //0

// Exercício 2
console.log(90 > 10);
console.log(10 == '10');
console.log(10 == 10);
console.log('ifpr' ==='IFPR');
console.log(5 >= 5 && 3 > 4);
console.log(5 >= 5 || 3 >4);
console.log(!(5 >= 5));

//Exercício 3
var msg = window.prompt('Insira o ano para verificar se ele é bissexto:');

if ((msg % 4 == 0 && msg % 100 != 0) || (msg % 400 == 0)) {
    window.alert('ano bissexto');
} else {
    window.alert('ano não bissexto');
}
msg = 'done';

if (msg === 'done') {
    window.alert('calculador di média (coloque somente números >:(');
    var nota1 = window.prompt('Nota 1:');
    var nota2 = window.prompt('Nota 2:')
    var nota3 = window.prompt('Nota 3:')

    var media = window.prompt('sua média é: ' + (nota1 + nota2 + nota3)/3)

}