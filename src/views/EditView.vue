<script setup lang="ts">
import { useTaskStore } from '@/state'

const taskStore = useTaskStore()
</script>

<template>
  <section>
    <div v-for="task in taskStore.tasks" :key="task.id">
      <input
        type="text"
        :value="task.label"
        @input="taskStore.setLabel(task.id, ($event.target as HTMLInputElement)?.value)"
      />
      <button @click="taskStore.removeTask(task.id)">Delete</button>
    </div>

    <button @click="taskStore.addTask('')">Add task</button>
  </section>
</template>
