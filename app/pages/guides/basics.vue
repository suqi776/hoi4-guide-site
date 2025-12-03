<script setup lang="ts">
// HOI4 Basics Guide
</script>

<template>
  <div class="text-white py-16 bg-gray-900 min-h-screen transition-colors light:text-black dark:bg-gray-900 light:bg-gray-50">
    <div class="mx-auto px-4 max-w-4xl">
      <!-- Header -->
      <div class="mb-12">
        <h1 class="text-4xl text-red-500 font-bold mb-4 md:text-5xl dark:text-red-500 light:text-red-600">
          新手教程
        </h1>
        <p class="text-xl text-gray-600 dark:text-gray-300 light:text-gray-600">
          从零开始掌握《钢铁雄心4》的基础游戏机制
        </p>
      </div>

      <!-- Content Sections -->
      <div class="space-y-12">
        <!-- Introduction -->
        <section class="p-8 border border-gray-200 rounded-lg bg-white dark:border-gray-700 light:border-gray-200 dark:bg-gray-800 light:bg-white">
          <h2 class="text-2xl text-red-500 font-bold mb-4 dark:text-red-400 light:text-red-500">
            游戏简介
          </h2>
          <p class="text-gray-600 leading-relaxed mb-4 dark:text-gray-300 light:text-gray-600">
            《钢铁雄心4》是一款由Paradox Interactive开发的历史战略游戏，设定在1936-1948年的二战时期。
            作为一名国家领袖，你需要管理经济、政治、军事和技术发展，在全球舞台上做出影响历史的决定。
          </p>
        </section>

        <!-- Game Modes -->
        <section class="p-8 border border-gray-200 rounded-lg bg-white dark:border-gray-700 light:border-gray-200 dark:bg-gray-800 light:bg-white">
          <h2 class="text-2xl text-red-500 font-bold mb-6 dark:text-red-400 light:text-red-500">
            游戏模式
          </h2>
          <div class="gap-6 grid md:grid-cols-2">
            <div class="p-6 rounded-lg bg-gray-50 dark:bg-gray-700 light:bg-gray-50">
              <h3 class="text-xl text-blue-600 font-semibold mb-3 dark:text-blue-400 light:text-blue-600">
                单人游戏
              </h3>
              <p class="text-gray-600 dark:text-gray-300 light:text-gray-600">
                扮演单个国家的领导者，制定国家发展战略，赢得世界大战的胜利。
              </p>
            </div>
            <div class="p-6 rounded-lg bg-gray-50 dark:bg-gray-700 light:bg-gray-50">
              <h3 class="text-xl text-blue-600 font-semibold mb-3 dark:text-blue-400 light:text-blue-600">
                多人游戏
              </h3>
              <p class="text-gray-600 dark:text-gray-300 light:text-gray-600">
                与朋友一起游玩，支持1-32名玩家合作或对抗模式。
              </p>
            </div>
          </div>
        </section>

        <!-- Core Mechanics -->
        <section class="p-8 border border-gray-200 rounded-lg bg-white dark:border-gray-700 light:border-gray-200 dark:bg-gray-800 light:bg-white">
          <h2 class="text-2xl text-red-500 font-bold mb-6 dark:text-red-400 light:text-red-500">
            核心机制
          </h2>
          <div class="space-y-6">
            <div>
              <h3 class="text-xl text-yellow-500 font-semibold mb-3 dark:text-yellow-400 light:text-yellow-500">
                国家焦点
              </h3>
              <p class="text-gray-600 mb-2 dark:text-gray-300 light:text-gray-600">
                国家焦点（National Focus）是国家发展的核心树形结构。通过完成焦点，你可以解锁新的单位、生产方式、政治方针和技术。
              </p>
              <div class="p-4 border-l-4 border-yellow-500 rounded bg-gray-50 dark:border-yellow-400 light:border-yellow-500 dark:bg-gray-700 light:bg-gray-50">
                <strong class="text-yellow-600 dark:text-yellow-400 light:text-yellow-600">提示：</strong> 早期的国家焦点通常涉及军队重整、生产扩张或外交选择，选择合适的焦点至关重要。
              </div>
            </div>
            <div>
              <h3 class="text-xl text-yellow-500 font-semibold mb-3 dark:text-yellow-400 light:text-yellow-500">
                生产与经济
              </h3>
              <p class="text-gray-600 mb-2 dark:text-gray-300 light:text-gray-600">
                管理工业产能（Civilian/ Military Factory）来生产各种装备。人力、石油、橡胶等资源是战争的命脉。
              </p>
              <div class="p-4 border-l-4 border-yellow-500 rounded bg-gray-50 dark:border-yellow-400 light:border-yellow-500 dark:bg-gray-700 light:bg-gray-50">
                <strong class="text-yellow-600 dark:text-yellow-400 light:text-yellow-600">提示：</strong> 合理的产能分配是胜利的关键：步兵装备、坦克、防空炮缺一不可。
              </div>
            </div>
            <div>
              <h3 class="text-xl text-yellow-500 font-semibold mb-3 dark:text-yellow-400 light:text-yellow-500">
                外交与战争
              </h3>
              <p class="text-gray-600 mb-2 dark:text-gray-300 light:text-gray-600">
                通过外交手段扩大影响力，也可以通过战争夺取领土。国际法和宣战理由会影响你的名声。
              </p>
              <div class="p-4 border-l-4 border-yellow-500 rounded bg-gray-50 dark:border-yellow-400 light:border-yellow-500 dark:bg-gray-700 light:bg-gray-50">
                <strong class="text-yellow-600 dark:text-yellow-400 light:text-yellow-600">提示：</strong> 选择合适的外交目标，不要同时树敌过多。
              </div>
            </div>
            <div>
              <h3 class="text-xl text-yellow-500 font-semibold mb-3 dark:text-yellow-400 light:text-yellow-500">
                科技研发
              </h3>
              <p class="text-gray-600 mb-2 dark:text-gray-300 light:text-gray-600">
                通过研究树改进你的军队、陆军和海军实力。技术优势往往是决定胜负的关键。
              </p>
              <div class="p-4 border-l-4 border-yellow-500 rounded bg-gray-50 dark:border-yellow-400 light:border-yellow-500 dark:bg-gray-700 light:bg-gray-50">
                <strong class="text-yellow-600 dark:text-yellow-400 light:text-yellow-600">提示：</strong> 卡在科技关口会严重影响你的发展速度。
              </div>
            </div>
          </div>
        </section>

        <!-- Army Management -->
        <section class="p-8 border border-gray-200 rounded-lg bg-white dark:border-gray-700 light:border-gray-200 dark:bg-gray-800 light:bg-white">
          <h2 class="text-2xl text-red-500 font-bold mb-6 dark:text-red-400 light:text-red-500">
            军队管理
          </h2>
          <div class="gap-6 grid md:grid-cols-3">
            <div class="p-4 rounded-lg bg-gray-50 dark:bg-gray-700 light:bg-gray-50">
              <h3 class="text-lg text-green-600 font-semibold mb-2 dark:text-green-400 light:text-green-600">
                陆军
              </h3>
              <p class="text-sm text-gray-600 dark:text-gray-300 light:text-gray-600">
                兵力动员、生产装备、野战建设
              </p>
            </div>
            <div class="p-4 rounded-lg bg-gray-50 dark:bg-gray-700 light:bg-gray-50">
              <h3 class="text-lg text-green-600 font-semibold mb-2 dark:text-green-400 light:text-green-600">
                海军
              </h3>
              <p class="text-sm text-gray-600 dark:text-gray-300 light:text-gray-600">
                舰队建设、海军基地、枢轴
              </p>
            </div>
            <div class="p-4 rounded-lg bg-gray-50 dark:bg-gray-700 light:bg-gray-50">
              <h3 class="text-lg text-green-600 font-semibold mb-2 dark:text-green-400 light:text-green-600">
                空军
              </h3>
              <p class="text-sm text-gray-600 dark:text-gray-300 light:text-gray-600">
                航空基地、飞机生产、空中支援
              </p>
            </div>
          </div>
        </section>

        <!-- Next Steps -->
        <section class="p-8 text-center border border-gray-200 rounded-lg bg-white dark:border-gray-700 light:border-gray-200 dark:bg-gray-800 light:bg-white">
          <h2 class="text-2xl text-red-500 font-bold mb-6 dark:text-red-400 light:text-red-500">
            下一步
          </h2>
          <p class="text-gray-600 mb-6 dark:text-gray-300 light:text-gray-600">
            掌握基础后，了解具体国家的攻略策略会让你事半功倍。
          </p>
          <NuxtLink
            to="/guides/nations"
            class="text-lg text-white font-semibold px-8 py-3 rounded-lg bg-red-600 transition-colors dark:bg-red-600 hover:bg-red-700 light:bg-red-500 dark:hover:bg-red-700 light:hover:bg-red-600"
          >
            继续：国家攻略 →
          </NuxtLink>
        </section>
      </div>
    </div>
  </div>
</template>
