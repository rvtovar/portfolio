import { createRouter, createWebHistory } from 'vue-router'
import { ref } from 'vue'

const scrollToTop = ref(false)

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/projects',
      name: 'projects',
      component: () => import('../views/ProjectsView.vue')
    },
    {
      path: "/resume",
      name: "resume",
      component: () => import("../views/ResumeView.vue")
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    return new Promise((resolve) => {
      if (savedPosition) {
        resolve(savedPosition)
      } else if (scrollToTop.value) {
        scrollToTop.value = false
        setTimeout(() => {
          resolve({ top: 0 })
        }, 500) // Match the transition duration
      } else {
        resolve({ top: 0 })
      }
    })
  }
})

export default router