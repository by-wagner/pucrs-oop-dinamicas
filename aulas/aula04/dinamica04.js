import { validate } from "bycontract";
import promptsync from "prompt-sync";

const prompt = promptsync({ sigint: true });

class SaldoInsuficienteError extends Error {
    #saldoAtual;
    #retiradaDesejada;

    constructor(saldoAtual, retiradaDesejada) {
        super("Saldo Insuficiente");
        this.#saldoAtual = saldoAtual;
        this.#retiradaDesejada = retiradaDesejada;
    }

    get saldoAtual() {
        return this.#saldoAtual;
    }

    get retiradaDesejada() {
        return this.#retiradaDesejada;
    }
}

class ContaCorrente {
    #saldo;

    constructor(saldoInicial) {
        validate(saldoInicial, "number");
        if (saldoInicial < 0) {
            throw new RangeError("Saldo inicial inválido");
        }
        this.#saldo = saldoInicial;
    }

    deposito(valor) {
        validate(valor, "number");
        if (valor <= 0) {
            throw new RangeError("O valor do depósito deve ser positivo.");
        }
        this.#saldo += valor;
        console.log(`Depósito realizado com sucesso! Novo saldo: R$ ${this.#saldo.toFixed(2)}`);
    }

    retirada(valor) {
        validate(valor, "number");
        if (valor <= 0) {
            throw new RangeError("O valor da retirada deve ser positivo.");
        }
        if (this.#saldo < valor) {
            throw new SaldoInsuficienteError(this.#saldo, valor);
        }
        this.#saldo -= valor;
        console.log(`Retirada realizada com sucesso! Novo saldo: R$ ${this.#saldo.toFixed(2)}`);
    }

    get saldo() {
        return this.#saldo;
    }
}

// Função para obter e validar números do usuário
function obterNumero(mensagem) {
    let numero;
    while (true) {
        numero = Number(prompt(mensagem));
        if (!isNaN(numero) && numero > 0) {
            return numero;
        }
        console.log("Entrada inválida! Digite um número válido.");
    }
}

// Criando conta com saldo inicial
let cc = new ContaCorrente(0);
let fim = false;

while (!fim) {
    console.log("\nOpções:");
    console.log("1 - Depositar");
    console.log("2 - Retirar");
    console.log("3 - Ver Saldo");
    console.log("4 - Sair");

    try {
        let opcao = Number(prompt("Escolha uma opção: "));
        console.log("----------------");

        switch (opcao) {
            case 1:
                cc.deposito(obterNumero("Qual o valor do depósito? "));
                break;
            case 2:
                cc.retirada(obterNumero("Qual o valor da retirada? "));
                break;
            case 3:
                console.log(`Saldo disponível: R$ ${cc.saldo.toFixed(2)}`);
                break;
            case 4:
                fim = true;
                console.log("Obrigado por usar nosso sistema bancário!");
                break;
            default:
                console.log("Opção inválida! Escolha uma opção entre 1 e 4.");
        }
    } catch (error) {
        if (error instanceof SaldoInsuficienteError) {
            console.log(`Erro: Saldo insuficiente!`);
            console.log(`Saldo atual: R$ ${error.saldoAtual.toFixed(2)}`);
            console.log(`Retirada pretendida: R$ ${error.retiradaDesejada.toFixed(2)}`);
        } else {
            console.log(`Erro: ${error.message}`);
        }
    }
    console.log("---------------");
}