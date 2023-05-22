<template>
    <div class="table-responsive"  id="teste">
        <table class="table text-center align-middle table-striped">
            <thead class="sticky-top fw-bold shadow-sm" style="background: var(--primary-green); color: white; height: 60px; vertical-align: middle;">
                <tr>
                    <td v-for="head in headers" :key="head">{{ head }}</td>
                    <td v-if="botoes">Ações</td>
                </tr>
            </thead>
            <tbody>
                <tr v-for="linha in body" :key="linha">
                    <td v-for="item in linha" :key="item">{{ item }}</td>
                    <td class="col-2" v-if="botoes">
                        <button v-for="botao in botoes" :key="botao.id" class="col m-1 btn" :class="[botao.classType]" @click="$emit(botao.eventEmit, linha)">{{ botao.label }}</button>
                    </td>
                </tr>
            </tbody>
            <tfoot style="background: var(--primary-green); color: white; height: 20px;">
                <tr></tr>
            </tfoot>
        </table>
    </div>
</template>

<script>
import botao from '@/entities/botao.js';

export default {
    name: "TableC",
    props: {
        headers: {
            type: Array,
            required: true
        },
        body: {
            type: Array,
            required: true,
            linha: Object
        },
        botoes: {
            type: Array[botao],
        }
    }
}
</script>

<style scoped>
    #teste{
        height: 500px!important;
        overflow-y: auto!important;;
    } 
</style>