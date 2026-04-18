{/* https://gemini.google.com/app/45ea3eb91a384d3a?utm_source=app_launcher&utm_medium=owned&utm_campaign=base_all */}

import React, { useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Zap, Shield, Cpu, ArrowRight, Rocket, Heart, CheckCircle2, MousePointer2, HelpCircle, ChevronDown, Building2, Store, Handshake, Code2, Layers, Lightbulb, AppWindow, ChevronLeft, ChevronRight, Home } from 'lucide-react';
// TOPページと同じ共通Footerをインポート
import { Footer } from '../components/organisms/Footer';

const StunningHeroSection: React.FC = () => {
  const { scrollY } = useScroll();
  
  // 画面幅を管理するための設定を追加します
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);

  React.useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  // ロケット発射演出用の状態
  const [isLaunched, setIsLaunched] = useState(false);

  // モーダル管理用の状態（ビジュアルイメージと任意の文章を許容するように修正）
  const [selectedCard, setSelectedCard] = useState<null | {
    type: string;
    title: string;
    desc?: string; 
    detail?: string; // 文章は任意( ? を追加)に変更
    visual_content?: React.ReactNode; // 新しくイメージ用の型を追加
    modal_text?: string; // 【追加】解説文章用の型を定義
    icon: any;
    color: string;
    flow?: string[]; 
  }>(null);
  
  // スクロールに応じたアニメーション
  // モバイル（windowWidth < 768）の時は 0 に固定し、ガタつきを防止します
  const y1 = useTransform(scrollY, [0, 500], windowWidth < 768 ? [0, 0] : [0, 150]);
  const rotate = useTransform(scrollY, [0, 1000], [0, 45]);

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-slate-50 font-sans selection:bg-pink-500/30 text-slate-900">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* メインの回転オーブ：より広範囲で柔らかな光へ */}
        <motion.div
          style={{ rotate }}
          className="absolute -top-[10%] -right-[10%] w-[80%] h-[80%] bg-linear-to-br from-meece-blue/15 via-meece-purple/20 to-meece-pink/15 rounded-full blur-[120px] opacity-50"
        />
        
        {/* フローティング・オーブ：アクセント光 */}
        <div className="absolute top-[5%] left-[5%] w-[40%] h-[40%] bg-meece-blue/10 rounded-full blur-[110px] animate-float" />
        <div className="absolute bottom-[20%] right-[10%] w-[35%] h-[35%] bg-meece-pink/10 rounded-full blur-[110px] animate-float" style={{ animationDelay: '3s' }} />
        
        {/* セクション境界のフェード：ドットやグリッドを排除したクリーンな背景 */}
        <div className="absolute inset-0 bg-mesh-gradient opacity-40" />
        <div className="absolute bottom-0 left-0 w-full h-32 bg-linear-to-t from-slate-50 to-transparent" />
      </div>

      {/* ホームに戻るボタン（フローティング） */}
      <div className="fixed top-6 left-6 z-100">
        <a 
          href="/" 
          className="flex items-center gap-2 px-5 py-3 bg-white/80 backdrop-blur-md border border-slate-200 rounded-2xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all group"
        >
          <Home size={20} className="text-slate-600 group-hover:text-meece-blue transition-colors" />
          <span className="font-black text-slate-800 text-sm tracking-tighter">HOME</span>
        </a>
      </div>

      <div className="relative z-10 container mx-auto px-6">
        <section className="min-h-screen flex flex-col items-center justify-center text-center">
          {/* style={{ y: y1 }} を維持しつつ、モバイルでの挙動を1箇所目で制御しています */}
          <motion.div 
            style={{ y: y1 }} 
            className="flex flex-col items-center"
          >
            <motion.span
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              className="px-6 py-2 rounded-full bg-linear-to-r from-pink-500 to-orange-500 text-white text-sm font-bold tracking-widest shadow-lg mb-8"
            >
              世界を、もっとカラフルに。
            </motion.span>
            <div className="mb-10 overflow-hidden px-4">
              <motion.h1
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-6xl md:text-[110px] font-black leading-[1.05] tracking-tighter"
              >
                {/* 1行目 */}
                <motion.span
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: "circOut" }}
                  className="block text-slate-900 drop-shadow-sm"
                >
                  想像を超える
                </motion.span>
                
                {/* 2行目：グラデーションと光るエフェクト */}
                <motion.span
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
                  className="block text-transparent bg-clip-text bg-linear-to-r from-meece-blue via-meece-purple to-meece-pink animate-gradient-x drop-shadow-[0_10px_20px_rgba(157,114,255,0.3)]"
                >
                  デジタル革命を
                </motion.span>
              </motion.h1>
            </div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-xl md:text-2xl font-medium text-slate-600 max-w-3xl mx-auto mb-12 leading-relaxed"
            >
              私たちは、最新のテクノロジーと圧倒的なデザイン表現力で、<br className="hidden md:block" />
              あなたのビジネスをネクストステージへと導きます。
            </motion.p>
          </motion.div>
        </section>

        {/* 2. サービス特徴セクション（リッチデザイン版） */}
        <section className="py-32 relative z-10">
          <div className="text-center mb-20">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-black mb-6"
            >
              圧倒的な強み
            </motion.h2>
            <p className="text-slate-500 font-bold text-lg tracking-widest uppercase">The Core Values</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {[
              { title: "爆速の開発スピード", icon: Zap, color: "from-yellow-400 to-orange-500", shadow: "shadow-yellow-200", desc: "最新の技術構成により、従来の10倍の速さでプロトタイプを構築。ビジネスチャンを逃しません。" },
              { title: "鉄壁のセキュリティ", icon: Shield, color: "from-blue-500 to-indigo-600", shadow: "shadow-blue-200", desc: "厳格な型定義と最新のセキュリティプロトコルで、安全な運用を約束します。" },
              { title: "AI技術の融合", icon: Cpu, color: "from-meece-purple to-meece-pink", shadow: "shadow-purple-200", desc: "最先端のAI機能を組み込み、業務の自動化を徹底サポート。次世代の効率化を実現します。" }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -12, scale: 1.02 }}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="relative p-10 bg-white rounded-[40px] shadow-meece-card border border-slate-100 group overflow-hidden"
              >
                {/* ホバー時の背景装飾 */}
                <div className={`absolute -right-10 -top-10 w-32 h-32 bg-linear-to-br ${item.color} opacity-0 group-hover:opacity-10 blur-3xl transition-opacity duration-500`} />
                
                <div className={`w-16 h-16 bg-linear-to-br ${item.color} rounded-2xl flex items-center justify-center text-white mb-8 shadow-xl ${item.shadow} group-hover:rotate-10 transition-transform duration-500`}>
                  <item.icon size={32} />
                </div>
                
                <h3 className="text-2xl font-black mb-4 group-hover:text-slate-700 transition-colors">{item.title}</h3>
                <p className="text-slate-500 leading-relaxed font-medium mb-6">
                  {item.desc}
                </p>
                
                <div className="h-1 w-12 bg-slate-100 group-hover:w-full group-hover:bg-linear-to-r group-hover:from-transparent group-hover:via-slate-200 group-hover:to-transparent transition-all duration-700" />
              </motion.div>
            ))}
          </div>
        </section>

        {/* 2.5 ビジョン・メッセージセクション（入れ替え） */}
        <section className="py-40 mb-32 relative">
          <div className="absolute inset-0 bg-blue-600 -skew-y-3 scale-110 opacity-5" />
          <div className="max-w-5xl mx-auto text-center px-6 relative z-10">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-black leading-tight mb-10"
            >
              新しいソリューションを確立。<br />
              <span className="text-blue-600">最新技術でビジネスをレベルアップ。</span>
            </motion.h2>
            <p className="text-slate-500 text-lg md:text-xl font-medium leading-loose">
              既存の枠組みに捉われない新しい発想と、圧倒的な技術力。<br />
              私たちは、まだ誰も見たことのない未来の景色を、<br />
              パートナーであるお客様と共に描き出します。
            </p>
          </div>
        </section>

        {/* 3. 信頼の証（チェックリスト）セクション */}
        <section className="py-32 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            
            {/* 左側：グラデーションテキストとリッチなリスト */}
            <div className="relative z-10 w-full">
              <motion.h2 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="text-5xl md:text-6xl font-black mb-8 leading-[1.1] tracking-tight"
              >
                なぜ私たちが<br />
                <span className="text-transparent bg-clip-text bg-linear-to-r from-meece-pink to-orange-500">
                  選ばれ続けるのか
                </span>
              </motion.h2>
              <p className="text-slate-600 text-xl mb-12 font-medium leading-relaxed max-w-xl">
                確かな技術力と、お客様のビジネスに寄り添う真摯な姿勢が、未来を切り拓く信頼を生んでいます。
              </p>
              
              {/* スマホ時のみネガティブマージンを適用し、画面横幅いっぱいに広げます */}
              <div className="grid gap-4 md:gap-6 -mx-6 md:mx-0">
                {[
                  { text: "低コスト、高品質でさらに早期開発", color: "from-green-400 to-emerald-600" },
                  { text: "導入後の保守運用も完全お任せ", color: "from-blue-400 to-indigo-600" },
                  { text: "業界トップクラスののコストパフォーマンス", color: "from-orange-400 to-pink-600" },
                  { text: "専門家によるコンサルティングやサポート完備", color: "from-purple-400 to-meece-purple" }
                ].map((item, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    /* スマホ時は角丸を解除(rounded-none)し、画面端まで広げます */
                    className="flex items-center gap-5 p-6 bg-white rounded-none md:rounded-3xl shadow-lg shadow-slate-100 border-y md:border border-slate-50 hover:shadow-xl hover:-translate-y-1 transition-all group"
                  >
                    <div className={`w-12 h-12 rounded-2xl bg-linear-to-br ${item.color} flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform shrink-0`}>
                      <CheckCircle2 size={24} />
                    </div>
                    <span className="text-lg text-slate-800 font-bold">{item.text}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* 右側：浮遊するコードエディタ・ビジュアル */}
            <div className="relative">
              {/* 背後の装飾（光の輪） */}
              <div className="absolute inset-0 bg-meece-blue/20 rounded-full blur-[120px] animate-pulse" />
              
              <motion.div 
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                /* モバイル時は巨大な影を無効化 (shadow-none) し、PC時(md以上)のみ表示するように変更しました */
                className="relative bg-slate-900 rounded-[40px] p-8 md:shadow-[0_50px_100px_rgba(0,0,0,0.4)] shadow-none border border-slate-700 overflow-hidden"
              >
                {/* ヘッダー風装飾 */}
                <div className="flex justify-between items-center mb-8 border-b border-slate-800 pb-4">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500 shadow-[0_0_10px_rgba(239,68,68,0.5)]" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500 shadow-[0_0_10px_rgba(245,158,11,0.5)]" />
                    <div className="w-3 h-3 rounded-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.5)]" />
                  </div>
                  <div className="px-4 py-1 bg-slate-800 rounded-full text-[10px] font-mono text-slate-400">meece-innovation.ts</div>
                </div>

                <div className="font-mono text-sm md:text-base space-y-4 text-blue-300">
                  <div className="flex gap-2"><span className="text-meece-pink">const</span><span className="text-meece-blue">innovation</span><span className="text-meece-pink">=</span><span>()</span><span className="text-meece-pink">=&gt;</span><span>{'{'}</span></div>
                  <div className="pl-6 text-slate-500 italic text-sm md:text-base">// 爆速で未来を実装する</div>
                  <div className="pl-6 flex flex-wrap gap-2">
                    <span className="text-meece-pink">return</span>
                    <span className="text-meece-blue">deploy</span>
                    <span>(</span>
                    <span className="text-yellow-300">'next-generation'</span>
                    <span>);</span>
                  </div>
                  <div className="text-meece-pink">{'}'};</div>
                  
                  {/* 進捗バーの強化 */}
                  <div className="pt-8 mt-4 border-t border-slate-800">
                    <div className="flex justify-between mb-2">
                      <span className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">Deployment Status</span>
                      <span className="text-[10px] text-meece-blue font-bold">100% COMPLETE</span>
                    </div>
                    <div className="w-full h-3 bg-slate-800 rounded-full overflow-hidden p-0.5">
                      <motion.div 
                        initial={{ width: 0 }} 
                        whileInView={{ width: '100%' }} 
                        transition={{ duration: 2.5, ease: "easeOut" }}
                        className="h-full bg-linear-to-r from-meece-blue via-meece-purple to-meece-pink rounded-full shadow-[0_0_15px_rgba(0,251,255,0.5)]" 
                      />
                    </div>
                  </div>
                </div>
                
                {/* 背後の透過アイコン */}
                <Code2 className="absolute -bottom-10 -right-10 text-white/3" size={240} />
              </motion.div>

              {/* 浮遊するサブバッジ：影を完全に無効化し、モバイルでの境界線の違和感を解消します */}
              <motion.div 
                animate={{ y: [0, 15, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-6 -left-6 bg-white p-6 rounded-3xl z-20 flex items-center gap-4 hover:scale-105 transition-transform shadow-none border-none"
              >
                <div className="w-12 h-12 bg-meece-blue/10 rounded-2xl flex items-center justify-center text-meece-blue font-black">
                  99%
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-bold uppercase tracking-tighter">Client Satisfaction</div>
                  <div className="text-slate-900 font-black">圧倒的な顧客満足度</div>
                </div>
              </motion.div>
            </div>

          </div>
        </section>

        {/* 3.1 フローティング・テクノロジー・セクション（情報密度＆ワンビュー最適化版） */}
        {/* スマホ時は画面端まで広げるため、mx-[-1.5rem] と rounded-none を追加し、mx-4 を lg:mx-4 に変更しました */}
        <section className="py-24 relative overflow-hidden bg-slate-950 text-white rounded-none lg:rounded-[60px] -mx-6 lg:mx-4 min-h-150 flex items-center">
          {/* 背景：ノイズを抑えた深いメッシュ */}
          <div className="absolute inset-0 bg-mesh-gradient opacity-20 pointer-events-none" />
          
          <div className="max-w-7xl mx-auto px-6 md:px-10 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-12 items-center relative z-10">
           
            {/* 左側：実装イメージを伝える具体テキスト */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-meece-blue/10 backdrop-blur-md rounded-full text-meece-blue text-xs font-bold border border-meece-blue/20 shadow-meece-glow">
                <Code2 size={14} /> 実装のコア・テクノロジー
              </div>
              
              <h2 className="text-3xl md:text-6xl font-black leading-tight tracking-tighter text-center lg:text-left">
                複雑な要件を、<br />
                <span className="text-transparent bg-clip-text bg-linear-to-r from-meece-blue via-meece-purple to-meece-pink animate-gradient-x">
                  最短距離で実装する。
                </span>
              </h2>

              <p className="text-base md:text-lg text-slate-400 font-medium leading-relaxed max-w-xl mx-auto lg:mx-0 text-center lg:text-left">
                従来の常識を大きく塗り替える高速開発、AIを活用した自動化パイプラインを組み合わせ、「高品質で早期立ち上げ、運用しやすく、止まらないシステム」を構築します。
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                {[
                  { title: "Scalable Architecture", desc: "将来のユーザー増に耐える拡張設計", icon: Layers, color: "text-meece-blue" },
                  { title: "Zero Logic Gap", desc: "ビジネス要件を正確にコードへ変換", icon: Cpu, color: "text-meece-purple" }
                ].map((feature, i) => (
                  <div key={i} className="p-5 bg-white/5 border border-white/10 rounded-2xl flex items-start gap-4 group hover:bg-white/10 transition-colors">
                    <feature.icon className={`${feature.color} shrink-0 mt-1`} size={24} />
                  <div>
                    <h4 className="text-sm font-black tracking-wider mb-1">{feature.title}</h4>
                    <p className="text-xs text-slate-500 font-medium leading-snug">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* 右側：システムが「組み上がっていく」実装イメージ・ビジュアル */}
          <div className="relative h-87.5 md:h-112.5 flex items-center justify-center mt-12 lg:mt-0">
              {/* 中央：システムの心臓部 */}
              <div className="relative w-32 h-32 md:w-48 md:h-48 flex items-center justify-center">
                <motion.div 
                  animate={{ scale: [1, 1.1, 1], rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 border-2 border-dashed border-meece-blue/20 rounded-full"
                />
                <div className="w-24 h-24 bg-linear-to-br from-meece-blue to-meece-purple rounded-4xl shadow-meece-glow flex items-center justify-center text-white z-20">
                  <Code2 size={40} className="animate-pulse" />
                </div>
              </div>

              {/* 周囲：各技術要素が接続されているイメージ（ラベルを増やし情報を濃くする） */}
              {[
                { label: "Frontend", tech: "Next.js", pos: "top-4 left-1/2 -translate-x-1/2", delay: 0 },
                { label: "Backend", tech: "Python / Go", pos: "bottom-4 left-1/2 -translate-x-1/2", delay: 0.5 },
                { label: "Database", tech: "PostgreSQL", pos: "left-0 top-1/2 -translate-y-1/2", delay: 1 },
                { label: "Infrastructure", tech: "AWS / Vercel", pos: "right-0 top-1/2 -translate-y-1/2", delay: 1.5 }
              ].map((node, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: node.delay }}
                  className={`absolute ${node.pos} px-3 py-2 md:px-5 md:py-3 bg-slate-900 border border-white/20 rounded-xl shadow-2xl z-30 flex flex-col items-center min-w-27.5 md:min-w-35 group hover:border-meece-blue/50 transition-colors`}
                >
                  <span className="text-[10px] font-black uppercase text-meece-blue tracking-tighter mb-1 opacity-70">{node.label}</span>
                  <span className="text-xs font-mono font-bold text-white tracking-tight">{node.tech}</span>
                  {/* 接続ラインの装飾イメージ */}
                  <div className="absolute w-px h-12 bg-linear-to-b from-meece-blue/50 to-transparent -z-10 group-hover:opacity-100 opacity-30" />
                </motion.div>
              ))}
            </div>

          </div>
        </section>

        {/* 3.2 没入型ストーリー・ソリューション（行間・高さ最適化版） */}
        <section 
          className="relative bg-white border-t border-slate-100 overflow-hidden w-screen"
          style={{ marginLeft: 'calc(50% - 50vw)', marginRight: 'calc(50% - 50vw)' }}
        >
          
          {/* 背景のアクセント文字：配置位置を top-[-5vh] に引き上げ、タイトルとの重なりを美しく調整 */}
          <div className="sticky top-[-5vh] h-[30vh] w-full flex items-center justify-center pointer-events-none overflow-hidden select-none z-0">
            <motion.h2 
              /* スクロールに合わせて浮き上がるようなアニメーション設定 */
              style={{ 
                opacity: useTransform(scrollY, [1200, 2500, 4000], [0, 0.08, 0]),
                scale: useTransform(scrollY, [1200, 2500], [0.8, 1]),
                y: useTransform(scrollY, [1200, 4000], [50, -50])
              }}
              /* 「選ばれ続けるのか」と同様、グラデーションを背景に敷いて文字で型抜き。 */
              /* 色はブルー〜エメラルドの寒色系を採用し、不透明度は背景として馴染む 8% 程度に設定。 */
              className="text-[15vw] font-black tracking-tighter whitespace-nowrap text-transparent bg-clip-text bg-linear-to-br from-blue-500 via-purple-500 to-emerald-500 animate-gradient-x"
            >
              SOLUTION
            </motion.h2>
          </div>

          {/* コンテンツエリア：背景を広げたので、中身は中央寄せに戻しつつ、モバイル時は px-6 で適度な余白を持たせます */}
          <div className="relative z-10 -mt-[5vh] max-w-7xl mx-auto px-6 pb-32">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 lg:gap-20 items-start">
              
              {/* 左側：セクション見出し（リッチなアニメーションと情報密度の最大化） */}
              <div className="sticky top-40 lg:pr-16 flex flex-col items-center lg:items-start">
                <motion.h2 
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="text-5xl md:text-7xl font-black mb-6 leading-[1.05] tracking-tighter text-center lg:text-left"
                >
                  あらゆるニーズに<br className="hidden lg:block" />応える
                  <span className="block mt-2 text-transparent bg-clip-text bg-linear-to-r from-blue-600 via-purple-600 to-emerald-500 animate-gradient-x">
                    最適な解決策
                  </span>
                </motion.h2>
                
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  viewport={{ once: true }}
                  className="text-slate-600 text-xl md:text-2xl mb-12 font-bold leading-relaxed max-w-xl text-center lg:text-left"
                >
                  ビジネスのフェーズに合わせた最適なシステム実装を、<br className="hidden lg:block" />独自のAI開発手法で「爆速」かつ「高品質」に提供します。
                </motion.p>

                {/* メリットリスト：時間差アニメーション(Stagger)を適用 */}
                <div className="hidden lg:flex flex-col gap-6 border-t border-slate-100 pt-10 w-full max-w-md">
                  {[
                    { label: "High Speed", text: "従来の60%の工期削減", color: "bg-blue-500" },
                    { label: "Flexibility", text: "あらゆるビジネス形態に対応", color: "bg-purple-500" },
                    { label: "Scalability", text: "将来の拡張を前提とした設計", color: "bg-emerald-500" }
                  ].map((benefit, i) => (
                    <motion.div 
                      key={i} 
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 + (i * 0.15), duration: 0.5 }}
                      viewport={{ once: true }}
                      whileHover={{ x: 10 }}
                      className="flex items-center gap-5 group cursor-default"
                    >
                      {/* 動くアイコン：ホバーで光り、拡大する */}
                      <div className="relative">
                        <div className={`w-2.5 h-2.5 rounded-full ${benefit.color} group-hover:scale-[2] transition-all duration-300 shadow-lg group-hover:shadow-[0_0_15px_rgba(59,130,246,0.6)]`} />
                        <motion.div 
                          animate={{ scale: [1, 2, 1], opacity: [0.5, 0, 0.5] }} 
                          transition={{ duration: 2, repeat: Infinity, delay: i * 0.5 }}
                          className={`absolute inset-0 rounded-full ${benefit.color} -z-10`} 
                        />
                      </div>
                      
                      <div className="flex flex-col">
                        <span className="text-[9px] font-black uppercase tracking-[0.2em] text-slate-400 mb-0.5 group-hover:text-blue-600 transition-colors">
                          {benefit.label}
                        </span>
                        <span className="text-base font-black text-slate-800 tracking-tight">
                          {benefit.text}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* 装飾的なグラデーションライン：アニメーション追加 */}
                <motion.div 
                  initial={{ width: 0, opacity: 0 }}
                  whileInView={{ width: "8rem", opacity: 0.3 }}
                  transition={{ delay: 1, duration: 1 }}
                  viewport={{ once: true }}
                  className="h-2 bg-linear-to-r from-blue-600 via-purple-600 to-emerald-500 rounded-full mt-12 hidden lg:block" 
                />
              </div>

              {/* 右側：リッチなリストカード（左右のマージン設定を削除し、親の px-0 に委ねます） */}
              <div className="grid gap-8 lg:mx-0">
                {[
                  {
                    id: "ent",
                    type: "ENTERPRISE_DETAIL",
                    target: "Enterprise",
                    label: "大手企業様向け",
                    title: "PoC・システム更改",
                    outline: "プロトタイプのを即座に開発したい、古いシステムを更改したいというニーズを解決します。",
                    detail: "最小限のチームで遂行することでスピードを最大化。品質を維持したまま工期を60%削減します。",
                    flow: ["ヒアリング・要件定義", "アジャイル開発", "お客様テスト", "フィードバック対応", "再テスト", "本番リリース", "Feasibility期間", "正規開発"],
                    color: "from-blue-500 to-indigo-600",
                    shadow: "shadow-blue-200",
                    icon: Building2
                  },
                  {
                    id: "std",
                    type: "STARTUP_DETAIL",
                    target: "Startup",
                    label: "中小企業様向け",
                    title: "新規プロダクト開発",
                    outline: "新しいプロダクトを早期リリースしたい企業様へ。あらゆるビジネス形態に柔軟に対応します。",
                    detail: "新規事業に必要なシステム基盤をAIモジュールで爆速構築。ビジネスチャンスを逃さないアジャイル体制を構築。",
                    flow: ["要件定義", "スプリント計画", "アジャイル開発", "お客様テスト", "リリース", "品質改善"],
                    color: "from-purple-500 to-meece-purple",
                    shadow: "shadow-purple-200",
                    icon: Store
                  },
                  {
                    id: "sls",
                    type: "SALES_DETAIL",
                    target: "Sales",
                    label: "営業会社様向け",
                    title: "商談を成約に導く爆速デモ実装",
                    outline: "次回の商談までに、顧客の要望を反映した高品質な「動くデモ」を実装. 成約率を劇的に向上させます。",
                    detail: "１回目の商談でヒアリング、２回目には60%完成したデモを提示。受注確率を大幅に向上させます。",
                    flow: ["商談", "議事録作成", "仕様書作成", "デモ実装", "デモプレゼン", "ゴール設定のご提案"],
                    color: "from-orange-500 to-pink-600",
                    shadow: "shadow-orange-200",
                    icon: Handshake
                  }
                ].map((item, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    /* w-[100vw] と負のマージン、影の無効化を適用し、親要素のパディングを無視して画面端まで白背景で塗りつぶします */
                    className="group bg-white w-[100vw] ml-[calc(50%-50vw)] mr-[calc(50%-50vw)] lg:w-full lg:mx-0 rounded-none lg:rounded-[40px] p-8 md:p-10 shadow-none lg:shadow-meece-card border-y border-x-0 lg:border border-slate-100 hover:shadow-2xl lg:hover:-translate-y-2 transition-all duration-500 relative overflow-hidden"
                  >
                    {/* コンテンツ全体をモバイルでは中央寄せ(items-center text-center)、PCでは左寄せ(lg:items-start lg:text-left)に切り替え */}
                    <div className="relative z-10 flex flex-col items-center text-center lg:items-start lg:text-left">
                      <div className="flex flex-col lg:flex-row items-center gap-4 mb-6">
                        <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center text-white shadow-lg ${item.shadow} group-hover:rotate-6 transition-transform`}>
                          <item.icon size={28} />
                        </div>
                        <div className="flex flex-col items-center lg:items-start">
                          <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 block mb-1">— {item.label} —</span>
                          <h3 className="text-2xl font-black text-slate-900">{item.title}</h3>
                        </div>
                      </div>
                      
                      <p className="text-slate-800 font-bold mb-4 leading-snug text-lg max-w-sm lg:max-w-none">{item.outline}</p>
                      <p className="text-slate-500 font-medium mb-8 leading-relaxed text-sm max-w-sm lg:max-w-none">{item.detail}</p>
                      
                      <div className="flex flex-col sm:flex-row lg:flex-row justify-center lg:justify-start gap-3 w-full sm:w-auto">
                        <button 
                          onClick={() => setSelectedCard({
                            type: item.type,
                            title: item.title,
                            desc: item.outline,
                            detail: item.detail,
                            icon: item.icon,
                            color: item.color.split(' ')[0].replace('from-', 'bg-')
                          })}
                          className="px-6 py-3 bg-slate-900 text-white rounded-xl font-black flex items-center justify-center gap-2 text-xs hover:bg-slate-800 transition-all active:scale-95 w-full sm:w-auto"
                        >
                          詳細を見る <ArrowRight size={14} />
                        </button>
                        <button 
                          onClick={() => setSelectedCard({
                            type: item.type + "_FLOW",
                            title: item.label.replace(/—\s*|\s*—/g, "") + " 導入フロー",
                            detail: "ご発注から本番運用までのステップです。",
                            flow: item.flow,
                            icon: Layers,
                            color: item.color.split(' ')[0].replace('from-', 'bg-')
                          })}
                          className="px-6 py-3 bg-white text-slate-900 border-2 border-slate-900 rounded-xl font-black flex items-center justify-center gap-2 text-xs hover:bg-slate-50 transition-all active:scale-95 w-full sm:w-auto"
                        >
                          フローを見る <ChevronRight size={14} />
                        </button>
                      </div>
                    </div>
                    {/* 背景のターゲットラベル */}
                    <div className="absolute top-8 right-8 px-3 py-1 bg-slate-100 rounded-full text-[8px] font-black text-slate-400 uppercase tracking-tighter">
                      Target: {item.target}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 3.5 制作ステップセクション（ワンビュー最適化版） */}
        <section className="py-20 md:py-28 overflow-hidden bg-slate-50/50">
          <div className="max-w-6xl mx-auto px-6">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-black mb-4">
                成功への <span className="text-blue-600">3つのステップ</span>
              </h2>
              <p className="text-slate-500 font-bold">最短ルートで理想を形にするプロセス</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { step: "01", title: "徹底ヒアリング", desc: "ビジョンを深く理解し、最適な技術選定を即座に行います。", color: "blue" },
                { step: "02", title: "高速プロトタイプ", desc: "Reactの特性を最大限に活かし、実働する形を最速で提示。", color: "pink" },
                { step: "03", title: "スケーラブル展開", desc: "将来の拡張性を担保した、堅牢なシステムを納品します。", color: "orange" }
              ].map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.2 }}
                  viewport={{ once: true }}
                  /* 全体の高さを統一するため、flex-1 を追加 */
                  className="relative p-8 bg-white rounded-4xl shadow-xl border border-slate-100 flex flex-col gap-4 group hover:shadow-2xl transition-all overflow-hidden"
                >
                  {/* アイコン背景の修正：03(orange)にも bg-orange-500 を強制適用し、文字を白(text-white)に統一 */}
                  {/* 同化を防ぐため、drop-shadow を強めにかけます */}
                  <div className={`w-12 h-12 rounded-2xl bg-${step.color === 'orange' ? 'orange-500' : step.color + '-500'} flex items-center justify-center text-white font-black shadow-lg mb-2 group-hover:scale-110 transition-transform relative z-10`}>
                    <span className="drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]">{step.step}</span>
                  </div>
                  
                  <h3 className="text-xl font-black text-slate-900 flex items-center gap-2 relative z-10">
                    {step.title}
                  </h3>
                  
                  <p className="text-slate-500 text-sm font-medium leading-relaxed relative z-10">
                    {step.desc}
                  </p>
                  
                  {/* 右上の背景数字：右側と上側に適度なマージン(right-4 top-4)を設け、見切れを防止。 */}
                  {/* 色味は各カードのカラーに合わせ、不透明度を 0.05 で固定して統一 */}
                  <span className={`text-8xl font-black absolute right-4 top-4 select-none pointer-events-none opacity-[0.05] transition-opacity group-hover:opacity-[0.1] ${
                    step.color === 'blue' ? 'text-blue-500' : 
                    step.color === 'pink' ? 'text-pink-500' : 
                    'text-orange-500'
                  }`}>
                    {step.step}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 3.6 斬新デザイン：インフィニティ・ギャラリー（モバイル・スナップ対応版） */}
        <section 
          className="min-h-[85vh] flex flex-col justify-center py-16 md:py-24 bg-slate-900 text-white rounded-none md:rounded-[60px] mx-0 md:mx-4 overflow-hidden relative"
          style={{ 
            width: windowWidth < 768 ? '100vw' : 'auto', 
            marginLeft: windowWidth < 768 ? 'calc(50% - 50vw)' : 'inherit', 
            marginRight: windowWidth < 768 ? 'calc(50% - 50vw)' : 'inherit' 
          }}
        >
          {/* 背景装飾 */}
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <div className="absolute top-0 left-1/4 w-px h-full bg-blue-500" />
            <div className="absolute top-0 left-2/4 w-px h-full bg-purple-500" />
            <div className="absolute top-0 left-3/4 w-px h-full bg-pink-500" />
          </div>

          <div className="px-8 md:px-16 mb-12 md:mb-20 relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="shrink-0">
              <div className="text-blue-500 text-sm font-bold uppercase tracking-widest italic mb-2">Creative Force</div>
              <h2 className="text-4xl md:text-6xl font-black tracking-tighter">無限の表現領域</h2>
            </div>
            <p className="text-slate-400 text-base md:text-xl font-medium max-w-lg border-l-4 border-blue-600/50 pl-6">
              AIが切り拓くのは、効率化だけではありません。<br className="hidden md:block" />
              最新技術と感性を融合させ、人々の感情を揺さぶる「驚き」を実装します。
            </p>
          </div>

          {/* ギャラリーコンテナ：モバイルではスクロールバーを隠し、スナップを有効化 */}
          <div className="relative group/container">
            {/* ナビゲーション矢印：PCのみ表示 */}
            <button 
              onClick={() => document.getElementById('scroll-container')?.scrollBy({ left: -420, behavior: 'smooth' })}
              className="absolute left-6 top-1/2 -translate-y-1/2 z-30 w-14 h-14 bg-white/10 backdrop-blur-md border border-white/20 rounded-full hidden md:flex items-center justify-center opacity-0 group-hover/container:opacity-100 transition-opacity hover:bg-white/20 shadow-2xl"
            >
              <ChevronLeft size={28} />
            </button>

            <button 
              onClick={() => document.getElementById('scroll-container')?.scrollBy({ left: 420, behavior: 'smooth' })}
              className="absolute right-6 top-1/2 -translate-y-1/2 z-30 w-14 h-14 bg-white/10 backdrop-blur-md border border-white/20 rounded-full hidden md:flex items-center justify-center opacity-0 group-hover/container:opacity-100 transition-opacity hover:bg-white/20 shadow-2xl"
            >
              <ChevronRight size={28} />
            </button>

            <div 
              id="scroll-container"
              /* モバイル時は px-0 にすることで、カードが画面端から流れ始めるようにします */
              className="flex gap-6 md:gap-8 pb-12 px-0 md:px-16 overflow-x-auto snap-x snap-mandatory no-scrollbar"
              style={{
                scrollbarWidth: 'none', /* Firefox */
                msOverflowStyle: 'none', /* IE/Edge */
              }}
            >
              {/* スクロールバーを隠すためのCSSクラス no-scrollbar は別途CSSに定義が必要ですが、インラインでも対応可能 */}
              {[
                { 
                  type: "UX",
                  title: "直感的な操作感", 
                  desc: "指先に吸い付くUI。0.1秒のレスポンス。", 
                  /* モーダル用の詳細テキストを追加 */
                  modal_text: "ユーザーの「思考」を妨げない究極のレスポンス。独自のインタラクション設計により、まるで身体の一部のように動くUIを実現します。0.1秒の遅延すら排除し、心地よさを数値で担保します。",
                  /* UX: 「思考と操作が直結する」ことを波紋とスピードメーターで表現 */
                  visual_content: (
                    <div className="relative w-full h-full flex flex-col items-center justify-center space-y-8">
                      <div className="relative">
                        <motion.div animate={{ scale: [1, 1.5], opacity: [0.5, 0] }} transition={{ duration: 1.5, repeat: Infinity }} className="absolute inset-0 bg-blue-400 rounded-full" />
                        <div className="relative w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center shadow-xl">
                          <MousePointer2 className="text-white" size={32} />
                        </div>
                      </div>
                      <div className="w-full max-w-60 space-y-2">
                        <div className="flex justify-between text-[10px] font-black text-slate-400 uppercase tracking-widest">
                          <span>Input</span>
                          <span>Response: 0.1s</span>
                        </div>
                        <div className="h-4 w-full bg-slate-200 rounded-full overflow-hidden p-1">
                          <motion.div initial={{ width: 0 }} animate={{ width: "100%" }} transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 1 }} className="h-full bg-blue-500 rounded-full shadow-[0_0_10px_rgba(59,130,246,0.8)]" />
                        </div>
                      </div>
                      <p className="text-[11px] text-slate-500 font-bold text-center">「操作した瞬間」に反応が返るストレスフリーな体験</p>
                    </div>
                  ),
                  icon: MousePointer2, 
                  color: "bg-blue-600" 
                },
                { 
                  type: "AI_CHAT_VISION",
                  title: "シームレスな対話体験", 
                  desc: "AIと人間が一体となるUIデザイン。",
                  /* モーダル用の詳細テキストを追加 */
                  modal_text: "AIの知能を、冷たい機械ではなく「頼れるパートナー」として演出。対話の文脈を深く理解し、次の一歩を先回りして提示するインテリジェントな体験を、洗練されたインターフェースで包み込みます。",
                  /* AI: 「データから知能が形作られる」様子をノードの結びつきで表現 */
                  visual_content: (
                    <div className="relative w-full h-full flex flex-col items-center justify-center p-6">
                      <div className="grid grid-cols-3 gap-4 mb-8">
                        {[...Array(9)].map((_, i) => (
                          <motion.div
                            key={i}
                            animate={{ 
                              scale: [1, 1.2, 1],
                              backgroundColor: ["#e2e8f0", "#a855f7", "#e2e8f0"]
                            }}
                            transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
                            className="w-4 h-4 rounded-full shadow-sm"
                          />
                        ))}
                      </div>
                      <div className="relative w-40 h-12 bg-white rounded-2xl border-2 border-purple-500 flex items-center justify-center shadow-lg">
                        <motion.div animate={{ opacity: [0, 1, 0] }} transition={{ duration: 2, repeat: Infinity }} className="flex gap-1">
                          <div className="w-2 h-2 bg-purple-500 rounded-full" />
                          <div className="w-2 h-2 bg-purple-500 rounded-full" />
                          <div className="w-2 h-2 bg-purple-500 rounded-full" />
                        </motion.div>
                        <span className="absolute -top-3 left-4 px-2 py-0.5 bg-purple-500 text-[8px] text-white font-black rounded-md">AI THINKING</span>
                      </div>
                      <p className="text-[11px] text-slate-500 font-bold text-center mt-6">対話の意図をAIがリアルタイムに解析・同期</p>
                    </div>
                  ),
                  icon: Cpu, 
                  color: "bg-purple-600" 
                },
                { 
                  type: "DESIGN",
                  title: "圧倒的ビジュアル", 
                  desc: "ブランドを象徴するデザイン。", 
                  /* モーダル用の詳細テキストを追加 */
                  modal_text: "一瞬で信頼を勝ち取る、圧倒的な造形美。ブランドの魂を色彩とレイアウトに宿し、競合他社とは一線を画す「選ばれる理由」を視覚的に実装。感情を揺さぶる体験を創造します。",
                  /* DESIGN: 「色の黄金比と調和」をパレットと光の拡散で表現 */
                  visual_content: (
                    <div className="relative w-full h-full flex flex-col items-center justify-center">
                     <div className="flex gap-[-10px]">
                        <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 3, repeat: Infinity }} className="w-24 h-32 bg-blue-500 rounded-2xl rotate-[-10deg] shadow-2xl" />
                        <motion.div animate={{ y: [0, -20, 0] }} transition={{ duration: 3, repeat: Infinity, delay: 0.5 }} className="w-24 h-32 bg-purple-500 rounded-2xl rotate-0 shadow-2xl -mx-8 z-10" />
                        <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 3, repeat: Infinity, delay: 1 }} className="w-24 h-32 bg-pink-500 rounded-2xl rotate-10 shadow-2xl" />
                      </div>
                      <div className="mt-10 flex flex-col items-center">
                        <div className="text-[10px] font-black text-slate-800 tracking-widest border-b-2 border-slate-900 mb-1">BRAND IDENTITY</div>
                        <p className="text-[11px] text-slate-500 font-bold">競合他社を圧倒する独自の世界観</p>
                      </div>
                    </div>
                  ),
                  icon: Lightbulb, 
                  color: "bg-pink-600" 
                },
                { 
                  type: "TECH",
                  title: "次世代Web体験", 
                  desc: "最新技術で限界を突破。", 
                  /* モーダル用の詳細テキストを追加 */
                  modal_text: "Webの限界を拡張する、最高峰のエンジニアリング。WebGPUや高度なレンダリング技術を駆使し、ブラウザ上でネイティブアプリを超える滑らかさと3D表現を実現。未来の実装力を提供します。",
                  /* TECH: 「3D空間の構築」をワイヤーフレームが組み上がる様子で表現 */
                  visual_content: (
                    <div className="relative w-full h-full flex flex-col items-center justify-center">
                      <div className="relative w-32 h-32">
                        <motion.div 
                          animate={{ rotateY: 360, rotateX: 360 }} 
                          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                          className="w-full h-full border-2 border-cyan-500 rounded-lg relative preserve-3d"
                        >
                          <div className="absolute inset-0 border border-cyan-500/30 flex items-center justify-center">
                            <Layers className="text-cyan-500" size={40} />
                          </div>
                        </motion.div>
                      </div>
                      <div className="mt-12 space-y-2 w-full max-w-50">
                        <div className="flex justify-between text-[8px] font-mono text-cyan-600">
                          <span>WebGPU_CORE</span>
                          <span>STABLE</span>
                        </div>
                        <div className="h-1 w-full bg-slate-200 rounded-full">
                          <motion.div animate={{ opacity: [0.2, 1, 0.2] }} transition={{ duration: 1, repeat: Infinity }} className="h-full bg-cyan-500" />
                        </div>
                      </div>
                      <p className="text-[11px] text-slate-500 font-bold mt-4">ブラウザの限界を超える描画パフォーマンス</p>
                    </div>
                  ),
                  icon: AppWindow, 
                  color: "bg-cyan-600" 
                }
              ].map((card, i) => (
                <motion.div
                  key={i}
                  whileTap={{ scale: 0.98 }}
                  /* 型エラーを防ぎつつ、全てのプロパティ（modal_text含む）を渡すよう明示 */
                  onClick={() => setSelectedCard({
                    ...card,
                    modal_text: (card as any).modal_text
                  })}
                  /* モバイル時は ml-4 を指定し、1枚目のカードの端が画面左端につかないようにしつつ、全体の背景は 100vw になっています */
                  className={`shrink-0 w-[85%] md:w-100 min-h-95 md:min-h-105 bg-white/5 border border-white/10 rounded-[35px] md:rounded-[45px] p-10 snap-center flex flex-col justify-between backdrop-blur-md relative group overflow-hidden cursor-pointer shadow-2xl ${i === 0 ? 'ml-4 md:ml-0' : ''}`}
                >
                  <div className={`absolute -top-10 -right-10 w-48 h-48 ${card.color} opacity-20 blur-[60px] group-hover:opacity-40 transition-opacity duration-700`} />
                  <div className="relative z-10 flex flex-col h-full">
                    <div className={`w-16 h-16 rounded-3xl ${card.color} flex items-center justify-center mb-10 shadow-2xl shadow-black/40 group-hover:rotate-360 transition-transform duration-1000`}>
                      <card.icon size={32} className="text-white" />
                    </div>
                    <div className="grow">
                      <h3 className="text-2xl md:text-3xl font-black mb-6 leading-tight tracking-tight">{card.title}</h3>
                      <p className="text-slate-400 text-base md:text-lg leading-relaxed">{card.desc}</p>
                    </div>
                    <div className="mt-10 flex items-center gap-3 text-sm font-black tracking-[0.2em] text-white/70 group-hover:text-white transition-colors uppercase">
                      DETAILS <ArrowRight size={18} className="text-blue-400" />
                    </div>
                  </div>
                </motion.div>
              ))}
              {/* モバイルで最後のカードを中央にするためのダミースペース */}
              <div className="shrink-0 w-4 md:hidden" />
            </div>
          </div>
          
          {/* モバイル用インジケーター（簡易） */}
          <div className="flex justify-center gap-2 mt-2 md:hidden">
            <div className="w-12 h-1 bg-blue-600 rounded-full" />
            <div className="w-2 h-1 bg-white/20 rounded-full" />
            <div className="w-2 h-1 bg-white/20 rounded-full" />
            <div className="w-2 h-1 bg-white/20 rounded-full" />
          </div>
        </section>

        {/* 3.8 よくある質問（FAQ）セクション（追加） */}
        <section className="py-32 max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black mb-4 flex items-center justify-center gap-3">
              <HelpCircle className="text-pink-500" /> よくある質問
            </h2>
            <p className="text-slate-500 font-bold">疑問や不安を解消します</p>
          </div>
          <div className="space-y-4">
            {[
              { q: "開発期間は最短でどのくらいですか？", a: "プロジェクトの規模によりますが、最短2週間でプロトタイプの納品が可能です。" },
              { q: "まだアイデア段階ですが相談に乗ってもらえますか？", a: "もちろんです。壁打ちの段階から技術的な実現可能性を含めてサポートいたします。" },
              { q: "制作後の保守運用もお願いできますか？", a: "はい。リリース後の機能追加やサーバーメンテナンスなど、保守もお任せください。" },
              { q: "受託で発注させていただいた場合は納品いただけますか？", a: "はい。弊社で確立したAI開発アーキテクチャーはソースコードを生成しシステムを構築するため、ソースコードを納品することはもちろん可能です。" }
            ].map((faq, i) => (
              <details key={i} className="group bg-white border border-slate-200 rounded-3xl p-6 hover:shadow-lg transition-all cursor-pointer overflow-hidden">
                <summary className="list-none flex justify-between items-center font-black text-lg">
                  {faq.q}
                  <ChevronDown className="group-open:rotate-180 transition-transform text-slate-400" />
                </summary>
                <p className="mt-4 text-slate-600 font-medium leading-relaxed border-t pt-4">
                  {faq.a}
                </p>
              </details>
            ))}
          </div>
        </section>

        {/* 4. お問い合わせ誘導：没入型・宇宙発射シミュレーション */}
        <section 
          className="py-20 md:py-32 text-center relative z-10 bg-transparent overflow-visible"
          style={windowWidth < 768 ? { 
            width: '100vw', 
            marginLeft: 'calc(50% - 50vw)', 
            marginRight: 'calc(50% - 50vw)' 
          } : {}}
        >
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            /* 修正点：max-w-6xlを削除し、背景の四角形が表示されないようにbg-transparentを徹底。PC時はw-fullで制御します */
            className="w-full lg:max-w-7xl mx-auto relative group bg-transparent"
            style={windowWidth < 768 ? { 
              width: '100vw', 
              marginLeft: 'calc(50% - 50vw)', 
              marginRight: 'calc(50% - 50vw)' 
            } : {}}
          >
            {/* 宇宙背景：モバイル時は rounded-none で端まで白背景を消し、PC時は 80px の角丸を維持します */}
            <div className={`absolute inset-0 bg-slate-950 shadow-none overflow-hidden ${windowWidth < 768 ? 'rounded-none' : 'rounded-[80px]'}`}>
              <div className="absolute inset-0 bg-stars opacity-30 animate-star-flow" />
              <div className="absolute inset-0 bg-linear-to-b from-transparent via-meece-purple/10 to-meece-blue/20" />
              
              {/* 装飾用の光る惑星 */}
              <div className="absolute -top-20 -left-20 w-80 h-80 bg-meece-blue/20 rounded-full blur-[100px] animate-pulse" />
              <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-meece-pink/10 rounded-full blur-[100px]" />
            </div>

            <div className="relative z-10 p-10 md:p-20 flex flex-col items-center">
              {/* ロケットアニメーション：クリックで発射 */}
              <motion.div
                animate={isLaunched ? { 
                  // y: 0(開始) -> 40(少し沈む) -> -1200(一気に上昇)
                  y: [0, 40, -1200],
                  // rotate: 現在の角度から少し左に回して真上(-45度付近)を向かせる
                  rotate: [0, -45, -45],
                  scale: [1, 0.8, 0],
                  opacity: [1, 1, 0]
                } : { 
                  y: [0, -15, 0],
                  rotate: [0, 2, -2, 0]
                }}
                transition={isLaunched ? { 
                  duration: 1.2, 
                  ease: "easeInOut",
                  times: [0, 0.3, 1] 
                } : { 
                  duration: 4, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
                className="mb-8 text-meece-blue drop-shadow-[0_0_20px_rgba(0,251,255,0.5)]"
              >
                <Rocket size={100} strokeWidth={1.5} />
                {!isLaunched && (
                  <motion.div 
                    animate={{ opacity: [0, 1, 0], scale: [1, 1.5, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-16 h-3 bg-meece-blue/30 blur-xl mx-auto mt-2 rounded-full"
                  />
                )}
              </motion.div>

              <h2 className="text-4xl md:text-7xl font-black mb-6 text-white tracking-tighter leading-none">
                未来への準備は、<br />
                <span className="text-transparent bg-clip-text bg-linear-to-r from-meece-blue via-meece-purple to-meece-pink">
                  整いましたか？
                </span>
              </h2>

              <p className="text-lg md:text-xl mb-10 text-slate-400 font-medium max-w-2xl mx-auto leading-relaxed">
                想像を現実に。お客様のビジネスを<br />
                次世代のテクノロジーでご支援いたします。
              </p>

              {/* ネオン発光ボタン */}
              <motion.button
                onMouseEnter={() => !isLaunched && setIsLaunched(false)}
                onClick={() => {
                  setIsLaunched(true);
                  setTimeout(() => {
                    window.location.href = "mailto:support@meece.example.com?subject=プロジェクト開始の相談";
                    setIsLaunched(false);
                  }, 1500);
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative group/btn"
              >
                {/* ボタン背後の強烈な光 */}
                <div className="absolute inset-0 bg-linear-to-r from-meece-blue to-meece-purple rounded-full blur-2xl opacity-0 group-hover/btn:opacity-60 transition-opacity duration-500" />
                
                {/* ボタン本体（ワンビュー最適化サイズ） */}
                <div className="relative px-12 md:px-14 py-6 bg-white text-slate-900 font-black rounded-full text-xl flex items-center gap-4 shadow-meece-neon group-hover/btn:shadow-none transition-all overflow-hidden whitespace-nowrap">
                  {/* ボタン内の流れるような光の演出 */}
                  <div className="absolute inset-0 bg-linear-to-r from-transparent via-meece-blue/10 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000" />
                  
                  <Heart className={`fill-pink-500 text-pink-500 ${isLaunched ? 'animate-ping' : ''}`} size={24} />
                  <span>プロジェクトを開始する</span>
                </div>
              </motion.button>
              
              <div className="mt-8 flex flex-col sm:flex-row items-center gap-4 sm:gap-6 text-slate-500 font-bold tracking-widest text-xs">
                <div className="flex items-center gap-2 whitespace-nowrap"><CheckCircle2 size={16} /> 最短2週間での納品</div>
                <div className="w-1 h-1 bg-slate-700 rounded-full hidden sm:block" />
                <div className="flex items-center gap-2 whitespace-nowrap"><CheckCircle2 size={16} /> 圧倒的な低コスト</div>
              </div>
            </div>
          </motion.div>
        </section>

      </div>

      {/* 共通フッターの呼び出し（TOPページと完全に統一） */}
      <Footer />

      {/* モーダルUIコンポーネント（左右分割・ビジュアル強化版） */}
      <AnimatePresence>
        {selectedCard && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedCard(null)}
              className="fixed inset-0 bg-slate-950/90 backdrop-blur-md z-100 cursor-pointer"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 40 }}
              /* コンテナ自体のサイズを中身に合わせ(h-auto)、最大高さを制限(max-h)することで無駄な余白を排除 */
              className={`fixed inset-x-4 top-1/2 -translate-y-1/2 md:inset-x-auto md:left-1/2 md:-translate-x-1/2 w-[calc(100%-32px)] md:w-full h-auto max-h-[85vh] md:max-h-[90vh] ${selectedCard.type.includes("_FLOW") ? 'md:max-w-6xl' : 'md:max-w-xl'} bg-white border border-slate-200 rounded-4xl md:rounded-[40px] z-1000 shadow-[0_0_100px_rgba(0,0,0,0.5)] overflow-hidden flex flex-col`}
            >
              {/* スクロール機能をここ（内側のdiv）に集約し、背景の白をこのレイヤーで確定させます */}
              <div className={`flex flex-col ${selectedCard.type.includes("_FLOW") ? 'md:flex-row' : ''} h-full w-full bg-white relative isolate overflow-hidden`}>
                
                {/* メインコンテンツエリア（左側）：overflow-hiddenで構造をロックします */}
                <div className={`p-6 md:p-12 flex flex-col h-full ${selectedCard.type.includes("_FLOW") ? 'flex-[1.2] border-r border-slate-100' : 'w-full'} relative overflow-hidden`}>
                  <div className={`absolute -top-24 -left-24 w-64 h-64 ${selectedCard.color.replace('bg-', 'bg-')}/5 rounded-full blur-[80px] pointer-events-none`} />
                  
                  <div className="flex items-center gap-5 mb-6 shrink-0 relative z-10">
                    <div className={`w-12 h-12 rounded-2xl ${selectedCard.color} flex items-center justify-center shadow-lg shadow-blue-200/50`}>
                      <selectedCard.icon size={24} className="text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl md:text-4xl font-black text-slate-900 tracking-tighter leading-none">
                        {selectedCard.title}
                      </h3>
                      <div className="mt-1 flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-meece-blue animate-pulse" />
                        <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Premium Service</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* --- 表示内容の条件分岐：絶対ワンビュー保証版 --- */}
                  <div className="flex flex-col relative z-10 flex-1 w-full h-full overflow-hidden">
                    
                    {(selectedCard.type === "UX" || selectedCard.type === "AI_CHAT_VISION" || selectedCard.type === "DESIGN" || selectedCard.type === "TECH") ? (
                      /* 無限の表現領域：イラストの見切れを解消し、行間を広げつつ一画面に収める */
                      <div className="flex flex-col items-center w-full h-full overflow-hidden">
                        
                        {/* 1. タイトル/説明文：高さを最小限(shrink-0)に維持 */}
                        <div className="w-full shrink-0 pt-1 pb-2 px-2">
                          <p className="text-slate-800 text-sm md:text-lg font-black leading-tight border-l-4 border-slate-900 pl-3 text-center lg:text-left">
                            {selectedCard.desc}
                          </p>
                        </div>
                        
                        {/* 2. 視覚的イメージ：イラストが見切れないよう、高さを `32vh` に広げ、かつ中の余白（py-2）を調整 */}
                        <div className="w-full shrink-0 flex items-center justify-center px-2">
                          <div className="w-full h-[32vh] max-h-55 flex items-center justify-center relative bg-slate-50/80 border border-slate-100 rounded-3xl md:rounded-4xl overflow-hidden shadow-inner py-2">
                            {/* イラストが枠内に完全に収まるよう、中のコンテナに overflow-hidden を適用 */}
                            <div className="w-full h-full overflow-hidden flex items-center justify-center scale-95 md:scale-100 relative">
                              {selectedCard.visual_content}
                            </div>
                          </div>
                        </div>

                        {/* 3. 解説文：行間を広い `leading-[2.2]` に変更。文章サイズを少し小さくし、スクロールなしで一画面に収めます */}
                        <div className="flex-1 w-full overflow-hidden px-4 py-3 flex items-center justify-center">
                          <p className="text-slate-700 text-[12px] md:text-[15px] font-bold border-l-2 md:border-l-4 border-meece-blue pl-3 md:pl-4 text-center lg:text-left leading-[2.2]">
                            {selectedCard.modal_text}
                          </p>
                        </div>

                        {/* 4. 閉じるボタン：最下部に固定。背景色を白にして、テキストが重なっても見やすくします */}
                        <div className="w-full shrink-0 pt-3 pb-2 px-2 border-t border-slate-50 bg-white">
                          <button
                            type="button"
                            onClick={() => setSelectedCard(null)}
                            className="w-full px-4 py-4 bg-slate-900 text-white text-center font-black rounded-2xl hover:bg-slate-800 transition-all text-sm active:scale-95 shadow-lg"
                          >
                            閉じる
                          </button>
                        </div>
                      </div>
                    ) : (
                      /* 導入フロー等：ボタンを底に固定し、中身だけをスクロール可能にします */
                      <div className="flex flex-col h-full w-full overflow-hidden">
                        {/* コンテンツエリア：flex-1 で余った高さを使い、溢れたらスクロール */}
                        <div className="flex-1 overflow-y-auto py-4 pr-1">
                          {selectedCard.detail && (
                            <p className="text-slate-700 text-lg md:text-base leading-[2.2] md:leading-relaxed mb-8 shrink-0 font-bold">
                              {selectedCard.detail}
                            </p>
                          )}

                          {selectedCard.flow && (
                            <div className="flex flex-col relative z-10 mt-4 pb-2">
                              <h4 className="text-[11px] font-black text-slate-400 tracking-[0.2em] uppercase mb-5 flex items-center gap-3">
                                <span className="w-8 h-px bg-slate-200"></span> Implementation Steps
                              </h4>
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-y-3 md:gap-x-5 md:gap-y-4">
                                {selectedCard.flow.map((step: string, idx: number, arr: any[]) => (
                                  <div key={idx} className={`relative flex items-center gap-4 px-5 py-4 md:p-4 rounded-2xl border-2 transition-all duration-300 ${
                                    idx === arr.length - 1 
                                      ? 'bg-white border-meece-success shadow-lg shadow-meece-success/10' 
                                      : 'bg-white border-slate-100 shadow-sm'
                                  }`}>
                                    <div className={`w-8 h-8 md:w-8 md:h-8 rounded-xl flex items-center justify-center text-xs md:text-xs font-black shrink-0 ${
                                      idx === arr.length - 1 
                                        ? 'bg-meece-success text-white' 
                                        : 'bg-slate-50 text-slate-400 border border-slate-100'
                                    }`}>
                                      {idx + 1}
                                    </div>
                                    <span className="text-[14px] md:text-[14px] font-black tracking-tight leading-tight text-slate-800">
                                      {step}
                                    </span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>

                        {/* 固定ボタンエリア：shrink-0 でボタンの高さを守り、mt-auto で底へ固定します */}
                        <div className="w-full shrink-0 pt-6 mt-auto border-t border-slate-100 bg-white">
                          <div className="flex flex-col sm:flex-row gap-3">
                            <a
                              href={`mailto:support@meece.example.com?subject=【発注相談】${selectedCard.title}`}
                              className="flex-[1.5] px-6 py-4 bg-slate-900 text-white text-center font-black rounded-2xl hover:bg-slate-800 transition-all text-sm flex items-center justify-center gap-2 active:scale-95"
                            >
                              <Heart className="fill-pink-500 text-pink-500" size={16} /> 発注の相談
                            </a>
                            {(selectedCard.type === "ENTERPRISE_DETAIL" || selectedCard.type === "STARTUP_DETAIL" || selectedCard.type === "SALES_DETAIL") && (
                              <button
                                type="button"
                                onClick={() => {
                                  if (selectedCard) {
                                    const flowDataMap: Record<string, string[]> = {
                                      "ENTERPRISE_DETAIL": ["ヒアリング・要件定義", "アジャイル開発", "お客様テスト", "フィードバック対応", "再テスト", "本番リリース", "Feasibility期間", "正規開発"],
                                      "STARTUP_DETAIL": ["要件定義", "スプリント計画", "アジャイル開発", "お客様テスト", "リリース", "品質改善"],
                                      "SALES_DETAIL": ["商談", "議事録作成", "仕様書作成", "デモ実装", "デモプレゼン", "ゴール設定のご提案"]
                                    };
                                    const currentType = selectedCard.type;
                                    let baseLabel = currentType === "ENTERPRISE_DETAIL" ? "大手企業様向け" : currentType === "STARTUP_DETAIL" ? "中小企業様向け" : "営業会社様向け";
                                    setSelectedCard({
                                      ...selectedCard,
                                      type: currentType + "_FLOW",
                                      title: baseLabel + " 導入フロー",
                                      detail: "ご発注から本番運用、そこでその先の正規開発までの具体的なステップです。",
                                      flow: flowDataMap[currentType],
                                      icon: Layers
                                    });
                                  }
                                }}
                                className="flex-1 px-4 py-4 border-2 border-slate-200 text-slate-700 text-center font-black rounded-2xl hover:bg-slate-50 transition-all text-sm flex items-center justify-center gap-1 active:scale-95"
                              >
                                導入フロー <ChevronRight size={16} />
                              </button>
                            )}
                            <button
                              type="button"
                              onClick={() => setSelectedCard(null)}
                              className={`${(selectedCard.type === "UX" || selectedCard.type === "AI_CHAT_VISION" || selectedCard.type === "DESIGN" || selectedCard.type === "TECH") ? 'w-full' : 'flex-[0.6]'} px-4 py-4 bg-slate-100 text-slate-500 text-center font-bold rounded-2xl hover:bg-slate-200 transition-all text-sm active:scale-95`}
                            >
                              閉じる
                            </button>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* 導入フロー時のみ表示される右側エリア：モバイル(hidden)では非表示、PC(md:flex)のみ表示 */}
                {selectedCard.type.includes("_FLOW") && (
                  <div className="hidden md:flex flex-1 bg-slate-50/50 relative items-center justify-center p-8 md:p-12 overflow-hidden">
                    <div className="relative w-full max-w-md">
                      <div className="flex flex-col items-center">
                        <div className="mb-10 text-center">
                          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-full text-[10px] font-black text-slate-500 uppercase tracking-widest mb-4 shadow-sm">
                            Success Roadmap
                          </div>
                          <h4 className="text-lg md:text-xl font-black text-slate-900 leading-tight">
                            理想を形にする最短プロセス
                          </h4>
                        </div>
                        <div className="relative space-y-10 w-full px-10">
      0                 <div className="absolute left-15.75 top-4 bottom-4 w-1 bg-slate-200 -z-10 rounded-full overflow-hidden">
                            <motion.div 
                              initial={{ height: 0 }}
                              animate={{ height: '100%' }}
                              transition={{ duration: 1.5 }}
                              className="w-full bg-linear-to-b from-blue-500 to-purple-600"
                            />
                          </div>
                          {(() => {
                            // ターゲットに合わせて表示するステップデータを定義
                            const stepsMap: Record<string, any[]> = {
                              "ENTERPRISE_DETAIL": [
                                { label: "Phase 01", title: "財務解剖・投資余力算出", icon: Code2, color: "bg-blue-500" },
                                { label: "Phase 02", title: "AI駆動型開発・POC", icon: Shield, color: "bg-purple-600" },
                                { label: "Goal", title: "本番リリース・人件費削減", icon: CheckCircle2, color: "bg-emerald-500" }
                              ],
                              "STARTUP_DETAIL": [
                                { label: "Phase 01", title: "戦略削ぎ落とし・KPI設計", icon: Code2, color: "bg-blue-500" },
                                { label: "Phase 02", title: "AI実装プロトタイプ市場検証", icon: Shield, color: "bg-purple-600" },
                                { label: "Goal", title: "アジャイル拡張・PMF達成", icon: CheckCircle2, color: "bg-emerald-500" }
                              ],
                              "SALES_DETAIL": [
                                { label: "Phase 01", title: "商談ヒアリング・課題抽出", icon: Code2, color: "bg-blue-500" },
                                { label: "Phase 02", title: "24時間以内デモ実装・提示", icon: Shield, color: "bg-purple-600" },
                                { label: "Goal", title: "確かな期待値形成・成約", icon: CheckCircle2, color: "bg-emerald-500" }
                              ]
                            };

                            // 現在のタイプから"_FLOW"を除いたキーでデータを取得（デフォルトは営業会社用）
                            const currentType = selectedCard.type.replace("_FLOW", "");
                            const steps = stepsMap[currentType] || stepsMap["SALES_DETAIL"];

                            return steps.map((phase, idx) => (
                              <motion.div 
                                key={idx} 
                                initial={{ opacity: 0, x: 20 }} 
                                animate={{ opacity: 1, x: 0 }} 
                                transition={{ delay: 0.3 + idx * 0.2 }} 
                                className="flex items-center gap-6"
                              >
                                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center text-white shadow-lg shrink-0 ${phase.color}`}>
                                  <phase.icon size={24} />
                                </div>
                                <div className="flex flex-col text-left">
                                  <span className="text-[10px] font-black uppercase tracking-tighter text-slate-400">{phase.label}</span>
                                  <span className="text-base font-black tracking-tight text-slate-800">{phase.title}</span>
                                </div>
                              </motion.div>
                            ));
                          })()}
                        </div>
                      </div>
                    </div>
                  </div>
                )}

              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default StunningHeroSection;