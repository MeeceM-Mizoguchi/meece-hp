import React, { useState, useEffect, useRef } from 'react';
import { Navbar } from '../components/organisms/Navbar';
import { Footer } from '../components/organisms/Footer';
import { 
  Zap, 
  Rocket, 
  Cpu, 
  ChevronRight, 
  Sparkles,
  Trophy,
  Lightbulb,
  ShieldCheck,
  MessageSquare,
  ChevronDown,
  Users
} from 'lucide-react';

// スクロール連動アニメーション用コンポーネント
const FadeInSection: React.FC<{ children: React.ReactNode; delay?: string }> = ({ children, delay = '0s' }) => {
  const [isVisible, setVisible] = React.useState(false);
  const domRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) setVisible(true);
      });
    });
    if (domRef.current) observer.observe(domRef.current);
    return () => {
      if (domRef.current) observer.unobserve(domRef.current);
    };
  }, []);

  return (
    <div
      ref={domRef}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'none' : 'translateY(80px)',
        transition: `opacity 1.2s ease-out ${delay}, transform 1.4s cubic-bezier(0.16, 1, 0.3, 1) ${delay}`,
        willChange: 'opacity, transform'
      }}
    >
      {children}
    </div>
  );
};

// よくある質問のアイテム用コンポーネント
const FAQItem: React.FC<{ question: string; answer: string }> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div style={{ borderBottom: '1px solid #E2E8F0', padding: '24px 0' }}>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left', padding: 0 }}
      >
        <span style={{ fontSize: '18px', fontWeight: 800, color: '#0D1B3E' }}>{question}</span>
        <ChevronDown size={24} style={{ transform: isOpen ? 'rotate(180deg)' : 'none', transition: '0.3s', color: '#9D72FF' }} />
      </button>
      {isOpen && (
        <div style={{ marginTop: '16px', color: '#64748B', lineHeight: 1.8, fontSize: '16px', animation: 'fadeIn 0.5s ease' }}>
          {answer}
        </div>
      )}
    </div>
  );
};

