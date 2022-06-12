import { createRouter, createWebHistory } from 'vue-router'
import Home from "../views/HomeView.vue";
import DefaultLayout from "../layouts/DefaultLayout.vue";
import EmptyLayout from "../layouts/EmptyLayout.vue";
import store from '@/store'

const routes = [
  {
    path: "/",
    name: "components",
    component: DefaultLayout,
    children: [
      { 
        path: '/components/:id*', 
        name: 'component-detail',
        component: () => import('../views/ComponentDetailView.vue')
      },
    ]
  },
  {
    path: "/home",
    name: "home",
    component: Home,
  },
  {
    path: "/views/",
    name: "view",
    component: EmptyLayout,
    children: [
      { 
        path: '/views/:id*', 
        name: 'view-detail',
        component: () => import('../views/ComponentDetailView.vue'),
        meta: {
          isViewHidden: true,
        },
      },
    ]
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: () => import('../views/NotFoundView.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  store.commit('setRoute', to);
  next();
});

export default router
