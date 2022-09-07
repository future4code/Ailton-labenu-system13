import { connection } from "./connection";

export default async function insertTurma (novaTurma:any) {
    await connection('turma').insert(novaTurma)
}