import { BaseDataBase } from "../BaseDataBase";
import { Especialidade } from "../../model/Especialidade";

export class EspecialidadeData extends BaseDataBase {
  async insertEspecialidade(novaEspecialidade:Especialidade) {
    await this.getConnection()("Especialidade").insert({
      especialidade: novaEspecialidade.getEspecialidade()
  
    });
  }
  
  
}