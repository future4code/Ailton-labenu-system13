import { connection } from "../connection";

export default async function getTurmas () {
    const turmas = await connection('Turma')
    return turmas
}