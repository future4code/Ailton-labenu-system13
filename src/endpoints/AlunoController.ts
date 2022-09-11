import { Request, Response } from "express";
import { Aluno } from "../model/Aluno";
import { BRtoUS } from "../function/dataAluno";
import { AlunoData } from "../data/queries/AlunoData";


export class AlunoController {
  async buscarAlunoByNome(req: Request, res: Response): Promise<void> {
    try {
      const { nome } = req.query;

      if (!nome) {
        res.statusCode = 400;
        throw new Error(`Insira um nome`);
      }
      const alunoData = new AlunoData();
      const result = await alunoData.getAlunoByName(nome);
      if (!result.length) {
        res.statusCode = 400;
        throw new Error(`Usuário não encontrado`);
      }

      res.status(201).send(result);
    } catch (error: any) {
      res.status(res.statusCode || 500).send({ message: error.message });
    }
  }
  async criarAluno(req: Request, res: Response): Promise<void> {
    try {
      let { nome, email, data_nasc, turma_id } = req.body;

      if (!nome || !email || !data_nasc || !turma_id) {
        res.statusCode = 400;
        throw new Error(`Todos os parametros precisam estar preenchidos`);
      }
      data_nasc = BRtoUS(data_nasc);
      const novoAluno = new Aluno(nome, email, data_nasc, turma_id);
      const alunoData = new AlunoData();
      await alunoData.insertAluno(novoAluno);
      res.status(201).send("Aluno criado com sucesso");
    } catch (error: any) {
      res.status(res.statusCode || 500).send({ message: error.message });
    }
  }
  async mudarAlunoTurma(req: Request, res: Response): Promise<void> {
    try {
      const { id, turma_id } = req.body;

      if (!id) {
        res.statusCode = 400;
        throw new Error(`Insira um id válida`);
      }
      if (!turma_id) {
        res.statusCode = 400;
        throw new Error(`Insira uma turma válida`);
      }
      const alunoData = new AlunoData();
      const result = await alunoData.alteraTurmaAluno(turma_id, id);

      res
        .status(201)
        .send(`Usuário alterado com sucesso para turma ${turma_id}`);
    } catch (error: any) {
      res.status(res.statusCode || 500).send({ message: error.message })
    }
  }
}