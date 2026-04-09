import React from 'react';
import { motion } from "motion/react";

import { getSolarTermDate, getRelationshipDetail } from '../types';

interface YunQiWheelProps {
  year: number;
  siTian: string;
  zaiQuan: string;
  zhuQi: string[];
  keQi: string[];
}

export default function YunQiWheel({ year, siTian, zaiQuan, zhuQi, keQi }: YunQiWheelProps) {
  const steps = [
    { name: '初之氣', term: '立春' },
    { name: '二之氣', term: '春分' },
    { name: '三之氣', term: '立夏' },
    { name: '四之氣', term: '立秋' },
    { name: '五之氣', term: '秋分' },
    { name: '六之氣', term: '立冬' },
  ].map(s => ({
    ...s,
    date: getSolarTermDate(year, s.term)
  }));

  const size = 500;
  const center = size / 2;
  const radius = 230;
  const midRadius = 150; // Boundary between Guest and Host
  const innerRadius = 70;

  // TCM Five Colors Mapping
  const getColorByQi = (qi: string) => {
    if (qi.includes('木')) return { bg: '#e8f5e9', text: '#2e7d32', border: '#a5d6a7' }; // 青
    if (qi.includes('火')) return { bg: '#ffebee', text: '#c62828', border: '#ef9a9a' }; // 赤
    if (qi.includes('土')) return { bg: '#fffde7', text: '#f9a825', border: '#fff59d' }; // 黃
    if (qi.includes('金')) return { bg: '#fafafa', text: '#616161', border: '#e0e0e0' }; // 白
    if (qi.includes('水')) return { bg: '#e1f5fe', text: '#1565c0', border: '#90caf9' }; // 黑 (用深藍代)
    return { bg: '#f5f5f5', text: '#1a1a1a', border: '#d1d1d1' };
  };

  return (
    <div className="relative w-full max-w-[500px] mx-auto aspect-square">
      <svg viewBox="0 0 500 500" className="w-full h-full font-serif">
        {/* Wedges */}
        {steps.map((_, i) => {
          const startAngle = 240 + (i - 2) * 60;
          const endAngle = startAngle + 60;
          const midAngle = startAngle + 30;
          const rad = (midAngle * Math.PI) / 180;

          const hostColors = getColorByQi(zhuQi[i]);
          const guestColors = getColorByQi(keQi[i]);

          // Path for Guest Qi (Outer Ring)
          const guestPath = (r1: number, r2: number) => {
            const x1 = center + r1 * Math.cos((startAngle * Math.PI) / 180);
            const y1 = center + r1 * Math.sin((startAngle * Math.PI) / 180);
            const x2 = center + r1 * Math.cos((endAngle * Math.PI) / 180);
            const y2 = center + r1 * Math.sin((endAngle * Math.PI) / 180);
            const x3 = center + r2 * Math.cos((endAngle * Math.PI) / 180);
            const y3 = center + r2 * Math.sin((endAngle * Math.PI) / 180);
            const x4 = center + r2 * Math.cos((startAngle * Math.PI) / 180);
            const y4 = center + r2 * Math.sin((startAngle * Math.PI) / 180);
            return `M ${x1} ${y1} A ${r1} ${r1} 0 0 1 ${x2} ${y2} L ${x3} ${y3} A ${r2} ${r2} 0 0 0 ${x4} ${y4} Z`;
          };

          return (
            <g key={i}>
              {/* Guest Qi Sector (Outer) */}
              <path
                d={guestPath(radius, midRadius)}
                fill={guestColors.bg}
                stroke={guestColors.border}
                strokeWidth="1"
              />
              
              {/* Host Qi Sector (Inner) */}
              <path
                d={guestPath(midRadius, innerRadius)}
                fill={hostColors.bg}
                stroke={hostColors.border}
                strokeWidth="1"
              />

              {/* Guest Qi Label */}
              <text
                x={center + ((radius + midRadius) / 2) * Math.cos(rad)}
                y={center + ((radius + midRadius) / 2) * Math.sin(rad)}
                textAnchor="middle"
                dominantBaseline="middle"
                className="text-[13px] font-bold"
                fill={guestColors.text}
                transform={`rotate(${midAngle + 90}, ${center + ((radius + midRadius) / 2) * Math.cos(rad)}, ${center + ((radius + midRadius) / 2) * Math.sin(rad)})`}
              >
                客 {keQi[i]}
              </text>

              {/* Host Qi Label */}
              <text
                x={center + ((midRadius + innerRadius) / 2) * Math.cos(rad)}
                y={center + ((midRadius + innerRadius) / 2) * Math.sin(rad)}
                textAnchor="middle"
                dominantBaseline="middle"
                className="text-[13px] font-bold"
                fill={hostColors.text}
                transform={`rotate(${midAngle + 90}, ${center + ((midRadius + innerRadius) / 2) * Math.cos(rad)}, ${center + ((midRadius + innerRadius) / 2) * Math.sin(rad)})`}
              >
                主 {zhuQi[i]}
              </text>

              {/* Boundary Line between segments */}
              <line 
                x1={center + innerRadius * Math.cos((startAngle * Math.PI) / 180)}
                y1={center + innerRadius * Math.sin((startAngle * Math.PI) / 180)}
                x2={center + radius * Math.cos((startAngle * Math.PI) / 180)}
                y2={center + radius * Math.sin((startAngle * Math.PI) / 180)}
                stroke="#1a1a1a"
                strokeWidth="0.5"
                strokeOpacity="0.2"
              />
            </g>
          );
        })}

        {/* Center Circle */}
        <g transform={`translate(${center}, ${center})`}>
          <circle r={innerRadius} fill="white" stroke="#1a1a1a" strokeWidth="1.5" />
          <line x1={-innerRadius} y1="0" x2={innerRadius} y2="0" stroke="#1a1a1a" strokeWidth="0.5" strokeOpacity="0.3" />
          
          {/* Si Tian Section */}
          <text y="-40" textAnchor="middle" className="text-[11px] fill-ink/60 font-sans font-bold">司天</text>
          <text y="-12" textAnchor="middle" className="text-[16px] font-bold fill-cinnabar">{siTian}</text>
          
          {/* Zai Quan Section */}
          <text y="22" textAnchor="middle" className="text-[11px] fill-ink/60 font-sans font-bold">在泉</text>
          <text y="50" textAnchor="middle" className="text-[16px] font-bold fill-jade">{zaiQuan}</text>
        </g>

        {/* Outer Labels (Qi Names) */}
        {steps.map((step, i) => {
          const startAngle = 240 + (i - 2) * 60;
          const midAngle = startAngle + 30;
          const rad = (midAngle * Math.PI) / 180;
          
          return (
            <g key={`outer-${i}`}>
              <text
                x={center + (radius + 25) * Math.cos(rad)}
                y={center + (radius + 25) * Math.sin(rad)}
                textAnchor="middle"
                dominantBaseline="middle"
                className="text-[12px] font-bold fill-ink/60 font-sans"
              >
                {step.name}
              </text>
            </g>
          );
        })}
      </svg>

      {/* Decorative Outer Ring */}
      <div className="absolute inset-0 pointer-events-none border-[1px] border-ink/5 rounded-full scale-[1.12]" />
    </div>
  );
}
