// D1) Números de Fibonacci
// A sequência de Fibonacci é definida como:
// n:    0  1  2  3  4  5  6  ...
// valor:0  1  1  2  3  5  8  ...

// Implementação recursiva simples (sem cauda)
function fibonacciRec(n) {
  if (n === 0) return 0;
  if (n === 1) return 1;
  return fibonacciRec(n - 1) + fibonacciRec(n - 2);
}

// Implementação com recursão na cauda (tail recursion)
function fibonacciTail(n, a = 0, b = 1) {
  if (n === 0) return a;
  if (n === 1) return b;
  return fibonacciTail(n - 1, b, a + b);
}

// Exemplos de uso
const n = 6;
console.log(`Fibonacci recursivo (${n}):`, fibonacciRec(n));       // Deve imprimir 8
console.log(`Fibonacci cauda (${n}):`, fibonacciTail(n));         // Deve imprimir 8
