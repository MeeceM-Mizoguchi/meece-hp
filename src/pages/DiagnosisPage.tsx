import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Navbar } from '../components/organisms/Navbar';
import { Footer } from '../components/organisms/Footer';
import { PageHero } from '../components/molecules/PageHero';
import { ChevronRight, RotateCcw, BrainCircuit, Rocket, ShieldCheck, Handshake, Calendar } from 'lucide-react';

const DiagnosisPage: React.FC = () => {
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);
  const [currentStep, setCurrentStep] = useState(0);
  const [diagnosisRoute, setDiagnosisRoute] = useState<null | 'poc' | 'system' | 'demo'>(null);
  const [answers, setAnswers] = useState<string[]>([]);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [result, setResult] = useState<null | 'enterprise' | 'startup' | 'sales'>(null);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // 設問定義ロジック
  const getQuestions = () => {
    if (!diagnosisRoute) {
      return [
        {
          id: 1,
          q: "まず、今回のプロジェクトで「実現したいこと」に最も近いものはどれですか？",
          options: [
            { label: "POC・プロトタイプ開発（技術検証や社内説明を最優先したい）", value: "poc" },
            { label: "本格的なシステム開発（実務で利用する盤石な基盤を構築したい）", value: "system" },
            { label: "次回の商談向けデモ実装（成約のための具体的な武器が欲しい）", value: "demo" }
          ]
        }
      ];
    }

    const routes = {
      poc: [
        { id: 2, q: "検証において最も重視するポイントは何ですか？", options: [{label: "既存システムとの連携可否", value: "A"}, {label: "ユーザーの反応や操作感", value: "B"}, {label: "最新AI技術の実現可能性", value: "C"}] },
        { id: 3, q: "プロトタイプの公開範囲はどこまでを想定していますか？", options: [{label: "社内・特定の関係者のみ", value: "A"}, {label: "限定的な外部ユーザー", value: "B"}, {label: "広く一般公開して検証したい", value: "B"}] }
      ],
      system: [
        { id: 2, q: "システムの運用・保守体制についてどうお考えですか？", options: [{label: "将来的に内製化したい", value: "B"}, {label: "長期的にアウトソースして安定稼働させたい", value: "A"}, {label: "まだ決まっていない", value: "A"}] },
        { id: 3, q: "セキュリティや品質に関する社内基準はありますか？", options: [{label: "非常に厳格な基準がある", value: "A"}, {label: "一般的な基準を満たしていれば良い", value: "B"}, {label: "スピードを優先し、後から固めたい", value: "B"}] }
      ],
      demo: [
        { 
          id: 2, 
          q: "次回の重要な商談（デモを披露したい日）はいつ頃ですか？", 
          options: [
            { label: "3日以内（超特急対応が必要）", value: "fast" }, 
            { label: "1週間以内", value: "normal" }, 
            { label: "2週間以上先", value: "slow" }
          ] 
        }
      ]
    };
    return routes[diagnosisRoute];
  };

  const questions = getQuestions();

  const handleAnswer = (value: string) => {
    if (!diagnosisRoute) {
      setDiagnosisRoute(value as any);
      setCurrentStep(0);
      return;
    }

    const newAnswers = [...answers, value];
    setAnswers(newAnswers);

    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      processResult(newAnswers);
    }
  };

  const processResult = (finalAnswers: string[]) => {
    setIsAnalyzing(true);
    setTimeout(() => {
      if (diagnosisRoute === 'demo') {
        setResult('sales');
      } else if (diagnosisRoute === 'system') {
        setResult('enterprise');
      } else if (diagnosisRoute === 'poc') {
        if (finalAnswers.includes('A')) {
          setResult('enterprise');
        } else {
          setResult('startup');
        }
      }
      setIsAnalyzing(false);
    }, 1500);
  };

  const resetDiagnosis = () => {
    setDiagnosisRoute(null);
    setCurrentStep(0);
    setAnswers([]);
    setResult(null);
    setIsAnalyzing(false);
  };

  // スケジュール表示用コンポーネント（回答に応じて動的に変化）
  const ScheduleTimeline = ({ type, answers, route }: { type: string, answers: string[], route: string | null }) => {
    // タイムラインの1行分を作成する共通部品
    const TimelineItem = (day: string, task: string) => (
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
        <div style={{ fontSize: '11px', fontWeight: 900, color: '#FFFFFF', backgroundColor: '#3182CE', padding: '4px 10px', borderRadius: '8px', minWidth: '70px', textAlign: 'center' }}>
          {day}
        </div>
        <div style={{ fontSize: '13px', fontWeight: 700, color: '#0D1B3E' }}>{task}</div>
      </div>
    );

    // デモ実装ルートかつ営業向け結果の場合の特急スケジュール判定
    if (type === 'sales' && route === 'demo') {
      // demoルートの回答（answersの最初の要素）を取得
      const demoChoice = answers[0];
      
      // 新しく定義したvalue("fast", "normal", "slow")で判定します
      const isUltraFast = demoChoice === "fast";
      const isStandard = demoChoice === "normal";
      
      if (isUltraFast) {
        return (
          <div style={{ marginTop: '16px', padding: '16px', backgroundColor: '#FFF5F5', borderRadius: '20px', textAlign: 'left', border: '1px solid #FEB2B2' }}>
            <h4 style={{ fontSize: '13px', fontWeight: 900, color: '#E53E3E', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Calendar size={16} /> 【最短24h〜】3日間特急スケジュール
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {TimelineItem('Day 1', '即日ヒアリング・素材受領・環境構築')}
              {TimelineItem('Day 2', 'AI実装・デモサイト完成・URL送付')}
              {TimelineItem('Day 3', '最終確認・商談当日でのデモ披露')}
            </div>
          </div>
        );
      } else if (isStandard) {
        return (
          <div style={{ marginTop: '16px', padding: '16px', backgroundColor: '#F0F7FF', borderRadius: '20px', textAlign: 'left' }}>
            <h4 style={{ fontSize: '13px', fontWeight: 900, color: '#3182CE', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Calendar size={16} /> 【1週間】着実実装スケジュール
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {TimelineItem('Day 1-2', '要件定義・データ受領・プロトタイプ作成')}
              {TimelineItem('Day 3-5', 'フィードバック反映・デモ精度向上')}
              {TimelineItem('Day 6~', '商談向け最終リハーサル・納品')}
            </div>
          </div>
        );
      } else {
        return (
          <div style={{ marginTop: '16px', padding: '16px', backgroundColor: '#F0F7FF', borderRadius: '20px', textAlign: 'left' }}>
            <h4 style={{ fontSize: '13px', fontWeight: 900, color: '#3182CE', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Calendar size={16} /> 戦略的デモ構築スケジュール案
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {TimelineItem('Week 1', '競合調査・訴求に合わせたAI設計・構築')}
              {TimelineItem('Week 2', '高精度デモ構築・複数パターンの作成')}
              {TimelineItem('Goal', '必勝体制での商談実施')}
            </div>
          </div>
        );
      }
    }

    // スタートアップ・大企業向けの標準スケジュール
    const schedules = {
      startup: [
        { day: 'Week 1', task: '要件定義・画面設計' },
        { day: 'Week 2', task: 'AI駆動開発・実装' },
        { day: 'Week 3', task: 'テスト・市場公開' }
      ],
      enterprise: [
        { day: 'Month 1', task: '現状調査・ROI算出' },
        { day: 'Month 2', task: '基盤構築・AI連携' },
        { day: 'Month 3', task: '現場検証・最終調整' }
      ]
    };

    const currentSchedule = (schedules as any)[type] || [];

    return (
      <div style={{ marginTop: '32px', padding: '24px', backgroundColor: '#F0F7FF', borderRadius: '24px', textAlign: 'left' }}>
        <h4 style={{ fontSize: '14px', fontWeight: 900, color: '#3182CE', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Calendar size={18} /> 想定スケジュール案
        </h4>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {currentSchedule.map((s: any, i: number) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <div style={{ fontSize: '11px', fontWeight: 900, color: '#FFFFFF', backgroundColor: '#3182CE', padding: '4px 10px', borderRadius: '8px', minWidth: '70px', textAlign: 'center' }}>
                {s.day}
              </div>
              <div style={{ fontSize: '13px', fontWeight: 700, color: '#0D1B3E' }}>{s.task}</div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div style={{ backgroundColor: '#F8FAFC', minHeight: '100vh' }}>
      <Navbar />
      <PageHero 
        label="POC DIAGNOSIS"
        titleTop="あなたに最適な"
        titleGradient="伴走プランを診断。"
        description="目的から逆算して、今の状況に最も効果的なアプローチとスケジュールをご提案します。"
        windowWidth={windowWidth}
      />

      {/* 診断開始ボタン：クリックでカード中央へスクロール */}
      <div style={{ textAlign: 'center', marginTop: '-40px', position: 'relative', zIndex: 10, marginBottom: '40px' }}>
<button 
          onClick={() => {
            const element = document.getElementById('diagnosis-card');
            if (element) {
              // ページの最上部からカードの上端までの絶対距離を取得
              const elementTop = element.getBoundingClientRect().top + window.pageYOffset;
              // カード自体の高さ
              const elementHeight = element.offsetHeight;
              // 画面の高さ
              const windowHeight = window.innerHeight;
              
              // 【重要】Navbar（ヘッダー）の高さを約80pxとして、その分を余白から差し引くことで
              // ヘッダーに被らず、かつ見た目の「中央」に来るように調整します。
              const navbarHeight = 80;
              
              // 画面中央位置の計算（絶対位置方式）
              const scrollToPosition = elementTop - ((windowHeight - navbarHeight) - elementHeight) / 2 - navbarHeight;

              window.scrollTo({
                top: scrollToPosition,
                behavior: 'smooth'
              });
            }
          }}  
          style={{ 
            padding: '16px 40px', 
            borderRadius: '100px', 
            background: 'linear-gradient(to right, #00FBFF, #9D72FF)', 
            color: '#FFFFFF', 
            fontWeight: 900, 
            border: 'none', 
            cursor: 'pointer',
            boxShadow: '0 10px 30px rgba(157, 114, 255, 0.4)',
            fontSize: '16px'
          }}
        >
          ヒアリングを開始する
        </button>
      </div>

      <section id="diagnosis-card" style={{ padding: windowWidth < 768 ? '40px 20px' : '60px 0', maxWidth: '800px', margin: '0 auto' }}>
        <div style={{ 
          backgroundColor: '#FFFFFF', 
          borderRadius: '40px', 
          padding: windowWidth < 768 ? '40px 24px' : '60px',
          boxShadow: '0 20px 60px rgba(0,0,0,0.05)',
          position: 'relative',
          overflow: 'hidden',
          // 結果表示の高さに合わせ、枠が縮まないように最小高さを固定
          minHeight: windowWidth < 768 ? '650px' : '750px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center' // 内容が少ない時（質問時）も中央に配置
        }}>
          <AnimatePresence mode="wait">
            {!result && !isAnalyzing && (
              <motion.div key="question" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                <div style={{ marginBottom: '32px' }}>
                  <span style={{ color: '#3182CE', fontSize: '14px', fontWeight: 900, letterSpacing: '0.2em' }}>
                    {diagnosisRoute ? `STEP 02: 深掘りヒアリング` : `STEP 01: 目的の選択`}
                  </span>
                  <h2 style={{ fontSize: windowWidth < 768 ? '20px' : '26px', fontWeight: 900, color: '#0D1B3E', marginTop: '12px', lineHeight: 1.4 }}>
                    {questions[currentStep].q}
                  </h2>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  {questions[currentStep].options.map((opt, i) => (
                    <button key={i} onClick={() => handleAnswer(opt.value)} style={{ padding: '24px', borderRadius: '20px', border: '2px solid #F1F5F9', backgroundColor: '#FFF', textAlign: 'left', fontSize: '15px', fontWeight: 700, color: '#4B5563', cursor: 'pointer', transition: 'all 0.3s ease', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                      {opt.label}
                      <ChevronRight size={18} color="#3182CE" />
                    </button>
                  ))}
                </div>
                {diagnosisRoute && (
                  <div style={{ marginTop: '40px', height: '6px', backgroundColor: '#F1F5F9', borderRadius: '10px', overflow: 'hidden' }}>
                    <motion.div initial={{ width: 0 }} animate={{ width: `${((currentStep + 1) / questions.length) * 100}%` }} style={{ height: '100%', background: 'linear-gradient(to right, #00FBFF, #9D72FF)' }} />
                  </div>
                )}
              </motion.div>
            )}

            {isAnalyzing && (
              <motion.div key="analyzing" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} style={{ textAlign: 'center', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <div style={{ position: 'relative', width: '80px', height: '80px', margin: '0 auto 32px' }}>
                  <motion.div animate={{ rotate: 360 }} transition={{ duration: 2, repeat: Infinity, ease: "linear" }} style={{ width: '100%', height: '100%', borderRadius: '50%', border: '4px solid #F1F5F9', borderTopColor: '#9D72FF' }} />
                  <BrainCircuit size={40} color="#9D72FF" style={{ position: 'absolute', top: '20px', left: '20px' }} />
                </div>
                <h3 style={{ fontSize: '20px', fontWeight: 900, color: '#0D1B3E' }}>スケジュールを算出中...</h3>
              </motion.div>
            )}

            {result && !isAnalyzing && (
              <motion.div key="result" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} style={{ textAlign: 'center' }}>
                <div style={{ display: 'inline-flex', padding: '16px', borderRadius: '24px', backgroundColor: '#F0F7FF', marginBottom: '24px' }}>
                  {result === 'enterprise' && <ShieldCheck size={48} color="#3182CE" />}
                  {result === 'startup' && <Rocket size={48} color="#9D72FF" />}
                  {result === 'sales' && <Handshake size={48} color="#FF5BAE" />}
                </div>
                <h3 style={{ fontSize: '14px', fontWeight: 900, color: '#3182CE', letterSpacing: '0.1em' }}>診断結果</h3>
                <h2 style={{ fontSize: windowWidth < 768 ? '20px' : '28px', fontWeight: 900, color: '#0D1B3E', marginTop: '8px', marginBottom: '16px' }}>
                  {result === 'enterprise' && "実証型・統合開発アプローチ"}
                  {result === 'startup' && "爆速・市場検証アプローチ"}
                  {result === 'sales' && "営業加速・即日実装アプローチ"}
                </h2>

                <div style={{ textAlign: 'left', backgroundColor: '#F8FAFC', padding: '16px 20px', borderRadius: '20px', color: '#4B5563', lineHeight: 1.6, fontSize: '14px' }}>
                  {result === 'enterprise' && "社内の合意形成と、将来の本番運用を見据えた確かな基盤作りを優先すべき状況です。既存資産を活かしたリスクのない導入プランが最適です。"}
                  {result === 'startup' && "今は無駄を削ぎ落とし、最小単位で市場の声を拾うことで、リスクを抑えた成長が可能な段階です。スピードを最大の武器にしましょう。"}
                  {result === 'sales' && "商談を成約に導く『体験型の提案』が、今最も事業成長を加速させる鍵となります。翌日には動くデモを手に入れ、成約率を最大化しましょう。"}
                </div>

                {/* スケジュール表示の追加（回答データとルートを渡す） */}
                <ScheduleTimeline type={result} answers={answers} route={diagnosisRoute} />

                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginTop: '24px' }}>
                  <a href={result === 'enterprise' ? "/services/rapid-poc/enterprise-approach" : result === 'startup' ? "/services/rapid-poc/startup-approach" : "/services/rapid-poc/sales-approach"} style={{ padding: '20px', borderRadius: '16px', backgroundColor: '#0D1B3E', color: '#FFF', fontSize: '16px', fontWeight: 900, textDecoration: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', boxShadow: '0 10px 20px rgba(13, 27, 62, 0.2)' }}>
                    詳細プランを見る <ChevronRight size={20} />
                  </a>
                  <button onClick={resetDiagnosis} style={{ background: 'none', border: 'none', color: '#9CA3AF', fontSize: '14px', fontWeight: 700, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
                    <RotateCcw size={16} /> もう一度診断する
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default DiagnosisPage;