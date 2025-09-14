import type { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Login',
    component: () => import('pages/TheLogin.vue'),
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('pages/TheRegister.vue'),
  },
  {
    path: '/home',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '/home', name: 'Home', component: () => import('pages/TheHome.vue') }],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
]

export default routes
