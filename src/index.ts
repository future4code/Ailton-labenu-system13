import { criarTurma } from "./endpoints/criarTurma";
import { app } from "./app";
import { editarTurmaModulo } from "./endpoints/editarTurmaModulo";
import { pegarTurmasAtivas } from "./endpoints/pegarTurmasAtivas";
import criarEstudante from "./endpoints/criarEstudante";
import buscarAlunoByNome from "./endpoints/buscarAlunoByNome";
import mudarAlunoTurma from "./endpoints/mudarAlunoTurma";

app.get("/turmas", pegarTurmasAtivas);

app.post("/criarTurma", criarTurma);

app.put("/editarTurma", editarTurmaModulo);

app.post("/addAluno", criarEstudante);

app.get("/aluno", buscarAlunoByNome);

app.put("/mudarTurma", mudarAlunoTurma);
