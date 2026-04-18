import React from 'react';
import { motion } from 'framer-motion';
import { Box, Rocket, Globe, Layers, Sparkles } from 'lucide-react';

interface PresentationSlide12Props {
  data: {
    label: string;
    title: string;
    description: string;
    steps?: {
      id: string;
      label: string;
      desc: string;
    }[];
  };
}

export const PresentationSlide12: React.FC<PresentationSlide12Props> = ({ data }) => {
  return (
    <motion.div
      key="slide-12-future"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="absolute inset-0 bg-slate-50 flex flex-col justify-between pt-8 pb-32 px-12 md:px-20 overflow-hidden"
    >
      {/* 背景演出：空間の奥行きと光の粒子 */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(168,85,247,0.08),transparent_70%)]" />
        <div className="absolute inset-0 bg-stars opacity-10 animate-star-flow" />
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ y: "110%", x: `${Math.random() * 100}%`, scale: Math.random() }}
            animate={{ 
              y: "-10%", 
              opacity: [0, 0.5, 0],
            }}
            transition={{ 
              duration: 5 + Math.random() * 5, 
              repeat: Infinity, 
              delay: Math.random() * 5,
              ease: "linear" 
            }}
            className="absolute w-1 h-1 bg-meece-purple rounded-full blur-[1px]"
          />
        ))}
      </div>

      {/* セキュリティスタンプ */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
        <span className="text-[120px] font-black text-slate-900 uppercase -rotate-45 opacity-[0.03] whitespace-nowrap">
          CONFIDENTIAL / 社外秘
        </span>
      </div>

      {/* 中央エリア：コア・ビジュアル & タイトル */}
      <div className="relative z-10 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          className="mb-4 relative"
        >
          {/* コアの背後で回転する光輪 */}
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute -inset-16 border border-dashed border-meece-purple/20 rounded-full"
          />
          <motion.div 
            animate={{ rotate: -360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="absolute -inset-24 border border-dotted border-meece-pink/10 rounded-full"
          />
          
          {/* 神秘的なキューブ・プリズム */}
          <div className="relative w-20 h-20 flex items-center justify-center">
            <motion.div
              animate={{ 
                rotateY: 360,
                y: [0, -8, 0]
              }}
              transition={{ 
                rotateY: { duration: 6, repeat: Infinity, ease: "linear" },
                y: { duration: 3, repeat: Infinity, ease: "easeInOut" }
              }}
              className="text-meece-purple"
            >
              <Box size={56} strokeWidth={1.5} className="drop-shadow-[0_0_20px_rgba(168,85,247,0.6)]" />
            </motion.div>
            <Sparkles className="absolute -top-4 -right-4 text-meece-pink animate-pulse" size={24} />
          </div>
        </motion.div>

        <motion.div
          initial={{ y: 15, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="max-w-4xl"
        >
          <span className="text-slate-400 font-black tracking-[0.5em] text-[10px] uppercase mb-2 block">
            {data.label}
          </span>
          <h2 className="text-2xl md:text-4xl font-black text-slate-900 leading-tight mb-4 tracking-tighter">
            <span className="bg-linear-to-r from-slate-800 via-meece-purple to-meece-pink bg-clip-text text-transparent">
              {data.title}
            </span>
          </h2>
          <p className="text-slate-500 text-[12px] md:text-[13px] font-bold leading-relaxed max-w-2xl mx-auto">
            {data.description}
          </p>
        </motion.div>
      </div>

      {/* 下部：フューチャー・ロードマップ */}
      <div className="relative top-0.75 z-20 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto w-full mb-4">
        {data.steps?.map((step, idx) => (
          <motion.div
            key={step.id}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 + idx * 0.2 }}
            className="relative group"
          >
            {/* 背景の光の輪郭 */}
            <div className="absolute -inset-0.5 bg-linear-to-b from-meece-purple/20 to-transparent rounded-4xl opacity-0 group-hover:opacity-100 transition duration-500" />
            
            <div className="relative bg-white/60 backdrop-blur-xl p-5 rounded-4xl border border-white/40 shadow-sm flex flex-col gap-3 items-center text-center transition-all duration-500 group-hover:bg-white/80 group-hover:shadow-xl">
              <div className="w-12 h-12 rounded-2xl bg-linear-to-br from-white to-slate-50 shadow-inner flex items-center justify-center text-meece-purple group-hover:text-meece-pink transition-colors duration-500">
                {idx === 0 && <Layers size={24} strokeWidth={1.5} />}
                {idx === 1 && <Rocket size={24} strokeWidth={1.5} />}
                {idx === 2 && <Globe size={24} strokeWidth={1.5} />}
              </div>

              <div className="flex flex-col items-center">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-[14px] font-black text-slate-900 tracking-tighter">
                    {idx === 0 && "0 → 1"}
                    {idx === 1 && "1 → 10"}
                    {idx === 2 && "10 → ∞"}
                  </span>
                  <div className="w-1 h-1 rounded-full bg-meece-pink/40" />
                  <span className="text-[9px] font-black text-meece-purple uppercase tracking-widest leading-none">
                    {idx === 0 && "Launch"}
                    {idx === 1 && "Vertical"}
                    {idx === 2 && "Global"}
                  </span>
                </div>
                <h3 className="text-[16px] font-black text-slate-900 mb-2 leading-none">{step.label}</h3>
                <div className="w-8 h-0.5 bg-linear-to-r from-meece-purple/30 to-meece-pink/30 mb-3 rounded-full" />
                <p className="text-[11px] font-extrabold text-slate-500 leading-relaxed px-1">
                  {step.desc}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* 右下の装飾ラベル */}
      <div className="absolute bottom-8 right-12 opacity-20 flex items-center gap-4">
        <div className="h-px w-12 bg-slate-900" />
        <span className="text-[10px] font-black text-slate-900 tracking-[0.3em] uppercase italic">Beyond 2026 Strategy</span>
      </div>
    </motion.div>
  );
};