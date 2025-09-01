import type { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  // {
  //   path: '/',
  //   component: () => import('layouts/MainLayout.vue'),
  //   children: [{ path: '', name: 'Login', component: () => import('pages/TheLogin.vue') }],
  // },
  {
    path: '/',
    name: '',
    component: () => import('pages/TheLogin.vue'),
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('pages/TheRegister.vue'),
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
]

export default routes
