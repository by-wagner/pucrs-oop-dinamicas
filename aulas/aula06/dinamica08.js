// D3) Implementar os métodos aprovados() e reprovados() em objetos Turma e Aluno

class Aluno {
  constructor(nome, nota) {
    this.nome = nome;
    this.nota = nota;
  }
}

class Turma {
  constructor(alunos = []) {
    this.alunos = alunos;
  }

  aprovados() {
    return this.alunos.filter(aluno => aluno.nota >= 6);
  }

  reprovados() {
    return this.alunos.filter(aluno => aluno.nota < 6);
  }
}

// Exemplo de uso:
const turma = new Turma([
  new Aluno('Ana', 8),
  new Aluno('Carlos', 5),
  new Aluno('Beatriz', 6),
  new Aluno('Daniel', 4),
  new Aluno('Eduarda', 7)
]);

console.log('Aprovados:', turma.aprovados().map(a => a.nome)); // ['Ana', 'Beatriz', 'Eduarda']
console.log('Reprovados:', turma.reprovados().map(a => a.nome)); // ['Carlos', 'Daniel']
