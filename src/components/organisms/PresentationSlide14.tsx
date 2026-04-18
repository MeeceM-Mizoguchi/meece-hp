import React from 'react';
import { motion } from 'framer-motion';
import { Zap } from 'lucide-react';

interface PresentationSlide14Props {
  data: {
    label: string;
    title: string;
    description: string;
  };
}

export const PresentationSlide14: React.FC<PresentationSlide14Props> = ({ data }) => {
  return (
    <motion.div
      key="slide-14-finale"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="absolute inset-0 flex flex-col items-center pt-10 pb-20 px-12 overflow-hidden"
    >
      {/* 背景演出：テック感のあるダークグラデーション空間 */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden bg-slate-950">
        {/* 宇宙を漂う星屑エフェクト */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={`star-${i}`}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0, 0.8, 0],
              scale: [0, 1.2, 0],
            }}
            transition={{
              duration: 2 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          />
        ))}

        {/* 動的な色溜まり */}
        <div className="absolute top-[-20%] right-[-10%] w-[70%] h-[70%] bg-meece-purple/20 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-[-20%] left-[-10%] w-[70%] h-[70%] bg-meece-blue/20 blur-[120px] rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
        {/* 背景のグラデーション：清潔感のある光の溜まり */}
        <div className="absolute top-[-10%] right-[-10%] w-[60%] h-[60%] bg-meece-purple/10 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[60%] h-[60%] bg-meece-blue/10 blur-[120px] rounded-full animate-pulse" style={{ animationDelay: '2s' }} />

        {/* 高精細なグリッド：主張せず「構造」だけを感じさせる */}
        <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'radial-gradient(circle, #8B5CF6 1px, transparent 1px)', backgroundSize: '48px 48px' }} />

        {/* 繊細な回路ライン：既存スライドの意匠を継承 */}
        <svg width="100%" height="100%" viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg" className="absolute inset-0 opacity-[0.1]">
          <motion.path
            d="M 0 500 H 1000"
            stroke="#8B5CF6" strokeWidth="0.5" fill="none"
            initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 2 }}
          />
          <motion.path
            d="M 500 0 V 1000"
            stroke="#8B5CF6" strokeWidth="0.5" fill="none"
            initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 2, delay: 0.5 }}
          />
        </svg>

        {/* 背景の奥行きを演出する動的な光の帯 */}
        <div className="absolute inset-0 opacity-40">
          <motion.div
            animate={{ 
              x: ['-120%', '120%'],
              opacity: [0, 1, 0]
            }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/4 w-full h-0.5 bg-linear-to-r from-transparent via-meece-blue to-transparent"
          />
          <motion.div
            animate={{ 
              x: ['120%', '-120%'],
              opacity: [0, 0.8, 0]
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 3 }}
            className="absolute bottom-1/3 w-full h-px bg-linear-to-r from-transparent via-meece-purple to-transparent"
          />
        </div>

        {/* 未来の核：グラスモーフィズム・オーブ */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.5, duration: 1.5 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0"
        >
          {/* 多層の光の輪 */}
          <div className="relative w-125 h-125 flex items-center justify-center">
            <motion.div 
              animate={{ rotate: 360 }} 
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 rounded-full border border-dashed border-meece-purple/10" 
            />
            <div className="w-96 h-96 rounded-full bg-linear-to-br from-white/40 to-transparent backdrop-blur-[2px] border border-white/20 shadow-2xl" />
            {/* 虹色のコア（中央から溢れる光） */}
            <div className="absolute w-64 h-64 bg-linear-to-tr from-meece-blue/10 via-meece-purple/10 to-meece-pink/10 rounded-full blur-3xl animate-pulse" />
          </div>
        </motion.div>
      </div>

      {/* セキュリティスタンプ：重なりを避け、端に小さく配置 */}
      <div className="absolute bottom-10 left-10 z-0 pointer-events-none select-none opacity-10">
        <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] vertical-text">
          MEECE CONFIDENTIAL SECURITY PROTOCOL ACTIVE
        </span>
      </div>

      <div className="relative z-10 flex flex-col items-center text-center w-full h-full">
        {/* メッセージエリア：サイズを適正化し、見切れを防止 */}
        <motion.div 
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="mt-12 mb-auto py-12 px-20 rounded-[60px] bg-white/10 backdrop-blur-2xl border border-white/20 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.5)] flex flex-col items-center"
        >
          <motion.span
            initial={{ opacity: 0, letterSpacing: "0.2em" }}
            animate={{ opacity: 1, letterSpacing: "1em" }}
            transition={{ delay: 1, duration: 2 }}
            className="text-meece-purple font-black text-[11px] uppercase mb-10 block tracking-[1em]"
          >
            Final Page: Beyond AI
          </motion.span>
          
          <div className="flex flex-col items-center gap-6">
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              className="text-4xl md:text-5xl font-black text-white tracking-tighter leading-tight drop-shadow-2xl"
            >
              {data.title}
            </motion.h3>

            <div className="w-32 h-1.5 bg-linear-to-r from-meece-blue via-meece-purple to-meece-pink mx-auto rounded-full shadow-[0_0_20px_rgba(0,229,255,0.8)]" />
            <p className="text-slate-200 text-[16px] md:text-[20px] font-bold max-w-2xl leading-relaxed opacity-90">
              {data.description}
            </p>
          </div>
        </motion.div>

        {/* 下部：未来への宣言（見切れを完全に解消） */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5 }}
          className="mb-2 translate-y-6 flex items-center gap-4 text-slate-400 font-black text-[10px] tracking-[0.5em] uppercase italic px-10 py-3 border border-white/10 bg-white/5 rounded-full backdrop-blur-sm"
        >
          <Zap size={14} className="text-meece-pink" />
          <span>Exploring the next Dimension</span>
          <div className="w-1 h-1 rounded-full bg-meece-purple" />
          <span>© 2026 MEECE Inc. All Stories Reserved.</span>
        </motion.div>
      </div>
    </motion.div>
  );
};