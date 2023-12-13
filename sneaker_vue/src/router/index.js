import { createRouter, createWebHistory } from 'vue-router'
import admin from '../views/admin.vue'
import client from '../views/client.vue'
import login from '../views/login.vue'
import register from '../views/register.vue'
import add_products from '../views/add_products.vue'
import edit_products from '../views/edit_products.vue'
import welcome from '../views/welcome.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: login
      },
    {
      path: '/admin',
      name: 'admin',
      component: admin
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
    {
      path: '/add_products',
      name: 'add_products',
      component : add_products
    },
    {
      path: '/edit_products/:id/:name/:description/:price',
      name: 'edit_products',
      component : edit_products
    },
    {
      path: '/welcome',
      name: 'welcome',
      component : welcome
    },
  ]
})


export default router
