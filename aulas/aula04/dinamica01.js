import { typedef, validate } from "bycontract";

// Interface transportavel
typedef("#Transportavel", {
    fragil: 'boolean',
    valorFrete: 'number',
});

function isTransportavel(obj) {
    return ('fragil' in obj && 'valorFrete' in obj);
}

// Interface taxável
typedef("#Taxavel", {
    valorImposto: "number",
});

function isTaxavel(obj) {
    return ('valorImposto' in obj);
}

// Hierarquia de classes
class Entregavel {
    #id;
    #descricao;

    constructor(id, descricao) {
        validate(arguments, ["number", "string"]);
        this.#id = id;
        this.#descricao = descricao;
    }

    get id() {
        return this.#id;
    }

    get descricao() {
        return this.#descricao;
    }

    toString() {
        return `Entregavel { id: ${this.#id}, descricao: '${this.#descricao}' }`;
    }
}

// Produto implementa transportavel e taxavel
class Produto extends Entregavel {
    #preco;
    static #gerId = 1;

    constructor(descricao, preco) {
        validate(arguments, ["string", "number"]);
        super(Produto.#gerId++, descricao);
        this.#preco = preco;
    }

    get preco() {
        return this.#preco;
    }

    get valorImposto() {
        return this.preco * 0.15;
    }

    get fragil() {
        return false;
    }

    get valorFrete() {
        return this.#preco * 0.01;
    }

    toString() {
        return `Produto { id: ${this.id}, descricao: '${this.descricao}', preco: ${this.#preco} }`;
    }
}

class Servico extends Entregavel {
    #valorHora;

    constructor(id, descricao, valorHora) {
        validate(arguments, ['number', 'string', 'number']);
        super(id, descricao);
        this.#valorHora = valorHora;
    }

    get valorHora() {
        return this.#valorHora;
    }

    get valorImposto() {
        return this.valorHora * 0.05;
    }

    toString() {
        return `Servico { id: ${this.id}, descricao: '${this.descricao}', valorHora: ${this.#valorHora} }`;
    }
}

class ServicoVoluntario extends Entregavel {
    #nomeVoluntario;

    constructor(id, descricao, nomeVol) {
        validate(arguments, ["number", "string", "string"]);
        super(id, descricao);
        this.#nomeVoluntario = nomeVol;
    }

    get nomeVoluntario() {
        return this.#nomeVoluntario;
    }

    toString() {
        return `ServicoVoluntario { id: ${this.id}, descricao: '${this.descricao}', nomeVoluntario: '${this.#nomeVoluntario}' }`;
    }
}

class Veiculo {
    #placa;
    #ano;
    #valor;

    constructor(placa, ano, valor) {
        validate(arguments, ["string", "number", "number"]);
        this.#placa = placa;
        this.#ano = ano;
        this.#valor = valor;
    }

    get placa() {
        return this.#placa;
    }

    get ano() {
        return this.#ano;
    }

    get valor() {
        return this.#valor;
    }

    get valorImposto() {
        return this.#valor * 0.03;
    }

    toString() {
        return `Veiculo { placa: '${this.#placa}', ano: ${this.#ano}, valor: ${this.#valor} }`;
    }
}

globalThis.Produto = Produto;
globalThis.Entregavel = Entregavel;

// Funções utilitárias
function exibeFrete(entregavel) {
    validate(entregavel, "#Transportavel");
    console.log(`Descricao: ${entregavel.descricao}, Valor frete: ${entregavel.valorFrete.toFixed(2)}`);
}

function exibeValorImposto(entregavel) {
    validate(entregavel, '#Taxavel');
    console.log(`Descricao: ${entregavel.descricao}, Valor imposto: ${entregavel.valorImposto.toFixed(2)}`);
}

function listaEntregaveis(entregaveis) {
    validate(entregaveis, "Array.<Entregavel>");
    entregaveis.forEach(e => console.log(e.toString()));
}

function listaTaxaveis(taxaveis) {
    validate(taxaveis, "Array.<Entregavel>");
    validate(taxaveis, "Array.<#Taxavel>");
    taxaveis.forEach(t => {
        let aux = t.toString();
        aux += `, valor do imposto: ${t.valorImposto.toFixed(2)}`;
        if (isTransportavel(t)) {
            aux += `, fragil: ${t.fragil}`;
            aux += `, valor frete: R$ ${t.valorFrete}`;
        }
        console.log(aux);
    });
}

// Letra A
function qtdadeProdsServ(taxaveis) {
    validate(taxaveis, "Array.<#Taxavel>");
    let qp = taxaveis.filter(t => t instanceof Produto).length;
    let qs = taxaveis.filter(t => t instanceof Servico).length;
    return { "qtdadeProd": qp, "qtdadeServ": qs };
}

// Letra B
function impostoMedioVeiculos(taxaveis) {
    validate(taxaveis, "Array.<#Taxavel>");
    let veiculos = taxaveis.filter(t => t instanceof Veiculo);
    let soma = veiculos.reduce((acc, v) => acc + v.valorImposto, 0);
    return { "impostoMedio": veiculos.length ? soma / veiculos.length : 0 };
}

// Letra C
function qtdadeTransportaveis(entregaveis) {
    console.log("Verificando objetos em entregaveis...");
    entregaveis.forEach(e => console.log(e.toString()));

    validate(entregaveis.filter(e => e instanceof Entregavel), "Array.<Entregavel>");

    return { "qtdadeTransportaveis": entregaveis.filter(isTransportavel).length };
}

// Letra D
function freteTotal(transportaveis) {
    validate(transportaveis, "Array.<#Transportavel>");
    let soma = transportaveis.reduce((acc, t) => acc + t.valorFrete, 0);
    return { "custoTotalFrete": Math.round(soma * 100) / 100 };
}

// Criando objetos para teste
let ps = [
    new Produto('Banana', 10.50),
    new Servico(104, 'Consultoria financeira', 200),
    new Veiculo("AZ9664", 2020, 98000),
    new Produto('Uva', 8.30),
    new Servico(105, 'Consultoria TI', 300),
    new Veiculo("AK7336", 2015, 73000)
];

console.log("Primeira lista:");
console.log(qtdadeProdsServ(ps));
console.log(impostoMedioVeiculos(ps));

let lst = [
    new Produto('Banana', 10.50),
    new Servico(104, 'Consultoria financeira', 200),
    new ServicoVoluntario(202, "aulas para vulneráveis", "Jorge Luis"),
    new Produto('Uva', 8.30),
    new Servico(105, 'Consultoria TI', 300)
];

console.log("Segunda lista:");
console.log(qtdadeTransportaveis(lst));

let prods = [
    new Produto('Banana', 10.50),
    new Produto('Uva', 8.30),
    new Produto('Maca', 5.30),
    new Produto('Melao', 9.90)
];

console.log("Terceira lista:");
console.log(freteTotal(prods));