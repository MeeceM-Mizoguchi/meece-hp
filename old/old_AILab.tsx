import React, { useState, useEffect } from 'react';
import { Navbar } from '../components/organisms/Navbar';
import { Footer } from '../components/organisms/Footer';
import { PageHero } from '../components/molecules/PageHero';
import { 
  Zap, 
  Rocket, 
  Cpu, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles,
  Building2
} from 'lucide-react';

export const AILab: React.FC = () => {
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);

  useEffect(() => {
    // 画面遷移時にページ最上部へスクロール
    window.scrollTo(0, 0);

    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div style={{ backgroundColor: '#FFFFFF', minHeight: '100vh', width: '100%', overflowX: 'hidden' }}>
      <Navbar />
      
      <main>
        {/* 1. メインビジュアル: PageHeroを共通利用 */}
        <PageHero 
          label="NEW SERVICE / MeeceAIラボ"
          titleTop="そのデモ、"
          titleGradient="明日までに動かせます。"
          description="独自のAI駆動エンジン × Meeceエンジニア。POCからプリセールスデモまで、従来の常識を過去にする爆速実装を実現します。"
          windowWidth={windowWidth}
        />

        {/* 2. 比較セクション: Speed Experience */}
        <section style={{ padding: '100px 0', backgroundColor: '#F8F9FB', display: 'flex', justifyContent: 'center' }}>
          <div style={{ maxWidth: '1200px', width: '100%', padding: '0 24px' }}>
            <div style={{ textAlign: 'center', marginBottom: '80px' }}>
              <p style={{ color: '#9D72FF', fontSize: '12px', fontWeight: 900, letterSpacing: '0.4em', marginBottom: '16px' }}>SPEED COMPARISON</p>
              <h2 style={{ fontSize: '32px', fontWeight: 900, color: '#0D1B3E', marginBottom: '24px' }}>常識を破壊する開発スピード</h2>
              <div style={{ width: '60px', height: '4px', background: 'linear-gradient(to right, #00FBFF, #9D72FF)', margin: '0 auto' }}></div>
            </div>

            <div style={{ 
              display: 'flex', 
              flexDirection: windowWidth < 1024 ? 'column' : 'row', 
              gap: '40px',
              alignItems: 'center'
            }}>
              {/* 従来の手法 */}
              <div style={{ flex: 1, backgroundColor: '#FFFFFF', padding: '40px', borderRadius: '32px', width: '100%', border: '1px solid #E2E8F0' }}>
                <span style={{ fontSize: '12px', fontWeight: 900, color: '#94A3B8', marginBottom: '24px', display: 'block' }}>従来の開発（1.5ヶ月〜）</span>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {['要件定義 (2週)', '基本設計 (2週)', '詳細設計 (2週)', '実装開始...'].map((step, i) => (
                    <div key={i} style={{ height: '40px', backgroundColor: '#F1F5F9', borderRadius: '8px', display: 'flex', alignItems: 'center', padding: '0 16px', fontSize: '13px', color: '#94A3B8' }}>{step}</div>
                  ))}
                </div>
              </div>

              <div style={{ color: '#9D72FF', transform: windowWidth < 1024 ? 'rotate(90deg)' : 'none' }}>
                <ArrowRight size={32} />
              </div>

              {/* MeeceAIラボ */}
              <div style={{ 
                flex: 1, 
                background: 'linear-gradient(135deg, #0D1B3E 0%, #1A2B5A 100%)', 
                padding: '40px', 
                borderRadius: '32px', 
                width: '100%',
                boxShadow: '0 20px 40px rgba(13, 27, 62, 0.2)',
                position: 'relative',
                overflow: 'hidden'
              }}>
                <div style={{ position: 'absolute', top: '-20px', right: '-20px', opacity: 0.1, color: '#FFFFFF' }}>
                  <Zap size={160} />
                </div>
                <span style={{ fontSize: '12px', fontWeight: 900, color: '#00FBFF', marginBottom: '24px', display: 'block' }}>MeeceAIラボ（最短 24時間）</span>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  <div style={{ height: '40px', backgroundColor: 'rgba(0, 251, 255, 0.1)', border: '1px solid #00FBFF', borderRadius: '8px', display: 'flex', alignItems: 'center', padding: '0 16px', fontSize: '14px', color: '#FFFFFF', fontWeight: 900 }}>
                    <Sparkles size={16} style={{ marginRight: '8px' }} /> 即時要件解析・プロトタイプ生成
                  </div>
                  <div style={{ height: '120px', backgroundColor: 'rgba(255, 255, 255, 0.05)', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '13px', color: 'rgba(255, 255, 255, 0.6)', textAlign: 'center' }}>
                    エンジニアによる<br />実機デモ・POCの実装完了
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. ユースケース: The Solutions */}
        <section style={{ padding: '140px 0', backgroundColor: '#FFFFFF', display: 'flex', justifyContent: 'center' }}>
          <div style={{ maxWidth: '1200px', width: '100%', padding: '0 24px' }}>
            <div style={{ textAlign: 'center', marginBottom: '100px' }}>
              <p style={{ color: '#319795', fontSize: '12px', fontWeight: 900, letterSpacing: '0.4em', marginBottom: '16px' }}>SOLUTIONS</p>
              <h2 style={{ fontSize: '42px', fontWeight: 900, color: '#0D1B3E', marginBottom: '24px' }}>あらゆる「検証」を爆速化</h2>
              <div style={{ width: '60px', height: '4px', background: 'linear-gradient(to right, #00FBFF, #9D72FF)', margin: '0 auto' }}></div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: windowWidth < 1024 ? '1fr' : 'repeat(3, 1fr)', gap: '32px' }}>
              {[
                { 
                  title: '大企業様向け POC開発', 
                  desc: '予算承認前の技術検証を、稟議を待たずに行えるコストとスピードで。社内説得のための「動く根拠」を即座に提供。', 
                  icon: <Building2 size={24} />, 
                  color: '#3182CE' 
                },
                { 
                  title: '営業様向け デモ実装支援', 
                  desc: '競合がパワポで説明している間に、実機デモを見せる。商談の勝率を劇的に引き上げる「爆速デモ」を。', 
                  icon: <Rocket size={24} />, 
                  color: '#9D72FF' 
                },
                { 
                  title: '中小企業様向け システム開発', 
                  desc: '最小の投資で、今日から使える現場の武器を。AIと人間のハイブリッド開発により、圧倒的な低コストを実現。', 
                  icon: <Cpu size={24} />, 
                  color: '#FF5BAE' 
                },
              ].map((item, i) => (
                <div key={i} style={{ padding: '60px 40px', borderRadius: '40px', border: '1px solid #F3F4F6', backgroundColor: '#FFFFFF' }}>
                  <div style={{ color: item.color, marginBottom: '32px' }}>{item.icon}</div>
                  <h3 style={{ fontSize: '20px', fontWeight: 900, color: '#0D1B3E', marginBottom: '20px' }}>{item.title}</h3>
                  <p style={{ fontSize: '14px', color: '#6B7280', lineHeight: 1.8 }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. 種明かし: The Logic */}
        <section style={{ padding: '140px 0', backgroundColor: '#0D1B3E', display: 'flex', justifyContent: 'center' }}>
          <div style={{ maxWidth: '1000px', width: '100%', padding: '0 24px', textAlign: 'center' }}>
            <h2 style={{ fontSize: 'clamp(28px, 5vw, 42px)', fontWeight: 900, color: '#FFFFFF', marginBottom: '40px' }}>なぜ、Meeceなら可能なのか。</h2>
            <div style={{ display: 'grid', gridTemplateColumns: windowWidth < 768 ? '1fr' : 'repeat(2, 1fr)', gap: '40px', textAlign: 'left' }}>
              <div style={{ backgroundColor: 'rgba(255,255,255,0.05)', padding: '40px', borderRadius: '32px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                  <Sparkles color="#00FBFF" size={20} />
                  <h4 style={{ color: '#FFFFFF', fontWeight: 800 }}>AIによる基盤の自動生成</h4>
                </div>
                <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '14px', lineHeight: 1.8 }}>DB設計からAPI構築、基本UIまでをAIが数分で出力。従来の「手作業」を完全にスキップします。</p>
              </div>
              <div style={{ backgroundColor: 'rgba(255,255,255,0.05)', padding: '40px', borderRadius: '32px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                  <CheckCircle2 color="#9D72FF" size={20} />
                  <h4 style={{ color: '#FFFFFF', fontWeight: 800 }}>プロによる最終研磨</h4>
                </div>
                <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '14px', lineHeight: 1.8 }}>AIが作った80%に、エンジニアが20%の魂を注入。商談や検証に耐えうる「高品質な20%」を仕上げます。</p>
              </div>
            </div>
          </div>
        </section>

        {/* 5. コンバージョン: Direct Action Form */}
        <section style={{ 
          backgroundColor: '#F8F9FB', 
          padding: windowWidth < 768 ? '80px 20px' : '140px 0', 
          width: '100%',
          display: 'flex',
          justifyContent: 'center'
        }}>
          <div style={{ 
            width: '100%',
            maxWidth: '800px',
            backgroundColor: '#FFFFFF',
            borderRadius: '40px',
            padding: windowWidth < 768 ? '40px 20px' : '60px 80px',
            boxShadow: '0 20px 60px rgba(0,0,0,0.05)',
            textAlign: 'center'
          }}>
            <p style={{ color: '#9D72FF', fontSize: '12px', fontWeight: 900, letterSpacing: '0.4em', marginBottom: '16px' }}>GET STARTED</p>
            <h2 style={{ color: '#0D1B3E', fontSize: '32px', fontWeight: 900, marginBottom: '40px' }}>デモ実装の依頼をする</h2>
            
            <form style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div style={{ display: 'flex', flexDirection: windowWidth < 768 ? 'column' : 'row', gap: '20px' }}>
                <input type="text" placeholder="お名前 / 貴社名" style={{ flex: 1, padding: '18px 25px', borderRadius: '12px', border: '1px solid #F3F4F6', backgroundColor: '#F9FAFB', fontSize: '14px', outline: 'none' }} />
                <input type="email" placeholder="メールアドレス" style={{ flex: 1, padding: '18px 25px', borderRadius: '12px', border: '1px solid #F3F4F6', backgroundColor: '#F9FAFB', fontSize: '14px', outline: 'none' }} />
              </div>
              <textarea placeholder="解決したい課題・デモの構想など" rows={6} style={{ width: '100%', padding: '18px 25px', borderRadius: '12px', border: '1px solid #F3F4F6', backgroundColor: '#F9FAFB', fontSize: '14px', outline: 'none', resize: 'none', boxSizing: 'border-box' }} />
              <a 
                href="mailto:contact@meece.co.jp?subject=MeeceAIラボ：デモ実装の相談"
                style={{ 
                  marginTop: '20px', padding: '18px', borderRadius: '12px',
                  background: 'linear-gradient(to right, #00FBFF, #9D72FF)',
                  color: '#FFFFFF', fontSize: '15px', fontWeight: 'bold',
                  textDecoration: 'none', display: 'block', textAlign: 'center',
                  boxShadow: '0 10px 20px rgba(0, 251, 255, 0.2)'
                }}
              >
                爆速デモを依頼する
              </a>
            </form>
          </div>
        </section>

        <Footer />
      </main>
    </div>
  );
};

export default AILab;