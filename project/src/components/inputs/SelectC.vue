<template>
  <select name="" class="form-select">
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
        }
    }
}
</script>

<style>

</style>