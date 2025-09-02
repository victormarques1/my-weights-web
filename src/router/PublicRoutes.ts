import PublicLayout from 'src/layouts/PublicLayout.vue'

const PublicRoutes = {
  path: '/',
  name: '',
  component: PublicLayout,
  children: [
    { path: '', name: 'Login', component: () => import('pages/TheLogin.vue') },
    { path: '/register', name: 'Register', component: () => import('pages/TheRegister.vue') },
  ],
}

export default PublicRoutes
