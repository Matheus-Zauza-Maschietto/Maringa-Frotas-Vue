import api from "./Api";

class Orgaos{
    static listar(){
        return api.get('/orgaos')
    }
}

export default Orgaos