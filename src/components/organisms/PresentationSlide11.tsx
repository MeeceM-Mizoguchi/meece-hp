import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Lightbulb, Zap, ShieldCheck } from 'lucide-react';

interface PresentationSlide11Props {
  data: {
    label: string;
    title: string;
    description: string;
  };
}

export const PresentationSlide11: React.FC<PresentationSlide11Props> = ({ data }) => {
  return (
    <motion.div
      key="slide-11-mindset"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="absolute inset-0 bg-white flex flex-col p-8 md:p-12 overflow-hidden"
    >
      {/* 背景演出：一定のリズムで明滅する大きな円（Heatbeat） */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <motion.div
          animate={{ 
            scale: [1, 1.05, 1],
            opacity: [0.03, 0.08, 0.03]
          }}
          transition={{ 
            duration: 3, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          className="w-200 h-200 border border-slate-200 rounded-full"
        />
      </div>

      {/* セキュリティ：斜め45度の社外秘スタンプ */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
        <span className="text-[120px] font-black text-slate-900 uppercase -rotate-45 opacity-[0.03] whitespace-nowrap">
          CONFIDENTIAL / 社外秘
        </span>
      </div>

      <div className="relative z-10 flex flex-col md:flex-row items-stretch h-full gap-8 md:gap-12">
        {/* 左側 40%：メッセージエリア */}
        <div className="w-full md:w-2/5 flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            className="mb-6 flex items-center gap-3"
          >
            <div className="w-8 h-px bg-slate-900" />
            <span className="text-slate-900 font-black tracking-[0.4em] text-sm uppercase">{data.label}</span>
          </motion.div>
          
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 leading-tight mb-8">
            {data.title}
          </h2>
          
          <p className="text-slate-600 text-[14px] md:text-[16px] leading-relaxed font-bold max-w-md">
            {data.description}
          </p>

          <div className="mt-12 flex items-center gap-4 opacity-50">
            <Heart className="text-meece-pink" size={20} fill="currentColor" />
            <span className="text-xs font-black tracking-widest text-slate-900 uppercase">Extreme Ownership</span>
          </div>
        </div>

        {/* 右側 60%：3つの姿勢を縦に並べたステップ状レイアウト */}
        <div className="w-full md:w-3/5 flex flex-col justify-center gap-4 md:gap-6 pr-4">
          
          {/* 01. Unity */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="bg-white/90 backdrop-blur-md p-5 md:p-6 rounded-2xl shadow-2xl border border-amber-50 relative flex items-start gap-6 ml-0 hover:-translate-y-1 transition-transform duration-300"
          >
            <div className="shrink-0 w-10 h-10 md:w-12 md:h-12 bg-slate-100 rounded-xl flex items-center justify-center text-slate-900">
              <Lightbulb size={24} />
            </div>
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span className="text-[10px] font-black text-slate-500 bg-slate-100 px-2 py-0.5 rounded uppercase tracking-tighter">02. Proactive</span>
                <h3 className="text-base md:text-lg font-black text-slate-900">一蓮托生のチーム体制</h3>
              </div>
              <p className="text-[12px] md:text-sm font-bold text-slate-500 leading-relaxed">
                クライアントと制作側の壁を取り払い、一つのSlack、一つの目的に向かって最速で動く体制を構築。
              </p>
            </div>
          </motion.div>

          {/* 02. Proactive (オーバーラップ演出) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0 }}
            className="bg-white/90 backdrop-blur-md p-5 md:p-6 rounded-2xl shadow-2xl border border-amber-50 relative flex items-start gap-6 ml-6 md:ml-12 -mt-2 md:-mt-4 hover:-translate-y-1 transition-transform duration-300"
          >
            <div className="shrink-0 w-10 h-10 md:w-12 md:h-12 bg-meece-pink/10 rounded-xl flex items-center justify-center text-meece-pink">
              <Zap size={24} />
            </div>
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span className="text-[10px] font-black text-meece-pink bg-meece-pink/5 px-2 py-0.5 rounded uppercase tracking-tighter">03. Passion</span>
                <h3 className="text-base md:text-lg font-black text-slate-900">本質的な提案力</h3>
              </div>
              <p className="text-[12px] md:text-sm font-bold text-slate-500 leading-relaxed">
                言われた通りに作るのではない、「本当にそれは必要なのか？」という問いを立て、事業価値を最大化する提案。
              </p>
            </div>
          </motion.div>

          {/* 03. Passion */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            className="bg-white/90 backdrop-blur-md p-5 md:p-6 rounded-2xl shadow-2xl border border-amber-50 relative flex items-start gap-6 ml-12 md:ml-24 -mt-2 md:-mt-4 hover:-translate-y-1 transition-transform duration-300"
          >
            <div className="shrink-0 w-10 h-10 md:w-12 md:h-12 bg-meece-blue/10 rounded-xl flex items-center justify-center text-meece-blue">
              <Zap size={24} />
            </div>
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span className="text-[10px] font-black text-meece-blue bg-meece-blue/5 px-2 py-0.5 rounded uppercase tracking-tighter">03. Passion</span>
                <h3 className="text-base md:text-lg font-black text-slate-900">完遂する熱量</h3>
              </div>
              <p className="text-[12px] md:text-sm font-bold text-slate-500 leading-relaxed">
                どんな困難があっても投げ出さない。物語が「完結」するその瞬間まで、現場の最前線で走り抜く。
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* 右下の抽象的なビジュアルアート */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute -bottom-10 -right-10 w-48 h-48 md:w-64 md:h-64 opacity-[0.05] pointer-events-none"
      >
        <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-slate-900">
          <circle cx="100" cy="100" r="80" stroke="currentColor" strokeWidth="2" strokeDasharray="10 10" />
          <path d="M60 100C60 80 80 60 100 60C120 60 140 80 140 100C140 120 120 140 100 140" stroke="currentColor" strokeWidth="4" />
          <foreignObject x="80" y="80" width="40" height="40">
            <ShieldCheck size={40} />
          </foreignObject>
        </svg>
      </motion.div>
    </motion.div>
  );
};