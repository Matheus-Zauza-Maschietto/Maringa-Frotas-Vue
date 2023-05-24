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
    component: () => import('../views/Menus/MenuCadastrosView.vue')
  },
  {
    path: '/cadastros/empresas',
    name: 'cadastrosEmpresas',
    component: () => import('../views/Cadastros/EmpresasView.vue')
  },
  {
    path: '/cadastros/motoristas',
    name: 'cadastrosMotoristas',
    component: () => import('../views/Cadastros/MotoristasView.vue')
  },
  {
    path: '/cadastros/manutencoes',
    name: 'cadastrosManutencoes',
    component: () => import('../views/Cadastros/ManutencoesView.vue')
  },
  {
    path: '/cadastros/veiculos',
    name: 'cadastrosVeiculos',
    component: () => import('../views/Cadastros/VeiculosView.vue')
  },
  {
    path: '/registros',
    name: 'menuRegistros',
    component: () => import('../views/Menus/MenuRegistrosView.vue')
  },
  {
    path: '/registros/veiculos',
    name: 'registrosVeiculos',
    component: () => import('../views/Registros/VeiculosView.vue'),
  },
  {
    path: '/registros/motoristas',
    name: 'registrosMotoristas',
    component: () => import('../views/Registros/MotoristasView.vue'),
  },
  {
    path: '/registros/empresas',
    name: 'registrosEmpresas',
    component: () => import('../views/Registros/EmpresasView.vue'),
  },
  {
    path: '/registros/manutencoes',
    name: 'registrosManutencoes',
    component: () => import('../views/Registros/ManutencoesView.vue'),
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
