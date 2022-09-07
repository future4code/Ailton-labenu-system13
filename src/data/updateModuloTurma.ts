import { connection } from "./connection";

export default async function updateModuloTurma (turmaId: string, novoModulo: string) {
    await connection('turma').update('modulo', `${novoModulo}`).where('id', `${turmaId}`)
}