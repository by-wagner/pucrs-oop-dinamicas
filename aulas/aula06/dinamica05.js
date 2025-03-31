// D2) Dado um array, retornar um novo array sem valores repetidos.

function removerRepetidos(array) {
  const resultado = [];
  for (let i = 0; i < array.length; i++) {
    if (!resultado.includes(array[i])) {
      resultado.push(array[i]);
    }
  }
  return resultado;
}

// Exemplo de uso
const comRepetidos = [1, 2, 2, 3, 4, 4, 5, 1];
const semRepetidos = removerRepetidos(comRepetidos);
console.log("Array sem valores repetidos:", semRepetidos); // Deve imprimir: [1, 2, 3, 4, 5]
