
export class Docente {
  private nome: string;
  private email: string;
  private data_nasc: string;
  private turma_id: number;

  constructor(
    nome: string,
    email: string,
    data_nasc: string,
    turma_id: number
  ) {
    this.nome = nome;
    this.email = email;
    this.data_nasc = data_nasc;
    this.turma_id = turma_id;
  }

  getNomeDocente() {
    return this.nome;
  }
  getEmailDocente() {
    return this.email;
  }
  getDataDocente() {
    return this.data_nasc;
  }
  getTurmaDocente() {
    return this.turma_id;
  }
}