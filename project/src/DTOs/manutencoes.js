export class ManutencoesDTO{
    

    ManutencoesDTO(Object){
        this.id = Object.idRevisao
        this.tipoManutencao = Object.idTipoRevisao.descricaoRevisao
        this.custo = Object.custo
        this.placaVeiculo = Object.idFrota.placa
        this.data = new Date(Object.dataRevisao)
        this.empresa = Object.idEmpRevisao.nomeEmpresa
    }

    static ManutencoesDTORetorno(Object){
        this.id = Object.idRevisao
        this.tipoManutencao = Object.idTipoRevisao.descricaoRevisao
        this.custo = Object.custo
        this.placaVeiculo = Object.idFrota.placa
        this.data = new Date(Object.dataRevisao)
        this.empresa = Object.idEmpRevisao.nomeEmpresa

        return this
    }
}