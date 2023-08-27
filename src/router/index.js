import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

import { useAuthStore } from '../stores/auth'

const requireAuth = async (to, from, next) => {
  console.log('currentUser')
  const { currentUser } = useAuthStore()
  
  const existUser = await currentUser()

  console.log('requireAuth', existUser)

  if (existUser) {
    next()
  }  else {
    next({ name: 'login' })
  }
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      children: [
        {
          path: ':id/board',
          name: 'board-detail',
          component: () => import('../views/BoardDetail.vue')
        }
      ],
      // Per-Route Guard
      beforeEnter: requireAuth
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue')
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('../views/RegisterView.vue')
    },
    // {
    //   path: '/board/:id',
    //   name: 'board-detail',
    //   component: () => import('../views/BoardDetail.vue')
    // },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})



export default router
