<template>
    <div>
        <SideMenuC/>
        <h2 class="text-center">Manutenções</h2>
        <TableC 
        :headers="['Tipo', 'Custo', 'Placa do Veiculo', 'Data', 'Empresa']"
        :body="manutencoes"
        :botoes="botoes"
        @exibirModal="iniciarModal($event)"
        />
    </div>
</template>

<script>
import TableC from "@/components/TableC.vue";
import botao from "@/entities/botao";
import SideMenuC from "@/components/SideMenuC.vue"
import Manutencoes from "@/services/Manutencoes";

export default {
    name: "ManutencoesView",
    components: {
        TableC,
        SideMenuC
    },
  data(){
    return{
      exibirModal: false,
      body: '',
      botoes: [
        new botao(1, 'Detalhes', 'btn-success', 'exibirModal')
      ],
      manutencoes: []
    }
  },
  methods: {
    iniciarModal(body){
      this.exibirModal = true;
      this.body = body
    }
  },
  created(){
    Manutencoes.listar().then((retorno) => {
      this.manutencoes = retorno.data
    })
  }
}
</script>

<style>

</style> 