<script setup lang="ts">
import { useTaskStore } from '@/state'
const taskStore = useTaskStore()
</script>

<template>
  <section>
    <ul class="task-list">
      <li v-for="task in taskStore.tasks" :key="task.id">
        <label>
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

<style scoped>
.task-list input[type='checkbox'] {
  opacity: 0;
}

.task-list label {
  cursor: pointer;
}

.task-list input[type='checkbox']:checked + * {
  text-decoration: line-through;
}
</style>
