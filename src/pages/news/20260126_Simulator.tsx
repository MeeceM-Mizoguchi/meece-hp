import React, { useState, useEffect } from 'react';
import { Navbar } from '../../components/organisms/Navbar';
import { Footer } from '../../components/organisms/Footer';
import { PageHero } from '../../components/molecules/PageHero';
import { ArrowLeft, Calculator } from 'lucide-react';

const SimulatorArticle: React.FC = () => {
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
          label="NEW FEATURE / 2026.01.26"
          titleTop="開発費用を、"
          titleGradient="その場で可視化。"
          description="希望の項目を選択するだけで、概算を算出。刷新されたメインビジュアル動画と共に、Meeceが提供する新しい体験をぜひご活用ください。"
          windowWidth={windowWidth}
        />

        {/* 本文セクション (image_a5aa85.jpg / image_a5a7d7.jpg を再現) */}
        <section style={{ maxWidth: '800px', margin: '0 auto', padding: '0 24px 100px', color: '#374151', lineHeight: 2, fontSize: '16px' }}>
          <p style={{ marginBottom: '40px' }}>
            Meece株式会社は本日、お客様のプロジェクト構想を迅速に形にするための新機能「見積もりシミュレーター」を正式にリリースいたしました。
          </p>
          <p style={{ marginBottom: '60px' }}>
            これに合わせて、公式サイトのメインビジュアルを刷新。私たちが創造する「クリエイティブな未来」を象徴する動画へと生まれ変わり、視覚的にも新しいブランド体験を提供いたします。
          </p>

          <h2 style={{ fontSize: '24px', fontWeight: 900, color: '#0D1B3E', marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '12px' }}>
            <span style={{ width: '4px', height: '24px', backgroundColor: '#319795' }}></span>
            「物語」の予算と期間を、数秒で。
          </h2>
          <p style={{ marginBottom: '40px' }}>
            新しく開発された「見積もりシミュレーター」は、希望の項目を選択するだけで、プロジェクトの概算費用とスケジュールを即座に算出します。
          </p>
          <p style={{ marginBottom: '60px' }}>
            システム開発における「いくらかかるか分からない」という不安を解消し、企業の皆様が描く物語を加速させるためのラスト・ピースであり続けます。さらに、その場で「御発注書（案）」や「想定スケジュール（案）」をPDFとして保存・出力することも可能です。
          </p>

          <h2 style={{ fontSize: '24px', fontWeight: 900, color: '#0D1B3E', marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '12px' }}>
            <span style={{ width: '4px', height: '24px', backgroundColor: '#319795' }}></span>
            AI開発モードによる圧倒的なスピードとコスト
          </h2>
          <p style={{ marginBottom: '40px' }}>
            今回のアップデートの目玉として、通常開発の「1/3のコスト」で構築を可能にする「AI開発モード」のシミュレーション機能を搭載しました。
          </p>
          <p style={{ marginBottom: '60px' }}>
            これは、MeeceがR&Dを通じて培ったAIアーキテクチャを活用し、品質を維持しながら開発スピードを極大化させる試みです。最新のテクノロジーを、より身近で現実的な選択肢としてご提案します。
          </p>

          <h2 style={{ fontSize: '24px', fontWeight: 900, color: '#0D1B3E', marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '12px' }}>
            <span style={{ width: '4px', height: '24px', backgroundColor: '#319795' }}></span>
            ビジュアルに込めた意思
          </h2>
          <p style={{ marginBottom: '40px' }}>
            刷新されたメインビジュアルの動画には、ITという「歯車」が社会の物語と噛み合い、未来を動かしていく様子を込めています。
          </p>
          <p style={{ marginBottom: '80px' }}>
            「より早く、より高品質に、より精密に」。<br />
            2026年、Meece株式会社はこれからもITで社会を支え、物語を完成させるパートナーであり続けます。
          </p>

          {/* 下部アクションエリア (image_a5a7d7.jpg 下部) */}
          <div style={{ textAlign: 'center', padding: '60px 0', borderTop: '1px solid #F3F4F6' }}>
            <p style={{ color: '#319795', fontSize: '12px', fontWeight: 900, letterSpacing: '0.2em', marginBottom: '16px' }}>READY TO START?</p>
            <h3 style={{ fontSize: '24px', fontWeight: 900, color: '#0D1B3E', marginBottom: '40px' }}>見積もりシミュレーターを早速トライしよう</h3>
            
            <a 
              href="/estimate" 
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow = '0 15px 40px rgba(49, 130, 206, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 10px 30px rgba(49, 130, 206, 0.3)';
              }}
              style={{ 
                display: 'inline-flex', alignItems: 'center', gap: '12px',
                background: 'linear-gradient(to right, rgb(39 179 211), rgb(49 122 206))',
                color: '#FFFFFF', padding: '16px 40px', borderRadius: '12px',
                textDecoration: 'none', fontWeight: 900, fontSize: '15px',
                boxShadow: '0 10px 30px rgba(49, 130, 206, 0.3)',
                transition: 'all 0.3s ease'
              }}
            >
              <Calculator size={20} /> シミュレーションを開始する
            </a>

            <div style={{ marginTop: '60px' }}>
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

        {/* 共通フッターの呼び出し */}
        <Footer />
      </main>
    </div>
 );
}

export default SimulatorArticle;