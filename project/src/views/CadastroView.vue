<template>
<main class="form-signin w-100 text-center d-flex justify-content-center align-items-center">
  <form class="col-md-3 m-auto" id="form-inicial">
    <h1 class="h2 mb-4 fw-bold">Maringá Frotas's</h1>
    <h2 class="h3 mb-3 fw-bold">Cadastro</h2>

    <div class="form-floating mb-3">
      <input type="text" class="form-control" id="nome" placeholder="João da Silva" v-model="fields.nome">
      <label for="floatingInput">Nome</label>
    </div>
    <div class="form-floating mb-3">
      <input type="email" class="form-control" id="email" placeholder="name@example.com" v-model="fields.email">
      <label for="floatingInput">Email</label>
    </div>
    <div class="form-floating mb-3">
      <input type="text" class="form-control" id="cpf" placeholder="000.000.000-00" v-model="fields.cpf">
      <label for="floatingInput">CPF</label>
    </div>
    <div class="form-floating mb-3">
      <input type="tel" class="form-control" id="telefone" placeholder="(00) 90000-0000" v-model="fields.telefone">
      <label for="floatingInput">Telefone</label>
    </div>
    <div class="form-floating mb-3">
      <input type="password" class="form-control" id="senha" placeholder="Password" v-model="fields.senha">
      <label for="floatingPassword">Senha</label>
    </div>
    <div class="form-floating mb-3">
      <input type="password" class="form-control" id="confirmarSenha" placeholder="Password" v-model="fields.confirmarSenha">
      <label for="floatingPassword">Confirmar senha</label>
    </div>
    <router-link to="login" class="p-2 m-3">Fazer Login</router-link>
    <button class="w-100 btn btn-lg btn-primary" type="submit" @click.prevent="cadastrar()">Cadastrar</button>
  </form>
</main>
</template>

<script>
import Usuario from '@/services/Usuario';
export default {
    name: 'CadastroView',
    data(){
      return{
        fields: {
          nome: '',
          email: '',
          cpf: '',
          telefone: '',
          senha: '',
          confirmarSenha: ''
        }
      }
    },
    methods: {
      cadastrar(){
        if(this.senha === this.confirmarSenha){
            Usuario.cadastro(this.fields)
          .then(() => {
            alert("Cadastro feito com sucesso")
            this.$router.push('/login')
          })
          .catch(() => {
            alert("Não foi possivel realizar cadastro")
          })
        }
        else{
          alert("As senhas não conhecidem.")
        }
        
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