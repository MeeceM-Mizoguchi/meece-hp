import React, { useState, useEffect } from 'react';
import { Navbar } from '../components/organisms/Navbar';
import { Footer } from '../components/organisms/Footer';
import { PageHero } from '../components/molecules/PageHero'; // PageHeroを読み込む
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'; // パスをより確実なものに修正しました
// Heartを追加し、使っていないShieldCheckを削除しました
import { Award, MapPin, User, Calendar, CircleDollarSign, Landmark, Mail, Map as MapIcon, ExternalLink, Cpu, Zap, Heart } from 'lucide-react';

// App.tsxでエラーが出ないよう、必ず「export const Company」として定義します
export const Company: React.FC = () => {
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);

  useEffect(() => {
    // 画面サイズ監視の設定
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    
    // アニメーションプラグインの登録
    gsap.registerPlugin(ScrollTrigger);

    // 1. 沿革の中央ラインが伸びるアニメーション
    gsap.to(".timeline-line", {
      scaleY: 1,
      ease: "none",
      scrollTrigger: {
        trigger: ".timeline-line",
        start: "top 80%",
        end: "bottom 80%",
        scrub: true
      }
    });

    // 2. 沿革の各項目がスクロールに合わせて浮き上がるアニメーション
    const items = gsap.utils.toArray<HTMLElement>(".timeline-item");
    items.forEach((item) => {
      gsap.to(item, {
        opacity: 1,
        y: 0, // 元の位置（y:0）に戻る
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: item,
          start: "top 85%", // 画面の85%の位置に来たら実行
          toggleActions: "play none none reverse"
        }
      });
    });

    return () => {
      window.removeEventListener('resize', handleResize);
      // 画面遷移時にスクロールトリガーをリセットしてメモリを節約
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <div style={{ backgroundColor: '#FFFFFF', minHeight: '100vh', width: '100%', margin: 0, padding: 0, overflowX: 'hidden' }}>
      <Navbar />
      
      <main>
        {/* 共通のメインビジュアル部品を呼び出し */}
        <PageHero 
          label="COMPANY / 会社概要"
          titleTop="組織を、"
          titleGradient="社会を動かす力に。"
          description="Meece株式会社の基本情報、および組織としての在り方についてご紹介します。"
          windowWidth={windowWidth}
        />

        {/* 会社概要カードセクション (image_e8fd09.jpg / image_e8f566.jpg) */}
        <section style={{ padding: '0 0 140px', display: 'flex', justifyContent: 'center', backgroundColor: '#FFFFFF' }}>
          <div style={{ maxWidth: '1000px', width: '100%', padding: '0 24px' }}>
            <div style={{ textAlign: 'center', marginBottom: '80px' }}>
              <p style={{ color: '#319795', fontSize: '10px', fontWeight: 900, letterSpacing: '0.2em', marginBottom: '16px' }}>組織概要</p>
              <h2 style={{ fontSize: '42px', fontWeight: 900, color: '#0D1B3E', marginBottom: '24px' }}>会社概要</h2>
              <div style={{ width: '60px', height: '4px', background: 'linear-gradient(to right, #00FBFF, #9D72FF)', margin: '0 auto' }}></div>
            </div>

            <div style={{ 
              backgroundColor: '#FFFFFF', borderRadius: '40px', overflow: 'hidden',
              boxShadow: '0 40px 100px rgba(0,0,0,0.04)', border: '1px solid #F3F4F6'
            }}>
              {[
                { label: '商号', value: 'Meece株式会社', sub: 'ミースカブシキガイシャ', icon: <Award size={20} color="#00FBFF" /> },
                { label: '会社住所', value: '〒100-0005\n東京都千代田区丸の内1丁目8-3\n丸の内トラストタワー本館 20階', icon: <MapPin size={20} color="#00FBFF" /> },
                { label: '代表取締役社長', value: '溝口 雅登', icon: <User size={20} color="#00FBFF" /> },
                { label: '会社設立日', value: '2022年 8月 22日', icon: <Calendar size={20} color="#00FBFF" /> },
                { label: '資本金', value: '1,000,000円', icon: <CircleDollarSign size={20} color="#00FBFF" /> },
                { label: '取引先銀行', value: 'みずほ銀行', sub: '八重洲口支店', icon: <Landmark size={20} color="#00FBFF" /> },
                { label: 'お問い合わせ先', value: '03-5288-5125', icon: <Mail size={20} color="#00FBFF" /> },
              ].map((item, idx) => (
                <div key={idx} style={{ 
                  display: 'flex', borderBottom: idx === 6 ? 'none' : '1px solid #F3F4F6',
                  flexDirection: windowWidth < 768 ? 'column' : 'row'
                }}>
                  <div style={{ 
                    width: windowWidth < 768 ? '100%' : '280px', padding: '40px',
                    backgroundColor: '#F9FAFB', display: 'flex', alignItems: 'center', gap: '20px'
                  }}>
                    <div style={{ 
                      width: '40px', height: '40px', borderRadius: '12px', backgroundColor: '#FFFFFF',
                      display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 12px rgba(0,0,0,0.03)'
                    }}>
                      {item.icon}
                    </div>
                    <span style={{ fontSize: '14px', fontWeight: 900, color: '#0D1B3E' }}>{item.label}</span>
                  </div>
                  <div style={{ padding: '40px', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    <div style={{ fontSize: '16px', fontWeight: 800, color: '#0D1B3E', whiteSpace: 'pre-wrap', lineHeight: 1.6 }}>
                      {item.value}
                    </div>
                    {item.sub && <div style={{ fontSize: '10px', color: '#9CA3AF', marginTop: '8px', fontWeight: 800, letterSpacing: '0.1em' }}>{item.sub}</div>}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 沿革セクション：スクロールアニメーション付き */}
        <section style={{ padding: '140px 0', backgroundColor: '#F8F9FB', display: 'flex', justifyContent: 'center', overflow: 'hidden' }}>
          <div style={{ maxWidth: '1000px', width: '100%', padding: '0 24px' }}>
            <div style={{ textAlign: 'center', marginBottom: '100px' }}>
              <p style={{ color: '#319795', fontSize: '10px', fontWeight: 900, letterSpacing: '0.2em', marginBottom: '16px' }}>私たちの歩み</p>
              <h2 style={{ fontSize: '42px', fontWeight: 900, color: '#0D1B3E', marginBottom: '24px' }}>沿革</h2>
              <div style={{ width: '60px', height: '4px', background: 'linear-gradient(to right, #00FBFF, #9D72FF)', margin: '0 auto' }}></div>
            </div>

            <div style={{ position: 'relative' }}>
              {/* 背景の薄いガイドライン（モバイル時は左、PC時は中央） */}
              <div style={{ 
                position: 'absolute', 
                left: windowWidth < 768 ? '20px' : '50%', 
                top: 0, bottom: 0, width: '2px', 
                background: 'rgba(157, 114, 255, 0.1)', 
                transform: 'translateX(-50%)'
              }}></div>
              
              {/* アニメーションで伸びる実線（モバイル時は左、PC時は中央） */}
              <div className="timeline-line" style={{ 
                position: 'absolute', 
                left: windowWidth < 768 ? '20px' : '50%', 
                top: 0, bottom: 0, width: '2px', 
                background: 'linear-gradient(to bottom, #00FBFF, #9D72FF, #FF5BAE)', 
                transform: 'translateX(-50%) scaleY(0)',
                transformOrigin: 'top', zIndex: 1
              }}></div>

              {[
                { year: '2022', title: 'Meece株式会社 設立', desc: '高度な技術力を市場へ提供するSES事業を柱として、物語の一歩を踏み出しました。', side: 'right' },
                { year: '2023', title: '受託開発・コンサル事業の拡大', desc: '戦略の策定から実装までを一気通貫で支援する体制を構築。数々の企業の課題を「物語」として完結させ始めました。', side: 'left' },
                { year: '2024', title: 'AI研究開発部門の立ち上げ', desc: '最先端の生成AI・LLM技術をビジネスに実装する専門チームを発足。技術革新の最前線へ進出。', side: 'right' },
                { year: '2026', title: '自社プロダクト、始動。', desc: 'これまで培った全ての技術と想いを結集させた、全く新しい物語が始まります。近日公開予定...', side: 'left', special: true },
              ].map((history, i) => (
                <div key={i} className="timeline-item" style={{ 
                  display: 'flex', 
                  justifyContent: windowWidth < 768 ? 'flex-end' : (history.side === 'right' ? 'flex-end' : 'flex-start'),
                  marginBottom: windowWidth < 768 ? '80px' : '100px', 
                  position: 'relative', 
                  width: '100%',
                  opacity: 1
                }}>
                  {/* 丸いドット（モバイル時は左、PC時は中央） */}
                  <div style={{ 
                    position: 'absolute', 
                    left: windowWidth < 768 ? '20px' : '50%', 
                    top: '20px', 
                    width: '14px', height: '14px', 
                    borderRadius: '50%', 
                    backgroundColor: history.special ? '#FF5BAE' : '#FFFFFF', 
                    border: '3px solid #9D72FF', 
                    transform: 'translateX(-50%)', 
                    zIndex: 2,
                    boxShadow: '0 0 15px rgba(157, 114, 255, 0.4)'
                  }}></div>

                  <div style={{ 
                    width: windowWidth < 768 ? 'calc(100% - 60px)' : '42%', 
                    textAlign: windowWidth < 768 ? 'left' : (history.side === 'right' ? 'left' : 'right'),
                    padding: windowWidth < 768 ? '0 0 0 20px' : '0 20px',
                    marginRight: windowWidth < 768 ? '0' : (history.side === 'left' ? '58%' : '0'),
                    marginLeft: windowWidth < 768 ? '0' : (history.side === 'right' ? '58%' : '0')
                  }}>
                    <div style={{ 
                      fontSize: windowWidth < 768 ? '44px' : '56px', 
                      fontWeight: 900, color: '#E2E8F0', lineHeight: 1, marginBottom: '16px',
                      background: history.special ? 'linear-gradient(to right, #9D72FF, #FF5BAE)' : 'none',
                      WebkitBackgroundClip: history.special ? 'text' : 'none',
                      WebkitTextFillColor: history.special ? 'transparent' : 'none',
                      opacity: history.special ? 1 : 0.4
                    }}>
                      {history.year}
                    </div>
                    {history.special && <span style={{ backgroundColor: '#FFF5F7', color: '#FF0055', fontSize: '10px', fontWeight: 900, padding: '4px 12px', borderRadius: '100px', marginBottom: '12px', display: 'inline-block' }}>極秘プロジェクト</span>}
                    <h3 style={{ fontSize: windowWidth < 768 ? '18px' : '20px', fontWeight: 900, color: '#0D1B3E', marginBottom: '16px' }}>{history.title}</h3>
                    <p style={{ fontSize: '14px', color: '#6B7280', lineHeight: 1.8 }}>{history.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 行動指針セクション (image_e8f280.jpg) */}
        <section style={{ padding: '140px 0', backgroundColor: '#FFFFFF', display: 'flex', justifyContent: 'center' }}>
          <div style={{ maxWidth: '1200px', width: '100%', padding: '0 24px' }}>
            <div style={{ textAlign: 'center', marginBottom: '100px' }}>
              <p style={{ color: '#319795', fontSize: '10px', fontWeight: 900, letterSpacing: '0.2em', marginBottom: '16px' }}>行動指針</p>
              <h2 style={{ fontSize: '42px', fontWeight: 900, color: '#0D1B3E', marginBottom: '24px' }}>大切にしている指針</h2>
              <div style={{ width: '60px', height: '4px', background: 'linear-gradient(to right, #00FBFF, #9D72FF)', margin: '0 auto' }}></div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: windowWidth < 1024 ? '1fr' : 'repeat(3, 1fr)', gap: '32px' }}>
              {[
                { title: '深い当事者意識', desc: '外部ベンダーとしての枠を超え、お客様の事業を自社の痛みとして捉える。「当事者以上の当事者意識」こそが、最高の物語を生み出す原動力です。', icon: <Heart color="#00FBFF" size={24}/>, bg: '#E6FFFA' },
                { title: '実利的な現実主義', desc: '技術はあくまで手段。ビジネスの現場主義を貫き、予算・財務・KPIといった現実に即した「本当に機能するIT」のみを実装します。', icon: <Cpu color="#9D72FF" size={24}/>, bg: '#F5F3FF' },
                { title: '無限の機動力', desc: '自らの限界を定めず、変化に即応する。最新のAIから枯れた技術まで、常に最適な歯車を選択し、物語を加速させる柔軟な適応力を持ち続けます。', icon: <Zap color="#FF5BAE" size={24}/>, bg: '#FFF5F7' }
              ].map((policy, i) => (
                <div key={i} style={{ 
                  padding: '60px 40px', borderRadius: '40px', border: '1px solid #F3F4F6',
                  textAlign: 'left', transition: 'all 0.3s ease'
                }}>
                  <div style={{ 
                    width: '56px', height: '56px', borderRadius: '16px', backgroundColor: policy.bg,
                    display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '32px'
                  }}>
                    {policy.icon}
                  </div>
                  <h3 style={{ fontSize: '20px', fontWeight: 900, color: '#0D1B3E', marginBottom: '20px' }}>{policy.title}</h3>
                  <p style={{ fontSize: '14px', color: '#6B7280', lineHeight: 1.8 }}>{policy.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* アクセスセクション：本物のGoogle Mapを埋め込み */}
        <section style={{ padding: '140px 0', backgroundColor: '#F8F9FB', display: 'flex', justifyContent: 'center' }}>
          <div style={{ maxWidth: '1000px', width: '100%', padding: '0 24px' }}>
            <div style={{ textAlign: 'center', marginBottom: '60px' }}>
              <p style={{ color: '#319795', fontSize: '10px', fontWeight: 900, letterSpacing: '0.2em', marginBottom: '16px' }}>アクセス</p>
              <h2 style={{ fontSize: '42px', fontWeight: 900, color: '#0D1B3E', marginBottom: '24px' }}>拠点へのアクセス</h2>
              <div style={{ width: '60px', height: '4px', background: 'linear-gradient(to right, #00FBFF, #9D72FF)', margin: '0 auto 40px' }}></div>
              <div style={{ display: 'flex', justifyContent: 'center', gap: '24px', flexWrap: 'wrap' }}>
                <span style={{ fontSize: '14px', fontWeight: 800, color: '#0D1B3E', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <div style={{ width: '3px', height: '16px', backgroundColor: '#00FBFF' }}></div> 丸の内トラストタワー本館 20階
                </span>
                <a href="https://maps.app.goo.gl/9ZpYfC1rM1N1f3Nq8" target="_blank" rel="noreferrer" style={{ 
                  fontSize: '12px', fontWeight: 800, color: '#6B7280', textDecoration: 'none',
                  padding: '8px 20px', borderRadius: '100px', border: '1px solid #E5E7EB',
                  display: 'flex', alignItems: 'center', gap: '8px', backgroundColor: '#FFFFFF'
                }}>
                  <MapIcon size={14}/> Google Mapsで開く <ExternalLink size={12}/>
                </a>
              </div>
            </div>

            {/* 本物のGoogle Map iframe */}
            <div style={{ 
              width: '100%', height: '500px', backgroundColor: '#E5E7EB', borderRadius: '40px',
              overflow: 'hidden', boxShadow: '0 30px 60px rgba(0,0,0,0.1)', position: 'relative',
              border: 'none'
            }}>
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3240.828030386114!2d139.7672!3d35.6823!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188bf0a09e0589%3A0x6b772076046e7f8a!2z5Li444Gu5YaF44OI44Op44K544OI44K_44Ov44O85pys6aSo!5e0!3m2!1sja!2sjp!4v1710000000000!5m2!1sja!2sjp" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: windowWidth < 768 ? '1fr' : '1fr 1fr', gap: '20px', marginTop: '40px' }}>
              <div style={{ backgroundColor: '#FFFFFF', padding: '32px', borderRadius: '24px', display: 'flex', alignItems: 'center', gap: '20px' }}>
                <div style={{ color: '#3182CE' }}><Zap size={24}/></div>
                <div>
                  <p style={{ fontSize: '10px', fontWeight: 900, color: '#9CA3AF', marginBottom: '4px' }}>JR線をご利用の場合</p>
                  <p style={{ fontSize: '15px', fontWeight: 800, color: '#0D1B3E' }}>JR「東京駅」日本橋口より徒歩1分</p>
                </div>
              </div>
              <div style={{ backgroundColor: '#FFFFFF', padding: '32px', borderRadius: '24px', display: 'flex', alignItems: 'center', gap: '20px' }}>
                <div style={{ color: '#319795' }}><MapIcon size={24}/></div>
                <div>
                  <p style={{ fontSize: '10px', fontWeight: 900, color: '#9CA3AF', marginBottom: '4px' }}>地下鉄をご利用の場合</p>
                  <p style={{ fontSize: '15px', fontWeight: 800, color: '#0D1B3E' }}>地下鉄「大手町駅」B7出口より徒歩2分</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ミッションセクション (image_da535e.jpg を再現) */}
        <section style={{ 
          backgroundColor: '#0D1B3E', // 深い紺色の背景
          padding: windowWidth < 768 ? '80px 20px' : '120px 40px',
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          position: 'relative',
          overflow: 'hidden'
        }}>
          {/* 背景の装飾曲線 */}
          <div style={{ 
            position: 'absolute', width: '150%', height: '100%', 
            top: '30%', left: '-25%', border: '1px solid rgba(0, 251, 255, 0.05)',
            borderRadius: '50%', pointerEvents: 'none'
          }}></div>

          <div style={{ 
            maxWidth: '1000px', 
            width: '100%',
            backgroundColor: '#FFFFFF', // 白背景のパネル
            borderRadius: windowWidth < 768 ? '40px' : '60px',
            padding: windowWidth < 768 ? '60px 24px' : '100px 80px',
            position: 'relative',
            zIndex: 1,
            textAlign: 'center',
            boxShadow: '0 40px 100px rgba(0,0,0,0.2)'
          }}>
            {/* 背面の巨大な透過文字 "ミッション" */}
            <div style={{ 
              position: 'absolute', top: '5%', left: '50%', transform: 'translateX(-50%)',
              fontSize: 'clamp(60px, 12vw, 160px)', fontWeight: 900, color: '#F1F5F9',
              opacity: 0.5, zIndex: 0, whiteSpace: 'nowrap'
            }}>
              ミッション
            </div>

            <div style={{ position: 'relative', zIndex: 1 }}>
              <p style={{ 
                color: '#319795', 
                fontSize: '11px', 
                fontWeight: 900, 
                letterSpacing: '0.2em', 
                marginBottom: '32px' 
              }}>
                私たちのミッション
              </p>
              
              <h2 style={{ 
                fontSize: 'clamp(24px, 4vw, 48px)', 
                fontWeight: 900, 
                color: '#0D1B3E', 
                lineHeight: 1.3,
                marginBottom: '40px',
                letterSpacing: '-0.02em'
              }}>
                「ITの歯車」として、<br />
                まだ見ぬ感動の続きを創り出す。
              </h2>

              {/* グラデーションライン */}
              <div style={{ 
                width: '60px', 
                height: '4px', 
                background: 'linear-gradient(to right, #00FBFF, #9D72FF)', 
                margin: '0 auto 48px',
                borderRadius: '2px'
              }}></div>

              <div style={{ 
                maxWidth: '680px', 
                margin: '0 auto', 
                color: '#6B7280', 
                fontSize: '15px', 
                lineHeight: 2,
                fontWeight: 500
              }}>
                <p style={{ marginBottom: '24px' }}>
                  Meeceは、単に便利なシステムを作る会社ではありません。<br />
                  お客様が心に描いた「実現したい物語」を、確かな技術力というラスト・ピースで完成に導くプロフェッショナル集団です。
                </p>
                <p>
                  私たちは自らの限界を定めず、期待を超える価値を提供し続けることをお約束します。
                </p>
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