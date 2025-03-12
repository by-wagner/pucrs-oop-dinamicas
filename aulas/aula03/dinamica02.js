import { validate } from "bycontract";

class ContaComum {
    #numero
    #saldo

    constructor(numero, saldo) {
        validate(arguments, ["Number"])
        this.#numero = numero;
        this.#saldo = 0;
    }

    get numero() {
        return this.#numero
    }
    get saldo() {
        return this.#saldo
    }

    depositar(valor) {
        validate(arguments, ["Number"])
        if (valor < 0){
            return false;
        }
        this.#saldo += valor
        return true;
    }

    sacar(valor) {
        validate(arguments, ["Number"]);
        if (valor < 0) {
            return false;
        }

        let limiteDisponivel = this.limite ? this.limite : 0;
        if (this.#saldo + limiteDisponivel < valor) {
            return false;
        }
        this.#saldo -= valor;
        return true;
    }

    get limite() {
        return 0;
    }

    toString() {
        return `Conta ${this.numero} - Saldo: R$ ${this.saldo.toFixed(2)}`
    }
}

class ContaPoupanca extends ContaComum {
    constructor(numero) {
        super(numero);
    }

    adicionJuros(taxa){
        validate (taxa, "Number")
        if (taxa < 0.0 || taxa > 1.0){
            return false;
        }
        let juros = this.saldo * taxa;
        this.depositar(juros);
    }
}

class ContaLimite extends ContaComum {
    #limite;

    constructor(numero, limite) {
        validate(arguments, ["Number", "Number"]);
        super(numero, 0);
        this.#limite = limite;
    }

    get limite() {
        return this.#limite;
    }
}

let contaPoupanca = new ContaPoupanca(102);
console.log(contaPoupanca.toString());
contaPoupanca.depositar(3000);
contaPoupanca.adicionJuros(0.1);
contaPoupanca.sacar(100);
console.log(contaPoupanca.toString());
console.log("----------------------");
let c1 = new ContaLimite(200, 1000);
console.log(c1.toString());
c1.sacar(200);
console.log(c1.toString());