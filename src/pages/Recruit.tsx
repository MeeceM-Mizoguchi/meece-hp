import React, { useState, useEffect } from 'react';
import { Navbar } from '../components/organisms/Navbar';
import { Footer } from '../components/organisms/Footer';
import { PageHero } from '../components/molecules/PageHero';
import { 
  ShieldCheck, 
  Zap, 
  Heart, 
  Mail, 
  ChevronRight, 
  Monitor,
  Clock,
  Cpu,
  GraduationCap,
  X,
  Rocket
} from 'lucide-react';

const jobDetails: Record<string, any> = {
  backend: {
    label: 'BACKEND ENGINEER',
    title: 'バックエンドエンジニア (Python／Go)',
    mission: '受託開発および自社AI開発の拡大に伴い、基幹システムの設計・開発を主導。GitHub Copilot等を積極導入し、生産性を極限まで高める文化があります。',
    skills: ['PythonまたはGoを用いた実務開発経験', 'Django / Gin / FastAPI等の利用経験', 'AWSの構築・運用知識', 'RDBの設計、クエリ最適化スキル'],
    stacks: ['Python', 'Go', 'Django', 'AWS', 'Docker', 'PostgreSQL', 'GitHub Copilot'],
    salary: '400万円〜500万円',
    time: '10:00〜19:00 (フレックス制)',
    holiday: '完全週休2日制（土日祝）',
    welfare: ['通勤手当（全額）', '社会保険完備', '最新AIツール支給', 'リモート・フレックス制度']
  },
  secretary: {
    label: 'EXECUTIVE ASSISTANT / SECRETARY',
    title: '秘書（社長補佐・事務）',
    mission: '社長のスケジュール管理や来客対応、書類作成などを通じて、経営を間近でサポートするポジションです。事務作業のみならず、組織運営の円滑化に寄与していただきます。',
    skills: ['社会人経験（業界不問）', '基本的なPCスキル（Word/Excel/PowerPoint）', '社内外との円滑なコミュニケーション能力', '誠実かつ責任感を持って業務に取り組める方'],
    stacks: ['Google Workspace', 'Notion', 'Slack', 'ChatGPT', 'Excel', 'PowerPoint'],
    salary: '300万円〜400万円',
    time: '10:00〜19:00 (フレックス制)',
    holiday: '完全週休2日制（土日祝）',
    welfare: ['通勤手当（全額）', '社会保険完備', '最新AIツール利用環境', '東京駅直結の最新オフィス']
  },
  assistant: {
    label: 'IT ASSISTANT / PMO',
    title: 'ITアシスタント・進捗管理',
    mission: 'システム開発プロジェクトにおける議事録作成、進捗管理を担当。未経験からコンサルタントやPMへのキャリアアップを目指せます。',
    skills: ['社会人経験（1年以上推奨）', '資料作成スキル', 'スケジュール管理の誠実さ', 'チームでの協力体制を大切にできる方'],
    stacks: ['Slack', 'Notion', 'WBS', 'Jira', 'Excel'],
    salary: '300万円〜500万円',
    time: '10:00〜19:00 (フレックス制)',
    holiday: '完全週休2日制（土日祝）',
    welfare: ['通勤手当（全額）', '社会保険完備', 'ITパスポート等の資格支援', '土日祝休み']
  },
  frontend: {
    label: 'FRONTEND ENGINEER',
    title: 'フロントエンドエンジニア (React／Next.js)',
    mission: 'ReactやNext.jsを駆使し、モダンでレスポンスの良いWebアプリケーションを開発。洗練されたUIの実装を追求してください。',
    skills: ['React または Next.js による実務開発経験', 'TypeScriptを用いた開発経験', 'Tailwind CSS 等によるUI実装経験', 'デザイナーとの円滑な連携能力'],
    stacks: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Vercel', 'Figma'],
    salary: '400万円〜500万円',
    time: '10:00〜19:00 (フレックス制)',
    holiday: '完全週休2日制（土日祝）',
    welfare: ['通勤手当（全額）', '社会保険完備', 'ハイスペックPC・モニター支給', '書籍購入補助']
  },
  pmo: {
    label: 'MOBILE APP PMO',
    title: 'プロジェクトマネジメント (PMO)',
    mission: '大手企業のモバイルアプリ案件を中心にプロジェクトの進捗・品質・コストを管理。開発ベンダーとの橋渡しを担当します。',
    skills: ['ITプロジェクトにおける進捗管理の実務経験', 'ドキュメント作成・整理能力', '関係各所との調整・ファシリテーション能力'],
    stacks: ['WBS', 'Slack', 'Notion', 'Jira', 'Zoom / Teams'],
    salary: '400万円〜500万円',
    time: '10:00〜19:00 (フレックス制)',
    holiday: '完全週休2日制（土日祝）',
    welfare: ['通勤手当（全額）', '社会保険完備', '管理職手当あり', '残業ほぼなし']
  },
  infra: {
    label: 'INFRASTRUCTURE ENGINEER / SRE',
    title: 'インフラエンジニア (AWS／IaC)',
    mission: 'システムの盤石な土台を構築・運用。AWSをメインとし、Terraform等を用いたIaCの実践により自動化された環境を提供します。',
    skills: ['AWS または GCP 環境での構築・運用経験', 'Terraform 等を用いた IaC の知見', 'セキュリティ・障害対応の経験'],
    stacks: ['AWS', 'Terraform', 'Docker', 'Kubernetes', 'Datadog', 'GitHub Actions'],
    salary: '400万円〜500万円',
    time: '10:00〜19:00 (フレックス制)',
    holiday: '完全週休2日制（土日祝）',
    welfare: ['通勤手当（全額）', '社会保険完備', 'AWS認定資格等の取得支援', '私服勤務可']
  }
};

