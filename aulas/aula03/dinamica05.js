import { validate } from "bycontract";

class ContaComum {
    #numero
    #saldo

    constructor(numero) {
        validate(arguments, ["Number"]);
        this.#numero = numero;
        this.#saldo = 0;
    }

    get numero() {
        return this.#numero;
    }

    get saldo() {
        return this.#saldo;
    }

    depositar(valor) {
        validate(arguments, ["Number"]);
        if (valor < 0) {
            return false;
        }
        this.#saldo += valor;
        return true;
    }

    sacar(valor) {
        validate(arguments, ["Number"]);
        if (valor < 0) {
            return false;
        }
        if (this.#saldo < valor) {
            return false;
        }
        this.#saldo -= valor;
        return true;
    }

    toString() {
        return `Conta ${this.numero} - Saldo: R$ ${this.saldo.toFixed(2)}`;
    }
}

class ContaPoupanca extends ContaComum {
    constructor(numero) {
        super(numero);
    }

    adicionaJuros(taxa) {
        validate(arguments, ["Number"]);
        if (taxa <= 0.0 || taxa > 1.0) {
            return false;
        }
        let juros = this.saldo * taxa;
        this.depositar(juros);
        return true;
    }
}

class ContaLimite extends ContaComum {
    #limite;

    constructor(numero, limite) {
        validate(arguments, ["Number", "Number"]);
        super(numero);
        this.#limite = limite;
        this.depositar(limite);
    }

    get limite() {
        return this.#limite;
    }

    get saldo() {
        return super.saldo - this.#limite;
    }
}

// Tornando as classes globais para permitir chamadas polimórficas
globalThis.ContaComum = ContaComum;
globalThis.ContaPoupanca = ContaPoupanca;
globalThis.ContaLimite = ContaLimite;

// Funções polimórficas
function printNumsSaldos(contas) {
    validate(arguments, ["Array.<ContaComum>"]);
    for (let conta of contas) {
        console.log(`Conta: ${conta.numero}, Saldo: R$ ${conta.saldo.toFixed(2)}`);
    }
}

function aplicarJuros(contas, taxa) {
    validate(arguments, ["Array.<ContaComum>", "Number"]);
    for (let conta of contas) {
        if (conta instanceof ContaPoupanca) {
            conta.adicionaJuros(taxa);
        }
    }
}

function depositarValorInicial(contas, valor) {
    validate(arguments, ["Array.<ContaComum>", "Number"]);
    for (let conta of contas) {
        conta.depositar(valor);
    }
}

let agencia = [];

agencia.push(new ContaComum(100));
agencia.push(new ContaPoupanca(110));
agencia.push(new ContaLimite(120, 2000));
agencia.push(new ContaComum(111));
agencia.push(new ContaLimite(109, 5000));
agencia.push(new ContaLimite(145, 3000));

depositarValorInicial(agencia, 1000);
aplicarJuros(agencia, 0.015);
agencia[4].depositar(200);
agencia[5].sacar(1500);
printNumsSaldos(agencia);