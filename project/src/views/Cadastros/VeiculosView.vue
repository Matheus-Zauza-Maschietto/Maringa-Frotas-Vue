<template>
    <div>
        <SideMenuC/>
        <h2 class="text-center mb-4">Cadastro Veiculo</h2>
        <form class="col-lg-10 container m-auto p-5 rounded-2" style="background: var(--menu-background);">
            <h3 class="text-center mb-5">Informações de Identificação</h3>

            <div class="row">
                <div class="mb-4 col-md-6 col-10">
                    <label for="TipoCombustivel" class="form-label">Tipo Combustivel</label>
                    <SelectCVue :options="options" id="TipoCombustivel" />
                </div>
                <div class="mb-3 col-md-6 col-10">
                    <label for="numeroEixos" class="form-label">Numero de Eixos</label>
                    <input type="number" class="form-control" id="numeroEixos">
                </div>
            </div>

            <div class="row">
                <div class="mb-4 col-md-6 col-10">
                    <label for="anoModelo" class="form-label">Ano do Modelo</label>
                    <input type="date" class="form-control" id="anoModelo">
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
            ]
        }
    }
}
</script>

<style>

</style>