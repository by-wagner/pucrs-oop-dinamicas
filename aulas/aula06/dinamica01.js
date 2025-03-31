  // D1) Função max(array)
  // Essa função recebe um array de números e retorna o maior valor presente no array.
  // Não utiliza métodos auxiliares como Math.max() ou funções de array como reduce(), map(), etc.

  function max(array) {
    let maior = array[0]; // Assume que o primeiro elemento é o maior inicialmente
    for (let i = 1; i < array.length; i++) {
      if (array[i] > maior) {
        maior = array[i]; // Atualiza o maior se encontrar um valor maior
      }
    }
    return maior;
  }

  // Exemplo de execução da função
  const numeros = [10, 45, 2, 99, 23, 7];
  console.log("O maior número do array é:", max(numeros)); // Deve imprimir: O maior número do array é: 99
