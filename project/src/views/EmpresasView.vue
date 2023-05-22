<template>
    <div>
        <SideMenuC/>
        <h2 class="text-center">Empresas</h2>
        <TableC class=""
        :headers="['Razão Social', 'CNPJ', 'Telefone']"
        :body="[{Placa: 'JetBrains', CNPJ: '00.000.000/0000-00', Telefone: '(00) 90000-0000'},
                {Placa: 'JetBrains', CNPJ: '00.000.000/0000-00', Telefone: '(00) 90000-0000'},
                {Placa: 'JetBrains', CNPJ: '00.000.000/0000-00', Telefone: '(00) 90000-0000'},
                {Placa: 'JetBrains', CNPJ: '00.000.000/0000-00', Telefone: '(00) 90000-0000'},
                {Placa: 'JetBrains', CNPJ: '00.000.000/0000-00', Telefone: '(00) 90000-0000'},
                {Placa: 'JetBrains', CNPJ: '00.000.000/0000-00', Telefone: '(00) 90000-0000'},
                {Placa: 'JetBrains', CNPJ: '00.000.000/0000-00', Telefone: '(00) 90000-0000'},
                {Placa: 'JetBrains', CNPJ: '00.000.000/0000-00', Telefone: '(00) 90000-0000'},
                {Placa: 'JetBrains', CNPJ: '00.000.000/0000-00', Telefone: '(00) 90000-0000'},
                {Placa: 'JetBrains', CNPJ: '00.000.000/0000-00', Telefone: '(00) 90000-0000'},
                {Placa: 'JetBrains', CNPJ: '00.000.000/0000-00', Telefone: '(00) 90000-0000'},
                {Placa: 'JetBrains', CNPJ: '00.000.000/0000-00', Telefone: '(00) 90000-0000'},
                {Placa: 'JetBrains', CNPJ: '00.000.000/0000-00', Telefone: '(00) 90000-0000'},
                {Placa: 'JetBrains', CNPJ: '00.000.000/0000-00', Telefone: '(00) 90000-0000'},
                {Placa: 'JetBrains', CNPJ: '00.000.000/0000-00', Telefone: '(00) 90000-0000'},
                {Placa: 'JetBrains', CNPJ: '00.000.000/0000-00', Telefone: '(00) 90000-0000'},
                {Placa: 'JetBrains', CNPJ: '00.000.000/0000-00', Telefone: '(00) 90000-0000'},
                {Placa: 'JetBrains', CNPJ: '00.000.000/0000-00', Telefone: '(00) 90000-0000'},
                {Placa: 'JetBrains', CNPJ: '00.000.000/0000-00', Telefone: '(00) 90000-0000'},
                {Placa: 'JetBrains', CNPJ: '00.000.000/0000-00', Telefone: '(00) 90000-0000'},
                {Placa: 'JetBrains', CNPJ: '00.000.000/0000-00', Telefone: '(00) 90000-0000'},
                {Placa: 'JetBrains', CNPJ: '00.000.000/0000-00', Telefone: '(00) 90000-0000'},
                {Placa: 'JetBrains', CNPJ: '00.000.000/0000-00', Telefone: '(00) 90000-0000'},
                {Placa: 'JetBrains', CNPJ: '00.000.000/0000-00', Telefone: '(00) 90000-0000'},
                {Placa: 'JetBrains', CNPJ: '00.000.000/0000-00', Telefone: '(00) 90000-0000'},
                {Placa: 'JetBrains', CNPJ: '00.000.000/0000-00', Telefone: '(00) 90000-0000'},
                {Placa: 'JetBrains', CNPJ: '00.000.000/0000-00', Telefone: '(00) 90000-0000'},
                {Placa: 'JetBrains', CNPJ: '00.000.000/0000-00', Telefone: '(00) 90000-0000'},
                {Placa: 'JetBrains', CNPJ: '00.000.000/0000-00', Telefone: '(00) 90000-0000'},
                {Placa: 'JetBrains', CNPJ: '00.000.000/0000-00', Telefone: '(00) 90000-0000'},
                {Placa: 'JetBrains', CNPJ: '00.000.000/0000-00', Telefone: '(00) 90000-0000'},
                {Placa: 'JetBrains', CNPJ: '00.000.000/0000-00', Telefone: '(00) 90000-0000'}]"
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
    name: "EmpresasView",
    components: {
        TableC,
        SideMenuC
    },
  data(){
    return{
      exibirModal: false,
      body: '',
      botoes: [
        new botao(1, 'Seviços', 'btn-primary', 'exibirModal')
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