import React, { useState, useEffect } from 'react';
import { Navbar } from '../components/organisms/Navbar';
import { Footer } from '../components/organisms/Footer';
import { PageHero } from '../components/molecules/PageHero';
import { 
  CheckCircle2, 
  Activity, 
  Zap
} from 'lucide-react';

export const Cases: React.FC = () => {
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div style={{ backgroundColor: '#FFFFFF', minHeight: '100vh', width: '100%', margin: 0, padding: 0, overflowX: 'hidden' }}>
      <Navbar />
      
      <main>
        {/* 1. メインビジュアル (image_8de8b1.jpg を再現) */}
        <PageHero 
          label="支援実績 / 成功事例"
          titleTop="支援事例"
          titleGradient="物語の再始動。"
          description="お客様と共に歩み、確かな成果へと繋げてきた変革の物語。単なるIT導入に留まらない、経営の理想をテクノロジーで具現化した支援の軌跡をご紹介します。"
          windowWidth={windowWidth}
        />

        {/* 2. 成功事例 01：老舗50年のお菓子屋さん (image_8de88f.jpg を再現) */}
        <section style={{ padding: '100px 0', backgroundColor: '#F8F9FB', display: 'flex', justifyContent: 'center' }}>
          <div style={{ maxWidth: '1200px', width: '100%', padding: '0 24px' }}>
            <div style={{ 
              display: 'flex', 
              flexDirection: windowWidth < 1024 ? 'column' : 'row', 
              backgroundColor: '#FFFFFF', 
              borderRadius: '60px', 
              overflow: 'hidden',
              boxShadow: '0 40px 100px rgba(0,0,0,0.05)'
            }}>
              {/* 左側：サイドパネル */}
              <div style={{ 
                width: windowWidth < 1024 ? '100%' : '400px', 
                backgroundColor: '#0D1B3E', 
                padding: '80px 40px', 
                color: '#FFFFFF',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center'
              }}>
                <span style={{ 
                  backgroundColor: 'rgba(0, 251, 255, 0.1)', 
                  color: '#00FBFF', 
                  fontSize: '12px', 
                  fontWeight: 900, 
                  padding: '6px 16px', 
                  borderRadius: '100px', 
                  width: 'fit-content',
                  marginBottom: '40px'
                }}>
                  成功事例 01
                </span>
                <h2 style={{ fontSize: '32px', fontWeight: 900, marginBottom: '16px', lineHeight: 1.3 }}>
                  老舗50年の<br />お菓子屋さん
                </h2>
                <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.5)', marginBottom: '40px', fontWeight: 700 }}>
                  年商5億未満 / IT未導入企業様
                </p>
                <div style={{ backgroundColor: 'rgba(255,255,255,0.05)', padding: '32px', borderRadius: '24px', border: '1px solid rgba(255,255,255,0.1)' }}>
                  <p style={{ fontSize: '12px', color: '#00FBFF', fontWeight: 900, marginBottom: '12px' }}>課題</p>
                  <p style={{ fontSize: '14px', lineHeight: 1.8, color: 'rgba(255,255,255,0.8)' }}>
                    在庫管理ですらエクセルで行っており、IT化が全く進んでいない。50年の知見が属人化し、停滞している状態。
                  </p>
                </div>
              </div>

              {/* 右側：ステップ詳細 */}
              <div style={{ flex: 1, padding: windowWidth < 768 ? '60px 24px' : '80px 60px' }}>
                {[
                  { 
                    step: '1', 
                    title: '財務の「解剖」と投資余力の算出', 
                    desc: 'IT化を急ぐ前に、まずは経営の健康診断を実施。売上、負債、現預金の推移をすべて可視化しました。',
                    highlight: '経営改善による「余剰資産」の計算：来期の収益見込みから、本年度の事業継続に影響を与えず、かつIT投資に回しても問題ない「安全な投資予算」を1円単位で定義しました。'
                  },
                  { 
                    step: '2', 
                    title: 'IT資産の「棚卸し」と優先順位の策定', 
                    desc: '必要なIT化をすべてリストアップ。その中から、会社の運用に最もインパクトを与え、かつ余剰資産内で完結できるものを厳選。',
                    highlight: '戦略的選択：フルスクラッチ開発。50年続く独自の在庫回転ロジックは、既存のSaaSでは対応不可能。将来的な人件費削減を目的とした、独自の在庫管理システムの構築を決定しました。'
                  },
                  { 
                    step: '3', 
                    title: 'AI実装による「超高速・低コスト」開発', 
                    desc: '通常、フルスクラッチ開発には膨大な時間と費用がかかります。MeeceではAI駆動型開発をフル活用し、この障壁を突破しました。',
                    result: '最終的な成果：AIを活用することで開発コストを従来の約40%削減。財務整理で生み出した余剰資産内ですべてを完結させ、現在では人件費の大幅削減と、データに基づいた経営判断を実現しています。'
                  }
                ].map((item, i) => (
                  <div key={i} style={{ display: 'flex', gap: '24px', marginBottom: '60px', position: 'relative' }}>
                    {/* 数字のバッジ */}
                    <div style={{ 
                      width: '32px', height: '32px', borderRadius: '50%', backgroundColor: '#00FBFF', color: '#FFFFFF',
                      display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '14px', fontWeight: 900, flexShrink: 0, zIndex: 1
                    }}>
                      {item.step}
                    </div>
                    {/* 縦のライン */}
                    {i < 2 && <div style={{ position: 'absolute', left: '16px', top: '32px', bottom: '-60px', width: '1px', backgroundColor: '#E5E7EB', zIndex: 0 }}></div>}
                    
                    <div>
                      <h3 style={{ fontSize: '20px', fontWeight: 900, color: '#0D1B3E', marginBottom: '16px' }}>{item.title}</h3>
                      <p style={{ fontSize: '15px', color: '#6B7280', lineHeight: 1.8, marginBottom: '24px' }}>{item.desc}</p>
                      
                      {item.highlight && (
                        <div style={{ backgroundColor: '#F9FAFB', padding: '24px', borderRadius: '16px', borderLeft: '4px solid #00FBFF' }}>
                          <div style={{ display: 'flex', gap: '8px', alignItems: 'center', marginBottom: '8px' }}>
                            <CheckCircle2 size={16} color="#00FBFF" />
                            <span style={{ fontSize: '13px', fontWeight: 800, color: '#0D1B3E' }}>
                              {item.highlight.split('：')[0]}
                            </span>
                          </div>
                          <p style={{ fontSize: '13px', color: '#6B7280', lineHeight: 1.6 }}>{item.highlight.split('：')[1]}</p>
                        </div>
                      )}

                      {item.result && (
                        <div style={{ backgroundColor: '#E6FFFA', padding: '32px', borderRadius: '24px', border: '1px solid #B2F5EA' }}>
                          <div style={{ display: 'flex', gap: '12px', alignItems: 'center', marginBottom: '16px' }}>
                            <div style={{ backgroundColor: '#319795', padding: '8px', borderRadius: '8px' }}>
                              <Zap size={18} color="#FFFFFF" />
                            </div>
                            <span style={{ fontSize: '16px', fontWeight: 900, color: '#0D1B3E' }}>最終的な成果</span>
                          </div>
                          <p style={{ fontSize: '14px', color: '#2C7A7B', fontWeight: 800, lineHeight: 1.8 }}>{item.result}</p>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 3. 成功事例 02：急成長を目指すベンチャー企業 (視認性改善版) */}
        <section style={{ padding: '100px 0', backgroundColor: '#FFFFFF', display: 'flex', justifyContent: 'center' }}>
          <div style={{ maxWidth: '1200px', width: '100%', padding: '0 24px' }}>
            <div style={{ 
              display: 'flex', 
              flexDirection: windowWidth < 1024 ? 'column' : 'row', 
              backgroundColor: '#FFFFFF', 
              borderRadius: '60px', 
              overflow: 'hidden',
              boxShadow: '0 40px 100px rgba(0,0,0,0.05)',
              border: '1px solid #F3F4F6'
            }}>
              {/* 左側：サイドパネル (濃い青色のグラデーションに変更) */}
              <div style={{ 
                width: windowWidth < 1024 ? '100%' : '400px', 
                background: 'linear-gradient(135deg, #3182CE 0%, #005BAC 100%)', 
                padding: '80px 40px', 
                color: '#FFFFFF',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center'
              }}>
                <span style={{ 
                  backgroundColor: 'rgba(255, 255, 255, 0.15)', 
                  color: '#FFFFFF', 
                  fontSize: '12px', 
                  fontWeight: 900, 
                  padding: '6px 16px', 
                  borderRadius: '100px', 
                  width: 'fit-content',
                  marginBottom: '40px',
                  letterSpacing: '0.1em'
                }}>
                  成功事例 02
                </span>
                <h2 style={{ fontSize: '32px', fontWeight: 900, marginBottom: '16px', lineHeight: 1.3 }}>
                  急成長を目指す<br />ベンチャー企業
                </h2>
                <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.7)', marginBottom: '40px', fontWeight: 700 }}>
                  売上立ち上げ前 / 5,000万円調達完了
                </p>
                <div style={{ backgroundColor: 'rgba(255,255,255,0.1)', padding: '32px', borderRadius: '24px', border: '1px solid rgba(255,255,255,0.1)' }}>
                  <p style={{ fontSize: '12px', color: '#00FBFF', fontWeight: 900, marginBottom: '12px' }}>課題</p>
                  <p style={{ fontSize: '14px', lineHeight: 1.8, color: '#FFFFFF' }}>
                    限られた調達資金の中で、PMF（市場適合）を最速で証明するためのプロダクト立ち上げが至上命題。
                  </p>
                </div>
              </div>

              {/* 右側：ステップ詳細 */}
              <div style={{ flex: 1, padding: windowWidth < 768 ? '60px 24px' : '80px 60px' }}>
                {[
                  { 
                    step: '1', 
                    title: '戦略の「削ぎ落とし」とKPI設計', 
                    desc: 'ビジョンは壮大でも、最初の資金でやるべきことは「最小単位の価値証明」です。',
                    highlight: 'マーケティング戦略との連動：プロダクトの目標から逆算し、どのKPIを動かすためにどの程度の出費が必要かを算出。開発に「使いすぎない」ための財務ブレーキを設計しました。'
                  },
                  { 
                    step: '2', 
                    title: 'AI実装プロトタイプによる市場検証', 
                    desc: 'エンジニアを大量に雇う前に、AI駆動開発で「動く最小機能（MVP）」を数週間で構築しました。',
                    highlight: 'フィジビリティテスト：公開したプロトタイプから得られるユーザーの反応をデータ化。本当に求められている機能を見極めるための「最初の戦い」を最速で開始しました。'
                  },
                  { 
                    step: '3', 
                    title: 'アジャイルによる継続的エンハンス', 
                    desc: '一度作って終わりではなく、市場の声を聞きながら機能を徐々に拡張していくフェーズです。',
                    status: '現在の状況：検証結果に基づき、必要な機能のみをアジャイル開発で追加。無駄な開発コストを抑えたことで、浮いた資金をマーケティングへ回すことができ、強力なトラクション（実績）の形成に成功しています。'
                  }
                ].map((item, i) => (
                  <div key={i} style={{ display: 'flex', gap: '24px', marginBottom: '60px', position: 'relative' }}>
                    {/* 数字バッジの色を濃い青に変更 */}
                    <div style={{ 
                      width: '32px', height: '32px', borderRadius: '50%', backgroundColor: '#3182CE', color: '#FFFFFF',
                      display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '14px', fontWeight: 900, flexShrink: 0, zIndex: 1
                    }}>
                      {item.step}
                    </div>
                    {i < 2 && <div style={{ position: 'absolute', left: '16px', top: '32px', bottom: '-60px', width: '1px', backgroundColor: '#E2E8F0', zIndex: 0 }}></div>}
                    
                    <div>
                      <h3 style={{ fontSize: '20px', fontWeight: 900, color: '#0D1B3E', marginBottom: '16px' }}>{item.title}</h3>
                      <p style={{ fontSize: '15px', color: '#6B7280', lineHeight: 1.8, marginBottom: '24px' }}>{item.desc}</p>
                      
                      {item.highlight && (
                        /* 左側のボーダーとチェックアイコンの色を濃い青に変更 */
                        <div style={{ backgroundColor: '#F8FAFC', padding: '24px', borderRadius: '16px', borderLeft: '4px solid #3182CE' }}>
                          <div style={{ display: 'flex', gap: '8px', alignItems: 'center', marginBottom: '8px' }}>
                            <CheckCircle2 size={16} color="#3182CE" />
                            <span style={{ fontSize: '13px', fontWeight: 800, color: '#0D1B3E' }}>
                              {item.highlight.split('：')[0]}
                            </span>
                          </div>
                          <p style={{ fontSize: '13px', color: '#64748B', lineHeight: 1.6 }}>{item.highlight.split('：')[1]}</p>
                        </div>
                      )}

                      {item.status && (
                        <div style={{ backgroundColor: '#F0F9FF', padding: '32px', borderRadius: '24px', border: '1px solid #BAE6FD' }}>
                          <div style={{ display: 'flex', gap: '12px', alignItems: 'center', marginBottom: '16px' }}>
                            <div style={{ backgroundColor: '#3182CE', padding: '8px', borderRadius: '8px' }}>
                              <Activity size={18} color="#FFFFFF" />
                            </div>
                            <span style={{ fontSize: '16px', fontWeight: 900, color: '#0D1B3E' }}>現在の状況</span>
                          </div>
                          <p style={{ fontSize: '14px', color: '#0369A1', fontWeight: 800, lineHeight: 1.8 }}>{item.status}</p>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 4. お問い合わせセクション (UI共通化 / 細部ブラッシュアップ版) */}
        <section style={{ 
          backgroundColor: '#F8F9FB', 
          padding: windowWidth < 768 ? '80px 20px' : '140px 0', 
          width: '100%',
          display: 'flex',
          justifyContent: 'center'
        }}>
          <div style={{ 
            width: '100%',
            maxWidth: '800px',
            backgroundColor: '#FFFFFF',
            borderRadius: '40px',
            padding: windowWidth < 768 ? '40px 20px' : '60px 80px',
            boxShadow: '0 20px 60px rgba(0,0,0,0.05)',
            textAlign: 'center'
          }}>
            <h2 style={{ 
              color: '#0D1B3E', 
              fontSize: '32px', 
              fontWeight: 900, 
              marginBottom: '20px' 
            }}>
              導入・支援のご相談
            </h2>
            {/* 横棒を見出しの直下へ移動 */}
            <div style={{ 
              width: '60px', 
              height: '4px', 
              background: 'linear-gradient(to right, #00FBFF, #9D72FF)', 
              margin: '0 auto 30px', 
              borderRadius: '2px' 
            }}></div>
            <p style={{ color: '#6B7280', fontSize: '14px', marginBottom: '50px', lineHeight: 1.6 }}>
              貴社の課題に合わせた最適な支援プランをご提案いたします。<br />
              まずはお気軽にお悩みをお聞かせください。
            </p>

            <form style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div style={{ 
                display: 'flex', 
                flexDirection: windowWidth < 768 ? 'column' : 'row', 
                gap: '20px' 
              }}>
                <input 
                 type="text" 
                  placeholder="お名前 / 貴社名" 
                  style={{ 
                    flex: 1, 
                    padding: '18px 25px', 
                    borderRadius: '12px', 
                    border: '1px solid #F3F4F6', 
                    backgroundColor: '#F9FAFB',
                    fontSize: '14px',
                    outline: 'none'
                  }} 
                />
                <input 
                  type="email" 
                  placeholder="メールアドレス" 
                  style={{ 
                    flex: 1, 
                    padding: '18px 25px', 
                    borderRadius: '12px', 
                    border: '1px solid #F3F4F6', 
                    backgroundColor: '#F9FAFB',
                    fontSize: '14px',
                    outline: 'none'
                  }} 
                />
              </div>
              <textarea 
                placeholder="例文）老舗お菓子屋さんの事例のような、財務整理からのIT投資予算策定について相談したい。現在の課題は在庫管理の属人化です。" 
                rows={6} 
                style={{ 
                  width: '100%', 
                  padding: '18px 25px', 
                  borderRadius: '12px', 
                  border: '1px solid #F3F4F6', 
                  backgroundColor: '#F9FAFB',
                  fontSize: '14px',
                  outline: 'none',
                  resize: 'none',
                  boxSizing: 'border-box'
                }} 
              />
              
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', justifyContent: 'center', marginTop: '10px' }}>
                <input type="checkbox" id="confirm-cases" style={{ width: '16px', height: '16px' }} />
                <label htmlFor="confirm-cases" style={{ fontSize: '12px', color: '#9CA3AF', cursor: 'pointer' }}>
                  入力内容に間違いがないか確認しました
                </label>
              </div>

              <a 
                href="mailto:contact@meece.co.jp?subject=支援導入のご相談（事例ページより）"
                onMouseEnter={(e) => {
                  e.currentTarget.style.opacity = '0.9';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.opacity = '1';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
                style={{ 
                  marginTop: '20px',
                  padding: '18px',
                  borderRadius: '12px',
                  background: 'linear-gradient(to right, #00FBFF, #9D72FF)',
                  color: '#FFFFFF',
                  fontSize: '15px',
                  fontWeight: 'bold',
                  textDecoration: 'none',
                  display: 'block',
                  textAlign: 'center',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 10px 20px rgba(0, 251, 255, 0.2)'
                }}
              >
                支援の相談を申し込む
              </a>
            </form>
          </div>
        </section>

        {/* 共通フッターの呼び出し */}
        <Footer />
      </main>
    </div>
 );
}