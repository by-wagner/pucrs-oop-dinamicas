/**
 * Dinâmica 2 - Aula 10
 *
 * Estamos interessados na implementação de um gerador range
 * capaz de produzir uma sequência de números inteiros.
 * O gerador deve ser parametrizado por um valor de início (padrão 0),
 * um passo de incremento (padrão 1) e um valor de fim (padrão 0).
 * Observe que passos negativos são permitidos para que se possa
 * criar sequências decrescentes de valores.
 */

function* range(start = 0, step = 1, end = 0) {
  if ((step > 0 && start >= end) || (step < 0 && start <= end)) {
    return;
  }

  for (let i = start; step > 0 ? i < end : i > end; i += step) {
    yield i;
  }
}

// Exemplo de uso:
for (const num of range(0, 2, 10)) {
  console.log(num); // 0, 2, 4, 6, 8
}

for (const num of range(10, -2, 0)) {
  console.log(num); // 10, 8, 6, 4, 2
}
