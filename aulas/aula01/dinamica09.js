import promptSync from "prompt-sync";
const prompt = promptSync({ sigint: true });

let idades = [];
let fim = false;
let cont = 0;

while (!fim) {
    let idade = Number(prompt(`Digite a idade do ${cont + 1}° colega (ou -1 para finalizar): `));

    if (Number(idade) === -1) {
        break;
    }

    idades[cont] = idade;
    cont++;
}

let resp = prompt("Digite a idade que deseja verificar a frequência: ");
let idadeFrequencia = Number(resp);
let frequencia = 0;
let maiores = 0;

for (let i = 0; i < idades.length; i++) {
    if (idades[i] === idadeFrequencia) {
        frequencia++;
    }
    if (idades[i] > idadeFrequencia) {
        maiores++;
    }
}

console.log(`Quantidade de colegas com ${idadeFrequencia} anos: ${frequencia}`);
console.log(`Quantidade de colegas com mais de ${idadeFrequencia} anos: ${maiores}`);