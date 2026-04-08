
export interface StemBranch {
  stem: string;
  branch: string;
}

export const STEMS = ['甲', '乙', '丙', '丁', '戊', '己', '庚', '辛', '壬', '癸'];
export const BRANCHES = ['子', '丑', '寅', '卯', '辰', '巳', '午', '未', '申', '酉', '戌', '亥'];

export const MOVEMENTS = ['木', '火', '土', '金', '水'];
export const SIX_QI = [
  '厥陰風木', 
  '少陰君火', 
  '少陽相火', 
  '太陰濕土', 
  '陽明燥金', 
  '太陽寒水'
];

// 六氣次序：厥陰 -> 少陰 -> 太陰 -> 少陽 -> 陽明 -> 太陽
export const SIX_QI_ORDER = [
  '厥陰風木',
  '少陰君火',
  '太陰濕土',
  '少陽相火',
  '陽明燥金',
  '太陽寒水'
];

export const getStemBranch = (year: number): StemBranch => {
  // 2024 is 甲辰 (Stem index 0, Branch index 4)
  const offset = year - 2024;
  let stemIdx = (0 + offset) % 10;
  if (stemIdx < 0) stemIdx += 10;
  let branchIdx = (4 + offset) % 12;
  if (branchIdx < 0) branchIdx += 12;
  return { stem: STEMS[stemIdx], branch: BRANCHES[branchIdx] };
};

export const getDaYun = (stem: string): { movement: string; isExcess: boolean } => {
  const mapping: Record<string, string> = {
    '甲': '土', '己': '土',
    '乙': '金', '庚': '金',
    '丙': '水', '辛': '水',
    '丁': '木', '壬': '木',
    '戊': '火', '癸': '火'
  };
  const stemIdx = STEMS.indexOf(stem);
  return {
    movement: mapping[stem],
    isExcess: stemIdx % 2 === 0 // 陽年太過，陰年不及
  };
};

export const getSiTianZaiQuan = (branch: string) => {
  const mapping: Record<string, { siTian: string; zaiQuan: string }> = {
    '子': { siTian: '少陰君火', zaiQuan: '陽明燥金' },
    '午': { siTian: '少陰君火', zaiQuan: '陽明燥金' },
    '丑': { siTian: '太陰濕土', zaiQuan: '太陽寒水' },
    '未': { siTian: '太陰濕土', zaiQuan: '太陽寒水' },
    '寅': { siTian: '少陽相火', zaiQuan: '厥陰風木' },
    '申': { siTian: '少陽相火', zaiQuan: '厥陰風木' },
    '卯': { siTian: '陽明燥金', zaiQuan: '少陰君火' },
    '酉': { siTian: '陽明燥金', zaiQuan: '少陰君火' },
    '辰': { siTian: '太陽寒水', zaiQuan: '太陰濕土' },
    '戌': { siTian: '太陽寒水', zaiQuan: '太陰濕土' },
    '巳': { siTian: '厥陰風木', zaiQuan: '少陽相火' },
    '亥': { siTian: '厥陰風木', zaiQuan: '少陽相火' }
  };
  return mapping[branch];
};

export const getKeQiSteps = (siTian: string) => {
  const startIdx = SIX_QI_ORDER.indexOf(siTian);
  // 司天為第三步，推算六步客氣
  // 第一步 = (startIdx - 2 + 6) % 6
  const steps = [];
  for (let i = -2; i < 4; i++) {
    steps.push(SIX_QI_ORDER[(startIdx + i + 6) % 6]);
  }
  return steps;
};

export const ZHU_QI_STEPS = [
  '厥陰風木',
  '少陰君火',
  '少陽相火',
  '太陰濕土',
  '陽明燥金',
  '太陽寒水'
];

export const TIME_STEPS = [
  { name: '初之氣', term: '大寒', endTerm: '春分' },
  { name: '二之氣', term: '春分', endTerm: '小滿' },
  { name: '三之氣', term: '小滿', endTerm: '大暑' },
  { name: '四之氣', term: '大暑', endTerm: '秋分' },
  { name: '五之氣', term: '秋分', endTerm: '小雪' },
  { name: '終之氣', term: '小雪', endTerm: '大寒' }
];

