import React from 'react';
import { motion } from 'framer-motion';
import { Award, MapPin, User, Calendar, CircleDollarSign, Landmark, Mail, Phone, Briefcase } from 'lucide-react';

interface PresentationSlide02_2Props {
  data: {
    label: string;
    title: string;
    info: Array<{ 
      label: string; 
      value: string; 
      sub?: string; 
      email?: string;
      phone?: string;
    }>;
  };
}

export const PresentationSlide02_2: React.FC<PresentationSlide02_2Props> = ({ data }) => {
  const getIcon = (label: string, size = 18) => {
    const props = { size, className: "text-meece-blue" };
    if (label.includes('商号')) return <Award {...props} />;
    if (label.includes('所在地')) return <MapPin {...props} />;
    if (label.includes('代表')) return <User {...props} />;
    if (label.includes('設立')) return <Calendar {...props} />;
    if (label.includes('資本金')) return <CircleDollarSign {...props} />;
    if (label.includes('取引銀行')) return <Landmark {...props} />;
    if (label.includes('連絡先')) return <Mail {...props} />;
    if (label.includes('事業内容')) return <Briefcase {...props} />;
    return <Award {...props} />;
  };

  // データを役割ごとに分割
  const primaryInfo = data.info.filter(item => 
    item.label.includes('商号') || 
    item.label.includes('代表') || 
    item.label.includes('設立') || 
    item.label.includes('資本金') || 
    item.label.includes('取引銀行')
  );
  
  const detailedInfo = data.info.filter(item => 
    item.label.includes('所在地') || 
    item.label.includes('連絡先') || 
    item.label.includes('事業内容')
  );

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="absolute inset-0 bg-white p-10 md:p-14 flex flex-col justify-start overflow-hidden"
    >
      <div className="max-w-6xl mx-auto w-full relative z-10 h-full flex flex-col">
        {/* ヘッダー */}
        <header className="mb-10 shrink-0">
          <motion.div 
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2 mb-1"
          >
            <div className="w-8 h-1.5 bg-meece-blue rounded-full" />
            <span className="text-meece-blue text-[12px] font-black tracking-[0.4em] uppercase">
              {data.label}
            </span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-slate-900 text-4xl md:text-5xl font-black tracking-tighter"
          >
            {data.title}
          </motion.h2>
        </header>

        {/* メインスペース：重要スペック5項目を最優先で大きく配置 */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-10">
          {primaryInfo.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + index * 0.1 }}
              className="flex flex-col gap-4 p-5 bg-slate-50/50 rounded-4xl border border-slate-100/50 shadow-sm"
            >
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-white rounded-xl flex items-center justify-center shadow-sm shrink-0">
                  {getIcon(item.label, 16)}
                </div>
                <span className="text-slate-400 text-[9px] font-black tracking-widest uppercase">{item.label}</span>
              </div>
              <div className="flex flex-col grow justify-center">
                <span className="text-slate-800 text-[14px] md:text-[16px] font-black leading-tight">
                  {item.value}
                </span>
                {item.sub && (
                  <span className="text-[9px] text-slate-400 font-bold italic mt-1">{item.sub}</span>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* 下段：補足情報を整理して配置 */}
        <div className="mt-auto grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-slate-100 pt-8">
          {detailedInfo.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 + index * 0.1 }}
              className="flex flex-col gap-2 pl-4 border-l border-slate-100"
            >
              <div className="flex items-center gap-2 opacity-60 mb-1">
                {getIcon(item.label, 14)}
                <span className="text-slate-400 text-[10px] font-black tracking-widest uppercase">{item.label}</span>
              </div>
              <div className="flex flex-col">
                <span className="text-slate-700 text-[14px] font-bold leading-relaxed whitespace-pre-wrap">
                  {item.value}
                </span>
                {(item.phone || item.email) && (
                  <div className="mt-2 flex flex-col gap-1">
                    {item.phone && <span className="text-[12px] text-slate-500 font-bold flex items-center gap-2"><Phone size={12}/> {item.phone}</span>}
                    {item.email && <span className="text-[12px] text-meece-purple/70 font-bold flex items-center gap-2"><Mail size={12}/> {item.email}</span>}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* 背景装飾 */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-meece-blue/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-meece-purple/5 rounded-full blur-[100px] pointer-events-none" />
    </motion.div>
  );
};