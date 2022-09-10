import { TurmaData } from "../data/queries/TurmaData";
import { Request, Response } from "express";
import { Turma } from "../model/Turma";

export class TurmaController {
  async criarTurma(req: Request, res: Response): Promise<void> {
    try {
      const novaTurma: Turma = req.body;

      if (!novaTurma) {
        res.statusCode = 400;
        throw new Error(`É preciso inserir um nome para a turma.`);
      }
      const turmaData = new TurmaData();
      await turmaData.insertTurma(novaTurma);

      res.status(201).send("Turma criada com sucesso.");
    } catch (error: any) {
      res.status(res.statusCode || 500).send({ message: error.message });
    }
  }
  async pegarTumasAtivas(req: Request, res: Response): Promise<void> {
    try {
      const turmaData = new TurmaData();
      const turmasAtivas = await turmaData.getTurmasAtivas();

      res.send(turmasAtivas);
    } catch (error: any) {
      res.status(res.statusCode || 500).send({ message: error.message });
    }
  }
  async editarTurmaModulo(req: Request, res: Response): Promise<void> {
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
      const turmaData = new TurmaData();
      await turmaData.updateModuloTurma(turmaId, novoModulo);
      res.status(201).send(`Modulo da turma editada com sucesso.`);
    } catch (error: any) {
      res.status(res.statusCode || 500).send({ message: error.message });
    }
  }
}
