import api from "./Api";

class Manutencoes{
    static listar(){
        return api.get('/manutencoes');
    }
}

export default Manutencoes;