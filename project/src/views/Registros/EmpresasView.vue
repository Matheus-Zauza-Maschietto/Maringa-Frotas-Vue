<template>
    <div>
        <SideMenuC/>
        <h2 class="text-center">Empresas</h2>
        <TableC 
        :headers="['Razão Social', 'CNPJ', 'CEP', 'Telefone']"
        :body="$store.state.empresas"
        :buttons="buttons"
        @exibirModal="iniciarModal($event)"
        @deletarRegistro="deletarRegistro($event)"
        />
    </div>
</template>

<script>
import TableC from "@/components/TableC.vue";
import button from "@/entities/Button";
import SideMenuC from "@/components/SideMenuC.vue"
import Empresas from "@/services/Empresas";

export default {
    name: "EmpresasView",
    components: {
        TableC,
        SideMenuC
    },
  data(){
    return{
      exibirModal: false,
      buttons: [
        //new button(1, 'Seviços', 'btn-primary', 'exibirModal'),
        new button(2, 'Deletar', 'btn-danger', 'deletarRegistro')
      ],
    }
  },
  methods: {
    deletarRegistro(item){
        if(confirm('Tem certeza que deseja excluir esse registro ?')){
          Empresas.delete(item.id)
          .then(() => {
            this.$store.commit('removerEmpresa', item.id)
            alert('Registro excluido com sucesso')
          })
          .catch(() => {
            alert('Não foi possivel excluir esse registro')
          })
        }
    }
  },
  created(){
    Empresas.listar().then((retorno) =>{
      this.$store.commit('inserirEmpresa', retorno.data)
    })
  }
}
</script>

<style>

</style>