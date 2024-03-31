<script setup lang="ts">
import { useTaskStore } from '@/state'
const taskStore = useTaskStore()
</script>

<template>
  <main>
    <header>
      <h1>Today</h1>
      <RouterLink to="/edit">Edit template</RouterLink>
    </header>

    <ul>
      <li v-for="task in taskStore.tasks" :key="task.id">
        <input
          type="checkbox"
          :checked="task.done"
          :id="task.id"
          @input="() => taskStore.toggleTask(task.id)"
        />&nbsp;
        <label :for="task.id">{{ task.label }}</label>
      </li>
    </ul>
  </main>
</template>
