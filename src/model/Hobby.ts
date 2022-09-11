export class Hobby {
  private hobby: string;

  constructor(hobby: string) {
    this.hobby = hobby;
  }
  getHobby() {
    return this.hobby;
  }
}

export class AlunoHobby{
    private hobby:string;
    private id_aluno:number;

    constructor(hobby:string, id_aluno:number){
        this.hobby = hobby;
        this.id_aluno =id_aluno;
    }
    getHobby(){
        return this.hobby
    }
    getId(){
        return this.id_aluno
    }
}

