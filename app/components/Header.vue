<script setup lang="ts">
const color = useColorMode()
const isMobileMenuOpen = ref(false)
const mobileMenuRef = ref<HTMLElement>()

function toggleDark() {
  color.preference = color.value === 'dark' ? 'light' : 'dark'
}

function closeMobileMenu() {
  isMobileMenuOpen.value = false
}

onMounted(() => {
  document.addEventListener('click', (event) => {
    if (isMobileMenuOpen.value && mobileMenuRef.value && !mobileMenuRef.value.contains(event.target as Node)) {
      closeMobileMenu()
    }
  })

  // Close mobile menu when scrolling
  const handleScroll = () => {
    if (isMobileMenuOpen.value) {
      closeMobileMenu()
    }
  }

  window.addEventListener('scroll', handleScroll)

  // Also handle touch scroll
  window.addEventListener('touchstart', handleScroll, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', () => {})
  window.removeEventListener('touchstart', () => {})
  document.removeEventListener('click', () => {})
})
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

        <!-- Desktop Navigation, Mobile Menu Button, and Theme Toggle -->
        <div class="flex items-center space-x-4 md:space-x-6">
          <!-- Desktop Navigation Links -->
          <nav class="hidden space-x-6 md:!flex">
            <NuxtLink
              to="/guides/basics"
              active-class="text-red-500 font-semibold"
              class="text-gray-300 transition-colors dark:text-gray-300 hover:text-red-400 light:text-gray-700"
            >
              新手教程
            </NuxtLink>
            <NuxtLink
              to="/guides/nations"
              active-class="text-red-500 font-semibold"
              class="text-gray-300 transition-colors dark:text-gray-300 hover:text-red-400 light:text-gray-700"
            >
              国家攻略
            </NuxtLink>
            <NuxtLink
              to="/guides/advanced"
              active-class="text-red-500 font-semibold"
              class="text-gray-300 transition-colors dark:text-gray-300 hover:text-red-400 light:text-gray-700"
            >
              高级策略
            </NuxtLink>
          </nav>

          <!-- Mobile Menu Button -->
          <button
            class="p-2 rounded-lg transition-colors hover:bg-gray-800 md:hidden light:hover:bg-gray-100"
            title="打开菜单"
            @click.stop="isMobileMenuOpen = !isMobileMenuOpen"
          >
            <div class="i-carbon-menu text-gray-300 h-6 w-6 dark:text-gray-300 light:text-gray-700" />
          </button>

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

        <!-- Mobile Navigation Menu -->
        <div
          ref="mobileMenuRef"
          :class="[isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0']"
          class="border-b border-gray-800 bg-gray-900/95 transition-all duration-300 ease-in-out left-0 right-0 top-full absolute overflow-hidden backdrop-blur-sm light:border-gray-200 light:bg-white/95 md:hidden"
        >
          <nav class="px-4 py-4 flex flex-col space-y-2">
            <NuxtLink
              to="/guides/basics"
              active-class="text-red-500 font-semibold !text-red-500 !font-semibold"
              class="text-gray-300 px-3 py-2 rounded-lg transition-colors dark:text-gray-300 hover:text-red-400 light:text-gray-700 hover:bg-gray-800 light:hover:bg-gray-100"
            >
              新手教程
            </NuxtLink>
            <NuxtLink
              to="/guides/nations"
              active-class="text-red-500 font-semibold !text-red-500 !font-semibold"
              class="text-gray-300 px-3 py-2 rounded-lg transition-colors dark:text-gray-300 hover:text-red-400 light:text-gray-700 hover:bg-gray-800 light:hover:bg-gray-100"
            >
              国家攻略
            </NuxtLink>
            <NuxtLink
              to="/guides/advanced"
              active-class="text-red-500 font-semibold !text-red-500 !font-semibold"
              class="text-gray-300 px-3 py-2 rounded-lg transition-colors dark:text-gray-300 hover:text-red-400 light:text-gray-700 hover:bg-gray-800 light:hover:bg-gray-100"
            >
              高级策略
            </NuxtLink>
          </nav>
        </div>
      </div>
    </div>
  </header>
</template>
