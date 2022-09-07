import {criarTurma} from './endpoints/criarTurma'
import { app } from './app'
import { editarTurmaModulo } from './endpoints/editarTurmaModulo'
import { pegarTurmasAtivas } from './endpoints/pegarTurmasAtivas';

app.get('/turmas', pegarTurmasAtivas)

app.post('/criarTurma', criarTurma)

app.put('/editarTurma', editarTurmaModulo)