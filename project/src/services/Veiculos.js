import api from "./Api";

class Veiculos{
    static listar(){
        return api.get('/veiculos')
    }
    static delete(id){
        return api.delete('/veiculos/'+id)
    }
}

export default Veiculos