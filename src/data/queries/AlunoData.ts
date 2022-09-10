import { BaseDataBase} from "../BaseDataBase";
import { Aluno } from "../../model/Aluno";

export class AlunoData extends BaseDataBase {
  async alteraTurmaAluno(turma:any,id:any) {
    await this.getConnection()("Aluno")
      .update("turma_id", `${turma}`)
      .where({ id: `${id}` });
  }
  async getAlunoByName(nome:any){
    const result = await this.getConnection()("Aluno")
      .select("*")
      .whereRaw(`nome like ?`, `%${nome}%`);
    return result;
  }
  async insertAluno(novoAluno:Aluno){
    await this.getConnection()("Aluno").insert({
      nome: novoAluno.getNomeAluno(),
      email: novoAluno.getEmailAluno(),
      data_nasc: novoAluno.getDataAluno(),
      turma_id: novoAluno.getTurmaAluno()
    });
  }
}
