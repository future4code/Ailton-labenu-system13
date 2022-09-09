import { connection } from "../connection";

export default async function alteraTurmaDocente(turma: any, id: any) {
  await connection("Docente")
    .update("turma_id", `${turma}`)
    .where({ id: `${id}` });
}
