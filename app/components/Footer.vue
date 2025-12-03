<script setup lang="ts">
const color = useColorMode()

useHead({
  meta: [{
    id: 'theme-color',
    name: 'theme-color',
    content: () => color.value === 'dark' ? '#1a1a1a' : '#ffffff',
  }],
})

const currentYear = new Date().getFullYear()
</script>

<template>
  <footer class="text-gray-700 bg-gray-900 dark:text-gray-400 light:text-gray-600 dark:border-gray-700 dark:bg-gray-950 light:bg-slate-100">
    <!-- Main Footer Content -->
    <div class="mx-auto px-6 py-12 max-w-6xl">
      <div class="gap-8 grid grid-cols-1 md:grid-cols-3">
        <!-- Brand Section -->
        <div class="md:col-span-1">
          <div class="mb-6">
            <h3 class="text-xl text-gray-800 font-bold mb-3 dark:text-gray-300">
              Hearts of Iron IV
            </h3>
            <p class="text-sm text-gray-800 leading-relaxed dark:text-gray-300">
              专业的战略游戏攻略指南，为您提供详细的游戏策略和资源。
            </p>
          </div>
        </div>

        <!-- Quick Links -->
        <div class="md:col-span-1">
          <h4 class="text-lg text-white font-semibold mb-4 dark:text-gray-300 light:text-gray-800">
            快速链接
          </h4>
          <ul class="text-sm space-y-2">
            <li>
              <NuxtLink to="/" class="transition-colors dark:text-gray-300 hover:text-blue-400 light:text-gray-800 dark:hover:text-blue-300">
                首页
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/guides" class="transition-colors dark:text-gray-300 hover:text-blue-400 light:text-gray-800 dark:hover:text-blue-300">
                攻略中心
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/guides/nations" class="transition-colors dark:text-gray-300 hover:text-blue-400 light:text-gray-800 dark:hover:text-blue-300">
                国家攻略
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/guides/basics" class="transition-colors dark:text-gray-300 hover:text-blue-400 light:text-gray-800 dark:hover:text-blue-300">
                新手指南
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/guides/advanced" class="transition-colors dark:text-gray-300 hover:text-blue-400 light:text-gray-800 dark:hover:text-blue-300">
                高级技巧
              </NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Game Versions -->
        <div class="md:col-span-1">
          <h4 class="text-lg font-semibold mb-4 dark:text-gray-300 light:text-gray-800">
            游戏版本
          </h4>
          <ul class="text-sm space-y-2">
            <li>
              <span class="text-xs text-white px-2 py-1 rounded bg-blue-500">
                1.17.1
              </span>
            </li>
            <li>
              <span class="text-xs text-white px-2 py-1 rounded bg-purple-500">
                By Blood Alone
              </span>
            </li>
            <li>
              <span class="text-xs text-white px-2 py-1 rounded bg-green-500">
                Death or Dishonor
              </span>
            </li>
            <li>
              <span class="text-xs text-white px-2 py-1 rounded bg-orange-500">
                Waking the Tiger
              </span>
            </li>
            <li>
              <span class="text-xs text-white px-2 py-1 rounded bg-red-500">
                Together for Victory
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <!-- Bottom Bar -->
    <div class="px-6 py-4 border-t border-gray-800 bg-gray-950 dark:border-gray-700 dark:bg-black">
      <div class="mx-auto max-w-6xl">
        <div class="text-xs text-gray-500 flex flex-col items-center justify-between md:flex-row">
          <div class="mb-2 md:mb-0">
            <p class="text-center md:text-left">
              © {{ currentYear }} Hoi4攻略. 基于 MIT 协议开源。
            </p>
          </div>

          <div class="flex items-center space-x-6">
            <span>《Hearts of Iron IV》部分内容和图像版权归 Paradox Interactive 所有。</span>
            <div class="flex items-center space-x-2">
              <span class="text-green-400">
                <div i-carbon-campsite text-sm />
              </span>
              <span>Powered by Nuxt</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
