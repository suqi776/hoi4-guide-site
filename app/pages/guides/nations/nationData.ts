// HOI4 Nation Strategic Guides Data
// Independent data file for maintainable content management

export interface NationGuideSection {
  title: string
  content: {
    overview?: string[]
    strategies?: {
      name: string
      description: string
      focusPoints: { period: string, actions: string[] }[]
      features: string
    }[]
    basicInfo?: {
      name: string
      facts: string[]
    }
  }
}

export interface NationGuide {
  id: string
  flag: string
  fullName: string
  shortName: string
  description: string
  playstyle: string
  difficulty: string
  color: 'red' | 'blue' | 'orange'
  sections: Record<string, NationGuideSection>
}

// ============================================================================
// UNITED KINGDOM (UK) - Complete Strategy Guide
// ============================================================================

export const ukGuide: NationGuide = {
  id: 'uk',
  flag: '🇬🇧',
  fullName: '大英帝国',
  shortName: '英国',
  description: '强大的海军力量，帝国特典加成。主要挑战是管理庞大的殖民帝国和有限的陆军力量。',
  playstyle: '工业扩张 & 海军霸权',
  difficulty: '中高',
  color: 'blue',
  sections: {
    1: {
      title: '国策路线推荐',
      content: {
        overview: [
          '英国开局拥有14个军用工厂、34个民用工厂、19个海军船厂',
          '陆军分散在世界各地共36个师，装备缺员较严重',
          '核心人口约4500万，可以充分动员',
        ],
        strategies: [
          {
            name: '🏴‍☠️ 黑线（法西斯）路线 - 帝国扩张',
            description: '利用帝国联邦国策可以获得英联邦所有国家的核心，建设超大规模殖民帝国。路线分支较多，需要根据局势灵活调整。',
            focusPoints: [
              {
                period: '前期重点（1936-1938）',
                actions: [
                  '满世界找麻烦 - 外交罚值影响',
                  '扩张海军 - 海军上限+30%',
                  '扩张空军 - 空军上限+30%',
                  '清理敌人（海军） - 重巡建造',
                  '清理敌人（空军） - 战斗机建造',
                  '皇家卫队 - 陆军经验填充',
                  '不为苏区而战 - 西班牙内战效果',
                ],
              },
              {
                period: '中期帝国建设（1938-1941）',
                actions: [
                  '皇家海军改革 - 海军现代化时间',
                  '海空军测试计划 - 科研加速',
                  '工业革命前夕 - 民用工厂转换',
                  '工业革命 - 发展速度+5%',
                  '向印度开战 - 印度傀儡国',
                  '向苏联开战 - 南下路线',
                  '重建本地舰队 - 亚洲化海军',
                ],
              },
            ],
            features: '利用帝国联邦国策可以获得英联邦所有国家的核心，建设超大规模殖民帝国。路线分支较多，需要根据局势灵活调整。',
          },
          {
            name: '🇬🇧 蓝线（民主）路线 - 历史典范',
            description: '历史最准确的路线，丘吉尔上台后开放大量buff。张伯伦时期避免战争，丘吉尔时期全面动员。',
            focusPoints: [
              {
                period: '国策优先顺序',
                actions: [
                  '远东舰队 - 海军经验获取',
                  '皇家海军改革 - 建造速度+5%',
                  '张伯伦上台 - 避免早期战争',
                  '保卫捷克斯洛伐克 - 阿訇兴登堡号事件',
                  '绥靖政策 - 世仇值增加中立',
                  '全力备战 - 动员法解锁',
                  '丘吉尔上台 - 阶梯动员+政治顾问',
                  '联合王国的国会 - 招募领导人',
                  '不列颠之战 - 空军升级',
                  '医院船队 - 海军军事专家',
                  '本土舰队 - 最后一课',
                  '向美国靠拢 - 绑定美国经济',
                  '蓝鹰计划 - 装备援助机制',
                ],
              },
            ],
            features: '历史最准确的路线，丘吉尔上台后开放大量buff。张伯伦时期避免战争，丘吉尔时期全面动员。',
          },
        ],
      },
    },
  },
}

// ============================================================================
// GERMANY (DE) - Nazi Route Strategy
// ============================================================================

