import alteraTurmaDocente from "../data/queries/alteraTurmaDocente";
import { Request, Response } from "express";


export default async function editarDocenteTurma(req: Request, res: Response) {
 try {
    const{idDocente, novaTurma}= req.body;
    if (!idDocente) {
        res.statusCode = 400;
        throw new Error(`É preciso informar o id do docente`);
      }
      if (!novaTurma) {
        res.statusCode = 400;
        throw new Error(`É preciso informar um novo módulo`);
      }
      if (novaTurma > 6) {
        res.statusCode = 400;
        throw new Error(`Os módulos disponíveis vão do 1 ao 6`);
      }

      await alteraTurmaDocente( novaTurma, idDocente,) 
      res.status(201).send(`Turma alterada com sucesso`);
      
 } catch (error:any) {
    res.status(res.statusCode || 500).send({ message: error.message }); 
 }
   
}
