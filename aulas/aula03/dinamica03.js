import { validate } from "bycontract";

class Funcionario {
    #nome;
    #salarioBase;
    #cargaHorariaMensal;

    constructor(nome, salarioBase, cargaHorariaMensal) {
        validate(arguments, ['String', 'Number', 'Number']);
        this.#nome = nome;
        this.#salarioBase = salarioBase;
        this.#cargaHorariaMensal = cargaHorariaMensal;
    }

    get nome() {
        return this.#nome;
    }

    get salarioBase() {
        return this.#salarioBase;
    }

    get cargaHorariaMensal() {
        return this.#cargaHorariaMensal;
    }

    set cargaHorariaMensal(valor) {
        validate(arguments, ['Number']);
        this.#cargaHorariaMensal = valor > 0 ? valor : 0;
    }

    get salarioLiquido() {
        let valHora = this.salarioBase / 44;
        let sb = valHora * this.cargaHorariaMensal;
        let inss = sb * 0.1;
        return sb - inss;
    }

    toString() {
        return `Nome: ${this.nome}, Carga Horária: ${this.cargaHorariaMensal}h, Salário Base: R$ ${this.salarioBase.toFixed(2)}, Salário Líquido: R$ ${this.salarioLiquido.toFixed(2)}`;
    }
}

class Tecnico extends Funcionario {
    #categoria;

    constructor(nome, salarioBase, cargaHorariaMensal, categoria) {
        validate(arguments, ['String', 'Number', 'Number', 'Number']);
        super(nome, salarioBase, cargaHorariaMensal);
        this.#categoria = categoria;
    }

    get categoria() {
        return this.#categoria;
    }

    get salarioLiquido() {
        let sl = super.salarioLiquido;
        if (this.#categoria > 3) {
            sl = sl * 1.03;
        }
        return sl;
    }
}

class Professor extends Funcionario {
    constructor(nome, salarioBase, cargaHorariaMensal) {
        super(nome, salarioBase, cargaHorariaMensal);
    }
}

class Pesquisador extends Professor {
    #cargaHorariaPesquisa;

    constructor(nome, salarioBase, cargaHorariaMensal, cargaHorariaPesquisa) {
        validate(arguments, ['String', 'Number', 'Number', 'Number']);
        super(nome, salarioBase, cargaHorariaMensal);
        this.#cargaHorariaPesquisa = cargaHorariaPesquisa;
    }

    get cargaHorariaPesquisa() {
        return this.#cargaHorariaPesquisa;
    }

    set cargaHorariaPesquisa(valor) {
        validate(arguments, ['Number']);
        this.#cargaHorariaPesquisa = valor > 0 ? valor : 0;
    }

    get cargaHorariaMensal() {
        return super.cargaHorariaMensal + this.#cargaHorariaPesquisa;
    }

    toString() {
        return `Nome: ${this.nome}, Carga Horária (Aulas): ${super.cargaHorariaMensal}h, Carga Horária (Pesquisa): ${this.cargaHorariaPesquisa}h, Carga Horária Total: ${this.cargaHorariaMensal}h, Salário Base: R$ ${this.salarioBase.toFixed(2)}, Salário Líquido: R$ ${this.salarioLiquido.toFixed(2)}`;
    }
}

function acrescentaHoras(funcionario) {
    validate(arguments, ['Object']);
    if (funcionario instanceof Pesquisador) {
        funcionario.cargaHorariaPesquisa += 3;
    } else if (funcionario instanceof Professor || funcionario instanceof Tecnico || funcionario instanceof Funcionario) {
        funcionario.cargaHorariaMensal += 5;
    }
}

let tecnico = new Tecnico("Carlos", 4500, 40, 4);
console.log(`\n Técnico: ${tecnico.toString()}`);
acrescentaHoras(tecnico);
console.log(` Após acréscimo de carga horária: ${tecnico.toString()}`);

console.log("\n----------------------------------\n");

let professor = new Professor("Mariana", 9800, 25);
console.log(`\n Professor: ${professor.toString()}`);
acrescentaHoras(professor);
console.log(` Após acréscimo de carga horária: ${professor.toString()}`);

console.log("\n----------------------------------\n");

let pesquisador = new Pesquisador("Roberto", 18000, 22, 8);
console.log(`\n Pesquisador: ${pesquisador.toString()}`);
acrescentaHoras(pesquisador);
console.log(` Após acréscimo de carga horária: ${pesquisador.toString()}`);