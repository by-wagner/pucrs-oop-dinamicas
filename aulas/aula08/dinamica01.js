// D1) Imprimir o horário atual do sistema a cada 1 segundo por 10 segundos usando métodos assíncronos

console.log("Iniciando...");

const intervalId = setInterval(() => {
  console.log(new Date().toTimeString());
}, 1000);

setTimeout(() => {
  clearInterval(intervalId);
  console.log("Encerrando após 10 segundos.");
}, 10000);
