
export class Turma {
  private nome: string;

  constructor(
    nome: string,
  ) {
    this.nome = nome;
  }

  getNomeTurma() {
    return this.nome;
  }
}