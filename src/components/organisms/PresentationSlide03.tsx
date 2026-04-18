import React from 'react';
import { motion } from 'framer-motion';
import { Cpu } from 'lucide-react';

interface PresentationSlide03Props {
  data: {
    title: string;
    description: string;
    rdPillars?: {
      id: string;
      title: string;
      desc: string;
    }[];
  };
}

export const PresentationSlide03: React.FC<PresentationSlide03Props> = ({ data }) => {
  return (
    <motion.div
      key="slide-03"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      className="absolute inset-0 bg-white flex flex-col md:flex-row items-stretch p-12 md:p-16 gap-12 overflow-hidden"
    >
      {/* 背景演出：回路ラインと社外秘スタンプ */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <svg width="100%" height="100%" viewBox="0 0 800 600" fill="none" xmlns="http://www.w3.org/2000/svg" className="animate-pulse">
          <path d="M0 100H200L250 150H400L450 100H800" stroke="currentColor" strokeWidth="1" />
          <path d="M0 300H150L200 250H600L650 300H800" stroke="currentColor" strokeWidth="1" />
          <path d="M0 500H300L350 450H550L600 500H800" stroke="currentColor" strokeWidth="1" />
          <circle cx="250" cy="150" r="4" fill="currentColor" />
          <circle cx="400" cy="150" r="4" fill="currentColor" />
          <circle cx="200" cy="250" r="4" fill="currentColor" />
        </svg>
      </div>
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
        <span className="text-[120px] font-black text-slate-100 uppercase -rotate-45 opacity-5 whitespace-nowrap">
          CONFIDENTIAL / 社外秘
        </span>
      </div>

      {/* 左側：テキストエリア */}
      <div className="w-full md:w-2/5 flex flex-col justify-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-4"
        >
          <span className="text-2xl md:text-3xl font-black text-[#0052CC] tracking-widest italic">2024 - 2025</span>
        </motion.div>
        
        <h2 className="text-3xl md:text-5xl font-black text-slate-900 leading-[1.2] mb-8">
          {data.title}
        </h2>
        
        <p className="text-slate-700 text-sm md:text-base leading-relaxed font-bold max-w-md">
          {data.description}
        </p>

        <div className="mt-12 p-4 border-l-4 border-[#0052CC] bg-slate-50">
          <p className="text-[12px] font-black text-slate-800 tracking-wider">
            CORE MESSAGE:
            <span className="block text-[15px] mt-1 text-[#0052CC] font-bold">「2026年への伏線。知能を研鑽した, 沈黙の2年間。」</span>
          </p>
        </div>
      </div>

      {/* 右側：垂直テックスタック・ビジュアル */}
      <div className="w-full md:w-3/5 relative flex items-center justify-center z-10 pr-8">
        {/* 中央を通るエネルギーライン */}
        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-linear-to-b from-transparent via-[#0052CC]/30 to-transparent" />
        
        <div className="relative w-full flex flex-col gap-6 items-center">
          {data.rdPillars?.map((pillar, idx) => (
            <motion.div
              key={pillar.id}
              initial={{ opacity: 0, x: idx % 2 === 0 ? 20 : -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8 + idx * 0.2 }}
              className={`
                relative w-full max-w-95 p-5 bg-white shadow-xl border border-slate-100 rounded-xl
                flex items-start gap-5
                ${idx % 2 === 0 ? 'ml-24' : '-ml-24'}
              `}
            >
              {/* 接続ポイント */}
              <div className={`absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-white border-2 border-[#0052CC] rounded-full z-20
                ${idx % 2 === 0 ? '-left-10' : '-right-10'}
              `} />
              
              <div className="shrink-0 w-12 h-12 bg-slate-50 rounded-lg flex items-center justify-center text-[#0052CC] font-black text-lg">
                {pillar.id}
              </div>
              
              <div className="flex flex-col gap-1">
                <h3 className="text-[14px] font-black text-slate-900 tracking-tight uppercase">{pillar.title}</h3>
                <p className="text-[12px] font-bold text-slate-600 leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            </motion.div>
          ))}

          {/* 最下部のコア・シンボル */}
          <motion.div 
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.5 }}
            className="mt-4 w-12 h-12 bg-[#0052CC] rounded-full shadow-[0_0_30px_rgba(0,82,204,0.4)] flex items-center justify-center text-white"
          >
            <Cpu size={20} />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};