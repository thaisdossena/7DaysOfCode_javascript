const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Estou pensando em um número de 1 a 10. Adivinhe qual é: ', (palpiteUsuario) => {
    const numeroAleatorio = Math.floor(Math.random() * 10) + 1;
    let tentativas = 0;

    function verificaAcerto() {
        if (parseInt(palpiteUsuario) === numeroAleatorio) {
            console.log("Parabéns, você acertou!");
        } else {
            tentativas++;
            if (tentativas < 4) {
                console.log("Tente novamente!");
                rl.question('Adivinhe novamente: ', (novoPalpite) => {
                    palpiteUsuario = novoPalpite;
                    verificaAcerto();
                });
            } else {
                console.log("Suas tentativas acabaram. O número correto era: " + numeroAleatorio);
                rl.close();
            }
        }
    }
    verificaAcerto();
});
