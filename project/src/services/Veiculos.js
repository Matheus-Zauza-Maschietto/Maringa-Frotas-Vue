import api from "./Api";

class Veiculos{
    static listar(){
        return api.get('/veiculos')
    }
    static delete(id){
        return api.delete('/veiculos/'+id)
    }

    static criar(body){
        return api.post('/veiculos', body)
    }
}

export default Veiculos