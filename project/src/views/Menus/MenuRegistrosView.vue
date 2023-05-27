<template>
    <div>
        <SideMenuC/>
        <h2 class="text-center">Registros</h2>
        <FunctionsMenuC :paths="paths"/>
    </div>
</template>

<script>
import FunctionsMenuC from "@/components/FunctionsMenu.vue";
import SideMenuC from "@/components/SideMenuC.vue"
export default {
    name: "MenuRegistrosView",
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
                    view: "/registros/veiculos",
                    icon: "fa-solid fa-car"
                },
                {
                    name: "funcionarios",
                    label: "Funcionarios",
                    view: "/registros/motoristas",
                    icon: "fa-solid fa-people-group"
                },
                {
                    name: "empresas",
                    label: "Empresas",
                    view: "/registros/empresas",
                    icon: "fa-solid fa-building"
                },
                {
                    name: "manutencao",
                    label: "Manutenção",
                    view: "/registros/manutencoes",
                    icon: "fa-solid fa-screwdriver-wrench"
                },
            ]
        }
    }
}
</script>

<style>

</style>