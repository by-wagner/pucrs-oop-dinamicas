import nReadlines from "n-readlines";

let arq = new nReadlines('texto.txt');
let buf;
let linha;
let dados;

let palavras = new Set();

while (buf = arq.next()) {
    linha = buf.toString('utf8').trim().replace(/[.,;!?()]/g, '');
    dados = linha.split(/\s+/);

    for (let p of dados) {
        palavras.add(p);
    }
}

for (let p of palavras) {
    console.log(p);
}

console.log("\nPalavras únicas no texto:", palavras);