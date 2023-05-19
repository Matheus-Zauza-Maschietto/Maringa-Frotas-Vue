<template>
<main class="form-signin w-100 text-center d-flex justify-content-center align-items-center">
  <form class="col-md-3 m-auto" id="form-inicial">
    <h1 class="h2 mb-4 fw-bold">Maringá Frotas's</h1>
    <h2 class="h3 mb-3 fw-bold">Cadastro</h2>

    <div class="form-floating mb-3">
      <input type="text" class="form-control" id="" placeholder="João da Silva">
      <label for="floatingInput">Nome</label>
    </div>
    <div class="form-floating mb-3">
      <input type="email" class="form-control" id="" placeholder="name@example.com">
      <label for="floatingInput">Email</label>
    </div>
    <div class="form-floating mb-3">
      <input type="text" class="form-control" id="" placeholder="000.000.000-00">
      <label for="floatingInput">CPF</label>
    </div>
    <div class="form-floating mb-3">
      <input type="tel" class="form-control" id="" placeholder="(00) 90000-0000">
      <label for="floatingInput">Telefone</label>
    </div>
    <div class="form-floating mb-3">
      <input type="password" class="form-control" id="" placeholder="Password">
      <label for="floatingPassword">Senha</label>
    </div>
    <div class="form-floating mb-3">
      <input type="password" class="form-control" id="" placeholder="Password">
      <label for="floatingPassword">Confirmar senha</label>
    </div>
    <router-link to="login" class="p-2 m-3">Fazer Login</router-link>
    <button class="w-100 btn btn-lg btn-primary" type="submit">Cadastrar</button>
  </form>
</main>
</template>

<script>
export default {
    name: 'CadastroView'
}
</script>

<style scoped>
    h1, h2{
        font-family: var(--primary-font-serif), 'Times New Roman', Times, serif;
        color: var(--primary-green);
    }
    h2, a{
      color: white;
    }
    main{
        height: 100vh;
        background: var(--side-menu-background);
    }
    .checkbox{
        color: white;
    }
    a{
        display: block;
        text-decoration: none;
        font-size: 18px;
    }
</style>