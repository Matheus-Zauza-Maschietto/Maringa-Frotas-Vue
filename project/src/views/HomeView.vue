<template>
  <div id="home">
    <SideMenuC/>
      <h1 class="text-center fw-bolder p-5 col-md-6 m-auto rounded-4" style="background-color: #1f1717f0;">Maringa Frotas's</h1>
    <div id="background-img">
    </div>
  </div>
</template>

<script>
import SideMenuC from "@/components/SideMenuC.vue";
import button from "@/entities/Button";
import field from "@/entities/Field";

export default {
  name: 'HomeView',
  components: {
    SideMenuC,
  },
  data(){
    return{
      exibirModal: false,
      body: '',
      buttons: [
        new button(1, 'Viagens', 'btn-primary', 'exibirModal'),
        new button(1, 'Cancelar', 'btn-danger', 'exibirModal')
      ],
      fields: [
        new field('teste1', 'text', 'col-6'),
        new field('teste2', 'text', 'col-6'),
        new field('teste3', 'date', 'col-6'),
        new field('teste4', 'text', 'col-12'),
      ]
    }
  },
  methods: {
    iniciarModal(body){
      this.exibirModal = true;
      this.body = body
    }
  }
}
</script>

<style scoped>
  #background-img{
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    background-image: url(../assets/frota_default.jpg);
    background-position: center bottom;
    filter: blur(2px) brightness(0.9);
    background-size: cover;
    background-repeat: no-repeat;
    height: 100vh;
    width: 100vw;
  }

  h1{
        font-family: var(--primary-font-serif), 'Times New Roman', Times, serif;
        color: var(--primary-green);
    }
</style>
