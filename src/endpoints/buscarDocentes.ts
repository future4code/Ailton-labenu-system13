import getDocentes from "../data/queries/getDocentes";
import { Request, Response } from "express";


export default async function buscarDocentes(req: Request, res: Response) {
 try {
    const docentes = await getDocentes();
    res.send(docentes);
 } catch (error:any) {
    res.status(res.statusCode || 500).send({ message: error.message });
 }
}
