export class Especialidade{
    private especialidade:string;
  

    constructor(
        especialidade:string,
    
    ){
        this.especialidade = especialidade;
       
    }
    getEspecialidade(){
        return this.especialidade
    }
   
}