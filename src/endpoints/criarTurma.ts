import insertTurma from "../data/insertTurma";
import getTurmas from "../data/getTurmas";
import { Request, Response } from "express";

export async function criarTurma(req: Request, res: Response) {
  try {
    
    const nomeTurma = req.body.nome

    if(!nomeTurma) {
        res.statusCode = 400
        throw new Error(`É preciso inserir um nome para a turma.`)
    }

    const turmas = await getTurmas()

    const novaTurma = {
        id: turmas.length + 1,
        nome: nomeTurma
    }

    await insertTurma(novaTurma)

    res.status(201).send('Turma criada com sucesso.')

  } catch (error: any) {
    res.status(res.statusCode || 500).send({ message: error.message });
  }
}
