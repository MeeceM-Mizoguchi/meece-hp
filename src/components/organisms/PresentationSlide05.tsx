import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, CheckCircle2, Sparkles, Cpu } from 'lucide-react';

interface PresentationSlide05Props {
  data: {
    title: string;
    description: string;
    outputs?: {
      id: string;
      title: string;
      desc: string;
    }[];
  };
}

export const PresentationSlide05: React.FC<PresentationSlide05Props> = ({ data }) => {
  return (
    <motion.div
      key="slide-05"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="absolute inset-0 bg-white flex flex-col p-12 md:p-16 gap-6 overflow-hidden"
    >
      {/* 背景演出：社外秘スタンプ */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
        <span className="text-[120px] font-black text-slate-900 uppercase -rotate-45 opacity-[0.03] whitespace-nowrap">
          CONFIDENTIAL / 社外秘
        </span>
      </div>

      {/* タイトルエリア */}
      <div className="relative z-10 text-center mb-8">
        <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight mb-4">
          {data.title}
        </h2>
        <p className="text-slate-700 text-lg font-bold max-w-3xl mx-auto leading-relaxed">
          {data.description}
        </p>
      </div>

      {/* メインコンテンツ：変換フロー */}
      <div className="relative z-10 flex-1 grid grid-cols-12 gap-4 items-center w-full -mt-20">
        
        {/* 左：Input (Idea) - ブラッシュアップ版 */}
        <div className="col-span-4 flex flex-col gap-3 pr-4 relative">
          {/* 1. 音声指示 (チャットバブル風) */}
          <motion.div 
            initial={{ x: -20, opacity: 0, rotate: -2 }}
            animate={{ x: 0, opacity: 1, rotate: -2 }}
            transition={{ delay: 0.5, type: "spring", stiffness: 100 }}
            className="p-4 bg-white rounded-tr-2xl rounded-tl-2xl rounded-bl-2xl shadow-lg border border-slate-100 self-start"
          >
            <div className="flex items-center gap-3 mb-2.5 border-b border-slate-100 pb-2">
              <div className="w-6 h-6 rounded-full bg-linear-to-br from-meece-blue to-meece-purple flex items-center justify-center">
                <Rocket size={12} className="text-white" />
              </div>
              <span className="text-[10px] font-black text-slate-900 tracking-wider">USER VOICE</span>
              <span className="ml-auto text-[9px] font-bold text-slate-400">0:15</span>
            </div>
            <p className="text-xs font-extrabold text-slate-700 leading-relaxed italic">
              「店舗とユーザーを繋ぐ、新しい流通サイクルのデモ画面を作って欲しい」
            </p>
          </motion.div>

          {/* 2. 手書き付箋紙 (Sticky Note) */}
          <motion.div 
            initial={{ x: -20, opacity: 0, rotate: 3 }}
            animate={{ x: 0, opacity: 1, rotate: 3 }}
            transition={{ delay: 0.7, type: "spring", stiffness: 100 }}
            className="p-5 bg-amber-50 rounded-md shadow-lg border-l-4 border-amber-300 relative aspect-square flex flex-col"
            style={{ transformOrigin: "top left" }}
          >
            <div className="absolute top-2 right-2 text-amber-300">
              <Rocket size={16} className="rotate-45" />
            </div>
            <p className="text-[10px] font-black text-amber-900 uppercase tracking-widest mb-3 pb-1 border-b border-amber-100">Handwritten Memo</p>
            <div className="grow space-y-1.5 opacity-70">
              <div className="w-full h-px bg-amber-200" />
              <div className="w-4/5 h-px bg-amber-200" />
              <div className="w-full h-px bg-amber-200" />
              <div className="w-3/4 h-px bg-amber-200" />
            </div>
            <CheckCircle2 size={16} className="text-emerald-500 mt-auto ml-auto" />
          </motion.div>
        </div>

        {/* 中央：Process (Meece Core) */}
        <div className="col-span-4 relative flex items-center justify-center z-20 h-full -mt-45">
          <div className="relative flex flex-col items-center justify-center">
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div 
                animate={{ scale: [1, 1.2, 1], rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                className="w-40 h-40 bg-meece-blue/5 rounded-full blur-3xl"
              />
            </div>
            <div className="relative bg-slate-900 p-5 rounded-3xl shadow-2xl border border-white/10 flex flex-col items-center gap-2">
              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Rocket className="text-meece-blue" size={32} fill="currentColor" />
              </motion.div>
              <div className="text-center">
                <p className="text-white font-black text-[11px] tracking-widest uppercase">AI Dev Lab</p>
                <p className="text-meece-blue font-black text-[8px] animate-pulse">PROCESSING...</p>
              </div>
            </div>
            {/* パーティクル的な演出線 */}
            <svg className="absolute w-full h-full overflow-visible pointer-events-none">
              <motion.path 
                d="M -80 120 Q 40 120 160 120" 
                stroke="url(#grad1)" strokeWidth="2" strokeDasharray="4 4" fill="none"
                animate={{ strokeDashoffset: [0, -20] }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              />
              <defs>
                <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#00E5FF" stopOpacity="0" />
                  <stop offset="100%" stopColor="#00E5FF" stopOpacity="1" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>

        {/* 右：Output (Product Mobile View) - 見切れ防止・実機風UI */}
        <div className="col-span-4 relative flex items-center justify-center h-full py-4">
          {/* スマートフォン筐体 */}
          <motion.div 
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="relative w-60 aspect-9/18.5 bg-slate-900 rounded-[3rem] border-[6px] border-slate-800 shadow-2xl p-2 overflow-hidden ring-1 ring-slate-700"
          >
            {/* 画面内コンテンツ */}
            <div className="w-full h-full bg-white rounded-[2.2rem] overflow-hidden relative flex flex-col">
              {/* ステータスバー風 */}
              <div className="h-6 w-full bg-slate-50 flex justify-center items-end pb-1">
                <div className="w-12 h-1 bg-slate-300 rounded-full" />
              </div>
              {/* 成果物が次々と流れるデモ */}
              <div className="flex-1 p-3 space-y-3">
                {data.outputs?.map((output, idx) => (
                  <motion.div
                    key={output.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.8 + idx * 0.4 }}
                    className="p-3 bg-slate-50 rounded-xl border border-slate-100 flex flex-col gap-1"
                  >
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 rounded bg-meece-blue/10 flex items-center justify-center">
                        {idx === 0 && <Sparkles size={10} className="text-meece-blue" />}
                        {idx === 1 && <Cpu size={10} className="text-meece-blue" />}
                        {idx === 2 && <CheckCircle2 size={10} className="text-meece-blue" />}
                      </div>
                      <span className="text-[10px] font-black text-slate-800 uppercase tracking-tighter">{output.title}</span>
                    </div>
                    <div className="w-full h-8 bg-slate-200/50 rounded flex items-center px-2">
                      <div className="w-full h-1 bg-slate-300/40 rounded-full overflow-hidden">
                        <motion.div 
                          animate={{ x: ["-100%", "100%"] }}
                          transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                          className="w-1/2 h-full bg-meece-blue/30"
                        />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* URLラベル演出 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 2.5 }}
            className="absolute -right-4 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur shadow-xl border border-meece-blue/20 p-4 rounded-2xl max-w-45"
          >
            <div className="flex items-center gap-2 mb-1">
              <CheckCircle2 size={14} className="text-meece-blue" />
              <span className="text-[10px] font-black text-slate-900">PROTOTYPE READY</span>
            </div>
            <p className="text-[9px] font-bold text-meece-blue truncate underline underline-offset-2">https://lab.meece.inc/demo-73af...</p>
          </motion.div>
        </div>

      </div>
    </motion.div>
  );
};