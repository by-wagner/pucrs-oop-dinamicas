// D1) Implementações personalizadas das funções map, filter e reduce
// Sem utilizar os métodos originais do JavaScript

function map(funcao, array) {
  const resultado = [];
  for (let i = 0; i < array.length; i++) {
    resultado.push(funcao(array[i], i, array));
  }
  return resultado;
}

function filter(funcao, array) {
  const resultado = [];
  for (let i = 0; i < array.length; i++) {
    if (funcao(array[i], i, array)) {
      resultado.push(array[i]);
    }
  }
  return resultado;
}

function reduce(funcao, array, valorInicial) {
  let acumulador = valorInicial;
  for (let i = 0; i < array.length; i++) {
    acumulador = funcao(acumulador, array[i], i, array);
  }
  return acumulador;
}

// Exemplos de uso:
const numeros = [1, 2, 3, 4, 5];

const dobrados = map(x => x * 2, numeros);
console.log("Map:", dobrados); // [2, 4, 6, 8, 10]

const pares = filter(x => x % 2 === 0, numeros);
console.log("Filter:", pares); // [2, 4]

const soma = reduce((acc, x) => acc + x, numeros, 0);
console.log("Reduce:", soma); // 15
