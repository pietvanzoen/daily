<script setup lang="ts">
import { type Task, useTaskStore } from '@/state'
import { nextTick, ref } from 'vue'
const taskStore = useTaskStore()

const editingTaskId = ref<Task['id'] | null>(null)

const addTask = (payload: KeyboardEvent) => {
  const target = payload.target as HTMLInputElement
  taskStore.addTask(target.value)
  target.value = ''
}

const setLabel = (id: Task['id'], payload: Event) => {
  const target = payload.target as HTMLInputElement
  taskStore.setLabel(id, target.value)
}

const editTask = async (id: Task['id']) => {
  if (editingTaskId.value === id) {
    editingTaskId.value = null
    return
  }
  editingTaskId.value = id
  await nextTick()
  const input = document.querySelector(`input#task-${id}`) as HTMLInputElement
  input.focus()
}

const deleteTask = async (id: Task['id'], payload: KeyboardEvent) => {
  const target = payload.target as HTMLInputElement
  if (!payload.metaKey && target.value !== '') return
  taskStore.removeTask(id)
  editingTaskId.value = null
}
</script>

<template>
  <section>
    <ul class="task-list">
      <li v-for="task in taskStore.tasks" :key="task.id">
        <label :for="task.id" class="task">
          <input
            type="checkbox"
            :checked="task.done"
            :id="task.id"
            @input="() => taskStore.toggleTask(task.id)"
          />
          <input
            v-if="editingTaskId === task.id"
            class="task--label-input"
            :id="`task-${task.id}`"
            type="text"
            :value="task.label"
            @input="setLabel(task.id, $event)"
            @keydown.enter="editingTaskId = null"
            @keydown.esc="editingTaskId = null"
            @keydown.backspace="deleteTask(task.id, $event)"
            @blur="editingTaskId = null"
          />
          <span
            v-if="editingTaskId !== task.id"
            class="task--label truncate"
            v-html="task.html"
          ></span>
          <button
            v-if="editingTaskId !== task.id"
            class="task--edit"
            @click="editTask(task.id)"
            aria-label="Edit task"
            title="Edit task"
          >
            <span> Edit task </span>
          </button>
        </label>
      </li>
      <li class="task task--new">
        <input type="text" placeholder="Add a task" @keydown.enter="addTask" />
      </li>
    </ul>
  </section>
</template>
