import insertAluno from "../data/queries/insertAluno";
import { Request, Response } from "express";
import { BRtoUS } from "../function/dataAluno";

export default async function criarEstudante(req: Request, res: Response) {
  try {
    const { nome, email, data_nasc, turma_id } = req.body;

    if (!nome || !email || !data_nasc || !turma_id) {
      res.statusCode = 400;
      throw new Error(`Todos os parametros precisam estar preenchidos`);
    }
    const novaData = BRtoUS(data_nasc);
    const novoAluno = {
      nome,
      email,
      data_nasc: novaData,
      turma_id,
    };
    await insertAluno(novoAluno);
    res.status(201).send("Aluno criado com sucesso");
    
  } catch (error: any) {
    res.status(res.statusCode || 500).send({ message: error.message });
  }
}
