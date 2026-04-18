import React, { useState, useEffect } from 'react';
import { Navbar } from '../../components/organisms/Navbar';
import { Footer } from '../../components/organisms/Footer';
import { PageHero } from '../../components/molecules/PageHero';
import { ArrowLeft } from 'lucide-react';

const RenewalArticle: React.FC = () => {
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
          label="ニュースリリース / 2026.01.05"
          titleTop="公式サイトを"
          titleGradient="フルリニューアル公開。"
          description="新年あけましておめでとうございます。2026年の幕開けとともに、Meeceの「物語」も新しく生まれ変わります。"
          windowWidth={windowWidth}
        />

        {/* 本文セクション (image_97f516.jpg / image_97f4fa.png を再現) */}
        <section style={{ maxWidth: '800px', margin: '0 auto', padding: '0 24px 100px', color: '#374151', lineHeight: 2, fontSize: '16px' }}>
          <p style={{ marginBottom: '40px' }}>
            旧年中は格別のご高配を賜り、厚く御礼申し上げます。<br />
            Meece株式会社は、2026年1月5日（月）をもちまして、コーポレートサイトを全面的にリニューアルいたしました。
          </p>
          <p style={{ marginBottom: '60px' }}>
            今回のリニューアルでは、弊社のブランドメッセージである「ITで社会を支え、物語を完成させる」という想いをより深く、かつ直感的に感じていただけるよう、サイト構成およびビジュアルアイデンティティを全面的に刷新いたしました。
          </p>

          <h2 style={{ fontSize: '24px', fontWeight: 900, color: '#0D1B3E', marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '12px' }}>
            <span style={{ width: '4px', height: '24px', backgroundColor: '#319795' }}></span>
            刷新のポイント
          </h2>
          
          <div style={{ marginBottom: '40px' }}>
            <h3 style={{ fontSize: '18px', fontWeight: 800, color: '#0D1B3E', marginBottom: '12px' }}>1. 思想を体現したデザインシステム</h3>
            <p>「企業の大きなビジョンにおけるラスト・ピース」という自社の在り方を視覚化するため、情報を整理しつつも深みのある Bento Mosaic レイアウトや、物語の連続性を感じさせるシームレスなアニメーションを採用しました。</p>
          </div>

          <div style={{ marginBottom: '40px' }}>
            <h3 style={{ fontSize: '18px', fontWeight: 800, color: '#0D1B3E', marginBottom: '12px' }}>2. 各種サービスの再定義</h3>
            <p>これまで培ってきた受託開発、AI研究開発、ITコンサルティング、多角的事業支援の4つの柱。それぞれの専門性と、それらが相乗効果を生むことで生まれる「顧客体験」を、より明快なストーリーとして再定義いたしました。</p>
          </div>

          <div style={{ marginBottom: '60px' }}>
            <h3 style={{ fontSize: '18px', fontWeight: 800, color: '#0D1B3E', marginBottom: '12px' }}>3. ユーザー体験（UX）の最適化</h3>
            <p>ビジネスの現場において、迅速かつ正確に情報へアクセスできるよう、ナビゲーションの再構築とモバイル体験の徹底的なブラッシュアップを行いました。</p>
          </div>

          <h2 style={{ fontSize: '24px', fontWeight: 900, color: '#0D1B3E', marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '12px' }}>
            <span style={{ width: '4px', height: '24px', backgroundColor: '#319795' }}></span>
            2026年の展望
          </h2>
          <p style={{ marginBottom: '40px' }}>
            本年は、昨今のAI技術の飛躍的進化を背景に、さらなる高度なソリューション提供に注力してまいります。単なるシステム構築に留まらず、財務・経営の視点からIT投資を最適化し、お客様と共に新しい市場を切り拓くパートナーであり続けることをお約束します。
          </p>
          <p style={{ marginBottom: '80px' }}>
            本年も、Meeceへの変わらぬご支援とご指導を賜りますよう、心よりお願い申し上げます。
          </p>

          {/* 署名エリア */}
          <div style={{ textAlign: 'right', marginBottom: '80px', borderTop: '1px solid #F3F4F6', paddingTop: '40px' }}>
            <p style={{ fontSize: '18px', fontWeight: 800, color: '#0D1B3E' }}>Meece株式会社</p>
            <p style={{ fontSize: '16px', fontWeight: 700, color: '#0D1B3E', marginTop: '10px' }}>代表取締役社長 溝口 雅登</p>
          </div>

          {/* 下部アクションエリア */}
          <div style={{ textAlign: 'center', padding: '20px 0' }}>
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
        </section>

        {/* 共通フッターの呼び出し */}
        <Footer />
      </main>
    </div>
 );
}

export default RenewalArticle;