// Simplified Solar Term Calculation (Approximation for 2000-2099)
const SOLAR_TERM_TABLE: Record<string, { baseDay: number; offset: number[] }> = {
  '大寒': { baseDay: 20.12, offset: [0, 0, 0, 0] },
  '立春': { baseDay: 3.87, offset: [0, 0, 0, 0] },
  '春分': { baseDay: 20.15, offset: [0, 0, 0, 0] },
  '小滿': { baseDay: 20.72, offset: [0, 0, 0, 0] },
  '大暑': { baseDay: 22.83, offset: [0, 0, 0, 0] },
  '秋分': { baseDay: 22.64, offset: [0, 0, 0, 0] },
  '小雪': { baseDay: 21.94, offset: [0, 0, 0, 0] },
  '冬至': { baseDay: 21.44, offset: [0, 0, 0, 0] },
  '立夏': { baseDay: 5.12, offset: [0, 0, 0, 0] },
  '立秋': { baseDay: 7.15, offset: [0, 0, 0, 0] },
  '立冬': { baseDay: 7.03, offset: [0, 0, 0, 0] },
};

export const getSolarTermDate = (year: number, term: string): string => {
  const config = SOLAR_TERM_TABLE[term];
  if (!config) return "未知";
  
  // Basic formula: Day = (Year % 100 * 0.2422 + BaseDay) - Int(Year % 100 / 4)
  const y = year % 100;
  const day = Math.floor((y * 0.2422 + config.baseDay) - Math.floor(y / 4));
  
  const monthMapping: Record<string, number> = {
    '大寒': 1, '立春': 2, '春分': 3, '立夏': 5, '小滿': 5, '大暑': 7, '立秋': 8, '秋分': 9, '立冬': 11, '小雪': 11, '冬至': 12
  };
  
  const month = monthMapping[term];
  return `${month}月${day}日`;
};

export const getYearlySteps = (year: number) => {
  return TIME_STEPS.map(step => {
    const startDate = getSolarTermDate(year, step.term);
    const endDate = getSolarTermDate(year, step.endTerm);
    return {
      ...step,
      dates: `${startDate} - ${endDate}`,
      startDate
    };
  });
};

export const getRelationshipDetail = (zhu: string, ke: string): { 
  status: '順' | '逆' | '和', 
  reason: string,
  isCompatible: boolean 
} => {
  if (zhu === ke) {
    return { status: '和', reason: '氣位相同，氣候較為平和。', isCompatible: true };
  }

  // Special Fire Cases
  if (ke === '少陰君火' && zhu === '少陽相火') {
    return { status: '順', reason: '君火加臨相火（子順母下），為順，但需防熱氣過亢。', isCompatible: true };
  }
  if (ke === '少陽相火' && zhu === '少陰君火') {
    return { status: '逆', reason: '相火加臨君火（子臨母上），為逆，氣候易見劇變。', isCompatible: false };
  }

  const elements: Record<string, string> = {
    '厥陰風木': '木',
    '少陰君火': '火',
    '少陽相火': '火',
    '太陰濕土': '土',
    '陽明燥金': '金',
    '太陽寒水': '水'
  };

  const zhuEl = elements[zhu];
  const keEl = elements[ke];

  const genMap: Record<string, string> = { '木': '火', '火': '土', '土': '金', '金': '水', '水': '木' };
  const overcomeMap: Record<string, string> = { '木': '土', '土': '水', '水': '火', '火': '金', '金': '木' };

  // 1. 主氣生客氣 (Ni)
  if (genMap[zhuEl] === keEl) {
    return { status: '逆', reason: '主氣生客氣（子臨母上），為逆。', isCompatible: false };
  }
  // 2. 客氣生主氣 (Shun)
  if (genMap[keEl] === zhuEl) {
    return { status: '順', reason: '客氣生主氣（子順母下），為順。', isCompatible: true };
  }
  // 3. 主氣克客氣 (Ni)
  if (overcomeMap[zhuEl] === keEl) {
    return { status: '逆', reason: '主氣克客氣，不相得，為逆。', isCompatible: false };
  }
  // 4. 客氣克主氣 (Shun)
  if (overcomeMap[keEl] === zhuEl) {
    return { status: '順', reason: '客氣克主氣，相得，為順。', isCompatible: true };
  }

  return { status: '和', reason: '氣候相對平穩。', isCompatible: true };
};

