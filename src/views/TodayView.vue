<script setup lang="ts">
import { useTaskStore } from '@/state'
const taskStore = useTaskStore()
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
          <span v-html="task.html"></span>
        </label>
      </li>
    </ul>
  </section>
</template>
