import { connection } from "../connection";

export default async function updateModuloTurma (turmaId: string, novoModulo: string) {
    await connection('Turma').update('modulo', `${novoModulo}`).where({id:`${turmaId}`})
}