import { validate } from "bycontract";
import nReadlines from "n-readlines";
import path from "path";

class Vagao {
    #id;
    #capCarga;
    #livre;

    constructor(id, capCarga) {
        validate([id, capCarga], ["Number", "Number"]);
        if (id <= 0 || capCarga <= 0) {
            throw new Error("Dados Inválidos");
        }
        this.#id = id;
        this.#capCarga = capCarga;
        this.#livre = true;
    }

    get id() {
        return this.#id;
    }

    get capCarga() {
        return this.#capCarga;
    }

    get livre() {
        return this.#livre;
    }

    ocupa() {
        this.#livre = false;
    }

    libera() {
        this.#livre = true;
    }

    toString() {
        let livreStr = this.#livre ? "Sim" : "Não";
        return `[Vagão: ${this.#id}, Capacidade de Carga: ${this.#capCarga}, Livre: ${livreStr}]`;
    }
}

class GaragemDeVagoes {
    #vagoes;

    constructor(arquivo) {
        this.#vagoes = [];
        this.carregaDados(arquivo);
    }

    carregaDados(arquivo) {
        let caminho = path.resolve(arquivo);
        let arq = new nReadlines(caminho);
        let linha;

        arq.next();
        while ((linha = arq.next())) {
            let [id, capCarga] = linha.toString("utf8").split(",").map(Number);
            if (!isNaN(id) && !isNaN(capCarga)) {
                this.#vagoes.push(new Vagao(id, capCarga));
            }
        }
    }

    get vagoes() {
        return this.#vagoes;
    }

    marcarVagoesEmUso(qtd) {
        let marcados = 0;
        for (let vagao of this.#vagoes) {
            if (vagao.capCarga > 5000 && marcados < qtd) {
                vagao.ocupa();
                marcados++;
            }
        }
    }

    exibirVagoes() {
        console.log("=== Relação de Vagões ===");
        this.#vagoes.forEach(v => console.log(v.toString()));
    }
}

let garagem = new GaragemDeVagoes("Vagoes.csv");

garagem.marcarVagoesEmUso(4);
garagem.exibirVagoes();