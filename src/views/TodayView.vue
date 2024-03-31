<script setup lang="ts">
import { useTaskStore } from '@/state'
const taskStore = useTaskStore()
const intl = new Intl.DateTimeFormat('en', { dateStyle: 'full' })
const todayTitle = intl.format(new Date())
</script>

<template>
  <section>
    <h2>{{ todayTitle }}</h2>
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
  margin-right: 0.5rem;
}

.task-list label {
  cursor: pointer;
  flex: 1;
  background-color: #f9f9f9;
  padding: 0.5rem 1rem;
}

.task-list input[type='checkbox']:checked + * {
  text-decoration: line-through;
  color: #bbb;
}
</style>
