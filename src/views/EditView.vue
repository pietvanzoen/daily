<script setup lang="ts">
import { useTaskStore } from '@/state'

const taskStore = useTaskStore()
</script>

<template>
  <main>
    <header>
      <h1>Edit Tasks</h1>
      <nav>
        <router-link to="/">Today</router-link>
      </nav>
    </header>

    <div v-for="task in taskStore.tasks" :key="task.id">
      <input
        type="text"
        :value="task.label"
        @input="taskStore.setLabel(task.id, ($event.target as HTMLInputElement)?.value)"
      />
      <button @click="taskStore.removeTask(task.id)">Delete</button>
    </div>

    <button @click="taskStore.addTask('')">Add task</button>
  </main>
</template>
