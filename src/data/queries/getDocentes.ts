import { connection } from "../connection";

export default async function getDocentes() {
    const result = await connection('Docente').select("*")
    return result
}
