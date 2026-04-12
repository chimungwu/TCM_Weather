import React from 'react';
import { Wind } from 'lucide-react';
import { LIUQI_TERMS } from '../lib/liuqi';
import solarTerms from '../lib/solar_terms_2026.json';

export default function LiuqiAnalysis() {
  const now = new Date();
  const nowMs = now.getTime();

  const terms = solarTerms.map(term => ({
    ...term,
    ts: new Date(term.datetime).getTime()
  })).sort((a, b) => a.ts - b.ts);

  // Find start times for each Liuqi step
  const liuqiSteps = LIUQI_TERMS.map(step => {
    const term = terms.find(t => t.name === step.startTerm);
    return { ...step, startTs: term ? term.ts : 0 };
  });

  // Find current step
  let currentIndex = 0;
  for (let i = 0; i < liuqiSteps.length; i++) {
    if (nowMs >= liuqiSteps[i].startTs) {
      currentIndex = i;
    } else {
      break;
    }
  }

  // Calculate progress within current step
  const currentStep = liuqiSteps[currentIndex];
  const nextStep = liuqiSteps[(currentIndex + 1) % 6];
  const stepDuration = nextStep.startTs - currentStep.startTs;
  const elapsed = nowMs - currentStep.startTs;
  const progress = Math.min(100, Math.max(0, (elapsed / stepDuration) * 100));

  return (
    <section className="bg-parchment p-8 rounded-3xl border border-ink/10 shadow-sm mt-6">
      <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
        <Wind className="text-teal-600" /> 六氣加臨詳細分析
      </h3>
      <div className="space-y-4">
        {liuqiSteps.map((step, index) => (
          <div 
            key={step.name}
            className={`p-4 rounded-xl border ${
              index === currentIndex 
                ? 'bg-teal-50 border-teal-200 shadow-inner' 
                : 'bg-white/50 border-ink/5'
            }`}
          >
            <div className="flex justify-between items-center mb-2">
              <span className={`font-bold ${index === currentIndex ? 'text-teal-800' : 'text-ink'}`}>
                {step.name}：{step.attribute}
              </span>
              <span className="text-sm text-ink/60">起於 {step.startTerm}</span>
            </div>
            
            {index === currentIndex && (
              <div className="space-y-1">
                <div className="flex justify-between text-xs text-teal-800 font-bold">
                  <span>目前進度</span>
                  <span>{progress.toFixed(1)}%</span>
                </div>
                <div className="w-full bg-teal-100 rounded-full h-2">
                  <div 
                    className="bg-teal-600 h-2 rounded-full transition-all duration-500" 
                    style={{ width: `${progress}%` }}
                  ></div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
