// Dinâmica 4
// D3) Escreva uma função para converter um objeto iterável assíncrono em um array de valores.
// Depois, escreva um exemplo de código que demonstre o funcionamento da nova função.

/**
 * Função que converte um iterável assíncrono em um array de valores.
 * @param {AsyncIterable} asyncIterable - O objeto iterável assíncrono.
 * @returns {Promise<Array>} - Um array contendo todos os valores.
 */
async function asyncIterableToArray(asyncIterable) {
  const result = [];
  for await (const value of asyncIterable) {
    result.push(value);
  }
  return result;
}

// Exemplo de uso:
async function* gerarValores() {
  yield 'PUCRS';
  yield 'Online';
  yield 'JavaScript';
}

(async () => {
  const array = await asyncIterableToArray(gerarValores());
  console.log(array); // ['PUCRS', 'Online', 'JavaScript']
})();
