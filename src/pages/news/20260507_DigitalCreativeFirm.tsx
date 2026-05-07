import React, { useState, useEffect } from 'react';
import { Navbar } from '../../components/organisms/Navbar';
import { Footer } from '../../components/organisms/Footer';
import { PageHero } from '../../components/molecules/PageHero';
import { Compass, Layers, ChevronRight, ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';

const NewsDetail_20260507: React.FC = () => {
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
          label="VISION / 2026.05.07"
          titleTop="時代をまたぎ、"
          titleGradient="デジタル・クリエイティブ・ファームへ。"
          description="AIという革新と、日本が築いた資産。その両方を等しく尊び、デザインの力で次世代へ繋ぐ。Meeceは、新しい時代のデジタルを形にするファームとして歩み始めます。"
          windowWidth={windowWidth}
        />

        <section style={{ maxWidth: '800px', margin: '0 auto', padding: '0 24px 100px', color: '#374151', lineHeight: 2, fontSize: '16px' }}>
          <p style={{ marginBottom: '40px', fontSize: '18px', fontWeight: 700, color: '#0D1B3E' }}>
            「最新が最良」とは限らない。しかし、「デザイン」は常に新しい価値を生む。
          </p>
          <p style={{ marginBottom: '40px' }}>
            AIの進化は目覚ましく、私たちのビジネスや生活を劇的に変えつつあります。しかし、Meeceが大切にしたいのは、AIという点だけの進化ではありません。日本には、長年積み上げられてきた素晴らしい技術、文化、そして「ものづくり」の精神という、かけがえのない資産があります。
          </p>

          <div style={{ position: 'relative', padding: '40px', backgroundColor: '#F1F5F9', borderRadius: '32px', marginBottom: '60px', overflow: 'hidden' }}>
            <Layers size={150} style={{ position: 'absolute', right: '-20px', bottom: '-20px', color: '#CBD5E1', opacity: 0.3 }} />
            <h3 style={{ fontSize: '20px', fontWeight: 900, color: '#0D1B3E', marginBottom: '20px' }}>
              これまでの技術、これからの技術。
            </h3>
            <p style={{ fontSize: '15px', position: 'relative', zIndex: 1 }}>
              過去の遺産を否定するのではなく、これまでの確かな技術をリスペクトし、そこにAIや最新のWebスタックを掛け合わせる。時代を「またぐ」ことで生まれる摩擦熱を、新しいクリエイティブへと昇華させる。それが、Meeceの掲げる「デジタル・クリエイティブ・ファーム」の姿です。
            </p>
          </div>

          <h2 style={{ fontSize: '24px', fontWeight: 900, color: '#0D1B3E', marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '12px' }}>
            <span style={{ width: '4px', height: '24px', backgroundColor: '#0D1B3E' }}></span>
            物語を、途絶えさせないために。
          </h2>
          <p style={{ marginBottom: '40px' }}>
            私たちは、単にシステムを開発する会社ではありません。お客様がこれまで紡いできた「物語」を受け取り、最新のテクノロジーという筆を使って、その続きをより鮮やかに描くパートナーでありたいと考えています。
          </p>
          <p style={{ marginBottom: '60px' }}>
            古い技術に宿る知恵と、新しい技術がもたらす可能性。この二つをデザインの力で統合し、10年後、20年後のスタンダードを今、この場所から創り出していきます。
          </p>

          {/* 下部メッセージエリア */}
          <div style={{ padding: '80px 0 0', borderTop: '1px solid #F3F4F6', marginTop: '60px', textAlign: 'center' }}>
            <Compass size={48} style={{ color: '#0D1B3E', marginBottom: '32px' }} />
            <h3 style={{ fontSize: '26px', fontWeight: 900, color: '#0D1B3E', marginBottom: '24px' }}>
              時代をまたぐ、デジタルをデザインしよう。
            </h3>
            <p style={{ color: '#6B7280', marginBottom: '48px' }}>
              Meece株式会社は、テクノロジーの波に飲まれるのではなく、<br />
              その波を乗りこなす「意志」をデザインします。
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '24px' }}>
              <motion.a 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href="/about" 
                style={{ 
                  display: 'inline-flex', alignItems: 'center', gap: '12px',
                  backgroundColor: '#0D1B3E', color: '#FFFFFF', padding: '20px 60px',
                  borderRadius: '2px', textDecoration: 'none', fontSize: '15px', fontWeight: 900,
                  letterSpacing: '0.1em', transition: 'all 0.3s ease',
                  boxShadow: '0 20px 40px rgba(13, 27, 62, 0.15)'
                }}
              >
                OUR VISION <ChevronRight size={18} />
              </motion.a>
              
              <a 
                href="/news" 
                style={{ 
                  display: 'inline-flex', alignItems: 'center', gap: '8px',
                  color: '#6B7280', fontSize: '14px', fontWeight: 700, textDecoration: 'none'
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

export default NewsDetail_20260507;