<template>
  <div class="home">
    <SideMenuC/>
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

    <button class="btn btn-outline-primary" @click="exibirModal = !exibirModal">botão que abre modal</button>
    <ModalC titulo="titulo do modal" :exibir="exibirModal" @fecharModal="exibirModal=false" :botoes="botoes">
      <FormC :botoes="botoes" :fields="fields"/>
    </ModalC>
    
    <ul class="dropdown-menu dropdown-menu-left" aria-labelledby="navbarDropdownMenuLink">
      <li>
        <div class="input-group mt-2 mx-2">
          <div class="form-outline w-auto">
            <input type="search" id="form1" class="form-control-dropdown" />
            <label class="form-label" for="form1">Search</label>
          </div>
        </div>
      </li>
      <li><hr class="dropdown-divider" /></li>
      <li><a class="dropdown-item" href="#">Action</a></li>
      <li><a class="dropdown-item" href="#">Another action</a></li>
      <li><a class="dropdown-item" href="#">Something else here</a></li>
    </ul>

  </div>
</template>

<script>
import SideMenuC from "@/components/SideMenuC.vue";
import TableC from "@/components/TableC.vue";
import botao from "@/entities/botao";
import ModalC from "@/components/ModalC.vue";
import FormC from "@/components/FormC.vue";
import field from "@/entities/Field";

export default {
  name: 'HomeView',
  components: {
    SideMenuC,
    TableC,
    ModalC,
    FormC
  },
  data(){
    return{
      exibirModal: false,
      body: '',
      botoes: [
        new botao(1, 'Viagens', 'btn-primary', 'exibirModal'),
        new botao(1, 'Cancelar', 'btn-danger', 'exibirModal')
      ],
      fields: [
        new field('teste1', 'text', 'col-6'),
        new field('teste2', 'text', 'col-6'),
        new field('teste3', 'date', 'col-6'),
        new field('teste4', 'text', 'col-12'),
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
