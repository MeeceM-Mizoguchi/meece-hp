import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, Zap, CheckCircle2, TrendingDown } from 'lucide-react';

export const PresentationSlide10: React.FC = () => {
  return (
    <motion.div
      key="slide-10-combined-success"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="absolute inset-0 bg-white flex flex-col p-8 md:p-10 overflow-hidden"
    >
      {/* 背景演出：微細なドットグリッド */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#000_1px,transparent_1px)] bg-size-[20px_20px]" />

      {/* ヘッダーエリア (mbを削減) */}
      <div className="relative z-10 mb-6 border-l-4 border-meece-blue pl-6">
        <h2 className="text-3xl md:text-4xl font-black text-slate-900 leading-tight tracking-tighter">
          Success Stories: <span className="text-meece-blue italic">2026 Revolution</span>
        </h2>
        <p className="text-slate-500 font-bold text-base mt-1">AI開発ラボが実現した、圧倒的な実行スピードの証明。</p>
      </div>

      {/* メインコンテンツ：2カラム事例紹介 (gapを縮小) */}
      <div className="relative z-10 flex-1 grid grid-cols-2 gap-6 items-stretch pb-2">
        
        {/* 事例 01: 老舗菓子店 (伝統 DX) */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="bg-slate-50 rounded-4xl p-6 border border-slate-100 flex flex-col relative overflow-hidden group shadow-sm hover:shadow-xl transition-all duration-500"
        >
          <div className="absolute top-0 right-0 p-6 opacity-[0.05] group-hover:opacity-[0.08] transition-opacity">
            <Zap size={100} className="rotate-12" />
          </div>
          
          <div className="flex items-center gap-2 mb-4">
            <span className="px-2 py-0.5 bg-slate-900 text-white text-[9px] font-black tracking-widest rounded-full uppercase">Case 01</span>
            <span className="text-slate-400 font-black text-[9px] tracking-widest uppercase">Manufacturing DX</span>
          </div>

          <h3 className="text-xl md:text-2xl font-black text-slate-900 mb-3 leading-tight">
            老舗菓子店：<br />伝統をデジタルで守る。
          </h3>
          
          <p className="text-slate-600 text-[13px] font-bold leading-relaxed mb-6 flex-1">
            創業100年の熟練の勘をAIが継承。手書き伝票による「月間160時間」の事務工数を、わずか10日間の開発で自動化しました。
          </p>

          <div className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm mt-auto">
            <div className="flex justify-between items-end">
              <div>
                <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-1">Development</p>
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl font-black text-meece-blue tracking-tighter">10</span>
                  <span className="text-xs font-black text-slate-900 uppercase">Days</span>
                </div>
              </div>
              <div className="text-right">
                <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-1">Impact</p>
                <div className="flex items-center gap-1 text-emerald-500">
                  <TrendingDown size={16} />
                  <span className="text-xl font-black italic">80% Off</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* 事例 02: スタートアップ (PMF 最速検証) */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="bg-slate-900 rounded-4xl p-6 border border-white/5 flex flex-col relative overflow-hidden group shadow-2xl"
        >
          <div className="absolute top-0 right-0 p-6 opacity-[0.1] group-hover:opacity-[0.15] transition-opacity">
            <Rocket size={100} className="-rotate-12 text-meece-blue" />
          </div>

          <div className="flex items-center gap-2 mb-4">
            <span className="px-2 py-0.5 bg-meece-blue text-slate-900 text-[9px] font-black tracking-widest rounded-full uppercase">Case 02</span>
            <span className="text-slate-500 font-black text-[9px] tracking-widest uppercase">Startup PMF</span>
          </div>

          <h3 className="text-xl md:text-2xl font-black text-white mb-3 leading-tight">
            Fintechベンチャー：<br />14日間でPMF達成。
          </h3>

          <p className="text-slate-400 text-[13px] font-bold leading-relaxed mb-6 flex-1">
            他社で「半年」と言われたMVP開発を2週間で完遂。資金が底を突く前に市場検証を開始し、2ヶ月での追加調達に成功しました。
          </p>

          <div className="bg-white/5 rounded-2xl p-5 border border-white/10 backdrop-blur-md mt-auto">
            <div className="flex justify-between items-end">
              <div>
                <p className="text-[9px] font-black text-slate-500 uppercase tracking-widest mb-1">MVP Launch</p>
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl font-black text-meece-blue tracking-tighter">14</span>
                  <span className="text-xs font-black text-white uppercase">Days</span>
                </div>
              </div>
              <div className="text-right">
                <p className="text-[9px] font-black text-slate-500 uppercase tracking-widest mb-1">Validation</p>
                <div className="flex items-center gap-2 text-meece-pink">
                  <CheckCircle2 size={16} />
                  <span className="text-lg font-black tracking-tighter uppercase italic">PMF Verified</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

      </div>

      {/* 電子承認印スタンプ (見切れ防止のため位置をさらに調整) */}
      <motion.div 
        initial={{ scale: 2, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.5, type: "spring" }}
        className="absolute bottom-6 right-10 z-20 pointer-events-none"
      >
        <div className="border-2 border-meece-blue/10 text-meece-blue/10 px-4 py-1 rounded-xl font-black text-lg uppercase tracking-[0.4em] italic -rotate-12">
          Official Proven
        </div>
      </motion.div>

    </motion.div>
  );
};