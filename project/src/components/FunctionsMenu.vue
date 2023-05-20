<template>
  <div class="col-md-8 m-auto rounded-2 d-flex justify-content-center align-items-center flex-wrap" style="background: var(--menu-background); height: 70vh;">
    <div class="col-6" v-for="path in paths" :key="path.name">
        <router-link :to="path.view" class="text-center d-flex flex-column">
            <font-awesome-icon :icon="path.icon" style="font-size: 80px;"/>
            <span style="font-size: 26px;">{{ path.label }}</span>
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
            required: true,
            name: String,
            label: String,
            view: String,
            icon: String
        }
    }
}
</script>

<style scoped>
    a{
        font-size: 20px;
        text-decoration: none;
    }
</style>