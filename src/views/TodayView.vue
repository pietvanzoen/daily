<script setup lang="ts">
import { useTaskStore } from '@/state'
const taskStore = useTaskStore()
</script>

<template>
  <ul>
    <li v-for="task in taskStore.tasks" :key="task.id">
      <input
        type="checkbox"
        :checked="task.done"
        :id="task.id"
        @input="() => taskStore.toggleTask(task.id)"
      />&nbsp;
      <label :for="task.id" v-html="task.html" />
    </li>
  </ul>
</template>
