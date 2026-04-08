import React, { useState } from 'react';
import { motion, AnimatePresence } from "motion/react";
import { 
  BookOpen, 
  Calculator, 
  Library, 
  MessageSquare, 
  Menu, 
  X, 
  ChevronRight,
  Scroll,
  User
} from "lucide-react";
import TheorySection from './components/TheorySection';
import CalculationTool from './components/CalculationTool';
import ReferenceLibrary from './components/ReferenceLibrary';
import AboutAuthor from './components/AboutAuthor';

type Tab = 'theory' | 'calc' | 'library' | 'about';

export default function App() {
  const [activeTab, setActiveTab] = useState<Tab>('theory');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const tabs = [
    { id: 'theory', label: '理論介紹', icon: BookOpen },
    { id: 'calc', label: '運氣推算', icon: Calculator },
    { id: 'library', label: '經典文獻', icon: Library },
    { id: 'about', label: '作者介紹', icon: User },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-parchment/80 backdrop-blur-md border-b border-ink/10">
        <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-ink text-parchment p-2 rounded-lg">
              <Scroll size={24} />
            </div>
            <div>
              <h1 className="text-xl md:text-2xl font-bold tracking-tight">岐黃運氣學堂</h1>
              <p className="text-xs uppercase tracking-[0.1em] font-sans font-bold text-ink/50">阿銘醫師的五運六氣研究筆記</p>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as Tab)}
                className={`px-6 py-2 rounded-full text-sm font-bold font-sans transition-all flex items-center gap-2 ${
                  activeTab === tab.id 
                    ? 'bg-ink text-parchment' 
                    : 'hover:bg-ink/5 text-ink/60'
                }`}
              >
                <tab.icon size={16} />
                {tab.label}
              </button>
            ))}
          </nav>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-2 text-ink"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </header>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden fixed inset-0 z-40 bg-parchment pt-24 px-4"
          >
            <nav className="flex flex-col gap-4">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => {
                    setActiveTab(tab.id as Tab);
                    setIsMenuOpen(false);
                  }}
                  className={`flex items-center justify-between p-4 rounded-2xl border ${
                    activeTab === tab.id 
                      ? 'bg-ink text-parchment border-ink' 
                      : 'bg-white border-ink/10 text-ink'
                  }`}
                >
                  <div className="flex items-center gap-3 font-bold">
                    <tab.icon size={20} />
                    {tab.label}
                  </div>
                  <ChevronRight size={16} />
                </button>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <main className="flex-1 max-w-7xl mx-auto w-full px-4 py-12">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -10 }}
            transition={{ duration: 0.2 }}
          >
            {activeTab === 'theory' && <TheorySection />}
            {activeTab === 'calc' && <CalculationTool />}
            {activeTab === 'library' && <ReferenceLibrary />}
            {activeTab === 'about' && <AboutAuthor />}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Footer */}
      <footer className="bg-ink text-parchment/40 py-12 mt-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="flex justify-center gap-8 mb-8">
            <Scroll size={40} className="opacity-20" />
          </div>
          <p className="font-sans text-base mb-2">岐黃運氣學堂：阿銘醫師的五運六氣研究筆記</p>
          <p className="font-sans text-xs uppercase tracking-widest opacity-60">© 2026 Traditional Chinese Medicine Research Institute</p>
        </div>
      </footer>
    </div>
  );
}
