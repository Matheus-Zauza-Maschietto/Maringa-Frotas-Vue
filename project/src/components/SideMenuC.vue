<template>
  <div>
    <font-awesome-icon icon="fa-solid fa-bars" size="xl" class="m-3" data-bs-toggle="offcanvas" data-bs-target="#side-bar" aria-controls="side-bar"/>
    <div class="offcanvas offcanvas-start" tabindex="-1" id="side-bar">
      <div class="offcanvas-header">
        <h5 class="offcanvas-title">Maringa Frotas’s</h5>
        <font-awesome-icon icon="fa-solid fa-bars" size="xl" data-bs-dismiss="offcanvas" aria-label="Close" style="color: white;"/>
      </div>
      <div class="offcanvas-body">
        <div class="text-center p-4">
          <a href="#" class="d-flex align-items-center justify-content-center p-3 link-body-emphasis text-decoration-none">
            <img src="https://github.com/mdo.png" alt="mdo" width="100" height="100" class="rounded-circle">
          </a>
          <span>Fulano de Tal da Silva</span>
        </div>

        <ul class="nav nav-pills nav-flush flex-column mb-auto text-center">
          <li class="nav-item">
          </li>
          <li class="">
            <router-link to="cadastros" class="nav-link py-3 border-bottom border-top rounded-0" data-bs-toggle="tooltip" data-bs-placement="right">
              <font-awesome-icon icon="fa-solid fa-plus" class="icon bi pe-none" role="img"/>
              <span>Adicionar Cadastros</span>
            </router-link>
          </li>
          <li>
            <router-link to="registros" class="nav-link py-3 border-bottom rounded-0" data-bs-toggle="tooltip" data-bs-placement="right">
              <font-awesome-icon icon="fa-solid fa-table"  class="icon bi pe-none" role="img"/>
              <span>Resgistros</span>
            </router-link>
          </li>
          <li>
            <a href="#" class="nav-link py-3 border-bottom rounded-0" data-bs-toggle="tooltip" data-bs-placement="right">
              <font-awesome-icon icon="fa-solid fa-gas-pump" class="icon bi pe-none" role="img"/>
              <span>Abastecimento</span>
            </a>
          </li>
          <li>
            <a href="#" class="nav-link py-3 border-bottom rounded-0" data-bs-toggle="tooltip" data-bs-placement="right">
              <font-awesome-icon icon="fa-solid fa-car" class="icon bi pe-none" role="img"/>
              <span>Troca de Pneu</span>
            </a>
          </li>
          <li>
            <a href="#" class="nav-link py-3 border-bottom rounded-0" data-bs-toggle="tooltip" data-bs-placement="right">
              <font-awesome-icon icon="fa-solid fa-oil-can" class="icon bi pe-none" role="img"/>
              <span>Troca de Oleo</span>
            </a>
          </li>
        </ul>

        <span class="position-absolute bottom-0 end-0 m-3">
          <a href="#">logout</a>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: "SideMenuC"
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
  }

</style>