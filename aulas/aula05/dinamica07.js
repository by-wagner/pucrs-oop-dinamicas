let D1 = ["Ana", "Carlos", "Maria", "João"];
let D2 = ["Carlos", "Maria", "Paulo"];
let D3 = ["Maria", "João", "Roberto"];


// (a) Todos os alunos sem repetição
let alunos = new Set([...D1, ...D2, ...D3]);
console.log("Todos os alunos matriculados (sem repetição):", [...alunos]);

// (b) Alunos matriculados apenas em D1
let apenasD1 = D1.filter(aluno => !D2.includes(aluno) && !D3.includes(aluno));
console.log("Lista de alunos matriculados apenas no D1:", apenasD1);

// (c) Alunos matriculados simultaneamente em D1 e D2
let emD1eD2 = D1.filter(aluno => D2.includes(aluno));
console.log("Lista de alunos matriculados simultaneamente em D1 e D2:", emD1eD2);


// Solução do professor

/*
function impRelacoes(d1, d2, d3) {
    // Matriculados em D1, D2 e D3
    let todos = new Set([...d1, ...d2, ...d3]);
    console.log('Todos os alunos matriculados em alguma turma: ');
    console.log(todos);

    //Matriculados apenas em D1
    let D1 = new Set(d1);
    let D2 = new Set(d2);
    let D3 = new Set(d3);

    let D1menosD2 = new Set(Array.from(D1).filter(x => !D2.has(x)));
    let D1menosD3 = new Set(Array.from(D1menosD2).filter(x => !D3.has(x)));
    console.log('Matriculados apenas em D1: ');
    console.log(D1menosD3);

    let interseccao = new Set(Array.from(D1).filter(x => D2.has(x)));
    console.log('Alunos matriculados simultaneamente em D1 e D2: ');
    console.log(interseccao);
}

let ld1 = ["Ana", "Carlos", "Maria", "João"];
let ld2 = ["Carlos", "Maria", "Paulo"];
let ld3 = ["Maria", "João", "Roberto"];

impRelacoes(ld1,ld2,ld3);
*/