<script setup lang="ts">
import { appName } from '@/constants'

useHead({
  title: appName,
})
</script>

<template>
  <div v-auto-animate>
    <VitePwaManifest />
    <Header />
    <main class="mt-64px min-h-screen">
      <NuxtPage />
    </main>
    <Footer />
  </div>
</template>

<style>
html.dark {
  color-scheme: dark;
}

html,
body {
  background-color: hsl(var(--background));
}

html.dark body {
  background-color: #111827; /* gray-900 */
}

html.light body {
  background-color: #ffffff;
}
</style>
