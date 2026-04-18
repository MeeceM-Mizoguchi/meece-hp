import React from 'react';
import { Navbar } from '../components/organisms/Navbar'; 
import { motion } from 'framer-motion';
import { ShieldCheck, Clock, ArrowRight, BarChart3, CheckCircle2 } from 'lucide-react';

const EnterprisePOCDetail: React.FC = () => {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      <Navbar />

      {/* Hero Section: 信頼感とスピードの融合 */}
      <section className="relative pt-40 pb-24 px-6 overflow-hidden bg-gradient-to-br from-blue-900 via-indigo-900 to-slate-900 text-white">
        <div className="absolute inset-0 opacity-10" 
             style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block bg-orange-600 text-xs font-black tracking-[0.3em] px-4 py-2 mb-8 skew-x-[-15deg]">
              <span className="inline-block skew-x-[15deg]">大手企業様向けソリューション</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black mb-8 leading-[1.1] tracking-tighter italic">
              3ヶ月で、<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
                「動く資産」を。
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 max-w-3xl leading-relaxed font-bold">
              重厚長大化した既存システムの更改、あるいは新規事業のPOC。
              大手企業特有の「検証コスト」と「時間」の壁を、独自の開発アセットで突破します。
            </p>
          </motion.div>
        </div>
      </section>

      {/* 3つの提供価値: カードスタイル */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                icon: <Clock className="w-10 h-10 text-orange-500" />,
                title: "90日間の徹底デリバリー",
                desc: "要件定義から実装完了までを3ヶ月で完遂。意思決定のスピードを落とさない週次デモ報告体制。"
              },
              {
                icon: <BarChart3 className="w-10 h-10 text-blue-500" />,
                title: "人件費の徹底最適化",
                desc: "AI駆動開発と自社UIアセットの活用により、従来のスクラッチ開発に比べ人件費を最大60%削減。"
              },
              {
                icon: <ShieldCheck className="w-10 h-10 text-emerald-500" />,
                title: "エンタープライズ品質",
                desc: "スピードを優先しても妥協しないコード品質。将来の本番展開を見据えたスケーラブルな設計。"
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                className="p-10 bg-slate-50 border-b-4 border-slate-200 hover:border-orange-500 transition-all"
              >
                <div className="mb-6">{item.icon}</div>
                <h3 className="text-2xl font-black mb-4 italic tracking-tighter">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed font-medium">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 比較セクション: 斬新な対比構造 */}
      <section className="py-32 bg-[#0D1B3E] text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl md:text-6xl font-black italic mb-20 text-center tracking-tighter">
            なぜ、私たちが選ばれるのか。
          </h2>
          
          <div className="grid md:grid-cols-2 gap-px bg-white/10 border border-white/10 overflow-hidden">
            <div className="p-12 bg-[#0D1B3E]">
              <h3 className="text-xl font-bold mb-10 text-slate-400 uppercase tracking-widest">従来の一般的な開発会社</h3>
              <ul className="space-y-8">
                <li className="flex gap-4 items-start opacity-50">
                  <XIcon className="w-6 h-6 text-red-500 shrink-0 mt-1" />
                  <p className="font-bold">要件定義とドキュメント作成に2ヶ月以上費やす</p>
                </li>
                <li className="flex gap-4 items-start opacity-50">
                  <XIcon className="w-6 h-6 text-red-500 shrink-0 mt-1" />
                  <p className="font-bold">多重請け構造により人件費が高騰し、スピードが低下</p>
                </li>
                <li className="flex gap-4 items-start opacity-50">
                  <XIcon className="w-6 h-6 text-red-500 shrink-0 mt-1" />
                  <p className="font-bold">完成まで実際の画面が見えず、最後に認識相違が発覚</p>
                </li>
              </ul>
            </div>
            <div className="p-12 bg-blue-600 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-10 text-9xl font-black">FAST</div>
              <h3 className="text-xl font-bold mb-10 text-blue-100 uppercase tracking-widest">私たちの爆速開発</h3>
              <ul className="space-y-8">
                <li className="flex gap-4 items-start">
                  <CheckCircle2 className="w-6 h-6 text-white shrink-0 mt-1" />
                  <p className="font-bold text-xl">開始1週間以内に初稿デモを提示</p>
                </li>
                <li className="flex gap-4 items-start">
                  <CheckCircle2 className="w-6 h-6 text-white shrink-0 mt-1" />
                  <p className="font-bold text-xl">AIと共通基盤の活用で「書かない開発」を最大化</p>
                </li>
                <li className="flex gap-4 items-start">
                  <CheckCircle2 className="w-6 h-6 text-white shrink-0 mt-1" />
                  <p className="font-bold text-xl">3ヶ月後には本番レベルのUI/UXが手元に届く</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl md:text-6xl font-black mb-12 tracking-tighter italic">
            社内の承認を、<br />
            <span className="text-blue-600">圧倒的な成果</span>で突破しませんか。
          </h2>
          <button className="bg-orange-600 text-white px-16 py-6 text-2xl font-black italic tracking-tighter shadow-[15px_15px_0px_0px_rgba(234,88,12,0.2)] hover:bg-orange-700 transition-all">
            資料請求・無料相談はこちら <ArrowRight className="inline-block ml-2" />
          </button>
        </motion.div>
      </section>
    </div>
  );
};

const XIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
  </svg>
);

export default EnterprisePOCDetail;