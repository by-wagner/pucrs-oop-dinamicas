import nReadlines from "n-readlines";
import promptsync from "prompt-sync";
const prompt = promptsync({sigint: true});

let arq = new nReadlines('produtos.txt');
let buf;
let linha;
let dados;

arq.next();

let prods = new Map();
while (buf = arq.next()) {
    linha = buf.toString('utf8').trim();
    dados = linha.split(',');

    let codigo = Number(dados[0]);
    let descricao = dados[1];
    let preco = Number(dados[2]);

    if (!isNaN(codigo) && !isNaN(preco)) {
        prods.set(codigo, {
            "descrição": descricao,
            "preço": preco,
        });
    }
}

let fim = false;
while (!fim) {
    let cod = Number(prompt('Digite o código do produto (0=fim): '));

    if (cod === 0) {
        fim = true;
        continue;
    }

    if (prods.has(cod)) {
        let prod = prods.get(cod);
        console.log(`Produto: ${prod.descrição}, Preço: R$ ${prod.preço.toFixed(2)}`);
    } else {
        console.log('Produto inválido!');
    }
}