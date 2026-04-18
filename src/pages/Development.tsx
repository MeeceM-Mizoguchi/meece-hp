import React, { useState, useEffect } from 'react';
import { Navbar } from '../components/organisms/Navbar';
import { Footer } from '../components/organisms/Footer';
import { PageHero } from '../components/molecules/PageHero';
import { 
  Layout, 
  Smartphone, 
  Zap, 
  Database, 
  RefreshCw,
  LineChart
} from 'lucide-react';

export const Development: React.FC = () => {
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);

  useEffect(() => {
    // アニメーションを廃止し、表示の安定性を最優先します
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div style={{ backgroundColor: '#FFFFFF', minHeight: '100vh', width: '100%', margin: 0, padding: 0, overflowX: 'hidden' }}>
      <Navbar />
      
      <main>
        {/* メインビジュアル (image_6a96c4.jpg を再現) */}
        <PageHero 
          label="サービス / 受託開発"
          titleTop="想いを、"
          titleGradient="形にする技術。"
          description="単なるコードの記述ではありません。私たちは、ビジネスの課題を深く理解し、スケーラビリティと心地よい体験を両立させた「物語を完成させる」システムを構築します。"
          windowWidth={windowWidth}
        />

        {/* 開発ドメイン (image_6a96a3.jpg を再現) */}
        <section style={{ padding: '100px 0', backgroundColor: '#FFFFFF', display: 'flex', justifyContent: 'center' }}>
          <div style={{ maxWidth: '1200px', width: '100%', padding: '0 24px' }}>
            <div style={{ textAlign: 'center', marginBottom: '80px' }}>
              <p style={{ color: '#319795', fontSize: '12px', fontWeight: 900, letterSpacing: '0.2em', marginBottom: '16px' }}>開発ドメイン</p>
              <h2 style={{ fontSize: '42px', fontWeight: 900, color: '#0D1B3E', marginBottom: '24px' }}>私たちが編み出す、物語の形。</h2>
              <div style={{ width: '60px', height: '4px', background: 'linear-gradient(to right, #3182CE, #9D72FF)', margin: '0 auto' }}></div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: windowWidth < 768 ? '1fr' : 'repeat(4, 1fr)', gap: '24px' }}>
              {[
                { title: 'Webアプリ', desc: 'SaaS開発から業務システムまで。高度な機能性と直感的な操作性を両立させたWebシステムを構築します。', icon: <Layout size={24} color="#3182CE" />, bg: '#EBF4FF' },
                { title: 'モバイルアプリ', desc: 'iOS/Androidネイティブ、およびFlutterを用いた効率的なマルチプラットフォーム開発に対応します。', icon: <Smartphone size={24} color="#3182CE" />, bg: '#EBF4FF' },
                { title: 'MVP開発', desc: '新規事業の立ち上げを最速で。最小機能版のリリースを通じて、市場検証とプロダクト成長を強力に支援します。', icon: <Zap size={24} color="#9D72FF" />, bg: '#F5F3FF' },
                { title: 'DX支援', desc: 'アナログな業務のデジタル化から、既存システム間のシームレスなデータ連携まで。組織の変革を支えます。', icon: <Database size={24} color="#FF5BAE" />, bg: '#FFF5F7' },
              ].map((domain, i) => (
                <div key={i} style={{ padding: '48px 32px', borderRadius: '32px', border: '1px solid #F3F4F6', backgroundColor: '#FFFFFF' }}>
                  <div style={{ width: '56px', height: '56px', borderRadius: '16px', backgroundColor: domain.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '32px' }}>
                    {domain.icon}
                  </div>
                  <h3 style={{ fontSize: '18px', fontWeight: 900, color: '#0D1B3E', marginBottom: '16px' }}>{domain.title}</h3>
                  <p style={{ fontSize: '13px', color: '#6B7280', lineHeight: 1.8 }}>{domain.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* テクノロジースタック (image_6a9686.jpg を再現) */}
        <section style={{ padding: '140px 0', backgroundColor: '#F8F9FB', display: 'flex', justifyContent: 'center' }}>
          <div style={{ maxWidth: '1000px', width: '100%', padding: '0 24px' }}>
            <div style={{ textAlign: 'center', marginBottom: '100px' }}>
              <p style={{ color: '#319795', fontSize: '10px', fontWeight: 900, letterSpacing: '0.2em', marginBottom: '16px' }}>テクノロジースタック</p>
              <h2 style={{ fontSize: '42px', fontWeight: 900, color: '#0D1B3E', marginBottom: '24px' }}>最先端の技術で、確かな物語を。</h2>
              <div style={{ width: '60px', height: '4px', background: 'linear-gradient(to right, #00FBFF, #9D72FF)', margin: '0 auto' }}></div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: windowWidth < 768 ? '1fr' : '1fr 1fr', gap: '40px' }}>
              <div style={{ backgroundColor: '#FFFFFF', padding: '60px 40px', borderRadius: '40px', boxShadow: '0 20px 60px rgba(0,0,0,0.03)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '40px' }}>
                  <div style={{ width: '3px', height: '24px', backgroundColor: '#3182CE' }}></div>
                  <h3 style={{ fontSize: '20px', fontWeight: 900, color: '#0D1B3E' }}>フロントエンド / モバイル</h3>
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
                  {['React', 'Next.js', 'TypeScript', 'Flutter', 'Swift / Kotlin', 'Tailwind CSS'].map(tech => (
                    <span key={tech} style={{ padding: '10px 20px', backgroundColor: '#F9FAFB', borderRadius: '100px', fontSize: '13px', fontWeight: 700, color: '#4B5563' }}>{tech}</span>
                  ))}
                </div>
              </div>

              <div style={{ backgroundColor: '#FFFFFF', padding: '60px 40px', borderRadius: '40px', boxShadow: '0 20px 60px rgba(0,0,0,0.03)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '40px' }}>
                  <div style={{ width: '3px', height: '24px', backgroundColor: '#3182CE' }}></div>
                  <h3 style={{ fontSize: '20px', fontWeight: 900, color: '#0D1B3E' }}>バックエンド / インフラ</h3>
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
                  {['Go / Node.js', 'Python / Django', 'AWS / GCP', 'Firebase', 'PostgreSQL / MySQL', 'Docker'].map(tech => (
                    <span key={tech} style={{ padding: '10px 20px', backgroundColor: '#F9FAFB', borderRadius: '100px', fontSize: '13px', fontWeight: 700, color: '#4B5563' }}>{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 開発プロセスセクション (image_6a93c3.png / image_6a939b.jpg を再現) */}
        <section style={{ padding: '140px 0', backgroundColor: '#FFFFFF', display: 'flex', justifyContent: 'center' }}>
          <div style={{ maxWidth: '1200px', width: '100%', padding: '0 24px' }}>
            <div style={{ textAlign: 'center', marginBottom: '80px' }}>
              <h2 style={{ fontSize: '42px', fontWeight: 900, color: '#0D1B3E', marginBottom: '24px' }}>開発プロセス</h2>
              <div style={{ width: '60px', height: '4px', background: 'linear-gradient(to right, #00FBFF, #9D72FF)', margin: '0 auto 24px' }}></div>
              <p style={{ color: '#6B7280', fontSize: '14px', fontWeight: 500 }}>ビジネスの特性に合わせ、最適な開発手法をご提案します。</p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: windowWidth < 1024 ? '1fr' : '1fr 1fr', gap: '32px', marginBottom: '80px' }}>
              {/* ウォーターフォール：各要素に初期透明度を付与せずJSに任せる */}
              <div style={{ backgroundColor: '#F9FAFB', padding: '60px 40px', borderRadius: '40px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '40px' }}>
                  <div style={{ width: '48px', height: '48px', borderRadius: '12px', backgroundColor: '#FFFFFF', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 12px rgba(0,0,0,0.03)' }}>
                    <RefreshCw size={20} color="#9CA3AF" />
                  </div>
                  <h3 style={{ fontSize: '20px', fontWeight: 900, color: '#0D1B3E' }}>ウォーターフォールモデル</h3>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  {['要件定義', '設計', '開発', '単体テスト', '結合・総合テスト', 'リリースリハーサル', 'リリース'].map((step, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '8px' }}>
                      <span style={{ fontSize: '12px', fontWeight: 900, color: i === 6 ? '#3182CE' : '#E5E7EB', width: '20px' }}>{i + 1}</span>
                      <span style={{ fontSize: '14px', fontWeight: 700, color: i === 6 ? '#3182CE' : '#4B5563' }}>{step}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* アジャイル */}
              <div style={{ backgroundColor: '#F9FAFB', padding: '60px 40px', borderRadius: '40px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '40px' }}>
                  <div style={{ width: '48px', height: '48px', borderRadius: '12px', backgroundColor: '#FFFFFF', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 12px rgba(0,0,0,0.03)' }}>
                    <RefreshCw size={20} color="#3182CE" />
                  </div>
                  <h3 style={{ fontSize: '20px', fontWeight: 900, color: '#0D1B3E' }}>アジャイルモデル</h3>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  {['要件定義', '開発・単体テスト', '結合テスト', 'リリース'].map((step, i) => (
                    <div key={i} className="process-item-row" style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '4px' }}>
                      <span style={{ fontSize: '12px', fontWeight: 900, color: i === 3 ? '#3182CE' : '#E5E7EB', width: '20px' }}>{i + 1}</span>
                      <span style={{ fontSize: '14px', fontWeight: 700, color: i === 3 ? '#3182CE' : '#4B5563' }}>{step}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* ハイブリッドモデル (image_6a939b.jpg) */}
            <div style={{ 
              backgroundColor: '#FFFFFF', 
              borderRadius: '40px', 
              padding: windowWidth < 768 ? '40px 24px' : '80px', 
              border: '2px solid transparent',
              backgroundImage: 'linear-gradient(#fff, #fff), linear-gradient(to right, #3182CE, #9D72FF, #FF5BAE)',
              backgroundOrigin: 'border-box',
              backgroundClip: 'padding-box, border-box',
              boxShadow: '0 40px 100px rgba(0,0,0,0.05)'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '60px' }}>
                <div style={{ width: '60px', height: '60px', borderRadius: '16px', background: 'linear-gradient(135deg, #3182CE, #9D72FF)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#FFF', fontSize: '24px', fontWeight: 900 }}>M</div>
                <div>
                  <h3 style={{ fontSize: '28px', fontWeight: 900, color: '#0D1B3E' }}>ハイブリッド</h3>
                  <p style={{ fontSize: '12px', fontWeight: 800, color: '#319795', letterSpacing: '0.1em' }}>MEECE推奨ソリューション</p>
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: windowWidth < 1024 ? '1fr' : '1fr 1fr', gap: '60px', marginBottom: '80px' }}>
                <div>
                  <p style={{ fontSize: '11px', fontWeight: 900, color: '#3182CE', marginBottom: '16px' }}>フェーズ 01：スピードローンチ</p>
                  <h4 style={{ fontSize: '20px', fontWeight: 900, color: '#0D1B3E', marginBottom: '24px', borderLeft: '3px solid #3182CE', paddingLeft: '16px' }}>1次開発：アジャイル</h4>
                  <ul style={{ listStyle: 'none', padding: 0, fontSize: '14px', color: '#6B7280', lineHeight: 2.2 }}>
                    <li>要件定義</li>
                    <li>開発・単体テスト</li>
                    <li>結合テスト</li>
                    <li style={{ color: '#3182CE', fontWeight: 800 }}>リリース</li>
                  </ul>
                </div>
                <div>
                  <p style={{ fontSize: '11px', fontWeight: 900, color: '#FF5BAE', marginBottom: '16px' }}>フェーズ 02：基盤開発・拡張</p>
                  <h4 style={{ fontSize: '20px', fontWeight: 900, color: '#0D1B3E', marginBottom: '24px', borderLeft: '3px solid #FF5BAE', paddingLeft: '16px' }}>2次開発：ウォーターフォール</h4>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', fontSize: '14px', color: '#6B7280', lineHeight: 2.2 }}>
                    <div>
                      <li>品質改善整理</li>
                      <li>リバース設計</li>
                      <li>単体テスト</li>
                    </div>
                    <div>
                      <li>スプリント計画</li>
                      <li>開発</li>
                      <li>結合テスト</li>
                    </div>
                  </div>
                  <li style={{ listStyle: 'none', color: '#FF5BAE', fontWeight: 800, marginTop: '8px' }}>リリース</li>
                </div>
              </div>

              {/* ロードマップ図解 (image_6a350c.png を再現) */}
              <div style={{ borderTop: '1px solid #F3F4F6', paddingTop: '60px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '40px' }}>
                  <LineChart size={18} color="#9CA3AF" />
                  <span style={{ fontSize: '12px', fontWeight: 800, color: '#9CA3AF', letterSpacing: '0.1em' }}>DEVELOPMENT ROADMAP / スケジュール感の目安</span>
                </div>

                {/* アニメーションなし・固定レイアウト版 */}
              <div style={{ marginTop: '80px', marginBottom: '100px' }}>
                {/* フェーズラベル：位置をバーの中央に調整 */}
                <div style={{ position: 'relative', width: '100%', height: '40px', marginBottom: '15px' }}>
                  {/* PHASE 01 : 青いバー(30%)の真ん中である15%の位置に配置 */}
                  <div style={{ position: 'absolute', left: '15%', bottom: 0, transform: 'translateX(-50%)', textAlign: 'center' }}>
                    <span style={{ fontSize: '10px', fontWeight: 900, color: '#3182CE' }}>PHASE 01</span>
                    <div style={{ width: '1px', height: '10px', backgroundColor: '#3182CE', margin: '4px auto 0' }}></div>
                  </div>
                  {/* PHASE 02 : ピンクのバー(30%〜100%)の真ん中である65%の位置に配置 */}
                  <div style={{ position: 'absolute', left: '65%', bottom: 0, transform: 'translateX(-50%)', textAlign: 'center' }}>
                    <span style={{ fontSize: '10px', fontWeight: 900, color: '#FF5BAE' }}>PHASE 02</span>
                    <div style={{ width: '1px', height: '10px', backgroundColor: '#FF5BAE', margin: '4px auto 0' }}></div>
                  </div>
                </div>

                {/* ロードマップバー本体 */}
                <div style={{ position: 'relative', width: '100%', height: '10px', backgroundColor: '#F1F5F9', borderRadius: '5px', overflow: 'hidden', display: 'flex' }}>
                  <div style={{ width: '30%', height: '100%', backgroundColor: '#3182CE' }}></div>
                  <div style={{ width: '70%', height: '100%', background: 'linear-gradient(to right, #FF5BAE, #9D72FF)' }}></div>
                </div>

                {/* START / GOAL ラベル */}
                <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px' }}>
                  <span style={{ fontSize: '11px', fontWeight: 900, color: '#3182CE' }}>START</span>
                  <span style={{ fontSize: '11px', fontWeight: 900, color: '#FF5BAE' }}>GOAL</span>
                </div>
              </div>

                <div style={{ display: 'grid', gridTemplateColumns: windowWidth < 768 ? '1fr' : '1fr 1fr', gap: '24px' }}>
                  <div style={{ padding: '32px', backgroundColor: '#F9FAFB', borderRadius: '24px' }}>
                    <p style={{ fontSize: '12px', fontWeight: 900, color: '#3182CE', marginBottom: '12px' }}>PHASE 01 : M1 - M3</p>
                    <h5 style={{ fontWeight: 800, color: '#0D1B3E', marginBottom: '12px' }}>1次開発：最速の市場投入</h5>
                    <p style={{ fontSize: '13px', color: '#6B7280', lineHeight: 1.6 }}>アジャイル手法を用いて、ビジネスの核心となる最小機能を優先実装。まずは世に出し、実ユーザーの声を集めます。</p>
                  </div>
                  <div style={{ padding: '32px', backgroundColor: '#F9FAFB', borderRadius: '24px' }}>
                    <p style={{ fontSize: '12px', fontWeight: 900, color: '#FF5BAE', marginBottom: '12px' }}>PHASE 02 : M4 - M12+</p>
                    <h5 style={{ fontWeight: 800, color: '#0D1B3E', marginBottom: '12px' }}>2次開発：本格拡張と品質強化</h5>
                    <p style={{ fontSize: '13px', color: '#6B7280', lineHeight: 1.6 }}>実証結果に基づき、ウォーターフォールで大規模な機能拡張とセキュリティ強化を実施。長期運用に耐えうるシステムへと磨き上げます。</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* FAQ (image_6a937c.jpg を再現) */}
        <section style={{ padding: '140px 0', backgroundColor: '#FFFFFF', display: 'flex', justifyContent: 'center' }}>
          <div style={{ maxWidth: '800px', width: '100%', padding: '0 24px' }}>
            <div style={{ textAlign: 'center', marginBottom: '80px' }}>
              <p style={{ color: '#319795', fontSize: '10px', fontWeight: 900, letterSpacing: '0.2em', marginBottom: '16px' }}>よくあるご質問</p>
              <h2 style={{ fontSize: '42px', fontWeight: 900, color: '#0D1B3E', marginBottom: '24px' }}>よくあるご質問</h2>
              <div style={{ width: '60px', height: '4px', background: 'linear-gradient(to right, #3182CE, #9D72FF)', margin: '0 auto' }}></div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              {[
                { q: '具体的な仕様が決まっていませんが、相談可能ですか？', a: 'もちろんです。私たちは課題の整理から伴走します。抽象的なアイデアを技術的な要件へと昇華させる「Phase 0」からの支援が得意です。' },
                { q: '納品後の保守運用だけをお願いすることもできますか？', a: 'はい、可能です。他社様が開発したシステムの引き継ぎや、モダンな技術スタックへのリプレイスも含めて柔軟に対応させていただきます。' },
                { q: '開発期間はどのくらいかかりますか？', a: '小規模であれば最短1ヶ月〜3ヶ月、大規模な基幹システムであれば1年半〜3年程度が目安となります。要件に合わせて最適なスケジュールをご提案します。' }
              ].map((faq, i) => (
                <div key={i} style={{ padding: '40px', backgroundColor: '#F9FAFB', borderRadius: '32px' }}>
                  <div style={{ display: 'flex', gap: '16px', marginBottom: '20px' }}>
                    <span style={{ fontWeight: 900, color: '#3182CE' }}>Q.</span>
                    <h4 style={{ fontWeight: 800, color: '#0D1B3E', fontSize: '16px' }}>{faq.q}</h4>
                  </div>
                  <div style={{ display: 'flex', gap: '16px' }}>
                    <span style={{ fontWeight: 900, color: '#FF5BAE' }}>A.</span>
                    <p style={{ fontSize: '14px', color: '#6B7280', lineHeight: 1.8, fontWeight: 500 }}>{faq.a}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 保守・運用サポート (image_6a935d.jpg を再現) */}
        <section style={{ 
          backgroundColor: '#0D1B3E', 
          padding: '120px 24px', 
          display: 'flex', 
          justifyContent: 'center',
          position: 'relative',
          overflow: 'hidden'
        }}>
          <div style={{ 
            maxWidth: '1000px', 
            width: '100%', 
            backgroundColor: '#F9FAFB', 
            borderRadius: '60px', 
            padding: windowWidth < 768 ? '60px 24px' : '100px 80px',
            textAlign: 'center',
            position: 'relative',
            zIndex: 1
          }}>
            <p style={{ color: '#319795', fontSize: '11px', fontWeight: 900, letterSpacing: '0.2em', marginBottom: '32px' }}>保守・運用サポート</p>
            <h2 style={{ fontSize: 'clamp(28px, 5vw, 48px)', fontWeight: 900, color: '#0D1B3E', marginBottom: '40px' }}>
              物語は、リリース後も<br />
              <span style={{ 
                background: 'linear-gradient(to right, #3182CE, #9D72FF, #FF5BAE)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}>続いていく。</span>
            </h2>
            <p style={{ color: '#6B7280', fontSize: '16px', lineHeight: 2, marginBottom: '60px', maxWidth: '700px', margin: '0 auto 60px' }}>
              私たちはリリースを「ゴール」ではなく「スタート」と捉えています。<br />
              ユーザーの手に渡ってから始まる物語が、より輝くための伴走支援を約束します。
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: windowWidth < 768 ? '1fr' : '1fr 1fr', gap: '24px' }}>
              <div style={{ backgroundColor: '#FFFFFF', padding: '40px', borderRadius: '32px', textAlign: 'left', border: '1px solid #F3F4F6' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                  <div style={{ width: '3px', height: '16px', backgroundColor: '#3182CE' }}></div>
                  <h4 style={{ fontWeight: 800, color: '#0D1B3E' }}>安定運用・セキュリティ</h4>
                </div>
                <p style={{ fontSize: '13px', color: '#9CA3AF', lineHeight: 1.6 }}>24時間365日の死活監視と、脆弱性への迅速な対応で安心を担保します。</p>
              </div>
              <div style={{ backgroundColor: '#FFFFFF', padding: '40px', borderRadius: '32px', textAlign: 'left', border: '1px solid #F3F4F6' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                  <div style={{ width: '3px', height: '16px', backgroundColor: '#3182CE' }}></div>
                  <h4 style={{ fontWeight: 800, color: '#0D1B3E' }}>継続的な機能改善</h4>
                </div>
                <p style={{ fontSize: '13px', color: '#9CA3AF', lineHeight: 1.6 }}>データ分析に基づいたUI/UXの改善や、新機能の追加開発を柔軟に行います。</p>
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