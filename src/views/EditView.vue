<script setup lang="ts">
import { useTaskStore } from '@/state'

const taskStore = useTaskStore()
</script>

<template>
  <section>
    <ul>
      <li v-for="task in taskStore.tasks" :key="task.id">
        <fieldset>
          <input
            type="text"
            :value="task.label"
            @input="taskStore.setLabel(task.id, ($event.target as HTMLInputElement)?.value)"
          />
          <button @click="taskStore.removeTask(task.id)" aria-label="Delete">X</button>
        </fieldset>
      </li>
    </ul>

    <button @click="taskStore.addTask('')">+ Add task</button>
  </section>
</template>

<style scoped>
input {
  width: 100%;
}
fieldset {
  position: relative;
  padding-right: 2rem;
}
fieldset button {
  position: absolute;
  height: 100%;
  width: 2rem;
  text-align: center;
}
</style>
