<template>
    <div>
        <SideMenuC/>
        <h2 class="text-center mb-4">Cadastro Veiculo</h2>
        <form class="col-lg-10 container m-auto p-5 rounded-2 position-relative" style="background: var(--menu-background);">
            <div v-if="etapa == 0">
                <h3 class="text-center mb-5">Informações Específicas</h3>
                <div class="row">
                    <div class="mb-4 col-md-6 col-10">
                        <label for="TipoVeiculo" class="form-label">Tipo de Veiculo</label>
                        <SelectCVue :options="options" id="TipoVeiculo" />
                    </div>
                    <div class="mb-4 col-md-6 col-10">
                        <label for="MarcaVeiculo" class="form-label">Marca do Veiculo</label>
                        <SelectCVue :options="options" id="MarcaVeiculo" />
                    </div>
                </div>
                <div class="row">
                    <div class="mb-4 col-md-6 col-10">
                        <label for="Chassi" class="form-label">Chassi</label>
                        <input type="text" class="form-control" id="Chassi" min="0" max="3000" maxlength="4">
                    </div>
                    <div class="mb-3 col-md-6 col-10">
                        <label for="modelo" class="form-label">Modelo</label>
                        <SelectCVue :options="options" id="modelo" />
                    </div>
                </div>
                
                <div class="row">
                    <div class="mb-4 col-md-6 col-10">
                        <label for="placa" class="form-label">Placa</label>
                        <input type="text" class="form-control" id="placa">
                    </div>
                    <div class="mb-3 col-md-6 col-10">
                        <label for="renavam" class="form-label">Renavam</label>
                        <input type="text" class="form-control" id="renavam">
                    </div>
                </div>
                <button class="btn btn-success d-block m-auto" @click="etapa=1">Próximo</button>
            </div>

            <div v-else-if="etapa == 1">
                <h3 class="text-center mb-5">Informações de Identificação</h3>

                <button class="btn btn-secondary position-absolute top-0 start-0 m-5" @click="etapa=0">Voltar</button>

                <div class="row">
                    <div class="mb-4 col-md-6 col-10">
                        <label for="tipoCombustivel" class="form-label">Tipo Combustivel</label>
                        <SelectCVue :options="options" id="tipoCombustivel" />
                    </div>
                    <div class="mb-3 col-md-6 col-10">
                        <label for="numeroEixos" class="form-label">Numero de Eixos</label>
                        <input type="number" class="form-control" id="numeroEixos">
                    </div>
                </div>
                <div class="row">
                    <div class="mb-4 col-md-6 col-10">
                        <label for="anoModelo" class="form-label">Ano do Modelo</label>
                        <input type="number" class="form-control" id="anoModelo" min="0" max="3000" maxlength="4">
                    </div>
                    <div class="mb-3 col-md-6 col-10">
                        <label for="dataAquisicao" class="form-label">Data de Aquisição</label>
                        <input type="date" class="form-control" id="dataAquisicao">
                    </div>
                </div>
                
                <div class="row">
                    <div class="mb-4 col-md-6 col-10">
                        <label for="quilometroRodado" class="form-label">Quilometros Rodados</label>
                        <input type="number" class="form-control" id="quilometroRodado">
                    </div>
                    <div class="mb-3 col-md-6 col-10">
                        <label for="capacidadeTanque" class="form-label">Capacidade do Tanque</label>
                        <input type="number" class="form-control" id="capacidadeTanque">
                    </div>
                </div>
                <button class="btn btn-success d-block m-auto">Adicionar Veiculo</button>
            </div>
        </form>
    </div>
</template>

<script>
import SideMenuC from "@/components/SideMenuC.vue"
import SelectCVue from '../../components/inputs/SelectC.vue'
import option from "@/entities/Option";

export default {
    name: "CadastroVeiculosView",
    components: {
        SideMenuC,
        SelectCVue
    },
    data(){
        return{
            options: [
                new option(1, 'test1', 'Teste 1'),
                new option(2, 'test2', 'Teste 2'),
                new option(3, 'test3', 'Teste 3')
            ],
            etapa: 0
        }
    }
}
</script>

<style>

</style>