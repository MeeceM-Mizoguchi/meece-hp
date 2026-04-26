import React, { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Pause, ChevronLeft, ChevronRight, MessageSquare, ShieldAlert } from 'lucide-react';
import { Navbar } from '../components/organisms/Navbar';
import { PresentationSlide01 } from '../components/organisms/PresentationSlide01';
import { PresentationSlide02 } from '../components/organisms/PresentationSlide02';
import { PresentationSlide02_2 } from '../components/organisms/PresentationSlide02_2';
import { PresentationSlide03 } from '../components/organisms/PresentationSlide03';
import { PresentationSlide04 } from '../components/organisms/PresentationSlide04';
import { PresentationSlide05 } from '../components/organisms/PresentationSlide05';
import { PresentationSlide06 } from '../components/organisms/PresentationSlide06';
import { PresentationSlide07 } from '../components/organisms/PresentationSlide07';
import { PresentationSlide08 } from '../components/organisms/PresentationSlide08';
import { PresentationSlide09 } from '../components/organisms/PresentationSlide09';
import { PresentationSlide10 } from '../components/organisms/PresentationSlide10';
import { PresentationSlide11 } from '../components/organisms/PresentationSlide11';
import { PresentationSlide12 } from '../components/organisms/PresentationSlide12';
import { PresentationSlide13 } from '../components/organisms/PresentationSlide13';
import { PresentationSlide14 } from '../components/organisms/PresentationSlide14';
import gsap from 'gsap';

