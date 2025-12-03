<script setup lang="ts">
const color = useColorMode()

function toggleDark() {
  color.preference = color.value === 'dark' ? 'light' : 'dark'
}
</script>

<template>
  <header class="border-b border-gray-800 bg-gray-900/95 h-64px left-0 right-0 top-0 fixed z-50 backdrop-blur-sm dark:border-gray-800 light:border-gray-200 dark:bg-gray-900/95 light:bg-white/95">
    <div class="mx-auto px-4 py-4 container">
      <div class="flex items-center justify-between">
        <!-- Logo and Title -->
        <div class="flex items-center space-x-4">
          <NuxtLink
            to="/"
            class="text-2xl text-red-500 font-bold transition-colors hover:text-red-400"
          >
            HOI4 攻略站
          </NuxtLink>
        </div>

        <!-- Navigation and Theme Toggle -->
        <div class="flex items-center space-x-6">
          <!-- Navigation Links -->
          <nav class="flex space-x-6 md:space-x-6">
            <NuxtLink
              to="/guides/basics"
              class="text-gray-300 transition-colors dark:text-gray-300 hover:text-red-400 light:text-gray-700"
              active-class="text-red-500 font-semibold"
            >
              新手教程
            </NuxtLink>
            <NuxtLink
              to="/guides/nations"
              class="text-gray-300 transition-colors dark:text-gray-300 hover:text-red-400 light:text-gray-700"
              active-class="text-red-500 font-semibold"
            >
              国家攻略
            </NuxtLink>
            <NuxtLink
              to="/guides/advanced"
              class="text-gray-300 transition-colors dark:text-gray-300 hover:text-red-400 light:text-gray-700"
              active-class="text-red-500 font-semibold"
            >
              高级策略
            </NuxtLink>
          </nav>

          <!-- Theme Toggle Button -->
          <button
            icon-btn
            title="切换明暗模式"
            class="p-2 rounded-lg transition-colors hover:bg-gray-800 light:hover:bg-gray-100"
            @click="toggleDark"
          >
            <div
              class="h-5 w-5 transition-colors"
              :class="color.value === 'dark' ? 'i-carbon-sun' : 'i-carbon-moon'"
            />
          </button>
        </div>
      </div>
    </div>
  </header>
</template>
