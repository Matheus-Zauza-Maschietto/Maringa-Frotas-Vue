<template>
    <div>
        <SideMenuC/>
        <h2 class="text-center">Cadastro Funcionarios</h2>
        <form class="col-lg-10 container m-auto p-5 rounded-2 position-relative" style="background: var(--menu-background);">
            <h3 class="text-center mb-5">Informações de Identificação</h3>

            <div class="row justify-content-center">
                <div class="mb-4 col-md-6 col-10">
                    <label for="nome" class="form-label" >Nome</label>
                    <input required type="text" class="form-control" id="nome" v-model="fields.nome">
                </div>
                <div class="mb-4 col-md-6 col-10">
                    <label for="email" class="form-label" >E-Mail</label>
                    <input required type="email" class="form-control" id="email" v-model="fields.email">
                </div>
            </div>
            
            <div class="row justify-content-center">
                <div class="mb-3 col-md-6 col-10">
                    <label for="cpf" class="form-label" >CPF</label>
                    <input required type="number" class="form-control" id="cpf" placeholder="000.000.000-00" v-model="fields.cpf">
                </div>
                <div class="mb-4 col-md-6 col-10">
                    <label for="telefone" class="form-label" >Telefone</label>
                    <input required type="number" class="form-control" id="telefone" placeholder="(00) 90000-0000" v-model="fields.telefone">
                </div>
            </div>

            <div class="row justify-content-center">
                <div class="mb-3 col-md-6 col-10">
                    <label for="empresasManutencao" class="form-label">Cargo</label>
                    <select name="" class="form-select" v-model="fields.idCargo">
                        <option v-for="option in cargos" :key="option.id" :value="option.id">{{ option.text }}</option>
                    </select>
                </div>

                <div class="mb-3 col-md-6 col-10">
                    <label for="empresasManutencao" class="form-label">Orgão</label>
                    <select name="" class="form-select" v-model="fields.idOrgao">
                        <option v-for="option in orgaos" :key="option.id" :value="option.id">{{ option.text }}</option>
                    </select>
                </div>
            </div>

            <button class="btn btn-success d-block m-auto" @click.prevent="criarFuncionario">Adicionar Funcionário</button>
        </form>
    </div>
</template>

<script>
import SideMenuC from "@/components/SideMenuC.vue"
import Cargos from "@/services/Cargos";
import Funcionarios from '@/services/Funcionarios';
import Orgaos from '@/services/Orgaos';

export default {
    name: "CadastroFuncionarioView",
    components: {
        SideMenuC,
    },
    data(){
        return{
            cargos: [],
            orgaos: [],
            fields: {
                nome: '',
                email: '',
                cpf: '',
                telefone: '',
                idCargo: 0,
                idOrgao: 0
            }
        }
    },
    methods: {
        async criarFuncionario(){
            this.fields.telefone = Number(this.fields.telefone)
            this.fields.idCargo = Number(this.fields.idCargo)
            this.fields.idOrgao = Number(this.fields.idOrgao)


            Funcionarios.criar(this.fields)
            .then(() => {
                alert("Funcionário criado com sucesso")
                this.$router.push('/registros/funcionarios')
            })
            .catch(() => {
                alert("Não foi possivel criar esse funcionário")
            })
        }
    },
    created(){
        Cargos.listar().then((retorno) => {
            this.cargos = retorno.data
        })

        Orgaos.listar().then((retorno) => {
            this.orgaos = retorno.data
        })
    }
}
</script>

<style>

</style>