export const PresentationRoom: React.FC = () => {
  // --- スライドデータ定義 ---
  const slides: any[] = [
    {
      id: 1,
      label: "OPENING",
      title: "すべてのビジネスに、\n輝く「物語」の続きを。",
      description: "Meeceは、あなたのビジョンを最短距離で形にするプロフェッショナル集団です。",
      theme: "dark"
    },
    {
      id: 2,
      label: "Corporate Profile",
      title: "会社概要",
      theme: "light",
      info: [
          { label: "商号", value: "Meece株式会社", sub: "ミースカブシキガイシャ" },
          { label: "代表取締役", value: "溝口 雅登" },
          { label: "設立", value: "2022年 8月 22日" },
          { label: "資本金", value: "1,000,000円" },
          { label: "取引銀行", value: "みずほ銀行", sub: "八重洲口支店" },
          { label: "所在地", value: "〒100-0005\n東京都千代田区丸の内1-8-3\n丸の内トラストタワー本館 20階" },
          { label: "連絡先", value: "Meece 事務局", phone: "03-5288-5125", email: "info@meece.io" },
          { label: "事業内容", value: "AI受託開発 / システムコンサルティング\nDX推進支援 / 多角的事業支援" }
        ]
    },
    {
      id: 3,
      label: "Roots & History",
      title: "現場の熱量を、\nITの歯車に変える。",
      description: "2022年の創業以来、私たちはSES事業を通じて、あらゆる産業の「最前線」に身を置いてきました。机上の空論ではなく、現場の痛みを知るからこそ、真に動くシステムが創れると信じています。",
      theme: "light",
      domains: [
        { char: "M", name: "Manufacturing", desc: "技術継承や生産ラインを効率化。工場の「止まらない物語」をデジタルで支援。" },
        { char: "E", name: "Education", desc: "知識共有を民主化。誰もが最高の教育を享受できる環境をITで構築。" },
        { char: "E", name: "Entertainment", desc: "感動を実装。最新技術で人々の心を動かす、新しい「体験」を創造。" },
        { char: "C", name: "Commerce", desc: "複雑な物流やトレンドを最適化。店舗とユーザーを繋ぐ流通を実装。" },
        { char: "E", name: "Everyday life", desc: "医療・行政・インフラ。日常の当たり前を、より便利で安心なものへ刷新。" }
      ]
    },
    {
      id: 3,
      label: "2024-2025: R&D Silent Evolution",
      title: "知能を研鑽し、\nエンジンを創る。",
      description: "現場の課題解決を続ける一方で、私たちは2024年にAI研究開発部門を設立しました。受託開発の常識を覆すための「独自の開発基盤」を磨き上げてきた期間です。",
      theme: "light",
      rdPillars: [
        { id: "01", title: "AI Architecture", desc: "開発プロセス自体を自動化・高度化する独自のAIアーキテクチャの研究。" },
        { id: "02", title: "Hybrid Workflow", desc: "AIのスピードと人間のプロ品質を融合させる、手戻りゼロのワークフロー構築。" },
        { id: "03", title: "Data Insight", desc: "創業から蓄積した多角的ドメインの知見を学習データ化し、即応能力を獲得。" }
      ]
    },
    {
      id: 4,
      label: "The Pain: Stagnation and Loss",
      title: "開発の停滞がもたらす\n「見えない巨大な損失」",
      description: "素晴らしいアイディアも、形にならなければ存在しないのと同じです。開発の遅延は単なるスケジュールの遅れではなく、競合に先を越される「機会損失」という致命的なダメージを与えています。",
      theme: "light",
      pains: [
        { id: "01", title: "エンジニアの不在", desc: "採用難と離職の連鎖。開発チームが組めず、プロジェクトが着手すらできない絶望的な「待ち時間」。" },
        { id: "02", title: "要件の空転（混迷）", desc: "会議だけが繰り返され、要件が決まらない。1行のコードも書かれないまま、予算と時間が浪費される。" },
        { id: "03", title: "技術的負債の足枷", desc: "古いシステムがブラックボックス化し、保守に追われ、攻めのIT投資が完全に停止。" }
      ]
    },
    {
      id: 5,
      label: "2026 Revolution",
      title: "「アイディアを、即座に実行可能な資産へ。」",
      description: "パートナーの皆様の脳内にある断片的なアイディアを、AI駆動エンジンが24時間以内に「実際に触れて、動かせるプロトタイプ」へと変換します。",
      theme: "light",
      outputs: [
        { id: "01", title: "Live UI/UX", desc: "静止画ではなく、実際に遷移し入力ができる高精細な画面を提供。" },
        { id: "02", title: "Core Logic", desc: "ログインやデータ保存、AI連携など、ビジネスの根幹となるロジックを実装。" },
        { id: "03", title: "Cloud URL", desc: "発行されたURLを叩くだけで、その場で社内共有やデモが可能な環境。" }
      ]
    },
    {
      id: 6,
      label: "Velocity",
      title: "06 Velocity: The Impact of 87.5%",
      description: "パートナーの皆様の脳内にある「価値の本質」を、AI駆動型パイプラインが圧倒的なスピードで具現化します。",
      theme: "light",
      stats: {
        main: "87.5%",
        sub: "工期削減率"
      },
      comparison: [
        { task: "要件定義・設計", traditional: "2週間", meece: "24時間", rate: "90%" },
        { task: "開発・実装", traditional: "5週間", meece: "5日間", rate: "85%" },
        { task: "QA・テスト", traditional: "1週間", meece: "1日間", rate: "87%" }
      ]
    },
    {
      id: 7,
      label: "Outcome",
      title: "Value of \"Moving Assets\"",
      theme: "light",
      impacts: [
        { id: "01", title: "圧倒的な稟議突破力", category: "Approval" },
        { id: "02", title: "PMFの最速検証", category: "Validation" },
        { id: "03", title: "投資リスクの最小化", category: "Risk Hedge" }
      ]
    },
    {
      id: 8,
      label: "Methodology",
      title: "08 Methodology: Hybrid Quality & Flow",
      theme: "light",
      steps: [
        { id: "01", label: "AI Rapid", title: "AI駆動", desc: "指示から数秒でプロトタイプを生成。視覚的な合意を最速で形成し、要件のズレを根絶。" },
        { id: "02", label: "Human Polish", title: "プロの調整", desc: "熟練エンジニアが、アクセシビリティ、セキュリティ、パフォーマンスを精査・最適化。" },
        { id: "03", label: "Production", title: "本番品質", desc: "拡張性の高いモダンな設計で、スモールスタートから大規模展開まで耐えうる基盤を構築。" }
      ]
    },
    {
      id: 9,
      label: "Finance Strategy",
      title: "IT予算を「消費」から「投資」へ。",
      theme: "light"
    },
    {
      id: 10,
      label: "Success Story 01",
      title: "伝統を守るためのデジタル変革",
      description: "創業100年を超える老舗菓子店。熟練の勘をAIが継承し、管理コストの大幅削減に成功。",
      theme: "light",
      caseStats: [
        { label: "事務管理工数", before: "月間 160h", after: "月間 32h", impact: "80%削減" },
        { label: "在庫廃棄ロス", before: "年間 12%", after: "年間 4%", impact: "最適化" },
        { label: "システム構築", before: "数ヶ月", after: "10日間", impact: "爆速" }
      ]
    },
    {
      id: 11,
      label: "Our Mindset",
      title: "「当事者」以上の当事者意識を。",
      description: "私たちは、依頼されたものを作るだけの集団ではありません。あなたの事業の成功を、誰よりも強く、深く、自らのこととして考え抜きます。迷いや葛藤も含めて共有し、共に正解を創り上げる。それがMeeceのスタイルです。",
      theme: "light"
    },
    {
      id: 12,
      label: "Future Vision",
      title: "2026年、Meece独自の「物語」が動き出す。",
      description: "AI開発ラボで培った「爆速実装技術」と「多角的ドメインの知見」。これらを結集させ、私たちは特定の業界課題を根本から解決する独自のAIプロダクトを解禁します。他者の夢を叶えてきた知能は、次に自らの手で世界を塗り替えます。",
      theme: "light",
      steps: [
        { id: "Step 01", label: "Product Launch", desc: "AI開発ラボの基盤をSaaS化。誰もが直感的に「動く資産」を手に入れられるプラットフォームを提供。" },
        { id: "Step 02", label: "Vertical AI", desc: "製造・医療・教育。現場に特化した「垂直統合型AI」を展開し、業界の標準OSを塗り替える。" },
        { id: "Step 03", label: "Global Expansion", desc: "言語と文化の壁をAIで突破。日本発の知能を、世界中の「止まっている現場」へ届ける。" }
      ]
    },
    {
      id: 13,
      label: "Next Action",
      title: "次のページを、一緒に。",
      description: "Meeceは、あなたの事業という壮大な物語を完成させるための「最後の一片（ラスト・ピース）」です。まずは、現在の課題や理想の姿を私たちに聞かせてください。共に新たな歴史を刻みましょう。",
      theme: "light"
    },
    {
      id: 14,
      label: "EPILOGUE",
      title: "AIのその先へ。未知なる新技術の開拓。",
      description: "私たちの旅はAIで終わりません。まだ見ぬ技術の地平を目指して。",
      theme: "dark"
    }
  ];

  // --- 状態管理 ---
  const [currentSlide, setCurrentSlide] = useState(1);
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(0);
  const totalSlides = 15;
  const slideDuration = 5000; // 5秒
  const slideRef = useRef<HTMLDivElement>(null);

  // GSAPアニメーションの設定
  useEffect(() => {
    if (slideRef.current) {
      gsap.fromTo(slideRef.current, 
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
      );
    }
  }, [currentSlide]);

  // --- ページナビゲーション関数 ---
  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === totalSlides ? 1 : prev + 1));
    setProgress(0);
  }, [totalSlides]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === 1 ? totalSlides : prev - 1));
    setProgress(0);
  }, [totalSlides]);

  // --- オートプレイタイマー設定 ---
  useEffect(() => {
    let interval: any;
    if (isPlaying) {
      interval = setInterval(() => {
        setProgress((prev) => prev + (100 / (slideDuration / 100)));
      }, 100);
    }
    return () => clearInterval(interval);
  }, [isPlaying, slideDuration]);

  // 進捗が100%に達したらスライドを切り替える
  useEffect(() => {
    if (progress >= 100) {
      nextSlide();
    }
  }, [progress, nextSlide]);

  // --- キーボード操作 ---
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ') {
        nextSlide();
        setIsPlaying(false);
      } else if (e.key === 'ArrowLeft') {
        prevSlide();
        setIsPlaying(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide]);

  return (
    <div className="fixed inset-0 bg-slate-950 overflow-hidden font-sans select-none">
      <Navbar />

      {/* モバイル閲覧制限：md未満（768px未満）で表示 */}
      <div className="md:hidden fixed inset-0 z-100 bg-white flex flex-col items-center justify-center px-8 text-center h-dvh overflow-hidden touch-none">
        <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center mb-6 border border-slate-100">
          <ShieldAlert className="text-meece-pink" size={32} />
        </div>
        <h2 className="text-slate-900 text-xl font-black tracking-tighter mb-4">
          NOT AVAILABLE ON MOBILE
        </h2>
        <p className="text-slate-500 text-sm leading-relaxed font-bold mb-10">
          こちらのプレゼンテーションルームは、<br />
          最適な体験を提供するためPCサイズでの閲覧に<br />
          限定させていただいております。<br />
          PCから再度アクセスをお願いいたします。
        </p>
        
        <a 
          href="/"
          className="flex items-center gap-2 px-8 py-4 bg-[#0D1B3E] text-white rounded-full text-sm font-black tracking-widest uppercase shadow-lg active:scale-95 transition-all"
        >
          BACK TO TOP <ChevronRight size={16} />
        </a>

        <div className="mt-12 py-2 px-4 border border-slate-100 rounded-lg">
          <span className="text-[10px] text-slate-400 font-black tracking-[0.2em] uppercase">
            Meece Experience Protocol
          </span>
        </div>
      </div>

      {/* 背景レイヤー：共通の星空とメッシュグラデーション */}
      <div className="absolute inset-0 z-0 bg-stars opacity-30 pointer-events-none" />
      <div className="absolute inset-0 z-0 bg-mesh-gradient opacity-20 pointer-events-none" />

      {/* メインプレゼンテーションエリア */}
      <main className="hidden md:flex relative z-10 w-full h-full flex-col items-center justify-center pt-20 pb-10 px-4 md:px-12 overflow-y-auto">
        
        {/* コンテナ：PCはA4横、モバイルは画面を縦に有効活用 */}
        <div 
          className="relative w-full max-w-297 md:aspect-297/210 bg-white rounded-2xl overflow-hidden shadow-meece-modal flex flex-col shrink-0"
          style={{ 
            maxHeight: window.innerWidth < 768 ? 'calc(100vh - 140px)' : 'calc(100vh - 160px)',
            minHeight: window.innerWidth < 768 ? 'calc(100vh - 140px)' : 'auto',
            margin: 'auto'
          }}
        >
          {/* プログレスバー */}
          <div className="absolute top-0 left-0 w-full h-1.5 bg-slate-100 z-30">
            <motion.div 
              className="h-full bg-meece-blue origin-left"
              style={{ width: `${progress}%` }}
            />
          </div>

          {/* スライドコンテンツ表示エリア */}
          <div className="grow relative bg-slate-900 overflow-hidden min-h-100 md:min-h-0">
            <AnimatePresence mode="wait">
              {currentSlide === 1 && (
                <PresentationSlide01 slideRef={slideRef} data={slides[0]} />
              )}

              {/* スライド02: Corporate Profile */}
              {currentSlide === 2 && (
                <PresentationSlide02_2 data={slides[1]} />
              )}

              {/* スライド03: Roots & History */}
              {currentSlide === 3 && (
                <PresentationSlide02 data={slides[2]} />
              )}

              {/* スライド04: R&D Silent Evolution */}
              {currentSlide === 4 && (
                <PresentationSlide03 data={slides[3]} />
              )}

              {/* スライド05: The Pain */}
              {currentSlide === 5 && (
                <PresentationSlide04 data={slides[4]} />
              )}

              {/* スライド06: Revolution */}
              {currentSlide === 6 && (
                <PresentationSlide05 data={slides[5]} />
              )}

              {/* スライド07: Velocity (Comparison Chart) */}
              {currentSlide === 7 && (
                <PresentationSlide06 data={slides[6]} />
              )}

              {/* スライド08: Outcome (Moving Assets) */}
              {currentSlide === 8 && (
                <PresentationSlide07 data={slides[7]} />
              )}

              {/* スライド09: Methodology (Hybrid Flow) */}
              {currentSlide === 9 && (
                <PresentationSlide08 data={slides[8]} />
              )}

              {/* スライド10: Finance Strategy */}
              {currentSlide === 10 && (
                <PresentationSlide09 />
              )}

              {/* スライド11: Success Story 01 */}
              {currentSlide === 11 && (
                <PresentationSlide10 />
              )}

              {currentSlide === 12 && (
                <PresentationSlide11 data={slides[11]} />
              )}

              {currentSlide === 13 && (
                <PresentationSlide12 data={slides[12]} />
              )}

              {currentSlide === 14 && (
                <PresentationSlide13 data={slides[13]} />
              )}

              {currentSlide === 15 && (
                <PresentationSlide14 data={slides[14]} />
              )}
            </AnimatePresence>

            {/* スライド番号 */}
            <div className="absolute top-10 right-16 z-20">
              <span className="text-sm font-black tracking-[0.2em] text-slate-300">
                {String(currentSlide).padStart(2, '0')} / {String(totalSlides).padStart(2, '0')}
              </span>
            </div>
          </div>

          {/* ナレーション & コントロールバー */}
          <div className="relative bg-slate-50 border-t border-slate-100 px-4 md:px-16 flex flex-col md:flex-row items-center justify-between gap-2 md:gap-8 min-h-24 md:h-45 py-2 md:py-0">
            <div className="flex items-center gap-4 md:gap-6 grow overflow-hidden md:pr-48 h-full">
              <div className="shrink-0">
                <MessageSquare className="text-meece-blue" size={24} />
              </div>
              <div className="max-w-3xl overflow-hidden max-h-24 md:max-h-35 py-2 md:py-4 px-2">
                <p className="text-slate-600 text-[11px] md:text-[15px] leading-tight md:leading-[1.8] font-medium italic line-clamp-2 md:line-clamp-none">
                  {currentSlide === 1 && "Meece株式会社へようこそ。私たちは、あなたの事業という物語を完成させるための最後の一片（ラスト・ピース）です。"}
                  {currentSlide === 2 && "まずはじめに、私たちの会社概要についてご紹介いたします。Meeceは2022年に設立された、ITとAIの力を信じるプロフェッショナル集団です。"}
                  {currentSlide === 3 && "Meeceの歴史は現場から。製造、教育、娯楽、商業、生活。5つの巨大なドメインでの経験こそが、私たちの知能の礎です。"}
                  {currentSlide === 4 && "2024年、私たちはAI研究開発部門を立ち上げました。一見静かなこの2年間、私たちは来るべきAI時代の基盤を構築していました。SESや受託で得た現場の知見を、どうすればAIでさらに加速できるのか。その答えが、独自のAI駆動開発エンジンです。2026年に解禁される『AI開発ラボ』の驚異的なスピードは、この沈黙の期間の研鑽から生まれています。"}
                  {currentSlide === 5 && "どんなに優れたビジョンも、開発が停滞してしまえば、それは現実にはなりません。人材の不足、要件の迷走、そこで過去の負債。これらによって引き起こされる『停滞』は、あなたの事業という物語を止めてしまう、目に見えない巨大な経営損失です。私たちは多くの現場でこの絶望を見てきました。だからこそ、Meeceはこの物語を動かす『歯車』を、圧倒的な速度で提供することを決めたのです。"}
                  {currentSlide === 6 && "『具体的に何をしてくれるのか？』その答えは単純です。皆様が書いた1枚のメモ、あるいは1分の音声指示。それを私たちは最短24時間で、URLを叩けば誰でも触れる『動くプロトタイプ』へと変えます。従来のような分厚い仕様書は不要です。まずは実際に動くものを触り、そこからブラッシュアップしていく。この『実行スピード』こそが、Meeceが提供する新しい開発のスタンダードです。"}
                  {currentSlide === 7 && "なぜMeeceはこれほどまでに速いのか。その答えは、87.5%という数字に集約されています。従来の開発では、数週間かけていた要件定義や基礎実装を、私たちはAI駆動エンジンによって数日に短縮しました。8週間かかっていたプロジェクトを、わずか1週間で動く形にする。この圧倒的な時間短縮は、あなたのビジネスにおける『試行回数』を8倍に増やし、成功の確率を劇的に引き上げることを意味しています。"}
                  {currentSlide === 8 && "『24時間で何が変わるのか？』。その答えは、意思決定の劇的な変化です。従来の開発では、数ヶ月かけて作った仕様書を読み込み、会議を重ね、ようやく投資判断を下していました。しかしMeeceなら、明日には動くものを触りながら議論できます。言葉を尽くして説得する時間はもう不要です。目の前の『動く資産』がすべてを証明します。この圧倒的なスピード感こそが、不確実な時代における最大の経営戦略となるのです。"}
                  {currentSlide === 9 && "Meeceの速さは、単なるスピード違反ではありません。それは、徹底的に洗練された『型』から生まれる正確さの裏返しです。AIが瞬時に形を作り、プロのエンジニアがその品質を研ぎ澄ます。このハイブリッド・フローにより、従来の開発で最もコストとなっていた『手戻り』を最小限に抑えます。速いだけではない、数年先まで使い続けられる堅牢な品質。それがMeeceの約束するスタンダードです。"}
                  {currentSlide === 10 && "『ITにはお金がかかる』。それは半分正解で、半分は間違いです。私たちがまず行うのは、あなたの会社のIT予算の『整理』です。古いシステムの維持に消えている無駄なコストを特定し、それを『AI開発ラボ』での爆速検証に充てる。つまり、追加予算なしで新しい挑戦を始める仕組みを創ります。ITを単なる消費に終わらせない。財務的な視点からあなたの事業を強くする。それがMeeceの経営パートナーとしての在り方です。"}
                  {currentSlide === 11 && "実績の第一例は、ある老舗菓子店様の事例です。守るべき伝統があるからこそ、変えられない非効率に苦しんでおられました。私たちは彼らの『熟練の勘』をAIに学習させ、手書き伝票を全廃する独自の管理システムをわずか10日間で構築しました。結果として、事務工数は80%削減。浮いた時間は、新しい商品開発や接客という『人間が本来やるべき創造的な仕事』に充てられています。デジタルは、伝統を守るための最強の盾になるのです。"}
                  {currentSlide === 12 && "最後に、私たちの『想い』についてお話しさせてください。Meeceが大切にしているのは、技術力やスピード以上に、『当事者以上の当事者意識』です。私たちは、外部の業者としてではなく、あなたのチームの一員としてプロジェクトに参画します。良いことも、悪いことも、すべてをさらけ出して共に悩み、共に喜ぶ。あなたの物語の最後の一片（ラスト・ピース）として、私たちは誰よりも熱く、誠実に、事業の成功を追い求めます。"}
                  {currentSlide === 13 && "最後に、Meeceの未来についてお話しします。私たちは、単なる開発会社で終わるつもりはありません。AI開発ラボで研鑽してきた圧倒的な技術力、電力、とそして皆様と共に流してきた現場の汗。そのすべてを糧に、2026年、私たちは自社オリジナルのAIプロダクトを解禁します。他者の物語を完成させてきた私たちが、今度は自らの物語で世界を動かす。Meeceの真の革命は、ここから始まります。どうぞ、これからの私たちに、大いにご期待ください。"}
                  {currentSlide === 14 && "Meeceがお届けする物語は、ここで一度幕を閉じます。しかし、あなたの事業の物語は、ここからが本番です。私たちが提供するのは、単なるシステムではありません。あなたの想いを、誰よりも早く、誰よりも熱く形にする『実行力』です。次のページに何を書くか。その一歩を、私たちと共に踏み出しませんか？まずは診断、あるいはお問い合わせから。あなたからのコンタクトを、心よりお待ちしております。"}
                  {currentSlide === 15 && "最後までご清聴いただき、誠にありがとうございました。私たちの挑戦は、AIという通過点に留まりません。Meeceが見据えているのは、その先にある、まだ名前も付いていないような新技術の開拓です。人間の創造性を極限まで高めるための、真のイノベーション。その歴史の続きを、いつかあなたと共に語れる日を楽しみにしています。すべてのビジネスに、輝く物語の続きを。Meece株式会社でした。"}
                </p>
              </div>
            </div>

            {/* コントロール：モバイルでは中央、PCでは右端 */}
            <div className="flex items-center gap-3 md:gap-4 md:absolute md:right-12 md:top-1/2 md:-translate-y-1/2">
              <button 
                onClick={() => { prevSlide(); setIsPlaying(false); }}
                className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white shadow-md flex items-center justify-center text-slate-600 hover:text-slate-900 transition-all duration-200 border border-slate-100"
              >
                <ChevronLeft size={20} />
              </button>
              <button 
                onClick={() => setIsPlaying(!isPlaying)}
                className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-slate-900 shadow-xl flex items-center justify-center text-white hover:scale-110 active:scale-95 transition-all duration-200"
              >
                {isPlaying ? <Pause size={24} fill="currentColor" /> : <Play size={24} fill="currentColor" className="ml-1" />}
              </button>
              <button 
                onClick={() => { nextSlide(); setIsPlaying(false); }}
                className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white shadow-md flex items-center justify-center text-slate-600 hover:text-slate-900 transition-all duration-200 border border-slate-100"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* フッター情報 */}
      <footer className="fixed bottom-0 w-full py-6 px-12 flex justify-between items-center z-50 pointer-events-none">
        <div className="text-[10px] tracking-widest font-black text-slate-500 uppercase">
          © 2026 MEECE INC. ALL STORIES RESERVED.
        </div>
        <div className="flex items-center gap-2 text-[10px] font-black text-meece-pink uppercase">
          <ShieldAlert size={14} /> CONFIDENTIAL
        </div>
      </footer>
    </div>
  );
};

export default PresentationRoom;