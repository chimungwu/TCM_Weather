import React, { useState, useEffect } from 'react';
import { Sun, Wind } from 'lucide-react';
import { Lunar } from 'lunar-javascript';
import { getCurrentAndNextSolarTerm } from '../lib/solarTerms';
import { LIUQI_TERMS } from '../lib/liuqi';
import solarTerms from '../lib/solar_terms_2026.json';

export default function CurrentTimeInfo() {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setNow(new Date()), 60000); // Update every minute
    return () => clearInterval(timer);
  }, []);

  const lunar = Lunar.fromDate(now);
  
  // Custom Bazi logic: Zi hour (23:00-01:00)
  // Late Zi (23:00-00:00): Previous day's day pillar
  // Early Zi (00:00-01:00): Current day's day pillar
  let baziDate = now;
  if (now.getHours() >= 23) {
      baziDate = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 0, 0, 0);
  }
  const lunarForBazi = Lunar.fromDate(baziDate);
  const bazi = lunarForBazi.getBaZi();

  // Manually fix hour pillar for Zi hour (23:00-01:00)
  const hour = now.getHours();
  if (hour >= 23 || hour < 1) {
    const dayGan = bazi[2].charAt(0);
    const ziHourGan = {
      '甲': '甲', '己': '甲',
      '乙': '丙', '庚': '丙',
      '丙': '戊', '辛': '戊',
      '丁': '庚', '壬': '庚',
      '戊': '壬', '癸': '壬'
    }[dayGan] || '甲';
    bazi[3] = ziHourGan + '子';
  }
  
  const { currentTerm, nextTerm } = getCurrentAndNextSolarTerm(now);

  // Calculate Liuqi progress
  const nowMs = now.getTime();
  const terms = solarTerms.map(term => ({
    ...term,
    ts: new Date(term.datetime).getTime()
  })).sort((a, b) => a.ts - b.ts);

  const liuqiSteps = LIUQI_TERMS.map(step => {
    const term = terms.find(t => t.name === step.startTerm);
    return { ...step, startTs: term ? term.ts : 0 };
  });

  let currentIndex = 0;
  for (let i = 0; i < liuqiSteps.length; i++) {
    if (nowMs >= liuqiSteps[i].startTs) {
      currentIndex = i;
    } else {
      break;
    }
  }

  const currentStep = liuqiSteps[currentIndex];
  const nextStep = liuqiSteps[(currentIndex + 1) % 6];
  const stepDuration = nextStep.startTs - currentStep.startTs;
  const elapsed = nowMs - currentStep.startTs;
  const progress = Math.min(100, Math.max(0, (elapsed / stepDuration) * 100));

  const formatDate = (date: Date) => {
    return `${date.getFullYear()}年${date.getMonth() + 1}月${date.getDate()}日 ${date.getHours().toString().padStart(2, '0')}:${date.getMinutes().toString().padStart(2, '0')}`;
  };

  const formatDateShort = (ts: number) => {
    const date = new Date(ts);
    return `${date.getMonth() + 1}/${date.getDate()}`;
  };

  const formatDateStr = (date: Date) => {
    return `${date.getMonth() + 1}月${date.getDate()}日`;
  };

  const formatDateStrFull = (ts: number) => {
    const date = new Date(ts);
    return `${date.getMonth() + 1}/${date.getDate()}`;
  };

  const formatDateRange = (startTs: number, endTs: number) => {
    return `${formatDateShort(startTs)} - ${formatDateShort(endTs)}`;
  };

  const formatDateTimeStr = (datetime: string) => {
    const date = new Date(datetime);
    return `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, '0')}-${date.getDate().toString().padStart(2, '0')} ${date.getHours().toString().padStart(2, '0')}:${date.getMinutes().toString().padStart(2, '0')}`;
  };

  return (
    <section className="bg-parchment p-8 rounded-3xl border border-ink/10 shadow-sm">
      <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
        <Sun className="text-amber-600" /> 當前時間與節氣資訊
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 font-sans mb-6">
        <div className="p-4 bg-white/50 rounded-xl border border-ink/5">
          <div className="text-sm text-ink/60 mb-1">當前時間</div>
          <div className="text-lg font-bold text-ink">{formatDate(now)}</div>
        </div>
        <div className="p-4 bg-white/50 rounded-xl border border-ink/5">
          <div className="text-sm text-ink/60 mb-1">四柱八字</div>
          <div className="text-lg font-bold text-ink">{bazi[0]}年 {bazi[1]}月 {bazi[2]}日 {bazi[3]}時</div>
        </div>
        <div className="p-4 bg-white/50 rounded-xl border border-ink/5">
          <div className="text-sm text-ink/60 mb-1">目前節氣</div>
          <div className="text-lg font-bold text-ink">
            {currentTerm.name}（{formatDateTimeStr(currentTerm.datetime)} 起）
          </div>
        </div>
        <div className="p-4 bg-white/50 rounded-xl border border-ink/5">
          <div className="text-sm text-ink/60 mb-1">下一節氣</div>
          <div className="text-lg font-bold text-ink">
            {nextTerm.name}（{formatDateTimeStr(nextTerm.datetime)} 交會）
          </div>
        </div>
      </div>
      
      {/* Liuqi Progress Bar */}
      <div className="p-4 bg-teal-50 rounded-xl border border-teal-200 shadow-inner">
        <div className="flex justify-between items-center mb-2">
          <div className="flex items-center gap-2 font-bold text-ink">
            <Wind size={18} className="text-teal-800" />
            <span className="text-lg">{currentStep.name}：{currentStep.attribute}</span>
            <span className="text-sm font-normal text-ink/60">
              （{formatDateRange(currentStep.startTs, nextStep.startTs)}，涵蓋：{currentStep.coveredTerms.join('、')}）
            </span>
          </div>
          <span className="text-lg font-bold text-ink">{progress.toFixed(1)}%</span>
        </div>
        <div className="w-full bg-teal-100 rounded-full h-2">
          <div 
            className="bg-teal-600 h-2 rounded-full transition-all duration-500" 
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>
    </section>
  );
}
