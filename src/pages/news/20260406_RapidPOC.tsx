import React, { useState, useEffect } from 'react';
import { Navbar } from '../../components/organisms/Navbar';
import { Footer } from '../../components/organisms/Footer';
import { PageHero } from '../../components/molecules/PageHero';
import { ArrowLeft, Rocket } from 'lucide-react';

const RapidPOCArticle: React.FC = () => {
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div style={{ backgroundColor: '#FFFFFF', minHeight: '100vh', width: '100%' }}>
      <Navbar />
      
      <main style={{ paddingTop: '80px' }}>
        <PageHero 
          label="NEW SERVICE / 2026.04.06"
          titleTop="AI開発ラボ、"
          titleGradient="「AI開発ラボ」サービス始動。"
          description="アイディアを2週間で現実に。最新AIアーキテクチャを活用した超高速プロトタイプ開発サービス「AI開発ラボ」を正式公開いたしました。"
          windowWidth={windowWidth}
        />

        <section style={{ maxWidth: '800px', margin: '0 auto', padding: '0 24px 100px', color: '#374151', lineHeight: 2, fontSize: '16px' }}>
          <p style={{ marginBottom: '40px' }}>
            Meece株式会社は本日、AI駆動型開発の集大成となる新サービス「AI開発ラボ」の特設サイトを公開いたしました。
          </p>
          <p style={{ marginBottom: '60px' }}>
            市場の変化が激しい現代において、ビジネスの成否を分けるのは「検証の速度」です。私たちは、構想段階のアイディアを最短2週間で実動するプロダクトへと昇華させ、お客様のイノベーションを強力にバックアップします。
          </p>

          <h2 style={{ fontSize: '24px', fontWeight: 900, color: '#0D1B3E', marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '12px' }}>
            <span style={{ width: '4px', height: '24px', backgroundColor: '#9D72FF' }}></span>
            1. 圧倒的なスピードとコストの追求
          </h2>
          <p style={{ marginBottom: '60px' }}>
            独自のAI自動化パイプラインにより、従来のスクラッチ開発と比較して人件費を最大60%削減、工期を劇的に短縮しました。大手企業様の社内稟議や、スタートアップ様のPMF検証に最適な「動く資産」を最速で提供します。
          </p>

          <h2 style={{ fontSize: '24px', fontWeight: 900, color: '#0D1B3E', marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '12px' }}>
            <span style={{ width: '4px', height: '24px', backgroundColor: '#9D72FF' }}></span>
            2. エンタープライズ品質の担保
          </h2>
          <p style={{ marginBottom: '60px' }}>
            単なるプロトタイプに留まらず、将来の本番展開を見据えたスケーラブルな設計と、厳格な型定義によるセキュリティを両立。React/Next.jsを中心としたモダンなスタックで、保守性の高いコードを納品いたします。
          </p>

          <h2 style={{ fontSize: '24px', fontWeight: 900, color: '#0D1B3E', marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '12px' }}>
            <span style={{ width: '4px', height: '24px', backgroundColor: '#9D72FF' }}></span>
            3. あらゆるビジネスニーズに対応
          </h2>
          <p style={{ marginBottom: '80px' }}>
            「大手企業向けシステム更改」「新規プロダクト開発」「商談用デモ実装」など、ターゲットごとの導入フローを最適化。現場の課題に即した「最適な一手」をデザインし、実行します。
          </p>

          <div style={{ textAlign: 'center', padding: '60px 0', borderTop: '1px solid #F3F4F6' }}>
            <p style={{ color: '#319795', fontSize: '12px', fontWeight: 900, letterSpacing: '0.2em', marginBottom: '16px' }}>EXPLORE NEW SERVICE</p>
            <h3 style={{ fontSize: '24px', fontWeight: 900, color: '#0D1B3E', marginBottom: '40px' }}>新設された特設サイトをご覧ください</h3>
            
            <a 
              href="/services/rapid-poc" 
              style={{ 
                display: 'inline-flex', alignItems: 'center', gap: '12px',
                background: 'linear-gradient(to right, #00FBFF, #9D72FF)',
                color: '#FFFFFF', padding: '16px 40px', borderRadius: '12px',
                textDecoration: 'none', fontWeight: 900, fontSize: '15px',
                boxShadow: '0 10px 30px rgba(157, 114, 255, 0.3)',
                transition: 'all 0.3s ease'
              }}
            >
              <Rocket size={20} /> 特設サイトを見る
            </a>

            <div style={{ marginTop: '60px' }}>
              <a 
                href="/news" 
                style={{ 
                  display: 'inline-flex', alignItems: 'center', gap: '8px',
                  backgroundColor: '#0D1B3E', color: '#FFFFFF', padding: '12px 24px',
                  borderRadius: '12px', textDecoration: 'none', fontSize: '13px', fontWeight: 700,
                  transition: 'all 0.3s ease'
                }}
              >
                <ArrowLeft size={16} /> ニュース一覧へ戻る
              </a>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </div>
 );
}

export default RapidPOCArticle;