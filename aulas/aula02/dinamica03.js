import { validate } from "bycontract";

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

    get naipe() {
        return this.#naipe;
    }

    set naipe(n) {
        this.#naipe = this.verificaNaipe(n) ? n : "Inválido";
    }

    get valor() {
        return this.#valor;
    }

    set valor(v) {
        this.#valor = this.verificaValor(v) ? v.toUpperCase() : "Inválido";
    }

    virar() {
        this.#faceParaCima = !this.#faceParaCima;
    }

    toString() {
        return (this.#naipe === "Inválido" || this.#valor === "Inválido")
            ? "Carta Inválida"
            : `${this.#valor} de ${this.#naipe}`;
    }
}

class Baralho {
    #cartas;
    #topo;

    constructor() {
        this.#cartas = [];
        this.#topo = 0;

        for (let naipe of Carta.naipesValidos()) {
            for (let valor of Carta.valoresValidos()) {
                this.#cartas.push(new Carta(naipe, valor));
            }
        }
    }

    embaralhar() {
        for (let i = 0; i < 1000; i++) {
            let i1 = Math.floor(Math.random() * 52);
            let i2 = Math.floor(Math.random() * 52);
            [this.#cartas[i1], this.#cartas[i2]] = [this.#cartas[i2], this.#cartas[i1]];
        }
    }

    pegarDoTopo() {
        return this.#cartas.length > 0 ? this.#cartas.pop() : null;
    }

    inserirNaBase(carta) {
        if (!(carta instanceof Carta)) {
            throw new Error("O argumento deve ser uma instância de Carta.");
        }
        this.#cartas.unshift(carta);
    }

    quantidadeDeCartas() {
        return this.#cartas.length;
    }

    toString() {
        let str = `\n📜 Baralho: ${this.quantidadeDeCartas()} cartas\n`;
        str += "────────────────────────────────────\n";
        this.#cartas.forEach((carta, index) => {
            str += `[${index + 1}] ${carta.toString()}\n`;
        });
        return str;
    }
}

const baralho = new Baralho();
baralho.embaralhar();
console.log(baralho.toString());

const cartaRetirada = baralho.pegarDoTopo();
console.log(`\n🃏 Carta retirada: ${cartaRetirada.toString()}\n`);

baralho.inserirNaBase(cartaRetirada);
console.log("📌 A carta foi inserida de volta no fundo do baralho.");