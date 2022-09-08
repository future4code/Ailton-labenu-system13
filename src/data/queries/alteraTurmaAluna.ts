 import { connection } from "../connection";

export default async function alteraTurmaAluna (turma:any, id:any) {
    await connection('Aluno').update('turma_id', `${turma}`).where({id:`${id}`})
}