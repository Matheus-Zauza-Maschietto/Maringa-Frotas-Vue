<template>
    <div>
        <SideMenuC/>
        <h2 class="text-center">Cadastro Funcionarios</h2>
        <form class="col-lg-10 container m-auto p-5 rounded-2" style="background: var(--menu-background);">
            <h3 class="text-center mb-5">Informações de Identificação</h3>

            <div class="row">
                <div class="mb-4 col-md-6 col-10">
                    <label for="nome" class="form-label">Nome</label>
                    <input required type="text" class="form-control" id="nome">
                </div>
                <div class="mb-4 col-md-6 col-10">
                    <label for="email" class="form-label">E-Mail</label>
                    <input required type="email" class="form-control" id="email">
                </div>
            </div>
            
            <div class="row">
                <div class="mb-3 col-md-6 col-10">
                    <label for="cpf" class="form-label">CPF</label>
                    <input required type="text" class="form-control" id="cpf" placeholder="000.000.000-00">
                </div>
                <div class="mb-4 col-md-6 col-10">
                    <label for="telefone" class="form-label">Telefone</label>
                    <input required type="text" class="form-control" id="telefone" placeholder="(00) 90000-0000">
                </div>
            </div>

            <div class="row">
                <div class="mb-3 col-md-6 col-10">
                    <label for="empresasManutencao" class="form-label">Cargo</label>
                    <SelectCVue required :options="options" id="empresasManutencao"/>
                </div>

                <div class="mb-4 col-md-6 col-10">
                    <label for="telefone" class="form-label">Senha</label>
                    <input required type="password" class="form-control" id="telefone" placeholder="******">
                </div>
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
    name: "CadastroFuncionarioView",
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