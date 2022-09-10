import { BaseDataBase } from "../BaseDataBase";
import { Docente } from "../../model/Docente";

export class DocenteData extends BaseDataBase {
  async getDocentes(){
    const result = await this.getConnection()("Docente").select("*");
    return result;
  }
  async insertDocente(novoDocente:Docente){
    await this.getConnection()("Docente").insert(novoDocente);
  }
  async alteraTurmaDocente(novaTurma:any,idDocente:any){
      await this.getConnection()("Docente")
        .update("turma_id", `${novaTurma}`)
        .where({ id: `${idDocente}` });
  } 
}
