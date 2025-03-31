// D2) Utilizando a API do JavaScript para encontrar o maior valor de um array
// A função Math.max pode ser usada junto com o operador spread (...) para encontrar o maior número em um array.

const numeros = [10, 45, 2, 99, 23, 7];

// Usando Math.max com spread operator
const maiorValor = Math.max(...numeros);

console.log("O maior número do array é:", maiorValor); // Deve imprimir: O maior número do array é: 99
