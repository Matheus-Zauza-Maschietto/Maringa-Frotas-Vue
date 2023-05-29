import api from "./Api";

class Empresas{
    static listar(){
        return api.get('/empresas')
    }

    static criar(body){
        return api.post('/empresas', body)
    }
    static delete(id){
        return api.delete('/empresas/'+id)
    }
}

export default Empresas