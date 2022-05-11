import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import { setupRouterGuard } from './guard'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Root',
    component: () => import('../views/layout/index.vue'),
    redirect: '/home',
    children: [
      {
        path: '/home',
        name: 'Home',
        component: () => import('src/views/home/index.vue'),
        meta: {
          title: 'Home'
        }
      },
      {
        path: '/game',
        name: 'Game',
        component: () => import('src/views/game/index.vue'),
        meta: {
          title: 'Game'
        }
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})
setupRouterGuard(router)

export default router
