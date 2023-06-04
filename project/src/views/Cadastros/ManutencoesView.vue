<template>
    <div>
        <SideMenuC/>
        <h2 class="text-center">Cadastro Manutenção</h2>
        <form class="col-lg-10 container m-auto p-5 rounded-2 position-relative" style="background: var(--menu-background);">
            <h3 class="text-center mb-5">Informações de Identificação</h3>

            <div class="row justify-content-center">
                <div class="mb-3 col-12">
                    <label for="opcaoManutencao" class="form-label">Opções de Manutenção</label>
                    <select name="" class="form-select" v-model="fields.tipoManutencao" id="opcaoManutencao">
                        <option v-for="option in tiposManutencao" :key="option.idTipoRevisao" :value="option.idTipoRevisao">{{ option.descricaoRevisao }}</option>
                    </select>
                </div>
            </div>

            <div class="row justify-content-center">
                <div class="mb-3 col-md-6 col-12">
                    <label for="empresasManutencao" class="form-label">Empresas de Manutenção</label>

                    <select name="" class="form-select" v-model="fields.idEmpresa" id="empresasManutencao">
                        <option v-for="empresa in $store.state.empresas" :key="empresa.id" :value="empresa.id">{{ empresa.nome }}</option>
                    </select>
                </div>

                <div class="mb-4 col-md-6 col-12">
                    <label for="dataManutencao" class="form-label">Data da Manutenção</label>
                    <input type="date" class="form-control" id="dataManutencao" v-model="fields.dataRevisao">
                </div>
            </div>
            
            <div class="row justify-content-center">
                <div class="mb-3 col-md-6 col-12">
                    <label for="placaAutomovel" class="form-label">Placa do Automovel</label>
                    <input type="text" class="form-control" id="placaAutomovel" placeholder="ABC1234" v-model="fields.placa">
                </div>

                <div class="mb-4 col-md-6 col-12">
                    <label for="valorManutencao" class="form-label">Valor da Manutenção</label>
                    <input type="number" class="form-control" id="valorManutencao" placeholder="R$ 0" v-model="fields.valor">
                </div>
            </div>

            <div class="mb-4 col-12">
                <label for="valorManutencao" class="form-label">Descrição da Manutenção</label>
                <textarea name="" id="" cols="30" rows="10" class="form-control col-12" v-model="fields.descricao"></textarea>
            </div>

            <button class="btn btn-success d-block m-auto" @click.prevent="criarManutencao()">Adicionar Manutenção</button>
        </form>
    </div>
</template>

<script>
import SideMenuC from "@/components/SideMenuC.vue"
import Empresas from "@/services/Empresas";
import Manutencoes from "@/services/Manutencoes";

export default {
    name: "CadastroManutencoesView",
    components: {
        SideMenuC
    },
    data(){
        return{
            tiposManutencao: [],
            fields: {
                tipoManutencao: '',
                idEmpresa: '',
                dataRevisao: '',
                placa: '',
                valor: '',
                descricao: ''
            }
        }
    },
    methods: {
        criarManutencao(){
            Manutencoes.criar(this.fields)
            .then(() => {
                alert("Manutencão criada com sucesso")
                this.$router.push('/registros/manutencoes')
            })
            .catch(() => {
                alert("Não foi possivel criar essa manutenção")
            })
        }
    },
    created(){
        Empresas.listar().then((retorno) => {
            this.$store.commit('inserirEmpresa', retorno.data)
        })

        Manutencoes.listarTipos().then((retorno) => {
            this.tiposManutencao = retorno.data
        })
    }
}
</script>

<style>
</style>