import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Navbar } from '../components/organisms/Navbar';
import { Footer } from '../components/organisms/Footer';
import { PageHero } from '../components/molecules/PageHero';
import { Rocket, Zap, CheckCircle2, Target, Code2, LineChart, Layout } from 'lucide-react';

const StartupApproach: React.FC = () => {
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const phases = [
    {
      step: '01',
      title: '戦略削ぎ落とし・設計',
      duration: '3日間',
      meece: 'ビジョンを伺い、最速で価値を証明するために「作らない機能」を決定。MVPのコアを定義します。',
      customer: '30分〜1時間のオンラインMTGでのビジョン共有。',
      output: 'MVP要件定義書 / 画面遷移図(Figma)',
      icon: <Target size={24} color="#9D72FF" />
    },
    {
      step: '02',
      title: '爆速AI実装',
      duration: '7日間',
      meece: '既存のAI開発モジュールをフル活用し、主要機能を一気に組み上げます。',
      customer: 'ロゴデータや初期コンテンツ（テキスト・画像）の送付。',
      output: '検証用プロトタイプ Web/アプリ',
      icon: <Code2 size={24} color="#9D72FF" />
    },
    {
      step: '03',
      title: '市場投入・データ解析',
      duration: '4日間',
      meece: 'デプロイ（公開）を実施。ユーザーの行動ログを仕込み、次のピボットへの判断材料を揃えます。',
      customer: 'テストユーザーへの案内、初期フィードバックの回収。',
      output: 'ユーザー行動ログ / 次期開発提案書',
      icon: <LineChart size={24} color="#9D72FF" />
    }
  ];

  return (
    <div style={{ backgroundColor: '#F8FAFC', minHeight: '100vh' }}>
      <Navbar />
      
      <PageHero 
        label="FOR STARTUP / SMB"
        titleTop="爆速・市場検証"
        titleGradient="アプローチ。"
        description="アイディアの賞味期限を切らさない。無駄を極限まで削ぎ落とし、最短2週間で「市場に問う」ための武器を完成させます。"
        windowWidth={windowWidth}
      />

      {/* 3つの提供価値 */}
      <section style={{ padding: '80px 20px', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: windowWidth < 768 ? '1fr' : 'repeat(3, 1fr)', gap: '24px' }}>
          {[
            { icon: <Zap />, title: "最短2週間の超速デリバリー", desc: "アイディアを熱いうちに形に。AI駆動開発により、エンジニア採用を待たずに即時開発を開始。" },
            { icon: <Target />, title: "KPI連動型開発", desc: "単なるシステム構築ではなく、どの数値を動かしたいかに基づいて機能を設計。無駄な投資を防ぎます。" },
            { icon: <Layout />, title: "柔軟なアジャイル体制", desc: "市場の反応を見て翌週には機能を変更・拡張。スタートアップ特有のピボットにも柔軟に対応。" }
          ].map((item, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10 }}
              style={{ padding: '40px', backgroundColor: '#FFF', borderRadius: '32px', boxShadow: '0 10px 30px rgba(0,0,0,0.02)', border: '1px solid #F3F4F6' }}
            >
              <div style={{ color: '#9D72FF', marginBottom: '20px' }}>{item.icon}</div>
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
                  <div style={{ fontSize: '12px', fontWeight: 900, color: '#9D72FF' }}>PHASE</div>
                  <div style={{ fontSize: '32px', fontWeight: 900, color: '#E2E8F0' }}>{phase.step}</div>
                </div>
                <div style={{ flex: 1, backgroundColor: '#FAF5FF', padding: '40px', borderRadius: '32px', border: '1px solid #F3E8FF' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
                    <h3 style={{ fontSize: '20px', fontWeight: 900, color: '#0D1B3E' }}>{phase.title}</h3>
                    <span style={{ fontSize: '14px', fontWeight: 800, color: '#9D72FF', backgroundColor: '#FFFFFF', padding: '6px 16px', borderRadius: '100px', border: '1px solid #E9D5FF' }}>期間: {phase.duration}</span>
                  </div>
                  
                  <div style={{ display: 'grid', gridTemplateColumns: windowWidth < 1024 ? '1fr' : '1.2fr 1fr', gap: '32px' }}>
                    <div>
                      <div style={{ fontSize: '12px', fontWeight: 900, color: '#A78BFA', marginBottom: '8px' }}>Meeceの動き</div>
                      <p style={{ fontSize: '14px', color: '#4B5563', lineHeight: 1.7 }}>{phase.meece}</p>
                      
                      <div style={{ fontSize: '12px', fontWeight: 900, color: '#A78BFA', marginTop: '20px', marginBottom: '8px' }}>お客様にお願いすること</div>
                      <p style={{ fontSize: '14px', color: '#4B5563', lineHeight: 1.7 }}>{phase.customer}</p>
                    </div>
                    <div style={{ backgroundColor: '#FFF', padding: '24px', borderRadius: '20px', border: '1px solid #E9D5FF' }}>
                      <div style={{ fontSize: '12px', fontWeight: 900, color: '#9D72FF', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <CheckCircle2 size={16} /> 手元に残る成果物
                      </div>
                      <div style={{ fontSize: '16px', fontWeight: 900, color: '#0D1B3E' }}>{phase.output}</div>
                      <div style={{ marginTop: '16px', fontSize: '12px', color: '#94A3B8' }}>※市場検証の結果に基づき、継続開発が可能</div>
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
          <h2 style={{ color: '#FFF', fontSize: windowWidth < 768 ? '22px' : '28px', fontWeight: 900, marginBottom: '24px', lineHeight: 1.4 }}>そのアイディアを、<br />来週には形にしませんか？</h2>
          <p style={{ color: 'rgba(255,255,255,0.7)', marginBottom: '40px', fontSize: windowWidth < 768 ? '14px' : '16px' }}>スピード感を持ったプロダクト成長をMeeceが支えます。</p>
          <a 
            href="mailto:contact@meece.co.jp?subject=【スタートアップ向け】MVP開発の相談"
            style={{ 
              display: 'inline-flex', 
              alignItems: 'center', 
              gap: '12px', 
              backgroundColor: '#9D72FF', 
              color: '#FFFFFF', 
              padding: windowWidth < 768 ? '16px 32px' : '20px 48px', 
              borderRadius: '12px', 
              fontSize: windowWidth < 768 ? '15px' : '16px', 
              fontWeight: 900, 
              textDecoration: 'none' 
            }}
          >
            このプランで相談する <Rocket size={20} />
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default StartupApproach;