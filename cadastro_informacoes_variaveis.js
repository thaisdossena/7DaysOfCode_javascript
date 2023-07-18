// Por isso, hoje, eu vou te ensinar a desenvolver um programa simulando um desses sites. Ele deve pedir para o usuário responder 3 perguntas:
// - Qual o seu nome?
// - Quantos anos você tem?
// - Qual linguagem de programação você está estudando?

// No final, o sistema vai exibir a mensagem: "Olá [nome], você tem [idade] anos e já está aprendendo [linguagem]!"

// Você vai complementar o código para que, depois de exibir a mensagem anterior, o programa pergunte:

// Você gosta de estudar [linguagem]? Responda com o número 1 para SIM ou 2 para NÃO.

// E aí, dependendo da resposta, ele deve mostrar uma das seguintes mensagens:

// 1 > Muito bom! Continue estudando e você terá muito sucesso.
// 2 > Ahh que pena... Já tentou aprender outras linguagens?

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Qual o seu nome? ', (nome) => {
    rl.question('Quantos anos você tem? ', (idade) => {
    idade = Number(idade);
        rl.question('Qual linguagem de programação você está estudando? ', (linguagem) => { 
            console.log('Olá', nome,', você tem', idade,'anos e já está aprendendo', linguagem,'!')            

            rl.question(`Você gosta de estudar ${linguagem}. Responda com o número 1 para SIM ou 2 para NÃO. `, (resposta) => {
                resposta = Number(resposta);
                if ( resposta === 1 ) {
                    console.log('Muito bom! Continue estudando e você terá muito sucesso.') 
                } else {
                    console.log('Ahh que pena... Já tentou aprender outras linguagens?');
                }
                rl.close();
            });
        });
    });
});
