import insertDocente from "../data/queries/insertDocente";
import { Request, Response } from "express";
import { BRtoUS } from "../function/dataAluno";

export default async function criaDocente(req: Request, res: Response) {
 try {
    
    const { nome, email, data_nasc, turma_id } = req.body;

    if (!nome || !email || !data_nasc || !turma_id) {
      res.statusCode = 400;
      throw new Error(`Todos os parametros precisam estar preenchidos`);
    }
    const novaData = BRtoUS(data_nasc);

    const novoDocente = {
      nome,
      email,
      data_nasc: novaData,
      turma_id,
    };
    await insertDocente(novoDocente)
    res.status(201).send("Docente criado com sucesso");
 } catch (error:any) {
    
 }
}
