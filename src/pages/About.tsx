import React, { useState, useEffect } from 'react';
import { Navbar } from '../components/organisms/Navbar';
import { Footer } from '../components/organisms/Footer';
import { PageHero } from '../components/molecules/PageHero'; // PageHeroを読み込む
// 下記の行を追加してアイコンを使えるようにします
import { Factory, GraduationCap, Clapperboard, ShoppingCart, Zap, Heart, Building2 } from 'lucide-react';

export const About: React.FC = () => {
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div style={{ backgroundColor: '#FFFFFF', minHeight: '100vh', width: '100%', overflowX: 'hidden' }}>
      <Navbar />
      
      <main>
        {/* 共通のメインビジュアル部品を呼び出し */}
        <PageHero 
          label="ABOUT / 私たちのこと"
          titleTop="すべての産業を、"
          titleGradient="ITの最適解でつなぐ。"
          description="Meece株式会社は、高度な技術力と多角的な視点で、社会全体のデジタルトランスフォーメーションを最適化するプロフェッショナル集団です。"
          windowWidth={windowWidth}
        />

        {/* 画像2枚目：社名の由来（アシンメトリー・ダイナミックレイアウト） */}
        <section style={{ 
          backgroundColor: '#FFFFFF',
          padding: windowWidth < 768 ? '100px 20px' : '160px 0',
          width: '100%'
        }}>
          <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 60px' }}>
            
            {/* 上部：左に特大タイトル、右にリード文を配置 */}
            <div style={{ 
              display: 'flex', 
              flexDirection: windowWidth < 1024 ? 'column' : 'row',
              justifyContent: 'space-between',
              alignItems: 'flex-start',
              marginBottom: '120px',
              gap: '40px'
            }}>
              <div style={{ flex: '1.2' }}>
                <p style={{ color: '#319795', fontSize: '14px', fontWeight: 900, letterSpacing: '0.4em', marginBottom: '32px' }}>ORIGIN OF MEECE</p>
                <h2 style={{ 
                  fontSize: 'clamp(48px, 6vw, 84px)', 
                  fontWeight: 900, 
                  color: '#0D1B3E', 
                  lineHeight: 1.05,
                  letterSpacing: '-0.03em'
                }}>
                  Meeceが支える、<br />
                  <span style={{ color: '#E2E8F0' }}>5つの物語。</span>
                </h2>
                {/* タイトルの重みを支える土台ライン */}
                <div style={{ 
                  width: '100px', 
                  height: '8px', 
                  background: 'linear-gradient(to right, #00FBFF, #9D72FF)', 
                  marginTop: '50px',
                  borderRadius: '4px'
                }}></div>
              </div>
              
              <div style={{ flex: '0.8', maxWidth: '500px', paddingTop: windowWidth < 1024 ? '0' : '80px' }}>
                <p style={{ color: '#6B7280', fontSize: '20px', lineHeight: 2, fontWeight: 500 }}>
                  私たちの社名は、主要な5つの産業ドメインの頭文字から生まれています。
                </p>
              </div>
            </div>

            {/* 下部：ゆったりとした空間の5つのカード */}
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: windowWidth < 768 ? '1fr' : windowWidth < 1200 ? 'repeat(3, 1fr)' : 'repeat(5, 1fr)', 
              gap: '30px' 
            }}>
              {[
                { label: 'M', title: 'Manufacturing', color: '#3182CE', desc: '製造・ものづくり。日本の根幹を成す産業をデジタルで支えます。' },
                { label: 'E', title: 'Education', color: '#319795', desc: '教育・学習支援。次世代の学びをITの力でアップデートします。' },
                { label: 'E', title: 'Entertainment', color: '#805AD5', desc: '娯楽。人々の心を動かす新しい体験と感動をテクノロジーで創出。' },
                { label: 'C', title: 'Commerce', color: '#D53F8C', desc: '商業・流通。モノと人が繋がる仕組みをよりスマートに。' },
                { label: 'E', title: 'Energy & Life', color: '#E53E3E', desc: 'エネルギー・生活。日常という物語を、持続可能なITで完結。' }
              ].map((item, idx) => (
                <div key={idx} style={{ 
                  backgroundColor: '#F8F9FB', 
                  borderRadius: '48px', 
                  padding: '60px 40px',
                  position: 'relative',
                  overflow: 'hidden',
                  minHeight: '360px',
                  transition: 'all 0.4s ease'
                }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#FFFFFF'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#F8F9FB'}
                >
                  <div style={{ position: 'relative', zIndex: 1 }}>
                    <div style={{ 
                      width: '64px', height: '64px', borderRadius: '20px', 
                      backgroundColor: '#FFFFFF', 
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      marginBottom: '45px', color: item.color, fontWeight: 900,
                      fontSize: '24px',
                      boxShadow: '0 10px 30px rgba(0,0,0,0.05)'
                    }}>
                      {item.label}
                    </div>
                    <h3 style={{ fontSize: '22px', fontWeight: 900, color: '#0D1B3E', marginBottom: '20px' }}>{item.title}</h3>
                    <p style={{ fontSize: '15px', color: '#718096', lineHeight: 1.8 }}>{item.desc}</p>
                  </div>
                  
                  {/* 背面の巨大な文字装飾：さらに薄く、大きく */}
                  <div style={{ 
                    position: 'absolute', right: '-20px', bottom: '-30px', 
                    fontSize: '180px', fontWeight: 900, color: '#FFFFFF', zIndex: 0,
                    opacity: 0.7
                  }}>{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 画像（image_034b49.jpg）を反映したスローガン＆産業サポートセクション */}
        <section style={{ 
          backgroundColor: '#FFFFFF',
          padding: windowWidth < 768 ? '80px 20px' : '120px 0',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}>
          {/* 上部：スローガンパネル */}
          <div style={{ 
            maxWidth: '1000px', 
            width: '100%',
            backgroundColor: '#0D1B3E',
            borderRadius: '60px',
            padding: windowWidth < 768 ? '60px 30px' : '100px 80px',
            position: 'relative',
            overflow: 'hidden',
            boxShadow: '0 40px 80px rgba(13, 27, 62, 0.2)',
            marginBottom: '100px'
          }}>
            {/* 背景の巨大透過文字 "Slogan" */}
            <div style={{ 
              position: 'absolute', 
              top: '10%', 
              right: '-5%', 
              fontSize: 'clamp(120px, 15vw, 240px)', 
              fontWeight: 900, 
              color: 'rgba(255, 255, 255, 0.03)', 
              zIndex: 0,
              fontStyle: 'italic'
            }}>
              Slogan
            </div>

            <div style={{ position: 'relative', zIndex: 1 }}>
              <p style={{ color: '#4A90E2', fontSize: '13px', fontWeight: 900, letterSpacing: '0.2em', marginBottom: '32px' }}>
                ビジネススローガン
              </p>
              
              <h2 style={{ 
                fontSize: 'clamp(32px, 5vw, 68px)', 
                fontWeight: 900, 
                color: '#FFFFFF', 
                lineHeight: 1.2,
                marginBottom: '40px',
                letterSpacing: '-0.02em'
              }}>
                必要なときに、<br />
                必要な規模で、<br />
                <span style={{ 
                  background: 'linear-gradient(to right, #00FBFF, #9D72FF, #FF5BAE)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}>
                  最適な一手を。
                </span>
              </h2>

              <div style={{ width: '60px', height: '4px', backgroundColor: '#007AFF', marginBottom: '48px' }}></div>

              <p style={{ 
                color: 'rgba(255, 255, 255, 0.7)', 
                fontSize: 'clamp(15px, 1.8vw, 18px)', 
                lineHeight: 2,
                maxWidth: '600px'
              }}>
                私たちは、特定の技術や手法に固執しません。<br />
                お客様のビジネスフェーズと課題に真摯に向き合い、その瞬間に最も価値を発揮する解決策をデザインし、実行します。
              </p>
            </div>
          </div>

          {/* 下部：あらゆる産業をサポート（Lucideアイコンを使用したプロ版） */}
          <div style={{ textAlign: 'center', width: '100%', maxWidth: '1200px' }}>
            <p style={{ color: '#9CA3AF', fontSize: '11px', fontWeight: 800, letterSpacing: '0.2em', marginBottom: '60px' }}>
              あらゆる産業をサポート
            </p>
            
            <div style={{ 
              display: 'flex', 
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: windowWidth < 768 ? '32px 16px' : '40px 60px',
              padding: '0 20px'
            }}>
              {[
                { label: '製造', icon: <Factory size={32} strokeWidth={2} />, color: '#3182CE' },
                { label: '教育', icon: <GraduationCap size={32} strokeWidth={2} />, color: '#319795' },
                { label: 'エンターテインメント', icon: <Clapperboard size={32} strokeWidth={2} />, color: '#805AD5' },
                { label: '小売・コマース', icon: <ShoppingCart size={32} strokeWidth={2} />, color: '#D53F8C' },
                { label: 'エネルギー', icon: <Zap size={32} strokeWidth={2} />, color: '#ECC94B' }, // 視認性の高い黄色に変更
                { label: 'ヘルスケア', icon: <Heart size={32} strokeWidth={2} />, color: '#E53E3E' }, // 情熱の赤に変更
                { label: '不動産', icon: <Building2 size={32} strokeWidth={2} />, color: '#48BB78' }
              ].map((industry, idx) => (
                <div key={idx} style={{ 
                  display: 'flex', 
                  flexDirection: 'column', 
                  alignItems: 'center', 
                  gap: '16px',
                  width: windowWidth < 768 ? 'calc(50% - 16px)' : 'auto',
                  minWidth: '100px'
                }}>
                  <div style={{ 
                    color: industry.color, // 指定した鮮やかな色を直接適用
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'transform 0.3s ease',
                  }}>
                    {industry.icon}
                  </div>
                  <span style={{ 
                    fontSize: '11px', 
                    fontWeight: 800, 
                    color: '#0D1B3E', 
                    whiteSpace: 'nowrap',
                    letterSpacing: '0.05em'
                  }}>
                    {industry.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 画像4枚目：Meeceの戦略（STRATEGY）刷新版 */}
        <section style={{ 
          backgroundColor: '#FFFFFF',
          padding: windowWidth < 768 ? '100px 20px' : '160px 40px',
          textAlign: 'center'
        }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <p style={{ color: '#319795', fontSize: '12px', fontWeight: 900, letterSpacing: '0.4em', marginBottom: '24px' }}>最適化のプロセス</p>
            <h2 style={{ fontSize: 'clamp(32px, 5vw, 52px)', fontWeight: 900, color: '#0D1B3E', marginBottom: '32px', lineHeight: 1.2 }}>
              あらゆる産業に、<br />フェーズ毎の最適解を。
            </h2>
            <div style={{ width: '60px', height: '4px', background: 'linear-gradient(to right, #00FBFF, #9D72FF)', margin: '0 auto 40px', borderRadius: '2px' }}></div>
            <p style={{ color: '#6B7280', fontSize: '16px', lineHeight: 1.8, marginBottom: '80px', maxWidth: '800px', margin: '0 auto 80px' }}>
              スタートアップからエンタープライズまで。Meeceは「今」必要なリソースとインフラを、図解のように過不足なく提供します。
            </p>

            {/* 戦略図解：元デザインを完全再現 */}
            <div style={{ 
              backgroundColor: '#FFFFFF', 
              borderRadius: '40px', 
              padding: windowWidth < 768 ? '60px 20px' : '100px 40px',
              boxShadow: '0 30px 90px rgba(0,0,0,0.03)',
              border: '1px solid #F3F4F6',
              position: 'relative',
              overflow: 'hidden',
              marginTop: '60px'
            }}>
              {/* 背面の大きな円形装飾ライン */}
              <div style={{ 
                position: 'absolute', top: '40%', left: '50%', transform: 'translate(-50%, -50%)',
                width: '600px', height: '600px', borderRadius: '50%', border: '1px solid #F1F5F9', zIndex: 0
              }}></div>

              <div style={{ position: 'relative', zIndex: 1 }}>
                <h3 style={{ fontSize: '24px', fontWeight: 900, color: '#0D1B3E', marginBottom: '10px' }}>最適なスケール拡張モデル</h3>
                <p style={{ fontSize: '14px', color: '#9CA3AF', marginBottom: '80px' }}>フェーズに連動する最適なITインフラ拡大図</p>

                <div style={{ 
                  display: 'flex', 
                  flexDirection: windowWidth < 768 ? 'column' : 'row', 
                  justifyContent: 'center', 
                  alignItems: 'center', 
                  gap: windowWidth < 768 ? '60px' : '120px',
                  marginBottom: '100px'
                }}>
                  {[
                    { phase: 'フェーズ01', title: '創業・MVP', icon: '⚡', color: '#3182CE' },
                    { phase: 'フェーズ02', title: '成長・PMF', icon: '📈', color: '#319795' },
                    { phase: 'フェーズ03', title: '統合・グローバル', icon: '🛡️', color: '#805AD5' }
                  ].map((item, i) => (
                    <div key={i} style={{ textAlign: 'center' }}>
                      <div style={{ 
                        width: '70px', height: '70px', borderRadius: '20px', 
                        backgroundColor: item.color, color: '#FFFFFF',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        fontSize: '28px', margin: '0 auto 20px',
                        boxShadow: `0 15px 30px ${item.color}44`,
                        transition: 'transform 0.3s ease'
                      }}>
                        {item.icon}
                      </div>
                      <p style={{ fontSize: '11px', color: item.color, fontWeight: 800, marginBottom: '8px' }}>{item.phase}</p>
                      <h4 style={{ fontSize: '17px', fontWeight: 900, color: '#0D1B3E' }}>{item.title}</h4>
                    </div>
                  ))}
                </div>

                {/* 中央の太いグラデーション矢印：画像image_647555.jpgの通りに実装 */}
                <div style={{ maxWidth: '800px', margin: '0 auto', position: 'relative' }}>
                  <div style={{ 
                    display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '15px', marginBottom: '15px' 
                  }}>
                    <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#00FBFF' }}></div>
                    <span style={{ fontSize: '28px', fontWeight: 900, color: '#0D1B3E', letterSpacing: '0.1em' }}>時間と事業規模の拡大</span>
                    <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#9D72FF' }}></div>
                  </div>
                  
                  {/* グラデーション矢印本体 */}
                  <div style={{ 
                    width: '100%', height: '14px', 
                    background: 'linear-gradient(to right, #00FBFF, #3182CE, #9D72FF)', 
                    borderRadius: '7px', position: 'relative' 
                  }}>
                    <div style={{ 
                      position: 'absolute', right: '-5px', top: '50%', transform: 'translateY(-50%)',
                      width: '0', height: '0', 
                      borderTop: '12px solid transparent', borderBottom: '12px solid transparent',
                      borderLeft: '20px solid #9D72FF'
                    }}></div>
                  </div>
                </div>
              </div>

              {/* 下部の詳細テキスト（3カラム） */}
              <div style={{ 
                display: 'grid', 
                gridTemplateColumns: windowWidth < 768 ? '1fr' : 'repeat(3, 1fr)', 
                gap: '40px', 
                marginTop: '80px',
                textAlign: 'left'
              }}>
                <div>
                  <p style={{ color: '#319795', fontSize: '10px', fontWeight: 900, marginBottom: '12px' }}>戦略 01</p>
                  <h5 style={{ fontSize: '16px', fontWeight: 900, color: '#0D1B3E', marginBottom: '12px' }}>過不足のないリソース</h5>
                  <p style={{ fontSize: '12px', color: '#9CA3AF', lineHeight: 1.6 }}>初期投資の肥大化を防ぎ、売上成長に同期したITコストを実現。</p>
                </div>
                <div>
                  <p style={{ color: '#319795', fontSize: '10px', fontWeight: 900, marginBottom: '12px' }}>タイミング 02</p>
                  <h5 style={{ fontSize: '16px', fontWeight: 900, color: '#0D1B3E', marginBottom: '12px' }}>機動的な拡張</h5>
                  <p style={{ fontSize: '12px', color: '#9CA3AF', lineHeight: 1.6 }}>需要の急増や事業ピボットに合わせ、即座にインフラ規模を最適化。</p>
                </div>
                <div>
                  <p style={{ color: '#319795', fontSize: '10px', fontWeight: 900, marginBottom: '12px' }}>将来性 03</p>
                  <h5 style={{ fontSize: '16px', fontWeight: 900, color: '#0D1B3E', marginBottom: '12px' }}>持続可能なコア</h5>
                  <p style={{ fontSize: '12px', color: '#9CA3AF', lineHeight: 1.6 }}>将来の大規模展開を見越したアーキテクチャで、手戻りのない成長を。</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 画像のUI（image_034f6b.jpg）を反映したSERVICESセクション */}
        <section style={{ 
          backgroundColor: '#0D1B3E', // 画像背景に合わせた濃い紺色
          padding: windowWidth < 768 ? '100px 20px' : '160px 40px',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          position: 'relative',
          overflow: 'hidden'
        }}>
          {/* 背景の装飾的な薄い曲線（画像イメージを表現） */}
          <div style={{ 
            position: 'absolute', width: '150%', height: '100%', 
            top: '20%', left: '-25%', border: '1px solid rgba(0, 251, 255, 0.05)',
            borderRadius: '50%', pointerEvents: 'none'
          }}></div>

          <div style={{ maxWidth: '1200px', width: '100%', position: 'relative', zIndex: 1 }}>
            
            {/* 3つのコア・コンポーネントをループで表示 */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '80px' }}>
              {[
                { 
                  category: '私たちの理念',
                  title: '「綺麗事」で終わらせない。',
                  subtitle: '現場主義のコンサル。',
                  lead: 'レポートを提出して終わり、というコンサルティングは行いません。',
                  highlight: '開発現場を熟知しているMeeceだからこそ、技術的な実現可能性（フィジビリティ）を担保した、真に機能する戦略のみを提案します。',
                  subCards: [
                    { label: '中立的な視点', text: '特定のツールに依存せず、ビジネスの成功に最も寄与する選択肢をフラットに提示します。' },
                    { label: '投資対効果の最大化', text: '過剰な投資を避け、まずは最小限の構成でスタート。無駄のない投資効率を追求します。' }
                  ],
                  bgText: '理念'
                },
                { 
                  category: '私たちの技術',
                  title: '「速さ」と「品質」の両立。',
                  subtitle: '妥協なき開発。',
                  lead: 'ただ作るのではなく、保守性と拡張性を備えたコードを。',
                  highlight: 'モダンな技術スタック（React/TypeScript/Next.js）を標準採用し、リリース後の運用負荷を最小限に抑える高品質なプロダクトを提供します。',
                  subCards: [
                    { label: '高速プロトタイピング', text: 'AIを活用した開発フローにより、アイデアを即座に形にするスピード感を提供。' },
                    { label: 'セキュリティ・バイ・デザイン', text: '設計段階からセキュリティを考慮し、堅牢なシステムを構築します。' }
                  ],
                  bgText: '技術'
                },
                { 
                  category: '私たちの伴走',
                  title: '「自走」するまで、支え抜く。',
                  subtitle: '組織のDX支援。',
                  lead: 'ツールの導入は始まりに過ぎません。',
                  highlight: '貴社メンバーが技術を習得し、自立して開発・改善を回せるようになるまで、ドキュメント化や教育を含めた多角的なサポートを行います。',
                  subCards: [
                    { label: '内製化支援', text: '開発チームの立ち上げから教育まで、現場レベルで並走します。' },
                    { label: '継続的な改善', text: 'リリース後のデータ解析やUI/UX改善も、一貫してサポート。' }
                  ],
                  bgText: '伴走'
                }
              ].map((core, i) => (
                <div key={i} style={{ 
                  backgroundColor: '#FFFFFF',
                  borderRadius: '60px',
                  padding: windowWidth < 768 ? '40px 24px' : '80px 100px',
                  position: 'relative',
                  overflow: 'hidden',
                  boxShadow: '0 40px 100px rgba(0,0,0,0.2)'
                }}>
                  {/* 背景の巨大な透過文字 */}
                  <div style={{ 
                    position: 'absolute', top: '-20px', right: '40px', fontSize: '180px', 
                    fontWeight: 900, color: '#F1F5F9', opacity: 0.5, zIndex: 0,
                    whiteSpace: 'nowrap'
                  }}>
                    {core.bgText}
                  </div>

                  <div style={{ position: 'relative', zIndex: 1 }}>
                    <p style={{ color: '#007AFF', fontSize: '12px', fontWeight: 900, letterSpacing: '0.2em', marginBottom: '32px' }}>
                      {core.category}
                    </p>
                    
                    <h3 style={{ 
                      fontSize: 'clamp(28px, 4vw, 48px)', 
                      fontWeight: 900, 
                      color: '#0D1B3E', 
                      lineHeight: 1.2,
                      marginBottom: '40px'
                    }}>
                      {core.title}<br />
                      <span style={{ 
                        background: 'linear-gradient(to right, #00FBFF, #9D72FF, #FF5BAE)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent'
                      }}>
                        {core.subtitle}
                      </span>
                    </h3>

                    <p style={{ color: '#6B7280', fontSize: '16px', marginBottom: '32px' }}>
                      {core.lead}
                    </p>

                    <div style={{ 
                      borderLeft: '3px solid #007AFF', 
                      paddingLeft: '24px', 
                      marginBottom: '60px',
                      maxWidth: '800px'
                    }}>
                      <p style={{ color: '#0D1B3E', fontSize: '16px', fontWeight: 700, lineHeight: 1.8 }}>
                        {core.highlight}
                      </p>
                    </div>

                    {/* 下部の2カラムサブカード */}
                    <div style={{ 
                      display: 'grid', 
                      gridTemplateColumns: windowWidth < 768 ? '1fr' : 'repeat(2, 1fr)', 
                      gap: '24px'
                    }}>
                      {core.subCards.map((sub, j) => (
                        <div key={j} style={{ 
                          backgroundColor: '#F8F9FB', 
                          padding: '32px', 
                          borderRadius: '24px'
                        }}>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                            <div style={{ width: '3px', height: '16px', backgroundColor: '#007AFF' }}></div>
                            <h4 style={{ color: '#0D1B3E', fontSize: '15px', fontWeight: 800 }}>{sub.label}</h4>
                          </div>
                          <p style={{ color: '#6B7280', fontSize: '13px', lineHeight: 1.8 }}>{sub.text}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      {/* 共通フッターの呼び出し */}
        <Footer />
      </main>
    </div>
 );
}