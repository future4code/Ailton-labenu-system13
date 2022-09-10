import { BaseDataBase } from "../BaseDataBase";
import { Turma } from "../../model/Turma";

export class TurmaData extends BaseDataBase {
    async insertTurma(novaTurma:Turma){
         await this.getConnection()("Turma").insert(novaTurma);
    }
    async getTurmasAtivas(){
        const turmasAtivas = await this.getConnection()("Turma").where(
          "modulo",
          "!=",
          "0"
        );
        return turmasAtivas;
    }
    async updateModuloTurma(turmaId:string,novoModulo:string){
        await this.getConnection()("Turma")
          .update("modulo", `${novoModulo}`)
          .where({ id: `${turmaId}` });
    }
}
