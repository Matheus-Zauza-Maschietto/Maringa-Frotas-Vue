<template>
    <div class="table-responsive"  id="tabela">

        <table class="table table-hover text-center align-middle">

            <thead class="sticky-top fw-bold shadow-sm" style="background: var(--primary-green); color: white; height: 60px; vertical-align: middle;">
                <tr>
                    <td v-for="head in headers" :key="head">{{ head }}</td>
                    <td v-if="buttons">Ações</td>
                </tr>
            </thead>
            
            <tbody>
                <tr v-for="linha in body" :key="linha">

                    <td v-for="(item, index) in linha" :key="item"
                        v-show="index !== 'id'" >{{ item }}</td>

                    <td class="col-2" v-if="buttons">

                        <button v-for="button in buttons" :key="button.id" class="col m-1 btn" :class="[button.classType]"
                        @click="$emit(button.eventEmit, linha)">{{ button.label }}</button>

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
import button from '@/entities/Button.js';

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
        buttons: {
            type: Array[button],
        }
    }
}
</script>

<style scoped>
    
    #tabela{
        height: 576px!important;
        overflow-y: auto!important;
        background-color: whitesmoke;
    }

    tbody tr:hover{
        cursor: pointer;
    }
</style>