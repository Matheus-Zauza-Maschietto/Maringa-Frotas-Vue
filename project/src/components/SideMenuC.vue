<template>
  <div id="menu">
    <font-awesome-icon icon="fa-solid fa-bars" size="xl" class="m-2 p-1 rounded-1" style="background: white;" @click="abrirMenu"/>
    <div :class="['offcanvas', 'offcanvas-start', {'show': $store.state.menu}]"  tabindex="-1" id="side-bar">
      <div class="offcanvas-header">
        
        <h5 class="offcanvas-title">
          <router-link :to="{name: 'home'}" style="text-decoration: none; color: white;" @click="fecharMenu">Maringa Frotas’s</router-link>
        </h5>
        <font-awesome-icon icon="fa-solid fa-bars" size="xl" @click="fecharMenu" style="color: white;"/>
      </div>
      <div class="offcanvas-body">
        <div class="text-center p-4">
          <a href="#" class="d-flex align-items-center justify-content-center p-3 link-body-emphasis text-decoration-none">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5PvoFdSNKZ1QYYdfQM2LO4vMojPDzJfIDcm-iID0&s" alt="mdo" width="100" height="100" class="rounded-circle">
          </a>
          <span>{{ this.$store.state.username }}</span>
        </div>

        <ul class="nav nav-pills nav-flush flex-column mb-auto text-center">
          <li class="nav-item">
          </li>
          <li class="">
            <router-link :to="{name: 'menuCadastros'}" class="nav-link py-3 border-bottom border-top rounded-0" data-bs-toggle="tooltip" data-bs-placement="right" @click="fecharMenu">
              <font-awesome-icon icon="fa-solid fa-plus" class="icon bi pe-none" role="img"/>
              <span>Adicionar Cadastros</span>
            </router-link>
          </li>
          <li>
            <router-link :to="{name: 'menuRegistros'}" class="nav-link py-3 border-bottom rounded-0" data-bs-toggle="tooltip" data-bs-placement="right" @click="fecharMenu">
              <font-awesome-icon icon="fa-solid fa-table"  class="icon bi pe-none" role="img"/>
              <span>Resgistros</span>
            </router-link>
          </li>
          <li>
            <a href="#" class="nav-link py-3 border-bottom rounded-0" data-bs-toggle="tooltip" data-bs-placement="right" @click="fecharMenu">
              <font-awesome-icon icon="fa-solid fa-gas-pump" class="icon bi pe-none" role="img"/>
              <span>Abastecimento</span>
            </a>
          </li>
          <li>
            <a href="#" class="nav-link py-3 border-bottom rounded-0" data-bs-toggle="tooltip" data-bs-placement="right" @click="fecharMenu">
              <font-awesome-icon icon="fa-solid fa-car" class="icon bi pe-none" role="img"/>
              <span>Troca de Pneu</span>
            </a>
          </li>
          <li>
            <a href="#" class="nav-link py-3 border-bottom rounded-0" data-bs-toggle="tooltip" data-bs-placement="right" @click="fecharMenu">
              <font-awesome-icon icon="fa-solid fa-oil-can" class="icon bi pe-none" role="img"/>
              <span>Troca de Oleo</span>
            </a>
          </li>
        </ul>

        <span class="position-absolute bottom-0 end-0 m-3">
          <router-link :to="{name: 'login'}" @click="delogar()">logout</router-link>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: "SideMenuC",
    methods: {
      fecharMenu(){
        this.$store.state.menu = false
      },
      abrirMenu(){
        this.$store.state.menu = true
      },
      delogar(){
        this.$store.commit('deslogarUsuario')
      }
    }
}
</script>

<style scoped>
  .icon{
    height: 26px;
    width: 26px;
    color: var(--primary-green);
  }
  .nav-link{
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .nav-link > span{
    width: 150px;
  }
  span, h5{
    color: white;
  }

  .offcanvas{
    background: var(--side-menu-background);
    transition-duration: 0.5s;
  }

</style>