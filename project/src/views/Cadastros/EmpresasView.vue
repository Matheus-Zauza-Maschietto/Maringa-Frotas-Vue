<template>
    <div>
        <SideMenuC/>
        <h2 class="text-center mb-4">Cadastro Empresa</h2>
        <form class="col-lg-10 container m-auto p-5 rounded-2 position-relative" style="background: var(--menu-background);" action="">
            <h3 class="text-center mb-5">Informações de Identificação</h3>

            <div class="mb-3 col-md-6 col-10">
                <label for="nomeEmpresa" class="form-label">Nome da Empresa</label>
                <input type="text" class="form-control" id="nomeEmpresa" placeholder="Maringá Frotas's" v-model="fields.nomeEmpresa">
            </div>
            
            <div class="mb-3 col-md-6 col-10">
                <label for="cnpj" class="form-label">CNPJ</label>
                <input type="number" class="form-control" id="cnpj" placeholder="00.000.000/0000-00" v-model="fields.cnpjEmpresa">
            </div>

            <div class="mb-3 col-md-6 col-10">
                <label for="cep" class="form-label">CEP</label>
                <input type="number" class="form-control" id="cep" placeholder="00.000-000" v-model="fields.cepEmpresa">
            </div>

            <div class="mb-4 col-md-6 col-10">
                <label for="telefone" class="form-label">Telefone</label>
                <input type="tel" class="form-control" id="telefone" placeholder="(00) 90000-0000" v-model="fields.telefoneEmpresa">
            </div>

            <button class="btn btn-success d-block m-auto" @click.prevent="criarEmpresa">Adicionar Empresa</button>
        </form>
    </div>
</template>

<script>
import SideMenuC from "@/components/SideMenuC.vue"
import Empresas from "@/services/Empresas"

export default {
    name: "CadastroEmpresasView",
    components: {
        SideMenuC
    },
    data(){
        return{
            fields: {
                nomeEmpresa: '',
                cnpjEmpresa: '',
                telefoneEmpresa: '',
                cepEmpresa: ''
            }
        }
    },
    methods: {
        criarEmpresa(){
            Empresas.criar(this.fields)            
            .then(() => {
                alert('Empresa Adicionada com sucesso')
                this.$router.push('/registros/empresas')
            })
            .catch(() => {
                alert('Não foi possivel adicionar uma empresa')
            })

        }
    }
}
</script>

<style scoped>
    label{
        font-size: 18px;
    }
    form > div{
        margin: auto;
    }
</style>