export const AILab: React.FC = () => {
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);

  useEffect(() => {
    window.scrollTo(0, 0);
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div style={{ backgroundColor: '#FFFFFF', minHeight: '100vh', width: '100%', overflowX: 'hidden' }}>
      <Navbar />
      
      <main>
        {/* 1. ヒーロー：圧倒的インパクト */}
        <section style={{ 
          height: '100vh', minHeight: '900px', background: '#050A18',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          position: 'relative', overflow: 'hidden'
        }}>
          {/* 背景動画の拡大によるウォーターマークのトリミング */}
          <video
            autoPlay
            muted
            loop
            playsInline
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              width: '110%', // 10% 拡大
              height: '110%', // 10% 拡大
              objectFit: 'cover',
              transform: 'translate(-50%, -50%)',
              zIndex: 0,
              opacity: 0.6 // 動画の明るさを調整（文字を読みやすくするため）
            }}
          >
            <source src="/openingAILab.mp4" type="video/mp4" />
          </video>

          <div className="dynamic-bg" style={{ zIndex: 1 }}></div>
          <div className="scanner-line" style={{ zIndex: 2 }}></div>
          
          <div style={{ textAlign: 'center', zIndex: 10, padding: '0 24px' }}>
            <FadeInSection>
              <div className="top-badge">
                <div className="pulse-dot"></div> AI × 爆速開発特設チーム
              </div>
              <h1 className="main-title">
                昨日思いついた企画、<br />
                <span className="gradient-text">明日、動かしましょう。</span>
              </h1>
              <p className="main-description">
                「検討」の時間はもう不要です。AI駆動の超高速開発により、<br />
                あなたのアイディアを最短24時間でビジネスの武器に変貌させます。
              </p>
              <div className="hero-actions">
                <a href="#contact" className="action-btn-main">無料で爆速デモを依頼する</a>
                <a href="#process" className="action-btn-sub">24時間の流れを見る</a>
              </div>
            </FadeInSection>
          </div>
        </section>

        {/* 追加：お悩み解決セクション */}
        <section style={{ padding: '140px 0', background: '#FFFFFF' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
            <FadeInSection>
              <h2 className="section-title">こんなお悩み、ありませんか？</h2>
              <p className="section-subtitle">開発の「遅い・高い・難しい」を、Meeceが解決します。</p>
            </FadeInSection>
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: windowWidth < 1024 ? '1fr' : '1fr 1fr 1fr', 
              gap: '40px', 
              marginTop: '60px' 
            }}>
              {[
                { 
                  title: "アイディアはあるが形にできない", 
                  text: "「動くもの」がないため、社内の合意形成や予算獲得が進まない。" 
                },
                { 
                  title: "市場への投入を急いでいる", 
                  text: "競合に先を越される前に、最速でプロダクトをリリースしたい。" 
                },
                { 
                  title: "検証に多額の予算はかけられない", 
                  text: "本格開発の前に、まずは最小限のコストでユーザーの反応を見たい。" 
                }
              ].map((item, i) => (
                <FadeInSection key={i} delay={`${i * 0.2}s`}>
                  <div style={{ 
                    background: '#F8FAFC', 
                    padding: '40px', 
                    borderRadius: '32px', 
                    border: '1px solid #E2E8F0', 
                    height: '100%' 
                  }}>
                    <div style={{ color: '#9D72FF', marginBottom: '20px' }}>
                      <Lightbulb size={32} />
                    </div>
                    <h3 style={{ fontSize: '22px', fontWeight: 900, marginBottom: '16px', color: '#0D1B3E' }}>{item.title}</h3>
                    <p style={{ color: '#64748B', lineHeight: 1.7 }}>{item.text}</p>
                  </div>
                </FadeInSection>
              ))}
            </div>
          </div>
        </section>

        {/* 2. ステップセクション：開発の流れ（新セクション） */}
        <section id="process" style={{ padding: '160px 0', background: '#FFFFFF' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
            <FadeInSection>
              <h2 className="section-title">完成までの24時間</h2>
              <p className="section-subtitle">迷っている暇はありません。私たちはこのスピードで進みます。</p>
            </FadeInSection>

            <div className="step-container">
              {[
                { time: '09:00', title: '超速ヒアリング', desc: 'オンラインで30分。やりたいことを伝えるだけでOKです。', icon: <MessageSquare /> },
                { time: '13:00', title: 'AI基盤設計', desc: 'AIが数分でコードを生成。エンジニアが即座に最適化します。', icon: <Cpu /> },
                { time: '21:00', title: '最終研磨・検証', desc: 'プロの目で細部を調整。本番クオリティまで引き上げます。', icon: <ShieldCheck /> },
                { time: '翌朝', title: 'デモ納品', desc: 'おめでとうございます。あなたのアイディアが動き出しました。', icon: <Rocket /> }
              ].map((step, i) => (
                <FadeInSection key={i} delay={`${i * 0.2}s`}>
                  <div className="step-card">
                    <div className="step-time">{step.time}</div>
                    <div className="step-icon">{step.icon}</div>
                    <h3>{step.title}</h3>
                    <p>{step.desc}</p>
                  </div>
                </FadeInSection>
              ))}
            </div>
          </div>
        </section>

        {/* 追加：導入メリット・セクション */}
        <section style={{ padding: '140px 0', background: '#FFFFFF' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
            <FadeInSection>
              <h2 className="section-title">24時間デモがもたらす、3つの革新</h2>
              <p className="section-subtitle">「速さ」は、それだけでビジネスの強力な武器になります。</p>
            </FadeInSection>
            
            <div style={{ display: 'grid', gridTemplateColumns: windowWidth < 1024 ? '1fr' : '1fr 1fr 1fr', gap: '40px', marginTop: '60px' }}>
              <FadeInSection delay="0.1s">
                <div style={{ textAlign: 'center', padding: '40px' }}>
                  <div style={{ width: '80px', height: '80px', borderRadius: '50%', background: 'rgba(0, 251, 255, 0.1)', color: '#00FBFF', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px' }}>
                    <Trophy size={40} />
                  </div>
                  <h3 style={{ fontSize: '20px', fontWeight: 900, marginBottom: '16px', color: '#0D1B3E' }}>商談・コンペの勝率向上</h3>
                  <p style={{ color: '#64748B', lineHeight: 1.7, fontSize: '15px' }}>
                    競合がプレゼン資料を準備している間に、実機デモを提示。圧倒的な「具体性」で顧客の心を掴みます。
                  </p>
                </div>
              </FadeInSection>

              <FadeInSection delay="0.3s">
                <div style={{ textAlign: 'center', padding: '40px' }}>
                  <div style={{ width: '80px', height: '80px', borderRadius: '50%', background: 'rgba(157, 114, 255, 0.1)', color: '#9D72FF', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px' }}>
                    <ShieldCheck size={40} />
                  </div>
                  <h3 style={{ fontSize: '20px', fontWeight: 900, marginBottom: '16px', color: '#0D1B3E' }}>開発リスクの極小化</h3>
                  <p style={{ color: '#64748B', lineHeight: 1.7, fontSize: '15px' }}>
                    「作ってみたら違った」という後戻りを防止。初期段階で触れることで、正しい投資判断が可能になります。
                  </p>
                </div>
              </FadeInSection>

              <FadeInSection delay="0.5s">
                <div style={{ textAlign: 'center', padding: '40px' }}>
                  <div style={{ width: '80px', height: '80px', borderRadius: '50%', background: 'rgba(255, 112, 171, 0.1)', color: '#FF70AB', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px' }}>
                    <Zap size={40} />
                  </div>
                  <h3 style={{ fontSize: '20px', fontWeight: 900, marginBottom: '16px', color: '#0D1B3E' }}>社内合意のスピード化</h3>
                  <p style={{ color: '#64748B', lineHeight: 1.7, fontSize: '15px' }}>
                    言葉では伝わらない革新性も、触れば一瞬。稟議や承認フローを劇的にスピードアップさせます。
                  </p>
                </div>
              </FadeInSection>
            </div>
          </div>
        </section>

        {/* 追加：徹底比較表セクション */}
        <section style={{ padding: '140px 0', background: '#F8FAFC' }}>
          <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 24px' }}>
            <FadeInSection>
              <h2 className="section-title">一般的な開発会社との違い</h2>
              <p className="section-subtitle">スピード、コスト、成果物。すべてにおいて常識を塗り替えます。</p>
            </FadeInSection>
            <FadeInSection delay="0.3s">
              <div style={{ marginTop: '60px', overflowX: 'auto' }}>
                <table style={{ 
                  width: '100%', 
                  borderCollapse: 'separate', 
                  borderSpacing: 0,
                  borderRadius: '24px', 
                  overflow: 'hidden', 
                  boxShadow: '0 20px 40px rgba(0,0,0,0.05)',
                  backgroundColor: '#FFFFFF'
                }}>
                  <thead>
                    <tr style={{ background: '#0D1B3E', color: '#FFFFFF' }}>
                      <th style={{ padding: '24px', textAlign: 'left', fontSize: '16px' }}>比較項目</th>
                      <th style={{ padding: '24px', textAlign: 'left', fontSize: '16px' }}>一般的な受託開発</th>
                      <th style={{ padding: '24px', textAlign: 'left', fontSize: '16px', background: '#1A2B5A', color: '#00FBFF' }}>Meece AIラボ</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { item: "納品スピード", common: "1ヶ月〜3ヶ月", ai: "最短24時間" },
                      { item: "初期費用", common: "数百万円〜", ai: "圧倒的な低コスト" },
                      { item: "成果物の形", common: "設計書・仕様書", ai: "動く実機デモ" },
                      { item: "仕様変更", common: "再見積もり・数週間", ai: "その場で即時反映" }
                    ].map((row, i) => (
                      <tr key={i}>
                        <td style={{ padding: '24px', fontWeight: 800, color: '#0D1B3E', borderBottom: '1px solid #E2E8F0' }}>{row.item}</td>
                        <td style={{ padding: '24px', color: '#64748B', borderBottom: '1px solid #E2E8F0' }}>{row.common}</td>
                        <td style={{ padding: '24px', color: '#0D1B3E', fontWeight: 900, borderBottom: '1px solid #E2E8F0', background: 'rgba(0, 251, 255, 0.02)' }}>
                          <span style={{ color: '#00FBFF', marginRight: '8px' }}>✓</span>{row.ai}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </FadeInSection>
          </div>
        </section>

        {/* 3. 実績カウンター：ド派手な反転背景 */}
        <section style={{ padding: '120px 0', background: '#0D1B3E', color: '#FFFFFF' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', gap: '60px' }}>
              {[
                { label: '開発コスト削減率', value: '90%', sub: '※従来比' },
                { label: '最短デモ納品', value: '24h', sub: '一晩で完成' },
                { label: '案件継続率', value: '98%', sub: '高い信頼性' }
              ].map((item, i) => (
                <FadeInSection key={i} delay={`${i * 0.1}s`}>
                  <div style={{ textAlign: 'center' }}>
                    <div className="counter-value">{item.value}</div>
                    <div style={{ fontSize: '16px', fontWeight: 800, color: '#00FBFF', marginTop: '10px' }}>{item.label}</div>
                    <div style={{ fontSize: '12px', opacity: 0.5 }}>{item.sub}</div>
                  </div>
                </FadeInSection>
              ))}
            </div>
          </div>
        </section>

        {/* 追加：テクノロジースタック・セクション */}
        <section style={{ padding: '100px 0', background: '#FFFFFF', textAlign: 'center' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
            <FadeInSection>
              <p style={{ fontSize: '14px', fontWeight: 900, color: '#94A3B8', letterSpacing: '0.2em', marginBottom: '40px' }}>
                使用テクノロジー
              </p>
              <div style={{ 
                display: 'flex', 
                flexWrap: 'wrap', 
                justifyContent: 'center', 
                gap: '30px', 
                opacity: 0.6 
              }}>
                {["React", "TypeScript", "Next.js", "Python", "OpenAI", "Claude", "AWS", "Tailwind CSS"].map((tech, i) => (
                  <span key={i} style={{ fontSize: '18px', fontWeight: 800, color: '#0D1B3E' }}>
                    {tech}
                  </span>
                ))}
              </div>
            </FadeInSection>
          </div>
        </section>

        {/* 4. 私たちの約束（新セクション） */}
        <section style={{ padding: '160px 0', background: '#F8FAFC' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: windowWidth < 1024 ? '1fr' : '1fr 1fr', gap: '100px', alignItems: 'center' }}>
              <FadeInSection>
                <h2 style={{ fontSize: '48px', fontWeight: 900, color: '#0D1B3E', lineHeight: 1.2, marginBottom: '32px' }}>
                  プロとして、<br /><span style={{ color: '#9D72FF' }}>三つの絶対</span>を約束します。
                </h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
                  <div className="promise-item">
                    <div className="promise-num">01</div>
                    <div>
                      <h4>「できません」と言いません</h4>
                      <p>どうすれば最短で実現できるか、常に代替案と共に提案します。</p>
                    </div>
                  </div>
                  <div className="promise-item">
                    <div className="promise-num">02</div>
                    <div>
                      <h4>隠れたコストはゼロ</h4>
                      <p>明快なワンプライス。追加料金の心配なくプロジェクトに集中できます。</p>
                    </div>
                  </div>
                  <div className="promise-item">
                    <div className="promise-num">03</div>
                    <div>
                      <h4>作った後のサポートも爆速</h4>
                      <p>デモで終わらせない。本番導入への道筋も一緒に作ります。</p>
                    </div>
                  </div>
                </div>
              </FadeInSection>
              
              <FadeInSection delay="0.4s">
                <div className="visual-box">
                  <div className="floating-icons">
                    <Zap className="f-icon i1" size={48} />
                    <Cpu className="f-icon i2" size={64} />
                    <Sparkles className="f-icon i3" size={40} />
                  </div>
                  <div className="main-visual-circle">
                    <Trophy size={100} color="#FFFFFF" />
                  </div>
                </div>
              </FadeInSection>
            </div>
          </div>
        </section>

        {/* 修正：ド派手な代表メッセージ・セクション */}
        <section style={{ 
          padding: '180px 0', 
          background: 'linear-gradient(135deg, #050A18 0%, #1A2B5A 100%)', 
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden'
        }}>
          {/* 背景の浮遊ネオン・イラスト */}
          <div className="floating-neon" style={{ position: 'absolute', top: '10%', left: '5%', color: '#00FBFF', opacity: 0.2, animationDelay: '0s' }}>
            <Sparkles size={120} />
          </div>
          <div className="floating-neon" style={{ position: 'absolute', bottom: '15%', right: '8%', color: '#9D72FF', opacity: 0.2, animationDelay: '2s' }}>
            <Zap size={100} />
          </div>
          <div className="floating-neon" style={{ position: 'absolute', top: '40%', right: '5%', color: '#FF70AB', opacity: 0.1, animationDelay: '4s' }}>
            <Lightbulb size={80} />
          </div>

          <div style={{ maxWidth: '900px', margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 10 }}>
            <FadeInSection>
              <h2 style={{ 
                fontSize: windowWidth < 768 ? '40px' : '64px', 
                fontWeight: 900, 
                lineHeight: 1.2, 
                marginBottom: '56px',
                letterSpacing: '-0.03em'
              }}>
                <span style={{ color: '#FFFFFF' }}>「とりあえず作ってみる」が、</span><br />
                <span className="gradient-text-active">ビジネスの未来を変える。</span>
              </h2>
              <div style={{
                background: 'rgba(255, 255, 255, 0.03)',
                padding: '60px',
                borderRadius: '48px',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                backdropFilter: 'blur(10px)',
                boxShadow: '0 40px 80px rgba(0,0,0,0.3)'
              }}>
                <p style={{ 
                  fontSize: '18px', 
                  color: 'rgba(255, 255, 255, 0.7)', 
                  lineHeight: 2.2, 
                  textAlign: 'left',
                  margin: 0
                }}>
                  完璧な計画を立てるために1ヶ月かけるなら、私たちは1日でプロトタイプを作り、ユーザーの声を聞くべきだと考えます。
                  失敗を恐れて動かない時間こそが、最大のコストです。<br /><br />
                  <strong style={{ color: '#FFFFFF', fontWeight: 800 }}>Meece AI Labは、単なる開発チームではありません。</strong><br />
                  あなたのアイディアを「爆速」で市場に送り込み、共にイノベーションを起こすための武器です。
                  まずは明日、あなたの構想が「動く形」になった姿を見てみませんか？
                </p>
                <div style={{ marginTop: '60px', textAlign: 'center' }}>
                  <div style={{ 
                    fontWeight: 900, 
                    color: '#00FBFF', 
                    fontSize: '20px',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '10px',
                    border: '1px solid #00FBFF',
                    padding: '10px 30px',
                    borderRadius: '100px',
                    background: 'rgba(0, 251, 255, 0.05)'
                  }}>
                    <Users size={20} /> Meece AI Lab 開発チーム一同
                  </div>
                </div>
              </div>
            </FadeInSection>
          </div>
        </section>

        {/* 5. よくある質問（新セクション） */}
        <section style={{ padding: '160px 0', background: '#FFFFFF' }}>
          <div style={{ maxWidth: '800px', margin: '0 auto', padding: '0 24px' }}>
            <FadeInSection>
              <h2 className="section-title">よくある質問</h2>
            </FadeInSection>
            <FadeInSection delay="0.2s">
              <div style={{ marginTop: '40px' }}>
                <FAQItem 
                  question="本当に24時間で完成するのですか？" 
                  answer="はい、要件が明確なプロトタイプであれば最短24時間で納品可能です。AIによる自動生成と、弊社の熟練エンジニアがチームを組むことで実現しています。" 
                />
                <FAQItem 
                  question="まだアイディア段階ですが相談してもいいですか？" 
                  answer="もちろんです！むしろアイディア段階でご相談いただくのが一番効果的です。お話を聞きながら、その場で技術的な実現可能性を判断いたします。" 
                />
                <FAQItem 
                  question="開発後の保守や本番展開もお願いできますか？" 
                  answer="もちろんです。デモで検証した結果を元に、本格的なシステム開発・運用フェーズへの移行もスムーズにサポートさせていただきます。" 
                />
                <FAQItem 
                  question="費用感はどのくらいですか？" 
                  answer="内容によりますが、従来の開発会社の見積もりの数分の一から、驚くほどの低コストでご提供しています。詳細はお問い合わせ後、即座に概算をお出しします。" 
                />
              </div>
            </FadeInSection>
          </div>
        </section>

        {/* 6. お問い合わせ */}
        <section id="contact" style={{ padding: '160px 0', background: '#050A18', position: 'relative' }}>
          <div style={{ maxWidth: '800px', margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 10 }}>
            <FadeInSection>
              <div className="final-contact-card">
                <h2 style={{ fontSize: '36px', fontWeight: 900, marginBottom: '16px' }}>さあ、イノベーションを。</h2>
                <p style={{ color: 'rgba(255,255,255,0.6)', marginBottom: '40px' }}>あなたの「やりたい」を、私たちが「動く」に変えます。</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                  <input type="text" placeholder="お名前 / 貴社名" className="glass-input" />
                  <input type="email" placeholder="メールアドレス" className="glass-input" />
                  <textarea placeholder="実現したいアイディアを自由に入力してください" className="glass-input" rows={4}></textarea>
                  <button className="shiny-btn">
                    爆速デモの相談を始める <ChevronRight size={20} />
                  </button>
                </div>
              </div>
            </FadeInSection>
          </div>
        </section>

        <Footer />
      </main>

      <style>{`
        /* 全体タイポグラフィ */
        .main-title {
          font-size: ${windowWidth < 768 ? '48px' : '96px'};
          font-weight: 900; color: #FFFFFF; line-height: 1; letter-spacing: -0.05em; margin-bottom: 40px;
        }
        .gradient-text {
          background: linear-gradient(90deg, #00FBFF, #9D72FF);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent;
        }
        .main-description {
          color: rgba(255,255,255,0.5); font-size: 20px; max-width: 700px; margin: 0 auto 60px; line-height: 1.8;
        }
        .section-title {
          font-size: 40px; font-weight: 900; color: #0D1B3E; text-align: center; margin-bottom: 16px;
        }
        .section-subtitle {
          text-align: center; color: #64748B; font-size: 18px; margin-bottom: 80px;
        }

        /* ヒーローパーツ */
        .top-badge {
          display: inline-flex; align-items: center; gap: 10px; border: 1px solid rgba(0, 251, 255, 0.4);
          padding: 8px 24px; border-radius: 100px; color: #00FBFF; font-size: 14px; font-weight: 900; margin-bottom: 40px;
          background: rgba(0, 251, 255, 0.05);
        }
        .pulse-dot {
          width: 8px; height: 8px; background: #00FBFF; border-radius: 50%;
          box-shadow: 0 0 10px #00FBFF; animation: pulse 1.5s infinite;
        }
        .action-btn-main {
          background: #00FBFF; color: #050A18; padding: 22px 48px; border-radius: 100px;
          font-weight: 900; text-decoration: none; font-size: 18px; transition: 0.3s;
        }
        .action-btn-main:hover { transform: translateY(-5px); box-shadow: 0 20px 40px rgba(0, 251, 255, 0.3); }
        .action-btn-sub {
          border: 1px solid rgba(255,255,255,0.2); color: #FFFFFF; padding: 22px 48px; border-radius: 100px;
          font-weight: 900; text-decoration: none; font-size: 18px; transition: 0.3s; margin-left: 20px;
        }
        .action-btn-sub:hover { background: rgba(255,255,255,0.05); }

        /* ステップカード */
        .step-container { display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 30px; }
        .step-card {
          background: #FFFFFF; padding: 40px; border-radius: 32px; border: 1px solid #F1F5F9;
          transition: all 0.4s; position: relative; overflow: hidden;
        }
        .step-card:hover { transform: translateY(-10px); border-color: #9D72FF; box-shadow: 0 20px 40px rgba(0,0,0,0.05); }
        .step-time { position: absolute; top: 20px; right: 30px; font-weight: 900; color: #F1F5F9; font-size: 40px; z-index: 0; }
        .step-icon { color: #9D72FF; margin-bottom: 24px; position: relative; z-index: 1; }
        .step-card h3 { font-size: 20px; fontWeight: 900; margin-bottom: 16px; position: relative; z-index: 1; color: #0D1B3E; }
        .step-card p { color: #64748B; font-size: 14px; position: relative; z-index: 1; line-height: 1.6; }

        /* 実績カウンター */
        .counter-value { font-size: 80px; fontWeight: 900; color: #FFFFFF; line-height: 1; }

        /* 約束セクション */
        .promise-item { display: flex; gap: 24px; align-items: flex-start; }
        .promise-num { font-size: 24px; font-weight: 900; color: #9D72FF; opacity: 0.3; }
        .promise-item h4 { font-size: 20px; font-weight: 900; color: #0D1B3E; margin-bottom: 8px; }
        .promise-item p { color: #64748B; font-size: 15px; }

        /* ビジュアルボックス */
        .visual-box { position: relative; display: flex; justify-content: center; align-items: center; height: 400px; }
        .main-visual-circle {
          width: 250px; height: 250px; background: linear-gradient(135deg, #9D72FF, #00FBFF);
          border-radius: 50%; display: flex; justify-content: center; align-items: center;
          box-shadow: 0 40px 80px rgba(157, 114, 255, 0.4); animation: float 6s infinite ease-in-out;
        }
        .f-icon { position: absolute; color: #9D72FF; opacity: 0.2; }
        .i1 { top: 10%; left: 10%; animation: rotate 10s infinite linear; }
        .i2 { bottom: 10%; right: 10%; animation: rotate 15s infinite linear reverse; }
        .i3 { top: 20%; right: 20%; animation: pulse 2s infinite; }

        /* 最終お問い合わせ */
        .final-contact-card {
          background: rgba(255,255,255,0.03); padding: 80px; border-radius: 48px;
          border: 1px solid rgba(255,255,255,0.1); backdrop-filter: blur(20px); color: #FFFFFF; text-align: center;
        }
        .glass-input {
          width: 100%; padding: 22px 30px; border-radius: 100px; border: 1px solid rgba(255,255,255,0.1);
          background: rgba(255,255,255,0.05); color: #FFFFFF; outline: none; transition: 0.3s; box-sizing: border-box;
        }
        .glass-input:focus { border-color: #00FBFF; background: rgba(255,255,255,0.08); }
        .shiny-btn {
          background: #FFFFFF; color: #050A18; padding: 24px; border-radius: 100px; border: none;
          font-weight: 900; font-size: 18px; cursor: pointer; display: flex; align-items: center; justify-content: center; gap: 10px;
          transition: all 0.3s;
        }
        .shiny-btn:hover { background: #00FBFF; transform: scale(1.02); }

        /* 背景装飾 */
        .dynamic-bg {
          position: absolute; width: 100%; height: 100%;
          background: radial-gradient(circle at 80% 20%, rgba(0, 251, 255, 0.1), transparent 40%),
                      radial-gradient(circle at 20% 80%, rgba(157, 114, 255, 0.1), transparent 40%);
        }
        .scanner-line {
          position: absolute; width: 100%; height: 2px; background: linear-gradient(90deg, transparent, #00FBFF, transparent);
          top: 0; left: 0; animation: scan 4s infinite linear; opacity: 0.3;
        }

        /* アニメーション */
        @keyframes pulse { 0% { transform: scale(1); opacity: 1; } 50% { transform: scale(1.2); opacity: 0.5; } 100% { transform: scale(1); opacity: 1; } }
        @keyframes scan { 0% { top: 0; } 100% { top: 100%; } }
        @keyframes float { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-20px); } }
        @keyframes rotate { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        @keyframes fadeIn { from { opacity: 0; transform: translateY(-10px); } to { opacity: 1; transform: translateY(0); } }

        /* 新設：派手なセクション用アニメーション */
        .gradient-text-active {
          background: linear-gradient(90deg, #00FBFF, #9D72FF, #FF70AB, #00FBFF);
          background-size: 300% 100%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: gradientFlow 5s infinite linear;
        }
        @keyframes gradientFlow {
          0% { background-position: 0% 50%; }
          100% { background-position: 100% 50%; }
        }
        .floating-neon {
          animation: neonFloat 8s infinite ease-in-out;
          filter: drop-shadow(0 0 20px currentColor);
        }
        @keyframes neonFloat {
          0%, 100% { transform: translateY(0) rotate(0deg); opacity: 0.1; }
          50% { transform: translateY(-30px) rotate(5deg); opacity: 0.3; }
        }
      `}</style>
    </div>
  );
};

export default AILab;