export const getSuWenGuidance = (qi: string) => {
  const mapping: Record<string, { principle: string; flavors: string }> = {
    '厥陰風木': { principle: '風淫所勝，平以辛涼，佐以苦甘，以甘緩之，以酸瀉之。', flavors: '辛、涼、苦、甘、酸' },
    '少陰君火': { principle: '熱淫所勝，制以鹹寒，佐以苦甘，以酸收之。', flavors: '鹹、寒、苦、甘、酸' },
    '太陰濕土': { principle: '濕淫所勝，助以苦熱，佐以酸淡，以苦燥之，以淡泄之。', flavors: '苦、熱、酸、淡' },
    '少陽相火': { principle: '火淫所勝，制以鹹冷，佐以苦甘，以酸收之，以苦發之，以鹹軟之。', flavors: '鹹、冷、苦、甘、酸' },
    '陽明燥金': { principle: '燥淫所勝，平以苦溫，佐以甘辛，以苦下之。', flavors: '苦、溫、甘、辛' },
    '太陽寒水': { principle: '寒淫所勝，治以甘熱，佐以苦辛，以鹹瀉之，以甘緩之，以苦堅之。', flavors: '甘、熱、苦、辛、鹹' }
  };
  return mapping[qi] || { principle: '詳見《素問·至真要大論》。', flavors: '五味調和' };
};

export const getMovementRelationship = (main: string, guest: string) => {
  if (main === guest) return { status: '同', label: '同氣', color: 'text-ink/40', icon: 'Equal' };
  
  const genMap: Record<string, string> = { '木': '火', '火': '土', '土': '金', '金': '水', '水': '木' };
  const overcomeMap: Record<string, string> = { '木': '土', '土': '水', '水': '火', '火': '金', '金': '木' };

  if (genMap[guest] === main) return { status: '順', label: '客生主', color: 'text-jade', icon: 'ArrowUpRight' };
  if (genMap[main] === guest) return { status: '洩', label: '主生客', color: 'text-blue-400', icon: 'ArrowDownRight' };
  if (overcomeMap[guest] === main) return { status: '逆', label: '客克主', color: 'text-cinnabar', icon: 'X' };
  if (overcomeMap[main] === guest) return { status: '和', label: '主克客', color: 'text-amber-500', icon: 'Check' };
  
  return { status: '和', label: '相平', color: 'text-ink/20', icon: 'Minus' };
};

export const getMovementSteps = (daYun: string, isExcess: boolean) => {
  // 主運固定：木 -> 火 -> 土 -> 金 -> 水 (角徵宮商羽)
  const mainSteps = ['木', '火', '土', '金', '水'];
  const tones = ['角', '徵', '宮', '商', '羽'];
  
  // 主運太少相間：由大運太過不及決定
  // 太過年：太角 -> 少徵 -> 太宮 -> 少商 -> 太羽
  // 不及年：少角 -> 太徵 -> 少宮 -> 太商 -> 少羽
  const mainStepsData = mainSteps.map((m, i) => {
    const isStepExcess = i % 2 === 0 ? isExcess : !isExcess;
    return {
      movement: m,
      isExcess: isStepExcess,
      label: (isStepExcess ? '太' : '少') + tones[i]
    };
  });

  // 客運：以歲運為初運，按五行相生順序，太少相間
  const startIdx = MOVEMENTS.indexOf(daYun);
  const guestSteps = [];
  for (let i = 0; i < 5; i++) {
    const movement = MOVEMENTS[(startIdx + i) % 5];
    const toneIdx = (startIdx + i) % 5;
    // 客運規律與大運一致：初運太則二運少...
    const isStepExcess = i % 2 === 0 ? isExcess : !isExcess;
    guestSteps.push({
      movement,
      isExcess: isStepExcess,
      label: (isStepExcess ? '太' : '少') + tones[toneIdx]
    });
  }
  
  const relationships = mainStepsData.map((m, i) => getMovementRelationship(m.movement, guestSteps[i].movement));
  
  const getAppText = (main: string, guest: string) => {
    if (main === guest) return '同氣相助，氣候特徵顯著。';
    
    const genMap: Record<string, string> = { '木': '火', '火': '土', '土': '金', '金': '水', '水': '木' };
    const overcomeMap: Record<string, string> = { '木': '土', '土': '水', '水': '火', '火': '金', '金': '木' };

    if (genMap[guest] === main) return '客生主，為「相得」，氣候平順。';
    if (genMap[main] === guest) return '主生客，為「相得」，氣候平順。';
    if (overcomeMap[guest] === main) return '客克主，為「不相得」，氣候多變。';
    if (overcomeMap[main] === guest) return '主克客，為「不相得」，氣候多變。';
    
    return '氣候相對平穩。';
  };

  const applications = mainStepsData.map((m, i) => getAppText(m.movement, guestSteps[i].movement));
  
  return { mainSteps: mainStepsData, guestSteps, relationships, applications };
};

