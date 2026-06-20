import { createRouter, createWebHistory } from 'vue-router'

import HomePage from '@/pages/HomePage.vue'
import NotFound from '@/NotFound.vue'
import AboutPage from '@/pages/AboutMePage.vue'
import DefaultLayout from '@/layouts/DefaultLayout.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: DefaultLayout,
    children: [
      {
        path: '',
        component: HomePage
      },
      {
        path: 'about',
        name: 'About Me',
        title: "About Me",
        component: AboutPage
      }
    ]
  },
   {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: NotFound,
    meta: { layout: 'minimal' }
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes,
  scrollBehavior(to) {
  if (to.hash) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          el: to.hash,
          behavior: "smooth"
        })
      }, 100)
    })
  }

  return {
    top: 0
  }
}
})

export default router
