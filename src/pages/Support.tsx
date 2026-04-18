import React, { useState, useEffect } from 'react';
import { Navbar } from '../components/organisms/Navbar';
import { Footer } from '../components/organisms/Footer';
import { PageHero } from '../components/molecules/PageHero';
import { 
  TrendingUp, 
  UserPlus, 
  Coins, 
  Rocket, 
  ShieldCheck, 
  Zap, 
  ArrowRight, 
  CheckCircle2, 
  BarChart3,
  HeartHandshake
} from 'lucide-react';

export const Support: React.FC = () => {
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
        {/* 1. メインビジュアル (image_9bf889.jpg を再現) */}
        <PageHero 
          label="サービス / 多角的事業支援"
          titleTop="戦略を、"
          titleGradient="成功の確信に変える。"
          description="優れたプロダクトがあるだけでは、物語は完成しません。マーケティング、採用、組織設計。私たちは技術の枠を超え、事業を実らせるためのあらゆるピースを共に埋めるパートナーです。"
          windowWidth={windowWidth}
        />

        {/* 2. 支援領域 (image_9bf5e0.jpg を再現) */}
        <section style={{ padding: '100px 0', backgroundColor: '#FFFFFF', display: 'flex', justifyContent: 'center' }}>
          <div style={{ maxWidth: '1200px', width: '100%', padding: '0 24px' }}>
            <div style={{ textAlign: 'center', marginBottom: '80px' }}>
              <p style={{ color: '#007AFF', fontSize: '12px', fontWeight: 900, letterSpacing: '0.2em', marginBottom: '16px' }}>支援領域</p>
              <h2 style={{ fontSize: '42px', fontWeight: 900, color: '#0D1B3E', marginBottom: '24px' }}>全方位からの事業加速</h2>
              <div style={{ width: '60px', height: '4px', background: 'linear-gradient(to right, #00FBFF, #007AFF)', margin: '0 auto' }}></div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: windowWidth < 768 ? '1fr' : 'repeat(4, 1fr)', gap: '24px' }}>
              {[
                { title: 'マーケティング', desc: '認知獲得からリード獲得、CRM設計まで。データに基づいた戦略で、プロダクトを市場へ浸透させます。', icon: <TrendingUp size={24} color="#00FBFF" />, bg: '#E6FFFA' },
                { title: '人事・採用支援', desc: '事業フェーズに最適な採用戦略と評価制度を構築。強い組織文化の醸成をサポートします。', icon: <UserPlus size={24} color="#007AFF" />, bg: '#EBF4FF' },
                { title: '資金調達支援', desc: 'ピッチ資料の監修から、助成金・補助金の選定活用まで。成長を支える資金繰りの最適解を提案します。', icon: <Coins size={24} color="#F6AD55" />, bg: '#FFFBEB' },
                { title: '新規事業開発', desc: 'アライアンス先との橋渡しや、新規事業のマネタイズ設計。ビジネスモデル自体を強くアップデートします。', icon: <Rocket size={24} color="#9D72FF" />, bg: '#F5F3FF' },
              ].map((item, i) => (
                <div key={i} style={{ padding: '48px 32px', borderRadius: '32px', border: '1px solid #F3F4F6', backgroundColor: '#FFFFFF', textAlign: 'left' }}>
                  <div style={{ width: '56px', height: '56px', borderRadius: '16px', backgroundColor: item.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '32px' }}>
                    {item.icon}
                  </div>
                  <h3 style={{ fontSize: '18px', fontWeight: 900, color: '#0D1B3E', marginBottom: '16px' }}>{item.title}</h3>
                  <p style={{ fontSize: '13px', color: '#6B7280', lineHeight: 1.8 }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 3. 支援ポリシー (image_9bf5c3.jpg を再現) */}
        <section style={{ padding: '120px 0', backgroundColor: '#F8F9FB', display: 'flex', justifyContent: 'center' }}>
          <div style={{ maxWidth: '1200px', width: '100%', padding: '0 24px', display: 'flex', flexDirection: windowWidth < 1024 ? 'column' : 'row', gap: '60px', alignItems: 'center' }}>
            <div style={{ flex: 1 }}>
              <p style={{ color: '#007AFF', fontSize: '12px', fontWeight: 900, letterSpacing: '0.2em', marginBottom: '16px' }}>支援ポリシー</p>
              <h2 style={{ fontSize: '48px', fontWeight: 900, color: '#0D1B3E', marginBottom: '32px', lineHeight: 1.2 }}>
                当事者以上の、<br />
                <span style={{ background: 'linear-gradient(to right, #00FBFF, #9D72FF, #FF5BAE)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                  当事者意識を持つこと。
                </span>
              </h2>
              <div style={{ width: '60px', height: '4px', background: '#007AFF', marginBottom: '40px' }}></div>
              <p style={{ color: '#6B7280', fontSize: '16px', lineHeight: 2, marginBottom: '40px' }}>
                私たちは「外部アドバイザー」という安全な場所に留まりません。クライアント企業の課題を自社の痛みとして捉え、共に汗をかき、泥臭く現場の最前線に入り込むことを約束します。
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <div style={{ width: '56px', height: '56px', borderRadius: '50%', border: '1px solid #00FBFF', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <HeartHandshake color="#00FBFF" size={24} />
                </div>
                <p style={{ fontSize: '15px', fontWeight: 800, color: '#0D1B3E' }}>机上の空論ではない、現場で生きる解決策を。</p>
              </div>
            </div>
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '24px', width: '100%' }}>
              <div style={{ backgroundColor: '#FFFFFF', padding: '40px', borderRadius: '32px', boxShadow: '0 20px 40px rgba(0,0,0,0.03)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '20px' }}>
                  <ShieldCheck color="#00FBFF" size={24} />
                  <h4 style={{ fontSize: '18px', fontWeight: 900, color: '#0D1B3E' }}>超現場主義の伴走</h4>
                </div>
                <p style={{ fontSize: '14px', color: '#6B7280', lineHeight: 1.8 }}>Slack等のチャットツールへの参加はもちろん、定例MTG以外でも随時相談可能な「最も近い相談相手」であり続けます。</p>
              </div>
              <div style={{ backgroundColor: '#FFFFFF', padding: '40px', borderRadius: '32px', boxShadow: '0 20px 40px rgba(0,0,0,0.03)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '20px' }}>
                  <Zap color="#007AFF" size={24} />
                  <h4 style={{ fontSize: '18px', fontWeight: 900, color: '#0D1B3E' }}>スピード重視の仮説検証</h4>
                </div>
                <p style={{ fontSize: '14px', color: '#6B7280', lineHeight: 1.8 }}>重厚な調査よりも「まずは小さく試す」ことを優先。実体験から得た知見を元に、次の打ち手を最速で導き出します。</p>
              </div>
            </div>
          </div>
        </section>

        {/* 4. 変革のフロー (image_9bf5a5.jpg を再現) */}
        <section style={{ padding: '140px 0', backgroundColor: '#FFFFFF', display: 'flex', justifyContent: 'center' }}>
          <div style={{ maxWidth: '1200px', width: '100%', padding: '0 24px' }}>
            <div style={{ textAlign: 'center', marginBottom: '80px' }}>
              <p style={{ color: '#007AFF', fontSize: '12px', fontWeight: 900, letterSpacing: '0.2em', marginBottom: '16px' }}>変革のフロー</p>
              <h2 style={{ fontSize: '42px', fontWeight: 900, color: '#0D1B3E', marginBottom: '24px' }}>経営の健全化から、盤石なIT導入へ</h2>
              <div style={{ width: '60px', height: '4px', background: 'linear-gradient(to right, #00FBFF, #007AFF)', margin: '0 auto 40px' }}></div>
              <p style={{ color: '#6B7280', fontSize: '15px', maxWidth: '700px', margin: '0 auto', lineHeight: 1.8 }}>
                私たちは、ただツールを導入して終わることはしません。まずはビジネスモデルとマーケティングの「歪み」を正し、確かな予算と勝算を確保した上で、ITという強力な歯車を回します。
              </p>
            </div>

            <div style={{ display: 'flex', flexDirection: windowWidth < 1024 ? 'column' : 'row', gap: '20px', alignItems: 'stretch' }}>
              {[
                { step: '01', title: '売上・利益の最適化', desc: 'まずは「物語」自体の矛盾を解消します。収益構造の改善やマーケティング戦略の再構築を行い、事業のキャッシュフローを安定させます。', details: ['現状のボトルネック特定', 'マーケティングの最適化'] },
                { step: '02', title: '予算の最適化・確保', desc: 'IT投資を「コスト」ではなく「攻めの投資」にするための経営コンサルを実施。補助金の活用やコストカットにより、必要なIT予算を戦略的に捻出します。', details: ['ROI (投資対効果) 算出', '補助金・助成金申請支援'], active: true },
                { step: '03', title: '最適なIT実装', desc: '土台が整ったところで、初めて最適なシステムを導入します。高額すぎるソフトの回避や、実務に真に必要なカスタム開発により、物語を完成に導きます。', details: ['業務フローに合うシステム選定', '自社チームによる高度な実装'] },
              ].map((item, i) => (
                <React.Fragment key={i}>
                  <div style={{ 
                    flex: 1, backgroundColor: '#FFFFFF', padding: '60px 40px', borderRadius: '40px', 
                    border: item.active ? '2px solid #F6AD55' : '1px solid #F3F4F6',
                    boxShadow: item.active ? '0 20px 60px rgba(246, 173, 85, 0.1)' : 'none'
                  }}>
                    <span style={{ color: '#00FBFF', fontSize: '14px', fontWeight: 900, marginBottom: '24px', display: 'block' }}>{item.step}</span>
                    <h3 style={{ fontSize: '22px', fontWeight: 900, color: '#0D1B3E', marginBottom: '24px' }}>{item.title}</h3>
                    <p style={{ fontSize: '14px', color: '#6B7280', lineHeight: 1.8, marginBottom: '32px' }}>{item.desc}</p>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                      {item.details.map(detail => (
                        <div key={detail} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                          <CheckCircle2 size={16} color={item.active ? '#F6AD55' : '#00FBFF'} />
                          <span style={{ fontSize: '12px', fontWeight: 700, color: '#0D1B3E' }}>{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  {i < 2 && windowWidth >= 1024 && (
                    <div style={{ display: 'flex', alignItems: 'center', color: '#E5E7EB' }}><ArrowRight /></div>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </section>

        {/* 5. 財務戦略 (image_9bf584.jpg を再現) */}
        <section style={{ padding: '140px 0', backgroundColor: '#F8F9FB', display: 'flex', justifyContent: 'center' }}>
          <div style={{ maxWidth: '1200px', width: '100%', padding: '0 24px' }}>
            <div style={{ textAlign: 'center', marginBottom: '80px' }}>
              <p style={{ color: '#007AFF', fontSize: '12px', fontWeight: 900, letterSpacing: '0.2em', marginBottom: '16px' }}>財務戦略</p>
              <h2 style={{ fontSize: '48px', fontWeight: 900, color: '#0D1B3E', marginBottom: '24px' }}>
                予算を「消費」から<br />
                <span style={{ background: 'linear-gradient(to right, #00FBFF, #007AFF, #9D72FF)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                  「投資」へと変える。
                </span>
              </h2>
              <div style={{ width: '60px', height: '4px', background: '#007AFF', margin: '0 auto' }}></div>
            </div>

            <div style={{ display: 'flex', flexDirection: windowWidth < 1024 ? 'column' : 'row', gap: '60px', alignItems: 'center' }}>
              {/* グラフイメージ部分 */}
              <div style={{ flex: 1.2, backgroundColor: '#FFFFFF', borderRadius: '40px', padding: '60px', boxShadow: '0 30px 60px rgba(0,0,0,0.03)', width: '100%' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '40px' }}>
                  <BarChart3 size={20} color="#00FBFF" />
                  <span style={{ fontSize: '14px', fontWeight: 900, color: '#0D1B3E' }}>IT投資による収益シミュレーション</span>
                </div>
                <div style={{ display: 'flex', gap: '20px', alignItems: 'flex-end', height: '240px', paddingBottom: '40px', borderBottom: '1px solid #F3F4F6' }}>
                  <div style={{ flex: 1, textAlign: 'center' }}>
                    <div style={{ height: '60px', backgroundColor: '#00C9A7', borderRadius: '8px 8px 0 0' }}></div>
                    <div style={{ height: '100px', backgroundColor: '#FF8A8A', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <span style={{ fontSize: '10px', color: '#FFF', fontWeight: 900 }}>利益の停滞</span>
                    </div>
                    <div style={{ height: '40px', backgroundColor: '#E2E8F0' }}></div>
                    <p style={{ fontSize: '10px', color: '#9CA3AF', marginTop: '12px', fontWeight: 700 }}>MEECE導入前</p>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', color: '#E5E7EB', marginBottom: '80px' }}><ArrowRight /></div>
                  <div style={{ flex: 1, textAlign: 'center' }}>
                    <div style={{ height: '30px', backgroundColor: '#F6AD55', borderRadius: '8px 8px 0 0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <span style={{ fontSize: '9px', color: '#FFF' }}>余剰を投資へ</span>
                    </div>
                    <div style={{ height: '170px', backgroundColor: '#00C9A7', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
                      <span style={{ fontSize: '14px', color: '#FFF', fontWeight: 900 }}>利益最大化</span>
                      <span style={{ fontSize: '18px', color: '#FFF', fontWeight: 900 }}>+150%</span>
                    </div>
                    <p style={{ fontSize: '10px', color: '#9CA3AF', marginTop: '12px', fontWeight: 700 }}>MEECE導入後</p>
                  </div>
                </div>
                {/* 改善後のフロー注釈パーツ：モバイル時は縦、PC時は横に自動切替 */}
                <div style={{ 
                  display: 'flex', 
                  flexDirection: windowWidth < 768 ? 'column' : 'row',
                  alignItems: 'center', 
                  justifyContent: 'space-between', 
                  marginTop: '40px', 
                  padding: windowWidth < 768 ? '30px 20px' : '20px', 
                  backgroundColor: '#F9FAFB', 
                  borderRadius: '16px',
                  gap: windowWidth < 768 ? '15px' : '0'
                }}>
                  {/* STEP 01 */}
                  <div style={{ textAlign: 'center', flex: 1 }}>
                    <p style={{ fontSize: '12px', fontWeight: 800, color: '#9CA3AF', marginBottom: '4px' }}>STEP 01</p>
                    <p style={{ fontSize: '16px', fontWeight: 900, color: '#0D1B3E' }}>既存コストの改善</p>
                  </div>
                  
                  {/* 矢印：モバイル時は下向き、PC時は右向き */}
                  <ArrowRight 
                    size={18} 
                    color="#E5E7EB" 
                    style={{ 
                      margin: windowWidth < 768 ? '5px 0' : '0 10px',
                      transform: windowWidth < 768 ? 'rotate(90deg)' : 'none'
                    }} 
                  />
                  
                  {/* STEP 02 */}
                  <div style={{ textAlign: 'center', flex: 1 }}>
                    <p style={{ fontSize: '12px', fontWeight: 800, color: '#F6AD55', marginBottom: '4px' }}>STEP 02</p>
                    <p style={{ fontSize: '16px', fontWeight: 900, color: '#F6AD55' }}>余剰資産の創出</p>
                  </div>
                  
                  {/* 矢印：モバイル時は下向き、PC時は右向き */}
                  <ArrowRight 
                    size={18} 
                    color="#E5E7EB" 
                    style={{ 
                      margin: windowWidth < 768 ? '5px 0' : '0 10px',
                      transform: windowWidth < 768 ? 'rotate(90deg)' : 'none'
                    }} 
                  />
                  
                  {/* STEP 03 */}
                  <div style={{ textAlign: 'center', flex: 1 }}>
                    <p style={{ fontSize: '12px', fontWeight: 800, color: '#007AFF', marginBottom: '4px' }}>STEP 03</p>
                    <p style={{ fontSize: '16px', fontWeight: 900, color: '#007AFF' }}>ITによる成長加速</p>
                  </div>
                </div>
              </div>

              {/* テキスト部分 */}
              <div style={{ flex: 0.8 }}>
                <p style={{ fontSize: '16px', color: '#0D1B3E', fontWeight: 500, lineHeight: 1.8, marginBottom: '40px' }}>
                  IT導入の最大の障壁は、多くの場合「予算の確保」です。私たちは、経営コンサルの段階で収益構造を改善し、補助金やコストカットを組み合わせることで、<strong style={{ borderBottom: '2px solid #00FBFF' }}>投資体力を自律的に創り出します。</strong>
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                  <div style={{ display: 'flex', gap: '20px', backgroundColor: '#FFFFFF', padding: '24px', borderRadius: '20px', border: '1px solid #F3F4F6' }}>
                    <TrendingUp color="#00C9A7" />
                    <div>
                      <h4 style={{ fontSize: '15px', fontWeight: 900, color: '#0D1B3E', marginBottom: '4px' }}>余剰資産のIT転換</h4>
                      <p style={{ fontSize: '12px', color: '#6B7280' }}>現状の無駄を掘り起こし、追加の持ち出しなしでIT原資へと転換します。</p>
                    </div>
                  </div>
                  <div style={{ display: 'flex', gap: '20px', backgroundColor: '#FFFFFF', padding: '24px', borderRadius: '20px', border: '1px solid #F3F4F6' }}>
                    <ShieldCheck color="#007AFF" />
                    <div>
                      <h4 style={{ fontSize: '15px', fontWeight: 900, color: '#0D1B3E', marginBottom: '4px' }}>低リスクな実装プラン</h4>
                      <p style={{ fontSize: '12px', color: '#6B7280' }}>算出したROIに基づき、最も収益に寄与する箇所から段階的にシステムを実装します。</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 6. 支援事例 (image_9be9c6.png を再現) */}
        <section style={{ padding: '140px 0', backgroundColor: '#FFFFFF', display: 'flex', justifyContent: 'center' }}>
          <div style={{ maxWidth: '1000px', width: '100%', padding: '0 24px' }}>
            <div style={{ textAlign: 'center', marginBottom: '80px' }}>
              <p style={{ color: '#007AFF', fontSize: '11px', fontWeight: 900, letterSpacing: '0.2em', marginBottom: '16px' }}>支援事例</p>
              <h2 style={{ fontSize: '42px', fontWeight: 900, color: '#0D1B3E', marginBottom: '24px' }}>支援事例：物語の再始動。</h2>
              <div style={{ width: '60px', height: '4px', background: 'linear-gradient(to right, #00FBFF, #007AFF)', margin: '0 auto' }}></div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: windowWidth < 768 ? '1fr' : '1fr 1fr', gap: '32px', marginBottom: '60px' }}>
              <div style={{ backgroundColor: '#F9FAFB', padding: '60px 40px', borderRadius: '48px' }}>
                <span style={{ fontSize: '11px', fontWeight: 900, color: '#007AFF', marginBottom: '20px', display: 'block' }}>事例 01</span>
                <h3 style={{ fontSize: '20px', fontWeight: 900, color: '#0D1B3E', marginBottom: '24px' }}>老舗50年のお菓子屋さん</h3>
                <p style={{ fontSize: '14px', color: '#6B7280', lineHeight: 2 }}>
                  財務整理から投資余力を算出し、AI実装による在庫管理システムをフルスクラッチで開発。人件費の大幅削減を実現しました。
                </p>
              </div>
              <div style={{ backgroundColor: '#F9FAFB', padding: '60px 40px', borderRadius: '48px' }}>
                <span style={{ fontSize: '11px', fontWeight: 900, color: '#007AFF', marginBottom: '20px', display: 'block' }}>事例 02</span>
                <h3 style={{ fontSize: '20px', fontWeight: 900, color: '#0D1B3E', marginBottom: '24px' }}>急成長を目指すベンチャー</h3>
                <p style={{ fontSize: '14px', color: '#6B7280', lineHeight: 2 }}>
                  限られた調達資金をKPIに基づき最適分配。AIを活用した最速プロトタイプ開発で、市場検証をアジャイルに推進しています。
                </p>
              </div>
            </div>

            <div style={{ textAlign: 'center' }}>
              <a 
                href="/cases" 
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)';
                  e.currentTarget.style.boxShadow = '0 20px 40px rgba(13, 27, 62, 0.3)';
                  e.currentTarget.style.backgroundColor = '#1A2B5A';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 10px 30px rgba(13, 27, 62, 0.2)';
                  e.currentTarget.style.backgroundColor = '#0D1B3E';
                }}
                style={{ 
                  textDecoration: 'none',
                  backgroundColor: '#0D1B3E',
                  color: '#FFFFFF',
                  padding: '20px 48px',
                  borderRadius: '16px',
                  fontSize: '15px',
                  fontWeight: 900,
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '12px',
                  boxShadow: '0 10px 30px rgba(13, 27, 62, 0.2)',
                  transition: 'all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1)',
                  cursor: 'pointer'
                }}
              >
                支援事例を詳しく見る <ArrowRight size={18} />
              </a>
            </div>
          </div>
        </section>

        {/* 7. 統合事業成長エンジン (image_9be9a9.jpg を再現) */}
        <section style={{ backgroundColor: '#0D1B3E', padding: '140px 24px', display: 'flex', justifyContent: 'center', position: 'relative', overflow: 'hidden' }}>
          <div style={{ 
            maxWidth: '1000px', width: '100%', backgroundColor: '#F9FAFB', borderRadius: '60px', 
            padding: windowWidth < 768 ? '60px 24px' : '100px 80px', position: 'relative', zIndex: 1
          }}>
            <p style={{ color: '#007AFF', fontSize: '11px', fontWeight: 900, letterSpacing: '0.2em', marginBottom: '32px' }}>統合事業成長エンジン</p>
            <h2 style={{ fontSize: 'clamp(28px, 5vw, 48px)', fontWeight: 900, color: '#0D1B3E', marginBottom: '40px', lineHeight: 1.2 }}>
              「点」の支援ではなく、<br />
              <span style={{ background: 'linear-gradient(to right, #00FBFF, #9D72FF, #FF5BAE)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                「線」での事業成長を。
              </span>
            </h2>
            <div style={{ width: '60px', height: '4px', background: '#007AFF', marginBottom: '40px' }}></div>
            <p style={{ color: '#6B7280', fontSize: '16px', lineHeight: 2, marginBottom: '32px' }}>
              システム開発、広告運用、採用。これら一つ一つの施策がバラバラでは、最大のパフォーマンスは発揮できません。
            </p>
            <div style={{ borderLeft: '3px solid #00FBFF', paddingLeft: '24px', marginBottom: '60px' }}>
              <p style={{ color: '#0D1B3E', fontSize: '16px', fontWeight: 800 }}>Meeceは全ての要素を統合し、一つの「物語」として整合性を保ちながら事業を推進する統合エンジンです。</p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: windowWidth < 768 ? '1fr' : '1fr 1fr', gap: '24px' }}>
              <div style={{ backgroundColor: '#FFFFFF', padding: '40px', borderRadius: '32px', border: '1px solid #F3F4F6' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                  <div style={{ width: '3px', height: '16px', backgroundColor: '#00FBFF' }}></div>
                  <h4 style={{ fontWeight: 800, color: '#0D1B3E' }}>ブランドメッセージの一貫性</h4>
                </div>
                <p style={{ fontSize: '13px', color: '#9CA3AF', lineHeight: 1.6 }}>開発とマーケティングを同期させ、プロダクトの魅力を正確に、最適なタイミングで市場へ届けます。</p>
              </div>
              <div style={{ backgroundColor: '#FFFFFF', padding: '40px', borderRadius: '32px', border: '1px solid #F3F4F6' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                  <div style={{ width: '3px', height: '16px', backgroundColor: '#007AFF' }}></div>
                  <h4 style={{ fontWeight: 800, color: '#0D1B3E' }}>開発進度とマーケの最適連動</h4>
                </div>
                <p style={{ fontSize: '13px', color: '#9CA3AF', lineHeight: 1.6 }}>リリースまでの工期を戦略的に管理。無駄な広告費を抑え、リリース直後のバーストを最大化させます。</p>
              </div>
            </div>
          </div>
        </section>

        {/* 共通フッターの呼び出し */}
                <Footer />
              </main>
            </div>
         );
        }