import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomePage.vue'),
    },
    {
      path: '/anys_beques',
      name: 'anys_beques',
      component: () => import('../views/BequesPage.vue'),
    },
    {
      path: '/detall_any/:anyBeca',
      name: 'anyBeca',
      component: () => import('../views/AnysPage.vue'),
      props: true
    },
    {
      path: '/detall_centre/:centre/:any',
      name: 'detall_centre',
      component: () => import('../views/CentresPage.vue'),
      props: true
    },
  ],
})

export default router
