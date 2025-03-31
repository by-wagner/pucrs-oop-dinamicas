// Dinâmica Aula 10 - D1
// Estamos interessados na implementação de um objeto Range capaz de produzir
// uma sequência de números naturais através de um iterador. O construtor desse
// objeto deve receber o limite inferior (fechado) e superior (aberto) do intervalo
// de valores a serem gerados. O limite inferior deve ser >= 0 e o limite superior
// não pode ser menor que o limite inferior.

class Range {
  constructor(inicio, fim) {
    if (inicio < 0) {
      throw new Error('O limite inferior deve ser maior ou igual a 0.');
    }
    if (fim < inicio) {
      throw new Error('O limite superior deve ser maior ou igual ao limite inferior.');
    }
    this.inicio = inicio;
    this.fim = fim;
  }

  [Symbol.iterator]() {
    let atual = this.inicio;
    const fim = this.fim;

    return {
      next() {
        if (atual < fim) {
          return { value: atual++, done: false };
        } else {
          return { done: true };
        }
      }
    };
  }
}

// Exemplo de uso:
const r = new Range(3, 8);
for (const num of r) {
  console.log(num); // 3, 4, 5, 6, 7
}
