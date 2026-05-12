import { useEffect, useState } from 'react';
// Navbarは1つ上の階層(..)のcomponentsの中にあるので、パスを修正しました
import { Navbar } from '../components/organisms/Navbar';
import { Footer } from '../components/organisms/Footer';
import { ContactForm } from '../components/organisms/ContactForm';
import gsap from 'gsap';
import { motion, AnimatePresence } from 'framer-motion';
import { OpeningAnimation } from '../components/organisms/OpeningAnimation';
import { Code2, BrainCircuit, Compass, Rocket, Zap, Sparkles } from 'lucide-react';
import { newsItems } from '../constants/newsData'; // ニュースデータ台帳をインポート

// SPA navigation flag: resets on page reload, persists across route changes
let openingHasPlayed = false;

function Home() {
  const [windowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);
  // SPA遷移 OR 同一オリジンからのfullリロードの場合はスキップ
  const skipOpening = openingHasPlayed || (() => {
    try { return new URL(document.referrer).origin === window.location.origin; }
    catch { return false; }
  })();
  const [isOpeningComplete, setIsOpeningComplete] = useState(skipOpening); // オープニング完了フラグ

  // --- スクロール禁止・解除の制御 ---
  useEffect(() => {
    if (!isOpeningComplete) {
      // オープニング中はスクロールを禁止し、TOPに固定する
      window.scrollTo(0, 0);
      document.documentElement.style.overflow = 'hidden';
      document.body.style.overflow = 'hidden';
      document.body.style.height = '100%';
    } else {
      // オープニング完了後は全ての制限を解除
      document.documentElement.style.overflow = 'unset';
      document.body.style.overflow = 'unset';
      document.body.style.height = 'unset';
    }
    return () => {
      document.documentElement.style.overflow = 'unset';
      document.body.style.overflow = 'unset';
      document.body.style.height = 'unset';
    };
  }, [isOpeningComplete]);

  // 背景画像スライド用の設定
  const backgroundImages = [
    "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?q=80&w=2044&auto=format&fit=crop", // 現在の都市
    "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?q=80&w=2040&auto=format&fit=crop", // 別の都市
    "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?q=80&w=2040&auto=format&fit=crop", // ニューヨーク
    "https://images.unsplash.com/photo-1514565131-fce0801e5785?q=80&w=2112&auto=format&fit=crop"  // 近未来的な都市
  ];
  const [bgIndex, setBgIndex] = useState(0);

  // 初期表示: スキップ時はヒーローを即表示、初回はhide
  useEffect(() => {
    if (skipOpening) {
      gsap.set(".hero-content", { opacity: 1, y: 0 });
    } else {
      gsap.set(".hero-content", { opacity: 0, y: 30 });
    }
  }, []);

  // オープニング完了後に背景スライドショーを開始
  useEffect(() => {
    if (!isOpeningComplete) return;
    const bgTimer = setInterval(() => {
      setBgIndex((prev) => (prev + 1) % backgroundImages.length);
    }, 10000);
    return () => clearInterval(bgTimer);
  }, [isOpeningComplete]);

  // オープニング完了ハンドラ
  const handleOpeningComplete = () => {
    openingHasPlayed = true;
    setIsOpeningComplete(true);
    gsap.to(".hero-content", { opacity: 1, y: 0, duration: 1.5, stagger: 0.3, ease: "power3.out" });
  };


  return (
    <div style={{ backgroundColor: 'black', minHeight: '100vh', width: '100%', margin: 0, padding: 0, overflowX: 'hidden' }}>
      {/* 新オープニングアニメーション */}
      <AnimatePresence>
        {!isOpeningComplete && (
          <OpeningAnimation onComplete={handleOpeningComplete} />
        )}
      </AnimatePresence>

      {isOpeningComplete && <Navbar />}
      
      <main style={{ 
        position: 'relative', 
        width: '100%', 
        opacity: isOpeningComplete ? 1 : 0,
        transition: 'opacity 0.8s ease-in-out',
        zIndex: isOpeningComplete ? 1 : -1
      }}>
        {/* ヒーローセクション（1枚目：シネマティック・X・レイアウト） */}
        <section style={{ position: 'relative', width: '100%', height: '100vh', overflow: 'hidden', backgroundColor: '#000814' }}>
          {/* 1. 背景：5秒おきに切り替わる都市景色 */}
          <div style={{ position: 'absolute', inset: 0, zIndex: 0, backgroundColor: '#000' }}>
            <AnimatePresence mode="popLayout">
              <motion.img
                key={backgroundImages[bgIndex]}
                src={backgroundImages[bgIndex]}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 2.0, ease: "easeInOut" }}
                alt="City Background"
                style={{ 
                  position: 'absolute',
                  width: '100%', 
                  height: '100%', 
                  objectFit: 'cover', 
                  filter: 'brightness(1.1) contrast(1.05) saturate(1.2) hue-rotate(-5deg)' 
                }}
              />
            </AnimatePresence>
            {/* 自然なグラデーションオーバーレイ：雲の色を殺さず文字の視認性を上げる */}
            <div style={{ 
              position: 'absolute', 
              inset: 0, 
              background: 'linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(0, 8, 20, 0.4) 100%)' 
            }} />
          </div>

          {/* 2. Xのエッジ装飾（ガイドラインとしてのみ残す、または削除も可能ですが、一旦全画面に線を引いた状態を維持します） */}
          <div style={{ position: 'absolute', inset: 0, zIndex: 1 }}>
            <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 2 }}>
              <path d="M 0,0 L 100,100 M 100,0 L 0,100" style={{ stroke: 'rgba(255,255,255,0.1)', strokeWidth: 0.1 }} />
            </svg>
          </div>

          {/* 3. コンテンツレイヤー */}
          <div style={{ position: 'relative', zIndex: 10, height: '100%', width: '100%', boxSizing: 'border-box' }}>
            <div className="hero-content" style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: windowWidth < 768 ? '100px 20px 60px' : '80px 100px', opacity: isOpeningComplete ? 1 : 0 }}>
              
              {/* TOP: スローガン（スマホ時は位置を右端に寄せる） */}
              <div style={{ display: 'flex', justifyContent: 'flex-end', position: windowWidth < 768 ? 'absolute' : 'relative', right: windowWidth < 768 ? '20px' : 'auto', top: windowWidth < 768 ? '100px' : 'auto' }}>
                <div style={{ 
                  color: 'white', 
                  writingMode: 'vertical-rl', 
                  fontSize: windowWidth < 768 ? '12px' : 'clamp(0.9rem, 1.2vw, 1.1rem)', 
                  letterSpacing: '0.6em',
                  fontWeight: 600,
                  textShadow: '0 0 20px rgba(0,251,255,0.5)'
                }}>
                  時代をまたぎ、<br />
                  新しいデジタルをデザインする。
                </div>
              </div>

              {/* MIDDLE: タイトル */}
              <div style={{ textAlign: 'left', marginTop: 'auto', marginBottom: windowWidth < 768 ? '40px' : '0' }}>
                <h1 style={{ 
                  color: 'white', 
                  fontSize: windowWidth < 768 ? 'clamp(2.5rem, 12vw, 4rem)' : 'clamp(3rem, 8vw, 7.5rem)', 
                  fontWeight: 900, 
                  lineHeight: 0.85, 
                  letterSpacing: '-0.04em',

                  textTransform: 'uppercase',
                  margin: 0
                }}>
                  DIGITAL<br />
                  CREATIVE<br />
                  FIRM
                </h1>
              </div>

              {/* BOTTOM: 署名（スマホ時はフォントサイズと余白を調整） */}
              <div style={{ display: 'flex', alignItems: 'center', gap: windowWidth < 768 ? '15px' : '30px', width: '100%', borderTop: '1px solid rgba(255,255,255,0.2)', paddingTop: windowWidth < 768 ? '20px' : '30px' }}>
                <div style={{ backgroundColor: 'white', color: '#000814', padding: windowWidth < 768 ? '6px 15px' : '10px 25px', borderRadius: '2px', fontWeight: 950, fontSize: windowWidth < 768 ? '18px' : '24px', letterSpacing: '0.1em' }}>
                  MEECE
                </div>
                <p style={{ color: 'white', fontSize: windowWidth < 768 ? '10px' : '13px', letterSpacing: '0.3em', fontWeight: 800 }}>
                  INNOVATION GUIDE 2026
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* デジタル・クリエイティブ・ファーム紹介セクション */}
        <section style={{ 
          width: '100%', 
          backgroundColor: '#FFFFFF', 
          padding: windowWidth < 768 ? '100px 0' : '160px 0',
          position: 'relative',
          overflow: 'hidden'
        }}>
          <div style={{ maxWidth: '1300px', margin: '0 auto', padding: '0 40px' }}>
            <div style={{ display: 'flex', flexDirection: windowWidth < 1024 ? 'column' : 'row', gap: '60px', alignItems: 'flex-start' }}>
              
              {/* 左側：コンセプトタイトル */}
              <div style={{ flex: '1' }}>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <p style={{ color: '#94A3B8', fontSize: '14px', fontWeight: 800, letterSpacing: '0.4em', marginBottom: '24px' }}>
                    WHO WE ARE
                  </p>
                  <h2 style={{ 
                    color: '#0D1B3E', 
                    fontSize: 'clamp(32px, 5vw, 56px)', 
                    fontWeight: 900, 
                    lineHeight: 1.1,
                    letterSpacing: '-0.02em',
                    marginBottom: '40px'
                  }}>
                    テクノロジーと表現で、<br />
                    <span style={{ color: '#94A3B8' }}>価値を再定義する。</span>
                  </h2>
                  <p style={{ color: '#475569', fontSize: '16px', lineHeight: 2, maxWidth: '500px' }}>
                    MEECEは、戦略的なビジネス設計、最新鋭のテクノロジー実装、そして心を動かすクリエイティブ表現を高度に融合させたデジタル・クリエイティブ・ファームです。単なる「開発」に留まらず、プロダクトが描くべき物語そのものをデザインします。
                  </p>
                </motion.div>
              </div>

              {/* 右側：3つの柱（グリッドレイアウト） */}
              <div style={{ flex: '1.2', width: '100%' }}>
                <div style={{ 
                  display: 'grid', 
                  gridTemplateColumns: windowWidth < 640 ? '1fr' : 'repeat(2, 1fr)', 
                  gap: '24px' 
                }}>
                  {[
                    {
                      icon: <Sparkles size={24} />,
                      title: 'Experience Design',
                      desc: 'ユーザーの行動心理に基づき、直感的で美しいインターフェースと体験を構築します。'
                    },
                    {
                      icon: <Code2 size={24} />,
                      title: 'Deep Technology',
                      desc: 'AI、モダンなWebスタックを駆使し、拡張性と堅牢性を兼ね備えたシステムを実現。'
                    },
                    {
                      icon: <BrainCircuit size={24} />,
                      title: 'Business Strategy',
                      desc: '市場環境を分析し、デジタルを活用した持続可能なビジネスモデルを策定します。'
                    },
                    {
                      icon: <Compass size={24} />,
                      title: 'Creative Direction',
                      desc: 'ブランドの意志を視覚化し、一貫したメッセージを世の中に届けます。'
                    }
                  ].map((item, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                     transition={{ duration: 0.5, delay: idx * 0.1 }}
                      viewport={{ once: true }}
                      style={{ 
                        padding: '32px', 
                        border: '1px solid #F1F5F9', 
                        borderRadius: '24px',
                        backgroundColor: '#F8FAFC'
                      }}
                    >
                      <div style={{ color: '#0D1B3E', marginBottom: '20px' }}>{item.icon}</div>
                      <h3 style={{ fontSize: '18px', fontWeight: 900, color: '#0D1B3E', marginBottom: '12px' }}>{item.title}</h3>
                      <p style={{ fontSize: '14px', color: '#64748B', lineHeight: 1.6 }}>{item.desc}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* 装飾：背景の巨大なタイポグラフィ */}
          <div style={{ 
            position: 'absolute', 
            bottom: '-5%', 
            right: '-2%', 
            fontSize: 'clamp(100px, 15vw, 200px)', 
            fontWeight: 950, 
            color: 'rgba(13, 27, 62, 0.02)', 
            zIndex: 0,
            pointerEvents: 'none',
            userSelect: 'none'
          }}>
            CREATIVE
          </div>
        </section>

        {/* 2枚目：ORIGIN OF MEECE セクション（背景に淡いグラデーションを追加） */}
        <section style={{ 
          background: 'radial-gradient(circle at 10% 10%, rgba(0, 251, 255, 0.03) 0%, transparent 40%), radial-gradient(circle at 90% 90%, rgba(255, 91, 174, 0.03) 0%, transparent 40%)',
          backgroundColor: '#FFFFFF', 
          padding: '140px 0', 
          width: '100%',
          position: 'relative',
          overflow: 'hidden'
        }}>
          <div style={{ maxWidth: '1300px', margin: '0 auto', paddingLeft: '40px', paddingRight: '40px' }}>
            
            {/* セクションタイトルエリア（右側に説明文を配置するレイアウトに変更） */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', marginBottom: '80px', gap: '40px' }}>
              <div>
                <div style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '15px', 
                  marginBottom: '24px',
                  color: '#319795',
                  fontSize: '12px',
                  fontWeight: 800,
                  letterSpacing: '0.4em'
                }}>
                  ORIGIN OF MEECE
                </div>
                <h2 style={{ 
                  color: '#0D1B3E', 
                  fontSize: 'clamp(2.5rem, 5vw, 3.8rem)', 
                  fontWeight: 900, 
                  lineHeight: 1.1,
                  letterSpacing: '-0.02em'
                }}>
                  Meeceが支える、<br />
                  <span style={{ color: '#6B7280' }}>5つの物語。</span>
                </h2>
                <div style={{ width: '60px', height: '4px', background: 'linear-gradient(to right, #319795, #9D72FF)', marginTop: '30px', borderRadius: '2px' }}></div>
              </div>

              <div style={{ maxWidth: '400px', marginTop: '20px' }}>
                <p style={{ color: '#9CA3AF', fontSize: '15px', lineHeight: 2, letterSpacing: '0.05em', fontWeight: 500 }}>
                  私たちの社名は、主要な5つの産業ドメインの頭文字から生まれています。
                </p>
              </div>
            </div>

            {/* ストーリーカードエリア：windowWidthでスマホ縦・PC横を切り替え */}
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: windowWidth < 1024 ? '1fr' : 'repeat(5, 1fr)', 
              gap: '20px', 
              padding: '0 20px' 
            }}>
              {[
                { label: 'M', title: 'Manufacturing', desc: '製造・ものづくり。日本の根幹を成す産業をデジタルで支えます。', bg: '#EBF4FF', color: '#3182CE' },
                { label: 'E', title: 'Education', desc: '教育・学習支援。次世代の学びをITの力でアップデートします。', bg: '#E6FFFA', color: '#319795' },
                { label: 'E', title: 'Entertainment', desc: '娯楽。人々の心を動かす新しい体験と感動をテクノロジーで創出します。', bg: '#FAF5FF', color: '#805AD5' },
                { label: 'C', title: 'Commerce', desc: '商業・流通。モノと人が繋がる仕組みをよりスマートに、滑らかにします。', bg: '#FFF5F7', color: '#D53F8C' },
                { label: 'E', title: 'Energy & Life', desc: 'エネルギー・生活。日常という物語を、持続可能なITの力で完結させます。', bg: '#FFF5F5', color: '#E53E3E' },
              ].map((card, idx) => (
                <div key={idx} style={{ 
                  backgroundColor: '#F8F9FB', 
                  borderRadius: windowWidth < 768 ? '24px' : '40px', 
                  padding: windowWidth < 768 ? '30px 20px' : '40px 30px', 
                  position: 'relative', 
                  overflow: 'hidden' 
                }}>
                  <div style={{ position: 'relative', zIndex: 1 }}>
                    <div style={{ width: '45px', height: '45px', borderRadius: '12px', backgroundColor: card.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '30px' }}>
                      <span style={{ color: card.color, fontWeight: 'bold', fontSize: '18px' }}>{card.label}</span>
                    </div>
                    <h3 style={{ fontSize: '20px', fontWeight: 800, color: '#1A202C', marginBottom: '15px' }}>{card.title}</h3>
                    <p style={{ fontSize: '15px', color: '#718096', lineHeight: 1.8 }}>{card.desc}</p>
                  </div>
                  <div style={{ 
                    position: 'absolute', 
                    right: '-10px', 
                    bottom: '-20px', 
                    fontSize: windowWidth < 768 ? '80px' : '120px', 
                    fontWeight: 900, 
                    color: '#F0F2F5', 
                    zIndex: 0, 
                    opacity: 0.8 
                  }}>{card.label}</div>
                </div>
              ))}
            </div>

            {/* ボタンエリア：モバイル時は縦並び、PC時は横並びでUIを維持 */}
            <div style={{ 
              display: 'flex', 
              flexDirection: windowWidth < 768 ? 'column' : 'row',
              justifyContent: 'center', 
              alignItems: windowWidth < 768 ? 'stretch' : 'center',
              gap: windowWidth < 768 ? '15px' : '24px', 
              marginTop: '80px', 
              padding: '0 20px',
              width: '100%',
              boxSizing: 'border-box'
            }}>
              {/* ボタン1: Meece株式会社について */}
              <a 
                href="/about" 
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)';
                  e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.1)';
                  e.currentTarget.style.borderColor = '#319795';
                  e.currentTarget.style.backgroundColor = '#319795';
                  e.currentTarget.style.color = '#FFFFFF';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.05)';
                  e.currentTarget.style.borderColor = '#F0F2F5';
                  e.currentTarget.style.backgroundColor = '#FFFFFF';
                  e.currentTarget.style.color = '#0D1B3E';
                }}
                style={{ 
                  textDecoration: 'none',
                  backgroundColor: '#FFFFFF',
                  color: '#0D1B3E',
                  padding: windowWidth < 768 ? '20px 20px' : '22px 45px', 
                  borderRadius: windowWidth < 768 ? '16px' : '20px',
                  fontSize: '15px', 
                  fontWeight: 800,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '12px',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
                  transition: 'all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1)',
                  border: '2px solid #F0F2F5',
                  cursor: 'pointer',
                  minWidth: windowWidth < 768 ? '100%' : '320px'
                }}
              >
                <span style={{ letterSpacing: '0.1em', whiteSpace: 'nowrap' }}>Meece株式会社について</span>
              </a>

              {/* ボタン2: 会社概要（中央寄せに修正） */}
              <a 
                href="/company" 
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
                  padding: windowWidth < 768 ? '20px 20px' : '22px 45px',
                  borderRadius: windowWidth < 768 ? '16px' : '20px',
                  fontSize: '15px',
                  fontWeight: 800,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center', // 左右均等の中央寄せに変更
                  gap: '12px',
                  boxShadow: '0 10px 30px rgba(13, 27, 62, 0.2)',
                  transition: 'all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1)',
                  cursor: 'pointer',
                  minWidth: windowWidth < 768 ? '100%' : '320px'
                }}
              >
                <span style={{ letterSpacing: '0.1em', whiteSpace: 'nowrap' }}>会社概要</span>
              </a>
            </div>

          </div>
        </section>

        {/* 3枚目：事業領域（BUSINESS FIELD）セクション */}
        <section style={{ 
          backgroundColor: '#FFFFFF', 
          padding: windowWidth < 768 ? '80px 0' : '140px 0', 
          width: '100%',
          position: 'relative'
        }}>
          <div style={{ maxWidth: '1300px', margin: '0 auto', paddingLeft: '40px', paddingRight: '40px' }}>
            
            {/* セクションタイトル */}
            <div style={{ textAlign: 'center', marginBottom: windowWidth < 768 ? '60px' : '100px' }}>
              <h2 style={{ 
                color: '#0D1B3E', 
                fontSize: 'clamp(2rem, 5vw, 3rem)', 
                fontWeight: 900, 
                marginBottom: '20px',
                letterSpacing: '0.1em'
              }}>
                事業領域
              </h2>
              <div style={{ width: '60px', height: '4px', background: 'linear-gradient(to right, #319795, #9D72FF)', margin: '0 auto', borderRadius: '2px' }}></div>
            </div>

            {/* 事業領域グリッド：カード全体をリンク化 */}
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: windowWidth < 1024 ? '1fr' : 'repeat(2, 1fr)', 
              gap: windowWidth < 768 ? '40px' : '80px 40px'
            }}>
              
              {[
                { 
                  num: '01', 
                  title: '受託開発', 
                  href: '/services/development',
                  desc: '最新の技術スタックを用いて、物語を完成させるシステムを構築。複雑な要件をシンプルな体験へと昇華させます。',
                  tags: ['Web App', 'Mobile'],
                  icon: <Code2 size={40} />,
                  smallIcon: <Code2 size={18} />,
                  color: '#3182CE'
                },
                { 
                  num: '02', 
                  title: 'AI研究開発', 
                  href: '/services/ai',
                  desc: '生成AIやLLMの業務活用から独自の学習モデル構築まで、最先端の知能をプロダクトに組み込み、ビジネスに魔法をかけます。',
                  tags: [],
                  icon: <BrainCircuit size={40} />,
                  smallIcon: <BrainCircuit size={18} />,
                  color: '#9D72FF'
                },
                { 
                  num: '03', 
                  title: 'ITコンサル', 
                  href: '/services/consulting',
                  desc: '技術は目的ではなく手段。DXの本質を見極め、ビジネスの成功から逆算した最適なアーキテクチャと戦略を提案します。',
                  tags: [],
                  icon: <Compass size={40} />,
                  smallIcon: <Compass size={18} />,
                  color: '#FF5BAE'
                },
                { 
                  num: '04', 
                  title: '多角的事業支援', 
                  href: '/services/support',
                  desc: '創業期から成長期まで、マーケティング・採用・技術選定を統合的に支援し、事業成長を強力にアクセラレートします。',
                  tags: [],
                  icon: <Rocket size={40} />,
                  smallIcon: <Rocket size={18} />,
                  color: '#F6AD55'
                }
              ].map((item, idx) => (
                <a 
                  key={idx} 
                  href={item.href}
                  onMouseEnter={(e) => {
                    const card = e.currentTarget.querySelector('.business-card') as HTMLElement;
                    const title = e.currentTarget.querySelector('.business-title') as HTMLElement;
                    if (card) {
                      card.style.transform = 'translateY(-10px)';
                      card.style.boxShadow = '0 30px 60px rgba(0,0,0,0.12)';
                    }
                    if (title) title.style.color = item.color;
                  }}
                  onMouseLeave={(e) => {
                    const card = e.currentTarget.querySelector('.business-card') as HTMLElement;
                    const title = e.currentTarget.querySelector('.business-title') as HTMLElement;
                    if (card) {
                      card.style.transform = 'translateY(0)';
                      card.style.boxShadow = '0 20px 40px rgba(0,0,0,0.06)';
                    }
                    if (title) title.style.color = '#0D1B3E';
                  }}
                  style={{ 
                    display: 'flex', 
                    alignItems: 'flex-start', 
                    position: 'relative', 
                    textDecoration: 'none', 
                    cursor: 'pointer' 
                  }}
                >
                  {/* 背景の大きな数字 */}
                  <div style={{ 
                    position: 'absolute', 
                    left: windowWidth < 768 ? '-15px' : '-20px', 
                    top: windowWidth < 768 ? '-20px' : '-30px', 
                    fontSize: windowWidth < 768 ? '80px' : '130px', 
                    fontWeight: 900, 
                    color: 'rgba(247, 248, 250, 0.6)', 
                    zIndex: 0,
                    lineHeight: 1,
                    pointerEvents: 'none'
                  }}>
                    {item.num}
                  </div>

                  {/* カードアイコン部分 */}
                  <div 
                    className="business-card"
                    style={{ 
                      position: 'relative', 
                      zIndex: 1, 
                      backgroundColor: '#FFFFFF', 
                      borderRadius: '32px', 
                      padding: '40px', 
                      width: windowWidth < 768 ? '90px' : '220px',
                      height: windowWidth < 768 ? '90px' : '220px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: '0 20px 40px rgba(0,0,0,0.06)',
                      transition: 'all 0.5s cubic-bezier(0.165, 0.84, 0.44, 1)',
                      marginRight: '30px',
                      flexShrink: 0
                    }}
                  >
                    <div style={{ transform: windowWidth < 768 ? 'scale(0.6)' : 'scale(1)', color: item.color, display: 'flex' }}>
                      {item.icon}
                    </div>
                    <div style={{ position: 'absolute', top: '20px', left: '20px', width: '6px', height: '6px', borderRadius: '50%', backgroundColor: item.color }}></div>
                  </div>

                  {/* テキスト部分 */}
                  <div style={{ position: 'relative', zIndex: 1, paddingTop: windowWidth < 768 ? '5px' : '20px', flex: 1 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                      <span style={{ color: item.color, display: 'flex' }}>{item.smallIcon}</span>
                      <h3 className="business-title" style={{ fontSize: windowWidth < 768 ? '18px' : '20px', fontWeight: 800, color: '#0D1B3E', transition: 'color 0.3s ease' }}>
                        {item.title}
                      </h3>
                    </div>
                    <p style={{ fontSize: '14px', color: '#6B7280', lineHeight: 1.6, marginBottom: '15px', maxWidth: windowWidth < 768 ? '100%' : '300px' }}>
                      {item.desc}
                    </p>
                    {item.tags.length > 0 && (
                      <div style={{ display: 'flex', gap: '8px' }}>
                        {item.tags.map(tag => (
                          <span key={tag} style={{ 
                            fontSize: '10px', 
                            fontWeight: 700, 
                            color: '#9CA3AF', 
                            border: '1px solid #E5E7EB', 
                            padding: '4px 12px', 
                            borderRadius: '20px' 
                          }}>
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </a>
              ))}

            </div>
          </div>
        </section>

        {/* 4枚目：見積もりシミュレーター セクション */}
        <section style={{ 
          backgroundColor: '#F8F9FB', 
          padding: windowWidth < 768 ? '60px 20px' : '100px 40px', 
          width: '100%' 
        }}>
          <div style={{ 
            maxWidth: '1100px', 
            margin: '0 auto', 
            backgroundColor: '#FFFFFF', 
            borderRadius: '40px', 
            padding: windowWidth < 768 ? '40px 20px' : '60px 80px',
            boxShadow: '0 20px 60px rgba(0,0,0,0.05)',
            display: 'flex',
            flexDirection: windowWidth < 1024 ? 'column' : 'row',
            alignItems: 'center',
            gap: '60px',
            overflow: 'hidden'
          }}>
            {/* 左側：テキストコンテンツ */}
            <div style={{ flex: 1, textAlign: windowWidth < 1024 ? 'center' : 'left' }}>
              <div style={{ 
                display: 'inline-flex', 
                alignItems: 'center', 
                gap: '8px', 
                backgroundColor: '#E6FFFA', 
                padding: '6px 16px', 
                borderRadius: '100px',
                marginBottom: '24px'
              }}>
                <span style={{ fontSize: '12px', color: '#319795', fontWeight: 'bold' }}>✨ ESTIMATE SIMULATOR</span>
              </div>
              
              <h2 style={{ 
                fontSize: 'clamp(24px, 4vw, 42px)', 
                fontWeight: 900, 
                color: '#0D1B3E', 
                lineHeight: 1.3, 
                marginBottom: '24px' 
              }}>
                物語の予算を、<br />
                <span style={{ color: '#005BAC' }}>今すぐ可視化。</span>
              </h2>
              
              <p style={{ 
                fontSize: '14px', 
                color: '#6B7280', 
                lineHeight: 1.8, 
                marginBottom: '40px',
                maxWidth: '450px',
                margin: windowWidth < 1024 ? '0 auto 40px' : '0 0 40px'
              }}>
                理想のプロジェクトに、どれくらいの期間と費用が必要か。いくつかの質問に答えるだけで概算を算出します。AI開発モードなら、通常コストの1/3で構築可能なプランもご提案。
              </p>

              <a 
                href="/estimate"
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)';
                  e.currentTarget.style.backgroundColor = '#1A2B5A';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.backgroundColor = '#0D1B3E';
                }}
                style={{ 
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '12px',
                  backgroundColor: '#0D1B3E',
                  color: '#FFFFFF',
                  padding: '16px 32px',
                  borderRadius: '16px',
                  fontSize: '14px',
                  fontWeight: 'bold',
                  textDecoration: 'none',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 10px 20px rgba(13, 27, 62, 0.2)'
                }}
              >
                見積もりを開始する
                <span style={{ fontSize: '18px' }}>📄</span>
              </a>
            </div>

            {/* 右側：ビジュアル要素（シミュレーション画面のイメージ） */}
            <div style={{ 
              flex: 1, 
              position: 'relative',
              display: 'flex',
              justifyContent: 'center',
              width: '100%'
            }}>
              {/* カードの背面装飾 */}
              <div style={{ 
                position: 'absolute', 
                width: '120%', 
                height: '120%', 
                background: 'radial-gradient(circle, rgba(0, 91, 172, 0.05) 0%, transparent 70%)',
                top: '-10%',
                left: '-10%',
                zIndex: 0
              }} />

              {/* シミュレーションカード本体 */}
              <div style={{ 
                position: 'relative',
                zIndex: 1,
                width: '100%',
                maxWidth: '400px',
                backgroundColor: '#FFFFFF',
                borderRadius: '24px',
                padding: '30px',
                boxShadow: '0 30px 60px rgba(0,0,0,0.1)',
                border: '1px solid rgba(0, 91, 172, 0.1)'
              }}>
                <div style={{ height: '8px', width: '60px', backgroundColor: '#F3F4F6', borderRadius: '4px', marginBottom: '12px' }} />
                <div style={{ height: '32px', width: '100%', backgroundColor: '#F9FAFB', borderRadius: '8px', marginBottom: '20px' }} />
                <div style={{ height: '32px', width: '80%', backgroundColor: '#F9FAFB', borderRadius: '8px', marginBottom: '40px' }} />
                
                <div style={{ borderTop: '1px dashed #E5E7EB', paddingTop: '20px' }}>
                  <p style={{ fontSize: '10px', color: '#9CA3AF', fontWeight: 'bold', marginBottom: '4px' }}>ESTIMATED TOTAL</p>
                  <p style={{ fontSize: '28px', fontWeight: 900, color: '#0D1B3E', marginBottom: '20px' }}>¥1,500,000<span style={{ fontSize: '16px' }}>〜</span></p>
                  <div style={{ 
                    backgroundColor: '#005BAC', 
                    height: '44px', 
                    borderRadius: '10px', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    color: '#FFFFFF',
                    fontSize: '12px',
                    fontWeight: 'bold'
                  }}>
                    PDFで発注書案を保存
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 5枚目：最新情報（NEWS）セクション */}
        <section style={{ 
          backgroundColor: '#FFFFFF', 
          padding: windowWidth < 768 ? '80px 0' : '140px 0', 
          width: '100%',
          position: 'relative',
          overflow: 'hidden'
        }}>
          {/* 背景の薄いグラデーション装飾 */}
          <div style={{ 
            position: 'absolute', 
            width: '100%', 
            height: '100%', 
            top: 0, 
            left: 0, 
            background: 'radial-gradient(circle at 50% 50%, rgba(0, 91, 172, 0.02) 0%, transparent 70%)',
            zIndex: 0
          }} />

          <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 40px', position: 'relative', zIndex: 1 }}>
            
            {/* ヘッダーエリア：タイトルと「すべて見る」リンク */}
            <div style={{ 
              display: 'flex', 
              justifyContent: 'space-between', 
              alignItems: 'flex-end', 
              marginBottom: '60px',
              borderBottom: '1px solid #F3F4F6',
              paddingBottom: '20px'
            }}>
              <div>
                <h2 style={{ color: '#0D1B3E', fontSize: '32px', fontWeight: 900, marginBottom: '10px' }}>最新情報</h2>
                <div style={{ width: '40px', height: '4px', backgroundColor: '#0D1B3E' }}></div>
              </div>
              <a href="/news" style={{ 
                color: '#0D1B3E', 
                fontSize: '14px', 
                fontWeight: 'bold', 
                textDecoration: 'none',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                borderBottom: '1px solid #0D1B3E',
                paddingBottom: '4px'
              }}>
                すべて見る
              </a>
            </div>

            {/* ニュースリスト：台帳(newsData.tsx)の一番上から3件を自動表示 */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {newsItems.slice(0, 3).map((news, idx) => (
                <a 
                  key={idx} 
                  href={news.url}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateX(10px)';
                    e.currentTarget.style.backgroundColor = '#FFFFFF';
                    e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.05)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateX(0)';
                    e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.6)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                  style={{ 
                    display: 'flex', 
                    alignItems: windowWidth < 768 ? 'flex-start' : 'center', 
                    flexDirection: windowWidth < 768 ? 'column' : 'row',
                    gap: windowWidth < 768 ? '12px' : '40px',
                    padding: '24px 32px', 
                    backgroundColor: 'rgba(255, 255, 255, 0.6)',
                    borderRadius: '20px', 
                    textDecoration: 'none', 
                    transition: 'all 0.3s ease',
                    border: '1px solid #F3F4F6'
                  }}
                >
                  {/* 日付とカテゴリタグ */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '20px', flexShrink: 0 }}>
                    <span style={{ fontSize: '14px', color: '#9CA3AF', fontWeight: '500', fontFamily: 'monospace' }}>{news.date}</span>
                    <span style={{ 
                      fontSize: '10px', 
                      fontWeight: '800', 
                      color: '#005BAC', 
                      backgroundColor: '#E6F0FF', 
                      padding: '4px 10px', 
                      borderRadius: '4px',
                      letterSpacing: '0.05em'
                    }}>
                      {news.category}
                    </span>
                  </div>

                  {/* タイトル */}
                  <div style={{ 
                    fontSize: windowWidth < 768 ? '14px' : '16px', 
                    color: '#0D1B3E', 
                    fontWeight: '700', 
                    flex: 1,
                    lineHeight: 1.6
                  }}>
                    {news.title}
                  </div>

                  {/* 矢印アイコン */}
                  <div style={{ color: '#E5E7EB', fontSize: '18px', display: windowWidth < 768 ? 'none' : 'block' }}>→</div>
                </a>
              ))}
            </div>

          </div>
        </section>

        {/* 6枚目：代表挨拶（MESSAGE）セクション */}
        <section style={{ 
          backgroundColor: '#FFFFFF', 
          padding: windowWidth < 768 ? '80px 0' : '140px 0', 
          width: '100%' 
        }}>
          <div style={{ 
            maxWidth: '1100px', 
            margin: '0 auto', 
            padding: '0 40px',
            display: 'flex',
            flexDirection: windowWidth < 1024 ? 'column' : 'row',
            alignItems: 'center',
            gap: windowWidth < 1024 ? '60px' : '100px'
          }}>
            
            {/* 左側：CEO写真エリア */}
            <div style={{ position: 'relative', flexShrink: 0 }}>
              <div style={{ 
                width: windowWidth < 768 ? '280px' : '380px', 
                height: windowWidth < 768 ? '320px' : '480px', 
                borderRadius: '40px',
                overflow: 'hidden',
                boxShadow: '0 30px 60px rgba(0,0,0,0.1)'
              }}>
                <img 
                  src="/ceo.png" 
                  alt="代表取締役社長 溝口雅登" 
                  style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }}
                />
              </div>
              {/* 写真の左下にある名前ラベル */}
              <div style={{ 
                position: 'absolute', 
                bottom: '40px', 
                left: '40px', 
                color: '#FFFFFF',
                zIndex: 2
              }}>
                <p style={{ fontSize: '12px', fontWeight: 'bold', letterSpacing: '0.1em', marginBottom: '8px', color: '#319795' }}>CEO / FOUNDER</p>
                <h3 style={{ fontSize: '24px', fontWeight: 900 }}>溝口雅登</h3>
                <div style={{ width: '30px', height: '3px', background: 'linear-gradient(to right, #319795, #9D72FF)', marginTop: '15px' }}></div>
              </div>
              {/* 写真に重ねるグラデーション（名前を読みやすくするため） */}
              <div style={{ 
                position: 'absolute', 
                inset: 0, 
                background: 'linear-gradient(to top, rgba(13,27,62,0.6) 0%, transparent 40%)',
                borderRadius: '40px'
              }} />
            </div>

            {/* 右側：メッセージエリア */}
            <div style={{ flex: 1 }}>
              <div style={{ marginBottom: '40px' }}>
                <p style={{ color: '#319795', fontSize: '12px', fontWeight: 'bold', letterSpacing: '0.4em', marginBottom: '16px' }}>MESSAGE</p>
                <h2 style={{ color: '#0D1B3E', fontSize: 'clamp(28px, 4vw, 36px)', fontWeight: 900, lineHeight: 1.3 }}>代表挨拶</h2>
                <div style={{ width: '60px', height: '4px', background: 'linear-gradient(to right, #319795, #9D72FF)', marginTop: '24px', borderRadius: '2px' }}></div>
              </div>

              <div style={{ color: '#6B7280', fontSize: '17px', lineHeight: 2, letterSpacing: '0.03em' }}>
                <p style={{ marginBottom: '24px' }}>
                  平素より格別のご高配を賜り、誠にありがとうございます。<br />
                  当社はお客様と常に歩み寄り、自ら限界を決めず最後までやり遂げる意思を込めて、Meece株式会社が立ち上がりました。
                </p>
                <p style={{ marginBottom: '24px' }}>
                  お客様との信頼関係を築き上げご期待に沿えるサービスをご提供することをお約束するとともに、当社もお客様と共に成長致します。
                </p>
                <p style={{ marginBottom: '48px' }}>
                  人を大切に、人以外も大切に、および何より皆が自分自身を大切にできるよう会社組織を運営して参りますので、今後ともMeeceへの変わらぬご支援とご指導を賜りますよう、よろしくお願い申し上げます。
                </p>
              </div>

              {/* 署名エリア */}
              <div style={{ textAlign: 'right' }}>
                <p style={{ fontSize: '14px', fontWeight: 'bold', color: '#0D1B3E', marginBottom: '10px' }}>Meece株式会社 代表取締役社長</p>
                <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                  <img src="/sign.png" alt="溝口雅登 署名" style={{ height: '80px', width: 'auto' }} />
                </div>
              </div>
            </div>

          </div>
       </section>

        {/* 7枚目：採用（RECRUIT）セクション：横幅フルサイズ版 */}
        <section style={{ 
          width: '100%',
          background: 'linear-gradient(135deg, #FF8C00 0%, #FF0055 50%, #9D72FF 100%)', 
          padding: windowWidth < 768 ? '80px 0' : '140px 0',
          position: 'relative',
          overflow: 'hidden'
        }}>
          <div style={{ 
            maxWidth: '1300px', 
            margin: '0 auto', 
            padding: '0 40px',
            display: 'flex',
            flexDirection: windowWidth < 1024 ? 'column' : 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '60px',
            position: 'relative',
            zIndex: 1
          }}>
            {/* 左側：テキストコンテンツ */}
            <div style={{ flex: 1, color: '#FFFFFF', position: 'relative', zIndex: 1 }}>
              <p style={{ fontSize: '12px', fontWeight: 'bold', letterSpacing: '0.4em', marginBottom: '24px', opacity: 0.9 }}>JOIN OUR STORY</p>
              <h2 style={{ 
                fontSize: 'clamp(32px, 5vw, 56px)', 
                fontWeight: 900, 
                lineHeight: 1.2, 
                marginBottom: '32px',
                letterSpacing: '-0.02em'
              }}>
                共に、<br />
                ワクワクを<br />
                <span style={{ position: 'relative', display: 'inline-block' }}>
                  創りませんか？
                  <div style={{ position: 'absolute', bottom: '8px', left: 0, width: '100%', height: '8px', backgroundColor: '#FFD700', zIndex: -1, opacity: 0.8 }}></div>
                </span>
              </h2>
              <p style={{ 
                fontSize: '15px', 
                lineHeight: 1.8, 
                marginBottom: '48px', 
                maxWidth: '400px',
                opacity: 0.9,
                fontWeight: 500
              }}>
                私たちは技術を売るだけの集団ではありません。<br />
                社員自身が、および世の中のお客様が、心から「ワクワク」できる未来をITで形にする組織でありたいと考えています。
              </p>

              <a 
                href="/recruit"
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)';
                  e.currentTarget.style.backgroundColor = '#F3F4F6';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.backgroundColor = '#FFFFFF';
                }}
                style={{ 
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '12px',
                  backgroundColor: '#FFFFFF',
                  color: '#FF0055',
                  padding: '18px 40px',
                  borderRadius: '100px',
                  fontSize: '15px',
                  fontWeight: '900',
                  textDecoration: 'none',
                  transition: 'all 0.3s cubic-bezier(0.165, 0.84, 0.44, 1)',
                  boxShadow: '0 10px 20px rgba(0,0,0,0.1)'
                }}
              >
                採用情報を見る
                <span style={{ fontSize: '18px' }}>👤</span>
              </a>
            </div>

            {/* 右側：メッセージカード */}
            <div style={{ 
              flex: 1, 
              display: 'flex', 
              justifyContent: 'center',
              width: '100%',
              position: 'relative',
              zIndex: 1
            }}>
              <div style={{ 
                backgroundColor: '#FFFFFF', 
                borderRadius: '32px', 
                padding: '40px', 
                width: '100%', 
                maxWidth: '440px',
                boxShadow: '0 20px 50px rgba(0,0,0,0.15)'
              }}>
                {[
                  { icon: '🧡', title: '自分を大切にする', desc: '個の幸福が最高のクリエイティブを生む。', color: '#FF8C00' },
                  { icon: '✨', title: '限界を決めない', desc: '未知の課題に「ワクワク」を乗せて挑む。', color: '#9D72FF' },
                  { icon: '😊', title: '喜びを共鳴させる', desc: '完成した物語を、世界と一緒に味わう。', color: '#FF0055' }
                ].map((item, idx) => (
                  <div key={idx} style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: '20px', 
                    marginBottom: idx === 2 ? 0 : '32px' 
                  }}>
                    <div style={{ 
                      width: '48px', 
                      height: '48px', 
                      borderRadius: '14px', 
                      backgroundColor: '#F9FAFB', 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center',
                      fontSize: '20px',
                      border: `1px solid ${item.color}22`
                    }}>
                      {item.icon}
                    </div>
                    <div>
                      <h4 style={{ fontSize: '16px', fontWeight: '800', color: '#0D1B3E', marginBottom: '4px' }}>{item.title}</h4>
                      <p style={{ fontSize: '12px', color: '#9CA3AF', fontWeight: '500' }}>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 8枚目：お問い合わせ（CONTACT）セクション */}
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
              お問い合わせ
            </h2>
            <div style={{ 
              width: '60px', 
              height: '4px', 
              background: 'linear-gradient(to right, #319795, #9D72FF)', 
              margin: '0 auto 50px', 
              borderRadius: '2px' 
            }}></div>

            <ContactForm />
          </div>
        </section>

        {/* 共通フッターの呼び出し */}
        <Footer />
      </main>
    </div>
 );
}

// App.tsxから読み込めるように、この1行を最後に追加してください
export default Home;