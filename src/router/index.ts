import { createRouter, createWebHistory } from 'vue-router'
import EditView from '@/views/EditView.vue'
import TodayView from '@/views/TodayView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'today',
      component: TodayView
    },
    {
      path: '/edit',
      name: 'edit',
      component: EditView
    }
  ]
})

export default router
