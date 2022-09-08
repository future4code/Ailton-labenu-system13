import insertTurma from "../data/queries/insertTurma";
import getTurmas from "../data/queries/getTurmas";
import { Request, Response } from "express";

export async function criarTurma(req: Request, res: Response) {
  try {
    
    const novaTurma = req.body

    if(!novaTurma) {
        res.statusCode = 400
        throw new Error(`É preciso inserir um nome para a turma.`)
    }

    const turmas = await getTurmas()

   
    await insertTurma(novaTurma)

    res.status(201).send('Turma criada com sucesso.')

  } catch (error: any) {
    res.status(res.statusCode || 500).send({ message: error.message });
  }
}
