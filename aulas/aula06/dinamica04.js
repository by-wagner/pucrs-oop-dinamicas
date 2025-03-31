// D1) Calcular a média de um array de números.
// A média é a soma de todos os elementos dividida pela quantidade de elementos.

function calcularMedia(array) {
  let soma = 0;
  for (let i = 0; i < array.length; i++) {
    soma += array[i];
  }
  return soma / array.length;
}

// Exemplo de uso
const numeros = [10, 20, 30, 40, 50];
const media = calcularMedia(numeros);
console.log("A média dos números é:", media); // Deve imprimir: A média dos números é: 30
