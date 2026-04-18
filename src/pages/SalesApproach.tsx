import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Navbar } from '../components/organisms/Navbar';
import { Footer } from '../components/organisms/Footer';
import { PageHero } from '../components/molecules/PageHero';
import { Handshake, Zap, MousePointer2, Monitor, MessageSquareCode, Presentation, CheckCircle2 } from 'lucide-react';

const SalesApproach: React.FC = () => {
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const phases = [
    {
      step: '01',
      title: '商談ヒアリング・課題抽出',
      duration: '即日',
      meece: '貴社の商談にエンジニアがオンライン同席、または商談後のメモを共有いただき、顧客の「本当に見たい画面」を特定します。',
      customer: 'ターゲット顧客の課題共有、現在の提案資料の共有。',
      output: 'デモ実装仕様書 / 課題整理メモ',
      icon: <MessageSquareCode size={24} color="#FF5BAE" />
    },
    {
      step: '02',
      title: '24時間特急デモ実装',
      duration: '24時間以内',
      meece: '既存のUIコンポーネントをベースに、顧客のロゴや配色、具体的なデータ項目を反映した「動くデモ」を翌日までに構築します。',
      customer: 'デモで表示したい顧客ロゴや特定データの送付。',
      output: '顧客専用デモURL (Web/モバイル対応)',
      icon: <Monitor size={24} color="#FF5BAE" />
    },
    {
      step: '03',
      title: '提案武器化・商談披露',
      duration: '次回商談時',
      meece: 'デモを触りながらの提案シナリオをアドバイス。技術的な質問への回答もバックアップし、成約率を最大化します。',
      customer: '次回商談でのデモ披露、顧客の反応フィードバック。',
      output: '提案用デモ動画 / 受注確度向上レポート',
      icon: <Presentation size={24} color="#FF5BAE" />
    }
  ];

  return (
    <div style={{ backgroundColor: '#F8FAFC', minHeight: '100vh' }}>
      <Navbar />
      
      <PageHero 
        label="FOR SALES COMPANIES"
        titleTop="営業加速・即日実装"
        titleGradient="アプローチ。"
        description="「できます」という言葉より、一つの「動くデモ」を。次回の商談までに、顧客の期待値を確信に変える最高の武器を提供します。"
        windowWidth={windowWidth}
      />

      {/* 3つの提供価値 */}
      <section style={{ padding: '80px 20px', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: windowWidth < 768 ? '1fr' : 'repeat(3, 1fr)', gap: '24px' }}>
          {[
            { icon: <Zap />, title: "24時間以内のデモ構築", desc: "ヒアリングから丸一日で「触れるもの」を用意。競合他社を圧倒するレスポンス速度で顧客の信頼を勝ち取ります。" },
            { icon: <MousePointer2 />, title: "実体験型の提案スタイル", desc: "資料の説明ではなく、実際に操作してもらう提案へ。顧客の「導入後のイメージ」を100%具現化します。" },
            { icon: <Handshake />, title: "技術的な壁打ちパートナー", desc: "営業マンが不安な技術仕様もしっかりサポート。商談の「裏方エンジニア」として成約まで伴走します。" }
          ].map((item, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10 }}
              style={{ padding: '40px', backgroundColor: '#FFF', borderRadius: '32px', boxShadow: '0 10px 30px rgba(0,0,0,0.02)', border: '1px solid #F3F4F6' }}
            >
              <div style={{ color: '#FF5BAE', marginBottom: '20px' }}>{item.icon}</div>
              <h3 style={{ fontSize: '18px', fontWeight: 900, color: '#0D1B3E', marginBottom: '12px' }}>{item.title}</h3>
              <p style={{ fontSize: '14px', color: '#6B7280', lineHeight: 1.6 }}>{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 詳細フローテーブル */}
      <section style={{ padding: '80px 20px', backgroundColor: '#FFF' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '28px', fontWeight: 900, color: '#0D1B3E', textAlign: 'center', marginBottom: '60px' }}>成約までの特急フロー</h2>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
            {phases.map((phase, i) => (
              <div key={i} style={{ display: 'flex', gap: '30px', flexDirection: windowWidth < 768 ? 'column' : 'row' }}>
                <div style={{ flex: '0 0 80px', textAlign: 'center' }}>
                  <div style={{ fontSize: '12px', fontWeight: 900, color: '#FF5BAE' }}>PHASE</div>
                  <div style={{ fontSize: '32px', fontWeight: 900, color: '#E2E8F0' }}>{phase.step}</div>
                </div>
                <div style={{ flex: 1, backgroundColor: '#FFF5F7', padding: '40px', borderRadius: '32px', border: '1px solid #FED7E2' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
                    <h3 style={{ fontSize: '20px', fontWeight: 900, color: '#0D1B3E' }}>{phase.title}</h3>
                    <span style={{ fontSize: '14px', fontWeight: 800, color: '#FF5BAE', backgroundColor: '#FFFFFF', padding: '6px 16px', borderRadius: '100px', border: '1px solid #FEB2B2' }}>期間: {phase.duration}</span>
                  </div>
                  
                  <div style={{ display: 'grid', gridTemplateColumns: windowWidth < 1024 ? '1fr' : '1.2fr 1fr', gap: '32px' }}>
                    <div>
                      <div style={{ fontSize: '12px', fontWeight: 900, color: '#F687B3', marginBottom: '8px' }}>Meeceの動き</div>
                      <p style={{ fontSize: '14px', color: '#4B5563', lineHeight: 1.7 }}>{phase.meece}</p>
                      
                      <div style={{ fontSize: '12px', fontWeight: 900, color: '#F687B3', marginTop: '20px', marginBottom: '8px' }}>営業担当者様にお願いすること</div>
                      <p style={{ fontSize: '14px', color: '#4B5563', lineHeight: 1.7 }}>{phase.customer}</p>
                    </div>
                    <div style={{ backgroundColor: '#FFF', padding: '24px', borderRadius: '20px', border: '1px solid #FEB2B2' }}>
                      <div style={{ fontSize: '12px', fontWeight: 900, color: '#FF5BAE', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <CheckCircle2 size={16} /> 商談で使える成果物
                      </div>
                      <div style={{ fontSize: '16px', fontWeight: 900, color: '#0D1B3E' }}>{phase.output}</div>
                      <div style={{ marginTop: '16px', fontSize: '12px', color: '#94A3B8' }}>※受注後の本開発へのシームレスな移行も可能</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTAセクション */}
      <section style={{ padding: windowWidth < 768 ? '60px 0' : '100px 20px', textAlign: 'center' }}>
        <div style={{ 
          backgroundColor: '#0D1B3E', 
          padding: windowWidth < 768 ? '60px 24px' : '80px 40px', 
          borderRadius: windowWidth < 768 ? '0px' : '48px', 
          maxWidth: windowWidth < 768 ? '100%' : '800px', 
          margin: '0 auto' 
        }}>
          <h2 style={{ color: '#FFF', fontSize: windowWidth < 768 ? '22px' : '28px', fontWeight: 900, marginBottom: '24px', lineHeight: 1.4 }}>その商談、<br />「本物」を見せて決めませんか？</h2>
          <p style={{ color: 'rgba(255,255,255,0.7)', marginBottom: '40px', fontSize: windowWidth < 768 ? '14px' : '16px' }}>明日の提案を劇的に変える武器を、今すぐ準備しましょう。</p>
          <a 
            href="mailto:contact@meece.co.jp?subject=【営業会社向け】特急デモ実装の相談"
            style={{ 
              display: 'inline-flex', 
              alignItems: 'center', 
              gap: '12px', 
              backgroundColor: '#FF5BAE', 
              color: '#FFFFFF', 
              padding: windowWidth < 768 ? '16px 32px' : '20px 48px', 
              borderRadius: '12px', 
              fontSize: windowWidth < 768 ? '15px' : '16px', 
              fontWeight: 900, 
              textDecoration: 'none' 
            }}
          >
            このプランで相談する <Handshake size={20} />
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SalesApproach;