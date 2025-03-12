import { validate } from "bycontract";
import promptSync from "prompt-sync";
const prompt = promptSync({ sigint: true });

class Carta {
    #naipe;
    #valor;
    #faceParaCima;

    constructor(naipe, valor) {
        validate(arguments, ["String", "String"]);

        if (!this.verificaNaipe(naipe) || !this.verificaValor(valor)) {
            this.#naipe = "Inválido";
            this.#valor = "Inválido";
            return;
        }

        this.#naipe = naipe;
        this.#valor = valor;
        this.#faceParaCima = true;
    }

    static valoresValidos() {
        return ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
    }

    static naipesValidos() {
        return ["Espadas", "Copas", "Ouros", "Paus"];
    }

    verificaNaipe(naipe) {
        return Carta.naipesValidos().includes(naipe);
    }

    verificaValor(valor) {
        return Carta.valoresValidos().includes(valor.toUpperCase());
    }

    get valor() {
        return this.#valor;
    }

    toString() {
        return (this.#naipe === "Inválido" || this.#valor === "Inválido")
            ? "Carta Inválida"
            : `${this.#valor} de ${this.#naipe}`;
    }
}

class Baralho {
    #cartas;

    constructor() {
        this.#cartas = [];
        for (let naipe of Carta.naipesValidos()) {
            for (let valor of Carta.valoresValidos()) {
                this.#cartas.push(new Carta(naipe, valor));
            }
        }
    }

    embaralhar() {
        this.#cartas.sort(() => Math.random() - 0.5);
    }

    pegarDoTopo() {
        return this.#cartas.length > 0 ? this.#cartas.pop() : null;
    }

    quantidadeDeCartas() {
        return this.#cartas.length;
    }
}

class Deque {
    #cartas;

    constructor() {
        this.#cartas = [];
    }

    pegaDeCima() {
        return this.#cartas.shift();
    }

    insereEmbaixo(carta) {
        if (!(carta instanceof Carta)) throw new Error("O argumento deve ser uma instância de Carta.");
        this.#cartas.push(carta);
    }

    quantidade() {
        return this.#cartas.length;
    }

    toString() {
        return this.#cartas.map(carta => `[${carta.toString()}]`).join(" ");
    }
}

let b = new Baralho();
let dj1 = new Deque();
let dj2 = new Deque();

b.embaralhar();
while (b.quantidadeDeCartas() > 0) {
    dj1.insereEmbaixo(b.pegarDoTopo());
    dj2.insereEmbaixo(b.pegarDoTopo());
}

let rodada = 1;
while (dj1.quantidade() > 0 && dj2.quantidade() > 0) {
    console.log(`\n===== Rodada ${rodada} =====`);
    let cj1 = dj1.pegaDeCima();
    let cj2 = dj2.pegaDeCima();

    console.log(`Jogador 1: ${cj1.toString()}`);
    console.log(`Jogador 2: ${cj2.toString()}`);

    if (Carta.valoresValidos().indexOf(cj1.valor) > Carta.valoresValidos().indexOf(cj2.valor)) {
        console.log("Jogador 1 venceu a rodada");
        dj1.insereEmbaixo(cj1);
    } else if (Carta.valoresValidos().indexOf(cj1.valor) < Carta.valoresValidos().indexOf(cj2.valor)) {
        console.log("Jogador 2 venceu a rodada");
        dj2.insereEmbaixo(cj2);
    } else {
        console.log("Empate");
    }

    console.log(`Cartas Jogador 1: ${dj1.quantidade()} | Cartas Jogador 2: ${dj2.quantidade()}`);
    rodada++;
}

console.log("\n===== Resultado Final =====");
if (dj1.quantidade() > dj2.quantidade()) {
    console.log("Jogador 1 venceu o jogo");
} else if (dj1.quantidade() < dj2.quantidade()) {
    console.log("Jogador 2 venceu o jogo");
} else {
    console.log("O jogo terminou em empate");
}