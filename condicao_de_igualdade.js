// Reescrever o código abaixo de maneira que ele imprima as informações de maneira correta, que faça sentido e sem erros:

// let numeroUm = 1
// let stringUm = '1'
// let numeroTrinta = 30
// let stringTrinta = '30'
// let numeroDez = 10
// let stringDez = '10'

// if (COMPARAR O numeroUm e a stringUm) {
//   console.log('As variáveis numeroUm e stringUm tem o mesmo valor, mas tipos diferentes')
// } else {
//   console.log('As variáveis numeroUm e stringUm não tem o mesmo valor')
// }

// if (COMPARAR O numeroTrinta e a stringTrinta) {
//   console.log('As variáveis numeroTrinta e stringTrinta tem o mesmo valor e mesmo tipo')
// } else {
//   console.log('As variáveis numeroTrinta e stringTrinta não tem o mesmo tipo')
// }

// if (COMPARAR O numeroDez e a stringDez) {
//   console.log('As variáveis numeroDez e stringDez tem o mesmo valor, mas tipos diferentes')
// } else {
//   console.log('As variáveis numeroDez e stringDez não tem o mesmo valor')
// }

//### Código ###

//Todos os números foram arranjados dentro de um array.
const numeros = ['1', 1, '10', 10, '30', 30, '60', 60];

//Aqui serão coletados dois valores aleatórios do array.
const primeiroNumero = numeros[Math.floor(Math.random() * numeros.length)];
const segundoNumero = numeros[Math.floor(Math.random() * numeros.length)];

//Armazenamento do tipo dos valores em duas novas variáveis, para comparar se são do mesmo tipo.
const primeiroNumeroTipo = typeof primeiroNumero;
const segundoNumeroTipo =  typeof segundoNumero;

//Transforma os dois valores em números, para comparar se tem o mesmo valor.
const primeiroNumeroInt = Number(primeiroNumero);
const segundoNumeroInt = Number(segundoNumero);

// A primeira condição verifica se os valores são iguais e a segunda se são do mesmo tipo.
if (primeiroNumeroInt  === segundoNumeroInt && primeiroNumeroTipo ===  segundoNumeroTipo) {
    console.log('As variáveis primeiroNumero', primeiroNumero, 'e segundoNumero', segundoNumero, ' tem o mesmo valor e são do mesmo tipo:', primeiroNumeroTipo,',', segundoNumeroTipo);
} else if (primeiroNumeroInt  === segundoNumeroInt && primeiroNumeroTipo !==  segundoNumeroTipo) {
    console.log('As variáveis primeiroNumero', primeiroNumero, ' e segundoNumero', segundoNumero, ' tem o mesmo valor, mas tipos diferentes:', primeiroNumeroTipo,',', segundoNumeroTipo);
} else if (primeiroNumeroInt  !== segundoNumeroInt && primeiroNumeroTipo ===  segundoNumeroTipo) {
    console.log('As variáveis primeiroNumero', primeiroNumero, ' e segundoNumero', segundoNumero, ' não tem o mesmo valor, mas são do mesmo tipo:', primeiroNumeroTipo,',', segundoNumeroTipo);
} else {    
    console.log('As variáveis primeiroNumero', primeiroNumero, ' e segundoNumero', segundoNumero, ' não tem o mesmo valor e são de tipos diferentes:', primeiroNumeroTipo,',', segundoNumeroTipo);
}