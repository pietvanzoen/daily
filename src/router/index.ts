import { createRouter, createWebHistory } from 'vue-router'
import EditView from '@/views/EditView.vue'
import TodayView from '@/views/TodayView.vue'

const intl = new Intl.DateTimeFormat('en', { dateStyle: 'full' })
const todayTitle = intl.format(new Date())

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'today',
      component: TodayView,
      meta: {
        title: todayTitle
      }
    },
    {
      path: '/edit',
      name: 'edit',
      component: EditView,
      meta: {
        title: 'Edit'
      }
    }
  ]
})

export default router
