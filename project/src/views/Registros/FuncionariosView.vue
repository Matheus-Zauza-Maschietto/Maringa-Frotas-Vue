<template>
    <div id="funcionariosView">
        <SideMenuC/>
        <h2 class="text-center">Funcionarios</h2>
        <TableC 
        :headers="['Nome', 'CPF', 'CNH', 'Orgão', 'Cargo']"
        :body="$store.state.funcionarios"
        :botoes="botoes"
        @exibirModal="iniciarModal($event)"
        @deletarRegistro="deletarRegistro($event)"
        />
    </div>
</template>

<script>
import TableC from "@/components/TableC.vue";
import botao from "@/entities/botao";
import SideMenuC from "@/components/SideMenuC.vue"
import Funcionarios from "@/services/Funcionarios";

export default {
    name: "FuncionariosView",
    components: {
        TableC,
        SideMenuC
    },
  data(){
    return{
      exibirModal: false,
      body: '',
      botoes: [
        new botao(1, 'Viagens', 'btn-primary', 'exibirModal'),
        new botao(1, 'Deletar', 'btn-danger', 'deletarRegistro')
      ]
    }
  },
  methods: {
    deletarRegistro(item){
        if(confirm('Tem certeza que deseja excluir esse registro ?')){
          Funcionarios.delete(item.id)
          .then(() => {
            this.$store.commit('removerFuncionario', item.id)
            alert('Registro excluido com sucesso')
          })
          .catch(() => {
            alert('Não foi possivel excluir esse registro')
          })
        }
    }
  },
  created(){
    Funcionarios.listar().then((retorno) =>{
      this.$store.commit("inserirFuncionario", retorno.data)
    })
  }
}
</script>

<style>
  #funcionariosView{
    height: 100vh;
    background-color: rgb(204, 204, 204);
  }
</style>