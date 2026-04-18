import React, { useState, useEffect } from 'react';
import { Navbar } from '../components/organisms/Navbar';
import { Footer } from '../components/organisms/Footer';
import { PageHero } from '../components/molecules/PageHero';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  MessageSquare, 
  Binary, 
  Lightbulb, 
  Video, 
  BarChart3, 
  Mic2, 
  Cpu,
  Search,
  PlusCircle,
  CheckCircle2,
  Zap,
  TrendingUp,
  BarChart,
} from 'lucide-react';

// GSAPのプラグインを登録
gsap.registerPlugin(ScrollTrigger);

export const AI: React.FC = () => {
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);

    

    

    return () => {
      window.removeEventListener('resize', handleResize);
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <div style={{ backgroundColor: '#FFFFFF', minHeight: '100vh', width: '100%', margin: 0, padding: 0, overflowX: 'hidden' }}>
      <Navbar />
      
      <main>
        {/* メインビジュアル (image_1a2e3e.jpg を再現) */}
        <PageHero 
          label="サービス / AI研究開発"
          titleTop="知能を、"
          titleGradient="ビジネスの鼓動に。"
          description="最新のLLM活用から、独自のアルゴリズム構築まで。私たちは技術の表面をなぞるのではなく、ビジネスの本質的な課題を解決する「知能」を実装します。"
          windowWidth={windowWidth}
        />

        {/* 特化領域セクション (image_1a2e21.jpg を再現) */}
        <section style={{ padding: '100px 0', backgroundColor: '#FFFFFF', display: 'flex', justifyContent: 'center' }}>
          <div style={{ maxWidth: '1200px', width: '100%', padding: '0 24px' }}>
            <div style={{ textAlign: 'center', marginBottom: '80px' }}>
              <p style={{ color: '#9D72FF', fontSize: '12px', fontWeight: 900, letterSpacing: '0.2em', marginBottom: '16px' }}>コア・テクノロジー</p>
              <h2 style={{ fontSize: '42px', fontWeight: 900, color: '#0D1B3E', marginBottom: '24px' }}>特化領域</h2>
              <div style={{ width: '60px', height: '4px', background: 'linear-gradient(to right, #00FBFF, #9D72FF)', margin: '0 auto' }}></div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: windowWidth < 1024 ? '1fr' : 'repeat(3, 1fr)', gap: '32px' }}>
              {[
                { 
                  title: '生成AI・LLM実装', 
                  desc: '大規模言語モデルを実務に最適化。RAGによる社内ナレッジ活用や、業務フローの自動化を実現します。', 
                  icon: <MessageSquare size={24} color="#9D72FF" />, 
                  bg: '#F5F3FF' 
                },
                { 
                  title: '独自学習モデル開発', 
                  desc: '画像認識、音声解析など、特定のドメインに特化した機械学習モデルを構築。真の競争優位を創出します。', 
                  icon: <Binary size={24} color="#00FBFF" />, 
                  bg: '#E6FFFA' 
                },
                { 
                  title: 'AI導入・戦略立案', 
                  desc: '費用対効果と倫理面を考慮し、フェーズに合わせた最適なAIロードマップをコンサルティングいたします。', 
                  icon: <Lightbulb size={24} color="#FF5BAE" />, 
                  bg: '#FFF5F7' 
                },
              ].map((domain, i) => (
                <div key={i} style={{ padding: '60px 40px', borderRadius: '40px', border: '1px solid #F3F4F6', backgroundColor: '#FFFFFF', textAlign: windowWidth < 1024 ? 'center' : 'left' }}>
                  <div style={{ width: '56px', height: '56px', borderRadius: '16px', backgroundColor: domain.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '32px', margin: windowWidth < 1024 ? '0 auto 32px' : '0 0 32px' }}>
                    {domain.icon}
                  </div>
                  <h3 style={{ fontSize: '22px', fontWeight: 900, color: '#0D1B3E', marginBottom: '20px' }}>{domain.title}</h3>
                  <p style={{ fontSize: '14px', color: '#6B7280', lineHeight: 1.8 }}>{domain.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* RAG構築のメカニズム (image_1a2b76.jpg を再現) */}
        <section style={{ padding: '140px 0', backgroundColor: '#F8F9FB', display: 'flex', justifyContent: 'center' }}>
          <div style={{ maxWidth: '1100px', width: '100%', padding: '0 24px' }}>
            <div style={{ textAlign: 'center', marginBottom: '100px' }}>
              <p style={{ color: '#9D72FF', fontSize: '10px', fontWeight: 900, letterSpacing: '0.2em', marginBottom: '16px' }}>テクニカル・インサイト</p>
              <h2 style={{ fontSize: '42px', fontWeight: 900, color: '#0D1B3E', marginBottom: '24px' }}>RAG構築のメカニズム</h2>
              <div style={{ width: '60px', height: '4px', background: 'linear-gradient(to right, #00FBFF, #9D72FF)', margin: '0 auto 40px' }}></div>
              <p style={{ color: '#6B7280', fontSize: '16px', lineHeight: 1.8, maxWidth: '700px', margin: '0 auto' }}>
                ハルシネーション（嘘の回答）を防ぎ、社内の固有情報を正確に反映させる「検索拡張生成（RAG）」の仕組みです。
              </p>
            </div>

            <div style={{ 
              backgroundColor: '#FFFFFF', 
              borderRadius: '60px', 
              padding: windowWidth < 768 ? '60px 20px' : '80px 40px',
              boxShadow: '0 40px 100px rgba(0,0,0,0.03)',
              display: 'flex',
              flexDirection: windowWidth < 1024 ? 'column' : 'row',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '20px'
            }}>
              {[
                { step: '1. ユーザーの質問', desc: '実務上の具体的な疑問を入力', icon: <MessageSquare size={20} color="#9D72FF" /> },
                { step: '2. 知識ベースから検索', desc: '社内ドキュメントから関連情報を高速抽出', icon: <Search size={20} color="#00FBFF" /> },
                { step: '3. コンテキス結合', desc: '質問と検索結果を一つのプロンプトに統合', icon: <PlusCircle size={20} color="#3182CE" /> },
                { step: '4. 正確な回答生成', desc: '根拠に基づいた信頼性の高い回答を出力', icon: <CheckCircle2 size={20} color="#FFFFFF" />, active: true },
              ].map((item, i) => (
                <React.Fragment key={i}>
                  <div style={{ 
                    flex: 1,
                    backgroundColor: item.active ? 'transparent' : '#F9FAFB',
                    border: item.active ? '1px solid #9D72FF' : 'none',
                    padding: '40px 20px',
                    borderRadius: '32px',
                    textAlign: 'center',
                    minWidth: '200px'
                  }}>
                    <div style={{ 
                      width: '48px', height: '48px', borderRadius: '14px', 
                      backgroundColor: item.active ? '#9D72FF' : '#FFFFFF',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      margin: '0 auto 24px',
                      boxShadow: '0 10px 20px rgba(0,0,0,0.05)'
                    }}>
                      {item.icon}
                    </div>
                    <h4 style={{ fontSize: '15px', fontWeight: 900, color: '#0D1B3E', marginBottom: '12px' }}>{item.step}</h4>
                    <p style={{ fontSize: '11px', color: item.active ? '#9D72FF' : '#9CA3AF', fontWeight: 700, lineHeight: 1.6 }}>{item.desc}</p>
                  </div>
                  {i < 3 && windowWidth >= 1024 && (
                    <div style={{ width: '30px', height: '1px', backgroundColor: '#E5E7EB' }}></div>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </section>

        {/* 多角的なモデル構築力 (image_1a2b59.jpg を再現) */}
        <section style={{ padding: '140px 0', backgroundColor: '#FFFFFF', display: 'flex', justifyContent: 'center' }}>
          <div style={{ maxWidth: '1200px', width: '100%', padding: '0 24px' }}>
            <div style={{ textAlign: 'center', marginBottom: '80px' }}>
              <p style={{ color: '#00FBFF', fontSize: '10px', fontWeight: 900, letterSpacing: '0.2em', marginBottom: '16px' }}>多様なAI構築能力</p>
              <h2 style={{ fontSize: 'clamp(32px, 5vw, 48px)', fontWeight: 900, color: '#0D1B3E', marginBottom: '24px' }}>
                物語を広げる、多角的なモデル構築力。
              </h2>
              <div style={{ width: '60px', height: '4px', background: 'linear-gradient(to right, #00FBFF, #9D72FF)', margin: '0 auto 40px' }}></div>
              <p style={{ color: '#6B7280', fontSize: '14px', lineHeight: 1.8 }}>
                RAG以外にも、Meeceはあらゆるビジネスドメインに対応する高度なAIモデルをフルスクラッチで構築します。
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: windowWidth < 768 ? '1fr' : '1fr 1fr', gap: '32px' }}>
              {[
                { 
                  title: '画像・動画解析', 
                  desc: '製品の欠陥検知（異常検知）、リアルタイムの物体追跡、顔認証、OCR（文字認識）など、視覚情報をデジタルな知恵へと変換します。', 
                  icon: <Video size={24} color="#00FBFF" />,
                  tags: ['コンピュータービジョン', '異常検知']
                },
                { 
                  title: '数値・成果予測', 
                  desc: '過去のデータから売上、在庫、解約率を予測。勘と経験に頼らないデータドリブンな意思決定の「羅針盤」を構築します。', 
                  icon: <BarChart3 size={24} color="#9D72FF" />,
                  tags: ['予測モデリング', 'レコメンデーション']
                },
                { 
                  title: '音声・音響解析', 
                  desc: 'コールセンターの感情分析、工場の稼働音による故障予兆検知、自動議事録作成など、目に見えない「音」をビジネスの価値に変えます。', 
                  icon: <Mic2 size={24} color="#3182CE" />,
                  tags: ['オーディオ解析', 'STT / TTS']
                },
                { 
                  title: 'マルチモーダルAI', 
                  desc: 'テキスト、画像、音声を組み合わせて理解・生成。動画内容の自動タグ付けや、複雑なドキュメントの高度な理解を実現します。', 
                  icon: <Cpu size={24} color="#FF5BAE" />,
                  tags: ['マルチモーダル', '画像QA']
                },
              ].map((item, i) => (
                <div key={i} style={{ backgroundColor: '#F9FAFB', padding: '60px 40px', borderRadius: '48px', textAlign: 'left' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '32px' }}>
                    <div style={{ color: '#0D1B3E' }}>{item.icon}</div>
                    <h3 style={{ fontSize: '20px', fontWeight: 900, color: '#0D1B3E' }}>{item.title}</h3>
                  </div>
                  <p style={{ fontSize: '14px', color: '#6B7280', lineHeight: 2, marginBottom: '32px' }}>{item.desc}</p>
                  <div style={{ display: 'flex', gap: '12px' }}>
                    {item.tags.map(tag => (
                      <span key={tag} style={{ fontSize: '10px', fontWeight: 800, color: '#9CA3AF', backgroundColor: '#FFFFFF', padding: '6px 16px', borderRadius: '100px', border: '1px solid #E5E7EB' }}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 開発規模別・AIによる圧倒的加速 */}
        <section style={{ padding: '140px 0', backgroundColor: '#F8F9FB', display: 'flex', justifyContent: 'center' }}>
          <div style={{ maxWidth: '1200px', width: '100%', padding: '0 24px' }}>
            <div style={{ textAlign: 'center', marginBottom: '80px' }}>
              <p style={{ color: '#9D72FF', fontSize: '10px', fontWeight: 900, letterSpacing: '0.4em', marginBottom: '16px' }}>DEVELOPMENT IMPACT</p>
              <h2 style={{ fontSize: '42px', fontWeight: 900, color: '#0D1B3E', marginBottom: '24px' }}>開発規模別・AIによる圧倒的加速</h2>
              <div style={{ width: '60px', height: '4px', background: 'linear-gradient(to right, #00FBFF, #9D72FF)', margin: '0 auto 40px' }}></div>
              <p style={{ color: '#6B7280', fontSize: '14px' }}>小・中・大規模、あらゆるフェーズで従来の常識を覆すスピードと精度を実現します。</p>
            </div>

            <div className="chart-container" style={{ 
              backgroundColor: '#FFFFFF', 
              borderRadius: windowWidth < 768 ? '40px' : '60px', 
              padding: windowWidth < 768 ? '40px 24px' : '80px',
              position: 'relative', 
              boxShadow: '0 40px 100px rgba(0,0,0,0.03)', 
              marginBottom: '80px',
              overflow: 'hidden' 
            }}>
              {/* 凡例（モバイル最適化済み） */}
              <div style={{ 
                display: 'flex', 
                gap: windowWidth < 768 ? '16px' : '24px', 
                marginBottom: '40px', 
                fontSize: windowWidth < 768 ? '11px' : '12px', 
                fontWeight: 900, 
                flexDirection: windowWidth < 768 ? 'column' : 'row',
                alignItems: windowWidth < 768 ? 'flex-start' : 'center'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <div style={{ width: '14px', height: '14px', borderRadius: '3px', backgroundColor: '#9D72FF', flexShrink: 0 }}></div>
                  <span style={{ color: '#0D1B3E', lineHeight: 1.2 }}>MEECE AI活用によるコスト</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <div style={{ width: '14px', height: '14px', borderRadius: '3px', backgroundColor: '#E2E8F0', flexShrink: 0 }}></div>
                  <span style={{ color: '#9CA3AF', lineHeight: 1.2 }}>従来の手法（期間/コスト）</span>
                </div>
              </div>

              {/* SVGグラフ（モバイル最適化済み） */}
<div style={{ 
  position: 'relative', 
  height: windowWidth < 768 ? '180px' : '300px', 
  width: '100%', 
  borderBottom: '1px solid #E2E8F0', 
  borderLeft: '1px solid #E2E8F0',
  margin: windowWidth < 768 ? '0 10px' : '0' // モバイル時に左右に少し余白を作る
}}>
  <svg viewBox="0 0 1000 300" preserveAspectRatio="none" style={{ width: '100%', height: '100%', overflow: 'visible' }}>
    {/* 目盛り線（点線） */}
    <line x1="0" y1="75" x2="1000" y2="75" stroke="#F3F4F6" strokeDasharray="4" />
    <line x1="0" y1="150" x2="1000" y2="150" stroke="#F3F4F6" strokeDasharray="4" />
    
    {/* 従来の手法ライン */}
    <path d="M 0 250 L 333 220 L 666 180 L 1000 130" fill="none" stroke="#E2E8F0" strokeWidth="2" />
    {/* MEECE AIライン */}
    <path 
      d="M 0 250 L 333 235 L 666 215 L 1000 190" 
      fill="none" 
      stroke="#9D72FF" 
      strokeWidth="4" 
      strokeLinecap="round"
    />
    
    {/* 終点のドット */}
    <circle cx="1000" cy="130" r="5" fill="#E2E8F0" />
    <circle cx="1000" cy="190" r="7" fill="#9D72FF" />
  </svg>

  {/* 軸ラベル：モバイル時は位置とサイズを微調整 */}
  <div style={{ 
    position: 'absolute', 
    left: windowWidth < 768 ? '-5px' : '-45px', 
    top: '-25px', 
    fontSize: windowWidth < 768 ? '9px' : '12px', 
    fontWeight: 900, 
    color: '#0D1B3E',
    whiteSpace: 'nowrap'
  }}>コスト高</div>

  <div style={{ 
    position: 'absolute', 
    left: '-15px', 
    bottom: '-5px', 
    fontSize: '12px', 
    fontWeight: 900, 
    color: '#0D1B3E' 
  }}>0</div>

  {/* 横軸ラベル：モバイル時に重ならないよう幅を調整 */}
  <div style={{ 
    display: 'flex', 
    justifyContent: 'space-between', 
    width: 'calc(100% + 20px)', // ラベルがはみ出さないよう調整
    marginLeft: '-10px',
    marginTop: '16px', 
    fontSize: windowWidth < 768 ? '9px' : '14px', 
    fontWeight: 900, 
    color: '#0D1B3E' 
  }}>
    <span style={{ width: '25%', textAlign: 'center' }}>START</span>
    <span style={{ width: '25%', textAlign: 'center' }}>小規模</span>
    <span style={{ width: '25%', textAlign: 'center' }}>中規模</span>
    <span style={{ width: '25%', textAlign: 'center' }}>大規模</span>
  </div>
</div>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: windowWidth < 768 ? '1fr' : 'repeat(3, 1fr)', gap: '40px' }}>
              {[
                { title: '小規模：圧倒的な初期速度', desc: 'ホームページ作成や社内ツール開発において、人間が2ヶ月要する作業を、AIの力で1週間以内に完了させます。', icon: <Zap size={20} color="#00FBFF" />, bg: '#E6FFFA' },
                { title: '中規模：複雑性の圧縮', desc: 'ECサイトや在庫管理システムなど、通常半年を要する開発プロジェクトを、AIの並列処理能力で1ヶ月へ短縮します。', icon: <TrendingUp size={20} color="#9D72FF" />, bg: '#F5F3FF' },
                { title: '大規模：知の最適解算出', desc: '大規模事業の膨大なデータを解析し、人智では到達不可能なレベルでビジネスの最適解を即座に算出します。', icon: <BarChart size={20} color="#3182CE" />, bg: '#EBF4FF' },
              ].map((item, i) => (
                <div key={i}>
                  <div style={{ width: '40px', height: '40px', borderRadius: '10px', backgroundColor: item.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>{item.icon}</div>
                  <h4 style={{ fontSize: '16px', fontWeight: 900, color: '#0D1B3E', marginBottom: '12px' }}>{item.title}</h4>
                  <p style={{ fontSize: '13px', color: '#6B7280', lineHeight: 1.6 }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 圧倒的な開発スピードの差 */}
        <section style={{ padding: '140px 0', backgroundColor: '#FFFFFF', display: 'flex', justifyContent: 'center' }}>
          <div style={{ maxWidth: '1000px', width: '100%', padding: '0 24px' }}>
            <div style={{ textAlign: 'center', marginBottom: '80px' }}>
              <p style={{ color: '#9D72FF', fontSize: '10px', fontWeight: 900, letterSpacing: '0.4em', marginBottom: '16px' }}>SPEED EVOLUTION</p>
              <h2 style={{ fontSize: '42px', fontWeight: 900, color: '#0D1B3E', marginBottom: '24px' }}>圧倒的な開発スピードの差</h2>
              <div style={{ width: '60px', height: '4px', background: 'linear-gradient(to right, #00FBFF, #9D72FF)', margin: '0 auto 40px' }}></div>
              <p style={{ color: '#6B7280', fontSize: '14px', lineHeight: 1.8 }}>プロジェクト規模に関わらず、AIは開発工程を劇的に短縮します。同一の時間軸で比較した、圧倒的なスピードの差をご覧ください。</p>
            </div>

            <div className="speed-container" style={{ backgroundColor: '#FFFFFF', borderRadius: windowWidth < 768 ? '32px' : '60px', padding: windowWidth < 768 ? '32px 16px' : '80px 100px', boxShadow: '0 40px 100px rgba(0,0,0,0.03)', border: '1px solid #F3F4F6' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '40px', fontSize: windowWidth < 768 ? '8px' : '10px', fontWeight: 900, color: '#E2E8F0', borderBottom: '1px solid #F3F4F6', paddingBottom: '10px' }}>
                <span>START</span><span>1ヶ月</span><span>2ヶ月</span><span>3ヶ月</span><span>4ヶ月</span><span>5ヶ月</span><span>6ヶ月(半年)</span>
              </div>

              {/* 小規模制作 */}
              <div style={{ marginBottom: '60px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
                  <Cpu size={18} color="#00FBFF" />
                  <h4 style={{ fontSize: windowWidth < 768 ? '18px' : '20px', fontWeight: 900, color: '#0D1B3E' }}>小規模制作</h4>
                </div>
                <div style={{ position: 'relative' }}>
                  <p style={{ fontSize: '10px', color: '#9CA3AF', marginBottom: '8px', fontWeight: 700 }}>従来の手法による開発 <span style={{ float: 'right' }}>2ヶ月</span></p>
                  <div style={{ width: '100%', height: '10px', backgroundColor: '#F3F4F6', borderRadius: '100px', overflow: 'hidden', marginBottom: '24px' }}>
                    <div style={{ height: '100%', width: '33.3%', backgroundColor: '#E2E8F0' }}></div>
                  </div>
                  
                  <p style={{ fontSize: '10px', color: '#3182CE', fontWeight: 900, marginBottom: '8px' }}>MEECE AI 活用 <span style={{ float: 'right' }}>1週間以内</span></p>
                  <div style={{ display: 'flex', alignItems: 'center', gap: windowWidth < 768 ? '12px' : '32px', flexDirection: windowWidth < 768 ? 'column' : 'row' }}>
                    <div style={{ flex: 1, width: '100%', height: '16px', backgroundColor: '#F3F4F6', borderRadius: '100px', position: 'relative', overflow: 'hidden' }}>
                      <div style={{ position: 'absolute', left: 0, top: 0, height: '100%', width: '4.2%', background: 'linear-gradient(to right, #00FBFF, #3182CE)', borderRadius: '100px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#FFFFFF' }}>
                        <Zap size={10} fill="currentColor" />
                      </div>
                    </div>
                    <div style={{ minWidth: windowWidth < 768 ? '100%' : '240px', textAlign: 'left', marginTop: windowWidth < 768 ? '-8px' : '0' }}>
                      <span style={{ fontSize: windowWidth < 768 ? '24px' : '28px', fontWeight: 900, color: '#3182CE', letterSpacing: '-0.02em' }}>約 87.5% 短縮</span><br />
                      <span style={{ fontSize: '12px', color: '#9CA3AF', fontWeight: 800 }}>(-7週間分を削減)</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* 中規模開発 */}
              <div style={{ marginBottom: '60px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
                  <Cpu size={18} color="#9D72FF" />
                  <h4 style={{ fontSize: windowWidth < 768 ? '18px' : '20px', fontWeight: 900, color: '#0D1B3E' }}>中規模開発</h4>
                </div>
                <div style={{ position: 'relative' }}>
                  <p style={{ fontSize: '10px', color: '#9CA3AF', marginBottom: '8px', fontWeight: 700 }}>従来の手法による開発 <span style={{ float: 'right' }}>6ヶ月</span></p>
                  <div style={{ width: '100%', height: '10px', backgroundColor: '#F3F4F6', borderRadius: '100px', overflow: 'hidden', marginBottom: '24px' }}>
                    <div style={{ height: '100%', width: '100%', backgroundColor: '#E2E8F0' }}></div>
                  </div>
                  
                  <p style={{ fontSize: '10px', color: '#9D72FF', fontWeight: 900, marginBottom: '8px' }}>MEECE AI 活用 <span style={{ float: 'right' }}>1ヶ月以内</span></p>
                  <div style={{ display: 'flex', alignItems: 'center', gap: windowWidth < 768 ? '12px' : '32px', flexDirection: windowWidth < 768 ? 'column' : 'row' }}>
                    <div style={{ flex: 1, width: '100%', height: '16px', backgroundColor: '#F3F4F6', borderRadius: '100px', position: 'relative', overflow: 'hidden' }}>
                      <div style={{ position: 'absolute', left: 0, top: 0, height: '100%', width: '16.6%', background: 'linear-gradient(to right, #3182CE, #9D72FF)', borderRadius: '100px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#FFFFFF' }}>
                        <TrendingUp size={10} />
                      </div>
                    </div>
                    <div style={{ minWidth: windowWidth < 768 ? '100%' : '240px', textAlign: 'left', marginTop: windowWidth < 768 ? '-8px' : '0' }}>
                      <span style={{ fontSize: windowWidth < 768 ? '24px' : '28px', fontWeight: 900, color: '#9D72FF', letterSpacing: '-0.02em' }}>約 83.3% 短縮</span><br />
                      <span style={{ fontSize: '12px', color: '#9CA3AF', fontWeight: 800 }}>(-5ヶ月分を削減)</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* 大規模開発（現実的な短縮期間に調整版） */}
              <div style={{ marginBottom: '60px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
                  <Cpu size={18} color="#FF5BAE" />
                  <h4 style={{ fontSize: windowWidth < 768 ? '18px' : '20px', fontWeight: 900, color: '#0D1B3E' }}>大規模開発</h4>
                </div>
                <div style={{ position: 'relative' }}>
                  <p style={{ fontSize: '10px', color: '#9CA3AF', marginBottom: '8px', fontWeight: 700 }}>従来の手法による開発 <span style={{ float: 'right' }}>1年（12ヶ月）</span></p>
                  <div style={{ width: '100%', height: '10px', backgroundColor: '#F3F4F6', borderRadius: '100px', overflow: 'hidden', marginBottom: '24px' }}>
                    <div style={{ height: '100%', width: '100%', backgroundColor: '#E2E8F0' }}></div>
                  </div>
                  
                  <p style={{ fontSize: '10px', color: '#FF5BAE', fontWeight: 900, marginBottom: '8px' }}>MEECE AI 活用 <span style={{ float: 'right' }}>半年（6ヶ月）〜</span></p>
                  <div style={{ display: 'flex', alignItems: 'center', gap: windowWidth < 768 ? '12px' : '32px', flexDirection: windowWidth < 768 ? 'column' : 'row' }}>
                    <div style={{ flex: 1, width: '100%', height: '16px', backgroundColor: '#F3F4F6', borderRadius: '100px', position: 'relative', overflow: 'hidden' }}>
                      <div style={{ position: 'absolute', left: 0, top: 0, height: '100%', width: '50%', background: 'linear-gradient(to right, #9D72FF, #FF5BAE)', borderRadius: '100px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#FFFFFF' }}>
                        <BarChart size={10} />
                      </div>
                    </div>
                    <div style={{ minWidth: windowWidth < 768 ? '100%' : '240px', textAlign: 'left', marginTop: windowWidth < 768 ? '-8px' : '0' }}>
                      <span style={{ fontSize: windowWidth < 768 ? '24px' : '28px', fontWeight: 900, color: '#FF5BAE', letterSpacing: '-0.02em' }}>約 50.0% 短縮</span><br />
                      <span style={{ fontSize: '12px', color: '#9CA3AF', fontWeight: 800 }}>(-半年分を大幅に削減)</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* なぜ、ここまで速いのか？ */}
              <div style={{ 
                backgroundColor: '#0D1B3E', borderRadius: '32px', padding: windowWidth < 768 ? '30px 20px' : '40px 50px', marginTop: '80px',
                display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '30px',
                flexDirection: windowWidth < 768 ? 'column' : 'row'
              }}>
                <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
                  <div style={{ width: '56px', height: '56px', borderRadius: '16px', backgroundColor: 'rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#3182CE', flexShrink: 0 }}>
                    <Cpu size={28} />
                  </div>
                  <div>
                    <h5 style={{ color: '#FFFFFF', fontSize: '20px', fontWeight: 900, marginBottom: '8px' }}>なぜ、ここまで速いのか？</h5>
                    <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '13px', lineHeight: 1.6, maxWidth: '500px' }}>AIによるコードの自動生成と並列レビュー体制が、従来の「待ち時間」を完全に排除。半年かかる開発を1ヶ月で実現可能にします。</p>
                  </div>
                </div>
                <div style={{ fontSize: '11px', fontWeight: 900, color: 'rgba(255,255,255,0.3)', border: '1px solid rgba(255,255,255,0.1)', padding: '10px 20px', borderRadius: '100px', letterSpacing: '0.1em', whiteSpace: 'nowrap' }}>TIME-TO-MARKET</div>
              </div>
            </div>
            <p style={{ textAlign: 'center', fontSize: '10px', color: '#9CA3AF', marginTop: '40px' }}>※同一の時間軸（最大6ヶ月）における期間比を視覚化したイメージです。</p>
          </div>
        </section>

        {/* AI開発の支援体制 */}
        <section style={{ padding: '140px 0', backgroundColor: '#F8F9FB', display: 'flex', justifyContent: 'center' }}>
          <div style={{ maxWidth: '1200px', width: '100%', padding: '0 24px' }}>
            <div style={{ textAlign: 'center', marginBottom: '100px' }}>
              <p style={{ color: '#00FBFF', fontSize: '10px', fontWeight: 900, letterSpacing: '0.2em', marginBottom: '16px' }}>支援体制</p>
              <h2 style={{ fontSize: '42px', fontWeight: 900, color: '#0D1B3E', marginBottom: '24px' }}>AI開発の支援体制</h2>
              <div style={{ width: '60px', height: '4px', background: 'linear-gradient(to right, #00FBFF, #9D72FF)', margin: '0 auto 40px' }}></div>
              <p style={{ color: '#6B7280', fontSize: '16px' }}>お客様の状況やプロジェクトのフェーズに合わせ、柔軟な体制で伴走します。</p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: windowWidth < 1024 ? '1fr' : 'repeat(3, 1fr)', gap: '32px' }}>
              {[
                { label: 'パターン 01', title: 'プロジェクト型フルサポート', desc: '要件定義から開発、運用までMeeceが全面的にリード。AIの専門知識を私たちが補完し、物語を完成させます。', color: '#9D72FF', bg: '#F5F3FF' },
                { label: 'パターン 02', title: '技術顧問・アドバイザリー', desc: 'お客様のチームに対し専門的知見を提供。技術選定や精度評価など、内製化を技術面から強力に支援します。', color: '#00FBFF', bg: '#E6FFFA' },
                { label: 'パターン 03', title: 'ラボ型継続開発', desc: '専属のAIチームを構成し中長期的に開発。変化の激しいAI分野の最新技術を常に反映し続けます。', color: '#FF5BAE', bg: '#FFF5F7' },
              ].map((item, i) => (
                <div key={i} style={{ backgroundColor: '#FFFFFF', padding: '60px 40px', borderRadius: '48px', border: '1px solid #F3F4F6' }}>
                  <span style={{ fontSize: '10px', fontWeight: 900, color: item.color, backgroundColor: item.bg, padding: '6px 16px', borderRadius: '100px', marginBottom: '32px', display: 'inline-block' }}>{item.label}</span>
                  <h3 style={{ fontSize: '22px', fontWeight: 900, color: '#0D1B3E', marginBottom: '24px' }}>{item.title}</h3>
                  <p style={{ fontSize: '14px', color: '#6B7280', lineHeight: 1.8 }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 今後の展望 */}
        <section style={{ 
          backgroundColor: '#0D1B3E', padding: windowWidth < 768 ? '80px 24px' : '120px 40px', 
          display: 'flex', justifyContent: 'center', position: 'relative', overflow: 'hidden'
        }}>
          <div style={{ position: 'absolute', width: '100%', height: '100%', top: 0, left: 0, background: 'radial-gradient(circle at 90% 10%, rgba(157, 114, 255, 0.05) 0%, transparent 50%)' }}></div>
          <div style={{ 
            maxWidth: '1000px', width: '100%', backgroundColor: '#F9FAFB', borderRadius: '60px', 
            padding: windowWidth < 768 ? '60px 24px' : '100px 80px', position: 'relative', zIndex: 1
          }}>
            <div style={{ position: 'absolute', top: '40px', right: '60px', fontSize: '120px', fontWeight: 900, color: '#0D1B3E', opacity: 0.03 }}>AI</div>
            <p style={{ color: '#9D72FF', fontSize: '11px', fontWeight: 900, letterSpacing: '0.2em', marginBottom: '32px' }}>今後の展望</p>
            <h2 style={{ fontSize: 'clamp(28px, 5vw, 48px)', fontWeight: 900, color: '#0D1B3E', marginBottom: '48px', lineHeight: 1.2 }}>
              知能の進化が、<br />
              <span style={{ background: 'linear-gradient(to right, #00FBFF, #9D72FF, #FF5BAE)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                物語を次の次元へ。
              </span>
            </h2>
            <div style={{ color: '#6B7280', fontSize: '15px', lineHeight: 2, maxWidth: '750px' }}>
              <p style={{ marginBottom: '32px' }}>AIは単なる「効率化の道具」ではありません。それは、人間がこれまで費やしてきた膨大な「作業」を「創造」へと解放する、新しい時代の鼓動です。</p>
              <p style={{ marginBottom: '32px' }}>Meeceが描くAIの未来では、データは単なる数字の羅列ではなく、次のアクションを予見する生きた知恵となります。</p>
              <div style={{ borderLeft: '4px solid #00FBFF', paddingLeft: '24px', margin: '40px 0', color: '#0D1B3E', fontWeight: 800 }}>
                技術が「道具」であることを超え、ビジネスという物語における「意志あるパートナー」になったとき、社会の景色は劇的に変わります。
              </div>
              <p>私たちは、その変化の最前線に立ち、お客様と共にまだ見ぬ最高の結末を創り上げます。</p>
            </div>
          </div>
        </section>

        {/* 共通フッターの呼び出し */}
        <Footer />
      </main>
    </div>
 );
}