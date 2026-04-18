import React, { useState, useEffect } from 'react';
import { Navbar } from '../components/organisms/Navbar';
import { Footer } from '../components/organisms/Footer';
import { PageHero } from '../components/molecules/PageHero';
import { 
  Lightbulb, 
  Target, 
  Users, 
  Settings,
  ShieldCheck,
  ClipboardCheck,
  AlertCircle,
  CheckCircle2,
  TrendingDown
} from 'lucide-react';

export const Consulting: React.FC = () => {
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
        {/* 1. メインビジュアル */}
        <PageHero 
          label="サービス / ITコンサルティング"
          titleTop="戦略を、"
          titleGradient="ビジネスを支える確かな伴走者に。"
          description="技術は目的ではなく、物語を進めるための手段です。DXの本質を見極め、戦略から実行まで。お客様のビジョンという物語に、確かな「解」を実装します。"
          windowWidth={windowWidth}
        />

        {/* 2. お悩みセクション */}
        <section style={{ padding: '100px 0', backgroundColor: '#F8F9FB', display: 'flex', justifyContent: 'center' }}>
          <div style={{ maxWidth: '1200px', width: '100%', padding: '0 24px' }}>
            <div style={{ textAlign: 'center', marginBottom: '80px' }}>
              <h2 style={{ fontSize: '32px', fontWeight: 900, color: '#0D1B3E', marginBottom: '24px' }}>このようなお悩みはございませんか？</h2>
              <div style={{ width: '40px', height: '4px', background: '#FF5BAE', margin: '0 auto' }}></div>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: windowWidth < 1024 ? '1fr' : 'repeat(3, 1fr)', gap: '24px' }}>
              {[
                { title: 'DXの進め方が不明', desc: '「デジタル化が必要なのはわかるが、具体的にどこから着手すべきか、どのツールが最適か判断できない」という不安を解消します。', icon: <Target size={24} color="#FF5BAE" /> },
                { title: 'エンジニアとの乖離', desc: '「現場の要望がエンジニアに伝わらない」「技術的な説明が理解できず、プロジェクトが停滞している」といったコミュニケーションの壁を取り払います。', icon: <Users size={24} color="#FF8C00" /> },
                { title: 'AI導入のビジネス化', desc: '「流行の生成AIを導入したいが、自社のビジネスモデルにどう組み込めば収益や効率化に繋がるのかが見えない」課題に答えを出します。', icon: <Lightbulb size={24} color="#9D72FF" /> },
              ].map((item, i) => (
                <div key={i} style={{ backgroundColor: '#FFFFFF', padding: '48px 32px', borderRadius: '32px', boxShadow: '0 20px 40px rgba(0,0,0,0.03)' }}>
                  <div style={{ marginBottom: '24px' }}>{item.icon}</div>
                  <h3 style={{ fontSize: '18px', fontWeight: 900, color: '#0D1B3E', marginBottom: '16px' }}>{item.title}</h3>
                  <p style={{ fontSize: '14px', color: '#6B7280', lineHeight: 1.8 }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 3. コンサルティングの提供領域 */}
        <section style={{ padding: '140px 0', backgroundColor: '#FFFFFF', display: 'flex', justifyContent: 'center' }}>
          <div style={{ maxWidth: '1200px', width: '100%', padding: '0 24px' }}>
            <div style={{ textAlign: 'center', marginBottom: '80px' }}>
              <p style={{ color: '#3182CE', fontSize: '12px', fontWeight: 900, letterSpacing: '0.4em', marginBottom: '16px' }}>戦略ドメイン</p>
              <h2 style={{ fontSize: '42px', fontWeight: 900, color: '#0D1B3E', marginBottom: '24px' }}>コンサルティングの提供領域</h2>
              <div style={{ width: '60px', height: '4px', background: 'linear-gradient(to right, #00FBFF, #3182CE)', margin: '0 auto' }}></div>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: windowWidth < 1024 ? '1fr' : 'repeat(3, 1fr)', gap: '32px' }}>
              {[
                { title: 'DX戦略・ロードマップ策定', desc: '現状の業務プロセスを可視化し、デジタル化によるインパクトを最大化するための実行可能なロードマップを描きます。', icon: <Settings size={24} color="#3182CE" />, borderColor: '#00FBFF' },
                { title: 'システムアーキテクチャ設計', desc: '将来的な拡張性とメンテナンス性を重視した最適な技術選定と、堅牢なシステム構造の設計を支援します。', icon: <ShieldCheck size={24} color="#00FBFF" />, borderColor: '#F3F4F6' },
                { title: 'PMO・ベンダーコントロール', desc: 'プロジェクトの品質、納期、コストを統合的に管理。複数の開発ベンダーが関わる複雑な案件でも円滑な進行を約束します。', icon: <ClipboardCheck size={24} color="#9D72FF" />, borderColor: '#F3F4F6' },
              ].map((item, i) => (
                <div key={i} style={{ padding: '60px 40px', borderRadius: '40px', border: `1px solid ${item.borderColor}`, backgroundColor: '#FFFFFF', boxShadow: item.borderColor !== '#F3F4F6' ? '0 20px 40px rgba(0,251,255,0.05)' : 'none' }}>
                  <div style={{ width: '56px', height: '56px', borderRadius: '16px', backgroundColor: '#F0F9FF', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '32px' }}>{item.icon}</div>
                  <h3 style={{ fontSize: '22px', fontWeight: 900, color: '#0D1B3E', marginBottom: '20px' }}>{item.title}</h3>
                  <p style={{ fontSize: '14px', color: '#6B7280', lineHeight: 1.8 }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. 支援対象と相乗効果 */}
        <section style={{ padding: '100px 0', backgroundColor: '#FFFFFF', display: 'flex', justifyContent: 'center' }}>
          <div style={{ maxWidth: '1200px', width: '100%', padding: '0 24px', display: 'flex', flexDirection: windowWidth < 1024 ? 'column' : 'row', gap: '60px', alignItems: 'center' }}>
            <div style={{ flex: 1 }}>
              <p style={{ color: '#00FBFF', fontSize: '12px', fontWeight: 900, letterSpacing: '0.2em', marginBottom: '16px' }}>支援対象</p>
              <h2 style={{ fontSize: '36px', fontWeight: 900, color: '#0D1B3E', marginBottom: '48px', lineHeight: 1.3 }}>物語の加速が必要な、<br />すべての組織へ。</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
                <div style={{ display: 'flex', gap: '20px' }}>
                  <div style={{ width: '48px', height: '48px', borderRadius: '12px', backgroundColor: '#E6FFFA', color: '#319795', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 900, flexShrink: 0 }}>ST</div>
                  <div>
                    <h4 style={{ fontSize: '18px', fontWeight: 900, color: '#0D1B3E', marginBottom: '8px' }}>スタートアップ</h4>
                    <p style={{ fontSize: '13px', color: '#6B7280', lineHeight: 1.6 }}>爆速でのPMFを目指す技術戦略。限られたリソースで最大の結果を出すアーキテクチャを提案します。</p>
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '20px' }}>
                  <div style={{ width: '48px', height: '48px', borderRadius: '12px', backgroundColor: '#EBF4FF', color: '#3182CE', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 900, flexShrink: 0 }}>ME</div>
                  <div>
                    <h4 style={{ fontSize: '18px', fontWeight: 900, color: '#0D1B3E', marginBottom: '8px' }}>中堅・大手企業</h4>
                    <p style={{ fontSize: '13px', color: '#6B7280', lineHeight: 1.6 }}>IT部門の代わりとなり、経営と技術を橋渡しするDXパートナー。レガシーからの脱却と、現場に定着する変革を支援します。</p>
                  </div>
                </div>
              </div>
            </div>
            <div style={{ flex: 1, width: '100%' }}>
              <div style={{ background: 'linear-gradient(135deg, #3182CE 0%, #9D72FF 100%)', padding: windowWidth < 768 ? '40px 30px' : '60px', borderRadius: '40px', color: '#FFFFFF', boxShadow: '0 30px 60px rgba(49, 130, 206, 0.2)' }}>
                <p style={{ fontSize: '12px', fontWeight: 800, opacity: 0.8, letterSpacing: '0.2em', marginBottom: '20px' }}>サービスの相乗効果</p>
                <h3 style={{ fontSize: '28px', fontWeight: 900, marginBottom: '32px', lineHeight: 1.4 }}>「描く」だけで終わらせない。<br />開発・AIチームとの強力な連携。</h3>
                <p style={{ fontSize: '15px', lineHeight: 1.8, opacity: 0.9, marginBottom: '40px' }}>戦略を策定したその日から、Meeceの受託開発チームがプロトタイプの構築に着手できます。また、AI研究開発の最新知見をコンサルに即座に反映。</p>
              </div>
            </div>
          </div>
        </section>

        {/* 5. サービスの流れ */}
        <section style={{ padding: '140px 0', backgroundColor: '#F8F9FB', display: 'flex', justifyContent: 'center' }}>
          <div style={{ maxWidth: '1200px', width: '100%', padding: '0 24px' }}>
            <div style={{ textAlign: 'center', marginBottom: '80px' }}>
              <h2 style={{ fontSize: '42px', fontWeight: 900, color: '#0D1B3E', marginBottom: '24px' }}>サービスの流れ</h2>
              <div style={{ width: '60px', height: '4px', background: 'linear-gradient(to right, #3182CE, #00FBFF)', margin: '0 auto 40px' }}></div>
              <p style={{ color: '#6B7280', fontSize: '14px' }}>ヒアリングから実行支援まで、シームレスなサポートを提供します。</p>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: windowWidth < 768 ? '1fr' : 'repeat(4, 1fr)', gap: '20px' }}>
              {[
                { step: '01', title: '現状把握', desc: '経営陣へのヒアリングと現場調査を通じて、真の課題とボトルネックを特定します。' },
                { step: '02', title: '戦略策定', desc: '予算・期間・優先順位を考慮し、IT投資の費用対効果を最大化する戦略を構築します。' },
                { step: '03', title: '実行支援', desc: 'ベンダー選定や要件定義の監修、PMOとしてプロジェクトの進行をリードします。' },
                { step: '04', title: '継続的改善', desc: '導入後の効果検証を行い、次なる成長フェーズに向けた改善提案を継続的に実施します。' },
              ].map((item, i) => (
                <div key={i} style={{ backgroundColor: '#FFFFFF', padding: '40px 24px', borderRadius: '32px', textAlign: 'left', border: '1px solid #F3F4F6' }}>
                  <span style={{ fontSize: '48px', fontWeight: 900, color: '#F3F4F6', lineHeight: 1, display: 'block', marginBottom: '20px' }}>{item.step}</span>
                  <h4 style={{ fontSize: '18px', fontWeight: 900, color: '#0D1B3E', marginBottom: '16px' }}>{item.title}</h4>
                  <p style={{ fontSize: '12px', color: '#6B7280', lineHeight: 1.8 }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 6. スケジュールの加速 (image_ba53fb.png を忠実に再現) */}
        <section style={{ padding: '140px 0', backgroundColor: '#F8F9FB', display: 'flex', justifyContent: 'center' }}>
          <div style={{ maxWidth: '1100px', width: '100%', padding: '0 24px' }}>
            <div style={{ textAlign: 'center', marginBottom: '80px' }}>
              <p style={{ color: '#3182CE', fontSize: '10px', fontWeight: 900, letterSpacing: '0.4em', marginBottom: '16px' }}>スケジュールの加速</p>
              <h2 style={{ fontSize: '42px', fontWeight: 900, color: '#0D1B3E', marginBottom: '24px' }}>滞った物語を、再び動かす。</h2>
              <p style={{ color: '#6B7280', fontSize: '14px' }}>プロジェクトの停滞を解消し、ゴールまでの最短経路を再構築します。</p>
            </div>

            <div style={{ display: 'flex', flexDirection: windowWidth < 1024 ? 'column' : 'row', gap: '32px' }}>
              {/* 左側：導入前 */}
              <div style={{ flex: 1, backgroundColor: '#FFFFFF', padding: windowWidth < 768 ? '40px 20px' : '60px 40px', borderRadius: '60px', boxShadow: '0 40px 80px rgba(0,0,0,0.02)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '48px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '20px', fontWeight: 900, color: '#9CA3AF' }}>
                    <AlertCircle size={24} color="#FF5BAE" /> 導入前
                  </div>
                  <div style={{ fontSize: '10px', color: '#FF5BAE', backgroundColor: '#FFF5F7', padding: '6px 16px', borderRadius: '100px', fontWeight: 800 }}>プロジェクト停滞中</div>
                </div>

                {/* バーの上のラベル */}
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px', padding: '0 10px' }}>
                  <span style={{ fontSize: '10px', fontWeight: 900, color: '#9CA3AF' }}>要件定義</span>
                  <span style={{ fontSize: '10px', fontWeight: 900, color: '#9CA3AF' }}>開発フェーズ</span>
                  <span style={{ fontSize: '10px', fontWeight: 900, color: '#9CA3AF' }}>リリース</span>
                </div>

                {/* 比較バー本体 */}
                <div style={{ position: 'relative', height: '60px', backgroundColor: '#EDF2F7', borderRadius: '30px', marginBottom: '40px' }}>
                  <div style={{ position: 'absolute', left: 0, top: 0, height: '100%', width: '30%', backgroundColor: '#94A3B8', borderRadius: '30px 0 0 30px' }}></div>
                  <div style={{ position: 'absolute', left: '30%', top: 0, height: '100%', width: '40%', backgroundColor: '#FED7D7', borderLeft: '2px dashed #FF5BAE', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <span style={{ color: '#FF5BAE', fontSize: '12px', fontWeight: 900 }}>停滞中</span>
                  </div>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <div>
                    <p style={{ fontSize: '11px', color: '#FF5BAE', fontWeight: 900, marginBottom: '8px' }}>遅延発生区間</p>
                    <p style={{ fontSize: '15px', color: '#0D1B3E', fontWeight: 900, lineHeight: 1.5 }}>IT戦略不在による<br />意思決定の停滞がボトルネック</p>
                  </div>
                  <div style={{ textAlign: 'right', marginTop: '10px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', justifyContent: 'flex-end', color: '#9CA3AF', opacity: 0.6 }}>
                      <p style={{ fontSize: '9px', fontWeight: 800 }}>本来進捗しているはずのライン</p>
                      <TrendingDown size={14} />
                    </div>
                  </div>
                </div>
              </div>

              {/* 右側：Meece導入後 */}
              <div style={{ flex: 1, backgroundColor: '#FFFFFF', padding: windowWidth < 768 ? '40px 20px' : '60px 40px', borderRadius: '60px', boxShadow: '0 40px 80px rgba(0,0,0,0.02)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '48px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '20px', fontWeight: 900, color: '#3182CE' }}>
                    <CheckCircle2 size={24} color="#3182CE" /> Meece導入後
                  </div>
                  <div style={{ fontSize: '10px', color: '#3182CE', backgroundColor: '#E6FFFA', padding: '6px 16px', borderRadius: '100px', fontWeight: 800 }}>スムーズな加速</div>
                </div>

                {/* バーの上のラベル */}
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px', padding: '0 10px' }}>
                  <span style={{ fontSize: '10px', fontWeight: 900, color: '#3182CE' }}>戦略策定</span>
                  <span style={{ fontSize: '10px', fontWeight: 900, color: '#3182CE' }}>開発・実装</span>
                  <span style={{ fontSize: '10px', fontWeight: 900, color: '#3182CE' }}>リリース</span>
                </div>

                {/* 比較バー本体 */}
                <div style={{ position: 'relative', height: '60px', backgroundColor: '#EDF2F7', borderRadius: '30px', marginBottom: '40px' }}>
                  <div style={{ position: 'absolute', left: 0, top: 0, height: '100%', width: '15%', backgroundColor: '#00FBFF', borderRadius: '30px 0 0 30px' }}></div>
                  <div style={{ position: 'absolute', left: '15%', top: 0, height: '100%', width: '60%', background: 'linear-gradient(to right, #3182CE, #9D72FF)' }}></div>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
                  <div>
                    <p style={{ fontSize: '11px', color: '#3182CE', fontWeight: 900, marginBottom: '8px' }}>加速・短縮区間</p>
                    <p style={{ fontSize: '15px', color: '#0D1B3E', fontWeight: 900, lineHeight: 1.5 }}>戦略的な要件整理により<br />開発スピードが40%向上</p>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'flex-end', gap: '4px' }}>
                      <span style={{ fontSize: '36px', fontWeight: 900, color: '#3182CE' }}>40%</span>
                      <span style={{ fontSize: '14px', fontWeight: 900, color: '#3182CE' }}>高速化</span>
                    </div>
                    <p style={{ fontSize: '10px', color: '#9CA3AF', fontWeight: 800 }}>工期短縮の実現</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 7. よくあるご質問 */}
        <section style={{ padding: '140px 0', backgroundColor: '#FFFFFF', display: 'flex', justifyContent: 'center' }}>
          <div style={{ maxWidth: '900px', width: '100%', padding: '0 24px' }}>
            <div style={{ textAlign: 'center', marginBottom: '80px' }}>
              <h2 style={{ fontSize: '42px', fontWeight: 900, color: '#0D1B3E', marginBottom: '24px' }}>よくあるご質問</h2>
              <div style={{ width: '60px', height: '4px', background: 'linear-gradient(to right, #3182CE, #00FBFF)', margin: '0 auto' }}></div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              {[
                { 
                  q: '開発は自社ベンダーで行いたいのですが、アドバイザーのみの依頼は可能ですか？', 
                  a: 'はい、もちろん行っています。セカンドオピニオンとしての技術選定支援や、ベンダー各社との定例会への同席・ファシリテーションなど、中立的な立場でのサポートを数多く行っています。' 
                },
                { 
                  q: '社内にIT担当者が一人もいませんが、相談しても大丈夫でしょうか？', 
                  a: '全く問題ありません。経営課題を言葉にしていただくところから始め、専門用語を使わずに分かりやすくご説明いたします。「社外CIO（最高情報責任者）」のような立ち位置でお任せいただくことも可能です。' 
                },
                { 
                  q: '費用体系はどのようになっていますか？', 
                  a: '単発の戦略策定プロジェクト（スポット契約）と、継続的な伴走支援（月額アドバイザリー契約）の2パターンをご用意しております。プロジェクトの規模や稼働時間に応じて、柔軟にプランニングいたします。' 
                },
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

        {/* 8. 私たちの理念 */}
        <section style={{ padding: windowWidth < 768 ? '80px 24px' : '140px 40px', backgroundColor: '#0D1B3E', display: 'flex', justifyContent: 'center' }}>
          <div style={{ maxWidth: '1000px', width: '100%', backgroundColor: '#F9FAFB', borderRadius: '60px', padding: windowWidth < 768 ? '60px 30px' : '100px 80px' }}>
            <h2 style={{ fontSize: 'clamp(28px, 5vw, 42px)', fontWeight: 900, color: '#0D1B3E', marginBottom: '40px' }}>「綺麗事」で終わらせない。<br /><span style={{ background: 'linear-gradient(to right, #00FBFF, #3182CE)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>現場主義のコンサル。</span></h2>
            <div style={{ borderLeft: '4px solid #3182CE', paddingLeft: '24px', marginBottom: '40px' }}>
              <p style={{ color: '#0D1B3E', fontSize: '16px', fontWeight: 800 }}>開発現場を熟知しているMeeceだからこそ、実効性のある戦略を提案します。</p>
            </div>
          </div>
        </section>

        {/* 共通フッターの呼び出し */}
        <Footer />
      </main>
    </div>
 );
}