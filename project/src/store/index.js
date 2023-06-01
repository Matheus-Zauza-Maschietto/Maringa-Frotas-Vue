import { createStore } from 'vuex'

export default createStore({
  state: {
    empresas: [],
    funcionarios: [],
    veiculos: [],
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
    },

    removerVeiculo(state, id){
      state.funcionarios = state.funcionarios.filter(item => item.id !== id)
    },
    
  },
  actions: {
  },
  modules: {
  }
})
