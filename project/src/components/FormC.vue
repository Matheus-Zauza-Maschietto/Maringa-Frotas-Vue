<template>
  <form class="col-12">
    <h3 class="text-center">{{ title }}</h3>
    <div v-for="field in fields" :key="field.label" class="m-0" :class="[field.width]">

      <div v-if="field.type == 'select'" class="mb-3">
        <label class="form-label">{{ field.label }}</label>
        <select class="form-select col-12">
          <option v-for="option in field.options" :key="option" :value="option">{{option}}</option>
        </select>
      </div>

      <div class="form-floating mb-3" v-else>
        <input :type="field.type" class="form-control" id="floatingInput" :placeholder="field.placeholder">
        <label for="floatingInput">{{field.label}}</label>
      </div>

    </div>
    <div class="col-12">
      <button v-for="button in buttons" :key="button.id" class="col m-1 btn" :class="[button.classType]" @click="$emit(button.eventEmit, linha)">{{ button.label }}</button>
    </div>
  </form>
</template>

<script>
import button from '@/entities/Button.js';
import Field from '@/entities/Field.js';

export default {
    name: "FormC",
    props: {
      fields: {
        type: Array[Field],
        required: true
      },
      buttons: {
        type: Array[button],
        required: true
      },
      title: {
        type: String
      }
    }
}
</script>

<style>

</style>