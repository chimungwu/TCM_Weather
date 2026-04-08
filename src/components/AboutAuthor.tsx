import React from 'react';
import { motion } from "motion/react";
import { 
  User, 
  GraduationCap, 
  Stethoscope, 
  Search, 
  Globe, 
  Award,
  BookOpen,
  Heart,
  MapPin,
  Phone,
  ExternalLink
} from "lucide-react";

export default function AboutAuthor() {
  return (
    <div className="max-w-4xl mx-auto space-y-12 pb-20">
      {/* Profile Header */}
      <section className="relative bg-white p-8 md:p-12 rounded-[3rem] border border-ink/10 shadow-xl overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-cinnabar/5 rounded-full -mr-20 -mt-20 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-jade/5 rounded-full -ml-20 -mb-20 blur-2xl" />
        
        <div className="relative z-10 flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <div className="w-48 h-48 md:w-56 md:h-56 bg-parchment rounded-3xl border-4 border-white shadow-2xl flex items-center justify-center shrink-0 overflow-hidden rotate-3 hover:rotate-0 transition-transform duration-500">
            <img 
              src="https://fineherb.com.tw/storage/upload/doctor/image/2019-10-31/3jJ7dL07kkxIV0FubcvBOziR6rlvtHclsX4qzF1v.png" 
              alt="吳啓銘 醫師" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          
          <div className="text-center md:text-left">
            <div className="inline-block px-4 py-1.5 bg-cinnabar/10 text-cinnabar rounded-full text-sm font-bold mb-4">
              網頁製作者 · Author
            </div>
            <h2 className="text-4xl font-bold mb-2">吳啓銘 醫師</h2>
            <p className="text-xl text-ink/60 font-sans font-bold mb-6">中醫博士</p>
            
            <div className="flex flex-wrap justify-center md:justify-start gap-3 mb-6">
              <span className="px-4 py-1.5 bg-jade text-white rounded-full text-xs font-bold font-sans">臻品中醫副院長</span>
              <span className="px-4 py-1.5 bg-parchment text-ink/60 rounded-full text-xs font-bold font-sans border border-ink/5">中西醫雙主修</span>
              <span className="px-4 py-1.5 bg-ink text-parchment rounded-full text-xs font-bold font-sans">助理教授</span>
            </div>

            <a 
              href="https://drwu.carrd.co" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-cinnabar text-white rounded-2xl font-bold text-sm hover:bg-cinnabar/90 transition-all shadow-lg shadow-cinnabar/20"
            >
              <ExternalLink size={18} />
              關於阿銘醫師
            </a>
          </div>
        </div>
      </section>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Education & Academic */}
        <section className="bg-white p-8 rounded-3xl border border-ink/10 shadow-sm space-y-6">
          <h3 className="text-xl font-bold flex items-center gap-3 text-cinnabar">
            <GraduationCap size={24} />
            學術背景
          </h3>
          <div className="space-y-4 font-sans text-ink/80 leading-relaxed">
            <p className="text-base">
              畢業於 <strong className="text-ink">中國醫藥大學 中醫學系</strong>，並取得醫學博士學位。
            </p>
            <p className="text-sm text-ink/60 italic">
              具備中西醫雙主修背景，融合現代醫學與傳統中醫之整體觀。
            </p>
            <div className="p-4 bg-parchment/50 rounded-2xl border border-ink/5 flex items-start gap-3">
              <Award size={20} className="text-cinnabar shrink-0 mt-1" />
              <p className="text-sm">
                曾任中國醫藥大學中醫學系「環境醫學」課程教師，並通過教育部審定為助理教授。
              </p>
            </div>
          </div>
        </section>

        {/* Clinical Practice */}
        <section className="bg-white p-8 rounded-3xl border border-ink/10 shadow-sm space-y-6">
          <h3 className="text-xl font-bold flex items-center gap-3 text-jade">
            <Stethoscope size={24} />
            臨床服務
          </h3>
          <div className="space-y-6">
            <div>
              <h4 className="font-bold text-ink mb-2">臻品中醫診所副院長</h4>
              <div className="space-y-2 mb-4">
                <div className="flex items-center gap-2 text-sm text-ink/60 font-sans">
                  <MapPin size={16} className="text-jade shrink-0" />
                  台中市 東興路二段341號
                </div>
                <div className="flex items-center gap-2 text-sm text-ink/60 font-sans">
                  <Phone size={16} className="text-jade shrink-0" />
                  04-24756986
                </div>
              </div>
              <div className="grid grid-cols-2 gap-2">
                {['中醫養生', '中醫兒科', '減重', '青少年轉骨'].map(item => (
                  <div key={item} className="flex items-center gap-2 text-sm text-ink/70 font-sans">
                    <Heart size={14} className="text-jade" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Research Focus */}
        <section className="md:col-span-2 bg-white p-8 md:p-10 rounded-3xl border border-ink/10 shadow-sm space-y-6">
          <h3 className="text-xl font-bold flex items-center gap-3 text-blue-600">
            <Search size={24} />
            研究領域與願景
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 font-sans">
            <div className="space-y-4">
              <p className="text-base leading-relaxed text-ink/80">
                研究領域涵蓋 <strong className="text-ink">五運六氣、體質醫學與臨床應用</strong>，長期關注「天地氣候變化與人體健康」之間的關聯，嘗試將經典理論轉化為可操作的現代工具。
              </p>
            </div>
            <div className="space-y-4">
              <p className="text-base leading-relaxed text-ink/80">
                臨床與研究並行，致力於以科學化與系統化方式，重新詮釋中醫時序醫學的價值。
              </p>
            </div>
          </div>
        </section>

        {/* Website Purpose */}
        <section className="md:col-span-2 bg-ink text-parchment p-10 rounded-[3rem] shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-10">
            <Globe size={120} />
          </div>
          <div className="relative z-10 max-w-2xl mx-auto text-center space-y-6">
            <h3 className="text-2xl font-bold flex items-center justify-center gap-3">
              <BookOpen size={28} />
              網站初衷
            </h3>
            <p className="text-lg leading-relaxed font-serif italic opacity-90">
              「本網站以五運六氣為核心，結合資料整理與演算法邏輯，期望讓古典理論更貼近現代生活，成為臨床與個人健康管理的實用參考。」
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
