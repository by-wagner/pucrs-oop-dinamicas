// D1) Calcular a média de um array de números através do método reduce()

function calcularMediaComReduce(array) {
  if (array.length === 0) return 0;
  const soma = array.reduce((acc, num) => acc + num, 0);
  return soma / array.length;
}

// Exemplo de uso:
const numeros = [10, 20, 30, 40, 50];
const media = calcularMediaComReduce(numeros);
console.log("Média calculada com reduce():", media); // Deve imprimir: 30
