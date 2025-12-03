<script setup lang="ts">
import MarkdownRender from 'markstream-vue'
// Import nation data to check availability
import 'markstream-vue/index.css'

// Simple approach - just load and display markdown
const route = useRoute()
const nation = route.params.nation as string

// No need for the old nationFiles mapping since we use YAML frontmatter now

// Reactive state
const markdownContent = ref('')
const isLoading = ref(true)
const hasError = ref(false)

onMounted(async () => {
  try {
    isLoading.value = true
    hasError.value = false

    // Known guide files with their nation mapping (determined by frontmatter)
    const guideFiles = {
      'breaking-news': 'uk',
      'germany': 'germany',
      'france': 'france',
      'usa': 'usa',
      'italy': 'italy',
      'japan': 'japan',
      'ussr': 'ussr',
      'china': 'china',
    }

    // Find the filename for the requested nation
    const guideFilename = Object.keys(guideFiles).find(filename => guideFiles[filename as keyof typeof guideFiles] === nation)

    let response
    if (guideFilename) {
      // Guide exists - load it
      response = await fetch(`/guides/${guideFilename}.md`)
    }
    else {
      response = await fetch(`/guides/404.md`)
    }

    if (response.ok) {
      let content = await response.text()
      // Strip YAML frontmatter (content between first and second ---)
      const frontmatterRegex = /^---\n([\s\S]*?)\n---\n/
      content = content.replace(frontmatterRegex, '')
      markdownContent.value = content
    }
    else {
      throw new Error(`Failed to load guide for ${nation}`)
    }
  }
  catch (error) {
    console.error('Error loading nation guide:', error)
    hasError.value = true
    markdownContent.value = `# 加载失败
        抱歉，无法加载 ${nation.toUpperCase()} 的攻略内容。请稍后再试。

        ## 可能的解决方案

        - 检查网络连接
        - 该国家的攻略可能正在开发中
        - 返回 [国家选择页面](/guides/nations) 查看其他国家

        如果问题持续，请联系开发团队。
    `
  }
  finally {
    isLoading.value = false
  }
})
</script>

<template>
  <div class="text-gray-900 bg-gray-50 min-h-screen dark:text-gray-100 dark:bg-gray-900">
    <!-- Header -->
    <div class="border-b border-gray-200 bg-white top-0 sticky z-20 dark:border-gray-700 dark:bg-gray-800">
      <div class="mx-auto px-4 py-3 max-w-4xl">
        <!-- Mobile Layout -->
        <div class="flex items-center md:hidden">
          <NuxtLink
            to="/guides/nations"
            class="text-gray-600 font-medium inline-flex flex-shrink-0 items-center dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
          >
            <svg class="mr-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
            </svg>
            返回国家选择
          </NuxtLink>

          <h1 class="text-lg text-gray-900 font-bold mx-2 text-center flex-1 truncate dark:text-white">
            {{ nation ? nation.toUpperCase() : 'NATION' }} <span class="hidden sm:inline">攻略</span>
          </h1>
        </div>

        <!-- Desktop Layout -->
        <div class="hidden items-center justify-between md:flex">
          <NuxtLink
            to="/guides/nations"
            class="text-gray-600 font-medium inline-flex items-center dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
          >
            <svg class="mr-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
            </svg>
            返回国家选择
          </NuxtLink>

          <h1 class="text-xl text-gray-900 font-bold truncate dark:text-white">
            {{ nation ? nation.toUpperCase() : 'NATION' }} 攻略
          </h1>

          <div class="w-16" /> <!-- Spacer for centering -->
        </div>
      </div>
    </div>

    <!-- Main Content -->
    <div class="mx-auto px-4 py-4 max-w-4xl md:py-8">
      <!-- Loading State -->
      <div v-if="isLoading" class="space-y-4">
        <div class="rounded bg-gray-200 h-8 animate-pulse dark:bg-gray-700" />
        <div class="space-y-3">
          <div class="rounded bg-gray-200 h-4 animate-pulse dark:bg-gray-700" />
          <div class="rounded bg-gray-200 h-4 w-5/6 animate-pulse dark:bg-gray-700" />
          <div class="rounded bg-gray-200 h-4 animate-pulse dark:bg-gray-700" />
        </div>
      </div>

      <!-- Error State -->
      <div v-else-if="hasError" class="p-4 border border-red-200 rounded-lg bg-red-50 md:p-8 dark:border-red-800 dark:bg-red-900/50">
        <div class="text-center flex flex-col items-center justify-center sm:text-left sm:flex-row">
          <svg class="text-red-500 mb-4 mr-0 flex-shrink-0 h-12 w-12 sm:mb-0 sm:mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <div>
            <h2 class="text-xl text-red-800 font-bold dark:text-red-400">
              攻略加载失败
            </h2>
            <p class="text-red-700 mt-1 dark:text-red-300">
              请检查网络连接或稍后再试
            </p>
          </div>
        </div>
      </div>

      <!-- Content - Rendered Markdown with Markstream -->
      <div v-else class="border border-gray-200 rounded-lg bg-white lg:p-8 md:p-6 dark:border-gray-700 dark:bg-gray-800">
        <MarkdownRender :content="markdownContent" />
      </div>

      <!-- Footer -->
      <div class="mt-8 text-center md:mt-12">
        <NuxtLink
          to="/guides/nations"
          class="text-gray-600 font-medium px-4 py-2 border border-gray-200 rounded-lg inline-flex items-center dark:text-gray-400 hover:text-gray-900 md:px-6 dark:border-gray-700 hover:bg-gray-50 dark:hover:text-white dark:hover:bg-gray-700/50"
        >
          <svg class="mr-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
          </svg>
          返回所有国家
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<style>
/* Keep it minimal - just the preformatted text styling */
/* pre {
  font-family: ui-monospace, SFMono-Regular, "SF Mono", Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
  line-height: 1.5;
  font-size: 14px;
  overflow-x: auto;
} */
</style>
