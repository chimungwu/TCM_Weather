import React, { useState } from 'react';
import { motion } from "motion/react";
import { 
  Calendar, 
  Info, 
  Wind, 
  Thermometer, 
  Droplets, 
  Sun, 
  CloudRain, 
  Snowflake,
  ArrowRight,
  AlertTriangle,
  Stethoscope,
  Clock,
  BookOpen
} from "lucide-react";
import { 
  getStemBranch, 
  getDaYun, 
  getSiTianZaiQuan, 
  getKeQiSteps, 
  ZHU_QI_STEPS, 
  getYearlySteps,
  getSolarTermDate,
  getRelationshipDetail,
  getSuWenGuidance,
  getSanYinFangGuidance,
  getCombinationType,
  getMovementSteps,
  getYunQiStrength
} from '../types';
import YunQiWheel from './YunQiWheel';

export default function CalculationTool() {
  const [year, setYear] = useState(new Date().getFullYear());
  const [viewMode, setViewMode] = useState<'table' | 'wheel'>('wheel');
  const sb = getStemBranch(year);
  const daYunInfo = getDaYun(sb.stem);
  const stzq = getSiTianZaiQuan(sb.branch);
  const keQiSteps = getKeQiSteps(stzq.siTian);
  const yearlySteps = getYearlySteps(year);
  const daHanDate = getSolarTermDate(year, '大寒');

  const suWenSiTian = getSuWenGuidance(stzq.siTian);
  const suWenZaiQuan = getSuWenGuidance(stzq.zaiQuan);
  const sanYinFang = getSanYinFangGuidance(sb.stem, daYunInfo.isExcess);
  const combinations = getCombinationType(sb.stem, sb.branch, daYunInfo.movement, stzq.siTian, stzq.zaiQuan);
  const movementSteps = getMovementSteps(daYunInfo.movement, daYunInfo.isExcess);
  const strength = getYunQiStrength(daYunInfo.movement, stzq.siTian);

  const getClinicalAdvice = (zhu: string, ke: string) => {
    if (zhu === ke) return "氣位相合，氣候平穩。";
    
    // Specific Fire cases from reference
    if (ke === '少陰君火' && zhu === '少陽相火') return "君火加臨相火，為「順」，氣候正常但熱氣盛。";
    if (ke === '少陽相火' && zhu === '少陰君火') return "相火加臨君火，為「逆」，氣候易見劇變。";

    if (ke.includes('火') && zhu.includes('水')) return "水火相爭，氣候劇變，注意心腎不交之疾。";
    if (ke.includes('木') && zhu.includes('土')) return "木克土，脾胃易受邪，注意消化系統。";
    return "客主加臨，注意氣候異常對人體的影響。";
  };

  return (
    <div className="space-y-8">
      {/* Year Input Header */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-6 bg-white p-8 rounded-3xl border-2 border-ink/10 shadow-xl relative overflow-hidden">
        <div className="absolute top-0 right-0 p-4 opacity-5">
          <Calendar size={120} />
        </div>
        
        <div className="z-10">
          <h2 className="text-3xl font-bold mb-2">運氣詳解</h2>
          <p className="text-ink/60 font-sans">深度分析 {year} 年度五運六氣加臨規律</p>
        </div>

        <div className="flex flex-col items-end gap-2 z-10">
          <div className="flex items-center gap-4">
            <input
              type="number"
              value={year}
              onChange={(e) => setYear(parseInt(e.target.value) || 0)}
              className="text-4xl font-bold bg-parchment/50 border-b-4 border-cinnabar px-4 py-2 w-40 text-center focus:outline-none"
            />
            <span className="text-2xl font-bold">年</span>
          </div>
          <div className="flex items-center gap-2 text-sm font-sans font-bold text-cinnabar bg-cinnabar/5 px-4 py-2 rounded-full border border-cinnabar/10">
            <Clock size={14} />
            <span>交運時間：大寒日 ({daHanDate})</span>
          </div>
        </div>
      </div>

      {/* Main Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <motion.div whileHover={{ y: -5 }} className="bg-white p-6 rounded-2xl border border-ink/10 shadow-sm">
          <div className="flex items-center gap-3 mb-4 text-cinnabar">
            <Info size={20} />
            <h3 className="font-bold">歲次干支</h3>
          </div>
          <div className="text-5xl font-bold text-center py-4">{sb.stem}{sb.branch}</div>
          <p className="text-center text-sm text-ink/60 font-sans">
            {sb.stem}年屬{daYunInfo.isExcess ? '陽 (太過)' : '陰 (不及)'}
          </p>
        </motion.div>

        <motion.div whileHover={{ y: -5 }} className="bg-white p-6 rounded-2xl border border-ink/10 shadow-sm">
          <div className="flex items-center gap-3 mb-4 text-jade">
            <Wind size={20} />
            <h3 className="font-bold">中運 (大運)</h3>
          </div>
          <div className="text-5xl font-bold text-center py-4">{daYunInfo.movement}運</div>
          <div className="flex flex-wrap justify-center gap-2 mt-3">
            {combinations.map(c => (
              <span key={c} className={`px-3 py-1 text-xs font-bold rounded-full border ${
                c === '平氣' ? 'bg-ink/5 text-ink/40 border-ink/10' : 'bg-amber-100 text-amber-700 border-amber-200'
              }`}>
                {c}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.div whileHover={{ y: -5 }} className="bg-white p-6 rounded-2xl border border-ink/10 shadow-sm">
          <div className="flex items-center gap-3 mb-4 text-blue-600">
            <Thermometer size={20} />
            <h3 className="font-bold">司天 / 在泉</h3>
          </div>
          <div className="space-y-2 text-center py-2">
            <div className="text-2xl font-bold">司天：{stzq.siTian}</div>
            <div className="text-2xl font-bold text-ink/40">在泉：{stzq.zaiQuan}</div>
          </div>
          <div className="mt-3 text-center">
            <span className={`px-3 py-1 text-xs font-bold rounded-full border ${
              strength.type === '運盛氣衰' ? 'bg-cinnabar/5 text-cinnabar border-cinnabar/10' : 
              strength.type === '氣盛運衰' ? 'bg-blue-50 text-blue-600 border-blue-100' : 
              'bg-ink/5 text-ink/40 border-ink/10'
            }`}>
              {strength.type}
            </span>
            <p className="text-xs text-ink/50 mt-2 font-medium">{strength.detail}</p>
          </div>
        </motion.div>
      </div>

      {/* Five Movements Analysis */}
      <div className="bg-white p-8 rounded-3xl border border-ink/10 shadow-sm">
        <div className="flex items-center justify-between mb-8">
          <h3 className="text-xl font-bold flex items-center gap-2 text-jade">
            <Wind size={24} />
            五運推算 (主運與客運)
          </h3>
          <div className="text-xs font-bold text-ink/50 bg-parchment px-4 py-1.5 rounded-full border border-ink/5">
            依「五音建運、太少相生」推算
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {['初運', '二運', '三運', '四運', '終運'].map((stepName, i) => (
            <div key={i} className="group bg-parchment/20 p-5 rounded-2xl border border-ink/5 hover:border-jade/30 transition-all">
              <div className="text-xs text-ink/50 font-bold uppercase mb-4 flex justify-between items-center">
                <span>{stepName}</span>
                <span className="text-[10px] opacity-0 group-hover:opacity-100 transition-opacity">73日5刻</span>
              </div>
              
              <div className="flex items-center gap-3 mb-6 justify-center">
                <div className="text-center">
                  <div className="text-[10px] text-ink/40 mb-1 uppercase tracking-widest font-bold">主</div>
                  <div className={`w-14 h-14 rounded-2xl border flex items-center justify-center font-bold text-xl shadow-sm ${
                    movementSteps.mainSteps[i].isExcess 
                      ? 'bg-ink/5 border-ink/10 text-ink' 
                      : 'bg-white border-ink/10 text-ink/60'
                  }`}>
                    {movementSteps.mainSteps[i].label}
                  </div>
                </div>
                
                <div className="flex flex-col items-center gap-1">
                  <ArrowRight size={18} className="text-ink/20" />
                </div>

                <div className="text-center">
                  <div className="text-[10px] text-cinnabar/50 mb-1 uppercase tracking-widest font-bold">客</div>
                  <div className={`w-14 h-14 rounded-2xl border flex items-center justify-center font-bold text-xl shadow-sm ${
                    movementSteps.guestSteps[i].isExcess 
                      ? 'bg-cinnabar/5 border-cinnabar/20 text-cinnabar' 
                      : 'bg-blue-50 border-blue-200 text-blue-600'
                  }`}>
                    {movementSteps.guestSteps[i].label}
                  </div>
                </div>
              </div>

              <div className="space-y-2 border-t border-ink/5 pt-4">
                <div className="text-xs font-bold text-ink/70 mb-1">
                  運用分析：
                </div>
                <p className="text-xs text-ink/80 leading-relaxed font-serif italic">
                  {movementSteps.applications[i]}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-8 p-6 bg-jade/5 rounded-2xl border border-jade/10 flex items-start gap-4">
          <Info size={20} className="text-jade mt-0.5 shrink-0" />
          <div className="text-sm text-jade/80 leading-relaxed">
            <strong className="text-jade">運用提示：</strong>五運之客主加臨，主運為常，客運為變。若客主同氣，則該運之氣候特徵倍增；若客主相克，則氣候多變且易生災眚。推算時應結合「太過不及」之理，判斷氣候之偏勝。
          </div>
        </div>
      </div>

      {/* Detailed Six Steps Analysis */}
      <div className="bg-white rounded-3xl border border-ink/10 overflow-hidden shadow-sm">
        <div className="bg-ink text-parchment p-6 flex items-center justify-between">
          <h3 className="text-xl font-bold flex items-center gap-2">
            <Clock size={20} />
            六氣加臨詳細分析
          </h3>
          <div className="flex bg-white/10 p-1 rounded-full">
            <button 
              onClick={() => setViewMode('wheel')}
              className={`px-4 py-1 rounded-full text-xs font-bold transition-all ${viewMode === 'wheel' ? 'bg-parchment text-ink' : 'text-parchment/60 hover:text-parchment'}`}
            >
              圓盤圖
            </button>
            <button 
              onClick={() => setViewMode('table')}
              className={`px-4 py-1 rounded-full text-xs font-bold transition-all ${viewMode === 'table' ? 'bg-parchment text-ink' : 'text-parchment/60 hover:text-parchment'}`}
            >
              列表
            </button>
          </div>
        </div>
        
        <div className="p-8">
          {viewMode === 'wheel' ? (
            <div className="py-10">
              <YunQiWheel 
                year={year}
                siTian={stzq.siTian} 
                zaiQuan={stzq.zaiQuan} 
                zhuQi={ZHU_QI_STEPS} 
                keQi={keQiSteps} 
              />
              <div className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-4 text-center">
                <div className="p-4 bg-parchment rounded-2xl border border-ink/5">
                  <div className="text-xs text-ink/50 uppercase font-bold mb-1">中運</div>
                  <div className="text-lg font-bold">{daYunInfo.movement}運 ({daYunInfo.isExcess ? '太過' : '不及'})</div>
                </div>
                <div className="p-4 bg-parchment rounded-2xl border border-ink/5">
                  <div className="text-xs text-ink/50 uppercase font-bold mb-1">司天</div>
                  <div className="text-lg font-bold text-cinnabar">{stzq.siTian}</div>
                </div>
                <div className="p-4 bg-parchment rounded-2xl border border-ink/5">
                  <div className="text-xs text-ink/50 uppercase font-bold mb-1">在泉</div>
                  <div className="text-lg font-bold text-jade">{stzq.zaiQuan}</div>
                </div>
              </div>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-ink/5 text-xs uppercase tracking-wider font-sans font-bold">
                    <th className="p-4 border-b border-ink/10">時段 (六步)</th>
                    <th className="p-4 border-b border-ink/10">主氣 (常規)</th>
                    <th className="p-4 border-b border-ink/10">客氣 (變動)</th>
                    <th className="p-4 border-b border-ink/10">氣候與發病趨勢</th>
                  </tr>
                </thead>
                <tbody className="font-sans text-sm">
                  {yearlySteps.map((step, i) => (
                    <tr key={i} className="hover:bg-parchment/30 transition-colors">
                      <td className="p-5 border-b border-ink/5">
                        <div className="font-bold text-lg text-ink">{step.name}</div>
                        <div className="text-xs text-ink/60 font-medium">{step.term} - {step.endTerm}</div>
                        <div className="text-xs font-bold text-cinnabar mt-2 bg-cinnabar/5 px-2 py-0.5 rounded-full inline-block border border-cinnabar/10">交氣：{step.startDate}</div>
                      </td>
                      <td className="p-5 border-b border-ink/5">
                        <span className="px-3 py-1.5 bg-jade/10 text-jade rounded-lg font-bold text-sm">
                          {ZHU_QI_STEPS[i]}
                        </span>
                      </td>
                      <td className="p-5 border-b border-ink/5">
                        <span className="px-3 py-1.5 bg-cinnabar/10 text-cinnabar rounded-lg font-bold text-sm">
                          {keQiSteps[i]}
                        </span>
                      </td>
                      <td className="p-5 border-b border-ink/5">
                        <div className="flex flex-col gap-3">
                          {(() => {
                            const rel = getRelationshipDetail(ZHU_QI_STEPS[i], keQiSteps[i]);
                            return (
                              <>
                                <div className="flex items-center gap-3">
                                  <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                                    rel.status === '順' ? 'bg-jade/10 text-jade border border-jade/20' : 
                                    rel.status === '逆' ? 'bg-cinnabar/10 text-cinnabar border border-cinnabar/20' : 
                                    'bg-ink/5 text-ink/60 border border-ink/10'
                                  }`}>
                                    {rel.status}
                                  </span>
                                  <span className="text-ink/80 font-bold text-sm">{rel.reason}</span>
                                </div>
                                <div className="flex items-start gap-2 text-sm text-ink/60 leading-relaxed font-serif">
                                  <AlertTriangle size={14} className={`mt-0.5 shrink-0 ${rel.isCompatible ? 'text-jade' : 'text-amber-500'}`} />
                                  <span>{getClinicalAdvice(ZHU_QI_STEPS[i], keQiSteps[i])}</span>
                                </div>
                              </>
                            );
                          })()}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>

      {/* Clinical Guidance & Annual Summary Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="bg-cinnabar/5 p-8 rounded-3xl border border-cinnabar/10 lg:col-span-1">
          <h3 className="text-xl font-bold mb-6 flex items-center gap-2 text-cinnabar">
            <Stethoscope size={24} />
            《素問》治法
          </h3>
          <div className="space-y-6 font-sans">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-cinnabar/5">
              <div className="flex items-center gap-2 mb-3">
                <span className="px-3 py-1 bg-cinnabar text-white text-xs font-bold rounded-full">上半年 (司天)</span>
                <h4 className="font-bold text-ink text-base">{stzq.siTian}</h4>
              </div>
              <p className="text-sm text-ink/80 leading-relaxed mb-4">
                <strong className="text-cinnabar">用藥大綱：</strong>{suWenSiTian.principle}
              </p>
              <div className="flex items-center gap-2 text-xs">
                <span className="text-ink/40 font-bold">藥性選擇：</span>
                <span className="text-cinnabar font-bold bg-cinnabar/5 px-2 py-0.5 rounded border border-cinnabar/10">{suWenSiTian.flavors}</span>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-cinnabar/5">
              <div className="flex items-center gap-2 mb-3">
                <span className="px-3 py-1 bg-jade text-white text-xs font-bold rounded-full">下半年 (在泉)</span>
                <h4 className="font-bold text-ink text-base">{stzq.zaiQuan}</h4>
              </div>
              <p className="text-sm text-ink/80 leading-relaxed mb-4">
                <strong className="text-jade">用藥大綱：</strong>{suWenZaiQuan.principle}
              </p>
              <div className="flex items-center gap-2 text-xs">
                <span className="text-ink/40 font-bold">藥性選擇：</span>
                <span className="text-jade font-bold bg-jade/5 px-2 py-0.5 rounded border border-jade/10">{suWenZaiQuan.flavors}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-amber-50 p-8 rounded-3xl border border-amber-200/50 lg:col-span-1">
          <h3 className="text-xl font-bold mb-6 flex items-center gap-2 text-amber-700">
            <BookOpen size={24} />
            《三因方》十六政方
          </h3>
          <div className="space-y-6 font-sans">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-amber-200">
              <div className="flex items-center justify-between mb-5">
                <h4 className="text-xl font-bold text-amber-900">{sanYinFang.formula}</h4>
                <span className="text-xs font-bold px-3 py-1 bg-amber-100 text-amber-700 rounded-full border border-amber-200">
                  {daYunInfo.movement}運{daYunInfo.isExcess ? '太過' : '不及'}
                </span>
              </div>
              <div className="space-y-5">
                <div>
                  <h5 className="text-xs font-bold text-ink/40 uppercase mb-2 tracking-wider">組方內容</h5>
                  <p className="text-sm text-cinnabar font-bold leading-relaxed bg-cinnabar/5 p-3 rounded-xl border border-cinnabar/10">
                    {sanYinFang.ingredients}
                  </p>
                </div>
                <div>
                  <h5 className="text-xs font-bold text-ink/40 uppercase mb-2 tracking-wider">組成邏輯</h5>
                  <p className="text-sm text-ink/80 leading-relaxed font-serif">
                    {sanYinFang.logic} 針對{year}年{daYunInfo.movement}氣{daYunInfo.isExcess ? '偏盛' : '偏衰'}之局，調和五臟。
                  </p>
                </div>
                <div>
                  <h5 className="text-xs font-bold text-ink/40 uppercase mb-2 tracking-wider">臨床加減 (藥物)</h5>
                  <p className="text-sm text-ink/70 leading-relaxed italic font-serif">
                    {sanYinFang.modifications}
                  </p>
                </div>
              </div>
            </div>
            
            <div className="p-4 bg-amber-100/50 rounded-xl border border-dashed border-amber-300 text-xs text-amber-800 leading-relaxed font-medium">
              <strong>學術提示：</strong>十六政方旨在「以平為期」。需結合當令之「客主加臨」情況應用。
            </div>
          </div>
        </div>

        <div className="bg-jade/5 p-8 rounded-3xl border border-jade/10 lg:col-span-1">
          <h3 className="text-xl font-bold mb-6 flex items-center gap-2 text-jade">
            <Sun size={24} />
            年度氣候總結
          </h3>
          <div className="prose prose-sm font-sans text-ink/80 leading-relaxed space-y-5">
            <p className="text-sm">
              <strong className="text-ink">【歲次與中運】</strong><br />
              {year}年為「{sb.stem}{sb.branch}」年。中運為{daYunInfo.movement}運{daYunInfo.isExcess ? '太過' : '不及'}。
              {daYunInfo.isExcess ? '氣盛則易生亢害。' : '氣衰則易受乘襲。'}
            </p>
            <p className="text-sm">
              <strong className="text-ink">【司天與在泉】</strong><br />
              上半年由<strong>「{stzq.siTian}」</strong>司天，特徵偏於{stzq.siTian.slice(2)}。
              下半年由<strong>「{stzq.zaiQuan}」</strong>在泉，轉向{stzq.zaiQuan.slice(2)}。
            </p>
            
            <div className="p-5 bg-white/60 rounded-2xl border border-jade/20 shadow-sm">
              <h4 className="text-xs font-bold text-jade mb-3 flex items-center gap-2">
                <AlertTriangle size={14} />
                運氣合德與同化分析
              </h4>
              <p className="text-xs leading-relaxed font-medium text-ink/80">
                {combinations.includes('平氣') ? (
                  <>本年度為<strong>「平氣之年」</strong>，運氣不相符合，氣候變化相對平和，無極端加乘效果。</>
                ) : (
                  <>
                    本年度出現<strong>「{combinations.join('、')}」</strong>之局。
                    {combinations.includes('太乙天符') && " 此為「太乙天符」，乃運、氣、支三者會合，氣候變化極其劇烈，萬物生長受阻，發病重急。"}
                    {combinations.includes('天符') && !combinations.includes('太乙天符') && " 此為「天符」之年，運與司天相合，氣候變化劇烈，發病速而重。"}
                    {combinations.includes('歲會') && !combinations.includes('太乙天符') && " 此為「歲會」之年，運與歲支方位相合，氣候平穩但易生積滯。"}
                    {combinations.includes('同天符') && " 此為「同天符」，太過之運與在泉相合，氣候特徵顯著。"}
                    {combinations.includes('同歲會') && " 此為「同歲會」，不及之運與在泉相合，氣候平和。"}
                  </>
                )}
              </p>
              <p className="text-xs mt-3 pt-3 border-t border-jade/10 text-ink/60">
                <strong className="text-jade">勢力對比：</strong>本年呈現<strong>「{strength.type}」</strong>。
                {strength.type === '運盛氣衰' ? '大運之力強於司天，年度氣候受五運主導明顯。' : 
                 strength.type === '氣盛運衰' ? '司天之氣強於大運，氣候多隨六氣司天而變。' : 
                 '運與氣勢力平衡，氣候相對穩定。'}
              </p>
            </div>

            <p className="text-sm">
              <strong className="text-ink">【趨勢分析】</strong><br />
              上半年防反常氣候，下半年決定入冬寒溫。醫者應參考「客主加臨」變化，靈活調整方藥。
            </p>
            <div className="bg-white/50 p-4 rounded-xl border border-jade/10 text-xs italic text-ink/50">
              註：運氣推算僅供臨床參考。
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
