function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// Exemplo de uso
async function executarComDelay() {
  console.log("Esperando 3 segundos...");
  await sleep(3000);
  console.log("Pronto! Continuando execução após 3 segundos.");
}

executarComDelay();
