class Personagem {
    #Nome;
    #Ataque;
    #Defesa;
    #Choque;
    #Agua;
    #Vento;
    #Fogo;

    constructor({Nome, Ataque, Defesa, Choque = false, Agua = false, Vento = false, Fogo = false}) {
        if (!Nome || !Ataque || !Defesa) {
            throw new Error("Nome, Ataque e Defesa são obrigatórios!");
        }
        this.#Nome = Nome;
        this.#Ataque = Ataque;
        this.#Defesa = Defesa;
        this.#Choque = Choque;
        this.#Agua = Agua;
        this.#Vento = Vento;
        this.#Fogo = Fogo;
    }

    get Nome() {
        return this.#Nome;
    }

    get Ataque() {
        return this.#Ataque;
    }

    get Defesa() {
        return this.#Defesa;
    }

    get Configuracao() {
        return {
            Choque: this.#Choque,
            Agua: this.#Agua,
            Vento: this.#Vento,
            Fogo: this.#Fogo
        };
    }

    toString() {
        return `Nome: ${this.#Nome}, Ataque: ${this.#Ataque}, Defesa: ${this.#Defesa}`;
    }
}

let p = new Personagem({Nome: "Sora", Ataque: 100, Defesa: 75, Agua: true});
let p1 = new Personagem({Nome: "Riku", Ataque: 120, Defesa: 80, Fogo: true});
let p2 = new Personagem({Nome: "Kairi", Ataque: 90, Defesa: 100, Vento: true, Agua: true});

console.table([
    {Nome: p.Nome, Ataque: p.Ataque, Defesa: p.Defesa, ...p.Configuracao},
    {Nome: p1.Nome, Ataque: p1.Ataque, Defesa: p1.Defesa, ...p1.Configuracao},
    {Nome: p2.Nome, Ataque: p2.Ataque, Defesa: p2.Defesa, ...p2.Configuracao}
]);