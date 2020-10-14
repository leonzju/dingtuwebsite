import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Contact from '../views/Contact.vue'

const routerHistory = createWebHistory()

const router = createRouter({
  history: routerHistory,
  routes: [
    {
      path: '/',
      component: Home,
      props: { msg: 'Home' }
    },
    {
      path: '/contact',
      component: Contact,
      props: { msg: 'Contact' }
    }
  ]
})

export default router;