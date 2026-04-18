import React from 'react';
import { motion } from 'framer-motion';
import { Zap, ChevronRight, Gauge } from 'lucide-react';

interface PresentationSlide06Props {
  data: {
    comparison?: {
      task: string;
      traditional: string;
      meece: string;
      rate: string;
    }[];
  };
}

export const PresentationSlide06: React.FC<PresentationSlide06Props> = ({ data }) => {
  return (
    <motion.div
      key="slide-06"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="absolute inset-0 bg-white flex flex-col p-12 md:p-16 gap-4 overflow-hidden"
    >
      {/* タイトルエリア */}
      <div className="relative z-10 text-center mb-2">
        <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight mb-2">
          従来比 87.5% の工期削減
        </h2>
        <p className="text-slate-700 text-base font-bold max-w-2xl mx-auto leading-tight">
          最短24時間、最大でも2週間での実装力。開発の「単位」を根本から変えます。
        </p>
      </div>

      {/* メインコンテンツ */}
      <div className="relative z-10 flex-1 grid grid-cols-12 gap-12 items-center -mt-4">
        {/* 左側：数値インパクト (40%) */}
        <div className="col-span-5 flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            <div className="flex flex-col">
              <span className="text-slate-400 font-black text-xl tracking-tighter mb-2 uppercase italic">Reduction Rate</span>
              <div className="flex items-baseline gap-2">
                <span className="text-[120px] font-black text-slate-900 leading-none tracking-tighter">
                  87.5
                </span>
                <span className="text-5xl font-black text-meece-blue">%</span>
              </div>
            </div>
            <motion.div 
              className="absolute -inset-4 bg-meece-blue/5 rounded-full blur-3xl -z-10"
              animate={{ opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 3, repeat: Infinity }}
            />
          </motion.div>
          <motion.div 
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="mt-6 p-4 border-l-4 border-meece-blue bg-slate-50"
          >
            <p className="text-slate-600 font-bold leading-relaxed text-sm">
              「基礎実装」と「環境構築」をAIが完全自動化。<br />
              人間は「価値の本質」にのみ時間を投下できます。
            </p>
          </motion.div>
        </div>

        {/* 右側：対比チャート (70%) */}
        <div className="col-span-7 pr-8 scale-95 translate-y-6">
          <div className="space-y-2">
            {data.comparison?.map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 1.5 + (idx * 0.2) }}
                className="relative"
              >
                <div className="flex justify-between items-end mb-1 px-1">
                  <span className="font-black text-slate-900 text-[13px] tracking-widest">{item.task}</span>
                  <div className="flex gap-4">
                    <span className="text-[9px] font-bold text-slate-400">従来: {item.traditional}</span>
                    <span className="text-[9px] font-black text-meece-blue uppercase">Meece: {item.meece}</span>
                  </div>
                </div>
                {/* プログレスバー背景 */}
                <div className="h-3 bg-slate-100 rounded-full overflow-hidden relative border border-slate-200/50">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 2, delay: 2 }}
                    className="absolute inset-0 bg-slate-200/60"
                  />
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: idx === 0 ? "10%" : idx === 1 ? "15%" : "13%" }}
                    transition={{ duration: 0.8, delay: 2.2, ease: "circOut" }}
                    className="absolute inset-y-0 left-0 bg-linear-to-r from-meece-blue to-meece-purple rounded-full z-10 shadow-[0_0_10px_rgba(0,229,255,0.4)]"
                  />
                </div>
              </motion.div>
            ))}
          </div>

          {/* 合計のインパクトカード */}
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 2.5 }}
            className="mt-10 bg-slate-900 p-6 rounded-2xl shadow-2xl flex items-center justify-between border border-white/10"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-meece-blue">
                <Zap size={24} fill="currentColor" />
              </div>
              <div>
                <p className="text-slate-400 text-[10px] font-black tracking-widest uppercase">Total Development Period</p>
                <div className="flex items-baseline gap-2">
                  <span className="text-white text-2xl font-black">8 WEEKS</span>
                  <ChevronRight className="text-slate-500" size={16} />
                  <span className="text-meece-blue text-2xl font-black italic">1 WEEK</span>
                </div>
              </div>
            </div>
            <div className="text-right">
              <p className="text-slate-500 text-[10px] font-bold">Confidential Data</p>
              <Gauge size={20} className="text-slate-700 ml-auto mt-1" />
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};