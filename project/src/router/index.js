import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/HomeView.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/LoginView.vue')
  }
  ,
  {
    path: '/cadastro',
    name: 'cadastro',
    component: () => import('../views/CadastroView.vue')
  },
  {
    path: '/cadastros',
    name: 'menuCadastros',
    component: () => import('../views/MenuCadastrosView.vue')
  },
  {
    path: '/registros',
    name: 'menuRegistros',
    component: () => import('../views/MenuRegistrosView.vue')
  },
  {
    path: '/registros/veiculos',
    name: 'registrosVeiculos',
    component: () => import('../views/VeiculosView.vue'),
  }
  ,
  {
    path: '/registros/motoristas',
    name: 'registrosMotoristas',
    component: () => import('../views/MotoristasView.vue'),
  }
  ,
  {
    path: '/registros/empresas',
    name: 'registrosEmpresas',
    component: () => import('../views/EmpresasView.vue'),
  }
  ,
  {
    path: '/registros/manutencoes',
    name: 'registrosManutencoes',
    component: () => import('../views/ManutencoesView.vue'),
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
