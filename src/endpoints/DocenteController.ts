import { DocenteData } from "../data/queries/DocenteData";
import { Request, Response } from "express";
import { BRtoUS } from "../function/dataAluno";
import { Docente } from "../model/Docente";


export class DocenteController {
  async buscarDocente(req: Request, res: Response): Promise<void> {
    try {
      const docenteData = new DocenteData();
      const docentes = await docenteData.getDocentes();
      res.send(docentes);
    } catch (error: any) {
      res.status(res.statusCode || 500).send({ message: error.message });
    }
  }
  async criarDocente(req: Request, res: Response): Promise<void> {
    try {
      let { nome, email, data_nasc, turma_id } = req.body;

      if (!nome || !email || !data_nasc || !turma_id) {
        res.statusCode = 400;
        throw new Error(`Todos os parametros precisam estar preenchidos`);
      }
      data_nasc = BRtoUS(data_nasc);

      const novoDocente = new Docente(nome, email, data_nasc, turma_id);
      const docenteData = new DocenteData();
      await docenteData.insertDocente(novoDocente);
      res.status(201).send("Docente criado com sucesso");
    } catch (error: any) {}
  }
  async editarDocenteTurma(req: Request, res: Response): Promise<void> {
    try {
      const { idDocente, novaTurma } = req.body;
      if (!idDocente) {
        res.statusCode = 400;
        throw new Error(`É preciso informar o id do docente`);
      }
      if (!novaTurma) {
        res.statusCode = 400;
        throw new Error(`É preciso informar um novo módulo`);
      }
      if (novaTurma > 6) {
        res.statusCode = 400;
        throw new Error(`Os módulos disponíveis vão do 1 ao 6`);
      }
      const docenteData = new DocenteData();
      await docenteData.alteraTurmaDocente(novaTurma, idDocente);
      res.status(201).send(`Turma do Docente alterada com sucesso`);
    } catch (error: any) {
      res.status(res.statusCode || 500).send({ message: error.message });
    }
  }
}
