<template>
<main class="form-signin w-100 text-center d-flex justify-content-center align-items-center">
  <form class="col-md-3 m-auto">
    <h1 class="h2 mb-4 fw-bold">Maringá Frotas's</h1>
    <h2 class="h3 mb-3 fw-bold">Login</h2>

    <div class="form-floating mb-3">
      <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" v-model="fields.email">
      <label for="floatingInput">Email</label>
    </div>
    <div class="form-floating mb-3">
      <input type="password" class="form-control" id="floatingPassword" placeholder="Password" v-model="fields.senha">
      <label for="floatingPassword">Senha</label>
    </div>
    <router-link to="cadastro" class="p-2 m-3">Criar Cadastro</router-link>
    <button class="w-100 btn btn-lg btn-primary" type="submit" @click.prevent="logar()">Login</button>
  </form>
</main>
</template>

<script>
import Usuario from '@/services/Usuario';

export default {
  name: 'loginView',
  data(){
    return{
      fields: {
        email: '',
        senha: ''
      }
    }
  },
  methods: {
    logar(){
      Usuario.login(this.fields)
      .then((retorno) => {
        this.$store.commit('logarUsuario', retorno.data.nome)
        this.$router.push('/')
      }) 
      .catch(() => {
        alert("E-Mail ou senha invalidos.")
      })     
    }
  }
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
        min-height: 100vh;
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