import React from 'react';
import { ScrollText, LibraryBig } from "lucide-react";

export default function ReferenceLibrary() {
  return (
    <div className="space-y-16">
      {/* Academic Source: Classic Works Guide */}
      <section className="space-y-8">
        <div className="flex items-center gap-4 border-l-4 border-ink pl-6">
          <div>
            <h3 className="text-2xl font-bold">學術溯源：經典著作導讀</h3>
            <p className="text-ink/50 font-sans">深入研究運氣學說的必讀文獻</p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 font-sans">
          {[
            { title: '《素問·運氣七篇》', author: '王冰 (補入)', desc: '理論的源頭，包含天元紀大論、五運行大論等，奠定了運氣學說的基石。' },
            { title: '《類經圖翼》', author: '張景岳', desc: '以大量圖表解析運氣規律，將複雜的推算視覺化，是極佳的學習工具。' },
            { title: '《三因極一病證方論》', author: '陳無擇', desc: '首創將運氣理論與臨床方劑結合，提出「十六年運氣方」，極具實戰價值。' },
          ].map((book, i) => (
            <div key={i} className="bg-parchment p-6 rounded-2xl border border-ink/10 hover:border-ink/30 transition-all group">
              <LibraryBig className="text-ink/20 group-hover:text-ink/40 mb-4 transition-colors" size={32} />
              <h5 className="font-bold text-lg mb-2">{book.title}</h5>
              <div className="text-xs text-ink/40 font-bold uppercase mb-3">作者：{book.author}</div>
              <p className="text-sm text-ink/60 leading-relaxed">{book.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="bg-cinnabar/5 p-8 rounded-3xl border border-cinnabar/10">
        <div className="flex items-center gap-3 mb-6">
          <ScrollText className="text-cinnabar" />
          <h3 className="text-xl font-bold">學習建議</h3>
        </div>
        <ul className="space-y-6 font-sans text-ink/80">
          <li className="flex gap-4 items-start">
            <span className="text-cinnabar font-bold text-lg">01.</span>
            <span className="text-base leading-relaxed">先讀《素問》運氣七篇，建立宏觀的宇宙觀與生命觀。</span>
          </li>
          <li className="flex gap-4 items-start">
            <span className="text-cinnabar font-bold text-lg">02.</span>
            <span className="text-base leading-relaxed">掌握十天干、十二地支的陰陽五行屬性是推算的基礎。</span>
          </li>
          <li className="flex gap-4 items-start">
            <span className="text-cinnabar font-bold text-lg">03.</span>
            <span className="text-base leading-relaxed">結合現代氣象數據與臨床病例進行驗證，活學活用。</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
