<template>
    <div>
        <SideMenuC/>
        <h2 class="text-center">Veiculos</h2>
        <TableC 
        :headers="['Placa', 'Tipo de Veiculo', 'Modelo', 'Marca', 'Tipo de Combustivel', 'Quilometragem', 'Orgão', 'Data de Aquisição', 'Status', 'Em Leilão']"
        :body="$store.state.veiculos"
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
import Veiculos from "@/services/Veiculos";

export default {
    name: "VeiculosView",
    components: {
        TableC,
        SideMenuC
    },
  data(){
    return{
      exibirModal: false,
      body: '',
      buttons: [
        new button(1, 'Viagens', 'btn-primary', 'exibirModal'),
        new button(1, 'Deletar', 'btn-danger', 'deletarRegistro')
      ]
    }
  },
  methods: {
    deletarRegistro(item){
        if(confirm('Tem certeza que deseja excluir esse registro ?')){
          Veiculos.delete(item.id)
          .then(() => {
            this.$store.commit('removerVeiculo', item.id)
            alert('Registro excluido com sucesso')
          })
          .catch(() => {
            alert('Não foi possivel excluir esse registro')
          })
        }
    }
  },
  created(){
    Veiculos.listar().then((retorno) =>{
      this.$store.commit("inserirVeiculo", retorno.data)
    })
  }
}
</script>

<style scoped>
</style>