export const getYunQiStrength = (stem: string, branch: string, daYun: string, siTian: string, zaiQuan: string) => {
  const elements: Record<string, string> = {
    '厥陰風木': '木', '少陰君火': '火', '少陽相火': '火',
    '太陰濕土': '土', '陽明燥金': '金', '太陽寒水': '水'
  };
  const qiEl = elements[siTian];
  const genMap: Record<string, string> = { '木': '火', '火': '土', '土': '金', '金': '水', '水': '木' };
  const overcomeMap: Record<string, string> = { '木': '土', '土': '水', '水': '火', '火': '金', '金': '木' };

  // 1. 判定生剋關係 (第一層)
  let relationship = '';
  let relDetail = '';
  
  if (overcomeMap[qiEl] === daYun) {
    relationship = '天刑 (氣克運)';
    relDetail = '司天之氣克歲運，氣候極度不穩，病苦劇烈，屬「大逆」。';
  } else if (overcomeMap[daYun] === qiEl) {
    relationship = '小逆 (運克氣)';
    relDetail = '歲運克司天之氣，雖有波動但影響稍輕。';
  } else if (genMap[qiEl] === daYun) {
    relationship = '順化 (氣生運)';
    relDetail = '司天之氣生歲運，氣候變化較為順應。';
  } else if (daYun === qiEl) {
    relationship = '天符 (運氣同)';
    relDetail = '歲運與司天五行相同，氣候特徵極強，發病極速。';
  } else {
    relationship = '運氣平衡';
    relDetail = '運與氣勢力平衡，氣候相對穩定。';
  }

  // 2. 判定特殊身分 (第二層)
  const combinations = getCombinationType(stem, branch, daYun, siTian, zaiQuan);
  const hasSpecialIdentity = combinations.some(c => ['歲會', '同天符', '同歲會', '太乙天符', '天符'].includes(c));

  // 3. 勢力對比結論 (第三層)
  let finalType = relationship;
  let finalDetail = '';

  if (hasSpecialIdentity) {
    finalType = `平氣之年 (${relationship})`;
    finalDetail = '異常盛衰被抵消，氣候趨向平和。';
  } else {
    finalDetail = '運氣依常規盛衰運行，需防氣候劇烈波動。';
  }

  const getTrendText = (qi: string, isFirstHalf: boolean) => {
    const period = isFirstHalf ? "上半年 (司天)" : "下半年 (在泉)";
    if (qi.includes('火')) return `${period}受火氣主導，氣候偏熱，需防暑熱、火淫之疾，宜清熱降火。`;
    if (qi.includes('水')) return `${period}受水氣主導，氣候偏寒，需防寒濕、水淫之疾，宜溫陽散寒。`;
    if (qi.includes('木')) return `${period}受木氣主導，風氣流行，需防風淫、肝木乘土，宜疏肝理脾。`;
    if (qi.includes('金')) return `${period}受金氣主導，氣候偏燥，需防燥淫、燥邪傷肺，宜潤燥滋陰。`;
    if (qi.includes('土')) return `${period}受土氣主導，濕氣瀰漫，需防濕淫、濕困脾土，宜苦燥化濕。`;
    return "";
  };

  const trend = `${getTrendText(siTian, true)} ${getTrendText(zaiQuan, false)} 醫者應參考「客主加臨」之微調，靈活處方。`;

  return { 
    type: finalType, 
    detail: finalDetail, 
    relDetail, // 額外提供具體的生剋細節
    trend,
    combinations 
  };
};

