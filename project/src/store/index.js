import { createStore } from 'vuex'

export default createStore({
  state: {
    empresas: [],
    funcionarios: [],
    veiculos: [],
    manutencoes: [],
    menu: false
  },
  getters: {
  },
  mutations: {
    inserirEmpresa(state, empresas){
      state.empresas = empresas
    },

    removerEmpresa(state, id){
      state.empresas = state.empresas.filter(item => item.id !== id)
    },

    inserirFuncionario(state, funcionarios){
      state.funcionarios = funcionarios
    },

    removerFuncionario(state, id){
      state.funcionarios = state.funcionarios.filter(item => item.id !== id)
    },

    inserirVeiculo(state, veiculos){
      state.veiculos = veiculos

      state.veiculos.forEach((item) => {
        item.statusFrota = item.statusFrota == false ? 'Inativo': 'Ativo'
      })

      state.veiculos.forEach((item) => {
        item.leilao = item.leilao == false ? 'Em leilão': 'Fora de leilão'
      })

    },

    removerVeiculo(state, id){
      state.funcionarios = state.funcionarios.filter(item => item.id !== id)
    },
    
    inserirManutencao(state, manutencoes){
      const ManutencoesDTO = manutencoes.map((item) => ({
        id: item.idRevisao,
        tipoManutencao: item.idTipoRevisao.descricaoRevisao,
        custo: item.custo,
        placaVeiculo: item.idFrota.placa,
        data: new Date(item.dataRevisao).toLocaleDateString('pt-br', {year:"numeric", month:"long", day:"numeric"}) ,
        empresa: item.idEmpRevisao.nomeEmpresa,
      }));

      state.manutencoes = ManutencoesDTO
    }
  },
  actions: {
  },
  modules: {
  }
})
