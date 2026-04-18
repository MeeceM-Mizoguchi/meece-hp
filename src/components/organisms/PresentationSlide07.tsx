import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Rocket, CheckCircle2, MousePointer2, ShieldCheck } from 'lucide-react';

interface PresentationSlide07Props {
  data: {
    impacts?: {
      id: string;
      title: string;
      category: string;
    }[];
  };
}

export const PresentationSlide07: React.FC<PresentationSlide07Props> = ({ data }) => {
  return (
    <motion.div
      key="slide-07"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="absolute inset-0 bg-white flex flex-col p-12 md:p-16 gap-4 overflow-hidden"
    >
      <div className="relative z-10 text-center mb-2">
        <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight mb-2">
          「動く資産」が経営をアップデートする。
        </h2>
        <p className="text-slate-700 text-base font-bold max-w-2xl mx-auto leading-tight">
          説得ではなく、証明を。動く資産が、意思決定を加速させる。
        </p>
      </div>

      {/* 中央：対比ビジュアル */}
      <div className="relative z-10 flex-1 grid grid-cols-12 gap-8 items-center -mt-6">
        <div className="col-span-5 flex flex-col items-center">
          <div className="p-6 bg-slate-50 rounded-2xl border-2 border-dashed border-slate-200 opacity-50 relative">
            <div className="space-y-2">
              <div className="w-32 h-2 bg-slate-200 rounded" />
              <div className="w-40 h-2 bg-slate-200 rounded" />
              <div className="w-24 h-2 bg-slate-200 rounded" />
            </div>
            <div className="absolute -top-4 -right-4 w-10 h-10 bg-white shadow-md rounded-full flex items-center justify-center text-xl">❓</div>
          </div>
          <span className="mt-4 font-black text-slate-400 text-xl tracking-tighter uppercase italic">Persuasion</span>
        </div>

        <div className="col-span-2 flex flex-col items-center">
          <motion.div animate={{ x: [-10, 10, -10] }} transition={{ repeat: Infinity, duration: 2 }}>
            <ChevronRight className="text-meece-blue" size={48} />
          </motion.div>
        </div>

        <div className="col-span-5 flex flex-col items-center">
          <div className="p-6 bg-white shadow-2xl rounded-2xl border border-meece-blue/20 relative">
            <div className="w-40 h-24 bg-slate-900 rounded-lg flex items-center justify-center">
              <Rocket className="text-meece-blue" size={32} />
            </div>
            <motion.div 
              initial={{ scale: 0, opacity: 0, rotate: -20 }}
              animate={{ scale: 1, opacity: 1, rotate: 10 }}
              transition={{ delay: 1 }}
              className="absolute -top-6 -right-6 bg-emerald-500 text-white px-3 py-1 rounded font-black text-xs shadow-lg"
            >
              APPROVED
            </motion.div>
            <div className="absolute -bottom-4 -left-4 w-10 h-10 bg-white shadow-md rounded-full flex items-center justify-center text-xl">❗</div>
          </div>
          <span className="mt-4 font-black text-meece-blue text-xl tracking-tighter uppercase italic meece-glow">Proof</span>
        </div>
      </div>

      {/* 下部：インパクトバッジUI（見切れ防止） */}
      <div className="relative z-10 grid grid-cols-3 gap-4 mt-auto mb-4">
        {data.impacts?.map((impact, idx) => (
          <motion.div
            key={impact.id}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 1.2 + idx * 0.15 }}
            className="flex items-center gap-3 p-3 bg-white shadow-md border border-slate-100 rounded-xl"
          >
            <div className="shrink-0 w-10 h-10 rounded-lg bg-slate-50 flex items-center justify-center">
              {idx === 0 && <CheckCircle2 className="text-emerald-500" size={20} />}
              {idx === 1 && <MousePointer2 className="text-blue-500" size={20} />}
              {idx === 2 && <ShieldCheck className="text-amber-500" size={20} />}
            </div>
            <div className="flex flex-col">
              <span className="text-[9px] font-black text-slate-400 uppercase tracking-tighter leading-none mb-1">{impact.category}</span>
              <h4 className="font-black text-slate-900 text-[13px] leading-none tracking-tight">{impact.title}</h4>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};