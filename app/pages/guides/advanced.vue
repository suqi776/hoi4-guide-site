<script setup lang="ts">
// HOI4 Advanced Strategies Guide
</script>

<template>
  <div class="text-white py-16 bg-gray-900 min-h-screen transition-colors light:text-black dark:bg-gray-900 light:bg-gray-50">
    <div class="mx-auto px-4 max-w-4xl">
      <!-- Header -->
      <div class="mb-12">
        <h1 class="text-4xl text-red-500 font-bold mb-4 md:text-5xl dark:text-red-500 light:text-red-600">
          高级策略
        </h1>
        <p class="text-xl text-gray-600 mb-8 dark:text-gray-300 light:text-gray-600">
          深入探讨多人游戏、外交策略和游戏内各种玩法
        </p>

        <!-- Table of Contents -->
        <div class="p-6 border border-gray-200 rounded-lg bg-gray-100 dark:border-gray-700 light:border-gray-200 dark:bg-gray-800 light:bg-gray-100">
          <h2 class="text-lg text-gray-800 font-semibold mb-4 dark:text-gray-200 light:text-gray-800">
            章节导航
          </h2>
          <nav class="text-sm gap-2 grid md:grid-cols-2">
            <a href="#multiplayer" class="text-purple-600 transition-colors dark:text-purple-400 hover:text-purple-800 light:text-purple-600 dark:hover:text-purple-200 light:hover:text-purple-800">• 高级战争策略</a>
            <a href="#diplomacy" class="text-blue-600 transition-colors dark:text-blue-400 hover:text-blue-800 light:text-blue-600 dark:hover:text-blue-200 light:hover:text-blue-800">• 经济支配策略</a>
            <a href="#military" class="text-orange-600 transition-colors dark:text-orange-400 hover:text-orange-800 light:text-orange-600 dark:hover:text-orange-200 light:hover:text-orange-800">• 情报战与间谍活动</a>
            <a href="#economy" class="text-yellow-600 transition-colors dark:text-yellow-400 hover:text-yellow-800 light:text-yellow-600 dark:hover:text-yellow-200 light:hover:text-yellow-800">• 科技霸权之路</a>
            <a href="#research" class="text-cyan-600 transition-colors dark:text-cyan-400 hover:text-cyan-800 light:text-cyan-600 dark:hover:text-cyan-200 light:hover:text-cyan-800">• 末期决战与胜利之道</a>
            <a href="#mods" class="text-emerald-600 transition-colors dark:text-emerald-400 hover:text-emerald-800 light:text-emerald-600 dark:hover:text-emerald-200 light:hover:text-emerald-800">• Mods与顶级扩展</a>
            <a href="#meta" class="text-pink-600 transition-colors dark:text-pink-400 hover:text-pink-800 light:text-pink-600 dark:hover:text-pink-200 light:hover:text-pink-800">• 游戏优化与元机制</a>
          </nav>
        </div>
      </div>

      <!-- Advanced Topics -->
      <div class="space-y-12">
        <!-- Advanced War Strategies -->
        <section id="multiplayer" class="p-8 border border-gray-200 rounded-lg bg-white dark:border-gray-700 light:border-gray-200 dark:bg-gray-800 light:bg-white">
          <h2 class="text-2xl text-red-600 font-bold mb-6 dark:text-red-400 light:text-red-600">
            高级战争策略
          </h2>
          <div class="space-y-8">
            <!-- Blitzkrieg Tactics -->
            <div class="pl-6 border-l-4 border-yellow-500 dark:border-yellow-400 light:border-yellow-500">
              <h3 class="text-xl text-yellow-600 font-bold mb-4 dark:text-yellow-400 light:text-yellow-600">
                ⚡ 闪电战策略
              </h3>
              <div class="mb-4 p-4 rounded bg-gray-50 dark:bg-gray-700 light:bg-gray-50">
                <p class="text-gray-700 mb-3 dark:text-gray-300 light:text-gray-700">
                  <strong class="text-gray-900 dark:text-gray-100 light:text-gray-900">核心原理：</strong>
                  使用高度机动的装甲部队配合步兵和空军，快速突破敌方防线，挺进内陆切割补给线。
                </p>
                <div class="gap-4 grid md:grid-cols-2">
                  <div class="text-sm">
                    <strong class="text-green-600 dark:text-green-400 light:text-green-600">关键要素：</strong>
                    <ul class="text-gray-600 mt-1 space-y-1 dark:text-gray-400 light:text-gray-600">
                      <li>• 至少3-4个装甲师（坦克/摩托化混合）</li>
                      <li>• 空军掩护保证制空权</li>
                      <li>• 后勤油料充足</li>
                      <li>• 敌方防线薄弱点攻击</li>
                    </ul>
                  </div>
                  <div class="text-sm">
                    <strong class="text-blue-600 dark:text-blue-400 light:text-blue-600">执行要点：</strong>
                    <ul class="text-gray-600 mt-1 space-y-1 dark:text-gray-400 light:text-gray-600">
                      <li>• 突破后立即转向，包围敌军</li>
                      <li>• 优先摧毁指挥部和补给枢纽</li>
                      <li>• 避免在城市集群中恋战</li>
                      <li>• 跟进步兵巩固占领区</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <!-- Island Hopping -->
            <div class="pl-6 border-l-4 border-blue-500 dark:border-blue-400 light:border-blue-500">
              <h3 class="text-xl text-blue-600 font-bold mb-4 dark:text-blue-400 light:text-blue-600">
                🏝️ 岛屿跳跃战术
              </h3>
              <div class="p-4 rounded bg-gray-50 dark:bg-gray-700 light:bg-gray-50">
                <p class="text-gray-700 mb-3 dark:text-gray-300 light:text-gray-700">
                  <strong class="text-gray-900 dark:text-gray-100 light:text-gray-900">适用场景：</strong>
                  太平洋战场，日本vs美国/英国之间的岛链争夺战。
                </p>
                <div class="text-sm space-y-2">
                  <div>
                    <strong class="text-cyan-600 dark:text-cyan-400 light:text-cyan-600">战略优势：</strong>
                    <span class="text-gray-600 dark:text-gray-400 light:text-gray-600">避开正面舰队决战，通过海军基地逐步扩大控制范围。</span>
                  </div>
                  <div>
                    <strong class="text-orange-600 dark:text-orange-400 light:text-orange-600">关键战术：</strong>
                    <span class="text-gray-600 dark:text-gray-400 light:text-gray-600">占领机场后立即扩建为海军基地，利用舰队和空军封锁跳跃路径。</span>
                  </div>
                </div>
              </div>
            </div>

            <!-- Lend-Lease Exploitation -->
            <div class="pl-6 border-l-4 border-green-500 dark:border-green-400 light:border-green-500">
              <h3 class="text-xl text-green-600 font-bold mb-4 dark:text-green-400 light:text-green-600">
                🤝 租借法案优化
              </h3>
              <div class="p-4 rounded bg-gray-50 dark:bg-gray-700 light:bg-gray-50">
                <p class="text-gray-700 mb-3 dark:text-gray-300 light:text-gray-700">
                  <strong class="text-gray-900 dark:text-gray-100 light:text-gray-900">高级玩法：</strong>
                  作为美国或苏联，通过租借法案间接支援盟友，同时最大化自身利益。
                </p>
                <div class="text-sm">
                  <strong class="text-red-600 dark:text-red-400 light:text-red-600">专家技巧：</strong>
                  <ul class="text-gray-600 mt-2 space-y-1 dark:text-gray-400 light:text-gray-600">
                    <li>• 重点援助装备产能薄弱的部队，支持其进行牵制作战</li>
                    <li>• 通过租借获得军事通行权，直接参与欧洲或亚洲战场</li>
                    <li>• 用租借协议限制盟友的独立作战空间</li>
                    <li>• 租借战后转为贸易协定，继续维持影响力</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- Economic Domination -->
        <section id="diplomacy" class="p-8 border border-gray-200 rounded-lg bg-white dark:border-gray-700 light:border-gray-200 dark:bg-gray-800 light:bg-white">
          <h2 class="text-2xl text-purple-600 font-bold mb-6 dark:text-purple-400 light:text-purple-600">
            经济支配策略
          </h2>
          <div class="space-y-8">
            <!-- Production Prioritization -->
            <div class="gap-6 grid md:grid-cols-2">
              <div class="p-6 rounded-lg from-blue-50 to-cyan-50 bg-gradient-to-br dark:from-blue-900/20 dark:to-cyan-900/20 light:from-blue-50 light:to-cyan-50">
                <h3 class="text-lg text-cyan-700 font-bold mb-4 dark:text-cyan-300 light:text-cyan-700">
                  生产优先级
                </h3>
                <ol class="text-sm text-gray-700 space-y-2 dark:text-gray-300 light:text-gray-700">
                  <li class="flex items-start">
                    <span class="text-xs text-white font-bold mr-3 mt-0.5 rounded-full bg-cyan-600 flex h-5 w-5 items-center justify-center">1</span>
                    <span>民用工厂（90+）- 经济基础</span>
                  </li>
                  <li class="flex items-start">
                    <span class="text-xs text-white font-bold mr-3 mt-0.5 rounded-full bg-cyan-600 flex h-5 w-5 items-center justify-center">2</span>
                    <span>军用工厂（40+）- 装备产能</span>
                  </li>
                  <li class="flex items-start">
                    <span class="text-xs text-white font-bold mr-3 mt-0.5 rounded-full bg-cyan-600 flex h-5 w-5 items-center justify-center">3</span>
                    <span>步兵装备（持续生产）</span>
                  </li>
                  <li class="flex items-start">
                    <span class="text-xs text-white font-bold mr-3 mt-0.5 rounded-full bg-cyan-600 flex h-5 w-5 items-center justify-center">4</span>
                    <span>坦克与飞机（中期关键）</span>
                  </li>
                </ol>
              </div>
              <div class="p-6 rounded-lg from-green-50 to-teal-50 bg-gradient-to-br dark:from-green-900/20 dark:to-teal-900/20 light:from-green-50 light:to-teal-50">
                <h3 class="text-lg text-teal-700 font-bold mb-4 dark:text-teal-300 light:text-teal-700">
                  资源战略
                </h3>
                <div class="text-sm text-gray-700 space-y-3 dark:text-gray-300 light:text-gray-700">
                  <div class="flex items-center">
                    <span class="mr-3 rounded-full bg-yellow-500 h-3 w-3" />
                    <span><strong>石油：</strong> 主力舰队护卫运输线</span>
                  </div>
                  <div class="flex items-center">
                    <span class="mr-3 rounded-full bg-gray-600 h-3 w-3" />
                    <span><strong>铝：</strong> 优先占领瑞典并开发本土</span>
                  </div>
                  <div class="flex items-center">
                    <span class="mr-3 rounded-full bg-orange-600 h-3 w-3" />
                    <span><strong>橡胶：</strong> 荷兰东印度群岛必争之地</span>
                  </div>
                  <div class="flex items-center">
                    <span class="mr-3 rounded-full bg-red-600 h-3 w-3" />
                    <span><strong>铀：</strong> 末期原子弹竞赛的关键</span>
                  </div>
                </div>
              </div>
            </div>

            <!-- Trade Warfare -->
            <div class="pt-6 border-t border-gray-200 dark:border-gray-600 light:border-gray-200">
              <h3 class="text-xl text-red-600 font-bold mb-4 dark:text-red-400 light:text-red-600">
                贸易战与经济封锁
              </h3>
              <div class="p-4 border-l-4 border-red-400 rounded bg-red-50 dark:bg-red-900/20 light:bg-red-50">
                <strong class="text-red-600 dark:text-red-400 light:text-red-600">高级技巧：</strong>
                <ul class="text-sm text-gray-700 mt-2 space-y-1 dark:text-gray-300 light:text-gray-700">
                  <li>• 占领贸易枢纽如新加坡/苏伊士，全局切断对手资源进口</li>
                  <li>• 通过Embargo+Lend-Lease组合，间接控制盟友经济</li>
                  <li>• 优先干涉产能薄弱的国家，迫使其转入战略防御</li>
                  <li>• 保持自身贸易平衡，避免内需抑制生产扩张</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <!-- Intelligence Operations -->
        <section id="military" class="p-8 border border-gray-200 rounded-lg bg-white dark:border-gray-700 light:border-gray-200 dark:bg-gray-800 light:bg-white">
          <h2 class="text-2xl text-indigo-600 font-bold mb-6 dark:text-indigo-400 light:text-indigo-600">
            情报战与间谍活动
          </h2>
          <div class="space-y-6">
            <!-- Intelligence Priority -->
            <div class="gap-6 grid md:grid-cols-2">
              <div class="p-6 rounded-lg bg-indigo-50 dark:bg-indigo-900/20 light:bg-indigo-50">
                <h3 class="text-lg text-indigo-700 font-bold mb-3 dark:text-indigo-300 light:text-indigo-700">
                  情报优先目标
                </h3>
                <div class="text-sm text-gray-700 space-y-3 dark:text-gray-300 light:text-gray-700">
                  <div><strong class="text-red-600 dark:text-red-400 light:text-red-600">首要目标：</strong> 敌对超级大国</div>
                  <div><strong class="text-orange-600 dark:text-orange-400 light:text-orange-600">潜在威胁：</strong> 快速扩张的中等国家</div>
                  <div><strong class="text-yellow-600 dark:text-yellow-400 light:text-yellow-600">战略伙伴：</strong> 关键盟友协同作战</div>
                  <div><strong class="text-green-600 dark:text-green-400 light:text-green-600">科技窃取：</strong> 科技领先的对手</div>
                </div>
              </div>
              <div class="p-6 rounded-lg bg-violet-50 dark:bg-violet-900/20 light:bg-violet-50">
                <h3 class="text-lg text-violet-700 font-bold mb-3 dark:text-violet-300 light:text-violet-700">
                  间谍行动组合
                </h3>
                <div class="text-sm text-gray-700 space-y-3 dark:text-gray-300 light:text-gray-700">
                  <div class="flex items-center">
                    <span class="mr-2 rounded-full bg-red-500 h-2 w-2" />
                    <span>破坏行动+外交渗透</span>
                  </div>
                  <div class="flex items-center">
                    <span class="mr-2 rounded-full bg-blue-500 h-2 w-2" />
                    <span>科技窃取+宣传战</span>
                  </div>
                  <div class="flex items-center">
                    <span class="mr-2 rounded-full bg-green-500 h-2 w-2" />
                    <span>颠覆政府+渗透海军</span>
                  </div>
                  <div class="flex items-center">
                    <span class="mr-2 rounded-full bg-purple-500 h-2 w-2" />
                    <span>释放战俘+强化情报网</span>
                  </div>
                </div>
              </div>
            </div>

            <!-- Ideology Warfare -->
            <div class="pt-6 border-t border-gray-200 dark:border-gray-600 light:border-gray-200">
              <h3 class="text-xl text-yellow-600 font-bold mb-4 dark:text-yellow-400 light:text-yellow-600">
                意识形态战争
              </h3>
              <div class="p-4 rounded bg-yellow-50 dark:bg-yellow-900/20 light:bg-yellow-50">
                <p class="text-sm text-gray-700 mb-3 dark:text-gray-300 light:text-gray-700">
                  利用政治顾问和宣传战影响邻国政治倾向，发动共产党革命或法西斯政变。
                </p>
                <div class="text-xs text-gray-600 gap-3 grid dark:text-gray-400 light:text-gray-600 md:grid-cols-3">
                  <div class="p-2 text-center rounded bg-white dark:bg-gray-700 light:bg-white">
                    <div class="text-red-600 font-bold mb-1">
                      共产党
                    </div>
                    <div>苏联共产主义世界</div>
                  </div>
                  <div class="p-2 text-center rounded bg-white dark:bg-gray-700 light:bg-white">
                    <div class="text-blue-600 font-bold mb-1">
                      民主党
                    </div>
                    <div>美国民主联盟</div>
                  </div>
                  <div class="p-2 text-center rounded bg-white dark:bg-gray-700 light:bg-white">
                    <div class="text-black font-bold mb-1">
                      法西斯
                    </div>
                    <div>德国轴心帝国</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- Technological Supremacy -->
        <section id="economy" class="p-8 border border-gray-200 rounded-lg bg-white dark:border-gray-700 light:border-gray-200 dark:bg-gray-800 light:bg-white">
          <h2 class="text-2xl text-cyan-600 font-bold mb-6 dark:text-cyan-400 light:text-cyan-600">
            科技霸权之路
          </h2>
          <div class="space-y-6">
            <!-- Research Priorities by Era -->
            <div class="gap-6 grid md:grid-cols-3">
              <!-- Early Game -->
              <div class="p-4 rounded-lg from-green-50 to-emerald-50 bg-gradient-to-br dark:from-green-900/20 dark:to-emerald-900/20 light:from-green-50 light:to-emerald-50">
                <h3 class="text-lg text-emerald-700 font-bold mb-3 dark:text-emerald-300 light:text-emerald-700">
                  前期 (1936-1940)
                </h3>
                <ol class="text-sm text-gray-700 space-y-1 dark:text-gray-300 light:text-gray-700">
                  <li>1. 工业基础科技</li>
                  <li>2. 步兵武器升级</li>
                  <li>3. 经济理论</li>
                  <li>4. 基础军事理论</li>
                </ol>
              </div>

              <!-- Mid Game -->
              <div class="p-4 rounded-lg from-blue-50 to-cyan-50 bg-gradient-to-br dark:from-blue-900/20 dark:to-cyan-900/20 light:from-blue-50 light:to-cyan-50">
                <h3 class="text-lg text-cyan-700 font-bold mb-3 dark:text-cyan-300 light:text-cyan-700">
                  中期 (1940-1945)
                </h3>
                <ol class="text-sm text-gray-700 space-y-1 dark:text-gray-300 light:text-gray-700">
                  <li>1. 坦克装甲科技</li>
                  <li>2. 航空技术</li>
                  <li>3. 海军现代化</li>
                  <li>4. 火箭与导弹</li>
                </ol>
              </div>

              <!-- Late Game -->
              <div class="p-4 rounded-lg from-red-50 to-orange-50 bg-gradient-to-br dark:from-red-900/20 dark:to-orange-900/20 light:from-red-50 light:to-orange-50">
                <h3 class="text-lg text-red-700 font-bold mb-3 dark:text-red-300 light:text-red-700">
                  后期 (1945+)
                </h3>
                <ol class="text-sm text-gray-700 space-y-1 dark:text-gray-300 light:text-gray-700">
                  <li>1. 核技术</li>
                  <li>2. 计算机科技</li>
                  <li>3. 喷气机技术</li>
                  <li>4. 洲际导弹</li>
                </ol>
              </div>
            </div>

            <!-- Research Exploitation -->
            <div class="pt-6 border-t border-gray-200 dark:border-gray-600 light:border-gray-200">
              <h3 class="text-xl text-purple-600 font-bold mb-4 dark:text-purple-400 light:text-purple-600">
                科技窃取与研发优化
              </h3>
              <div class="p-4 rounded bg-purple-50 dark:bg-purple-900/20 light:bg-purple-50">
                <div class="text-sm text-gray-700 gap-4 grid dark:text-gray-300 light:text-gray-700 md:grid-cols-2">
                  <div>
                    <strong class="text-purple-600 dark:text-purple-400 light:text-purple-600">窃取策略：</strong>
                    <ul class="mt-2 space-y-1">
                      <li>• 优先盗取尖端科技（如核技术）</li>
                      <li>• 为盟友提供资源获取研究增益</li>
                      <li>• 占领科技发达城市加速进度</li>
                      <li>• 科技竞速中保持领先2代优势</li>
                    </ul>
                  </div>
                  <div>
                    <strong class="text-blue-600 dark:text-blue-400 light:text-blue-600">研发分工：</strong>
                    <ul class="mt-2 space-y-1">
                      <li>• 紧急项目保留给核心科技</li>
                      <li>• 共享研发节省资源和时间</li>
                      <li>• 理论科学优先于应用科技</li>
                      <li>• 保持至少3个研究槽同时运行</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- Endgame & Victory -->
        <section id="research" class="p-8 border border-gray-200 rounded-lg bg-white dark:border-gray-700 light:border-gray-200 dark:bg-gray-800 light:bg-white">
          <h2 class="text-2xl text-orange-600 font-bold mb-6 dark:text-orange-400 light:text-orange-600">
            末期决战与胜利之道
          </h2>
          <div class="space-y-6">
            <!-- Nuclear Strategy -->
            <div class="p-6 border-l-4 border-red-500 rounded-lg from-red-50 to-red-100 bg-gradient-to-r dark:from-red-900/20 dark:to-red-900/10 light:from-red-50 light:to-red-100">
              <h3 class="text-xl text-red-700 font-bold mb-4 dark:text-red-300 light:text-red-700">
                🏁 核时代战略
              </h3>
              <div class="gap-6 grid md:grid-cols-2">
                <div class="text-sm">
                  <strong class="text-red-600 dark:text-red-400 light:text-red-600">核威慑运用：</strong>
                  <ul class="text-gray-700 mt-2 space-y-1 dark:text-gray-300 light:text-gray-700">
                    <li>• 领先获取核弹震慑对手</li>
                    <li>• 外科手术式打击摧毁生产设施</li>
                    <li>• 保持二次打击能力避免绝望反击</li>
                    <li>• 核禁试条约下寻求外交解决</li>
                  </ul>
                </div>
                <div class="text-sm">
                  <strong class="text-yellow-600 dark:text-yellow-400 light:text-yellow-600">投送系统：</strong>
                  <ul class="text-gray-700 mt-2 space-y-1 dark:text-gray-300 light:text-gray-700">
                    <li>• 战略轰炸机：灵活精确打击</li>
                    <li>• 中程导弹：大规模威慑</li>
                    <li>• 洲际导弹：全球战略打击</li>
                    <li>• 核潜艇：隐秘二次打击</li>
                  </ul>
                </div>
              </div>
            </div>

            <!-- Victory Conditions -->
            <div class="gap-4 grid md:grid-cols-3">
              <div class="p-4 text-center rounded-lg bg-gray-50 dark:bg-gray-700 light:bg-gray-50">
                <h3 class="text-sm text-gray-900 font-bold mb-2 dark:text-gray-100 light:text-gray-900">
                  征服胜利
                </h3>
                <p class="text-xs text-gray-600 dark:text-gray-400 light:text-gray-600">
                  占领敌国核心省份或首都
                </p>
              </div>
              <div class="p-4 text-center rounded-lg bg-gray-50 dark:bg-gray-700 light:bg-gray-50">
                <h3 class="text-sm text-gray-900 font-bold mb-2 dark:text-gray-100 light:text-gray-900">
                  战争分数胜利
                </h3>
                <p class="text-xs text-gray-600 dark:text-gray-400 light:text-gray-600">
                  达到指定战争分数目标
                </p>
              </div>
              <div class="p-4 text-center rounded-lg bg-gray-50 dark:bg-gray-700 light:bg-gray-50">
                <h3 class="text-sm text-gray-900 font-bold mb-2 dark:text-gray-100 light:text-gray-900">
                  技术优势
                </h3>
                <p class="text-xs text-gray-600 dark:text-gray-400 light:text-gray-600">
                  领先对手2代以上科技
                </p>
              </div>
            </div>
          </div>
        </section>

        <!-- Mods and Enhancements -->
        <section id="mods" class="p-8 border border-gray-200 rounded-lg bg-white dark:border-gray-700 light:border-gray-200 dark:bg-gray-800 light:bg-white">
          <h2 class="text-2xl text-emerald-600 font-bold mb-6 dark:text-emerald-400 light:text-emerald-600">
            Mods与顶级扩展
          </h2>
          <div class="space-y-6">
            <div>
              <h3 class="text-xl text-emerald-400 font-semibold mb-3">
                推荐必装Mods
              </h3>
              <div class="gap-4 grid md:grid-cols-2">
                <div class="p-4 border border-emerald-200 rounded bg-emerald-50 dark:border-emerald-500/20 light:border-emerald-200 dark:bg-emerald-900/20 light:bg-emerald-50">
                  <h4 class="text-lg text-emerald-600 font-semibold mb-2 dark:text-emerald-400 light:text-emerald-600">
                    Animated WW2 Map
                  </h4>
                  <p class="text-sm text-gray-600 dark:text-gray-300 light:text-gray-600">
                    增强地图视觉效果，美化游戏界面。
                  </p>
                </div>
                <div class="p-4 border border-emerald-200 rounded bg-emerald-50 dark:border-emerald-500/20 light:border-emerald-200 dark:bg-emerald-900/20 light:bg-emerald-50">
                  <h4 class="text-lg text-emerald-600 font-semibold mb-2 dark:text-emerald-400 light:text-emerald-600">
                    Alternative World Wars
                  </h4>
                  <p class="text-sm text-gray-600 dark:text-gray-300 light:text-gray-600">
                    增加更多历史分支和玩法选项。
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 class="text-xl text-emerald-400 font-semibold mb-3">
                顶级内容Mod
              </h3>
              <ul class="text-gray-600 space-y-3 dark:text-gray-300 light:text-gray-600">
                <li class="flex items-start">
                  <span class="text-emerald-600 font-bold mr-3 dark:text-emerald-400 light:text-emerald-600">•</span>
                  <div>
                    <strong class="text-emerald-600 dark:text-emerald-400 light:text-emerald-600">East Asia Divided</strong> - 为亚洲玩家提供更多选择，包括中国、东南亚等地区的详细内容增强。
                  </div>
                </li>
                <li class="flex items-start">
                  <span class="text-emerald-600 font-bold mr-3 dark:text-emerald-400 light:text-emerald-600">•</span>
                  <div>
                    <strong class="text-emerald-600 dark:text-emerald-400 light:text-emerald-600">The Great War Redux</strong> - 深度重制一战前后的历史事件链。
                  </div>
                </li>
                <li class="flex items-start">
                  <span class="text-emerald-600 font-bold mr-3 dark:text-emerald-400 light:text-emerald-600">•</span>
                  <div>
                    <strong class="text-emerald-600 dark:text-emerald-400 light:text-emerald-600">Roads to War</strong> - 增加更多国家焦点，提供全新历史路径。
                  </div>
                </li>
              </ul>
            </div>

            <div class="p-4 border border-yellow-200 rounded bg-yellow-50 dark:border-yellow-500/20 light:border-yellow-200 dark:bg-yellow-900/20 light:bg-yellow-50">
              <strong class="text-yellow-600 dark:text-yellow-400 light:text-yellow-600">使用建议：</strong>
              <p class="text-sm text-gray-600 mt-1 dark:text-gray-300 light:text-gray-600">
                Mod数量过多可能导致兼容性问题和游戏稳定性下降。建议从核心美术和功能Mod开始，使用Paradox自己提出的Mod器管理器进行管理。
              </p>
            </div>
          </div>
        </section>

        <!-- Meta Game and Optimization -->
        <section id="meta" class="p-8 border border-gray-200 rounded-lg bg-white dark:border-gray-700 light:border-gray-200 dark:bg-gray-800 light:bg-white">
          <h2 class="text-2xl text-pink-400 font-bold mb-6 dark:text-pink-400 light:text-pink-500">
            游戏优化与元机制
          </h2>
          <div class="space-y-4">
            <div class="p-4 border border-pink-600 rounded bg-pink-100 dark:border-pink-500/20 light:border-pink-600 dark:bg-pink-900/20 light:bg-pink-100">
              <h3 class="text-lg text-pink-600 font-semibold mb-2 dark:text-pink-400 light:text-pink-600">
                Save/Load 机制
              </h3>
              <p class="text-gray-700 dark:text-gray-300 light:text-gray-700">
                合理利用存档加载功能，测试不同的国家焦点选择和技术研究路径。
                但请注意游戏设定：主要的游戏事件仍会保持一致。
              </p>
            </div>

            <div class="p-4 border border-indigo-600 rounded bg-indigo-100 dark:border-indigo-500/20 light:border-indigo-600 dark:bg-indigo-900/20 light:bg-indigo-100">
              <h3 class="text-lg text-indigo-600 font-semibold mb-2 dark:text-indigo-400 light:text-indigo-600">
                成就与挑战
              </h3>
              <p class="text-gray-700 dark:text-gray-300 light:text-gray-700">
                游戏提供了大量成就目标，有些成就需要特定玩法才能解锁。
                例如，火烧伦敦成就需要作为德国征服英国并轰炸伦敦。
              </p>
            </div>

            <div class="p-4 border border-red-600 rounded bg-red-100 dark:border-red-500/20 light:border-red-600 dark:bg-red-900/20 light:bg-red-100">
              <h3 class="text-lg text-red-600 font-semibold mb-2 dark:text-red-400 light:text-red-600">
                历史精确度考量
              </h3>
              <p class="text-gray-700 dark:text-gray-300 light:text-gray-700">
                Paradox强调历史准确性，但玩家仍可以在游戏中创造出各种"架空历史"。
                如何平衡历史与游戏乐趣是每个玩家需要考虑的问题。
              </p>
            </div>
          </div>
        </section>
      </div>

      <!-- Conclusion -->
      <section class="mt-12 p-8 text-center border border-red-600 rounded-lg from-red-900 to-red-800 bg-gradient-to-r">
        <h2 class="text-2xl text-white font-bold mb-4">
          成为战略大师
        </h2>
        <p class="text-gray-300 mx-auto mb-6 max-w-2xl">
          HOI4是一个深邃而复杂的战略游戏，真正的精通需要大量游戏时间和学习。
          记住，每一场战役都是全新的经历，没有唯一的正确答案，只有不断试错和改进的乐趣。
        </p>
        <div class="flex justify-center space-x-4">
          <NuxtLink to="/" class="text-lg font-semibold px-6 py-3 rounded-lg bg-red-600 transition-colors hover:bg-red-700">
            返回首页
          </NuxtLink>
          <NuxtLink to="/guides/basics" class="text-lg font-semibold px-6 py-3 border border-red-400 rounded-lg transition-colors hover:text-black hover:bg-red-400">
            重温基础
          </NuxtLink>
        </div>
      </section>
    </div>
  </div>
</template>
