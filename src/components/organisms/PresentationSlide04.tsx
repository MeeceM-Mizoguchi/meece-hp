import React from 'react';
import { motion } from 'framer-motion';
import { ShieldAlert } from 'lucide-react';

interface PresentationSlide04Props {
  data: {
    title: string;
    description: string;
    pains?: {
      id: string;
      title: string;
      desc: string;
    }[];
  };
}

export const PresentationSlide04: React.FC<PresentationSlide04Props> = ({ data }) => {
  return (
    <motion.div
      key="slide-04"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, filter: "grayscale(1)" }}
      className="absolute inset-0 bg-white flex flex-col p-12 md:p-16 gap-8 overflow-hidden"
    >
      {/* 背景演出：断線した回路と社外秘スタンプ */}
      <div className="absolute inset-0 opacity-[0.08] pointer-events-none">
        <svg width="100%" height="100%" viewBox="0 0 800 600" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 150H180 M220 150H400L450 100" stroke="#F43F5E" strokeWidth="2" strokeDasharray="4 4" />
          <path d="M600 100H800" stroke="#F43F5E" strokeWidth="2" />
          <path d="M0 450H300L330 420 M370 420H600" stroke="#F43F5E" strokeWidth="1" strokeDasharray="8 4" />
          <circle cx="200" cy="150" r="6" stroke="#F43F5E" strokeWidth="1" className="animate-ping" />
        </svg>
      </div>
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
        <span className="text-[120px] font-black text-rose-900 uppercase -rotate-45 opacity-[0.03] whitespace-nowrap">
          CONFIDENTIAL / 社外秘
        </span>
      </div>

      {/* 上部：タイトルエリア */}
      <div className="relative z-10 flex flex-col items-center text-center">
        <motion.span 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-rose-500 font-black tracking-[0.3em] text-sm uppercase mb-4"
        >
          あなたの物語は、今この瞬間も止まっていませんか？
        </motion.span>
        <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight mb-6">
          {data.title}
        </h2>
        <p className="text-slate-600 text-lg font-bold max-w-3xl leading-relaxed">
          {data.description}
        </p>
      </div>

      {/* 中央：停滞バー (Stagnation Bar) */}
      <div className="relative z-10 w-full py-8">
        <div className="w-full h-12 bg-rose-50 rounded-full border border-rose-100 overflow-hidden relative">
          <motion.div 
            initial={{ width: "0%" }}
            animate={{ width: "65%" }}
            transition={{ duration: 2, ease: "easeOut" }}
            className="h-full bg-rose-500 relative"
          >
            <motion.div 
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="absolute inset-0 bg-white/20"
            />
          </motion.div>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-rose-900 font-black tracking-[0.5em] text-xs uppercase animate-pulse">
              SYSTEM STAGNATION DETECTED ... 65% LOSS
            </span>
          </div>
        </div>
      </div>

      {/* 下部：3大要因タイル */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-6">
        {data.pains?.map((pain, idx) => (
          <motion.div
            key={pain.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 + idx * 0.2 }}
            className="bg-rose-50/80 backdrop-blur-md border border-rose-100 p-6 rounded-2xl shadow-xl flex flex-col gap-4 group hover:bg-rose-500 transition-colors duration-300"
          >
            <div className="flex items-center justify-between">
              <span className="text-rose-500 font-black text-sm group-hover:text-white">ERROR_{pain.id}</span>
              <ShieldAlert className="text-rose-500 group-hover:text-white group-hover:rotate-12 transition-transform" size={20} />
            </div>
            <div>
              <h3 className="text-xl font-black text-slate-900 group-hover:text-white mb-2">{pain.title}</h3>
              <p className="text-sm font-bold text-slate-600 group-hover:text-white/90 leading-relaxed">
                {pain.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};