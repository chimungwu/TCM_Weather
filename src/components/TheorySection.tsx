import React from 'react';
import { motion } from "motion/react";
import { 
  Book, 
  Compass, 
  Wind, 
  Activity, 
  Zap, 
  Sun, 
  CloudRain, 
  Thermometer, 
  ShieldAlert,
  ArrowRight
} from "lucide-react";

export default function TheorySection() {
  return (
    <div className="space-y-16 pb-20">
      {/* Hero Section */}
      <section className="text-center max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-block px-4 py-1.5 bg-cinnabar/10 text-cinnabar rounded-full text-sm font-bold mb-6"
        >
          學術導引 · Theory Guide
        </motion.div>
        <h2 className="text-4xl font-bold mb-6">探索「五運六氣」的奧秘</h2>
        <p className="text-lg leading-relaxed font-sans text-ink/70">
          五運六氣（簡稱「運氣」）是中醫預測氣候與疾病的核心理論。它將宇宙大氣的「能量屬性」與「氣候特徵」結合，揭示天人合一的律動。
        </p>
      </section>

      {/* New Section: Core Logic */}
      <section className="bg-parchment text-ink p-10 rounded-[3rem] shadow-xl border border-ink/5">
        <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
          <Book size={28} />
          核心邏輯：天人合一的動態平衡
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 font-sans mb-10">
          <div className="space-y-4">
            <h4 className="font-bold text-lg text-cinnabar">1. 氣候的週期性</h4>
            <p className="text-base text-ink/80 leading-relaxed">
              運氣學說認為，宇宙能量並非雜亂無章，而是遵循天干地支的規律，呈現出五年一小循環、六十年一大循環的週期性變化。
            </p>
          </div>
          <div className="space-y-4">
            <h4 className="font-bold text-lg text-jade">2. 運與氣的互動</h4>
            <p className="text-base text-ink/80 leading-relaxed">
              「運」是主導能量的「勢」，「氣」是表現氣候的「象」。兩者交織，決定了當年的氣候是偏熱、偏寒、偏濕或偏燥。
            </p>
          </div>
          <div className="space-y-4">
            <h4 className="font-bold text-lg text-blue-600">3. 臨床的預判性</h4>
            <p className="text-base text-ink/80 leading-relaxed">
              透過掌握運氣，醫者能預判當年容易流行的疾病類型，提前進行體質調理，實現「治未病」的最高境界。
            </p>
          </div>
        </div>
        <div className="text-center pt-6 border-t border-ink/10">
          <p className="text-sm text-ink/60 italic">
            註：五運六氣理論雖在學術界存在爭議，但其作為一種時序醫學的探索，對於理解氣候與疾病關聯仍具備重要的臨床指導意義。
          </p>
        </div>
      </section>

      {/* Section 1: Five Movements */}
      <section className="space-y-8">
        <div className="flex items-center gap-4 border-l-4 border-cinnabar pl-6">
          <div>
            <h3 className="text-2xl font-bold">一、 五運：大氣的「能量屬性」</h3>
            <p className="text-ink/50 font-sans">代表整年或特定時段的五行能量走向</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-parchment/50 p-8 rounded-3xl border border-ink/5 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-cinnabar/10 text-cinnabar rounded-2xl flex items-center justify-center mb-6">
              <Zap size={24} />
            </div>
            <h4 className="text-xl font-bold mb-4">大運 (中運)</h4>
            <p className="text-base text-ink/70 font-sans leading-relaxed mb-6">
              決定一整年的總基調。根據天干定，分為<strong>「太過」</strong>（能量強）與<strong>「不及」</strong>（能量弱）。
            </p>
            <div className="p-4 bg-parchment rounded-xl text-sm font-sans text-ink/60 italic border border-ink/5">
              例：甲年為土運太過，濕氣重；乙年為金運不及，燥氣化火。
            </div>
          </div>

          <div className="bg-parchment/50 p-8 rounded-3xl border border-ink/5 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-jade/10 text-jade rounded-2xl flex items-center justify-center mb-6">
              <Activity size={24} />
            </div>
            <h4 className="text-xl font-bold mb-4">主運</h4>
            <p className="text-base text-ink/70 font-sans leading-relaxed">
              每年固定、像四季一樣的規律。分為五步：木、火、土、金、水。每一步管 73 天又 5 刻，每年循環不變。
            </p>
          </div>

          <div className="bg-parchment/50 p-8 rounded-3xl border border-ink/5 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-blue-500/10 text-blue-500 rounded-2xl flex items-center justify-center mb-6">
              <Compass size={24} />
            </div>
            <h4 className="text-xl font-bold mb-4">客運</h4>
            <p className="text-base text-ink/70 font-sans leading-relaxed">
              每年「外加」的變動能量。同樣分為五步，但每年的起點（初運）會隨著大運而改變，體現年度差異。
            </p>
          </div>
        </div>
      </section>

      {/* Section 2: Six Qi */}
      <section className="space-y-8">
        <div className="flex items-center gap-4 border-l-4 border-jade pl-6">
          <div>
            <h3 className="text-2xl font-bold">二、 六氣：大氣的「氣候特徵」</h3>
            <p className="text-ink/50 font-sans">代表空間與季節的具體表現（風、寒、暑、濕、燥、火）</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-parchment/50 p-8 rounded-3xl border border-ink/5 shadow-sm">
            <h4 className="text-xl font-bold mb-6 flex items-center gap-2 text-ink">
              <Sun className="text-cinnabar" /> 主氣 (地表規律)
            </h4>
            <p className="text-base text-ink/70 font-sans mb-8">
              每年的固定節氣規律，反映地表氣候。分為六步，每步管 60 天又 87.5 刻：
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-ink/10 text-xs uppercase tracking-wider text-ink/50">
                    <th className="py-3 font-bold">步次</th>
                    <th className="py-3 font-bold">六氣名稱</th>
                    <th className="py-3 font-bold">對應時段</th>
                    <th className="py-3 font-bold">氣候特徵</th>
                  </tr>
                </thead>
                <tbody className="text-sm font-sans">
                  {[
                    { step: '初之氣', qi: '厥陰風木', time: '大寒 - 春分', desc: '風氣流行' },
                    { step: '二之氣', qi: '少陰君火', time: '春分 - 小滿', desc: '熱氣流行' },
                    { step: '三之氣', qi: '少陽相火', time: '小滿 - 大暑', desc: '暑氣流行' },
                    { step: '四之氣', qi: '太陰濕土', time: '大暑 - 秋分', desc: '濕氣流行' },
                    { step: '五之氣', qi: '陽明燥金', time: '秋分 - 小雪', desc: '燥氣流行' },
                    { step: '終之氣', qi: '太陽寒水', time: '小雪 - 大寒', desc: '寒氣流行' },
                  ].map((item, i) => (
                    <tr key={i} className="border-b border-ink/5 hover:bg-ink/5 transition-colors">
                      <td className="py-4 font-bold text-ink/60">{item.step}</td>
                      <td className="py-4 font-bold text-cinnabar text-base">{item.qi}</td>
                      <td className="py-4 text-ink/80">{item.time}</td>
                      <td className="py-4 text-ink/50 italic">{item.desc}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="bg-parchment/50 p-8 rounded-3xl border border-ink/5 shadow-sm">
            <h4 className="text-xl font-bold mb-6 flex items-center gap-2 text-blue-600">
              <Wind /> 客氣 (天上降臨)
            </h4>
            <p className="text-base text-ink/70 font-sans mb-8">
              每年「從天上降下來」的變動氣候，是運氣推算中最關鍵的動態資料。
            </p>
            <div className="space-y-6">
              <div className="flex gap-4 items-start">
                <div className="font-bold text-cinnabar text-lg shrink-0">司天：</div>
                <div className="text-base text-ink/80 font-sans leading-relaxed">管上半年的氣（對應地支，如子午年是少陰君火司天）。</div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="font-bold text-jade text-lg shrink-0">在泉：</div>
                <div className="text-base text-ink/80 font-sans leading-relaxed">管下半年的氣（與司天相對）。</div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="font-bold text-ink/40 text-lg shrink-0">間氣：</div>
                <div className="text-base text-ink/80 font-sans leading-relaxed">司天與在泉之間的四個過渡階段。</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Combination */}
      <section className="space-y-8">
        <div className="flex items-center gap-4 border-l-4 border-amber-500 pl-6">
          <div>
            <h3 className="text-2xl font-bold">三、 運氣結合：運氣合德的加乘效果</h3>
            <p className="text-ink/50 font-sans">當「運」與「氣」相遇，產生的化學反應與病機分析</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-amber-50 p-8 rounded-3xl border border-amber-200">
            <h4 className="text-xl font-bold mb-6 text-amber-900 flex items-center gap-2">
              <Zap size={20} /> 氣同化 (加成效果)
            </h4>
            <div className="space-y-6">
              <div className="bg-parchment/50 p-5 rounded-2xl shadow-sm border border-amber-200/50">
                <div className="font-bold text-amber-700 mb-2 text-sm">天符</div>
                <p className="text-sm text-ink/60 font-sans leading-relaxed">大運五行 = 司天五行。此年病氣較「暴」，變化劇烈。</p>
              </div>
              <div className="bg-parchment/50 p-5 rounded-2xl shadow-sm border border-amber-200/50">
                <div className="font-bold text-amber-700 mb-2 text-sm">歲會</div>
                <p className="text-sm text-ink/60 font-sans leading-relaxed">大運五行 = 歲支方位。此年氣候相對平穩。</p>
              </div>
              <div className="bg-parchment/50 p-5 rounded-2xl shadow-sm border border-amber-200/50">
                <div className="font-bold text-amber-700 mb-2 text-sm">同天符 / 同歲會</div>
                <p className="text-sm text-ink/60 font-sans leading-relaxed">大運與在泉的五行相符，加強下半年的能量特徵。</p>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 p-8 rounded-3xl border border-blue-200">
            <h4 className="text-xl font-bold mb-6 text-blue-900 flex items-center gap-2">
              <ShieldAlert size={20} /> 運氣生剋 (病機輕重)
            </h4>
            <div className="space-y-4">
              <div className="flex items-start gap-4 p-5 bg-parchment/50 rounded-2xl shadow-sm border border-blue-100">
                <div className="px-3 py-1 bg-jade/10 text-jade text-xs font-bold rounded-full">順化</div>
                <div>
                  <div className="font-bold text-base">氣生運 (天氣助身體)</div>
                  <p className="text-sm text-ink/50 font-sans mt-1">病勢通常較輕，易於康復。</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-5 bg-parchment/50 rounded-2xl shadow-sm border border-blue-100">
                <div className="px-3 py-1 bg-cinnabar/10 text-cinnabar text-xs font-bold rounded-full">天刑</div>
                <div>
                  <div className="font-bold text-base">氣剋運 (氣候壓制運)</div>
                  <p className="text-sm text-ink/50 font-sans mt-1">病勢通常較重，需嚴加防範。</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-5 bg-parchment/50 rounded-2xl shadow-sm border border-blue-100">
                <div className="px-3 py-1 bg-amber-500/10 text-amber-500 text-xs font-bold rounded-full">小逆</div>
                <div>
                  <div className="font-bold text-base">運生氣 (能量外洩)</div>
                  <p className="text-sm text-ink/50 font-sans mt-1">稍微不順，氣候與人體節律略有偏差。</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-5 bg-parchment/50 rounded-2xl shadow-sm border border-blue-100">
                <div className="px-3 py-1 bg-ink/10 text-ink text-xs font-bold rounded-full">不和</div>
                <div>
                  <div className="font-bold text-base">運剋氣 (運氣相搏)</div>
                  <p className="text-sm text-ink/50 font-sans mt-1">氣候與運勢衝突，容易出現反常現象。</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Advanced Warnings */}
      <section className="space-y-8">
        <div className="flex items-center gap-4 border-l-4 border-cinnabar pl-6">
          <div>
            <h3 className="text-2xl font-bold">四、 進階預警：五鬱與勝復</h3>
            <p className="text-ink/50 font-sans">當運氣失衡時，大自然自我調節的報復性機制</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-parchment/50 p-8 rounded-3xl border border-cinnabar/5 shadow-sm">
            <h4 className="text-xl font-bold mb-4 text-cinnabar flex items-center gap-2">
              <ShieldAlert size={20} /> 五鬱之發 (鬱極宜發)
            </h4>
            <p className="text-sm text-ink/70 font-sans leading-relaxed mb-6">
              當運氣受到壓制（如運被氣剋），能量會積聚。當壓制力減弱時，積聚的能量會「暴發」。
              核心治則：<strong>「鬱極宜發不宜鬱」</strong>。依據五行特性，採取達、發、奪、泄、折等不同疏通手法。
            </p>
          </div>

          <div className="bg-parchment/50 p-8 rounded-3xl border border-amber-100 shadow-sm">
            <h4 className="text-xl font-bold mb-4 text-amber-700 flex items-center gap-2">
              <Activity size={20} /> 勝復提醒 (動態平衡)
            </h4>
            <p className="text-sm text-ink/70 font-sans leading-relaxed mb-6">
              大自然的「報復機制」。若上半年（司天）氣候過於強盛（勝氣），下半年必會誘發對應的「復氣」進行報復性反彈。
              臨床提示：<strong>「開藥留有一線」</strong>，預防氣候劇烈切換導致的人體負擔。
            </p>
          </div>
        </div>
      </section>

      {/* Summary Callout */}
      <section className="bg-parchment p-10 rounded-[3rem] border-2 border-dashed border-ink/10 text-center">
        <h3 className="text-2xl font-bold mb-4">為什麼要學五運六氣？</h3>
        <p className="max-w-2xl mx-auto text-ink/60 font-sans leading-relaxed">
          掌握了運氣規律，醫者便能「先歲氣而後天時」，在疾病發生前預判趨勢，在診斷時洞察病機。這不僅是氣候學，更是中醫精準醫療的基石。
        </p>
      </section>
    </div>
  );
}
