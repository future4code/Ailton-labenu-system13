import { connection } from "../connection";

export default async function getTurmasAtivas () {
    const turmasAtivas = await connection('Turma').where('modulo', '!=', '0')
    return turmasAtivas
}