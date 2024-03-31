<script setup lang="ts">
import { RouterView, useRoute, useRouter } from 'vue-router'
const route = useRoute()
const router = useRouter()
</script>

<template>
  <main>
    <header>
      <h1>{{ route.meta.title }}</h1>
      <nav>
        <router-link
          v-for="link in router.getRoutes()"
          :key="link.path"
          :to="link.path"
          active-class="hidden"
          >{{ link.meta.title }}</router-link
        >
      </nav>
    </header>
    <RouterView />
  </main>
</template>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
