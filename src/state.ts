import { defineStore } from 'pinia'
import { useStorage } from '@vueuse/core'

export type TemplateTask = {
  id: string
  label: string
}

export type Task = TemplateTask & {
  done: boolean
}

type DoneState = Record<TemplateTask['id'], boolean>

export const useTaskStore = defineStore('template', {
  state: () => ({
    templateTasks: useStorage<TemplateTask[]>('template-tasks', []),
    todayState: useStorage<DoneState>(`today-${new Date().toISOString().slice(0, 10)}`, {})
  }),

  getters: {
    tasks(): Task[] {
      return this.templateTasks.map((task) => ({
        ...task,
        done: this.todayState[task.id] || false
      }))
    }
  },

  actions: {
    addTask(label: string) {
      const id = Math.random().toString(36).substr(2, 9)
      this.templateTasks.push({ id, label })
    },

    removeTask(id: Task['id']) {
      const index = this.templateTasks.findIndex((task) => task.id === id)
      this.templateTasks.splice(index, 1)
    },

    setLabel(id: Task['id'], label: string) {
      const task = this.templateTasks.find((task) => task.id === id)
      if (task) task.label = label
    },

    toggleTask(id: Task['id']) {
      this.todayState[id] = !this.todayState[id]
    }
  }
})
