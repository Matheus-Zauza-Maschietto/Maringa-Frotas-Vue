<template>
  <table class="table text-center align-middle table-striped">
    <thead style="background: var(--primary-green); color: white;">
        <tr>
            <td v-for="head in headers" :key="head">{{ head }}</td>
            <td v-if="botoes">Ações</td>
        </tr>
    </thead>
    <tbody class="table-group-divider">
        <tr v-for="linha in body" :key="linha">
            <td v-for="item in linha" :key="item">{{ item }}</td>
            <td class="col-3" v-if="botoes">
                <button v-for="botao in botoes" :key="botao.id" class="col m-1 btn" :class="[botao.classType]" @click="$emit(botao.eventEmit)">{{ botao.label }}</button>
            </td>
        </tr>
    </tbody>
  </table>
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
    table{
        overflow: scroll;
    } 
</style>