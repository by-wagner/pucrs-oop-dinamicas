import {validate} from "bycontract";

class Passagem{
    #data
    #numVoo
    #custoBase

    constructor(data, numVoo, custoBase) {
        validate(arguments, ["String", "Number", "Number"]);
        this.#data = data;
        this.#numVoo = numVoo;
        this.#custoBase = custoBase;
    }

    get data(){
        return this.#data;
    }

    get numVoo(){
        return this.#numVoo;
    }

    get custoBase(){
        return this.#custoBase;
    }

    totalPagar(){
        return undefined
    }

    qtdMalas(){
        return 0;
    }

    acessoPrioritario(){
        return false
    }

    toString() {
        let str = `Data: ${this.#data}, Voo: ${this.#numVoo}, valor: R$ ${this.totalPagar()}`;
        str += `, Malas: ${this.qtdMalas()}, Acesso Prioritario: ${this.acessoPrioritario()}`;
        return str;
    }
}

class Economica extends Passagem{
    constructor(data, numVoo, custoBase) {
        super(data, numVoo, custoBase);
    }

    totalPagar(){
        let operacional = this.custoBase * 0.1;
        return this.custoBase + operacional;
    }

    toString(){
        return 'Economica: '+super.toString();
    }
}

class Executiva extends Passagem{
    constructor(data, numVoo, custoBase) {
        super(data, numVoo, custoBase);
    }

    totalPagar(){
        let operacional = this.custoBase * 0.3;
        return this.custoBase + operacional;
    }

    qtdMalas(){
        return 1;
    }

    toString() {
        return 'Executiva: '+super.toString();
    }
}

class PrimeiraClasse extends Passagem {
    constructor(data, numVoo, custoBase) {
        super(data, numVoo, custoBase);
    }

    totalPagar(){
        return this.custoBase + this.custoBase * 0.5;
    }

    qtdMalas(){
        return 3;
    }

    acessoPrioritario(){
        return true;
    }

    toString() {
        return 'Primeira Classe: '+super.toString();
    }
}

globalThis.Passagem = Passagem;

function qtds(passagens){
    validate(passagens, "Array.<Passagem>");
    let contMalas = 0;
    let contPrioritario = 0;
    for (let p of passagens){
        if (p.acessoPrioritario() == true){
            contPrioritario++;
        }
        contMalas += p.qtdMalas();
    }
    return{
        qtdMalas: contMalas,
        qtdPrioritario: contPrioritario,
    }
}

let passagens = [];

passagens.push(new Economica('10/03/2023', 1010, 500));
passagens.push(new Executiva('10/03/2023', 1010, 500));
passagens.push(new PrimeiraClasse('10/03/2023', 1010, 500));
passagens.push(new Economica('10/03/2023', 1010, 500));
passagens.push(new Executiva('10/03/2023', 1010, 500));
passagens.push(new PrimeiraClasse('10/03/2023', 1010, 500));

let resultados = qtds(passagens);
console.log(resultados);