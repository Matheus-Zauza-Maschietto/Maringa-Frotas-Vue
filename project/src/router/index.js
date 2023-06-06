import { createRouter, createWebHistory } from 'vue-router'
import store from '@/store'

const routes = [
  {
    path: '/',
    name: 'home',
    meta: {
      requireAuth: true
    },
    component: () => import('../views/HomeView.vue')
  },
  {
    path: '/login',
    name: 'login',
    meta: {
      requireAuth: false
    },
    component: () => import('../views/LoginView.vue')
  }
  ,
  {
    path: '/cadastro',
    name: 'cadastro',
    meta: {
      requireAuth: false
    },
    component: () => import('../views/CadastroView.vue')
  },
  {
    path: '/cadastros',
    name: 'menuCadastros',
    meta: {
      requireAuth: true
    },
    component: () => import('../views/Menus/MenuCadastrosView.vue')
  },
  {
    path: '/cadastros/empresas',
    name: 'cadastrosEmpresas',
    meta: {
      requireAuth: true
    },
    component: () => import('../views/Cadastros/EmpresasView.vue')
  },
  {
    path: '/cadastros/funcionarios',
    name: 'cadastrosFuncionarios',
    meta: {
      requireAuth: true
    },
    component: () => import('../views/Cadastros/FuncionariosView.vue')
  },
  {
    path: '/cadastros/manutencoes',
    name: 'cadastrosManutencoes',
    meta: {
      requireAuth: true
    },
    component: () => import('../views/Cadastros/ManutencoesView.vue')
  },
  {
    path: '/cadastros/veiculos',
    name: 'cadastrosVeiculos',
    meta: {
      requireAuth: true
    },
    component: () => import('../views/Cadastros/VeiculosView.vue')
  },
  {
    path: '/registros',
    name: 'menuRegistros',
    meta: {
      requireAuth: true
    },
    component: () => import('../views/Menus/MenuRegistrosView.vue')
  },
  {
    path: '/registros/veiculos',
    name: 'registrosVeiculos',
    meta: {
      requireAuth: true
    },
    component: () => import('../views/Registros/VeiculosView.vue'),
  },
  {
    path: '/registros/funcionarios',
    name: 'registrosFuncionarios',
    meta: {
      requireAuth: true
    },
    component: () => import('../views/Registros/FuncionariosView.vue'),
  },
  {
    path: '/registros/empresas',
    name: 'registrosEmpresas',
    meta: {
      requireAuth: true
    },
    component: () => import('../views/Registros/EmpresasView.vue'),
  },
  {
    path: '/registros/manutencoes',
    name: 'registrosManutencoes',
    meta: {
      requireAuth: true
    },
    component: () => import('../views/Registros/ManutencoesView.vue'),
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach( 
  async (to, from, next) => {

    let isAuth = store.state.isLogado
    
    const requiresAuth = to.matched.some(p => p.meta.requireAuth)

    if(!isAuth && requiresAuth)
    {
      next('/login')
    }
    else{
        next()
    }
  }
  
)

export default router
