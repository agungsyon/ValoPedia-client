import { createRouter, createWebHistory } from 'vue-router'
import LoginPage from "../views/LoginPage.vue"
import RegisterPage from "../views/RegisterPage.vue"
import HomePage from '../views/HomePage.vue'
import BundlePage from "../components/BundlePage.vue"
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
      path: '/register',
      name: 'register',
      component: RegisterPage
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
import Swal from 'sweetalert2'

router.beforeEach((to, from, next) => {
  if (
    (to.name == "login" || to.name == "register") &&
    localStorage.access_token
  ) {
    setTimeout(() => {
      Swal.fire(`You're login now`)
      next({ name: "home" });
    }, 300);
  } else if (to.name == "inventory" && !localStorage.access_token) {
    setTimeout(() => {
      Swal.fire(`Pleasee Login First`)
      next({ name: "login" });
    }, 300);
  } else {
    next();
  }
});

export default router
