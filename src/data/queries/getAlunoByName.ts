import { connection } from "../connection";

export default async function getAlunoByName (nome:any) {
    const result = await connection('Aluno').select("*").whereRaw(`nome like ?`,`%${nome}%`)
    return result
}