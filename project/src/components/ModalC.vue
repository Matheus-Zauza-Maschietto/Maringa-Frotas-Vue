<template>
    <div class="modal fade" :class="{show: exibir}" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5">{{titulo}}</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" @click="$emit('fecharModal')"></button>
                </div>
                <div class="modal-body">
                    <slot>

                    </slot>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn m-1" v-for="button in buttons" :key="button.id" :class="[button.classType]" @click="$emit(button.eventEmit)" >{{button.label}}</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import button from '@/entities/Button.js';
export default {
    name: "ModalC",
    props:{
        titulo: {
            required: true,
            type: String
        },
        exibir: {
            required: true,
            type: Boolean
        },
        buttons: {
            type: Array[button]
        }
    },
    emits: ['fecharModal']
}
</script>

<style scoped>
    .show{
        backdrop-filter: blur(50px) brightness(40%);
        z-index: 1055;
        display: block;
    }
</style>