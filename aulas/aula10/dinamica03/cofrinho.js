require('./moeda');
class Cofrinho {
    #moedas;

    constructor() {
        this.#moedas = [];
    }

    adicionar(m) {
        this.#moedas.push(m);
    }

    calcularTotal() {
        return this.#moedas.reduce((total, moeda) => total + moeda.valor, 0);
    }

    [Symbol.iterator]() {
        let index = 0;
        const moedas = this.#moedas;
        return {
            next() {
                if (index < moedas.length) {
                    return { value: moedas[index++], done: false };
                } else {
                    return { done: true };
                }
            }
        };
    }
}

module.exports = Cofrinho;