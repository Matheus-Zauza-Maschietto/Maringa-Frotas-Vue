<template>
    <div>
        <SideMenuC/>
        <h2 class="text-center">Manutenções</h2>
        <h3 class="text-center">Nome da Empresa</h3>
        <TableC 
        :headers="['Tipo', 'Custo', 'Placa do Veiculo', 'Data']"
        :body="[{Tipo: 'Troca de Oleo', Custo: '100,00 R$', PlacaDoVeiculo: 'ABC-1111', Data: '10/10/2022'},
                {Tipo: 'Troca de Oleo', Custo: '100,00 R$', PlacaDoVeiculo: 'ABC-1111', Data: '10/10/2022'},
                {Tipo: 'Troca de Oleo', Custo: '100,00 R$', PlacaDoVeiculo: 'ABC-1111', Data: '10/10/2022'},
                {Tipo: 'Troca de Oleo', Custo: '100,00 R$', PlacaDoVeiculo: 'ABC-1111', Data: '10/10/2022'},
                {Tipo: 'Troca de Oleo', Custo: '100,00 R$', PlacaDoVeiculo: 'ABC-1111', Data: '10/10/2022'},
                {Tipo: 'Troca de Oleo', Custo: '100,00 R$', PlacaDoVeiculo: 'ABC-1111', Data: '10/10/2022'},
                {Tipo: 'Troca de Oleo', Custo: '100,00 R$', PlacaDoVeiculo: 'ABC-1111', Data: '10/10/2022'},
                {Tipo: 'Troca de Oleo', Custo: '100,00 R$', PlacaDoVeiculo: 'ABC-1111', Data: '10/10/2022'},
                {Tipo: 'Troca de Oleo', Custo: '100,00 R$', PlacaDoVeiculo: 'ABC-1111', Data: '10/10/2022'}]"
        :botoes="botoes"
        @exibirModal="iniciarModal($event)"
        />
    </div>
</template>

<script>
import TableC from "@/components/TableC.vue";
import botao from "@/entities/botao";
import SideMenuC from "@/components/SideMenuC.vue"
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
        new botao(1, 'Viagens', 'btn-primary', 'exibirModal')
      ]
    }
  },
  methods: {
    iniciarModal(body){
      this.exibirModal = true;
      this.body = body
    }
  }
}
</script>

<style>

</style> 