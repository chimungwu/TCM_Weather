import React from 'react';
import { BookOpen, ScrollText } from "lucide-react";

const CLASSICS = [
  {
    title: "《黃帝內經·素問》運氣七篇",
    description: "包括《天元紀大論》、《五運行大論》、《六微旨大論》、《氣交變大論》、《五常政大論》、《六元正紀大論》、《至真要大論》。是五運六氣理論的核心來源。",
    tags: ["核心經典", "理論基礎"]
  },
  {
    title: "《內經運氣分析》",
    description: "現代學者對運氣理論的系統整理與科學分析，適合初學者入門。",
    tags: ["現代解析", "入門推薦"]
  },
  {
    title: "《中醫運氣學》",
    description: "中醫藥院校教材，系統講解五運六氣的推算方法與臨床應用。",
    tags: ["教材", "系統學習"]
  },
  {
    title: "《三因極一病證方論》",
    description: "宋代陳無擇著，將運氣理論與臨床辨證方藥緊密結合的代表作。",
    tags: ["臨床應用", "宋代經典"]
  },
  {
    title: "《類經圖翼》",
    description: "明代張景岳著，對運氣學說進行了大量的圖解與總結，是學習運氣推算的必讀之作。",
    tags: ["圖解總結", "明代經典"]
  }
];

export default function ReferenceLibrary() {
  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {CLASSICS.map((book, i) => (
          <div key={i} className="bg-white p-6 rounded-2xl border border-ink/10 hover:shadow-lg transition-shadow group">
            <div className="flex justify-between items-start mb-4">
              <div className="bg-parchment p-3 rounded-xl group-hover:bg-cinnabar group-hover:text-white transition-colors">
                <BookOpen size={24} />
              </div>
              <div className="flex gap-2">
                {book.tags.map((tag, j) => (
                  <span key={j} className="text-xs uppercase tracking-wider font-sans font-bold bg-ink/5 px-3 py-1 rounded-full border border-ink/5">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <h3 className="text-xl font-bold mb-3">{book.title}</h3>
            <p className="text-ink/70 text-base font-sans leading-relaxed">
              {book.description}
            </p>
          </div>
        ))}
      </div>

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
