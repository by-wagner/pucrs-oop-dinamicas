// D1) Sistema de informação de turmas e alunos
// Implementação dos métodos conforme solicitado usando a biblioteca Ramda

import * as R from 'ramda';

class Aluno {
  constructor(matricula, nome, notaP1, notaP2) {
    this.matricula = matricula;
    this.nome = nome;
    this.notaP1 = notaP1;
    this.notaP2 = notaP2;
  }

  media() {
    return (this.notaP1 + this.notaP2) / 2;
  }

  aprovado() {
    return this.media() >= 6;
  }
}

class Turma {
  constructor(numero, nomeProfessor, vagas) {
    this.numero = numero;
    this.nomeProfessor = nomeProfessor;
    this.vagas = vagas;
    this.alunos = [];
  }

  matricularAluno(aluno) {
    if (this.alunos.length < this.vagas) {
      this.alunos.push(aluno);
    } else {
      console.log("Não há vagas disponíveis.");
    }
  }

  alunosReprovados() {
    return R.filter(aluno => !aluno.aprovado(), this.alunos);
  }

  alunosAprovados() {
    return R.filter(aluno => aluno.aprovado(), this.alunos);
  }

  alunosComMediaEAprovacao() {
    return R.map(aluno => ({
      nome: aluno.nome,
      media: aluno.media(),
      aprovado: aluno.aprovado()
    }), this.alunos);
  }

  mediaFinalAlunos() {
    const medias = R.map(aluno => aluno.media(), this.alunos);
    return R.mean(medias).toFixed(2);
  }
}

// Exemplo de uso:
const aluno1 = new Aluno(1, 'João', 7, 8);
const aluno2 = new Aluno(2, 'Maria', 4, 5);
const aluno3 = new Aluno(3, 'Pedro', 8, 9);

const turma = new Turma(101, 'Prof. Silva', 30);
turma.matricularAluno(aluno1);
turma.matricularAluno(aluno2);
turma.matricularAluno(aluno3);

console.log("Alunos reprovados:", turma.alunosReprovados().map(a => a.nome)); // ['Maria']
console.log("Alunos aprovados:", turma.alunosAprovados().map(a => a.nome)); // ['João', 'Pedro']
console.log("Alunos com média e aprovação:", turma.alunosComMediaEAprovacao());
console.log("Média das notas finais:", turma.mediaFinalAlunos());
