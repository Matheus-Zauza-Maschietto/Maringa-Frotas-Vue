<template>
    <div>
        <SideMenuC/>
        <h2 class="text-center">Cadastros</h2>
        <FunctionsMenuC :paths="paths"/>
    </div>
</template>

<script>
import FunctionsMenuC from "@/components/FunctionsMenu.vue";
import SideMenuC from "@/components/SideMenuC.vue"
export default {
    name: "MenuCadastrosView",
    components: {
        SideMenuC,
        FunctionsMenuC
    },
    data(){
        return{
            paths:[
                {
                    name: "frota",
                    label: "Frota",
                    view: "/cadastros/veiculos",
                    icon: "fa-solid fa-car"
                },
                {
                    name: "funcionarios",
                    label: "Funcionarios",
                    view: "/cadastros/funcionarios",
                    icon: "fa-solid fa-people-group"
                },
                {   
                    name: "empresas",
                    label: "Empresas",
                    view: "/cadastros/empresas",
                    icon: "fa-solid fa-building"
                },
                {
                    name: "manutencao",
                    label: "Manutenção",
                    view: "/cadastros/manutencoes",
                    icon: "fa-solid fa-screwdriver-wrench"
                },
            ]
        }
    }
}
</script>

<style>

</style>