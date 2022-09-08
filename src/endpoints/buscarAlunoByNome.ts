import getAlunoByName from "../data/queries/getAlunoByName";
import { Request, Response } from "express";

export default async function buscarAlunoByNome(req: Request, res: Response) {
  try {
    const {nome} = req.query

     
    if (!nome){
        res.statusCode = 400;
        throw new Error(`Insira um nome`);
      }
   
      const result = await getAlunoByName(nome)
      if(!result.length){
        res.statusCode = 400;
        throw new Error(`Usuário não encontrado`);
      }
     
      res.status(201).send(result);
  } catch (error: any) {
    res.status(res.statusCode || 500).send({ message: error.message });
  
  }
}
