<template>
  <select name="" class="form-select">
    <option value="null" selected>Selecione uma opção</option>
    <option v-for="option in options" :key="option.id" :value="option.value">{{ option.text }}</option>
  </select>
</template>

<script>
import option from '@/entities/Option.js' 

export default {
    name: "SelectC",
    props: {
        options: {
            required: true,
            type: Array[option]
        },
        required: {
          type: Boolean,
          default: false,
        }
    },
    mounted(){
      if(this.required) document.querySelector('select').setAttribute('required', '');
    }
}
</script>

<style>

</style>