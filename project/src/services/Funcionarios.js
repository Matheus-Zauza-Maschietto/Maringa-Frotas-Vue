import api from "./Api";

class Funcionarios{
    static listar(){
        return api.get('/funcionarios')
    }
    static criar(body){
        return api.post('/funcionarios', body)
    }
    static delete(id){
        return api.delete('/funcionarios/'+id)
    }
}

export default Funcionarios