export const germanyGuide: NationGuide = {
  id: 'germany',
  flag: '🇩🇪',
  fullName: '德意志帝国',
  shortName: '德国',
  description: '闪电战战术，优秀的坦克和空军技术。周边敌对国家环绕，需要谨慎外交策略。',
  playstyle: '闪电战 & 工业扩张',
  difficulty: '偏高',
  color: 'red',
  sections: {
    1: {
      title: '国策路线推荐',
      content: {
        overview: [
          '納粹德國政治黨派：阿道夫·希特勒上台激活納粹黨群優勢',
          '開局國民精神包括：專政自由、軍國主義精神',
          '核心人口約7000萬，工業實力雄厚',
          '約翰內斯·布呂赫元帥及埃里希·萊德將軍作為開局陸軍統帥',
        ],
        strategies: [
          {
            name: '🔴 歷史性納粹路線 - 法西斯擴張',
            description: '歷史最準確再現，平均2-3年的國策週期。希特勒與共產黨人不共戴天。',
            focusPoints: [
              {
                period: '國策優先順序',
                actions: [
                  '如經過一個世紀的掙扎般 - 獲得新增黨派領導人',
                  '統一勞動體系 - 組織發展運作效率+5%',
                  '重新軍事化 - 獲得額外徵兵',
                  '目標：東風體制 - 德國歷史性坦克設計',
                  '與蘇聯締約 - 避免早期東線爭鬥',
                  '十字軍 - 師團規模大增',
                  '奧蒂曼計劃 - 打開宇宙大門！！！',
                ],
              },
            ],
            features: '歷史最準確再現，平均2-3年的國策週期。希特勒與共產黨人不共戴天。',
          },
          {
            name: '🔵 遠東授權路線 - 與日本結盟',
            description: '與日本合作。適合喜歡東亞發展的玩家。歷史性坦克設計帶來系列科技。',
            focusPoints: [
              {
                period: '建設重點',
                actions: [
                  '重整軍備 - 解鎖坦克營',
                  '統一勞動體系 - 組織發展運作效率+5%',
                  '重新軍事化 - 獲得額外徵兵',
                  '目標：東風體制',
                  '遠東授權 - 與日本同盟',
                  '最高醒覺時刻 - 準備蘇台德危機',
                  '與蘇聯承諾 - 避免東線戰爭',
                  '與義大利締約 - 軸心國陣營建立',
                  '十字軍 - 師團規模大增',
                  '第二裝甲師團 - 解放者軍團方案',
                  '新西部防線 - 西壁工事系統',
                ],
              },
            ],
            features: '與日本合作。適合喜歡東亞發展的玩家。歷史性坦克設計帶來系列科技。',
          },
        ],
      },
    },
  },
}

// ============================================================================
// FRANCE (FR) - Defensive Fortress
// ============================================================================

export const franceGuide: NationGuide = {
  id: 'france',
  flag: '🇫🇷',
  fullName: '法兰西共和国',
  shortName: '法国',
  description: '优秀的机动防御阵地系统，强大的地中海舰队。政治体系复杂，需要小心翼翼处理内部派系。',
  playstyle: '防御工事 & 地中海控制',
  difficulty: '中高',
  color: 'blue',
  sections: {
    1: {
      title: '国策路线推荐',
      content: {
        overview: [
          '法國開局擁有21個軍用工廠、55個民用工廠',
          '馬奇諾防線系統提供優異的防禦工事',
          '選擇性動員制度決定國家方向（議會派還是極權派）',
        ],
        strategies: [
          {
            name: '🔵 議會民主路線 - 艾德華·達拉第',
            description: '穩定發展，商業律師+按需動員，適合保守型玩家。',
            focusPoints: [
              {
                period: '國策優先順序',
                actions: [
                  '政治重整 - 國內安定',
                  '歷史軍隊重組 - 線列步兵到現代師團',
                  '工業攻勢 - 民生工廠轉軍工',
                  '在補鎔堡壘進行訓練 - 突擊軍師團',
                  '空氣部隊 - 獲得空中學派',
                  '地中海中立 - 外交彈性',
                  '與義大利擴展貿易 - 經濟聯繫',
                  '強化馬奇諾防線 - 國界城牆',
                  '軍隊重組 - 法蘭西合作戰',
                  '喬治斯·芒德爾 - 新政權上台',
                  '殖民帝國 - 東線控制',
                  '查理斯·戴高樂 - 自由法蘭西',
                ],
              },
            ],
            features: '穩定發展，商業律師+按需動員，適合保守型玩家。',
          },
        ],
      },
    },
  },
}

