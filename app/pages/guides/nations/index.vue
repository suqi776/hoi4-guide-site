<script setup lang="ts">
// HOI4 Nations Guide
</script>

<template>
  <div class="text-white py-16 bg-gray-900 min-h-screen transition-colors light:text-black dark:bg-gray-900 light:bg-gray-50">
    <div class="mx-auto px-4 max-w-4xl">
      <!-- Header -->
      <div class="mb-12">
        <h1 class="text-4xl text-red-500 font-bold mb-4 md:text-5xl dark:text-red-500 light:text-red-600">
          国家攻略
        </h1>
        <p class="text-xl text-gray-600 dark:text-gray-300 light:text-gray-600">
          各大阵营国家的详细发展策略和征服攻略
        </p>
      </div>

      <!-- Allied Nations -->
      <section class="mb-12">
        <h2 class="text-3xl text-blue-600 font-bold mb-8 pb-2 border-b border-blue-600 dark:text-blue-500 light:text-blue-600 dark:border-blue-500 light:border-blue-600">
          同盟国阵营 (Allies)
        </h2>
        <div class="gap-6 grid lg:grid-cols-3 md:grid-cols-2">
          <!-- UK -->
          <NuxtLink to="/guides/nations/uk" class="p-6 border border-gray-200 rounded-lg bg-white block transition-colors dark:border-gray-600 hover:border-blue-500 light:border-gray-200 dark:bg-gray-800 light:bg-white dark:hover:border-blue-400 light:hover:border-blue-600">
            <div class="mb-4 flex items-center">
              <div class="text-white font-bold mr-4 rounded-full bg-blue-600 flex h-12 w-12 items-center justify-center">
                🇬🇧
              </div>
              <h3 class="text-xl text-gray-900 font-bold dark:text-white light:text-gray-900">
                英国
              </h3>
            </div>
            <p class="text-gray-600 mb-4 dark:text-gray-300 light:text-gray-600">
              强大的海军力量，帝国特典加成。善于经营殖民地和外交联盟。
            </p>
            <div class="text-sm space-y-2">
              <div class="flex justify-between">
                <span class="text-yellow-600 dark:text-yellow-400 light:text-yellow-600">国家难度:</span>
                <span class="text-gray-600 dark:text-gray-300 light:text-gray-600">中高</span>
              </div>
              <div class="flex justify-between">
                <span class="text-yellow-600 dark:text-yellow-400 light:text-yellow-600">推荐玩法:</span>
                <span class="text-gray-600 dark:text-gray-300 light:text-gray-600">工业扩张</span>
              </div>
            </div>
            <div class="text-sm text-blue-600 font-semibold mt-4 dark:text-blue-400 light:text-blue-600">
              查看详细攻略 →
            </div>
          </NuxtLink>

          <!-- France -->
          <NuxtLink to="/guides/nations/france" class="p-6 border border-gray-200 rounded-lg bg-white block transition-colors dark:border-gray-600 hover:border-blue-500 light:border-gray-200 dark:bg-gray-800 light:bg-white dark:hover:border-blue-400 light:hover:border-blue-600">
            <div class="mb-4 flex items-center">
              <div class="text-white font-bold mr-4 rounded-full bg-blue-700 flex h-12 w-12 items-center justify-center">
                🇫🇷
              </div>
              <h3 class="text-xl text-gray-900 font-bold dark:text-white light:text-gray-900">
                法国
              </h3>
            </div>
            <p class="text-gray-600 mb-4 dark:text-gray-300 light:text-gray-600">
              地中海舰队，防守第一。但选民体系会导致内部分裂。
            </p>
            <div class="text-sm space-y-2">
              <div class="flex justify-between">
                <span class="text-yellow-600 dark:text-yellow-400 light:text-yellow-600">国家难度:</span>
                <span class="text-gray-600 dark:text-gray-300 light:text-gray-600">中高</span>
              </div>
              <div class="flex justify-between">
                <span class="text-yellow-600 dark:text-yellow-400 light:text-yellow-600">推荐玩法:</span>
                <span class="text-gray-600 dark:text-gray-300 light:text-gray-600">防御战争</span>
              </div>
            </div>
            <div class="text-sm text-blue-600 font-semibold mt-4 dark:text-blue-400 light:text-blue-600">
              查看详细攻略 →
            </div>
          </NuxtLink>

          <!-- USA -->
          <NuxtLink to="/guides/nations/usa" class="p-6 border border-gray-200 rounded-lg bg-white block transition-colors dark:border-gray-600 hover:border-blue-500 light:border-gray-200 dark:bg-gray-800 light:bg-white dark:hover:border-blue-400 light:hover:border-blue-600">
            <div class="mb-4 flex items-center">
              <div class="text-red-600 font-bold mr-4 rounded-full bg-white flex h-12 w-12 items-center justify-center" style="background: linear-gradient(to bottom, #3c3b6e 50%, #c0392b 50%);">
                🦅
              </div>
              <h3 class="text-xl text-gray-900 font-bold dark:text-white light:text-gray-900">
                美国
              </h3>
            </div>
            <p class="text-gray-600 mb-4 dark:text-gray-300 light:text-gray-600">
              巨大的工业潜力，二战后发力。重视动员法的选择。
            </p>
            <div class="text-sm space-y-2">
              <div class="flex justify-between">
                <span class="text-yellow-600 dark:text-yellow-400 light:text-yellow-600">国家难度:</span>
                <span class="text-gray-600 dark:text-gray-300 light:text-gray-600">中</span>
              </div>
              <div class="flex justify-between">
                <span class="text-yellow-600 dark:text-yellow-400 light:text-yellow-600">推荐玩法:</span>
                <span class="text-gray-600 dark:text-gray-300 light:text-gray-600">后发制人</span>
              </div>
            </div>
            <div class="text-sm text-blue-600 font-semibold mt-4 dark:text-blue-400 light:text-blue-600">
              查看详细攻略 →
            </div>
          </NuxtLink>
        </div>
      </section>

      <!-- Axis Nations -->
      <section class="mb-12">
        <h2 class="text-3xl text-red-500 font-bold mb-8 pb-2 border-b border-red-500 dark:text-red-500 light:text-red-600 dark:border-red-500 light:border-red-600">
          轴心国阵营 (Axis)
        </h2>
        <div class="gap-6 grid lg:grid-cols-3 md:grid-cols-2">
          <!-- Germany -->
          <NuxtLink to="/guides/nations/germany" class="p-6 border border-gray-200 rounded-lg bg-white block transition-colors dark:border-gray-600 hover:border-red-500 light:border-gray-200 dark:bg-gray-800 light:bg-white dark:hover:border-red-400 light:hover:border-red-600">
            <div class="mb-4 flex items-center">
              <div class="text-white font-bold mr-4 rounded-full bg-black flex h-12 w-12 items-center justify-center">
                🇩🇪
              </div>
              <h3 class="text-xl text-gray-900 font-bold dark:text-white light:text-gray-900">
                德国
              </h3>
            </div>
            <p class="text-gray-600 mb-4 dark:text-gray-300 light:text-gray-600">
              闪电战战术，优秀的坦克和空军技术。需要小心周边邻国。
            </p>
            <div class="text-sm space-y-2">
              <div class="flex justify-between">
                <span class="text-yellow-600 dark:text-yellow-400 light:text-yellow-600">国家难度:</span>
                <span class="text-gray-600 dark:text-gray-300 light:text-gray-600">偏高</span>
              </div>
              <div class="flex justify-between">
                <span class="text-yellow-600 dark:text-yellow-400 light:text-yellow-600">推荐玩法:</span>
                <span class="text-gray-600 dark:text-gray-300 light:text-gray-600">闪电战</span>
              </div>
            </div>
            <div class="text-sm text-red-600 font-semibold mt-4 dark:text-red-400 light:text-red-600">
              查看详细攻略 →
            </div>
          </NuxtLink>

          <!-- Italy -->
          <NuxtLink to="/guides/nations/italy" class="p-6 border border-gray-200 rounded-lg bg-white block transition-colors dark:border-gray-600 hover:border-red-500 light:border-gray-200 dark:bg-gray-800 light:bg-white dark:hover:border-red-400 light:hover:border-red-600">
            <div class="mb-4 flex items-center">
              <div class="text-white font-bold mr-4 rounded-full bg-green-600 flex h-12 w-12 items-center justify-center">
                🇮🇹
              </div>
              <h3 class="text-xl text-gray-900 font-bold dark:text-white light:text-gray-900">
                意大利
              </h3>
            </div>
            <p class="text-gray-600 mb-4 dark:text-gray-300 light:text-gray-600">
              地中海控制权，可靠的盟友。多丘陵地形适合防御战。
            </p>
            <div class="text-sm space-y-2">
              <div class="flex justify-between">
                <span class="text-yellow-600 dark:text-yellow-400 light:text-yellow-600">国家难度:</span>
                <span class="text-gray-600 dark:text-gray-300 light:text-gray-600">中</span>
              </div>
              <div class="flex justify-between">
                <span class="text-yellow-600 dark:text-yellow-400 light:text-yellow-600">推荐玩法:</span>
                <span class="text-gray-600 dark:text-gray-300 light:text-gray-600">地中海征服</span>
              </div>
            </div>
            <div class="text-sm text-red-600 font-semibold mt-4 dark:text-red-400 light:text-red-600">
              查看详细攻略 →
            </div>
          </NuxtLink>

          <!-- Japan -->
          <NuxtLink to="/guides/nations/japan" class="p-6 border border-gray-200 rounded-lg bg-white block transition-colors dark:border-gray-600 hover:border-red-500 light:border-gray-200 dark:bg-gray-800 light:bg-white dark:hover:border-red-400 light:hover:border-red-600">
            <div class="mb-4 flex items-center">
              <div class="text-white font-bold mr-4 rounded-full bg-red-600 flex h-12 w-12 items-center justify-center">
                🇯🇵
              </div>
              <h3 class="text-xl text-gray-900 font-bold dark:text-white light:text-gray-900">
                日本
              </h3>
            </div>
            <p class="text-gray-600 mb-4 dark:text-gray-300 light:text-gray-600">
              强大海军舰队，亚洲扩张。中国是最大挑战。
            </p>
            <div class="text-sm space-y-2">
              <div class="flex justify-between">
                <span class="text-yellow-600 dark:text-yellow-400 light:text-yellow-600">国家难度:</span>
                <span class="text-gray-600 dark:text-gray-300 light:text-gray-600">高</span>
              </div>
              <div class="flex justify-between">
                <span class="text-yellow-600 dark:text-yellow-400 light:text-yellow-600">推荐玩法:</span>
                <span class="text-gray-600 dark:text-gray-300 light:text-gray-600">亚洲攻略</span>
              </div>
            </div>
            <div class="text-sm text-red-600 font-semibold mt-4 dark:text-red-400 light:text-red-600">
              查看详细攻略 →
            </div>
          </NuxtLink>
        </div>
      </section>

      <!-- Comintern Nations -->
      <section class="mb-12">
        <h2 class="text-3xl text-orange-500 font-bold mb-8 pb-2 border-b border-orange-500 dark:text-orange-500 light:text-orange-600 dark:border-orange-500 light:border-orange-600">
          共产国际阵营 (Comintern)
        </h2>
        <div class="gap-6 grid lg:grid-cols-3 md:grid-cols-2">
          <!-- USSR -->
          <NuxtLink to="/guides/nations/ussr" class="p-6 border border-gray-200 rounded-lg bg-white block transition-colors dark:border-gray-600 hover:border-orange-500 light:border-gray-200 dark:bg-gray-800 light:bg-white dark:hover:border-orange-400 light:hover:border-orange-600">
            <div class="mb-4 flex items-center">
              <div class="text-white font-bold mr-4 rounded-full bg-red-700 flex h-12 w-12 items-center justify-center">
                🇷🇺
              </div>
              <h3 class="text-xl text-gray-900 font-bold dark:text-white light:text-gray-900">
                苏联
              </h3>
            </div>
            <p class="text-gray-600 mb-4 dark:text-gray-300 light:text-gray-600">
              庞大的领土，优秀的坦克生产。气候和地形会影响入侵。
            </p>
            <div class="text-sm space-y-2">
              <div class="flex justify-between">
                <span class="text-yellow-600 dark:text-yellow-400 light:text-yellow-600">国家难度:</span>
                <span class="text-gray-600 dark:text-gray-300 light:text-gray-600">高</span>
              </div>
              <div class="flex justify-between">
                <span class="text-yellow-600 dark:text-yellow-400 light:text-yellow-600">推荐玩法:</span>
                <span class="text-gray-600 dark:text-gray-300 light:text-gray-600">共产主义革命</span>
              </div>
            </div>
            <div class="text-sm text-orange-600 font-semibold mt-4 dark:text-orange-400 light:text-orange-600">
              查看详细攻略 →
            </div>
          </NuxtLink>

          <!-- China -->
          <NuxtLink to="/guides/nations/china" class="p-6 border border-gray-200 rounded-lg bg-white block transition-colors dark:border-gray-600 hover:border-orange-500 light:border-gray-200 dark:bg-gray-800 light:bg-white dark:hover:border-orange-400 light:hover:border-orange-600">
            <div class="mb-4 flex items-center">
              <div class="text-white font-bold mr-4 rounded-full bg-red-500 flex h-12 w-12 items-center justify-center">
                🇨🇳
              </div>
              <h3 class="text-xl text-gray-900 font-bold dark:text-white light:text-gray-900">
                中华民国
              </h3>
            </div>
            <p class="text-gray-600 mb-4 dark:text-gray-300 light:text-gray-600">
              大量人力储备，事件驱动剧情。工业基础弱，需要快速工业化。
            </p>
            <div class="text-sm space-y-2">
              <div class="flex justify-between">
                <span class="text-yellow-600 dark:text-yellow-400 light:text-yellow-600">国家难度:</span>
                <span class="text-gray-600 dark:text-gray-300 light:text-gray-600">偏低</span>
              </div>
              <div class="flex justify-between">
                <span class="text-yellow-600 dark:text-yellow-400 light:text-yellow-600">推荐玩法:</span>
                <span class="text-gray-600 dark:text-gray-300 light:text-gray-600">内战统一</span>
              </div>
            </div>
            <div class="text-sm text-orange-600 font-semibold mt-4 dark:text-orange-400 light:text-orange-600">
              查看详细攻略 →
            </div>
          </NuxtLink>

          <!-- Mongolia -->
          <NuxtLink to="/guides/nations/mongolia" class="p-6 border border-gray-200 rounded-lg bg-white block transition-colors dark:border-gray-600 hover:border-orange-500 light:border-gray-200 dark:bg-gray-800 light:bg-white dark:hover:border-orange-400 light:hover:border-orange-600">
            <div class="mb-4 flex items-center">
              <div class="text-white font-bold mr-4 rounded-full bg-blue-500 flex h-12 w-12 items-center justify-center">
                🇲🇳
              </div>
              <h3 class="text-xl text-gray-900 font-bold dark:text-white light:text-gray-900">
                蒙古
              </h3>
            </div>
            <p class="text-gray-600 mb-4 dark:text-gray-300 light:text-gray-600">
              骑兵优势，世界未征服空间多。需要借助他人之力。
            </p>
            <div class="text-sm space-y-2">
              <div class="flex justify-between">
                <span class="text-yellow-600 dark:text-yellow-400 light:text-yellow-600">国家难度:</span>
                <span class="text-gray-600 dark:text-gray-300 light:text-gray-600">高</span>
              </div>
              <div class="flex justify-between">
                <span class="text-yellow-600 dark:text-yellow-400 light:text-yellow-600">推荐玩法:</span>
                <span class="text-gray-600 dark:text-gray-300 light:text-gray-600">游牧征服</span>
              </div>
            </div>
            <div class="text-sm text-orange-600 font-semibold mt-4 dark:text-orange-400 light:text-orange-600">
              查看详细攻略 →
            </div>
          </NuxtLink>
        </div>
      </section>

      <!-- Strategy Tips -->
      <section class="mb-12 p-8 border border-gray-200 rounded-lg bg-white dark:border-gray-700 light:border-gray-200 dark:bg-gray-800 light:bg-white">
        <h2 class="text-2xl text-yellow-600 font-bold mb-6 dark:text-yellow-400 light:text-yellow-600">
          选择国家建议
        </h2>
        <div class="gap-8 grid md:grid-cols-2">
          <div>
            <h3 class="text-lg text-blue-600 font-semibold mb-3 dark:text-blue-400 light:text-blue-600">
              新手推荐
            </h3>
            <ul class="text-gray-600 space-y-2 dark:text-gray-300 light:text-gray-600">
              <li class="flex items-center">
                <span class="text-green-600 mr-2 dark:text-green-400 light:text-green-600">✓</span>中华民国：工业化之路相对简单
              </li>
              <li class="flex items-center">
                <span class="text-green-600 mr-2 dark:text-green-400 light:text-green-600">✓</span>德国：游戏设计最优目标
              </li>
              <li class="flex items-center">
                <span class="text-green-600 mr-2 dark:text-green-400 light:text-green-600">✓</span>英国：海军政策容易把握
              </li>
            </ul>
          </div>
          <div>
            <h3 class="text-lg text-orange-600 font-semibold mb-3 dark:text-orange-400 light:text-orange-600">
              高手挑战
            </h3>
            <ul class="text-gray-600 space-y-2 dark:text-gray-300 light:text-gray-600">
              <li class="flex items-center">
                <span class="text-red-600 mr-2 dark:text-red-400 light:text-red-600">⚠️</span>日本：亚洲战争复杂多变
              </li>
              <li class="flex items-center">
                <span class="text-red-600 mr-2 dark:text-red-400 light:text-red-600">⚠️</span>蒙古：地理位置极度不利
              </li>
              <li class="flex items-center">
                <span class="text-red-600 mr-2 dark:text-red-400 light:text-red-600">⚠️</span>法国：政治机制较复杂
              </li>
            </ul>
          </div>
        </div>
      </section>

      <!-- Next Steps -->
      <section class="p-8 text-center border border-gray-200 rounded-lg bg-white dark:border-gray-700 light:border-gray-200 dark:bg-gray-800 light:bg-white">
        <h2 class="text-2xl text-red-500 font-bold mb-6 dark:text-red-400 light:text-red-500">
          深入了解
        </h2>
        <p class="text-gray-600 mb-6 dark:text-gray-300 light:text-gray-600">
          学习了国家基础后，高级策略分析会让你成为真正的战略大师。
        </p>
        <NuxtLink
          to="/guides/advanced"
          class="text-lg text-white font-semibold px-8 py-3 rounded-lg bg-red-600 transition-colors dark:bg-red-600 hover:bg-red-700 light:bg-red-500 dark:hover:bg-red-700 light:hover:bg-red-600"
        >
          继续：高级策略 →
        </NuxtLink>
      </section>
    </div>
  </div>
</template>
