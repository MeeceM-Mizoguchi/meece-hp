import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Rocket, Cpu, Search, CheckCircle2 } from 'lucide-react';

interface PresentationSlide01Props {
  slideRef: React.RefObject<HTMLDivElement | null>;
  data: {
    label: string;
    description?: string;
  };
}

export const PresentationSlide01: React.FC<PresentationSlide01Props> = ({ slideRef, data }) => {
  return (
    <motion.div
      ref={slideRef}
      key="slide-01"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ scale: 0, opacity: 0, transition: { duration: 0.8, ease: "circIn" } }}
      className="absolute inset-0 flex flex-col md:flex-row items-stretch"
    >
      {/* スライド01：Opening ビジュアル（左） */}
      <div className="w-full h-[40%] md:h-auto md:w-1/2 relative overflow-hidden bg-black">
        <video
          src="/main.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-slate-950/40" />
        <div className="absolute inset-0 bg-stars opacity-40 animate-star-flow" />
      </div>

      {/* スライド01：Opening テキスト（右） */}
      <div className="w-full h-[60%] md:h-auto md:w-1/2 p-8 md:p-16 flex flex-col justify-center bg-white">
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mb-2 md:mb-4 flex items-center gap-4"
        >
          <div className="flex items-center gap-2">
            <Sparkles size={14} className="text-meece-blue" />
            <span className="text-[11px] tracking-[0.4em] font-black text-meece-blue uppercase">{data.label}</span>
          </div>
          <div className="flex items-center gap-1 opacity-20">
            <Rocket size={12} />
            <Cpu size={12} />
            <Search size={12} />
            <CheckCircle2 size={12} />
          </div>
        </motion.div>

        <h1 className="text-3xl md:text-[3.5rem] leading-[1.1] font-black tracking-tighter mb-4 md:mb-8 text-slate-900">
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1.5 }}
            className="bg-linear-to-r from-meece-blue via-meece-purple to-meece-pink bg-clip-text text-transparent"
          >
            ITで社会を支え、<br/>物語を完成させる。
          </motion.span>
        </h1>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="space-y-4 mb-6 md:mb-12"
        >
          <p className="text-lg md:text-xl text-slate-500 font-light tracking-tight">
            {data?.description}
          </p>
        </motion.div>

        <div className="flex items-center gap-4 mt-4 md:mt-auto opacity-40">
          <div className="h-px w-12 bg-slate-900" />
          <span className="text-[10px] tracking-[0.3em] text-slate-900 font-black uppercase italic">Presented by Meece Inc.</span>
        </div>
      </div>
    </motion.div>
  );
};