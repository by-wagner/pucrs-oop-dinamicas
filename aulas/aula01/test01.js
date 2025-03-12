import promptsync from 'prompt-sync';
const prompt = promptsync({sigint: true});

const notaMin = 7.0;
let nome = "Ana Luiza";
let nota1 = Number(prompt("Qual a primeira nota: "))
let nota2 = 10;
let media = (nota1 + nota2) / 2;
console.log(`Nome: ${nome} \nMedia: ${media}`);