import React, { useState, useEffect } from 'react';
import { Navbar } from '../../components/organisms/Navbar';
import { Footer } from '../../components/organisms/Footer';
import { PageHero } from '../../components/molecules/PageHero';
import { ArrowLeft } from 'lucide-react';

const VisionArticle: React.FC = () => {
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
        {/* メインビジュアル (PageHero共通コンポーネントを使用) */}
        <PageHero 
          label="決意表明 / 2026.01.05"
          titleTop="AI新時代"
          titleGradient="システム刷新への挑戦。"
          description="高市首相の年頭会見を機に、社会は真のAI導入期へ。Meeceは開発のスピードと品質を極大化し、未来を切り拓きます。"
          windowWidth={windowWidth}
        />

        {/* 本文セクション (image_a4cd60.jpg / image_a4cd42.jpg を再現) */}
        <section style={{ maxWidth: '800px', margin: '0 auto', padding: '0 24px 100px', color: '#374151', lineHeight: 2, fontSize: '16px' }}>
          <p style={{ marginBottom: '40px' }}>
            2026年の年頭にあたり、高市首相の記者会見において「AI導入による社会基盤の抜本的強化」に関する力強い指針が示されました。
          </p>
          <p style={{ marginBottom: '60px' }}>
            これを契機として、日本は本格的に、大企業や行政機関、さらには金融機関までもがAIをコア技術として統合する「AI刷新時代」へと突入することになります。これまで社会を支えてきた既存のシステム構成やアーキテクチャの概念は今、根底から変わりつつあります。
          </p>

          <h2 style={{ fontSize: '24px', fontWeight: 900, color: '#0D1B3E', marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '12px' }}>
            <span style={{ width: '4px', height: '24px', backgroundColor: '#319795' }}></span>
            AIによるアーキテクチャの刷新
          </h2>
          <p style={{ marginBottom: '40px' }}>
            世の中のあらゆるシステムが刷新を求められる中、Meeceは単なるトレンドの追随ではなく、システム開発の本質的な価値を再定義したいと考えています。
          </p>
          <p style={{ marginBottom: '60px' }}>
            旧来の重厚長大で変更に時間を要するシステム構成から、AIを前提とした「柔軟かつ精密」な次世代のアーキテクチャへ。社会を支えるインフラが新しく生まれ変わるこの瞬間を、私たちは技術の力でリードしていきます。
          </p>

          <h2 style={{ fontSize: '24px', fontWeight: 900, color: '#0D1B3E', marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '12px' }}>
            <span style={{ width: '4px', height: '24px', backgroundColor: '#319795' }}></span>
            R&Dの取り組みとスピード・品質の極大化
          </h2>
          <p style={{ marginBottom: '40px' }}>
            Meeceでは、様々な開発プロジェクトにおいてAIを導入し、開発スピードと品質を飛躍的に向上させるための研究開発（R&D）に注力しています。
          </p>
          <p style={{ marginBottom: '60px' }}>
            これからの時代に求められるのは、これまで以上の「速度」、妥協のない「品質」、柔軟な「精密さ」です。私たちはAIを単なる効率化の道具ではなく、より人間が創造的な領域に集中し、かつミスのない完璧なシステムを構築するためのパートナーとして位置づけています。
          </p>

          <h2 style={{ fontSize: '24px', fontWeight: 900, color: '#0D1B3E', marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '12px' }}>
            <span style={{ width: '4px', height: '24px', backgroundColor: '#319795' }}></span>
            次世代システム開発への参入
          </h2>
          <p style={{ marginBottom: '40px' }}>
            私たちは、この変革期を大きなチャンスと捉えています。行政や金融といった、高い信頼性が求められる領域へのAI導入に積極的に参入し、社会の「物語」を次のステージへと進めるラスト・ピースであり続けたい。
          </p>
          <p style={{ marginBottom: '80px' }}>
            「より早く、より高品質に、より精密に」。<br />
            2026年、Meece株式会社はAI新時代を牽引するフロントランナーとして、挑戦を加速させてまいります。
          </p>

          {/* 下部アクションエリア (image_a4cd42.jpg 下部) */}
          <div style={{ textAlign: 'center', padding: '60px 0', borderTop: '1px solid #F3F4F6' }}>
            <div style={{ marginTop: '20px' }}>
              <a 
                href="/news" 
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#1A2B5A';
                  e.currentTarget.style.transform = 'translateX(-5px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#0D1B3E';
                  e.currentTarget.style.transform = 'translateX(0)';
                }}
                style={{ 
                  display: 'inline-flex', alignItems: 'center', gap: '8px',
                  backgroundColor: '#0D1B3E', color: '#FFFFFF', padding: '16px 32px',
                  borderRadius: '12px', textDecoration: 'none', fontSize: '14px', fontWeight: 700,
                  transition: 'all 0.3s ease',
                  boxShadow: '0 10px 30px rgba(13, 27, 62, 0.2)'
                }}
              >
                <ArrowLeft size={18} /> ニュース一覧へ戻る
              </a>
            </div>
          </div>
        </section>

        {/* 共通フッターの呼び出し */}
        <Footer />
      </main>
    </div>
 );
}

export default VisionArticle;