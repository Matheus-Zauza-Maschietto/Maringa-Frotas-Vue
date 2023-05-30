<template>
    <div>
        <SideMenuC/>
        <h2 class="text-center">Cadastro Manutenção</h2>
        <form class="col-lg-10 container m-auto p-5 rounded-2 position-relative" style="background: var(--menu-background);">
            <h3 class="text-center mb-5">Informações de Identificação</h3>

            <div class="row justify-content-center">
                <div class="mb-3 col-12">
                    <label for="opcaoManutencao" class="form-label">Opções de Manutenção</label>
                    <SelectCVue :options="options" id="opcaoManutencao"/>
                </div>
            </div>

            <div class="row justify-content-center">
                <div class="mb-3 col-md-6 col-12">
                    <label for="empresasManutencao" class="form-label">Empresas de Manutenção</label>
                    <SelectCVue :options="options" id="empresasManutencao"/>
                </div>
                <div class="mb-4 col-md-6 col-12">
                    <label for="dataManutencao" class="form-label">Data da Manutenção</label>
                    <input type="number" class="form-control" id="dataManutencao">
                </div>
            </div>
            
            <div class="row justify-content-center">
                <div class="mb-3 col-md-6 col-12">
                    <label for="placaAutomovel" class="form-label">Placa do Automovel</label>
                    <input type="text" class="form-control" id="placaAutomovel" placeholder="00.000.000/0000-00">
                </div>
                <div class="mb-4 col-md-6 col-12">
                    <label for="valorManutencao" class="form-label">Valor da Manutenção</label>
                    <input type="number" class="form-control" id="valorManutencao" placeholder="(00) 90000-0000">
                </div>
            </div>

            <div class="mb-4 col-12">
                <label for="valorManutencao" class="form-label">Descrição da Manutenção</label>
                <textarea name="" id="" cols="30" rows="10" class="form-control col-12"></textarea>
            </div>

            <button class="btn btn-success d-block m-auto">Adicionar Empresa</button>
        </form>
    </div>
</template>

<script>
import SelectCVue from '../../components/inputs/SelectC.vue'
import SideMenuC from "@/components/SideMenuC.vue"
import option from "@/entities/Option";

export default {
    name: "CadastroManutencoesView",
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
        }
    }
}
</script>

<style>
</style>