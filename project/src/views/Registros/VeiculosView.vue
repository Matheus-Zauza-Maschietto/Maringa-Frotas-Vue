<template>
    <div>
        <SideMenuC/>
        <h2 class="text-center">Veiculos</h2>
        <TableC 
        :headers="['Placa', 'Tipo de Veiculo', 'Modelo', 'Quilometragem']"
        :body="[{Placa: 'xxx-0000', TipoDeVeiculo: 'Carro', Modelo: 'Civic', Quilometragem: '192839 Km'},
                {Placa: 'xxx-1111', TipoDeVeiculo: 'Carro', Modelo: 'Civic', Quilometragem: '192839 Km'},
                {Placa: 'xxx-2222', TipoDeVeiculo: 'Carro', Modelo: 'Civic', Quilometragem: '192839 Km'},
                {Placa: 'xxx-3333', TipoDeVeiculo: 'Carro', Modelo: 'Civic', Quilometragem: '192839 Km'},
                {Placa: 'xxx-4444', TipoDeVeiculo: 'Carro', Modelo: 'Civic', Quilometragem: '192839 Km'},
                {Placa: 'xxx-5555', TipoDeVeiculo: 'Carro', Modelo: 'Civic', Quilometragem: '192839 Km'},
                {Placa: 'xxx-6666', TipoDeVeiculo: 'Carro', Modelo: 'Civic', Quilometragem: '192839 Km'},
                {Placa: 'xxx-7777', TipoDeVeiculo: 'Carro', Modelo: 'Civic', Quilometragem: '192839 Km'},
                {Placa: 'xxx-8888', TipoDeVeiculo: 'Carro', Modelo: 'Civic', Quilometragem: '192839 Km'}]"
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
    name: "VeiculosView",
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