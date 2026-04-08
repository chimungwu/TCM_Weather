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
  const radius = 200;

  return (
    <div className="relative w-full max-w-[500px] mx-auto aspect-square">
      <svg viewBox="-70 -70 640 640" className="w-full h-full font-serif">
        {/* Background Circles */}
        <circle cx={center} cy={center} r={radius + 40} fill="none" stroke="#1a1a1a" strokeWidth="1" strokeOpacity="0.1" />
        <circle cx={center} cy={center} r={radius} fill="white" stroke="#1a1a1a" strokeWidth="2" strokeOpacity="0.2" />
        <circle cx={center} cy={center} r={radius - 60} fill="none" stroke="#1a1a1a" strokeWidth="1" strokeOpacity="0.1" />

        {/* Dividing Lines and Segments */}
        {steps.map((_, i) => {
          // Base angle for the start of the first segment (初之氣)
          // We want 三之氣 (i=2) to be at Top (270deg)
          // So i=0 starts at 270 - 120 - 30 = 120deg
          const startAngle = 120;
          const angle = (i * 60) + startAngle; 
          const rad = (angle * Math.PI) / 180;
          const x2 = center + (radius + 50) * Math.cos(rad);
          const y2 = center + (radius + 50) * Math.sin(rad);
          
          return (
            <g key={i}>
              <line 
                x1={center} y1={center} 
                x2={x2} y2={y2} 
                stroke="#1a1a1a" strokeWidth="1" strokeOpacity="0.2" 
              />
              
              {/* Solar Terms & Dates (Outer) */}
              {/* Positioned at the center of the segment arc */}
              <text
                x={center + (radius + 72) * Math.cos(rad + (30 * Math.PI / 180))}
                y={center + (radius + 72) * Math.sin(rad + (30 * Math.PI / 180))}
                textAnchor="middle"
                className="text-[14px] fill-ink font-sans font-bold"
              >
                {steps[i].term}
              </text>
              <text
                x={center + (radius + 105) * Math.cos(rad + (30 * Math.PI / 180))}
                y={center + (radius + 105) * Math.sin(rad + (30 * Math.PI / 180))}
                textAnchor="middle"
                className="text-[11px] fill-ink/70 font-sans font-bold"
              >
                {steps[i].date}
              </text>
            </g>
          );
        })}

        {/* Qi Content */}
        {steps.map((step, i) => {
          // Center of segment
          // i=0: 150 (approx 5 o'clock)
          // i=1: 210 (approx 7 o'clock)
          // i=2: 270 (Top - Si Tian)
          // i=3: 330 (approx 1 o'clock)
          // i=4: 390/30 (approx 3 o'clock)
          // i=5: 450/90 (Bottom - Zai Quan)
          const angle = (i * 60) + 150; 
          const rad = (angle * Math.PI) / 180;
          
          const rel = getRelationshipDetail(zhuQi[i], keQi[i]);
          const relColor = rel.status === '順' ? '#00a86b' : rel.status === '逆' ? '#b22222' : '#666666';

          // Determine if text should be flipped to be upright
          const normalizedAngle = angle % 360;
          const shouldFlip = normalizedAngle > 90 && normalizedAngle < 270;
          const textRotation = shouldFlip ? normalizedAngle + 180 : normalizedAngle;

          return (
            <g key={i}>
              {/* Segment Highlight for Si Tian and Zai Quan */}
              {i === 2 && (
                <path 
                  d={`M ${center} ${center} L ${center + radius * Math.cos(120 * Math.PI / 180)} ${center + radius * Math.sin(120 * Math.PI / 180)} A ${radius} ${radius} 0 0 1 ${center + radius * Math.cos(180 * Math.PI / 180)} ${center + radius * Math.sin(180 * Math.PI / 180)} Z`}
                  fill="none"
                />
              )}

              {/* Guest Qi (Outer Ring) - Rotated along arc */}
              <g transform={`translate(${center + (radius - 25) * Math.cos(rad)}, ${center + (radius - 25) * Math.sin(rad)}) rotate(${textRotation - 90})`}>
                <text
                  textAnchor="middle"
                  dominantBaseline="middle"
                  className={`text-[15px] font-bold ${i === 2 ? 'fill-cinnabar' : i === 5 ? 'fill-jade' : 'fill-cinnabar/60'}`}
                >
                  {i === 2 ? '司天 ' : i === 5 ? '在泉 ' : '客 '}{keQi[i]}
                </text>
              </g>

              {/* Host Qi (Inner Ring) - Rotated along arc */}
              <g transform={`translate(${center + (radius - 75) * Math.cos(rad)}, ${center + (radius - 75) * Math.sin(rad)}) rotate(${textRotation - 90})`}>
                <text
                  textAnchor="middle"
                  dominantBaseline="middle"
                  className="text-[13px] font-bold fill-ink"
                >
                  主 {zhuQi[i]}
                </text>
              </g>

              {/* Step Name - Rotated along arc */}
              <g transform={`translate(${center + (radius - 120) * Math.cos(rad)}, ${center + (radius - 120) * Math.sin(rad)}) rotate(${textRotation - 90})`}>
                <text
                  textAnchor="middle"
                  dominantBaseline="middle"
                  className="text-[11px] fill-ink/50 font-sans font-medium"
                >
                  {step.name}
                </text>
              </g>

              {/* Relationship Badge */}
              <g transform={`translate(${center + (radius + 25) * Math.cos(rad)}, ${center + (radius + 25) * Math.sin(rad)}) rotate(${normalizedAngle - 90})`}>
                <rect x="-22" y="-9" width="44" height="18" rx="4" fill={relColor} />
                <text textAnchor="middle" y="4" className="text-[10px] font-bold fill-white">{rel.status}</text>
              </g>
            </g>
          );
        })}

        {/* Center Circle (Si Tian / Zai Quan) */}
        <g transform={`translate(${center}, ${center})`}>
          <circle r="55" fill="white" stroke="#1a1a1a" strokeWidth="2" className="shadow-sm" />
          <line x1="-55" y1="0" x2="55" y2="0" stroke="#1a1a1a" strokeWidth="1" strokeOpacity="0.3" />
          
          <text y="-25" textAnchor="middle" className="text-[11px] fill-ink/60 font-sans font-bold">司天</text>
          <text y="-5" textAnchor="middle" className="text-[14px] font-bold fill-cinnabar">{siTian}</text>
          
          <text y="25" textAnchor="middle" className="text-[11px] fill-ink/60 font-sans font-bold">在泉</text>
          <text y="42" textAnchor="middle" className="text-[14px] font-bold fill-jade">{zaiQuan}</text>
        </g>
      </svg>

      {/* Decorative Compass Lines */}
      <div className="absolute inset-0 pointer-events-none border-[1px] border-ink/5 rounded-full scale-[1.15]" />
    </div>
  );
}
