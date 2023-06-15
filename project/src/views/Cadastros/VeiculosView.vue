<template>
    <div>
        <SideMenuC/>
        <h2 class="text-center mb-4">Cadastro Veiculo</h2>
        <form class="col-lg-10 container m-auto p-5 rounded-2 position-relative" style="background: var(--menu-background);">
            <div v-if="etapa == 0">
                <h3 class="text-center mb-5">Informações Específicas</h3>
                <div class="row justify-content-center">
                    <div class="mb-4 col-md-6 col-10">
                        <label for="tipoVeiculo" class="form-label">Tipo de Veiculo</label>
                        <select name="" class="form-select" v-model="fields.veiculo" id="tipoVeiculo">
                            <option v-for="option in tiposVeiculo" :key="option.id" :value="option.id">{{ option.text }}</option>
                        </select>
                    </div>
                    
                    <div class="mb-4 col-md-6 col-10">
                        <label for="marcaVeiculo" class="form-label">Marca do Veiculo</label>
                        <select name="" class="form-select" id="marcaVeiculo" v-model="fields.marca" @change="listarModelos(fields.marca)">
                            <option v-for="option in marcasVeiculo" :key="option.idMarca" :value="option.idMarca">{{ option.tipoMarca }}</option>
                        </select>
                    </div>
                </div>
                <div class="row justify-content-center">
                    <div class="mb-3 col-md-6 col-10">
                        <label for="modelo" class="form-label">Modelo</label>
                        <select name="" class="form-select" v-model="fields.modelo" id="modelo">
                            <option value="none" v-if="fields.marca === ''" selected>Selecione uma Marca</option>
                            <option v-else v-for="option in modelosVeiculo" :key="option.idCategoria" :value="option.idMarca.idMarca">{{ option.tipoCategoria }}</option>
                        </select>
                    </div>
                    <div class="mb-4 col-md-6 col-10">
                        <label for="chassi" class="form-label">Chassi</label>
                        <input type="text" class="form-control" id="chassi" v-model="fields.chassi">
                    </div>
                </div>
                
                <div class="row justify-content-center">
                    <div class="mb-4 col-md-6 col-10">
                        <label for="placa" class="form-label">Placa</label>
                        <input type="text" class="form-control" id="placa" v-model="fields.placa">
                    </div>

                    <div class="mb-3 col-md-6 col-10">
                        <label for="renavam" class="form-label">Renavam</label>
                        <input type="text" class="form-control" id="renavam" v-model="fields.renavam">
                    </div>
                </div>
                <button class="btn btn-success d-block m-auto" @click="etapa=1">Próximo</button>
            </div>

            <div v-else-if="etapa == 1">
                <h3 class="text-center mb-5">Informações de Identificação</h3>

                <button class="btn btn-secondary position-absolute top-0 start-0 m-2" @click="etapa=0">Voltar</button>

                <div class="row justify-content-center">
                    <div class="mb-4 col-md-6 col-10">
                        <label for="tipoCombustivel" class="form-label">Tipo Combustivel</label>
                        <select name="" class="form-select" v-model="fields.combustivel" id="modelo">
                            <option v-for="option in tiposCombustivel" :key="option.id" :value="option.id">{{ option.text }}</option>
                        </select>
                    </div>
                    <div class="mb-3 col-md-6 col-10">
                        <label for="numeroEixos" class="form-label">Numero de Eixos</label>
                        <input type="number" class="form-control" id="numeroEixos" v-model="fields.numeroEixos">
                    </div>
                </div>
                <div class="row justify-content-center">
                    <div class="mb-4 col-md-6 col-10">
                        <label for="anoModelo" class="form-label">Ano do Modelo</label>
                        <input type="number" class="form-control" id="anoModelo" min="0" max="3000" maxlength="4" v-model="fields.anoModelo">
                    </div>
                    <div class="mb-3 col-md-6 col-10">
                        <label for="dataAquisicao" class="form-label">Data de Aquisição</label>
                        <input type="date" class="form-control" id="dataAquisicao" v-model="fields.dataAquisicao">
                    </div>
                </div>
                
                <div class="row justify-content-center">
                    <div class="mb-4 col-md-6 col-10">
                        <label for="quilometroRodado" class="form-label">Quilometros Rodados</label>
                        <input type="number" class="form-control" id="quilometroRodado" v-model="fields.quilometrosRodados">
                    </div>
                    <div class="mb-3 col-md-6 col-10">
                        <label for="capacidadeTanque" class="form-label">Capacidade do Tanque</label>
                        <input type="number" class="form-control" id="capacidadeTanque" v-model="fields.capacidadeTanque">
                    </div>
                </div>
                <div class="row justify-content-center">
                    <div class="mb-4 col-12">
                        <label for="orgaoPublico" class="form-label">Orgão Publico</label>
                        <select name="" class="form-select" v-model="fields.orgao" id="orgaoPublico">
                            <option v-for="option in orgaosPublico" :key="option.id" :value="option.id">{{ option.text }}</option>
                        </select>
                    </div>
                </div>
                <button class="btn btn-success d-block m-auto" @click.prevent="criarVeiculo()">Adicionar Veiculo</button>
            </div>
        </form>
    </div>
</template>

<script>
import SideMenuC from "@/components/SideMenuC.vue"
import Marcas from '@/services/Marcas.js'
import Modelos from '@/services/Modelos.js'
import Veiculos from "@/services/Veiculos.js"
import Orgaos from "@/services/Orgaos.js"

export default {
    name: "CadastroVeiculosView",
    components: {
        SideMenuC,
    },
    data(){
        return{
            tiposVeiculo: [
                {
                    text: 'Carro',
                    id: 0
                },
                {
                    text: 'Moto',
                    id: 1
                },
                {
                    text: 'Caminhão',
                    id: 2
                },
                {
                    text: 'Ônibus',
                    id: 3
                },
                {
                    text: 'Furgão',
                    id: 4
                },
            ],
            orgaosPublico: [],
            modelosVeiculo: [],
            marcasVeiculo: [],
            tiposModelo: [],
            tiposCombustivel: [
                {
                    text: 'Gasolina',
                    id: 0
                },
                {
                    text: 'Alcool',
                    id: 1
                },
                {
                    text: 'Flex',
                    id: 2
                },
                {
                    text: 'Diesel',
                    id: 3
                },
                {
                    text: 'Elétrico',
                    id: 4
                },
                {
                    text: 'Gás Natural',
                    id: 5
                }
            ],
            etapa: 0,
            fields: {
                veiculo: '',
                marca: '',
                chassi: '',
                modelo: '',
                placa: '',
                renavam: '',
                combustivel: '',
                numeroEixos: '',
                anoModelo: '',
                dataAquisicao: '',
                quilometrosRodados: '',
                capacidadeTanque: '',
                orgao: ''
            }
        }
    },
    methods: {
        listarModelos(marcaId){
            Modelos.listarComMarca(marcaId)
            .then((retorno) => {
                console.log(retorno.data)
                this.modelosVeiculo = retorno.data
            })
        },

        criarVeiculo(){
            Veiculos.criar(this.fields).then(() => {
                alert('Veiculo Adicionado com sucesso')
                this.$router.push('/registros/veiculos')
            })
            .catch(() => {
                alert('Não foi possivel adicionar um veiculo')
            })
        }
    },
    created(){
        Marcas.listar(this.fields)
        .then((retorno) => {
            this.marcasVeiculo = retorno.data
        })

        Orgaos.listar().then((retorno) => {
            this.orgaosPublico = retorno.data
        })
    }
}
</script>

<style>

</style>