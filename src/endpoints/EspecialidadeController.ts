import { Request, Response } from "express";
import { Especialidade } from "../model/Especialidade";
import { EspecialidadeData } from "../data/queries/EspecialidadeData";
export class EspecialidadeController {
  async criarEspecialidade(req: Request, res: Response): Promise<void> {
    try {
      const { especialidade } = req.body;
      if (!especialidade) {
        res.statusCode = 400;
        throw new Error(`Todos os parametros precisam estar preenchidos`);
      }

      const novaEspecialidade = new Especialidade(especialidade);
      const especialidadeData = new EspecialidadeData();
      await especialidadeData.insertEspecialidade(novaEspecialidade);
      res.status(201).send("Especialidade criado com sucesso");
    } catch (error: any) {
      res.status(res.statusCode || 500).send({ message: error.message });
    }
  }
}