export const getCombinationType = (stem: string, branch: string, daYun: string, siTian: string, zaiQuan: string) => {
  const combinations: string[] = [];
  const stemIdx = STEMS.indexOf(stem);
  const isExcess = stemIdx % 2 === 0; // 太過為陽，不及為陰

  const elements: Record<string, string> = {
    '厥陰風木': '木', '少陰君火': '火', '少陽相火': '火',
    '太陰濕土': '土', '陽明燥金': '金', '太陽寒水': '水'
  };
  const siTianEl = elements[siTian];
  const zaiQuanEl = elements[zaiQuan];

  // 修正方位圖：子(水) 丑(土) 寅(木) 卯(木) 辰(土) 巳(火) 午(火) 未(土) 申(金) 酉(金) 戌(土) 亥(水)
  const correctedBranchMap: Record<string, string> = {
    '子': '水', '丑': '土', '寅': '木', '卯': '木', '辰': '土', '巳': '火',
    '午': '火', '未': '土', '申': '金', '酉': '金', '戌': '土', '亥': '水'
  };

  // 1. 天符：歲運 = 司天
  if (daYun === siTianEl) {
    combinations.push('天符');
  }

  // 2. 歲會：歲運屬性 = 歲支方位屬性
  if (correctedBranchMap[branch] === daYun) {
    combinations.push('歲會');
  }

  // 3. 同天符：
  // 標準定義：不及之運 (陰年) 且 歲運 = 在泉
  // 進階定義：如甲辰年，太過之運若與歲會、在泉同化，亦視為同類強化狀態
  if (daYun === zaiQuanEl) {
    if (!isExcess) {
      combinations.push('同天符');
    } else if (correctedBranchMap[branch] === daYun) {
      // 如甲辰年，土運太過遇辰土位(歲會)且在泉為土，視為同化強化
      combinations.push('同天符 (同化)');
    }
  }

  // 4. 同歲會：不及之運 (陰年) 且 歲運 = 年度地支方位
  if (!isExcess && correctedBranchMap[branch] === daYun) {
    combinations.push('同歲會');
  }

  // 5. 太乙天符：既是天符又是歲會
  if (combinations.includes('天符') && combinations.includes('歲會')) {
    combinations.push('太乙天符');
  }

  return combinations;
};

export const getPulseGuidance = (siTian: string, zaiQuan: string) => {
  const pulseMap: Record<string, { pulse: string; position: string; inverse: string }> = {
    '厥陰風木': { 
      pulse: '脈弦', 
      position: '應見於左手',
      inverse: '若見沉細或浮大而散，為逆。' 
    },
    '少陰君火': { 
      pulse: '脈大而浮', 
      position: '應見於右手',
      inverse: '若見沉細或弦緊，為逆。' 
    },
    '太陰濕土': { 
      pulse: '脈沉而緩', 
      position: '應見於右手',
      inverse: '若見弦急或浮大，為逆。' 
    },
    '少陽相火': { 
      pulse: '脈大而浮', 
      position: '應見於左手',
      inverse: '若見沉細或弦緊，為逆。' 
    },
    '陽明燥金': { 
      pulse: '脈短而濇', 
      position: '應見於左手',
      inverse: '若見洪大或滑數，為逆。' 
    },
    '太陽寒水': { 
      pulse: '脈沉而緊', 
      position: '應見於右手',
      inverse: '若見浮大或數，為逆。' 
    }
  };

  return {
    siTian: pulseMap[siTian],
    zaiQuan: pulseMap[zaiQuan]
  };
};

