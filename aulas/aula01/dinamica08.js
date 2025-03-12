import promptSync from 'prompt-sync';

const prompt = promptSync({ sigint: true });

function nivelAcessoOK(nivelAcesso) {
    switch (nivelAcesso) {
        case '01':
        case '21':
        case '35':
        case '66':
            return true;
        default:
            return false;
    }
}

function acrescentaVerificador(matricula, nivelAcesso) {
    let digitos = matricula;
    let soma = 0;

    while (digitos.length !== 1) {
        soma = digitos.split('').reduce((acc, num) => acc + Number(num), 0);
        digitos = String(soma);
    }

    return `${nivelAcesso}${matricula}-${digitos}`;
}

const matricula = prompt('Coloque seu número de matrícula: ');
const nivel = prompt('Coloque o nível de acesso: ');

if (nivelAcessoOK(nivel)) {
    const matriculaCompleta = acrescentaVerificador(matricula, nivel);
    console.log(`Número de matrícula completo: ${matriculaCompleta}`);
} else {
    console.log('Nível de acesso inválido');
}