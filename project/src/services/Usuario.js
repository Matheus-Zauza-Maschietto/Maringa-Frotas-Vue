import api from "./Api";

class Usuario{
    static cadastro(body){
        return api.post('/cadastro', body)
    }
    static login(body){
        return api.post('/login', body)
    }
}

export default Usuario