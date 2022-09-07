import { Request, Response } from "express";
import updateModuloTurma from "../data/updateModuloTurma";

export async function editarTurmaModulo(req: Request, res: Response) {
  try {
    
    const {turmaId, novoModulo} = req.body

    await updateModuloTurma(turmaId, novoModulo)
    
    res.status(201).send(`Modulo da turma editada com sucesso.`)

  } catch (error: any) {
    res.status(res.statusCode || 500).send({ message: error.message });
  }
}