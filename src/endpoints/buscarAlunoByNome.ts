import getAlunoByName from "../data/queries/getAlunoByName";
import { Request, Response } from "express";

export default async function buscarAlunoByNome(res: Response, req: Request) {
  try {
    const nome = req.body
    res.send(nome)
     
    if (!nome){
        res.statusCode = 400;
        throw new Error(`Insira um nome`);
      }
   
      const result = await getAlunoByName(nome)
      if(!result.length){
        res.statusCode = 400;
        throw new Error(`Usuário não encontrado`);
      }
     console.log("DJIJDSDSLPDS",result)
      res.status(201).send(result);
  } catch (error: any) {
    res.status(res.statusCode || 500).send({ message: error.message });
  
  }
}
