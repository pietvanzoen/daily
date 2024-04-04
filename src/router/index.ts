import { createRouter, createWebHistory } from 'vue-router'
import TodoView from '@/views/TodoView.vue'

const intl = new Intl.DateTimeFormat('en', { dateStyle: 'full' })
const todayTitle = intl.format(new Date())

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'todo',
      component: TodoView,
      meta: {
        title: todayTitle
      }
    },
    {
      path: '/:catchAll(.*)*',
      redirect: {
        name: 'todo'
      }
    }
  ]
})

export default router
