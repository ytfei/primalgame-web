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
        },
        redirect: '/game/pve-wildmonster',
        children: [
          {
            path: '/game/pve-wildmonster',
            name: 'PVE-WildMonster',
            component: () => import('src/views/game/pve-wild-monster/index.vue'),
            meta: {
              title: 'PVE-WildMonster'
            }
          },
          {
            path: '/mining',
            name: 'Mining',
            component: () => import('src/views/mining/index.vue'),
            meta: {
              title: 'Mining'
            }
          },
        ]
      },
      {
        path: '/user',
        name: 'User',
        component: () => import('src/views/user/index.vue'),
        meta: {
          title: 'User'
        }
      },

    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})
setupRouterGuard(router)

export default router
