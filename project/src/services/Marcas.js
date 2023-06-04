import api from "./Api";

class Marcas{
    static listar(){
        return api.get('/marcas')
    }
}

export default Marcas