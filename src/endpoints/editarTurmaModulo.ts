import { Request, Response } from "express";
import { isCallLikeExpression } from "typescript";
import updateModuloTurma from "../data/queries/updateModuloTurma";

export async function editarTurmaModulo(req: Request, res: Response) {
  try {
    const { turmaId, novoModulo } = req.body;

    if (!turmaId) {
      res.statusCode = 400;
      throw new Error(`É preciso informar o id da Turma`);
    }
    if (!novoModulo) {
      res.statusCode = 400;
      throw new Error(`É preciso informar um novo módulo`);
    }
    if (novoModulo > 6) {
      res.statusCode = 400;
      throw new Error(`Os módulos disponíveis vão do 1 ao 6`);
    }

   await updateModuloTurma(turmaId, novoModulo);
    res.status(201).send(`Modulo da turma editada com sucesso.`);
    
  } catch (error: any) {
    res.status(res.statusCode || 500).send({ message: error.message });
  }
}
