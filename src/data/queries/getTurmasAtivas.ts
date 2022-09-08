import { connection } from "../connection";

export default async function getTurmasAtivas () {
    const turmasAtivas = await connection('turma').where('modulo', '!=', '0')
    return turmasAtivas
}