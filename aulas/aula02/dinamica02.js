import { validate } from "bycontract";

class Carro {
    #placa;
    #modelo;
    #capacidade_tanque;
    #nivel_combustivel;
    #eficiencia_combustivel;

    constructor(placa, modelo, capacidade_tanque, nivel_combustivel, eficiencia_combustivel) {
        validate(arguments, ["string", "string", "number", "number", "number"]);

        if (capacidade_tanque <= 0) {
            throw new Error("Capacidade do tanque deve ser maior que zero");
        }

        this.#placa = placa;
        this.#modelo = modelo;
        this.#capacidade_tanque = capacidade_tanque;
        this.#nivel_combustivel = nivel_combustivel;
        this.#eficiencia_combustivel = eficiencia_combustivel;
    }

//Getters (usados anteriormente, agora comentados para referência futura)
   /*get placa() {
        return this.#placa;
    }
    get modelo() {
        return this.#modelo;
    }
    get capacidade_tanque() {
        return this.#capacidade_tanque;
    }
    get nivel_combustivel() {
        return this.#nivel_combustivel;
    }
    get eficiencia_combustivel() {
        return this.#eficiencia_combustivel;
    }*/

    set nivel_combustivel(valor) {
        validate(valor, "number");
        if (valor < 0) {
            throw new Error("O nível de combustível não pode ser negativo.");
        }
        if (valor > this.#capacidade_tanque) {
            throw new Error("O nível de combustível não pode ser maior que a capacidade do tanque.");
        }
        this.#nivel_combustivel = valor;
    }

    combustivelNecessario(distancia) {
        validate(distancia, "number");
        return distancia / this.#eficiencia_combustivel;
    }

    viagemPermitida(distancia) {
        validate(distancia, "number");
        return this.#nivel_combustivel >= this.combustivelNecessario(distancia);
    }

    toString() {
        let str = `Placa: ${this.#placa}, Modelo: ${this.#modelo}\n`;
        str += `Capacidade do tanque: ${this.#capacidade_tanque}, Nível de combustível: ${this.#nivel_combustivel}\n`;
        str += `Eficiência do combustível: ${this.#eficiencia_combustivel}\n`;
        return str;
    }
}

let c1 = new Carro("ABC-123", "Fusca", 100, 50, 10);
console.log(c1.toString());

let distancia = 450;
let combustivelNecessario = c1.combustivelNecessario(distancia);
console.log(`\nCombustível necessário para viajar ${distancia} km: ${combustivelNecessario} litros`);

if (c1.viagemPermitida(distancia)) {
    console.log("Pode viajar");
} else {
    console.log("Não é possível viajar, abasteça o tanque");
}

c1.nivel_combustivel = 30;

console.log("\nApós alteração do nível de combustível:");
console.log(c1.toString());

if (c1.viagemPermitida(distancia)) {
    console.log("Pode viajar");
} else {
    console.log("Não é possível viajar, pois o nível de combustível é insuficiente.");
}