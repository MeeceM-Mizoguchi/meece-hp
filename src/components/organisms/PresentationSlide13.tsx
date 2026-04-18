import React from 'react';
import { motion } from 'framer-motion';
import { ClipboardCheck, ArrowRight, Mail, Info, Beaker } from 'lucide-react';

interface PresentationSlide13Props {
  data: {
    label: string;
    title: string;
    description: string;
  };
}

export const PresentationSlide13: React.FC<PresentationSlide13Props> = ({ data }) => {
  return (
    <motion.div
      key="slide-13-nextaction"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="absolute inset-0 bg-white flex flex-col pt-10 pb-20 px-12 md:px-16 overflow-hidden"
    >
      {/* 背景演出：回路ラインとロゴの暗示（極めて淡いグレー） */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
        <svg width="100%" height="100%" viewBox="0 0 800 600" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 100H200L250 150H550L600 100H800" stroke="currentColor" strokeWidth="2" />
          <path d="M0 500H200L250 450H550L600 500H800" stroke="currentColor" strokeWidth="2" />
          <circle cx="400" cy="300" r="150" stroke="currentColor" strokeWidth="1" strokeDasharray="10 10" />
        </svg>
      </div>

      {/* センタービジュアル：光り輝く「次のページ」の予感 */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
        <motion.div
          initial={{ rotate: -10, x: -100, opacity: 0 }}
          animate={{ rotate: -5, x: 0, opacity: 0.05 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="w-150 h-200 bg-slate-900 rounded-lg shadow-2xl origin-bottom-left"
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(168,85,247,0.1),transparent_70%)] animate-pulse" />
      </div>

      <div className="relative z-10 flex flex-col h-full">
        {/* 上部：感謝とメインメッセージ */}
        <div className="text-center mb-8">
          <motion.span
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-meece-purple font-black tracking-[0.5em] text-sm uppercase mb-4 block"
          >
            Ready to Start?
          </motion.span>
          
          <motion.h2
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="text-3xl md:text-5xl font-black text-slate-900 mb-4 tracking-tighter"
          >
            {data.title}
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="text-slate-500 text-[15px] md:text-[18px] font-bold max-w-2xl mx-auto leading-relaxed"
          >
            {data.description}
          </motion.p>
        </div>

        {/* 中央：アクション・ゲート（2つのメインボタン） */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 my-auto mb-6">
          {/* 01. Diagnosis */}
          <motion.a
            href="/diagnosis"
            whileHover={{ scale: 1.05, translateY: -5 }}
            whileTap={{ scale: 0.98 }}
            animate={{ scale: [1, 1.02, 1] }}
            transition={{ 
              scale: { duration: 3, repeat: Infinity, ease: "easeInOut" } 
            }}
            className="group relative w-80 h-20 bg-white rounded-3xl shadow-xl border border-slate-100 flex items-center p-1 overflow-hidden transition-all duration-300 hover:shadow-meece-purple/20 hover:shadow-2xl no-underline"
          >
            <div className="absolute inset-0 bg-linear-to-r from-meece-purple/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="w-20 h-full bg-slate-50 rounded-2xl flex items-center justify-center text-meece-purple transition-colors group-hover:bg-meece-purple group-hover:text-white">
              <ClipboardCheck size={32} strokeWidth={1.5} />
            </div>
            <div className="flex flex-col items-start ml-5 text-left">
              <span className="text-[10px] font-black text-meece-purple uppercase tracking-widest mb-1">01. Diagnosis</span>
             <span className="text-xl font-black text-slate-900">AI開発適正診断</span>
            </div>
            <ArrowRight className="ml-auto mr-6 text-slate-300 group-hover:text-meece-purple transition-transform group-hover:translate-x-1" size={20} />
          </motion.a>

          {/* 02. Contact */}
          <motion.a
            href="mailto:info@meece.co.jp"
            whileHover={{ scale: 1.05, translateY: -5 }}
            whileTap={{ scale: 0.98 }}
            animate={{ scale: [1, 1.02, 1] }}
            transition={{ 
              scale: { duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1.5 } 
            }}
            className="group relative w-80 h-20 bg-slate-900 rounded-3xl shadow-xl flex items-center p-1 overflow-hidden transition-all duration-300 hover:shadow-meece-pink/30 hover:shadow-2xl no-underline"
          >
            <div className="absolute inset-0 bg-linear-to-r from-meece-pink/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="w-20 h-full bg-white/10 rounded-2xl flex items-center justify-center text-meece-pink">
              <Mail size={32} strokeWidth={1.5} />
            </div>
            <div className="flex flex-col items-start ml-5 text-left">
              <span className="text-[10px] font-black text-meece-pink uppercase tracking-widest mb-1">02. Contact</span>
              <span className="text-xl font-black text-white">お問い合わせ</span>
            </div>
            <ArrowRight className="ml-auto mr-6 text-white/30 group-hover:text-meece-pink transition-transform group-hover:translate-x-1" size={20} />
          </motion.a>
        </div>

        {/* 下部：会社概要・フッター情報 */}
        <div className="mt-auto pt-8 border-t border-slate-100 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex flex-col items-center md:items-start">
            <h4 className="text-lg font-black text-slate-900 mb-1">Meece Inc.</h4>
            <p className="text-[11px] font-bold text-slate-400">〒150-0002 東京都渋谷区渋谷...</p>
          </div>

          <div className="flex items-center gap-6">
            <a href="/company" className="text-slate-400 hover:text-meece-purple transition-colors flex items-center gap-2 text-xs font-black uppercase">
              <Info size={16} /> 会社概要
          </a>
          <a href="/lab" className="text-slate-400 hover:text-slate-900 transition-colors flex items-center gap-2 text-xs font-black uppercase">
              <Beaker size={16} /> AI開発ラボ
          </a>
          </div>

          <div className="px-4 py-2 bg-slate-50 rounded-full border border-slate-100">
            <span className="text-[10px] font-black text-slate-400 tracking-widest uppercase">Privacy Policy</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};