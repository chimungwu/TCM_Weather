import React from 'react';
import { ScrollText, BookOpen, BrainCircuit } from "lucide-react";

const CLASSICS = [
  { 
    title: '《黃帝內經·素問》運氣七篇', 
    period: '戰國至漢', 
    desc: '運氣學說的源頭，系統論述了五運六氣的推算規律與天人感應。' 
  },
  { 
    title: '《三因極一病證方論》', 
    period: '宋代', 
    desc: '陳無擇所著，將運氣理論具體化為臨床方劑，是運氣方劑學的開山之作。' 
  },
  { 
    title: '《類經圖翼》', 
    period: '明代', 
    desc: '張景岳對運氣理論進行了圖解與深入解析，對於理解複雜的運氣規律極具價值。' 
  },
  { 
    title: '《素問病機氣宜保命集》', 
    period: '金代', 
    desc: '劉完素（河間）對運氣病機的臨床應用進行了極大的拓展，強調火熱之邪。' 
  },
  { 
    title: '《運氣易覽》', 
    period: '明代', 
    desc: '汪機將運氣推算簡化，適合初學者快速掌握運氣學說的推算方法。' 
  },
];

export default function ReferenceLibrary() {
  return (
    <div className="space-y-16">
      <section className="space-y-8">
        <div className="flex items-center gap-4 border-l-4 border-ink pl-6">
          <div>
            <h3 className="text-3xl font-bold">經典文獻：運氣學說的學術溯源</h3>
            <p className="text-ink/60 font-sans mt-2">探索運氣理論的歷史脈絡與臨床應用指南</p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 font-sans">
          {CLASSICS.map((work, i) => (
            <div key={i} className="bg-parchment p-6 rounded-2xl border border-ink/10 hover:border-ink/30 transition-all group">
              <BookOpen className="text-ink/20 group-hover:text-ink/40 mb-4 transition-colors" size={32} />
              <h5 className="font-bold text-lg mb-1">{work.title}</h5>
              <div className="text-xs text-ink/40 font-bold uppercase mb-3">{work.period}</div>
              <p className="text-sm text-ink/70 leading-relaxed">{work.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="bg-cinnabar/5 p-8 rounded-3xl border border-cinnabar/10">
        <div className="flex items-center gap-3 mb-6">
          <BrainCircuit className="text-cinnabar" />
          <h3 className="text-2xl font-bold">學術學習建議</h3>
        </div>
        <ul className="space-y-6 font-sans text-ink/80">
          <li className="flex gap-4 items-start">
            <span className="text-cinnabar font-bold text-lg">01.</span>
            <span className="text-base leading-relaxed"><strong>建立宏觀視野：</strong> 先讀《素問》運氣七篇，掌握天人感應的基礎理論，而非急於推算。</span>
          </li>
          <li className="flex gap-4 items-start">
            <span className="text-cinnabar font-bold text-lg">02.</span>
            <span className="text-base leading-relaxed"><strong>打好基礎：</strong> 熟練掌握十天干、十二地支的陰陽五行屬性，這是所有推算的基石。</span>
          </li>
          <li className="flex gap-4 items-start">
            <span className="text-cinnabar font-bold text-lg">03.</span>
            <span className="text-base leading-relaxed"><strong>臨床驗證：</strong> 將運氣理論與現代氣象數據、臨床病例結合，在實踐中體會「氣候」對人體臟腑的影響。</span>
          </li>
          <li className="flex gap-4 items-start">
            <span className="text-cinnabar font-bold text-lg">04.</span>
            <span className="text-base leading-relaxed"><strong>多維參照：</strong> 參考不同朝代醫家的註解，理解運氣學說在不同歷史時期的發展與應用側重。</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
