function contaCorrente(numero, nome) {
    let padrao = {saldo: 0, limite: 0, taxaRemuneracao: 0.01}
    return {
        numero,
        nome,
        ...padrao
    }
}

let conta = contaCorrente(102, "Ana Maria");
console.log(conta);