// ============================================================================
// UNITED STATES (USA) - Industrial Giant
// ============================================================================

export const usaGuide: NationGuide = {
  id: 'usa',
  flag: '🦅',
  fullName: '美利坚合众国',
  shortName: '美国',
  description: '巨大的工业潜力，二战后主宰世界。动员法体系决定了游戏节奏，重视盟友支持。',
  playstyle: '后发制人 & 空军轰炸',
  difficulty: '中',
  color: 'red',
  sections: {
    1: {
      title: '国策路线推荐',
      content: {
        overview: [
          '開局擁有22個軍用工廠、52個民用工廠',
          '資源極為豐富，但軍事基礎設施需要建設',
          '動員法決定參戰時機和國力調度',
        ],
        strategies: [
          {
            name: '🔵 孤立主義路線 - 先安內後攘外',
            description: '和平開局到全面動員的完整體驗。',
            focusPoints: [
              {
                period: '國策優先順序',
                actions: [
                  '訓記規範 - 獲得額外徵兵',
                  '工業議員 - 指揮官特點',
                  '人員配額 - 指揮官特點',
                  '召開華盛頓會議 - 特別會議',
                  '海岸巡防隊 - 海軍潛在力',
                  '8月計劃 - 軍事力量',
                  '徵兵法案 - 全面動員',
                  '生產法案 - 工業爆發',
                  '租借法案 - 資源封鎖',
                  '多艦隊 - 海軍部長',
                  '星座級 - 航母設計',
                  '蘭德-李租借法案 - 接收盟友援兵',
                ],
              },
            ],
            features: '和平開局到全面動員的完整體驗。',
          },
        ],
      },
    },
  },
}

// ============================================================================
// TEMPLATE FOR NEW NATIONS - Copy and Modify
// ============================================================================

// Template structure for adding new nation guides
export const templateGuide: NationGuide = {
  id: 'template',
  flag: '🏁',
  fullName: '模板国家',
  shortName: '模板',
  description: '国家描述...',
  playstyle: '玩法风格...',
  difficulty: '难度...',
  color: 'blue',
  sections: {
    1: {
      title: '国策路线推荐',
      content: {
        overview: [
          '开局基本情况...',
          '强项特色...',
          '挑战难点...',
        ],
        strategies: [
          {
            name: '🔴 路线名字1',
            description: '路线详细说明...',
            focusPoints: [
              {
                period: '时间段',
                actions: [
                  '具体行动1',
                  '具体行动2',
                  '具体行动3',
                ],
              },
            ],
            features: '路线特色说明...',
          },
          {
            name: '🔵 路线名字2',
            description: '路线详细说明...',
            focusPoints: [
              {
                period: '时间段',
                actions: [
                  '具体行动1',
                  '具体行动2',
                ],
              },
            ],
            features: '路线特色说明...',
          },
        ],
      },
    },
  },
}

// ============================================================================
// EXPORT ALL GUIDES
// ============================================================================

export const allNationGuides = {
  uk: ukGuide,
  germany: germanyGuide,
  france: franceGuide,
  usa: usaGuide,
  // Add more as you create them...
  italy: { id: 'italy', description: '意大利拥有地中海舰队和强大的殖民帝国野心。' } as any, // Placeholder
  japan: { id: 'japan', description: '日本拥有强大的海军和亚洲扩张战略。' } as any, // Placeholder
  ussr: { id: 'ussr', description: '苏联拥有庞大领土和工业潜力，擅长防御和反击。' } as any, // Placeholder
  china: { id: 'china', description: '中国拥有大量人力储备，专注于内战统一。' } as any, // Placeholder
  mongolia: { id: 'mongolia', description: '蒙古拥有骑兵优势，适合游牧征服玩法。' } as any, // Placeholder
}

// Export individual guides for direct import
export { ukGuide as default }
