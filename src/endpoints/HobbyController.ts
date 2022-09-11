import { Request, Response } from "express";
import { AlunoHobby, Hobby } from "../model/Hobby";
import { HobbyData } from "../data/queries/HobbyData";

export class HobbyController {
  async criarHobby(req: Request, res: Response): Promise<void> {
    try {
      const { hobby } = req.body;
      if (!hobby) {
        res.statusCode = 400;
        throw new Error(`Todos os parametros precisam estar preenchidos`);
      }
      const novoHobby = new Hobby(hobby);
      const hobbyData = new HobbyData();
      await hobbyData.insertHobby(novoHobby);
      res.status(201).send("Hobby criado com sucesso");
    } catch (error: any) {
      res.status(res.statusCode || 500).send({ message: error.message });
    }
  }

  async criarHobbyEstudante(req: Request, res: Response): Promise<void> {
    try {
      const { hobby, id_aluno } = req.body;
      if (!hobby || !id_aluno) {
        res.statusCode = 400;
        throw new Error(`Todos os parametros precisam estar preenchidos`);
      }
      const novoHobbyAluno = new AlunoHobby(hobby, id_aluno)
      const hobbyData= new HobbyData()
      await hobbyData.insertAlunoHobby(novoHobbyAluno);
      res.status(201).send("Hobby adicionado com sucesso :)")

    } catch (error: any) {
      res.status(res.statusCode || 500).send({ message: error.message });
    }
  }
async pegarAlunoPorHobby(req: Request, res: Response): Promise<void>{
  try {
    const hobby = req.query;

    if(!hobby){
      res.statusCode = 400;
      throw new Error(`Informe um hobby`);
    }




  } catch (error:any) {
    
  }
}

}


