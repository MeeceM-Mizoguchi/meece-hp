import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Rocket, Search, Sparkles, CheckCircle2 } from 'lucide-react';

interface PresentationSlide02Props {
  data: {
    title: string;
    description: string;
    domains?: {
      char: string;
      name: string;
      desc: string;
    }[];
  };
}

export const PresentationSlide02: React.FC<PresentationSlide02Props> = ({ data }) => {
  return (
    <motion.div
      key="slide-02"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.1 }}
      className="absolute inset-0 bg-linear-to-br from-white to-slate-50 flex flex-col md:flex-row items-stretch p-4 md:p-16 gap-4 md:gap-12 overflow-hidden"
    >
      {/* 背景の巨大歯車演出：PC版のみアニメーションを復活 */}
      <div className="absolute -right-20 -bottom-20 opacity-[0.01] md:opacity-[0.03] pointer-events-none md:animate-pulse">
        <Cpu size={600} strokeWidth={1} className="rotate-12" />
      </div>

      {/* 左側：タイトルと文脈 */}
      <div className="w-full md:w-2/5 flex flex-col justify-center items-center md:items-start text-center md:text-left z-10 shrink-0">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-2 md:mb-6"
        >
          <span className="text-2xl md:text-6xl font-black text-slate-200 tracking-tighter">2022 - 2023</span>
        </motion.div>
        
        <h2 className="text-lg md:text-4xl font-black text-slate-900 leading-tight mb-2 md:mb-6 whitespace-pre-wrap">
          {data.title}
        </h2>
        
        <p className="text-slate-500 text-[10px] md:text-base leading-tight md:leading-relaxed font-medium max-w-md">
          {data.description}
        </p>
      </div>

      {/* 右側：5大ドメイン (Bento Grid) */}
      <div className="w-full md:w-3/5 grid grid-cols-2 md:grid-cols-6 md:grid-rows-2 gap-2 md:gap-4 z-10 pb-4 md:pb-0 grow min-h-0">
        {data.domains?.map((domain, idx) => (
          <motion.div
            key={domain.char + idx}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + idx * 0.1 }}
            className={`
              bg-white/95 backdrop-blur-md border border-slate-200/60 rounded-lg p-1.5 md:p-5 shadow-xl flex flex-col justify-between transition-all hover:border-slate-300 border-t-4
              ${idx === 0 ? 'col-span-1 md:col-span-3 md:row-span-1 border-t-[#0052CC]' : ''}
              ${idx === 1 ? 'col-span-1 md:col-span-3 md:row-span-1 border-t-[#0A84FF]' : ''}
              ${idx === 2 ? 'col-span-1 md:col-span-2 md:row-span-1 border-t-[#8E5CFF]' : ''}
              ${idx === 3 ? 'col-span-1 md:col-span-2 md:row-span-1 border-t-[#FF4081]' : ''}
              ${idx === 4 ? 'col-span-2 md:col-span-2 md:row-span-1 border-t-[#00C853]' : ''}
            `}
          >
            <div className="flex items-center justify-between mb-1">
              <span className={`text-xl md:text-3xl font-black leading-none opacity-20 ${
                idx === 0 ? 'text-[#0052CC]' : 
                idx === 1 ? 'text-[#0A84FF]' : 
                idx === 2 ? 'text-[#8E5CFF]' : 
                idx === 3 ? 'text-[#FF4081]' : 'text-[#00C853]'
              }`}>{domain.char}</span>
              <div className="p-1 bg-slate-100/50 rounded-md">
                {idx === 0 && <Rocket className="w-3 h-3 md:w-4 md:h-4 text-[#0052CC]" />}
                {idx === 1 && <Search className="w-3 h-3 md:w-4 md:h-4 text-[#0A84FF]" />}
                {idx === 2 && <Sparkles className="w-3 h-3 md:w-4 md:h-4 text-[#8E5CFF]" />}
                {idx === 3 && <Cpu className="w-3 h-3 md:w-4 md:h-4 text-[#FF4081]" />}
                {idx === 4 && <CheckCircle2 className="w-3 h-3 md:w-4 md:h-4 text-[#00C853]" />}
              </div>
            </div>
            <div className="flex flex-col gap-0.5 overflow-hidden">
              <h3 className="text-[9px] md:text-[13px] font-black tracking-tighter text-[#1D1D1F] uppercase border-b border-slate-100 pb-0.5 inline-block w-fit whitespace-nowrap">{domain.name}</h3>
              <p className="text-[8px] md:text-[12px] font-bold text-slate-800 leading-[1.1] md:leading-tight tracking-tighter">
                {domain.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};