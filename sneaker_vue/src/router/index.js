import { createRouter, createWebHistory } from 'vue-router'
import client from '../views/client.vue'
import login from '../views/login.vue'
import register from '../views/register.vue'



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: login
      },
    {
      path: '/',
      name: 'client',
      component: client
    
    },
    {
      path: '/register',
      name: 'register',
      component : register
    },
  ]
})


export default router
