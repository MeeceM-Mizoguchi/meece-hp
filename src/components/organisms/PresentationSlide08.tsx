import React from 'react';
import { motion } from 'framer-motion';
import { RefreshCw, Code2, ShieldCheck } from 'lucide-react';

interface PresentationSlide08Props {
  data: {
    steps?: {
      id: string;
      label: string;
      title: string;
      desc: string;
    }[];
  };
}

export const PresentationSlide08: React.FC<PresentationSlide08Props> = ({ data }) => {
  return (
    <motion.div
      key="slide-08-fixed"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="absolute inset-0 bg-white flex flex-col p-12 md:p-16 overflow-hidden"
    >
      {/* 2.1 メインタイトル */}
      <div className="relative z-10 text-center mb-6">
        <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight mb-4">
          爆速を支える、堅牢なハイブリッド・フロー
        </h2>
        <div className="flex items-center justify-center gap-4 mb-4">
          <div className="h-px w-10 bg-slate-200" />
          <p className="text-slate-800 text-lg font-black tracking-widest uppercase flex items-center gap-2">
            <span>AIの機動力</span>
            <span className="text-slate-300 text-sm">✕</span>
            <span>プロフェッショナルの審美眼</span>
          </p>
          <div className="h-px w-10 bg-slate-200" />
        </div>
        <p className="text-slate-500 text-sm max-w-3xl mx-auto leading-relaxed font-bold">
          従来の開発で発生していた「要件の齟齬」や「度重なる修正」を、独自の開発プロセスで排除。拡張性と保守性を兼ね備えた「生きたコード」を提供します。
        </p>
      </div>

      {/* 3.1 ハイブリッドフロー図解 */}
      <div className="relative z-10 flex-1 flex items-center justify-center -mt-6">
        <div className="w-full max-w-5xl flex items-start justify-between relative">
          {/* 接続ライン */}
          <div className="absolute top-16 left-0 w-full h-0.5 bg-slate-50 -z-10" />

          {data.steps?.map((step, idx) => (
            <motion.div
              key={`methodology-step-${step.id}`}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 + idx * 0.2 }}
              className="flex flex-col items-center w-64 text-center"
            >
              <div className="w-32 h-32 rounded-3xl bg-white shadow-2xl border border-slate-100 flex items-center justify-center mb-6 relative transition-transform hover:scale-105 duration-300">
                <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-slate-900 text-white flex items-center justify-center font-black text-xs shadow-lg z-20">
                  {step.id}
                </div>
                <div className="text-slate-800">
                  {idx === 0 && <RefreshCw size={40} className="animate-spin-slow" />}
                  {idx === 1 && <Code2 size={40} />}
                  {idx === 2 && <ShieldCheck size={40} />}
                </div>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-1">{step.label}</span>
                <h3 className="text-xl font-black text-slate-900 mb-2">{step.title}</h3>
                <p className="text-[11px] font-bold text-slate-500 leading-relaxed px-4">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* 3.2 テクノロジー・スタック */}
      <div className="relative z-10 mt-auto pb-2 flex items-center justify-between border-t border-slate-100 pt-4">
        <div className="flex items-center gap-6 opacity-60">
          <span className="text-[9px] font-black text-slate-400 tracking-widest uppercase italic">Base Tech:</span>
          <div className="flex gap-4 text-slate-900 font-black text-[10px] uppercase tracking-tighter">
            <span>Next.js</span>
            <span>React</span>
            <span>TypeScript</span>
            <span>Tailwind</span>
          </div>
        </div>
        <div className="flex items-center gap-2 text-slate-400">
          <ShieldCheck size={12} />
          <span className="text-[9px] font-black uppercase tracking-tighter">Enterprise Quality</span>
        </div>
      </div>
    </motion.div>
  );
};