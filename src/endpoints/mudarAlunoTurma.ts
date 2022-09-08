import { Request, Response } from "express";
import alteraTurmaAluna from "../data/queries/alteraTurmaAluna";


export default async function mudarAlunoTurma(req:Request, res:Response) {
 try {
   const  { id, turma_id}= req.body

    if(!id){
        res.statusCode = 400;
        throw new Error(`Insira um id válida`);
    }
    if(!turma_id){
        res.statusCode = 400;
        throw new Error(`Insira uma turma válida`);
    }

    const result = await alteraTurmaAluna(turma_id, id)

    res.status(201).send(`Usuário alterado com sucesso para turma ${turma_id}`);

 } catch (error:any) {
    
 }
}
