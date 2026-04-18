import React from 'react';
import { motion } from 'framer-motion';
import { Calculator, PiggyBank, TrendingUp, ArrowRight, ChevronRight } from 'lucide-react';

export const PresentationSlide09: React.FC = () => {
  return (
    <motion.div
      key="slide-09-graph"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="absolute inset-0 bg-white flex flex-col p-10 md:p-12 overflow-hidden"
    >
      {/* メインタイトル（共通ヘッダー位置） */}
      <div className="relative z-10 text-center mb-6">
        <h2 className="text-3xl md:text-5xl font-black text-slate-900 leading-tight mb-2">
          IT予算を<span className="text-amber-500">「消費」</span>から<span className="text-slate-900 underline decoration-amber-500 decoration-4 underline-offset-8">「投資」</span>へ。
        </h2>
        <div className="flex items-center justify-center gap-4">
          <div className="h-px w-10 bg-slate-200" />
          <p className="text-slate-800 text-lg font-black tracking-widest uppercase">財務の健全化 × DX戦略の再構築</p>
          <div className="h-px w-10 bg-slate-200" />
        </div>
      </div>

      {/* メインコンテンツ：棒グラフ図解 */}
      <div className="relative z-10 flex-1 grid grid-cols-12 gap-8 items-center">
        {/* 左側：戦略ステップ（改善されたカードUI） */}
        <div className="col-span-5 flex flex-col justify-center gap-4 pr-4">
          {[
            { step: "01", title: "無駄の特定", desc: "徹底したコスト監査で維持費を削減", icon: Calculator },
            { step: "02", title: "原資の創出", desc: "削減分をそのまま新規開発予算へ転換", icon: PiggyBank },
            { step: "03", title: "利益の最大化", desc: "爆速検証で投資対効果（ROI）を追求", icon: TrendingUp }
          ].map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ x: -30, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.3 + idx * 0.15, ease: "easeOut" }}
              className="group relative flex items-center gap-5 p-4 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300"
            >
              {/* 背景のステップ番号（巨大な透かし） */}
              <span className="absolute right-4 bottom-0 text-5xl font-black text-slate-50 opacity-[0.03] group-hover:opacity-[0.06] transition-opacity pointer-events-none">
                {item.step}
              </span>

              {/* アイコンとステップ番号の複合表示 */}
              <div className="relative shrink-0 w-12 h-12 flex items-center justify-center bg-slate-50 rounded-xl group-hover:bg-amber-50 transition-colors">
                <item.icon size={22} className="text-slate-400 group-hover:text-amber-500 transition-colors" />
                <div className="absolute -top-1.5 -left-1.5 w-5 h-5 bg-slate-900 text-white text-[9px] font-black flex items-center justify-center rounded-lg border-2 border-white shadow-sm">
                  {item.step}
                </div>
              </div>

              <div className="flex flex-col gap-0.5">
                <h4 className="text-[13px] font-black text-slate-900 tracking-wider flex items-center gap-2">
                  {item.title}
                  <ArrowRight size={12} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-amber-500" />
                </h4>
                <p className="text-[10px] font-bold text-slate-500 leading-relaxed max-w-50">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* 右側：比較グラフ */}
        <div className="col-span-7 bg-slate-50/50 rounded-3xl p-6 md:p-8 border border-slate-100 flex flex-col justify-center relative">
          {/* 背景スライドガイド */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" overflow="visible">
            <motion.path 
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.1 }}
              transition={{ delay: 1.5, duration: 1.2 }}
              d="M 180,45 L 430,45" 
              stroke="#f59e0b" strokeWidth="1" strokeDasharray="4 4" fill="none"
            />
            <motion.path 
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.1 }}
              transition={{ delay: 1.5, duration: 1.2 }}
              d="M 180,120 L 430,120" 
              stroke="#f59e0b" strokeWidth="1" strokeDasharray="4 4" fill="none"
            />
          </svg>

          {/* グラフエリア（並び順：現状 → スライド → 導入後） */}
          <div className="flex items-end justify-between gap-4 h-47.5 mb-2 relative z-10 px-6">
            
            {/* 現状グラフ */}
            <div className="flex-1 flex flex-col items-center gap-3 h-full justify-end relative">
              <motion.div 
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="absolute -top-10 left-1/2 -translate-x-1/2 z-20"
              >
                <div className="bg-slate-800 text-white text-[11px] font-black px-3 py-1.5 rounded relative shadow-lg tracking-widest whitespace-nowrap">
                  固定費に潜む無駄を特定
                  <div className="absolute left-1/2 -bottom-1.5 -translate-x-1/2 w-3 h-3 bg-slate-800 rotate-45" />
                </div>
              </motion.div>

              {/* 大型化されたグラフ筐体 */}
              <div className="w-full md:w-32 bg-white relative flex flex-col h-40 border-2 border-amber-500 shadow-inner rounded-xl overflow-hidden group hover:border-amber-600 transition-colors">
                <div className="h-[10%] bg-amber-500/20 w-full" />
                <div className="h-[90%] bg-slate-200 w-full relative flex flex-col items-center justify-center border-b border-slate-300">
                  <div className="absolute top-2 left-1/2 -translate-x-1/2 w-[85%] h-[55%] border-2 border-dashed border-slate-400/50 rounded-lg flex items-center justify-center z-10 bg-slate-100/50">
                    <span className="text-[9px] text-slate-500 font-black uppercase tracking-widest">余剰資産</span>
                  </div>
                  <span className="text-[11px] font-black text-slate-400 rotate-90 mt-16 whitespace-nowrap tracking-widest">固定費</span>
                </div>
              </div>
              <span className="text-[11px] font-black text-slate-400 uppercase tracking-tighter whitespace-nowrap">現状のIT予算</span>
            </div>

            {/* 中央変換 */}
            <div className="pb-16 flex flex-col items-center gap-5 relative w-20">
              <motion.div 
                animate={{ scale: [1, 1.05, 1], y: [0, -3, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="bg-amber-100 text-amber-600 text-[11px] font-black px-4 py-1.5 rounded-full shadow-sm border-2 border-amber-200 tracking-widest whitespace-nowrap z-20"
              >
                スライド
              </motion.div>
              <motion.div
                animate={{ x: [-5, 5, -5] }}
                transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
              >
                <ChevronRight size={44} strokeWidth={4} className="text-amber-500/40" />
              </motion.div>
            </div>

            {/* 解決策グラフ */}
            <div className="flex-1 flex flex-col items-center gap-3 h-full justify-end relative">
              <motion.div 
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 }}
                className="absolute -top-10 left-1/2 -translate-x-1/2 z-20"
              >
                <div className="bg-amber-600 text-white text-[11px] font-black px-3 py-1.5 rounded relative shadow-lg tracking-widest whitespace-nowrap">
                  成長投資へ資産を組み換え
                  <div className="absolute left-1/2 -bottom-1.5 -translate-x-1/2 w-3 h-3 bg-amber-600 rotate-45" />
                </div>
              </motion.div>

              <div className="w-full md:w-32 bg-white relative flex flex-col h-40 border-2 border-amber-500 shadow-inner rounded-xl overflow-hidden group hover:border-amber-600 transition-colors">
                <div className="h-[25%] bg-slate-100 w-full relative flex items-center justify-center border-b border-slate-200">
                  <span className="text-[9px] font-black text-slate-500 whitespace-nowrap tracking-widest">固定費を最小化</span>
                </div>
                <motion.div 
                  initial={{ height: 0 }}
                  animate={{ height: '75%' }}
                  transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
                  className="bg-amber-500 w-full relative flex items-center justify-center shadow-[0_-10px_20px_rgba(245,158,11,0.2)] mt-auto"
                >
                  <span className="text-[11px] font-black text-white rotate-90 whitespace-nowrap tracking-[0.3em]">成長投資</span>
                </motion.div>
              </div>
              <span className="text-[11px] font-black text-amber-600 uppercase tracking-tighter whitespace-nowrap">Meece導入後</span>
            </div>
          </div>

          {/* 凡例 */}
          <div className="mt-6 flex justify-center gap-10 border-t border-slate-100 pt-5 relative z-10">
            <div className="flex items-center gap-2.5">
              <div className="w-3 h-3 rounded bg-slate-200" />
              <span className="text-[10px] font-black text-slate-500 tracking-widest">固定費（現状維持コスト）</span>
            </div>
            <div className="flex items-center gap-2.5">
              <div className="w-3 h-3 rounded bg-amber-500" />
              <span className="text-[10px] font-black text-amber-600 tracking-widest">成長投資（事業を強くする資産）</span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};