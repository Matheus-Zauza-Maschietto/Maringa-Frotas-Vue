import api from "./Api";

class Cargos{
    static listar(){
        return api.get('/cargos')
    }
}

export default Cargos