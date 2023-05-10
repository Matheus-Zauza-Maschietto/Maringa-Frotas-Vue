<template>
  <div class="col-10 d-flex justify-content-around align-content-around">
    <div class="col-md-4 m-5" v-for="path in paths" :key="path.name">
        <router-link :to="path.url" class="text-center">
            <font-awesome-icon :icon="path.icon"/>
            <span>{{ path.label }}</span>
        </router-link>
    </div>
  </div>
</template>

<script>
export default {
    name: "FunctionsMenu",
    props: {
        paths: {
            type: Array,
            required: true
        }
    }
}
</script>

<style>

</style>