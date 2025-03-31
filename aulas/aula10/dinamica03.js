// Dinâmica D2 - Aula 10
// Você recebeu a modelagem e implementação de duas classes que representam um cofrinho de moedas:
// Moeda (valor: number, nome: string) e Cofrinho (adicionar(m: Moeda), calcularTotal()).
// Modifique a classe Cofrinho para que implemente a interface Iterable,
// ou seja, forneça um objeto Iterator sobre a coleção de objetos Moeda.
// Crie um arquivo index.js para experimentar as classes e métodos implementados.

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
