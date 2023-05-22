<template>
    <div>
        <SideMenuC/>
        <h2 class="text-center">Motoristas</h2>
        <TableC 
        :headers="['Nome', 'CPF', 'CNH', 'Orgão']"
        :body="[{Nome: 'Matheus Zauza Maschietto', CPF: '000.000.000-00', CNH: '00000000000', Orgao: 'Prefeitura'},
                {Nome: 'Matheus Zauza Maschietto', CPF: '000.000.000-00', CNH: '00000000000', Orgao: 'Prefeitura'},
                {Nome: 'Matheus Zauza Maschietto', CPF: '000.000.000-00', CNH: '00000000000', Orgao: 'Prefeitura'},
                {Nome: 'Matheus Zauza Maschietto', CPF: '000.000.000-00', CNH: '00000000000', Orgao: 'Prefeitura'},
                {Nome: 'Matheus Zauza Maschietto', CPF: '000.000.000-00', CNH: '00000000000', Orgao: 'Prefeitura'},
                {Nome: 'Matheus Zauza Maschietto', CPF: '000.000.000-00', CNH: '00000000000', Orgao: 'Prefeitura'},
                {Nome: 'Matheus Zauza Maschietto', CPF: '000.000.000-00', CNH: '00000000000', Orgao: 'Prefeitura'},
                {Nome: 'Matheus Zauza Maschietto', CPF: '000.000.000-00', CNH: '00000000000', Orgao: 'Prefeitura'},
                {Nome: 'Matheus Zauza Maschietto', CPF: '000.000.000-00', CNH: '00000000000', Orgao: 'Prefeitura'}]"
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
    name: "MotoristasView",
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