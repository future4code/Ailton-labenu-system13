import { app } from "./app";
import { AlunoController } from "./endpoints/AlunoController";
import { DocenteController } from "./endpoints/DocenteController";
import { TurmaController } from "./endpoints/TurmaController";

const alunoController = new AlunoController()
const docenteController = new DocenteController()
const turmaController = new TurmaController()

app.get("/turmas", turmaController.pegarTumasAtivas);

app.post("/criarTurma", turmaController.criarTurma);

app.put("/editarTurma", turmaController.editarTurmaModulo);

app.post("/addAluno", alunoController.criarAluno);

app.get("/aluno", alunoController.buscarAlunoByNome);

app.put("/mudarTurma", alunoController.mudarAlunoTurma);

app.post("/addDocente", docenteController.criarDocente);

app.get("/docentes", docenteController.buscarDocente);

app.put("/editarTurmaDocente", docenteController.editarDocenteTurma)