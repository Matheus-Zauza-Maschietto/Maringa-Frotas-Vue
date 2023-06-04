import api from "./Api";

class Manutencoes{
    static listar(){
        return api.get('/manutencoes');
    }

    static listarTipos(){
        return api.get('/manutencoes/tipos')
    }

    static criar(body){
        return api.post('/manutencoes', body)
    }
}

export default Manutencoes;