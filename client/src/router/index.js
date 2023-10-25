import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import BundlePage from "../components/BundlePage.vue"
import LoginPage from "../views/LoginPage.vue"
import Inventory from "../components/InventoryPage.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/login',
      name: 'login',
      component: LoginPage
    },
    {
      path: '/bundle',
      name: 'bundle',

      component: BundlePage
    },
    {
      path: '/inventory',
      name: 'inventory',

      component: Inventory
    }
  ]
})

export default router
