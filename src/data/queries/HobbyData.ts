import { BaseDataBase } from "../BaseDataBase";
import { AlunoHobby, Hobby } from "../../model/Hobby";

export class HobbyData extends BaseDataBase {
  async insertHobby(novoHobby: Hobby) {
    await this.getConnection()("Hobbies").insert({
      hobby: novoHobby.getHobby(),
    });
  }
  async insertAlunoHobby(novoHobby: AlunoHobby) {
    await this.getConnection()("hobby_aluno").insert({
      hobby: novoHobby.getHobby(),
      id_aluno: novoHobby.getId(),
    });
  }
}
