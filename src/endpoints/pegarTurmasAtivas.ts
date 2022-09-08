import getTurmasAtivas from "../data/getTurmasAtivas";
import { Request, Response } from "express";

export async function pegarTurmasAtivas(req: Request, res: Response) {
  try {
    const turmasAtivas = await getTurmasAtivas();

    res.send(turmasAtivas);
  } catch (error: any) {
    res.status(res.statusCode || 500).send({ message: error.message });
  }
}
