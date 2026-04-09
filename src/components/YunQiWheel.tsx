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
    { name: '終之氣', term: '立冬' },
  ].map(s => ({
    ...s,
    date: getSolarTermDate(year, s.term)
  }));

  const size = 500;
  const center = size / 2;
  const radius = 220;
  const innerRadius = 70;

  // Colors for the wedges (approximated from the image)
  const wedgeColors = [
    '#e8f5e9', // Light Green (Step 1)
    '#fce4ec', // Light Pink (Step 2)
    '#fffde7', // Pale Yellow (Step 3 - Si Tian)
    '#f5f5f5', // Light Grey (Step 4)
    '#e3f2fd', // Light Blue (Step 5)
    '#f1f8e9', // Light Green (Step 6 - Zai Quan)
  ];

  return (
    <div className="relative w-full max-w-[500px] mx-auto aspect-square">
      <svg viewBox="0 0 500 500" className="w-full h-full font-serif">
        {/* Wedges */}
        {steps.map((_, i) => {
          // We want Step 3 (i=2, Si Tian) to be at the TOP.
          // SVG angles start from 3 o'clock (0 deg).
          // Top is 270 deg.
          // Each wedge is 60 deg.
          // Step 3 center should be at 270. So it starts at 240 and ends at 300.
          const startAngle = 240 + (i - 2) * 60;
          const endAngle = startAngle + 60;
          
          const x1 = center + radius * Math.cos((startAngle * Math.PI) / 180);
          const y1 = center + radius * Math.sin((startAngle * Math.PI) / 180);
          const x2 = center + radius * Math.cos((endAngle * Math.PI) / 180);
          const y2 = center + radius * Math.sin((endAngle * Math.PI) / 180);
          
          const midAngle = startAngle + 30;
          const rad = (midAngle * Math.PI) / 180;

          return (
            <g key={i}>
              <path
                d={`M ${center} ${center} L ${x1} ${y1} A ${radius} ${radius} 0 0 1 ${x2} ${y2} Z`}
                fill={wedgeColors[i]}
                stroke="#1a1a1a"
                strokeWidth="0.5"
                strokeOpacity="0.2"
              />
              
              {/* Host Qi Label in Wedge */}
              <text
                x={center + (radius * 0.7) * Math.cos(rad)}
                y={center + (radius * 0.7) * Math.sin(rad)}
                textAnchor="middle"
                dominantBaseline="middle"
                className="text-[14px] font-bold fill-ink/70"
                transform={`rotate(${midAngle + 90}, ${center + (radius * 0.7) * Math.cos(rad)}, ${center + (radius * 0.7) * Math.sin(rad)})`}
              >
                主 {zhuQi[i]}
              </text>

              {/* Guest Qi Label (Optional, for completeness) */}
              <text
                x={center + (radius * 0.45) * Math.cos(rad)}
                y={center + (radius * 0.45) * Math.sin(rad)}
                textAnchor="middle"
                dominantBaseline="middle"
                className="text-[12px] font-bold fill-cinnabar/40"
                transform={`rotate(${midAngle + 90}, ${center + (radius * 0.45) * Math.cos(rad)}, ${center + (radius * 0.45) * Math.sin(rad)})`}
              >
                客 {keQi[i]}
              </text>
            </g>
          );
        })}

        {/* Center Circle */}
        <g transform={`translate(${center}, ${center})`}>
          <circle r={innerRadius} fill="white" stroke="#1a1a1a" strokeWidth="1.5" />
          <line x1={-innerRadius} y1="0" x2={innerRadius} y2="0" stroke="#1a1a1a" strokeWidth="0.5" strokeOpacity="0.3" />
          
          {/* Si Tian Section */}
          <text y="-45" textAnchor="middle" className="text-[12px] fill-ink/60 font-sans font-bold">司天</text>
          <text y="-15" textAnchor="middle" className="text-[18px] font-bold fill-cinnabar">{siTian}</text>
          
          {/* Zai Quan Section */}
          <text y="25" textAnchor="middle" className="text-[12px] fill-ink/60 font-sans font-bold">在泉</text>
          <text y="55" textAnchor="middle" className="text-[18px] font-bold fill-jade">{zaiQuan}</text>
        </g>

        {/* Outer Labels (Solar Terms) */}
        {steps.map((step, i) => {
          const startAngle = 240 + (i - 2) * 60;
          const midAngle = startAngle + 30;
          const rad = (midAngle * Math.PI) / 180;
          
          return (
            <g key={`outer-${i}`}>
              <text
                x={center + (radius + 20) * Math.cos(rad)}
                y={center + (radius + 20) * Math.sin(rad)}
                textAnchor="middle"
                dominantBaseline="middle"
                className="text-[12px] font-bold fill-ink/60 font-sans"
              >
                {step.term}
              </text>
            </g>
          );
        })}
      </svg>

      {/* Decorative Outer Ring */}
      <div className="absolute inset-0 pointer-events-none border-[1px] border-ink/5 rounded-full scale-[1.1]" />
    </div>
  );
}
