
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

  const applications = mainSteps.map((main, i) => getAppText(main, guestSteps[i].movement));
  
  return { mainSteps: mainStepsData, guestSteps, applications };
};

export const getYunQiStrength = (daYun: string, siTian: string) => {
  const elements: Record<string, string> = {
    '厥陰風木': '木', '少陰君火': '火', '少陽相火': '火',
    '太陰濕土': '土', '陽明燥金': '金', '太陽寒水': '水'
  };
  const qiEl = elements[siTian];
  const genMap: Record<string, string> = { '木': '火', '火': '土', '土': '金', '金': '水', '水': '木' };
  const overcomeMap: Record<string, string> = { '木': '土', '土': '水', '水': '火', '火': '金', '金': '木' };

  if (genMap[daYun] === qiEl || overcomeMap[daYun] === qiEl) {
    return { type: '運盛氣衰', detail: '運生氣或運克氣，年度運勢主導。' };
  }
  if (genMap[qiEl] === daYun || overcomeMap[qiEl] === daYun) {
    return { type: '氣盛運衰', detail: '氣生運或氣克運，司天之氣主導。' };
  }
  return { type: '運氣平穩', detail: '運氣相合，氣候較為平和。' };
};

export const getCombinationType = (stem: string, branch: string, daYun: string, siTian: string, zaiQuan: string) => {
  const combinations: string[] = [];
  const stemIdx = STEMS.indexOf(stem);
  const isYang = stemIdx % 2 === 0;

  // 1. 天符：歲運 = 司天
  if (siTian.includes(daYun)) {
    combinations.push('天符');
  }

  // 2. 歲會：歲運屬性 = 歲支方位屬性
  const branchDirectionMap: Record<string, string> = {
    '子': '水', '丑': '土', '寅': '木', '卯': '木', '辰': '土', '巳': '火',
    '午': '火', '未': '土', '申': '金', '酉': '金', '戌': '土', '亥': '水'
  };
  if (branchDirectionMap[branch] === daYun) {
    combinations.push('歲會');
  }

  // 3. 同天符：陽年，歲運 = 在泉
  if (isYang && zaiQuan.includes(daYun)) {
    combinations.push('同天符');
  }

  // 4. 同歲會：陰年，歲運 = 在泉
  if (!isYang && zaiQuan.includes(daYun)) {
    combinations.push('同歲會');
  }

  // 5. 太乙天符：既是天符又是歲會
  if (combinations.includes('天符') && combinations.includes('歲會')) {
    combinations.push('太乙天符');
  }

  if (combinations.length === 0) {
    combinations.push('平氣');
  }

  return combinations;
};

export const getSanYinFangGuidance = (stem: string, isExcess: boolean) => {
  const movementMap: Record<string, string> = {
    '甲': '土', '己': '土', '乙': '金', '庚': '金', '丙': '水', '辛': '水', '丁': '木', '壬': '木', '戊': '火', '癸': '火'
  };
  const movement = movementMap[stem];
  
  const formulaMap: Record<string, { 
    excess: string; 
    deficiency: string; 
    logic: string;
    excessIngredients: string;
    deficiencyIngredients: string;
    excessMods: string;
    deficiencyMods: string;
  }> = {
    '木': { 
      excess: '敷和湯', deficiency: '委和湯', 
      logic: '調木氣之平。太過則抑其風，不及則助其生。',
      excessIngredients: '半夏、橘皮、茯苓、甘草、生薑、大棗',
      deficiencyIngredients: '白朮、茯苓、甘草、當歸、芍藥、熟地',
      excessMods: '眩暈欲仆者，加天麻、鉤藤；煩躁易怒者，加龍膽草、梔子。',
      deficiencyMods: '脅肋隱痛者，加柴胡、香附；視物模糊者，加枸杞子、菊花。'
    },
    '火': { 
      excess: '升明湯', deficiency: '伏明湯', 
      logic: '理火氣之序。太過則清其熱，不及則溫其神。',
      excessIngredients: '紫菀、遠志、甘草、白芍、山茱萸、生薑、大棗',
      deficiencyIngredients: '白朮、茯苓、甘草、當歸、芍藥、熟地',
      excessMods: '心煩不寐者，加酸棗仁、柏子仁；口舌生瘡者，加黃連、竹葉。',
      deficiencyMods: '心悸怔忡者，加人參、遠志；畏寒肢冷者，加肉桂、附子。'
    },
    '土': { 
      excess: '備化湯', deficiency: '卑監湯', 
      logic: '建中土之德。太過則化其濕，不及則培其本。',
      excessIngredients: '木瓜、茯苓、茯神、甘草、附子、乾薑、厚朴',
      deficiencyIngredients: '白朮、厚朴、茯苓、茯神、甘草、木瓜、附子',
      excessMods: '腹脹甚者，加大腹皮、砂仁；濕痰盛者，加半夏、陳皮。',
      deficiencyMods: '嘔吐泄瀉者，加砂仁、肉豆蔻；食慾不振者，加神曲、山楂。'
    },
    '金': { 
      excess: '審平湯', deficiency: '從革湯', 
      logic: '肅金氣之令。太過則潤其燥，不及則補其肺。',
      excessIngredients: '遠志、紫菀、天門冬、甘草、白芍、山茱萸',
      deficiencyIngredients: '白朮、茯苓、甘草、當歸、芍藥、熟地',
      excessMods: '咽乾口燥者，加麥門冬、玄參；皮膚瘙癢者，加蟬蛻、防風。',
      deficiencyMods: '咳嗽痰多者，加半夏、五味子；氣短乏力者，加人參、黃耆。'
    },
    '水': { 
      excess: '靜順湯', deficiency: '涸流湯', 
      logic: '安水氣之源。太過則溫其寒，不及則滋其源。',
      excessIngredients: '茯苓、茯神、甘草、乾薑、附子、牛膝、木瓜',
      deficiencyIngredients: '白朮、茯苓、甘草、當歸、芍藥、熟地',
      excessMods: '腰膝冷痛甚者，加肉桂、杜仲；水腫者，加澤瀉、豬苓。',
      deficiencyMods: '遺精滑泄者，加金櫻子、芡實；頭暈耳鳴者，加熟地、山藥。'
    }
  };

  const info = formulaMap[movement];
  return {
    formula: isExcess ? info.excess : info.deficiency,
    logic: info.logic,
    ingredients: isExcess ? info.excessIngredients : info.deficiencyIngredients,
    modifications: isExcess ? info.excessMods : info.deficiencyMods
  };
};
