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
        <circle cx={center} cy={center} r={radius + 40} fill="none" stroke="#555555" strokeWidth="1" />
        <circle cx={center} cy={center} r={radius} fill="white" stroke="#555555" strokeWidth="1" />
        <circle cx={center} cy={center} r={radius - 60} fill="none" stroke="#555555" strokeWidth="1" />

        {/* Dividing Lines and Segments */}
        {steps.map((_, i) => {
          const startAngle = 120;
          const angle = (i * 60) + startAngle; 
          const rad = (angle * Math.PI) / 180;
          
          // Retract line start from center to edge of expanded center circle (radius 69)
          const x1 = center + 69 * Math.cos(rad);
          const y1 = center + 69 * Math.sin(rad);
          const x2 = center + (radius + 50) * Math.cos(rad);
          const y2 = center + (radius + 50) * Math.sin(rad);
          
          return (
            <g key={i}>
              <line 
                x1={x1} y1={y1} 
                x2={x2} y2={y2} 
                stroke="#555555" strokeWidth="1" 
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
          const angle = (i * 60) + 150; 
          const startAngle = (angle - 30) * Math.PI / 180;
          const endAngle = (angle + 30) * Math.PI / 180;
          
          // Five Elements Colors (Desaturated)
          const colors = ['#a8d5ba', '#e5989b', '#f4e0a6', '#b3b3b3', '#99c2e6', '#a8d5ba'];
          
          const rel = getRelationshipDetail(zhuQi[i], keQi[i]);
          const relColor = rel.status === '順' ? '#00a86b' : rel.status === '逆' ? '#b22222' : '#666666';

          // Determine if text should be flipped to be upright
          const normalizedAngle = angle % 360;
          const shouldFlip = normalizedAngle > 90 && normalizedAngle < 270;
          const textRotation = shouldFlip ? normalizedAngle + 180 : normalizedAngle;

          return (
            <g key={i}>
              {/* Colored Sector */}
              <path 
                d={`M ${center} ${center} L ${center + radius * Math.cos(startAngle)} ${center + radius * Math.sin(startAngle)} A ${radius} ${radius} 0 0 1 ${center + radius * Math.cos(endAngle)} ${center + radius * Math.sin(endAngle)} Z`}
                fill={colors[i]}
                fillOpacity="0.3"
              />

              {/* Guest Qi (Outer Ring) */}
              <g transform={`translate(${center + (radius - 30) * Math.cos(angle * Math.PI / 180)}, ${center + (radius - 30) * Math.sin(angle * Math.PI / 180)})`}>
                <text
                  textAnchor="middle"
                  dominantBaseline="middle"
                  className={`text-[14px] font-bold ${i === 2 ? 'fill-cinnabar' : i === 5 ? 'fill-jade' : 'fill-ink'}`}
                >
                  {i === 2 ? '司天 ' : i === 5 ? '在泉 ' : '客 '}{keQi[i]}
                </text>
              </g>

              {/* Host Qi (Inner Ring) */}
              <g transform={`translate(${center + (radius - 85) * Math.cos(angle * Math.PI / 180)}, ${center + (radius - 85) * Math.sin(angle * Math.PI / 180)})`}>
                <text
                  textAnchor="middle"
                  dominantBaseline="middle"
                  className="text-[12px] font-bold fill-ink"
                >
                  主 {zhuQi[i]}
                </text>
              </g>

              {/* Relationship Badge */}
              <g transform={`translate(${center + (radius + 25) * Math.cos(angle * Math.PI / 180)}, ${center + (radius + 25) * Math.sin(angle * Math.PI / 180)})`}>
                <rect x="-22" y="-9" width="44" height="18" rx="4" fill={relColor} />
                <text textAnchor="middle" y="4" className="text-[10px] font-bold fill-white">{rel.status}</text>
              </g>
            </g>
          );
        })}

        {/* Center Circle (Si Tian / Zai Quan) */}
        <g transform={`translate(${center}, ${center})`}>
          <circle r="69" fill="white" stroke="#555555" strokeWidth="1" className="shadow-sm" />
          <line x1="-69" y1="0" x2="69" y2="0" stroke="#555555" strokeWidth="1" />
          
          <text y="-25" textAnchor="middle" className="text-[11px] fill-ink/60 font-sans font-bold">司天</text>
          <text y="5" textAnchor="middle" className="text-[16px] font-bold fill-cinnabar">{siTian}</text>
          
          <text y="35" textAnchor="middle" className="text-[11px] fill-ink/60 font-sans font-bold">在泉</text>
          <text y="65" textAnchor="middle" className="text-[16px] font-bold fill-jade">{zaiQuan}</text>
        </g>
      </svg>

      {/* Decorative Compass Lines */}
      <div className="absolute inset-0 pointer-events-none border-[1px] border-ink/5 rounded-full scale-[1.15]" />
    </div>
  );
}
