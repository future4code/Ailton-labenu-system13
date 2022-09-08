import { connection } from "../connection";

export default async function insertTurma (novaTurma:any) {
    await connection('Turma').insert(novaTurma)
}