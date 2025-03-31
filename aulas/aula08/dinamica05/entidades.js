// entidades.js

export class Moeda {
    constructor(valor, nome) {
        this.valor = valor;
        this.nome = nome;
    }

    getValor() {
        return this.valor;
    }

    getNome() {
        return this.nome;
    }

    toJSON() {
        return {
            valor: this.valor,
            nome: this.nome
        };
    }
}

export class Cofrinho {
    constructor() {
        this.moedas = [];
    }

    adicionar(moeda) {
        this.moedas.push(moeda);
    }

    calcularTotal() {
        return this.moedas.reduce((total, m) => total + m.getValor(), 0);
    }

    toJSON() {
        return {
            moedas: this.moedas.map(m => m.toJSON())
        };
    }

    static fromJSON(json) {
        const c = new Cofrinho();
        json.moedas.forEach(m => c.adicionar(new Moeda(m.valor, m.nome)));
        return c;
    }
}