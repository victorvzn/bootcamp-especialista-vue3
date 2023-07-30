import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '@/views/HomeView.vue'

import { isAuthenticated } from '@/utils/auth.js'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/LoginView.vue')
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('@/views/RegisterView.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('@/views/AboutView.vue')
    },
  ]
})

router.beforeEach((to, from, next) => {
  if (to.name === 'login' && isAuthenticated()) {
    next({ name: 'home' })
  } else if (to.name === 'register' && isAuthenticated()) {
    next({ name: 'home' })
  } else if (to.name === 'home' && !isAuthenticated()) {
    next({ name: 'login' })
  } else {
    next()
  }
})

export default router