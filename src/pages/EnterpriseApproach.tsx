import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Navbar } from '../components/organisms/Navbar';
import { Footer } from '../components/organisms/Footer';
import { PageHero } from '../components/molecules/PageHero';
import { ShieldCheck, Clock, ArrowRight, BarChart3, CheckCircle2, Database, FileText, Users } from 'lucide-react';

const EnterpriseApproach: React.FC = () => {
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const phases = [
    {
      step: '01',
      title: '戦略定義・現状調査',
      duration: '2週間',
      meece: '既存システムの仕様調査・ROI算出。社内稟議に必要なエビデンスを揃えます。',
      customer: '週1回のヒアリング同席(1h)、既存システムの仕様把握者のご紹介。',
      output: '開発要件定義書 / ROI予測レポート',
      icon: <FileText size={24} color="#3182CE" />
    },
    {
      step: '02',
      title: '基盤構築・AI実装',
      duration: '4週間',
      meece: 'AI駆動開発による爆速実装。既存データベースとの安全な連携口を設計・構築します。',
      customer: '実データのサンプル提供（マスキング済）、中間レビューでの挙動確認。',
      output: 'プロトタイプ(v1.0) / API構成図',
      icon: <Database size={24} color="#3182CE" />
    },
    {
      step: '03',
      title: '検証・現場フィードバック',
      duration: '6週間',
      meece: '実際の現場ユーザーによるテスト。抽出された課題をアジャイルに修正・改善します。',
      customer: '現場ユーザーによる試用、改善要望の優先順位付け。',
      output: '最終ソースコード / 運用保守マニュアル',
      icon: <Users size={24} color="#3182CE" />
    }
  ];

  return (
    <div style={{ backgroundColor: '#F8FAFC', minHeight: '100vh' }}>
      <Navbar />
      
      <PageHero 
        label="FOR ENTERPRISE"
        titleTop="実証型・統合開発"
        titleGradient="アプローチ。"
        description="既存の巨大な資産を活かしながら、AIで次世代の基盤を安全かつ迅速に構築。社内稟議の突破から本番運用まで並走します。"
        windowWidth={windowWidth}
      />

      {/* 3つの提供価値 */}
      <section style={{ padding: '80px 20px', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: windowWidth < 768 ? '1fr' : 'repeat(3, 1fr)', gap: '24px' }}>
          {[
            { icon: <Clock />, title: "90日間の徹底デリバリー", desc: "要件定義から実装完了までを3ヶ月で完遂。意思決定のスピードを落とさない週次デモ報告。" },
            { icon: <BarChart3 />, title: "人件費の徹底最適化", desc: "AI駆動開発と自社UIアセットの活用により、従来のスクラッチ開発に比べ人件費を大幅削減。" },
            { icon: <ShieldCheck />, title: "エンタープライズ品質", desc: "スピードを優先しても妥協しないコード。将来の本番展開を見据えたスケーラブルな設計。" }
          ].map((item, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10 }}
              style={{ padding: '40px', backgroundColor: '#FFF', borderRadius: '32px', boxShadow: '0 10px 30px rgba(0,0,0,0.02)', border: '1px solid #F1F5F9' }}
            >
              <div style={{ color: '#3182CE', marginBottom: '20px' }}>{item.icon}</div>
              <h3 style={{ fontSize: '18px', fontWeight: 900, color: '#0D1B3E', marginBottom: '12px' }}>{item.title}</h3>
              <p style={{ fontSize: '14px', color: '#6B7280', lineHeight: 1.6 }}>{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 詳細フローテーブル */}
      <section style={{ padding: '80px 20px', backgroundColor: '#FFF' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '28px', fontWeight: 900, color: '#0D1B3E', textAlign: 'center', marginBottom: '60px' }}>具体的な進行フロー</h2>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
            {phases.map((phase, i) => (
              <div key={i} style={{ display: 'flex', gap: '30px', flexDirection: windowWidth < 768 ? 'column' : 'row' }}>
                <div style={{ flex: '0 0 80px', textAlign: 'center' }}>
                  <div style={{ fontSize: '12px', fontWeight: 900, color: '#3182CE' }}>PHASE</div>
                  <div style={{ fontSize: '32px', fontWeight: 900, color: '#E2E8F0' }}>{phase.step}</div>
                </div>
                <div style={{ flex: 1, backgroundColor: '#F8FAFC', padding: '40px', borderRadius: '32px', border: '1px solid #F1F5F9' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
                    <h3 style={{ fontSize: '20px', fontWeight: 900, color: '#0D1B3E' }}>{phase.title}</h3>
                    <span style={{ fontSize: '14px', fontWeight: 800, color: '#3182CE', backgroundColor: '#EBF8FF', padding: '6px 16px', borderRadius: '100px' }}>期間: {phase.duration}</span>
                  </div>
                  
                  <div style={{ display: 'grid', gridTemplateColumns: windowWidth < 1024 ? '1fr' : '1.2fr 1fr', gap: '32px' }}>
                    <div>
                      <div style={{ fontSize: '12px', fontWeight: 900, color: '#94A3B8', marginBottom: '8px' }}>Meeceの動き</div>
                      <p style={{ fontSize: '14px', color: '#4B5563', lineHeight: 1.7 }}>{phase.meece}</p>
                      
                      <div style={{ fontSize: '12px', fontWeight: 900, color: '#94A3B8', marginTop: '20px', marginBottom: '8px' }}>お客様にお願いすること</div>
                      <p style={{ fontSize: '14px', color: '#4B5563', lineHeight: 1.7 }}>{phase.customer}</p>
                    </div>
                    <div style={{ backgroundColor: '#FFF', padding: '24px', borderRadius: '20px', border: '1px solid #E2E8F0' }}>
                      <div style={{ fontSize: '12px', fontWeight: 900, color: '#3182CE', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <CheckCircle2 size={16} /> 手元に残る成果物
                      </div>
                      <div style={{ fontSize: '16px', fontWeight: 900, color: '#0D1B3E' }}>{phase.output}</div>
                      <div style={{ marginTop: '16px', fontSize: '12px', color: '#94A3B8' }}>※本契約締結後、ソースコード一式を納品</div>
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
          <h2 style={{ color: '#FFF', fontSize: windowWidth < 768 ? '22px' : '28px', fontWeight: 900, marginBottom: '24px', lineHeight: 1.4 }}>貴社の課題に合わせた<br />最適なROIをご提案します</h2>
          <p style={{ color: 'rgba(255,255,255,0.7)', marginBottom: '40px', fontSize: windowWidth < 768 ? '14px' : '16px' }}>まずは既存システムの状況をヒアリングさせてください。</p>
          <a 
            href="mailto:contact@meece.co.jp?subject=【大手企業向け】実証型POCの相談"
            style={{ 
              display: 'inline-flex', 
              alignItems: 'center', 
              gap: '12px', 
              backgroundColor: '#00FBFF', 
              color: '#0D1B3E', 
              padding: windowWidth < 768 ? '16px 32px' : '20px 48px', 
              borderRadius: '12px', 
              fontSize: windowWidth < 768 ? '15px' : '16px', 
              fontWeight: 900, 
              textDecoration: 'none' 
            }}
          >
            このプランで相談する <ArrowRight size={20} />
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default EnterpriseApproach;