import promptsync from 'prompt-sync';
const prompt = promptsync({ sigint: true });


function acrescentaVerificador(matricula) {
    let digitos = matricula;
    let soma = 0;
    while (digitos.length != 1) {
        for (let i = 0; i < digitos.length; i++) {
            soma = soma + Number(digitos.at(i));
        }
        digitos = String(soma);
        soma = 0;
    }
    return matricula + '-' + digitos;
}

let matricula = '111116'; //prompt('Coloque seu número de matrícula: ');
let matriculaCompleta = acrescentaVerificador(matricula);

console.log(`Numero de matricula completo: ${matriculaCompleta}`);