export const getSanYinFangGuidance = (stem: string, branch: string) => {
  const stemFormulaMap: Record<string, { name: string; ingredients: string; logic: string; mods: string }> = {
    '甲': { name: '附子山茱萸湯', ingredients: '附子、山茱萸、木瓜、熟地、乾薑、甘草', logic: '土運太過，濕氣盛。', mods: '濕腫腹瀉加蒼朮、茯苓；腎陽虛加肉桂。' },
    '己': { name: '白朮厚朴湯', ingredients: '白朮、厚朴、茯苓、甘草、陳皮、生薑', logic: '土運不及，風木乘土。', mods: '食慾差加山楂、神曲；木克土（脅痛）加柴胡、白芍。' },
    '丙': { name: '玄參升麻湯', ingredients: '玄參、升麻、犀角(可用水牛角代)、甘草、防風', logic: '水運太過，寒氣盛。', mods: '寒感重則減玄參、加乾薑；火鬱口瘡加黃連。' },
    '辛': { name: '地黃明目丹', ingredients: '熟地、山藥、山茱萸、澤瀉、茯苓、丹皮', logic: '水運不及，燥金乘水。', mods: '眼乾加枸杞；陰虛火旺加知母、黃柏。' },
    '戊': { name: '麥門冬湯', ingredients: '麥門冬、半夏、人參、甘草、粳米、大棗', logic: '火運太過，熱氣盛。', mods: '乾咳加川貝；心火旺加蓮子心、竹葉。' },
    '癸': { name: '黃耆茯神湯', ingredients: '黃耆、茯神、遠志、甘草、茯苓、人參', logic: '火運不及，寒水乘火。', mods: '心悸失眠加酸棗仁；氣虛乏力加人參。' },
    '庚': { name: '牛膝煎', ingredients: '牛膝、熟地、當歸、白芍、肉桂、杜仲', logic: '金運太過，燥氣盛。', mods: '關節僵硬加威靈仙；肺燥明顯加麥門冬。' },
    '乙': { name: '紫菀湯', ingredients: '紫菀、款冬花、百部、桔梗、甘草、白前', logic: '金運不及，火熱乘金。', mods: '久咳加款冬花；易感冒加防風、黃耆。' },
    '壬': { name: '苓朮湯', ingredients: '茯苓、白朮、厚朴、甘草、草豆蔻、生薑', logic: '木運太過，風氣盛。', mods: '肝氣逆加薄荷；腹痛急迫重用白芍。' },
    '丁': { name: '備化湯', ingredients: '木瓜、茯苓、甘草、附子、乾薑、厚朴', logic: '木運不及，燥金乘木。', mods: '肝血虛加當歸、熟地；燥金侵襲加桑葉。' }
  };

  const branchFormulaMap: Record<string, { name: string; ingredients: string; logic: string; mods: string }> = {
    '子': { name: '備化湯', ingredients: '木瓜、茯苓、甘草、附子、乾薑、厚朴', logic: '少陰君火司天。', mods: '高熱傷津加石膏；心煩不寐加梔子。' },
    '午': { name: '備化湯', ingredients: '木瓜、茯苓、甘草、附子、乾薑、厚朴', logic: '少陰君火司天。', mods: '高熱傷津加石膏；心煩不寐加梔子。' },
    '丑': { name: '靜順湯', ingredients: '茯苓、茯神、甘草、乾薑、附子、牛膝、木瓜', logic: '太陰濕土司天。', mods: '下肢水腫加澤瀉；濕阻中焦加砂仁、豆蔻。' },
    '未': { name: '靜順湯', ingredients: '茯苓、茯神、甘草、乾薑、附子、牛膝、木瓜', logic: '太陰濕土司天。', mods: '下肢水腫加澤瀉；濕阻中焦加砂仁、豆蔻。' },
    '寅': { name: '審平湯', ingredients: '遠志、紫菀、天門冬、甘草、白芍、山茱萸', logic: '少陽相火司天。', mods: '咽喉劇痛加射干；熱入營血加生地、丹皮。' },
    '申': { name: '審平湯', ingredients: '遠志、紫菀、天門冬、甘草、白芍、山茱萸', logic: '少陽相火司天。', mods: '咽喉劇痛加射干；熱入營血加生地、丹皮。' },
    '卯': { name: '推陳湯', ingredients: '大黃、枳殼、厚朴、甘草、芒硝', logic: '陽明燥金司天。', mods: '大便秘結加大黃；皮膚乾癢加蟬蛻、荊芥。' },
    '酉': { name: '推陳湯', ingredients: '大黃、枳殼、厚朴、甘草、芒硝', logic: '陽明燥金司天。', mods: '大便秘結加大黃；皮膚乾癢加蟬蛻、荊芥。' },
    '辰': { name: '正安湯', ingredients: '羌活、獨活、防風、甘草、附子、乾薑', logic: '太陽寒水司天。', mods: '骨節痠痛加羌活、獨活；寒疝腹痛加吳茱萸。' },
    '戌': { name: '正安湯', ingredients: '羌活、獨活、防風、甘草、附子、乾薑', logic: '太陽寒水司天。', mods: '骨節痠痛加羌活、獨活；寒疝腹痛加吳茱萸。' },
    '巳': { name: '正陽湯', ingredients: '天麻、鉤藤、全蠍、白僵蠶、甘草', logic: '厥陰風木司天。', mods: '頭暈目眩加天麻、鉤藤；風動抽搐加全蠍。' },
    '亥': { name: '正陽湯', ingredients: '天麻、鉤藤、全蠍、白僵蠶、甘草', logic: '厥陰風木司天。', mods: '頭暈目眩加天麻、鉤藤；風動抽搐加全蠍。' }
  };

  return {
    stem: stemFormulaMap[stem],
    branch: branchFormulaMap[branch]
  };
};
