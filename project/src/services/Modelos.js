import api from "./Api";

class Modelos{
    static listar(){
        return api.get('/modelos')
    }

    static listarComMarca(marcaId){
        return api.get('/modelos/marcas/'+marcaId)
    }
}

export default Modelos