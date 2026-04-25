import React, { useState, useEffect } from 'react';
import { Navbar } from '../../components/organisms/Navbar';
import { Footer } from '../../components/organisms/Footer';
import { PageHero } from '../../components/molecules/PageHero';
import { ArrowLeft, Mail, PhoneOff } from 'lucide-react';

const GWNotice: React.FC = () => {
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
        {/* メインビジュアル */}
        <PageHero 
          label="NOTICE / 2026.04.24"
          titleTop="ゴールデンウィーク"
          titleGradient="休業期間のお知らせ"
          description="誠に勝手ながら、2026年5月4日（月）〜5月8日（金）の期間をゴールデンウィーク休業とさせていただきます。休業期間中の対応についてご案内申し上げます。"
          windowWidth={windowWidth}
        />

        {/* 本文セクション */}
        <section style={{ maxWidth: '800px', margin: '0 auto', padding: '0 24px 100px', color: '#374151', lineHeight: 2, fontSize: '16px' }}>
          <p style={{ marginBottom: '40px' }}>
            平素は格別のご高配を賜り、厚く御礼申し上げます。<br />
            Meece株式会社では、誠に勝手ながら下記の期間をゴールデンウィーク休業とさせていただきます。
          </p>

          <h2 style={{ fontSize: '24px', fontWeight: 900, color: '#0D1B3E', marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '12px' }}>
            <span style={{ width: '4px', height: '24px', backgroundColor: '#319795' }}></span>
            休業期間
          </h2>
          <p style={{ marginBottom: '60px', fontSize: '18px', fontWeight: 700, color: '#0D1B3E' }}>
            2026年5月4日（月） 〜 2026年5月8日（金）
          </p>

          <h2 style={{ fontSize: '24px', fontWeight: 900, color: '#0D1B3E', marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '12px' }}>
            <span style={{ width: '4px', height: '24px', backgroundColor: '#319795' }}></span>
            休業期間中の対応について
          </h2>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', marginBottom: '60px' }}>
            <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start', backgroundColor: '#F8FAFC', padding: '24px', borderRadius: '16px' }}>
              <PhoneOff size={24} style={{ color: '#E53E3E', flexShrink: 0 }} />
              <div>
                <h3 style={{ fontWeight: 900, marginBottom: '8px' }}>お電話によるお問い合わせ</h3>
                <p style={{ fontSize: '14px', color: '#64748B' }}>
                  休業期間中は受付担当が不在となるため、お電話が繋がりません。恐れ入りますが、メールフォームよりお問い合わせをお願いいたします。
                </p>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start', backgroundColor: '#F8FAFC', padding: '24px', borderRadius: '16px' }}>
              <Mail size={24} style={{ color: '#3182CE', flexShrink: 0 }} />
              <div>
                <h3 style={{ fontWeight: 900, marginBottom: '8px' }}>メールによるお問い合わせ</h3>
                <p style={{ fontSize: '14px', color: '#64748B' }}>
                  休業期間中も24時間受け付けております。ただし、お問い合わせへの回答は2026年5月11日（月）の営業再開以降、順次対応させていただきます。
                </p>
              </div>
            </div>
          </div>

          <p style={{ marginBottom: '80px' }}>
            ご不便をおかけいたしますが、何卒ご了承くださいますようお願い申し上げます。<br />
            今後ともMeece株式会社をよろしくお願いいたします。
          </p>

          {/* 下部アクションエリア */}
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

        <Footer />
      </main>
    </div>
  );
}

export default GWNotice;