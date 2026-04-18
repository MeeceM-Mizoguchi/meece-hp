import React, { useState, useEffect } from 'react';
import { Navbar } from '../components/organisms/Navbar';
import { Footer } from '../components/organisms/Footer';
import { PageHero } from '../components/molecules/PageHero'; // 追加
import { ChevronRight } from 'lucide-react';
import { newsItems } from '../constants/newsData'; // 外部のニュースデータ台帳を読み込み

export const News: React.FC = () => {
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);
  const [activeTab, setActiveTab] = useState('すべて');

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // ※ ニュースデータは src/constants/newsData.tsx から自動的に読み込まれます

  // 選択中のタブに応じて記事を絞り込む処理を追加
  const filteredItems = newsItems.filter(item => 
    activeTab === 'すべて' ? true : item.category === activeTab
  );

  const categories = ['すべて', 'ニュース', 'プレスリリース', '営業日'];

  return (
    <div style={{ backgroundColor: '#FFFFFF', minHeight: '100vh', width: '100%', overflowX: 'hidden' }}>
      <Navbar />
      
      <main style={{ paddingTop: '80px' }}>
        {/* メインビジュアル (PageHero共通コンポーネントを使用) */}
        <PageHero 
          label="最新情報 / ニュースアーカイブ"
          titleTop="NEWS"
          titleGradient="ARCHIVE"
          description="Meeceの最新動向、リリース情報、社会を支えるプロジェクトの軌跡をご紹介します。"
          windowWidth={windowWidth}
        />

        {/* 2. カテゴリタブ (image_d8f217.jpg を再現) */}
        <section style={{ borderBottom: '1px solid #F3F4F6', marginBottom: '40px' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 40px', display: 'flex', gap: '40px' }}>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                style={{
                  padding: '20px 0',
                  fontSize: '14px',
                  fontWeight: 900,
                  color: activeTab === cat ? '#3182CE' : '#9CA3AF',
                  border: 'none',
                  backgroundColor: 'transparent',
                  cursor: 'pointer',
                  position: 'relative',
                  borderBottom: activeTab === cat ? '3px solid #3182CE' : '3px solid transparent',
                  transition: 'all 0.3s ease'
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </section>

        {/* 3. ニュースリスト */}
        <section style={{ maxWidth: '1200px', margin: '0 auto 140px', padding: '0 24px' }}>
          <div style={{ backgroundColor: '#FFFFFF', borderRadius: '40px', boxShadow: '0 40px 100px rgba(0,0,0,0.03)', overflow: 'hidden' }}>
            {filteredItems.length > 0 ? (
              filteredItems.map((item, index) => (
                <a 
                  key={index}
                  href={item.url || '#'}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#F8FAFC';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'transparent';
                  }}
                  style={{ 
                    display: 'flex', 
                    flexDirection: windowWidth < 768 ? 'column' : 'row',
                    textDecoration: 'none',
                    padding: '60px 40px',
                    borderBottom: index !== filteredItems.length - 1 ? '1px solid #F3F4F6' : 'none',
                    gap: '40px',
                    alignItems: 'flex-start',
                    position: 'relative',
                    transition: 'all 0.3s ease'
                  }}
                >
                  {/* 左側：アイコンと日付 */}
                  <div style={{ display: 'flex', gap: '30px', alignItems: 'center', minWidth: '200px' }}>
                    <div style={{ 
                      width: '56px', height: '56px', borderRadius: '20px', border: '1px solid #F1F5F9',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      backgroundColor: '#FFFFFF'
                    }}>
                      {item.icon}
                    </div>
                    <div>
                      <div style={{ fontSize: '13px', fontWeight: 700, color: '#9CA3AF', marginBottom: '4px' }}>{item.date}</div>
                      <span style={{ fontSize: '11px', fontWeight: 900, color: '#3182CE', backgroundColor: '#EBF8FF', padding: '2px 10px', borderRadius: '4px' }}>
                        {item.category}
                      </span>
                    </div>
                  </div>

                  {/* 右側：タイトルと詳細 */}
                  <div style={{ flex: 1 }}>
                    <h3 style={{ fontSize: '20px', fontWeight: 900, color: '#0D1B3E', marginBottom: '16px', lineHeight: 1.5 }}>
                      {item.title}
                    </h3>
                    <p style={{ fontSize: '14px', color: '#6B7280', lineHeight: 1.8 }}>
                      {item.description}
                    </p>
                  </div>

                  {/* 右端の矢印 */}
                  <div style={{ display: windowWidth < 768 ? 'none' : 'block', color: '#F3F4F6' }}>
                    <ChevronRight size={24} />
                  </div>
                </a>
              ))
            ) : (
              <div style={{ padding: '100px', textAlign: 'center', color: '#9CA3AF' }}>
                該当する記事がありません。
              </div>
            )}
          </div>
        </section>

        {/* 共通フッターの呼び出し */}
        <Footer />
      </main>
    </div>
 );
}