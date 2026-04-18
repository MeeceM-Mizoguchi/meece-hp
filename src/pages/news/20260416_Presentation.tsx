import React, { useState, useEffect } from 'react';
import { Navbar } from '../../components/organisms/Navbar';
import { Footer } from '../../components/organisms/Footer';
import { PageHero } from '../../components/molecules/PageHero';
import { Presentation, ChevronRight, MousePointer2, ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';
import guideImage from '../../assets/20260416_Presen案内.png'; // この行を必ず入れてください

// 画像を表示している <img> タグの部分を以下に書き換え
<img 
  src="/20260416_Presen案内.png" 
  alt="Presentation Room 案内画像" 
  style={{ width: '100%', height: 'auto', display: 'block' }}
/>

const NewsDetail_20260416: React.FC = () => {
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
          label="RELEASE / 2026.04.16"
          titleTop="想いを動かす、"
          titleGradient="Meece Presentation Room公開。"
          description="当社のビジョン、実績、財務戦略を一つの空間に集約。静止画だけでは伝わらないMeeceの全体像と当事者意識を、動く体験（ワンビュー）として統合いたしました。"
          windowWidth={windowWidth}
        />

        <section style={{ maxWidth: '800px', margin: '0 auto', padding: '0 24px 100px', color: '#374151', lineHeight: 2, fontSize: '16px' }}>
          <p style={{ marginBottom: '40px' }}>
            平素よりMeece株式会社をご愛顧いただき、誠にありがとうございます。
          </p>
          <p style={{ marginBottom: '60px' }}>
            この度、当公式サイト内において、Meeceの想いや事業内容を一つの空間（ルーム）で集約して体験・閲覧いただける新機能「Meece Presentation Room（ミース・プレゼンテーションルーム）」を公開いたしました。
          </p>

          <h2 style={{ fontSize: '24px', fontWeight: 900, color: '#0D1B3E', marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '12px' }}>
            <span style={{ width: '4px', height: '24px', backgroundColor: '#8B5CF6' }}></span>
            1. 当事者以上の当事者意識を、動く体験に
          </h2>
          <p style={{ marginBottom: '60px' }}>
            従来の会社概要やサービスページでは伝えることが難しかった、お客様の事業成功に対する当社の熱量や「当事者以上の当事者意識」。これを、AI駆動型で生成されたインタラクティブなスライド形式のルームに統合しました。
          </p>

          <h2 style={{ fontSize: '24px', fontWeight: 900, color: '#0D1B3E', marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '12px' }}>
            <span style={{ width: '4px', height: '24px', backgroundColor: '#8B5CF6' }}></span>
            2. ビジョン、実績、財務戦略までを「ワンビュー」で
          </h2>
          <p style={{ marginBottom: '80px' }}>
            公開されたルームでは、Meeceの創業のルーツから、AI研究開発ラボでの沈黙の進化、圧倒的な工期削減率（87.5%）を証明する比較データ、そしてIT予算を成長投資へと組み替える財務戦略までを、ページを切り替えずにシームレスに確認いただけます。
          </p>

          {/* 下部アクションエリア */}
          <div style={{ padding: '80px 0 0', borderTop: '1px solid #F3F4F6', marginTop: '60px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '40px' }}>
              <div style={{ width: '64px', height: '64px', borderRadius: '16px', backgroundColor: '#8B5CF6', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Presentation className="text-white" size={32} />
              </div>
              <div>
                <h3 style={{ fontSize: '24px', fontWeight: 900, color: '#0D1B3E', marginBottom: '4px' }}>新しい「動く体験」を、今すぐお試しください</h3>
                <p style={{ fontSize: '15px', color: '#6B7280' }}>ナビゲーションバーの「ABOUT US」をクリックして、Meece Presentation Roomへ。</p>
              </div>
            </div>

            {/* 案内画像エリア（極太ボーダー方式により、絶対にズレない穴あきを実現） */}
            <div style={{ position: 'relative', border: '1px solid #F3F4F6', borderRadius: '24px', overflow: 'hidden', boxShadow: '0 32px 64px -16px rgba(0,0,0,0.05)', marginBottom: '60px' }}>
              <img 
                src={guideImage} 
                alt="Presentation Room 案内画像" 
                style={{ width: '100%', height: 'auto', display: 'block' }}
              />
              
              {/* 案内用の暗幕：ボタンと同じサイズの透明な箱に、画像全体を覆う巨大な枠線をつけて穴を表現 */}
              <div style={{ 
                position: 'absolute', 
                top: '0.9%', 
                right: '23.0%', 
                width: '12%', 
                height: '10%', 
                borderRadius: '12px',
                // 2000pxの巨大な枠線で、ボタンの穴以外をすべて塗りつぶす
                boxShadow: '0 0 0 2000px rgba(0,0,0,0.5)',
                pointerEvents: 'none',
                zIndex: 10
              }} />
              {/* 赤枠点滅アニメーション（ユーザーカスタマイズ値を反映） */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 1, 0.5, 1, 0] }}
                transition={{ duration: 2.5, repeat: Infinity }}
                style={{ 
                  position: 'absolute',
                  top: '0.9%', right: '23.0%',
                  width: '12%', height: '10%',
                  border: '4px solid #F43F5E',
                  borderRadius: '12px',
                  boxShadow: '0 0 20px rgba(244,63,94,0.5)',
                  pointerEvents: 'none'
                }}
              />
              
              {/* マウスポインター（スクロールして表示された時だけアニメーションを実行） */}
              <motion.div
                initial={{ x: 60, y: 60, opacity: 0 }}
                whileInView={{ x: 0, y: 0, opacity: 1 }} // 画面内に入った時の状態
                viewport={{ once: false, amount: 0.5 }} // 何度も実行、半分見えたら開始
                transition={{ 
                  duration: 1.2, 
                  ease: "easeOut",
                  delay: 0.3 // スクロールしてすぐ動くように遅延を短縮
                }}
                style={{ 
                  position: 'absolute', 
                  top: '5.5%', 
                  right: '24.5%', 
                  pointerEvents: 'none',
                  zIndex: 20,
                  // 矢印の縁取りを指定色 #7A7576 で 1px 固定
                  filter: 'drop-shadow(1px 0 0 #7A7576) drop-shadow(-1px 0 0 #7A7576) drop-shadow(0 1px 0 #7A7576) drop-shadow(0 -1px 0 #7A7576)'
                }}
              >
                <MousePointer2 className="text-white" size={24} fill="currentColor" />
              </motion.div>
            </div>

            {/* 最終アクションボタン */}
            <div style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px' }}>
              {windowWidth < 768 ? (
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px' }}>
                  <div 
                    style={{ 
                      display: 'inline-flex', alignItems: 'center', gap: '8px',
                      backgroundColor: '#E2E8F0', color: '#94A3B8', padding: '16px 32px',
                      borderRadius: '16px', fontSize: '15px', fontWeight: 900,
                      cursor: 'not-allowed', width: 'fit-content'
                    }}
                  >
                    Meece Presentation Room を直接試す <ChevronRight size={18} />
                  </div>
                  <p style={{ fontSize: '13px', color: '#F43F5E', fontWeight: 800, backgroundColor: '#FFF1F2', padding: '8px 16px', borderRadius: '8px', border: '1px solid #FECDD3' }}>
                    ※このコンテンツはPCサイズでの閲覧に限定されています。
                  </p>
                </div>
              ) : (
                <a 
                  href="/presentation" 
                  style={{ 
                    display: 'inline-flex', alignItems: 'center', gap: '8px',
                    backgroundColor: '#0D1B3E', color: '#FFFFFF', padding: '16px 32px',
                    borderRadius: '16px', textDecoration: 'none', fontSize: '15px', fontWeight: 900,
                    transition: 'all 0.3s ease',
                    boxShadow: '0 8px 16px rgba(13, 27, 62, 0.1)'
                  }}
                >
                  Meece Presentation Room を直接試す <ChevronRight size={18} />
                </a>
              )}
              
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

export default NewsDetail_20260416;