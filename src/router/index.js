import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  { 
  
    path: '/components/:id*', 
    name: 'detail',
    component: () => import('../views/ComponentDetailView.vue')
  },
  { 
  
    path: '/views/:id*', 
    name: 'view',
    component: () => import('../views/ComponentDetailView.vue'),
    meta: {
      isView: true,
    },
  },
  {
    name: 'NotFound',
    path: '/:pathMatch(.*)*',
    component: () => import('../views/NotFoundView.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
