<script setup lang="ts">
// HOI4 Guide Site - Hearts of Iron IV Strategy Guides
</script>

<template>
  <div class="bg-gray-50 min-h-screen transition-colors dark:bg-gray-900">
    <!-- Shared Background Elements -->
    <div class="pointer-events-none inset-0 fixed overflow-hidden">
      <div class="rounded-full opacity-60 h-96 w-96 left-1/4 top-20 absolute from-red-100 to-pink-100 bg-gradient-to-br blur-3xl dark:from-red-900/20 dark:to-pink-900/20" />
      <div class="rounded-full opacity-60 h-96 w-96 bottom-32 right-1/4 absolute from-blue-100 to-cyan-100 bg-gradient-to-br blur-3xl dark:from-blue-900/20 dark:to-cyan-900/20" />
      <div class="rounded-full opacity-40 h-72 w-72 transform left-1/2 top-1/3 absolute from-yellow-100 to-orange-100 bg-gradient-to-br blur-2xl -translate-x-1/2 dark:from-yellow-900/10 dark:to-orange-900/10" />
    </div>

    <!-- Hero Section -->
    <section class="hero pb-24 pt-28 relative">
      <!-- Content Wrapper -->
      <div class="relative z-10">
        <div class="mx-auto px-4 text-center container relative z-10">
          <div class="text-sm text-red-800 font-semibold mb-6 px-4 py-2 rounded-full bg-red-100 inline-block dark:text-red-200 dark:bg-red-900">
            🪖 Hearts of Iron IV 旗舰攻略站
          </div>
          <h1 class="text-5xl text-transparent font-extrabold mb-6 from-red-600 to-blue-600 bg-gradient-to-r bg-clip-text md:text-7xl dark:from-red-400 dark:to-blue-400">
            战略大师之路
          </h1>
          <p class="text-xl text-gray-600 leading-relaxed mx-auto mb-10 max-w-3xl md:text-2xl dark:text-gray-300">
            从新手到专家的完整攻略指南 - 掌握第二次世界大战的战略艺术，重塑历史进程
          </p>
          <div class="flex flex-col gap-4 items-center justify-center sm:flex-row">
            <NuxtLink
              to="/guides/basics"
              class="group btn-primary text-lg text-white font-bold px-10 py-4 rounded-xl shadow-lg transform transition-all duration-200 from-red-600 to-red-700 bg-gradient-to-r hover:shadow-xl dark:from-red-500 dark:to-red-600 hover:-translate-y-0.5"
            >
              🚀 开始旅程
            </NuxtLink>
            <NuxtLink
              to="/guides/nations"
              class="group btn-secondary text-lg text-gray-700 font-semibold px-10 py-4 border-2 border-gray-300 rounded-xl bg-white/80 shadow-md transform transition-all duration-200 backdrop-blur-sm dark:text-gray-200 dark:border-gray-600 hover:border-red-400 dark:bg-gray-800/80 hover:bg-white hover:shadow-lg dark:hover:bg-gray-700 hover:-translate-y-0.5"
            >
              📖 国家攻略
            </NuxtLink>
          </div>

          <!-- Stats -->
          <div class="mt-16 text-center flex flex-wrap gap-8 justify-center">
            <div class="px-6 py-4 rounded-lg bg-white/60 shadow-sm backdrop-blur-sm dark:bg-gray-800/60">
              <div class="text-2xl text-gray-900 font-bold dark:text-gray-100">
                50+
              </div>
              <div class="text-sm text-gray-600 dark:text-gray-400">
                详细攻略
              </div>
            </div>
            <div class="px-6 py-4 rounded-lg bg-white/60 shadow-sm backdrop-blur-sm dark:bg-gray-800/60">
              <div class="text-2xl text-gray-900 font-bold dark:text-gray-100">
                8
              </div>
              <div class="text-sm text-gray-600 dark:text-gray-400">
                主要国家
              </div>
            </div>
            <div class="px-6 py-4 rounded-lg bg-white/60 shadow-sm backdrop-blur-sm dark:bg-gray-800/60">
              <div class="text-2xl text-gray-900 font-bold dark:text-gray-100">
                🎯
              </div>
              <div class="text-sm text-gray-600 dark:text-gray-400">
                实用技巧
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section class="features py-16">
      <div class="mx-auto px-4 container">
        <h2 class="text-3xl text-gray-900 font-bold mb-12 text-center dark:text-gray-100 light:text-gray-900">
          攻略内容
        </h2>
        <div class="gap-8 grid md:grid-cols-3">
          <div class="feature-card p-6 border border-gray-200 rounded-lg bg-white dark:border-gray-600 dark:bg-gray-700">
            <h3 class="text-xl text-red-500 font-bold mb-4 dark:text-red-400 light:text-red-500">
              新手教程
            </h3>
            <p class="text-gray-600 mb-4 dark:text-gray-300 light:text-gray-600">
              从基础开始，学习HOI4的核心机制和玩乐方式。
            </p>
            <NuxtLink to="/guides/basics" class="text-blue-600 transition-colors dark:text-blue-400 hover:text-blue-500 light:text-blue-600 dark:hover:text-blue-300 light:hover:text-blue-700">
              查看详情 →
            </NuxtLink>
          </div>
          <div class="feature-card p-6 border border-gray-200 rounded-lg bg-white dark:border-gray-600 dark:bg-gray-700">
            <h3 class="text-xl text-red-500 font-bold mb-4 dark:text-red-400 light:text-red-500">
              国家攻略
            </h3>
            <p class="text-gray-600 mb-4 dark:text-gray-300 light:text-gray-600">
              各大阵营国家的详细发展策略和征服攻略。
            </p>
            <NuxtLink to="/guides/nations" class="text-blue-600 transition-colors dark:text-blue-400 hover:text-blue-500 light:text-blue-600 dark:hover:text-blue-300 light:hover:text-blue-700">
              查看详情 →
            </NuxtLink>
          </div>
          <div class="feature-card p-6 border border-gray-200 rounded-lg bg-white dark:border-gray-600 dark:bg-gray-700">
            <h3 class="text-xl text-red-500 font-bold mb-4 dark:text-red-400 light:text-red-500">
              高级策略
            </h3>
            <p class="text-gray-600 mb-4 dark:text-gray-300 light:text-gray-600">
              深入探讨多人游戏、外交策略和游戏优化。
            </p>
            <NuxtLink to="/guides/advanced" class="text-blue-600 transition-colors dark:text-blue-400 hover:text-blue-500 light:text-blue-600 dark:hover:text-blue-300 light:hover:text-blue-700">
              查看详情 →
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <section class="highlights py-24 relative">
      <!-- Subtle background elements removed -->

      <div class="mx-auto px-4 container relative z-10">
        <div class="mb-16 text-center">
          <div class="text-sm text-red-800 font-semibold mb-4 px-4 py-2 rounded-full bg-red-100 inline-block dark:text-red-200 dark:bg-red-900">
            🔥 核心战略
          </div>
          <h2 class="text-4xl text-gray-900 font-bold mb-6 md:text-5xl dark:text-white">
            📚 精选攻略
          </h2>
          <p class="text-xl text-gray-600 mx-auto max-w-2xl dark:text-gray-300">
            三大主流国家的教科书级战略指南，助你成为真正的战略大师
          </p>
        </div>

        <div class="gap-8 grid lg:grid-cols-3 md:grid-cols-2">
          <!-- Germany Focus -->
          <div class="group relative">
            <!-- Background glow effect -->
            <div class="rounded-2xl opacity-0 rotate-3 scale-105 transform transition-all duration-500 inset-0 absolute from-gray-200 to-red-100 bg-gradient-to-br group-hover:opacity-30 dark:from-gray-700 dark:to-red-900" />

            <div class="p-8 border border-gray-200 rounded-2xl bg-white transform transition-all duration-500 relative dark:border-gray-600 dark:bg-gray-700 hover:shadow-2xl hover:-translate-y-2">
              <div class="text-center">
                <div class="text-7xl mb-6 transition-transform duration-300 group-hover:scale-110">
                  DEU
                </div>
                <div class="mb-3">
                  <span class="text-xs text-red-800 font-semibold px-3 py-1 rounded-full bg-red-100 inline-block dark:text-red-200 dark:bg-red-900">
                    ⚡ 闪电战
                  </span>
                </div>
                <h3 class="text-2xl text-gray-900 font-bold mb-4 dark:text-white">
                  德国征服攻略
                </h3>
                <p class="text-gray-600 leading-relaxed mb-6 dark:text-gray-300">
                  从波兰闪电战到莫斯科城下掌握纳粹德国的完整征服策略
                </p>
                <NuxtLink
                  to="/guides/nations/germany"
                  class="text-white font-semibold px-6 py-3 text-center rounded-lg w-full inline-block shadow-lg transform transition-all duration-200 from-gray-900 to-black bg-gradient-to-r hover:shadow-xl hover:scale-105 dark:from-gray-600 dark:to-gray-800"
                >
                  🗡️ 开始征服之路
                </NuxtLink>
              </div>
            </div>
          </div>

          <!-- USA Economic Power -->
          <div class="group relative">
            <!-- Background glow effect -->
            <div class="rounded-2xl opacity-0 scale-105 transform transition-all duration-500 inset-0 absolute from-blue-100 to-purple-100 bg-gradient-to-br group-hover:opacity-30 -rotate-2 dark:from-blue-900 dark:to-purple-900" />

            <div class="p-8 border border-gray-200 rounded-2xl bg-white transform transition-all duration-500 relative dark:border-gray-600 dark:bg-gray-700 hover:shadow-2xl hover:-translate-y-2">
              <div class="text-center">
                <div class="text-7xl mb-6 transition-transform duration-300 group-hover:scale-110">
                  USA
                </div>
                <div class="mb-3">
                  <span class="text-xs text-blue-800 font-semibold px-3 py-1 rounded-full bg-blue-100 inline-block dark:text-blue-200 dark:bg-blue-900">
                    🌍 超级大国
                  </span>
                </div>
                <h3 class="text-2xl text-gray-900 font-bold mb-4 dark:text-white">
                  美国霸权攻略
                </h3>
                <p class="text-gray-600 leading-relaxed mb-6 dark:text-gray-300">
                  工业化的巅峰之作动员法案的完美运用与全球影响力扩展
                </p>
                <NuxtLink
                  to="/guides/nations/usa"
                  class="text-white font-semibold px-6 py-3 text-center rounded-lg w-full inline-block shadow-lg transform transition-all duration-200 from-blue-600 to-blue-700 bg-gradient-to-r hover:shadow-xl hover:scale-105 dark:from-blue-500 dark:to-blue-600"
                >
                  🌟 成为超级霸主
                </NuxtLink>
              </div>
            </div>
          </div>

          <!-- UK Naval Power -->
          <div class="group relative">
            <!-- Background glow effect -->
            <div class="rounded-2xl opacity-0 rotate-1 scale-105 transform transition-all duration-500 inset-0 absolute from-green-100 to-blue-100 bg-gradient-to-br group-hover:opacity-30 dark:from-green-900 dark:to-blue-900" />

            <div class="p-8 border border-gray-200 rounded-2xl bg-white transform transition-all duration-500 relative dark:border-gray-600 dark:bg-gray-700 hover:shadow-2xl hover:-translate-y-2">
              <div class="text-center">
                <div class="text-7xl mb-6 transition-transform duration-300 group-hover:scale-110">
                  UK
                </div>
                <div class="mb-3">
                  <span class="text-xs text-green-800 font-semibold px-3 py-1 rounded-full bg-green-100 inline-block dark:text-green-200 dark:bg-green-900">
                    ⚓ 皇家海军
                  </span>
                </div>
                <h3 class="text-2xl text-gray-900 font-bold mb-4 dark:text-white">
                  英国帝国攻略
                </h3>
                <p class="text-gray-600 leading-relaxed mb-6 dark:text-gray-300">
                  掌握日不落帝国的海军霸权与殖民地经营的终极策略
                </p>
                <NuxtLink
                  to="/guides/nations/uk"
                  class="text-white font-semibold px-6 py-3 text-center rounded-lg w-full inline-block shadow-lg transform transition-all duration-200 from-green-600 to-green-700 bg-gradient-to-r hover:shadow-xl hover:scale-105 dark:from-green-500 dark:to-green-600"
                >
                  ⚓ 统治七大洋
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Tips Section -->
    <section class="tips py-16">
      <div class="mx-auto px-4 pb-16 container">
        <h2 class="text-3xl text-gray-900 font-bold mb-12 text-center dark:text-gray-100 light:text-gray-900">
          💡 游戏技巧
        </h2>
        <div class="gap-6 grid md:grid-cols-2">
          <div class="p-6 border border-green-200 rounded-lg bg-green-50 dark:border-green-800 dark:bg-green-900/20">
            <h3 class="text-lg text-green-800 font-bold mb-3 dark:text-green-400">
              ✅ 新手必知
            </h3>
            <ul class="text-gray-700 space-y-2 dark:text-gray-300">
              <li>• 总是建国策树，意识形态影响国家发展</li>
              <li>• 保持工厂平衡，民用和军用工厂各半</li>
              <li>• 合理建造师团，步兵是游戏核心</li>
              <li>• 注意资源管理，不缺电很重要</li>
            </ul>
          </div>

          <div class="p-6 border border-orange-200 rounded-lg bg-orange-50 dark:border-orange-800 dark:bg-orange-900/20">
            <h3 class="text-lg text-orange-800 font-bold mb-3 dark:text-orange-400">
              ⚠️ 常见错误
            </h3>
            <ul class="text-gray-700 space-y-2 dark:text-gray-300">
              <li>• 别盲目宣战，时机很重要</li>
              <li>• 避免过早扩张，前期稳住后方</li>
              <li>• 别忽略空军，制空权至关重要</li>
              <li>• 不要低估补给问题</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
