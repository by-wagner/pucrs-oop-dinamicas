// Dinâmica Aula 9
// D1) Você recebeu a modelagem de uma classe para uma estrutura de dados pilha
// a ser implementada utilizando array de acordo com o seguinte diagrama UML:
// + empilhar(elemento: object)
// + desempilhar(): object
// + get topo(): object
// + get tamanho(): number
// + get vazia(): boolean

class PilhaArray {
    constructor() {
        this._itens = [];
    }

    empilhar(elemento) {
        this._itens.push(elemento);
    }

    desempilhar() {
        if (this.vazia) return null;
        return this._itens.pop();
    }

    get topo() {
        if (this.vazia) return null;
        return this._itens[this._itens.length - 1];
    }

    get tamanho() {
        return this._itens.length;
    }

    get vazia() {
        return this._itens.length === 0;
    }
}

module.exports = { PilhaArray };
