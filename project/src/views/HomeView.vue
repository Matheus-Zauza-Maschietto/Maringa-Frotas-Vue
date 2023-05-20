<template>
  <div class="home">
    <SideMenuC/>
    <TableC 
      :headers="['Placa', 'Tipo de Veiculo', 'Modelo', 'Quilometragem']"
      :body="[{Placa: 'xxx-0000', TipoDeVeiculo: 'Carro', Modelo: 'Civic', Quilometragem: '192839 Km'},
              {Placa: 'xxx-0000', TipoDeVeiculo: 'Carro', Modelo: 'Civic', Quilometragem: '192839 Km'},
              {Placa: 'xxx-0000', TipoDeVeiculo: 'Carro', Modelo: 'Civic', Quilometragem: '192839 Km'},
              {Placa: 'xxx-0000', TipoDeVeiculo: 'Carro', Modelo: 'Civic', Quilometragem: '192839 Km'},
              {Placa: 'xxx-0000', TipoDeVeiculo: 'Carro', Modelo: 'Civic', Quilometragem: '192839 Km'},
              {Placa: 'xxx-0000', TipoDeVeiculo: 'Carro', Modelo: 'Civic', Quilometragem: '192839 Km'},
              {Placa: 'xxx-0000', TipoDeVeiculo: 'Carro', Modelo: 'Civic', Quilometragem: '192839 Km'},
              {Placa: 'xxx-0000', TipoDeVeiculo: 'Carro', Modelo: 'Civic', Quilometragem: '192839 Km'},
              {Placa: 'xxx-0000', TipoDeVeiculo: 'Carro', Modelo: 'Civic', Quilometragem: '192839 Km'}]"
      :botoes="botoes"
      @exibirModal="exibirModal = !exibirModal"
    />

    <button class="btn btn-outline-primary" @click="exibirModal = !exibirModal">botão que abre modal</button>
    <ModalC titulo="titulo do modal" :exibir="exibirModal" @fecharModal="exibirModal=false" :botoes="botoes">
      <p>Esse modal serve para exibir algo</p>
    </ModalC>

  </div>
</template>

<script>
import SideMenuC from "@/components/SideMenuC.vue";
import TableC from "@/components/TableC.vue";
import botao from "@/entities/botao";
import ModalC from "@/components/ModalC.vue";

export default {
  name: 'HomeView',
  components: {
    SideMenuC,
    TableC,
    ModalC
  },
  data(){
    return{
      exibirModal: false,
      botoes: [
        new botao(1, 'Viagens', 'btn-primary', 'exibirModal')
      ]
    }
  }
}
</script>

<style>

</style>
