import { connection } from "../connection";

export default async function insertAluno(novoAluno: any) {
  await connection("Aluno").insert(novoAluno);
}
