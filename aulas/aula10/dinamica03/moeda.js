// moeda.js

class Moeda {
    #valor;
    #nome;

    constructor(v, n) {
        this.#valor = v;
        this.#nome = n;
    }

    get valor() {
        return this.#valor;
    }

    get nome() {
        return this.#nome;
    }
}

module.exports = Moeda;