export const Recruit: React.FC = () => {
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);
  const [selectedJob, setSelectedJob] = useState<string | null>(null);
  
  // フォーム用State
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    type: '中途採用',
    changeCount: '0回',
    name: '',
    email: '',
    phone: '',
    location: '',
    currentAffiliation: '',
    portfolioUrl: '',
    skills: '',
    reason: '',
    pr: '',
    startDate: ''
  });

  const handleSubmit = async (e: React.FormEvent, jobTitle: string) => {
    e.preventDefault();
    setIsSubmitting(true);

    const mailContent = `
【希望職種】: ${jobTitle}
【応募区分】: ${formData.type}
${formData.type === '中途採用' ? `【転職回数】: ${formData.changeCount}` : ''}

【基本情報】
氏名: ${formData.name}
メール: ${formData.email}
電話: ${formData.phone}
居住地: ${formData.location}

【所属・スキル】
現在の所属: ${formData.currentAffiliation}
ポートフォリオURL: ${formData.portfolioUrl}
得意な技術: ${formData.skills}

【志望理由・自己PR】
志望理由:
${formData.reason}

自己PR・実績:
${formData.pr}

【その他】
開始可能時期: ${formData.startDate}
`.trim();

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          to: 'recruit@meece.co.jp',
          subject: `【採用エントリー】${jobTitle} / ${formData.name}様`,
          message: mailContent,
          // API側のクラッシュを防ぐためのダミーデータ
          planName: "採用エントリー",
          totalPrice: 0,
          items: []
        }),
      });

      if (response.ok) {
        setIsSubmitted(true);
      } else {
        alert('送信に失敗しました。時間をおいて再度お試しください。');
      }
    } catch (error) {
      alert('エラーが発生しました。');
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div style={{ backgroundColor: '#FFFFFF', minHeight: '100vh', width: '100%', overflowX: 'hidden' }}>
      <Navbar />
      <main>
        {/* ヒーローセクション */}
        <PageHero 
          label="CAREERS / 採用情報"
          titleTop="ワクワクを、"
          titleGradient="仕事に。"
          description="Meeceは、単に便利なシステムを作る場所ではありません。誰かの「実現したい物語」を、自らの才能というラスト・ピースで完成に導く悦びを、最高の仲間と分かち合う場所です。"
          windowWidth={windowWidth}
        />

        {/* 応募方法へのアンカーリンクボタン */}
        <div style={{ maxWidth: '1200px', margin: '-40px auto 100px', padding: '0 40px' }}>
          <button 
            onClick={() => document.getElementById('application-guide')?.scrollIntoView({ behavior: 'smooth' })}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-5px)';
              e.currentTarget.style.backgroundColor = '#1A2B5A';
              e.currentTarget.style.boxShadow = '0 20px 40px rgba(13, 27, 62, 0.3)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.backgroundColor = '#0D1B3E';
              e.currentTarget.style.boxShadow = '0 10px 30px rgba(13, 27, 62, 0.2)';
            }}
            style={{
              backgroundColor: '#0D1B3E',
              color: '#FFFFFF',
              padding: '18px 32px',
              borderRadius: '12px',
              fontSize: '15px',
              fontWeight: 800,
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              border: 'none',
              cursor: 'pointer',
              boxShadow: '0 10px 30px rgba(13, 27, 62, 0.2)',
              transition: 'all 0.3s ease'
            }}
          >
            応募方法を確認する
            <div style={{ 
              width: '20px', height: '20px', borderRadius: '50%', border: '1px solid rgba(255,255,255,0.3)',
              display: 'flex', alignItems: 'center', justifyContent: 'center'
            }}>
              <ChevronRight size={12} />
            </div>
          </button>
        </div>

        {/* Meeceで働くということ セクション */}
        <section style={{ 
          backgroundColor: '#FFFFFF',
          padding: windowWidth < 768 ? '80px 20px' : '120px 0',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}>
          <div style={{ maxWidth: '1200px', width: '100%', textAlign: 'center' }}>
            <p style={{ color: '#319795', fontSize: '12px', fontWeight: 900, letterSpacing: '0.4em', marginBottom: '16px' }}>WHY MEECE?</p>
            <h2 style={{ fontSize: 'clamp(32px, 5vw, 42px)', fontWeight: 900, color: '#0D1B3E', marginBottom: '24px' }}>Meeceで働くということ</h2>
            <div style={{ 
              width: '60px', 
              height: '4px', 
              background: 'linear-gradient(to right, #00FBFF, #9D72FF)', 
              margin: '0 auto 80px',
              borderRadius: '2px'
            }}></div>

            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: windowWidth < 1024 ? '1fr' : 'repeat(3, 1fr)', 
              gap: '40px',
              padding: '0 24px'
            }}>
              {[
                { 
                  title: '圧倒的な当事者意識', 
                  desc: '私たちは外部ベンダーという枠を超え、お客様の事業を自社の痛みとして捉えます。自ら限界を決めず、最善の結末を最後までやり遂げる意志を大切にしています。', 
                  icon: <ShieldCheck size={28} />, 
                  color: '#3182CE', 
                  bg: '#E6FFFA' 
                },
                { 
                  title: 'AIネイティブな開発文化', 
                  desc: '最新のLLMやAIツールを徹底的に使いこなし、開発スピードと品質を極限まで高めます。テクノロジーを自律的に活用し、本質的な創造に集中できる環境です。', 
                  icon: <Zap size={28} />, 
                  color: '#9D72FF', 
                  bg: '#F5F3FF' 
                },
                { 
                  title: '個を尊重し、共鳴する', 
                  desc: '自分自身を大切にできなければ、他人を大切にすることはできません。メンバーが自分らしく輝き、その喜びが周囲と共鳴するような組織運営を行っています。', 
                  icon: <Heart size={28} />, 
                  color: '#FF5BAE', 
                  bg: '#FFF5F7' 
                }
              ].map((item, idx) => (
                <div key={idx} style={{ textAlign: 'left' }}>
                  <div style={{ 
                    width: '64px', height: '64px', borderRadius: '20px', backgroundColor: item.bg,
                    display: 'flex', alignItems: 'center', justifyContent: 'center', color: item.color,
                    marginBottom: '32px', boxShadow: '0 10px 20px rgba(0,0,0,0.02)'
                  }}>
                    {item.icon}
                  </div>
                  <h3 style={{ fontSize: '20px', fontWeight: 900, color: '#0D1B3E', marginBottom: '20px' }}>{item.title}</h3>
                  <p style={{ fontSize: '15px', color: '#6B7280', lineHeight: 1.8, fontWeight: 500 }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 応募方法のご案内 セクション */}
        <section id="application-guide" style={{ 
          backgroundColor: '#FFFFFF',
          padding: windowWidth < 768 ? '100px 20px' : '140px 0',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}>
          <div style={{ maxWidth: '1200px', width: '100%', textAlign: 'center' }}>
            <p style={{ color: '#319795', fontSize: '12px', fontWeight: 900, letterSpacing: '0.4em', marginBottom: '16px' }}>APPLICATION GUIDE</p>
            <h2 style={{ fontSize: 'clamp(32px, 5vw, 42px)', fontWeight: 900, color: '#0D1B3E', marginBottom: '24px' }}>応募方法のご案内</h2>
            <div style={{ 
              width: '60px', 
              height: '4px', 
              background: 'linear-gradient(to right, #00FBFF, #9D72FF)', 
              margin: '0 auto 40px',
              borderRadius: '2px'
            }}></div>
            <p style={{ color: '#6B7280', fontSize: '16px', marginBottom: '80px', fontWeight: 500 }}>
              メールでエントリーする際の手順をガイドします。
            </p>

            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: windowWidth < 1024 ? '1fr' : 'repeat(3, 1fr)', 
              gap: '60px',
              padding: '0 24px'
            }}>
              {[
                { 
                  step: 'STEP 01', 
                  title: '募集詳細をクリック', 
                  desc: 'まずは気になる職種のボタンを押して詳細を確認してください。',
                  color: '#3182CE'
                },
                { 
                  step: 'STEP 02', 
                  title: 'メール応募ボタンを起動', 
                  desc: 'モーダル詳細の下にある「メール応募する」ボタンを押すと、自動でメールソフトが開きます。',
                  color: '#9D72FF'
                },
                { 
                  step: 'STEP 03', 
                  title: '4つの必要事項を記入', 
                  desc: 'お名前、お電話番号、現在の職業/所属、自己PR・職務経歴を埋めて送信してください。',
                  color: '#FF5BAE'
                }
              ].map((item, idx) => (
                <div key={idx} style={{ position: 'relative' }}>
                  <div style={{ position: 'relative', width: '100%', aspectRatio: '16/10', marginBottom: '60px' }}>
                    <div style={{ 
                      position: 'absolute', top: '-20px', left: '50%', transform: 'translateX(-50%)',
                      backgroundColor: '#FFFFFF', border: `2px solid ${item.color === '#3182CE' ? '#3182CE' : item.color === '#9D72FF' ? '#FF5BAE' : '#0D1B3E'}`,
                      padding: '10px 24px', borderRadius: '14px', zIndex: 3, boxShadow: '0 10px 20px rgba(0,0,0,0.05)',
                      whiteSpace: 'nowrap'
                    }}>
                      <span style={{ fontSize: '12px', fontWeight: 900, color: '#0D1B3E' }}>
                        {idx === 0 ? '職種を選んで...' : idx === 1 ? '応募ボタンを押す！' : '4項目を記入して送信！'}
                      </span>
                      <div style={{ 
                        position: 'absolute', bottom: '-8px', left: '50%', transform: 'translateX(-50%)',
                        width: '0', height: '0', borderLeft: '8px solid transparent', borderRight: '8px solid transparent',
                        borderTop: `8px solid ${item.color === '#3182CE' ? '#3182CE' : item.color === '#9D72FF' ? '#FF5BAE' : '#0D1B3E'}`
                      }}></div>
                    </div>

                    <div style={{ 
                      width: '100%', height: '100%', backgroundColor: '#F9FAFB', borderRadius: '24px',
                      border: '1px solid #F3F4F6', display: 'flex', alignItems: 'center', justifyContent: 'center',
                      position: 'relative', overflow: 'hidden'
                    }}>
                      <div style={{ 
                        width: '80%', height: '70%', backgroundColor: '#FFFFFF', borderRadius: '16px',
                        boxShadow: '0 20px 40px rgba(0,0,0,0.04)', padding: '16px', border: '1px solid #F1F5F9',
                        display: 'flex', flexDirection: 'column'
                      }}>
                        <div style={{ display: 'flex', gap: '4px', marginBottom: '16px' }}>
                          <div style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#F1F5F9' }}></div>
                          <div style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#F1F5F9' }}></div>
                          <div style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#F1F5F9' }}></div>
                        </div>

                        {idx === 0 && (
                          <>
                            <div style={{ width: '60%', height: '10px', backgroundColor: '#F9FAFB', borderRadius: '4px', marginBottom: '8px' }}></div>
                            <div style={{ width: '40%', height: '10px', backgroundColor: '#F9FAFB', borderRadius: '4px', marginBottom: '20px' }}></div>
                            <div style={{ width: '100%', height: '32px', backgroundColor: '#0D1B3E', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                              <span style={{ color: '#FFF', fontSize: '8px', fontWeight: 900 }}>募集詳細を見る</span>
                            </div>
                          </>
                        )}
                        {idx === 1 && (
                          <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <div style={{ width: '100%', height: '32px', backgroundColor: '#0D1B3E', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px' }}>
                              <Mail size={10} color="#FFF" />
                              <span style={{ color: '#FFF', fontSize: '8px', fontWeight: 900 }}>メール応募する</span>
                            </div>
                          </div>
                        )}
                        {idx === 2 && (
                          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                              <div style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#FF5BAE' }}></div>
                              <div style={{ width: '80%', height: '8px', backgroundColor: '#F9FAFB', borderRadius: '4px' }}></div>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                              <div style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#FF5BAE' }}></div>
                              <div style={{ width: '80%', height: '8px', backgroundColor: '#F9FAFB', borderRadius: '4px' }}></div>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                              <div style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#FF5BAE' }}></div>
                              <div style={{ width: '80%', height: '8px', backgroundColor: '#F9FAFB', borderRadius: '4px' }}></div>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  <h3 style={{ fontSize: '20px', fontWeight: 900, color: item.color, fontStyle: 'italic', marginBottom: '16px' }}>{item.step}</h3>
                  <h4 style={{ fontSize: '18px', fontWeight: 900, color: '#0D1B3E', marginBottom: '16px' }}>{item.title}</h4>
                  <p style={{ fontSize: '14px', color: '#6B7280', lineHeight: 1.8, fontWeight: 500 }}>{item.desc}</p>
                </div>
              ))}
            </div>

            <div style={{ marginTop: '100px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px' }}>
              <p style={{ fontSize: '11px', fontWeight: 900, color: '#9CA3AF', letterSpacing: '0.2em' }}>CHECK OUR POSITIONS</p>
              <h3 style={{ fontSize: '16px', fontWeight: 900, color: '#0D1B3E' }}>募集要項を見る</h3>
              <div style={{ color: '#0D1B3E' }}>
                <ChevronRight size={24} style={{ transform: 'rotate(90deg)' }} />
              </div>
            </div>
          </div>
        </section>

        {/* 募集中の職種 セクション */}
        <section id="positions-section" style={{ 
          backgroundColor: '#FFFFFF',
          padding: '100px 0 140px',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}>
          <div style={{ maxWidth: '1200px', width: '100%', textAlign: 'center' }}>
            <p style={{ color: '#319795', fontSize: '12px', fontWeight: 900, letterSpacing: '0.4em', marginBottom: '16px' }}>OPEN POSITIONS</p>
            <h2 style={{ fontSize: 'clamp(32px, 5vw, 42px)', fontWeight: 900, color: '#0D1B3E', marginBottom: '24px' }}>募集中の職種</h2>
            <div style={{ 
              width: '60px', 
              height: '4px', 
              background: 'linear-gradient(to right, #3182CE, #9D72FF)', 
              margin: '0 auto 80px',
              borderRadius: '2px'
            }}></div>

            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: windowWidth < 768 ? '1fr' : windowWidth < 1200 ? 'repeat(2, 1fr)' : 'repeat(3, 1fr)', 
              gap: '30px',
              padding: '0 24px'
            }}>
              {[
                { id: 'backend', category: '正社員', subCategory: 'BACKEND', title: 'バックエンドエンジニア', subtitle: '(PYTHON / GO)', desc: 'スケーラブルなシステム基盤の構築から、最新のAI駆動型開発まで。技術の力でクライアントの「物語」を完結させる中心メンバーを募集します。', tech: 'Python, Go, Django, AWS', salary: '400万円〜500万円' },
                { id: 'secretary', category: '正社員', subCategory: 'SECRETARY', title: '秘書（社長補佐・事務）', subtitle: '', desc: '社長のスケジュール管理や来客対応、書類作成などを通じて、経営を間近でサポートするポジションです。事務作業のみならず、組織運営の円滑化に寄与していただきます。', tech: 'スケジュール管理, 事務, 秘書', salary: '300万円〜400万円' },
                { id: 'assistant', category: 'リーダー候補', subCategory: 'ASSISTANT', title: 'ITアシスタント・進捗管理', subtitle: '(ADMIN / PMO)', desc: 'システム開発プロジェクトにおける進捗管理、資料作成サポートなどを担当。未経験からITコンサルタントやPMへのキャリアアップを目指せます。', tech: '事務, 進捗管理, 資料作成', salary: '300万円〜500万円' },
                { id: 'frontend', category: '正社員', subCategory: 'FRONTEND', title: 'フロントエンドエンジニア', subtitle: '(REACT / NEXT.JS)', desc: '複雑な要件をシンプルな体験へ。最新のReact/Next.jsを駆使し、ユーザーが直感的に「ワクワク」するインターフェースの設計・実装を主導します。', tech: 'TypeScript, Tailwind, Next.js', salary: '400万円〜500万円' },
                { id: 'pmo', category: '正社員', subCategory: 'MANAGEMENT', title: 'プロジェクトマネジメント', subtitle: '(PMO) (MOBILE / APP)', desc: '大手企業のモバイルアプリ案件を中心にプロジェクトの品質、納期、コストを統合的に管理。円滑な進行を約束します。', tech: 'PMO, 進捗管理, モバイル', salary: '400万円〜500万円' },
                { id: 'infra', category: '正社員', subCategory: 'INFRASTRUCTURE', title: 'インフラエンジニア / SRE', subtitle: '(AWS / IAC)', desc: 'システムの「盤石な土台」を創る。AWS/GCPを駆使したクラウド設計からIaCによる自動化、高度なセキュリティ構築まで。', tech: 'AWS, Terraform, Docker, K8s', salary: '400万円〜500万円' }
              ].map((job) => (
                <div key={job.id} style={{ 
                  backgroundColor: '#FFFFFF', 
                  borderRadius: '48px', 
                  padding: '48px 40px', 
                  textAlign: 'left',
                  border: '1px solid #F3F4F6',
                  display: 'flex',
                  flexDirection: 'column'
                }}>
                  <div style={{ display: 'flex', gap: '8px', marginBottom: '24px' }}>
                    <span style={{ fontSize: '10px', fontWeight: 900, color: '#3182CE', backgroundColor: '#EBF8FF', padding: '4px 12px', borderRadius: '100px' }}>{job.category}</span>
                    <span style={{ fontSize: '10px', fontWeight: 900, color: '#9CA3AF', backgroundColor: '#F9FAFB', padding: '4px 12px', borderRadius: '100px' }}>{job.subCategory}</span>
                  </div>
                  <h3 style={{ fontSize: '22px', fontWeight: 900, color: '#0D1B3E', marginBottom: '8px' }}>{job.title}</h3>
                  <p style={{ fontSize: '12px', fontWeight: 800, color: '#94A3B8', marginBottom: '24px' }}>{job.subtitle}</p>
                  <p style={{ fontSize: '14px', color: '#6B7280', lineHeight: 1.8, marginBottom: '32px' }}>{job.desc}</p>
                  
                  <div style={{ borderTop: '1px solid #F3F4F6', paddingTop: '24px', marginBottom: '40px', marginTop: 'auto' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
                      <Cpu size={14} color="#94A3B8" />
                      <span style={{ fontSize: '12px', color: '#94A3B8', fontWeight: 700 }}>{job.tech}</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <Monitor size={14} color="#94A3B8" />
                      <span style={{ fontSize: '12px', color: '#94A3B8', fontWeight: 700 }}>予定年収：{job.salary}</span>
                    </div>
                  </div>

                  <button 
                    onClick={() => setSelectedJob(job.id)}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-5px)';
                      e.currentTarget.style.backgroundColor = '#1A2B5A';
                      e.currentTarget.style.boxShadow = '0 15px 30px rgba(13, 27, 62, 0.2)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.backgroundColor = '#0D1B3E';
                      e.currentTarget.style.boxShadow = 'none';
                    }}
                    style={{ 
                      width: '100%', padding: '18px', borderRadius: '16px', backgroundColor: '#0D1B3E',
                      color: '#FFFFFF', fontSize: '15px', fontWeight: 900, border: 'none', cursor: 'pointer',
                      transition: 'all 0.3s ease'
                    }}
                  >
                    募集詳細を見る
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 選考プロセス セクション */}
        <section style={{ 
          backgroundColor: '#FFFFFF',
          padding: '140px 0',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          overflow: 'hidden'
        }}>
          <div style={{ maxWidth: '1100px', width: '100%', textAlign: 'center' }}>
            <p style={{ color: '#9D72FF', fontSize: '10px', fontWeight: 900, letterSpacing: '0.4em', marginBottom: '16px' }}>SELECTION FLOW</p>
            <h2 style={{ fontSize: '42px', fontWeight: 900, color: '#0D1B3E', marginBottom: '24px' }}>選考プロセス</h2>
            <div style={{ 
              width: '60px', 
              height: '4px', 
              background: 'linear-gradient(to right, #3182CE, #9D72FF)', 
              margin: '0 auto 80px',
              borderRadius: '2px'
            }}></div>

            <div style={{ position: 'relative', padding: windowWidth < 768 ? '0 20px' : '0 40px' }}>
              <div style={{ 
                position: 'absolute', 
                left: windowWidth < 768 ? '44px' : '50%', 
                top: '0', 
                bottom: '0', 
                width: '2px', 
                backgroundColor: '#F1F5F9',
                transform: 'translateX(-50%)',
                zIndex: 0
              }}></div>

              {[
                { step: '01', title: 'エントリー', desc: '必要情報をフォームからお送りください。通常3営業日以内にご連絡いたします。', color: '#3182CE' },
                { step: '02', title: 'カジュアル面談', desc: 'まずはお互いのビジョンを共有しましょう。現場メンバーとの対話の場です。', color: '#9D72FF' },
                { step: '03', title: '2次・3次面接', desc: '専門スキルやカルチャーフィットを確認します。チームとしての可能性を深く探ります。', color: '#3182CE' },
                { step: '04', title: 'オファー', desc: '新しい物語の始まりです。あなたの参加を心よりお待ちしています！', color: '#00D1FF' }
              ].map((item, idx) => (
                <div key={idx} style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: windowWidth < 768 ? 'flex-start' : (idx % 2 === 0 ? 'flex-end' : 'flex-start'),
                  marginBottom: '80px',
                  position: 'relative',
                  width: '100%',
                  zIndex: 1
                }}>
                  <div style={{ 
                    position: 'absolute', 
                    left: windowWidth < 768 ? '44px' : '50%', 
                    width: '40px', 
                    height: '40px', 
                    borderRadius: '50%', 
                    backgroundColor: '#FFFFFF',
                    border: `2px solid ${item.color}`,
                    transform: 'translateX(-50%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '12px',
                    fontWeight: 900,
                    color: item.color,
                    zIndex: 2,
                    boxShadow: `0 0 20px ${item.color}33`
                  }}>
                    {item.step}
                  </div>

                  <div 
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-5px)';
                      e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.06)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.02)';
                    }}
                    style={{ 
                      width: windowWidth < 768 ? 'calc(100% - 80px)' : '40%',
                      textAlign: 'left',
                      padding: '40px',
                      marginLeft: windowWidth < 768 ? '80px' : (idx % 2 === 1 ? '50%' : '0'),
                      marginRight: windowWidth < 768 ? '0' : (idx % 2 === 0 ? '50%' : '0'),
                      backgroundColor: '#FFFFFF',
                      borderRadius: '32px',
                      border: '1px solid #F3F4F6',
                      boxShadow: '0 10px 30px rgba(0,0,0,0.02)',
                      transition: 'all 0.3s ease'
                    }}
                  >
                    <h3 style={{ 
                      fontSize: '20px', 
                      fontWeight: 900, 
                      color: '#0D1B3E', 
                      marginBottom: '16px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px'
                    }}>
                      <span style={{ width: '4px', height: '20px', borderRadius: '2px', backgroundColor: item.color }}></span>
                      {item.title}
                    </h3>
                    <p style={{ fontSize: '14px', color: '#6B7280', lineHeight: 1.8, fontWeight: 500 }}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 環境 セクション */}
        <section style={{ 
          backgroundColor: '#F8F9FB',
          padding: '140px 0',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}>
          <div style={{ maxWidth: '1200px', width: '100%', textAlign: 'center' }}>
            <p style={{ color: '#319795', fontSize: '10px', fontWeight: 900, letterSpacing: '0.4em', marginBottom: '16px' }}>ENVIRONMENT</p>
            <h2 style={{ fontSize: '42px', fontWeight: 900, color: '#0D1B3E', marginBottom: '24px' }}>物語を紡ぐための環境</h2>
            <div style={{ 
              width: '60px', 
              height: '4px', 
              background: 'linear-gradient(to right, #3182CE, #9D72FF)', 
              margin: '0 auto 80px',
              borderRadius: '2px'
            }}></div>

            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: windowWidth < 640 ? '1fr' : windowWidth < 1024 ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)', 
              gap: '24px',
              padding: '0 24px'
            }}>
              {[
                { title: 'ハイブリッドワーク', desc: '東京駅直結のオフィス（丸の内トラストタワー）とリモートを組み合わせ、最適な場所で働けます。', icon: <Monitor size={24} /> },
                { title: 'フルフレックス制', desc: 'コアタイムなし。自律的なスケジュール管理を推奨し、個々のライフスタイルに寄り添います。', icon: <Clock size={24} /> },
                { title: '最新デバイス支給', desc: 'ハイスペックPCや希望の周辺機器、AIツールのライセンス提供など、技術的な投資を惜しみません。', icon: <Cpu size={24} /> },
                { title: 'スキルアップ支援', desc: '書籍購入費、外部セミナー参加費、資格取得費用などを会社が積極的にバックアップします。', icon: <GraduationCap size={24} /> }
              ].map((env, idx) => (
                <div key={idx} style={{ 
                  backgroundColor: '#FFFFFF', 
                  padding: '48px 32px', 
                  borderRadius: '32px', 
                  textAlign: 'left',
                  boxShadow: '0 10px 40px rgba(0,0,0,0.02)'
                }}>
                  <div style={{ color: '#319795', marginBottom: '24px' }}>{env.icon}</div>
                  <h3 style={{ fontSize: '18px', fontWeight: 900, color: '#0D1B3E', marginBottom: '16px' }}>{env.title}</h3>
                  <p style={{ fontSize: '13px', color: '#6B7280', lineHeight: 1.8, fontWeight: 500 }}>{env.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* フッターCTA セクション */}
        <section style={{ 
          backgroundColor: '#0D1B3E',
          padding: windowWidth < 768 ? '80px 24px' : '120px 40px',
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          position: 'relative',
          overflow: 'hidden'
        }}>
          <div style={{ 
            position: 'absolute', width: '150%', height: '100%', 
            top: '30%', left: '-25%', border: '1px solid rgba(0, 251, 255, 0.05)',
            borderRadius: '50%', pointerEvents: 'none'
          }}></div>

          <div style={{ maxWidth: '800px', width: '100%', textAlign: 'center', position: 'relative', zIndex: 1 }}>
            <h2 style={{ 
              fontSize: 'clamp(28px, 5vw, 48px)', 
              fontWeight: 900, 
              color: '#FFFFFF', 
              lineHeight: 1.3,
              marginBottom: '24px',
              letterSpacing: '-0.02em'
            }}>
              あなたの才能を、<br />
              <span style={{ 
                background: 'linear-gradient(to right, #3182CE, #9D72FF, #FF5BAE)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}>
                まだ見ぬ感動の続きに。
              </span>
            </h2>
            
            <p style={{ 
              color: 'rgba(255, 255, 255, 0.6)', 
              fontSize: '16px', 
              marginBottom: '60px',
              fontWeight: 500
            }}>
              私たちと共に、社会を支え、物語を完成させませんか？
            </p>

            <button 
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.backgroundColor = '#F3F4F6';
                e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.2)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.backgroundColor = '#FFFFFF';
                e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.1)';
              }}
              onClick={() => {
                document.getElementById('positions-section')?.scrollIntoView({ behavior: 'smooth' });
              }}
              style={{ 
                display: 'inline-flex',
                alignItems: 'center',
                gap: '12px',
                backgroundColor: '#FFFFFF',
                color: '#0D1B3E',
                padding: '20px 48px',
                borderRadius: '100px',
                fontSize: '16px',
                fontWeight: 900,
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
              }}
            >
              募集中の職種を見る
              <ChevronRight size={20} />
            </button>
          </div>
        </section>
      </main>

      {/* 職種詳細モーダル */}
      {selectedJob && (
        <div style={{
          position: 'fixed',
          inset: 0,
          backgroundColor: 'rgba(13, 27, 62, 0.8)',
          backdropFilter: 'blur(8px)',
          zIndex: 100,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: windowWidth < 768 ? '20px' : '40px'
        }}>
          <div style={{
            backgroundColor: '#FFFFFF',
            width: '100%',
            maxWidth: '900px',
            maxHeight: '90vh',
            borderRadius: '40px',
            position: 'relative',
            overflowY: 'auto',
            padding: windowWidth < 768 ? '40px 24px' : '60px 80px',
            boxShadow: '0 40px 100px rgba(0,0,0,0.3)'
          }}>
            <button 
              onClick={() => setSelectedJob(null)}
              style={{
                position: 'sticky', // absoluteからstickyに変更して固定
                top: '0',           // スクロールしても上端に張り付く
                float: 'right',     // 右側に寄せる
                marginTop: '-30px', // モーダルの内側余白を相殺
                marginRight: '-40px',
                background: 'rgba(255, 255, 255, 0.9)', // 重なっても見えるように背景色を追加
                backdropFilter: 'blur(4px)',           // 背景を少しぼかして視認性アップ
                border: 'none',
                color: '#9CA3AF',
                cursor: 'pointer',
                padding: '12px',
                borderRadius: '50%',
                zIndex: 10,                            // コンテンツより前面に表示
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => e.currentTarget.style.color = '#0D1B3E'}
              onMouseLeave={(e) => e.currentTarget.style.color = '#9CA3AF'}
            >
              <X size={28} />
            </button>

            {(() => {
              
              const data = jobDetails[selectedJob || ''];
              if (!data) return null;

              return (
                <div style={{ textAlign: 'left' }}>
                  <span style={{ fontSize: '12px', fontWeight: 900, color: '#319795', backgroundColor: '#E6FFFA', padding: '6px 16px', borderRadius: '100px', letterSpacing: '0.1em' }}>
                    {data.label}
                  </span>
                  <h2 style={{ fontSize: 'clamp(24px, 4vw, 36px)', fontWeight: 900, color: '#0D1B3E', marginTop: '24px', marginBottom: '60px' }}>
                    {data.title}
                  </h2>

                  <div style={{ display: 'grid', gridTemplateColumns: windowWidth < 1024 ? '1fr' : '1.2fr 0.8fr', gap: '60px' }}>
                    <div>
                      <h4 style={{ fontSize: '16px', fontWeight: 900, color: '#319795', marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#3182CE' }}></div>
                        募集背景・ミッション
                      </h4>
                      <p style={{ fontSize: '15px', color: '#6B7280', lineHeight: 2, marginBottom: '48px' }}>
                        {data.mission}
                      </p>

                      <h4 style={{ fontSize: '16px', fontWeight: 900, color: '#9D72FF', marginBottom: '24px' }}>必須スキル・経験</h4>
                      <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 48px' }}>
                        {data.skills.map((skill: string, i: number) => (
                          <li key={i} style={{ display: 'flex', gap: '12px', marginBottom: '16px', fontSize: '15px', color: '#6B7280', fontWeight: 500 }}>
                            <ShieldCheck size={20} color="#3182CE" style={{ flexShrink: 0 }} />
                            {skill}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 style={{ fontSize: '16px', fontWeight: 900, color: '#FF5BAE', marginBottom: '24px' }}>技術スタック / ツール</h4>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '48px' }}>
                        {data.stacks.map((stack: string, i: number) => (
                          <span key={i} style={{ fontSize: '12px', fontWeight: 700, color: '#6B7280', backgroundColor: '#F9FAFB', padding: '8px 16px', borderRadius: '8px' }}>
                            {stack}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <h4 style={{ fontSize: '16px', fontWeight: 900, color: '#0D1B3E', marginBottom: '24px' }}>募集要項</h4>
                  <div style={{ display: 'grid', gridTemplateColumns: windowWidth < 640 ? '1fr' : 'repeat(3, 1fr)', gap: '20px', marginBottom: '48px' }}>
                    {[
                      { label: '予定年収', value: data.salary },
                      { label: '勤務時間', value: data.time },
                      { label: '休日・休暇', value: data.holiday }
                    ].map((item, i) => (
                      <div key={i} style={{ backgroundColor: '#F9FAFB', padding: '24px', borderRadius: '16px' }}>
                        <p style={{ fontSize: '10px', fontWeight: 800, color: '#9CA3AF', marginBottom: '8px' }}>{item.label}</p>
                        <p style={{ fontSize: '14px', fontWeight: 900, color: '#0D1B3E' }}>{item.value}</p>
                      </div>
                    ))}
                  </div>

                  <h4 style={{ fontSize: '16px', fontWeight: 900, color: '#0D1B3E', marginBottom: '24px' }}>福利厚生・制度</h4>
                  <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 60px', color: '#6B7280', fontSize: '15px', lineHeight: 2 }}>
                    {data.welfare.map((w: string, i: number) => (
                      <li key={i}>・{w}</li>
                    ))}
                  </ul>

                  <div style={{ display: 'flex', flexDirection: windowWidth < 640 ? 'column' : 'row', alignItems: 'center', gap: '32px', borderTop: '1px solid #F3F4F6', paddingTop: '40px' }}>
                    <button 
                      onClick={() => setShowForm(true)}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'translateY(-5px)';
                        e.currentTarget.style.backgroundColor = '#1A2B5A';
                        e.currentTarget.style.boxShadow = '0 15px 30px rgba(13, 27, 62, 0.2)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'translateY(0)';
                        e.currentTarget.style.backgroundColor = '#0D1B3E';
                        e.currentTarget.style.boxShadow = 'none';
                      }}
                      style={{
                        backgroundColor: '#0D1B3E', color: '#FFFFFF', padding: '18px 40px', borderRadius: '16px',
                        fontSize: '15px', fontWeight: 900, border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '12px',
                        transition: 'all 0.3s ease'
                      }}
                    >
                      この職種にエントリーする <Rocket size={18} />
                    </button>
                    <button 
                      onClick={() => setSelectedJob(null)}
                      style={{
                        background: 'none', border: 'none', color: '#9CA3AF', fontSize: '14px', fontWeight: 700,
                        cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px'
                      }}
                    >
                      ← 職種一覧に戻る
                    </button>
                  </div>
                </div>
              );
            })()}
          </div>
        </div>
      )}

      {/* エントリーフォーム本体 */}
      {showForm && (
        <div style={{
          position: 'fixed', inset: 0, backgroundColor: 'rgba(255, 255, 255, 0.98)',
          zIndex: 200, overflowY: 'auto', padding: windowWidth < 768 ? '20px 16px' : '40px 20px'
        }}>
          <div style={{ maxWidth: '600px', margin: '0 auto' }}>
            <button 
              onClick={() => { setShowForm(false); setIsSubmitted(false); }}
              style={{ float: 'right', border: 'none', background: 'none', cursor: 'pointer', color: '#9CA3AF' }}
            >
              <X size={32} />
            </button>

            {isSubmitted ? (
              <div style={{ textAlign: 'center', padding: '80px 0' }}>
                <div style={{ width: '80px', height: '80px', backgroundColor: '#E6FFFA', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 32px', color: '#319795' }}>
                  <ShieldCheck size={40} />
                </div>
                <h2 style={{ fontSize: '24px', fontWeight: 900, color: '#0D1B3E', marginBottom: '16px' }}>エントリーを完了しました</h2>
                <p style={{ color: '#6B7280', lineHeight: 1.8 }}>
                  内容を確認し、3営業日以内に担当者よりご連絡いたします。<br />
                  今しばらくお待ちください。
                </p>
                <button 
                  onClick={() => { setShowForm(false); setSelectedJob(null); setIsSubmitted(false); }}
                  style={{ marginTop: '40px', padding: '16px 40px', backgroundColor: '#0D1B3E', color: '#FFF', borderRadius: '12px', border: 'none', fontWeight: 900, cursor: 'pointer' }}
                >
                  閉じる
                </button>
              </div>
            ) : (
              <form onSubmit={(e) => handleSubmit(e, jobDetails[selectedJob || '']?.title)}>
                <p style={{ color: '#319795', fontWeight: 900, fontSize: '12px', letterSpacing: '0.2em', marginBottom: '8px' }}>ENTRY FORM</p>
                <h2 style={{ fontSize: windowWidth < 768 ? '24px' : '28px', fontWeight: 900, color: '#0D1B3E', marginBottom: '40px' }}>
                  {jobDetails[selectedJob || '']?.title} への応募
                </h2>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                  {/* 応募区分 */}
                  <div>
                    <label style={{ display: 'block', fontSize: '14px', fontWeight: 900, color: '#0D1B3E', marginBottom: '12px' }}>応募区分 <span style={{ color: '#FF5BAE' }}>*</span></label>
                    <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                      {['中途採用', '新卒採用', 'インターン'].map(t => (
                        <button
                          key={t} type="button"
                          onClick={() => setFormData({...formData, type: t})}
                          style={{
                            flex: 1, minWidth: '100px', padding: '12px', borderRadius: '8px', border: formData.type === t ? '2px solid #0D1B3E' : '1px solid #E5E7EB',
                            backgroundColor: formData.type === t ? '#F8FAFC' : '#FFF', fontWeight: 700, cursor: 'pointer', transition: 'all 0.2s'
                          }}
                        >{t}</button>
                      ))}
                    </div>
                  </div>

                  {/* 転職回数（中途のみ表示） */}
                  {formData.type === '中途採用' && (
                    <div style={{ animation: 'fadeIn 0.3s ease-out' }}>
                      <label style={{ display: 'block', fontSize: '14px', fontWeight: 900, color: '#0D1B3E', marginBottom: '12px' }}>これまでの転職回数 <span style={{ color: '#FF5BAE' }}>*</span></label>
                      <select 
                        required
                        value={formData.changeCount}
                        onChange={(e) => setFormData({...formData, changeCount: e.target.value})}
                        style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #E5E7EB', backgroundColor: '#FFF' }}
                      >
                        {['0回（今回が初めて）', '1回', '2回', '3回', '4回以上'].map(v => <option key={v} value={v}>{v}</option>)}
                      </select>
                    </div>
                  )}

                  <div>
                    <label style={{ display: 'block', fontSize: '14px', fontWeight: 900, color: '#0D1B3E', marginBottom: '8px' }}>お名前 <span style={{ color: '#FF5BAE' }}>*</span></label>
                    <input required style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #E5E7EB' }} 
                      value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} />
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: windowWidth < 640 ? '1fr' : '1fr 1fr', gap: '16px' }}>
                    <div>
                      <label style={{ display: 'block', fontSize: '14px', fontWeight: 900, color: '#0D1B3E', marginBottom: '8px' }}>メールアドレス <span style={{ color: '#FF5BAE' }}>*</span></label>
                      <input required type="email" style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #E5E7EB' }} 
                        value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} />
                    </div>
                    <div>
                      <label style={{ display: 'block', fontSize: '14px', fontWeight: 900, color: '#0D1B3E', marginBottom: '8px' }}>電話番号 <span style={{ color: '#FF5BAE' }}>*</span></label>
                      <input required type="tel" style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #E5E7EB' }} 
                        value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} />
                    </div>
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '14px', fontWeight: 900, color: '#0D1B3E', marginBottom: '8px' }}>現在の所属（会社・学校）</label>
                    <input style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #E5E7EB' }} 
                      value={formData.currentAffiliation} onChange={e => setFormData({...formData, currentAffiliation: e.target.value})} />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '14px', fontWeight: 900, color: '#0D1B3E', marginBottom: '8px' }}>GitHub / ポートフォリオ / SNS等のURL</label>
                    <input placeholder="https://..." style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #E5E7EB' }} 
                      value={formData.portfolioUrl} onChange={e => setFormData({...formData, portfolioUrl: e.target.value})} />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '14px', fontWeight: 900, color: '#0D1B3E', marginBottom: '8px' }}>得意な技術・これまでの実績</label>
                    <textarea rows={3} style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #E5E7EB' }} 
                      value={formData.skills} onChange={e => setFormData({...formData, skills: e.target.value})} />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '14px', fontWeight: 900, color: '#0D1B3E', marginBottom: '8px' }}>Meeceへの志望理由 <span style={{ color: '#FF5BAE' }}>*</span></label>
                    <textarea required rows={4} style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #E5E7EB' }} 
                      value={formData.reason} onChange={e => setFormData({...formData, reason: e.target.value})} />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '14px', fontWeight: 900, color: '#0D1B3E', marginBottom: '8px' }}>稼働開始可能時期</label>
                    <input placeholder="例：2024年4月から、即日など" style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #E5E7EB' }} 
                      value={formData.startDate} onChange={e => setFormData({...formData, startDate: e.target.value})} />
                  </div>

                  <button 
                    disabled={isSubmitting}
                    type="submit"
                    style={{
                      width: '100%', padding: '20px', backgroundColor: '#0D1B3E', color: '#FFF',
                      borderRadius: '16px', border: 'none', fontWeight: 900, fontSize: '16px',
                      cursor: isSubmitting ? 'not-allowed' : 'pointer', marginTop: '20px',
                      transition: 'all 0.3s'
                    }}
                  >
                    {isSubmitting ? '送信中...' : 'エントリーを送信する'}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
};

export default Recruit;