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
  ArrowRight,
  Scroll,
  Table,
  HeartPulse,
  LibraryBig
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
        <h2 className="text-3xl leading-snug font-bold mb-6">探索「五運六氣」的奧秘</h2>
        <p className="text-lg leading-relaxed font-sans text-ink/70">
          五運六氣（簡稱「運氣」）是中醫預測氣候與疾病的核心理論。它將宇宙大氣的「能量屬性」與「氣候特徵」結合，揭示天人合一的律動。
        </p>
      </section>

      {/* Current Time and BaZi Info */}
      <section className="bg-parchment p-8 rounded-3xl border border-ink/10 shadow-sm">
        <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
          <Sun className="text-amber-600" /> 當前時間與節氣資訊
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 font-sans">
          <div className="p-4 bg-white/50 rounded-xl border border-ink/5">
            <div className="text-sm text-ink/60 mb-1">當前時間</div>
            <div className="text-lg font-bold text-ink">2026年4月12日 07:14</div>
          </div>
          <div className="p-4 bg-white/50 rounded-xl border border-ink/5">
            <div className="text-sm text-ink/60 mb-1">四柱八字</div>
            <div className="text-lg font-bold text-ink">丙午年 壬辰月 丙午日 壬辰時</div>
          </div>
          <div className="p-4 bg-white/50 rounded-xl border border-ink/5">
            <div className="text-sm text-ink/60 mb-1">目前節氣</div>
            <div className="text-lg font-bold text-ink">清明 (至 4月20日 04:13)</div>
          </div>
          <div className="p-4 bg-white/50 rounded-xl border border-ink/5">
            <div className="text-sm text-ink/60 mb-1">下一個節氣</div>
            <div className="text-lg font-bold text-ink">穀雨 (4月20日 04:13 交會)</div>
          </div>
        </div>
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


      {/* New Section: Foundation of Calculation */}
      <section className="space-y-8">
        <div className="flex items-center gap-4 border-l-4 border-amber-600 pl-6">
          <div>
            <h3 className="text-2xl font-bold">推算基礎：干支化生</h3>
            <p className="text-ink/50 font-sans">理解運氣推算的兩大核心公式</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Ten Heavenly Stems -> Five Movements */}
          <div className="bg-parchment p-8 rounded-3xl border border-ink/10 shadow-sm relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
              <Zap size={120} />
            </div>
            <h4 className="text-xl font-bold mb-6 flex items-center gap-2">
              <Zap className="text-cinnabar" size={20} /> 天干化五運
            </h4>
            
            {/* Mnemonic Box */}
            <div className="mb-6 p-4 bg-cinnabar/5 rounded-2xl border border-cinnabar/10">
              <div className="text-[10px] uppercase tracking-widest font-bold text-cinnabar/60 mb-2 flex items-center gap-1">
                <Scroll size={12} /> 化運口訣
              </div>
              <p className="text-xl font-bold leading-relaxed tracking-widest text-ink/90">
                甲己化土乙庚金，<br/>
                丙辛化水丁壬木，<br/>
                戊癸化火十天干
              </p>
              <p className="text-[11px] text-ink/50 font-sans mt-2 leading-tight">
                （陽干主運太過，陰干主運不及：甲/己土、乙/庚金、丙/辛水、丁/壬木、戊/癸火）
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3 font-sans">
              {[
                { label: '甲己', target: '化土', color: 'text-amber-600' },
                { label: '乙庚', target: '化金', color: 'text-gray-500' },
                { label: '丙辛', target: '化水', color: 'text-blue-600' },
                { label: '丁壬', target: '化木', color: 'text-jade' },
                { label: '戊癸', target: '化火', color: 'text-cinnabar' },
              ].map((item, i) => (
                <div key={i} className="flex items-center justify-between p-3 bg-white/50 rounded-xl border border-ink/5">
                  <span className="font-bold text-ink/60">{item.label}</span>
                  <span className={`font-bold ${item.color}`}>{item.target}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Twelve Earthly Branches -> Six Qi */}
          <div className="bg-parchment p-8 rounded-3xl border border-ink/10 shadow-sm relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
              <Wind size={120} />
            </div>
            <h4 className="text-xl font-bold mb-6 flex items-center gap-2">
              <Wind className="text-jade" size={20} /> 地支化六氣
            </h4>

            {/* Mnemonic Box */}
            <div className="mb-6 p-4 bg-jade/5 rounded-2xl border border-jade/10">
              <div className="text-[10px] uppercase tracking-widest font-bold text-jade/60 mb-2 flex items-center gap-1">
                <Scroll size={12} /> 司天口訣
              </div>
              <div className="text-xl font-bold leading-relaxed tracking-widest text-ink/90 space-y-1">
                <p>子午少陰君火心，丑未太陰濕土臨</p>
                <p>寅申少陽相火旺，卯酉陽明燥金尋</p>
                <p>辰戌太陽寒水主，巳亥厥陰風木行</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 font-sans">
              {[
                { label: '子午', target: '少陰君火', color: 'text-cinnabar' },
                { label: '丑未', target: '太陰濕土', color: 'text-amber-600' },
                { label: '寅申', target: '少陽相火', color: 'text-orange-600' },
                { label: '卯酉', target: '陽明燥金', color: 'text-gray-500' },
                { label: '辰戌', target: '太陽寒水', color: 'text-blue-600' },
                { label: '巳亥', target: '厥陰風木', color: 'text-jade' },
              ].map((item, i) => (
                <div key={i} className="flex items-center justify-between p-3 bg-white/50 rounded-xl border border-ink/5">
                  <span className="font-bold text-ink/60">{item.label}</span>
                  <span className={`font-bold text-xs ${item.color}`}>{item.target}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* New Subsection: Three Yin and Three Yang Meanings */}
        <div className="bg-parchment p-8 rounded-3xl border border-ink/10 shadow-sm">
          <h4 className="text-xl font-bold mb-6 flex items-center gap-2 text-ink">
            <CloudRain className="text-blue-500" /> 三陰三陽的氣候含義
          </h4>
          <p className="text-sm text-ink/70 font-sans mb-8 leading-relaxed">
            「三陰三陽」不僅是經絡名稱，在運氣學中更代表了六種具體的氣候物理特徵與能量狀態。
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 font-sans">
            {[
              { name: '厥陰', type: '風', desc: '氣流動向', color: 'bg-jade/5 border-jade/20 text-jade' },
              { name: '少陰', type: '熱', desc: '溫度升高', color: 'bg-cinnabar/5 border-cinnabar/20 text-cinnabar' },
              { name: '太陰', type: '濕', desc: '濕度增加', color: 'bg-amber-500/5 border-amber-500/20 text-amber-600' },
              { name: '少陽', type: '火', desc: '熱極表現', color: 'bg-orange-500/5 border-orange-500/20 text-orange-600' },
              { name: '陽明', type: '燥', desc: '水分脫失', color: 'bg-gray-500/5 border-gray-500/20 text-gray-600' },
              { name: '太陽', type: '寒', desc: '溫度下降', color: 'bg-blue-600/5 border-blue-600/20 text-blue-600' },
            ].map((item, i) => (
              <div key={i} className={`p-4 rounded-2xl border ${item.color} text-center`}>
                <div className="text-lg font-bold mb-1">{item.name}</div>
                <div className="text-2xl font-black mb-2">{item.type}</div>
                <div className="text-[10px] font-sans opacity-70 uppercase tracking-tighter">{item.desc}</div>
              </div>
            ))}
          </div>
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
          <div className="bg-parchment p-8 rounded-3xl border border-ink/10 shadow-sm">
            <div className="w-12 h-12 bg-cinnabar/10 text-cinnabar rounded-2xl flex items-center justify-center mb-6">
              <Zap size={24} />
            </div>
            <h4 className="text-xl font-bold mb-4">大運 (中運)</h4>
            <p className="text-sm text-ink/80 font-sans leading-relaxed mb-6">
              <strong>推算：</strong>依據天干（甲己土、乙庚金、丙辛水、丁壬木、戊癸火）。<br/>
              <strong>氣候：</strong>決定年度總能量屬性（太過/不及）。<br/>
              <strong>影響：</strong>影響對應臟腑（肝、心、脾、肺、腎）的強弱。
            </p>
            <div className="p-4 bg-parchment border border-ink/10 rounded-xl text-xs font-sans text-ink/70 italic">
              例：甲年土運太過，濕氣重，易傷脾胃。
            </div>
          </div>

          <div className="bg-parchment p-8 rounded-3xl border border-ink/10 shadow-sm">
            <div className="w-12 h-12 bg-jade/10 text-jade rounded-2xl flex items-center justify-center mb-6">
              <Activity size={24} />
            </div>
            <h4 className="text-xl font-bold mb-4">主運</h4>
            <p className="text-sm text-ink/80 font-sans leading-relaxed">
              <strong>推算：</strong>每年固定，依五行相生（木火土金水）。<br/>
              <strong>氣候：</strong>反映季節性氣候變化。<br/>
              <strong>影響：</strong>人體隨四季更迭的生理適應。
            </p>
          </div>

          <div className="bg-parchment p-8 rounded-3xl border border-ink/10 shadow-sm">
            <div className="w-12 h-12 bg-blue-500/10 text-blue-500 rounded-2xl flex items-center justify-center mb-6">
              <Compass size={24} />
            </div>
            <h4 className="text-xl font-bold mb-4">客運</h4>
            <p className="text-sm text-ink/80 font-sans leading-relaxed">
              <strong>推算：</strong>依大運起點，隨年度變動。<br/>
              <strong>氣候：</strong>反映年度差異的變動能量。<br/>
              <strong>影響：</strong>人體對年度異常氣候的反應。
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
          <div className="bg-parchment p-8 rounded-3xl border border-ink/10 shadow-sm">
            <h4 className="text-xl font-bold mb-6 flex items-center gap-2 text-ink">
              <Sun className="text-cinnabar" /> 主氣 (地表規律)
            </h4>
            <p className="text-sm text-ink/80 font-sans mb-8">
              <strong>推算：</strong>每年固定，依節氣劃分。<br/>
              <strong>氣候：</strong>反映地表氣候規律。<br/>
              <strong>影響：</strong>人體隨節氣變化的生理節律。
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

          <div className="bg-parchment p-8 rounded-3xl border border-ink/10 shadow-sm">
            <h4 className="text-xl font-bold mb-6 flex items-center gap-2 text-blue-600">
              <Wind /> 客氣 (天上降臨)
            </h4>
            <p className="text-sm text-ink/80 font-sans mb-8">
              <strong>推算：</strong>依地支（司天/在泉）。<br/>
              <strong>氣候：</strong>年度變動氣候（風寒暑濕燥火）。<br/>
              <strong>影響：</strong>導致特定經絡、臟腑易受特定病邪侵襲。
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

      {/* New Section: 24 Solar Terms and Six Qi */}
      <section className="space-y-8">
        <div className="flex items-center gap-4 border-l-4 border-amber-600 pl-6">
          <div>
            <h3 className="text-2xl font-bold">節氣與運氣：時間與氣候的對應</h3>
            <p className="text-ink/50 font-sans">24節氣是運氣學說中劃分六步氣候的時間基準</p>
          </div>
        </div>

        <div className="bg-parchment p-8 rounded-3xl border border-ink/10 shadow-sm">
          <p className="text-sm text-ink/70 font-sans mb-8 leading-relaxed">
            24節氣反映了太陽運行對地球氣候的影響，運氣學說將其作為劃分「六步氣候」（初之氣至終之氣）的時間節點。每個氣候階段涵蓋 4 個節氣，形成一個完整的年度氣候循環。
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 font-sans mb-8">
            {[
              { season: '春季', terms: ['立春', '雨水', '驚蟄', '春分', '清明', '穀雨'] },
              { season: '夏季', terms: ['立夏', '小滿', '芒種', '夏至', '小暑', '大暑'] },
              { season: '秋季', terms: ['立秋', '處暑', '白露', '秋分', '寒露', '霜降'] },
              { season: '冬季', terms: ['立冬', '小雪', '大雪', '冬至', '小寒', '大寒'] },
            ].map((season, i) => (
              <div key={i} className="bg-white/50 p-6 rounded-2xl border border-ink/5">
                <h4 className="font-bold text-lg text-ink mb-4">{season.season}</h4>
                <div className="grid grid-cols-2 gap-2">
                  {season.terms.map((term, j) => (
                    <div key={j} className="text-sm text-ink/70 p-2 bg-white rounded-lg border border-ink/5 text-center">
                      {term}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse font-sans">
              <thead>
                <tr className="border-b border-ink/10 text-xs uppercase tracking-wider text-ink/50">
                  <th className="py-3 font-bold">六步氣候</th>
                  <th className="py-3 font-bold">對應節氣</th>
                  <th className="py-3 font-bold">氣候基調</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                {[
                  { step: '初之氣', terms: '大寒、立春、雨水、驚蟄', qi: '厥陰風木' },
                  { step: '二之氣', terms: '春分、清明、穀雨、立夏', qi: '少陰君火' },
                  { step: '三之氣', terms: '小滿、芒種、夏至、小暑', qi: '少陽相火' },
                  { step: '四之氣', terms: '大暑、立秋、處暑、白露', qi: '太陰濕土' },
                  { step: '五之氣', terms: '秋分、寒露、霜降、立冬', qi: '陽明燥金' },
                  { step: '終之氣', terms: '小雪、大雪、冬至、小寒', qi: '太陽寒水' },
                ].map((item, i) => (
                  <tr key={i} className="border-b border-ink/5 hover:bg-ink/5 transition-colors">
                    <td className="py-4 font-bold text-ink">{item.step}</td>
                    <td className="py-4 text-ink/80">{item.terms}</td>
                    <td className="py-4 text-cinnabar font-bold">{item.qi}</td>
                  </tr>
                ))}
              </tbody>
            </table>
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

        {/* New Subsection: Host-Guest Interaction */}
        <div className="bg-parchment p-8 rounded-3xl border border-ink/10 shadow-sm">
          <h4 className="text-xl font-bold mb-6 flex items-center gap-2 text-ink">
            <Activity className="text-jade" /> 主客加臨：順逆判斷
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 font-sans">
            <div className="space-y-4">
              <div className="p-5 bg-jade/5 rounded-2xl border border-jade/10">
                <h5 className="font-bold text-jade mb-2 flex items-center gap-2">
                  <ArrowRight size={16} /> 順：氣候較平和
                </h5>
                <ul className="text-sm text-ink/80 space-y-2 list-disc pl-4">
                  <li><strong>相生/相同：</strong>主客五行相生或相同。</li>
                  <li><strong>客勝主：</strong>客氣剋主氣（天氣勝地氣），稱為「君臣相得」，病勢較輕。</li>
                </ul>
              </div>
            </div>
            <div className="space-y-4">
              <div className="p-5 bg-cinnabar/5 rounded-2xl border border-cinnabar/10">
                <h5 className="font-bold text-cinnabar mb-2 flex items-center gap-2">
                  <ArrowRight size={16} /> 逆：氣候反常劇烈
                </h5>
                <ul className="text-sm text-ink/80 space-y-2 list-disc pl-4">
                  <li><strong>主勝客：</strong>主氣剋客氣（地氣反勝天氣），稱為「下剋上」，氣候衝突大，病勢通常較重。</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* New Subsection: Balanced Qi */}
        <div className="bg-parchment p-8 rounded-3xl border border-ink/10 shadow-sm">
          <h4 className="text-xl font-bold mb-6 flex items-center gap-2 text-ink">
            <Compass className="text-blue-500" /> 平氣之歲：平衡的美學
          </h4>
          <p className="text-sm text-ink/80 font-sans leading-relaxed mb-6">
            並非每年都是太過或不及。當運勢受到合理的制約或資助時，會轉化為「平氣」，此年氣候最為和諧。
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 bg-white/50 rounded-xl border border-ink/5 text-sm">
              <span className="font-bold text-ink">運太過而受抑：</span> 如木運太過但司天為金（金剋木）。
            </div>
            <div className="p-4 bg-white/50 rounded-xl border border-ink/5 text-sm">
              <span className="font-bold text-ink">運不及而得助：</span> 如木運不及但歲支為卯（卯屬木）。
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-amber-50 p-8 rounded-3xl border border-amber-200">
            <h4 className="text-xl font-bold mb-6 text-amber-900 flex items-center gap-2">
              <Zap size={20} /> 氣同化 (加成效果)
            </h4>
            <div className="space-y-6">
              <div className="bg-parchment p-5 rounded-2xl shadow-sm border border-amber-200">
                <div className="font-bold text-amber-800 mb-2 text-sm">天符</div>
                <p className="text-sm text-ink/80 font-sans leading-relaxed">大運五行 = 司天五行。此年病氣較「暴」，變化劇烈。</p>
              </div>
              <div className="bg-parchment p-5 rounded-2xl shadow-sm border border-amber-200">
                <div className="font-bold text-amber-800 mb-2 text-sm">歲會</div>
                <p className="text-sm text-ink/80 font-sans leading-relaxed">大運五行 = 歲支方位。此年氣候相對平穩。</p>
              </div>
              <div className="bg-parchment p-5 rounded-2xl shadow-sm border border-amber-200">
                <div className="font-bold text-amber-800 mb-2 text-sm">同天符 / 同歲會</div>
                <p className="text-sm text-ink/80 font-sans leading-relaxed">大運與在泉的五行相符，加強下半年的能量特徵。</p>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 p-8 rounded-3xl border border-blue-200">
            <h4 className="text-xl font-bold mb-6 text-blue-900 flex items-center gap-2">
              <ShieldAlert size={20} /> 運氣生剋 (病機輕重)
            </h4>
            <div className="space-y-4">
              <div className="flex items-start gap-4 p-5 bg-parchment rounded-2xl shadow-sm border border-blue-200">
                <div className="px-3 py-1 bg-jade/10 text-jade text-xs font-bold rounded-full">順化</div>
                <div>
                  <div className="font-bold text-base text-ink">氣生運 (天氣助身體)</div>
                  <p className="text-sm text-ink/80 font-sans mt-1">病勢通常較輕，易於康復。</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-5 bg-parchment rounded-2xl shadow-sm border border-blue-200">
                <div className="px-3 py-1 bg-cinnabar/10 text-cinnabar text-xs font-bold rounded-full">天刑</div>
                <div>
                  <div className="font-bold text-base text-ink">氣剋運 (氣候壓制運)</div>
                  <p className="text-sm text-ink/80 font-sans mt-1">病勢通常較重，需嚴加防範。</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-5 bg-parchment rounded-2xl shadow-sm border border-blue-200">
                <div className="px-3 py-1 bg-amber-500/10 text-amber-600 text-xs font-bold rounded-full">小逆</div>
                <div>
                  <div className="font-bold text-base text-ink">運生氣 (能量外洩)</div>
                  <p className="text-sm text-ink/80 font-sans mt-1">稍微不順，氣候與人體節律略有偏差。</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-5 bg-parchment rounded-2xl shadow-sm border border-blue-200">
                <div className="px-3 py-1 bg-ink/10 text-ink text-xs font-bold rounded-full">不和</div>
                <div>
                  <div className="font-bold text-base text-ink">運剋氣 (運氣相搏)</div>
                  <p className="text-sm text-ink/80 font-sans mt-1">氣候與運勢衝突，容易出現反常現象。</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Subsection: Case Studies */}
      <section className="space-y-8">
        <div className="bg-parchment p-8 rounded-3xl border border-ink/20 shadow-sm">
          <h4 className="text-xl font-bold mb-6 text-ink flex items-center gap-2">
            <Book size={20} /> 案例分析：運氣組合如何影響當年
          </h4>
          <div className="space-y-6 font-sans">
            <div className="p-6 bg-parchment rounded-2xl border border-ink/10">
              <h5 className="font-bold text-lg text-cinnabar mb-2">案例一：天符年 (如戊午年)</h5>
              <p className="text-sm text-ink/80 leading-relaxed">
                <strong>組合：</strong>大運（火）與司天（火）五行相同。<br/>
                <strong>氣候：</strong>當年火氣極盛，氣候異常炎熱。<br/>
                <strong>疾病：</strong>易流行心火相關疾病（如心悸、失眠、瘡瘍），病勢發展迅速且猛烈。
              </p>
            </div>
            <div className="p-6 bg-parchment rounded-2xl border border-ink/10">
              <h5 className="font-bold text-lg text-jade mb-2">案例二：歲會年 (如丁卯年)</h5>
              <p className="text-sm text-ink/80 leading-relaxed">
                <strong>組合：</strong>大運（木）與歲支（卯木）方位五行相符。<br/>
                <strong>氣候：</strong>氣候相對平穩，能量運作順暢。<br/>
                <strong>疾病：</strong>疾病多為常規性，病勢較為緩和，治療效果通常較好。
              </p>
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

        {/* New Subsection: Organ and Disease Prediction */}
        <div className="bg-parchment p-8 rounded-3xl border border-ink/10 shadow-sm">
          <h4 className="text-xl font-bold mb-6 flex items-center gap-2 text-ink">
            <HeartPulse className="text-cinnabar" /> 臨床應用：臟腑發病預測
          </h4>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse font-sans">
              <thead>
                <tr className="border-b border-ink/10 text-xs uppercase tracking-wider text-ink/50">
                  <th className="py-3 font-bold">氣候偏盛</th>
                  <th className="py-3 font-bold">受累臟腑</th>
                  <th className="py-3 font-bold">常見臨床表現</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                {[
                  { qi: '風氣大行', organ: '脾土受剋', symptoms: '腹瀉、肌肉痠痛、食慾不振、腹脹' },
                  { qi: '熱氣大行', organ: '肺金受剋', symptoms: '咳嗽、氣喘、皮膚乾癢、咽喉腫痛' },
                  { qi: '濕氣大行', organ: '腎水受剋', symptoms: '水腫、腰膝痠軟、小便不利、體重感' },
                  { qi: '燥氣大行', organ: '肝木受剋', symptoms: '目乾、頭暈、筋脈拘急、易怒' },
                  { qi: '寒氣大行', organ: '心火受剋', symptoms: '胸悶、心悸、畏寒、脈象遲緩' },
                ].map((item, i) => (
                  <tr key={i} className="border-b border-ink/5 hover:bg-ink/5 transition-colors">
                    <td className="py-4 font-bold text-ink">{item.qi}</td>
                    <td className="py-4 text-cinnabar font-medium">{item.organ}</td>
                    <td className="py-4 text-ink/60 italic">{item.symptoms}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-parchment p-8 rounded-3xl border border-cinnabar/20 shadow-sm">
            <h4 className="text-xl font-bold mb-4 text-cinnabar flex items-center gap-2">
              <ShieldAlert size={20} /> 五鬱之發 (鬱極宜發)
            </h4>
            <p className="text-sm text-ink/80 font-sans leading-relaxed mb-6">
              當運氣受到壓制（如運被氣剋），能量會積聚。當壓制力減弱時，積聚的能量會「暴發」。
              核心治則：<strong>「鬱極宜發不宜鬱」</strong>。依據五行特性，採取達、發、奪、泄、折等不同疏通手法。
            </p>
          </div>

          <div className="bg-parchment p-8 rounded-3xl border border-amber-200 shadow-sm">
            <h4 className="text-xl font-bold mb-4 text-amber-800 flex items-center gap-2">
              <Activity size={20} /> 勝復提醒 (動態平衡)
            </h4>
            <p className="text-sm text-ink/80 font-sans leading-relaxed mb-6">
              大自然的「報復機制」。若上半年（司天）氣候過於強盛（勝氣），下半年必會誘發對應的「復氣」進行報復性反彈。
              臨床提示：<strong>「開藥留有一線」</strong>，預防氣候劇烈切換導致的人體負擔。
            </p>
          </div>
        </div>
      </section>

      {/* Summary Callout */}
      <section className="bg-parchment p-10 rounded-[3rem] border-2 border-dashed border-ink/10 text-center">
        <h3 className="text-2xl font-bold mb-6">為什麼要學五運六氣？</h3>
        <div className="max-w-3xl mx-auto text-ink/70 font-sans leading-relaxed space-y-6 text-left">
          <p>
            「五運六氣」起源於《黃帝內經》，原書中雖提及，但體系散見。真正將其系統化並補入《黃帝內經》的關鍵人物，是唐代的醫學家<strong>王冰</strong>。他將這套理論納入《素問》之中，使其成為中醫理論體系中不可或缺的一環。
          </p>
          <p>
            然而，這套理論在歷史與現代學術界中始終存在爭議。批評者認為其推算過於機械，難以完全對應複雜多變的現代氣候；支持者則認為其揭示了天地能量與人體節律的深層共振。
          </p>
          <p>
            即便如此，學習五運六氣仍具備深遠的指導意義。它不僅是古老的氣候學，更是一種<strong>「時序醫學」</strong>的思維訓練。掌握了運氣規律，醫者便能「先歲氣而後天時」，在疾病發生前預判趨勢，在診斷時洞察病機。這不僅是氣候的推演，更是中醫追求「因時制宜」、實現精準醫療的重要基石。
          </p>
        </div>
      </section>
    </div>
  );
}
