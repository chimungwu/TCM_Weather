import React, { useState, useEffect } from 'react';
import { Sun } from 'lucide-react';
import { Lunar } from 'lunar-javascript';
import { getCurrentAndNextSolarTerm } from '../lib/solarTerms';

export default function CurrentTimeInfo() {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setNow(new Date()), 60000); // Update every minute
    return () => clearInterval(timer);
  }, []);

  const lunar = Lunar.fromDate(now);
  const bazi = lunar.getBaZi();
  
  const { currentTerm, nextTerm } = getCurrentAndNextSolarTerm(now);

  const formatDate = (date: Date) => {
    return `${date.getFullYear()}年${date.getMonth() + 1}月${date.getDate()}日 ${date.getHours().toString().padStart(2, '0')}:${date.getMinutes().toString().padStart(2, '0')}`;
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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 font-sans">
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
    </section>
  );
}
