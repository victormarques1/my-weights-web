import type { RouteRecordRaw } from 'vue-router'
import PublicRoutes from './PublicRoutes'

const routes: RouteRecordRaw[] = [
  // {
  //   path: '/',
  //   component: () => import('layouts/MainLayout.vue'),
  //   children: [{ path: '', name: 'Login', component: () => import('pages/TheLogin.vue') }],
  // },

  PublicRoutes,
  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
]

export default routes
