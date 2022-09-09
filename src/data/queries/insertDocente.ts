import { connection } from "../connection";

export default async function insertDocente (novoDocente:any) {
    await connection('Docente').insert(novoDocente)
}