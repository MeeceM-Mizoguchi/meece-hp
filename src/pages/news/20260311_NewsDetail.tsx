import React, { useState, useEffect } from 'react';
import { Navbar } from '../../components/organisms/Navbar';
import { Footer } from '../../components/organisms/Footer';
import { PageHero } from '../../components/molecules/PageHero';
import { ArrowLeft } from 'lucide-react';

const NewsDetail_20260311: React.FC = () => {
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
        {/* メインビジュアル (既存記事と共通のPageHeroコンポーネント) */}
        <PageHero 
          label="UPDATE / 2026.03.11"
          titleTop="基盤刷新で、"
          titleGradient="UXを最適化。"
          description="より快適な閲覧体験を提供するため、公式サイトのシステム基盤を刷新いたしました。表示速度の向上とアクセシビリティ改善により、Meeceの物語をより滑らかに提供します。"
          windowWidth={windowWidth}
        />

        {/* 本文セクション (既存記事のレイアウト・フォント設定を完全に再現) */}
        <section style={{ maxWidth: '800px', margin: '0 auto', padding: '0 24px 100px', color: '#374151', lineHeight: 2, fontSize: '16px' }}>
          <p style={{ marginBottom: '40px' }}>
            平素よりMeece株式会社の公式サイトをご利用いただき、誠にありがとうございます。
          </p>
          <p style={{ marginBottom: '60px' }}>
            この度、当社公式サイトのシステム基盤を全面的に刷新いたしました。今回のアップデートでは、より快適に情報を取得いただけるよう、内部構造の最適化とパフォーマンスの向上を図っております。
          </p>

          <h2 style={{ fontSize: '24px', fontWeight: 900, color: '#0D1B3E', marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '12px' }}>
            <span style={{ width: '4px', height: '24px', backgroundColor: '#319795' }}></span>
            1. ページ読み込み速度の向上
          </h2>
          <p style={{ marginBottom: '60px' }}>
            モダンなフロントエンド基盤への移行により、従来のページ遷移やコンテンツの読み込み速度を大幅に改善いたしました。モバイル環境においてもストレスのないスムーズなブラウジングが可能となりました。
          </p>

          <h2 style={{ fontSize: '24px', fontWeight: 900, color: '#0D1B3E', marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '12px' }}>
            <span style={{ width: '4px', height: '24px', backgroundColor: '#319795' }}></span>
            2. UI・アクセシビリティの微調整
          </h2>
          <p style={{ marginBottom: '60px' }}>
            採用ページやニュースアーカイブをはじめとする各セクションにおいて、情報の視認性を高めるための微調整を行いました。特に色覚の多様性に配慮したカラーパレットの再選定を行い、より多くの方にとって「見やすく、使いやすい」デザインへと進化しています。
          </p>

          <h2 style={{ fontSize: '24px', fontWeight: 900, color: '#0D1B3E', marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '12px' }}>
            <span style={{ width: '4px', height: '24px', backgroundColor: '#319795' }}></span>
            3. セキュリティと保守性の強化
          </h2>
          <p style={{ marginBottom: '80px' }}>
            基盤となるフレームワークの最新化により、将来的な機能拡張に対する柔軟性と、サイト全体の堅牢性を向上させています。これにより、今後予定している新機能の追加もより迅速に行うことが可能となります。
          </p>

          {/* 下部アクションエリア (ボタンを整理) */}
          <div style={{ textAlign: 'center', padding: '80px 0 0', borderTop: '1px solid #F3F4F6', marginTop: '60px' }}>
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
                backgroundColor: '#0D1B3E', color: '#FFFFFF', padding: '14px 28px',
                borderRadius: '12px', textDecoration: 'none', fontSize: '14px', fontWeight: 700,
                transition: 'all 0.3s ease',
                boxShadow: '0 4px 12px rgba(13, 27, 62, 0.1)'
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

export default NewsDetail_20260311;