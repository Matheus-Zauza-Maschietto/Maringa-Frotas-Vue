<template>
  <select name="" class="form-select" v-model="escolha">
    <option v-for="option in options" :key="option.id" :value="option.value">{{ option.text }}</option>
  </select>
</template>

<script>
import option from '@/entities/Option.js' 

export default {
    name: "SelectC",
    data(){
      return{
        escolha: ''
      }
    },
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
    watch: {
      escolha(){
        console.log(this.escolha)
        this.$emit('valor', this.escolha)
      }
    },
    mounted(){
      if(this.required) document.querySelector('select').setAttribute('required', '');
    }
}
</script>

<style>

</style>