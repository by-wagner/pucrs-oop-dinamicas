// D2) Escreva uma função que, utilizando objetos Map,
// calcule a frequência de cada número presente em um array de inteiros,
// fazendo uso de funções de alta ordem.

function calcularFrequencia(array) {
  const frequencia = new Map();

  array.forEach(numero => {
    frequencia.set(numero, (frequencia.get(numero) || 0) + 1);
  });

  return frequencia;
}

// Exemplo de uso
const numeros = [1, 2, 2, 3, 3, 3, 4, 1, 1, 1];
const resultado = calcularFrequencia(numeros);

console.log("Frequência dos números:");
resultado.forEach((valor, chave) => {
  console.log(`Número ${chave}: ${valor} vez(es)`);
});
