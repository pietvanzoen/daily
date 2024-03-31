<script setup lang="ts">
import { useTaskStore } from '@/state'

const taskStore = useTaskStore()
</script>

<template>
  <section>
    <ul>
      <li v-for="task in taskStore.tasks" :key="task.id">
        <input
          type="text"
          :value="task.label"
          @input="taskStore.setLabel(task.id, ($event.target as HTMLInputElement)?.value)"
        />
        <button @click="taskStore.removeTask(task.id)" aria-label="Delete">🗑️</button>
      </li>
    </ul>

    <button @click="taskStore.addTask('')">➕ Add task</button>
  </section>
</template>

<style scoped>
input {
  padding: 0 0.5rem;
  margin-right: 0.5rem;
  flex: 1;
}
</style>
