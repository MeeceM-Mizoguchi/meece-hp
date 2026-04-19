import React, { useState, useEffect, useRef } from 'react';
import { Navbar } from '../components/organisms/Navbar';
import { Footer } from '../components/organisms/Footer';
import { PageHero } from '../components/molecules/PageHero';
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';
import { 
  Monitor, 
  Layout, 
  Code2, 
  Sparkles, 
  FileDown, 
  Mail, 
  Calendar
} from 'lucide-react';

const Estimate: React.FC = () => {
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);
  const [isAiMode, setIsAiMode] = useState(false);
  const [selectedType, setSelectedType] = useState<{name: string, price: number} | null>(null);
  const [scale, setScale] = useState(1.5);
  const [screens, setScreens] = useState(1);
  const [options, setOptions] = useState<{id: string, label: string, price: number}[]>([]);
  const [currentStep, setCurrentStep] = useState(1); // 現在の質問番号を管理
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    isIndividual: false,
    status: 'すぐにでも開発を始めたい',
    message: ''
  });
  const [isSending, setIsSending] = useState(false);
  
  const simulatorRef = useRef<HTMLDivElement>(null);
  const scheduleRef = useRef<HTMLDivElement>(null);

  // オプション定義
  const optionList = [
    { id: 'design', label: '特別デザイン作成', price: 350000 },
    { id: 'video', label: 'MV動画制作', price: 600000 },
    { id: 'auth', label: 'ログイン認証', price: 500000 },
    { id: 'payment', label: '決済連携', price: 1000000 },
    { id: 'ai', label: 'AIチャット', price: 2000000 },
  ];

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    const handleScroll = () => {
      // The summary card is now handled by CSS sticky, so no manual calculation is needed.
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isAiMode]); // AIモードの切り替えを検知するために依存配列に追加

  // 金額計算ロジック
  const calculateTotal = () => {
    if (!selectedType) return 0;
    const unitPrice = Math.round((selectedType.price * (isAiMode ? (1/3) : 1)) * scale);
    const baseTotal = unitPrice * screens;
    const optTotal = options.reduce((sum, opt) => sum + opt.price, 0);
    return baseTotal + optTotal;
  };

  // スケジュール計算ロジック
  const calculateDuration = () => {
    if (!selectedType) return 0;
    let baseM = selectedType.name.includes('HP') ? 0.8 : selectedType.name.includes('Web') ? 2 : 6;
    let optM = options.reduce((acc, o) => acc + (o.label.includes('AI') ? 1.5 : 0.5), 0);
    let duration = ((baseM * scale) + optM + (screens - 1) * 0.1) * (isAiMode ? 0.6 : 1);
    return Math.max(0.5, Math.round(duration * 10) / 10);
  };

  const totalAmount = calculateTotal();
  const duration = calculateDuration();

  const handleOptionChange = (opt: {id: string, label: string, price: number}) => {
    if (options.find(o => o.id === opt.id)) {
      setOptions(options.filter(o => o.id !== opt.id));
    } else {
      setOptions([...options, opt]);
    }
  };

  const scrollToSchedule = () => {
    scheduleRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  // PDF生成ロジック
  const generatePDF = async () => {
    const pdf = new jsPDF('p', 'mm', 'a4');
    
    // 1ページ目（御発注書案）の生成
    const element1 = document.getElementById('pdf-page-1');
    if (element1) {
      element1.style.display = 'block'; // 一時的に表示
      const canvas1 = await html2canvas(element1, { scale: 2, useCORS: true });
      element1.style.display = 'none'; // 再び隠す
      const imgData1 = canvas1.toDataURL('image/png');
      pdf.addImage(imgData1, 'PNG', 0, 0, 210, (canvas1.height * 210) / canvas1.width);
    }

    pdf.addPage();

    // 2ページ目（スケジュール案）の生成
    const element2 = document.getElementById('pdf-page-2');
    if (element2) {
      element2.style.display = 'block'; // 一時的に表示
      const canvas2 = await html2canvas(element2, { scale: 2, useCORS: true });
      element2.style.display = 'none'; // 再び隠す
      const imgData2 = canvas2.toDataURL('image/png');
      pdf.addImage(imgData2, 'PNG', 0, 0, 210, (canvas2.height * 210) / canvas2.width);
    }

    pdf.save(`Meece_Estimate_${new Date().getTime()}.pdf`);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);

    const estimateDetails = `
【シミュレーション内容】
領域: ${selectedType?.name}
ボリューム: ${scale === 1 ? '小規模' : scale === 1.5 ? '中規模' : '大規模'}
画面数: ${screens}枚
開発モード: ${isAiMode ? 'AI MODE' : 'NORMAL'}
オプション: ${options.map(o => o.label).join(', ') || 'なし'}
概算金額: ¥${totalAmount.toLocaleString()} 〜
想定期間: 約${duration}ヶ月

【お客様情報】
会社名: ${formData.isIndividual ? '個人事業主' : formData.company}
状況: ${formData.status}
メッセージ:
${formData.message}
    `;

    try {
      const res = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: estimateDetails,
        }),
      });

      if (res.ok) {
        alert('お問い合わせありがとうございます。送信が完了しました。');
        setIsModalOpen(false);
      } else {
        throw new Error();
      }
    } catch (error) {
      alert('送信に失敗しました。お手数ですが info@meece.io まで直接ご連絡ください。');
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div style={{ backgroundColor: '#FFFFFF', minHeight: '100vh', width: '100%', margin: 0, padding: 0, overflowX: 'hidden' }}>
      
      {/* PDF出力用隠しコンテナ（画面には表示されません） */}
      <div style={{ position: 'absolute', left: '-9999px', top: '-9999px' }}>
        
        {/* 1ページ目：御発注書 (案) */}
        <div id="pdf-page-1" style={{ width: '210mm', minHeight: '297mm', padding: '20mm', backgroundColor: '#FFFFFF', color: '#1e293b', fontFamily: 'sans-serif' }}>
          <div style={{ borderBottom: '2px solid #00FBFF', paddingBottom: '10px', marginBottom: '30px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
            <h1 style={{ fontSize: '32px', fontWeight: 900, margin: 0 }}>御発注書 (案)</h1>
            <p style={{ fontSize: '18px', fontWeight: 'bold', margin: 0 }}>Meece株式会社</p>
          </div>
          
          <div style={{ backgroundColor: '#f8fafc', padding: '30px', borderRadius: '15px', marginBottom: '30px', border: '1px solid #e2e8f0' }}>
            <p style={{ fontSize: '12px', color: '#64748b', fontWeight: 900, margin: 0 }}>ESTIMATED TOTAL (TAX INCL.)</p>
            <p style={{ fontSize: '42px', fontWeight: 900, margin: '10px 0', color: '#0D1B3E' }}>¥ {totalAmount.toLocaleString()} 〜</p>
          </div>

          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ background: '#f1f5f9', borderTop: '2px solid #1e293b', borderBottom: '1px solid #cbd5e1' }}>
                <th style={{ padding: '12px', textAlign: 'left', fontSize: '12px' }}>項目名 / 内容</th>
                <th style={{ padding: '12px', textAlign: 'right', fontSize: '12px' }}>単価</th>
                <th style={{ padding: '12px', textAlign: 'center', fontSize: '12px' }}>数量</th>
                <th style={{ padding: '12px', textAlign: 'right', fontSize: '12px' }}>小計</th>
              </tr>
            </thead>
            <tbody>
              <tr style={{ borderBottom: '1px solid #e2e8f0' }}>
                <td style={{ padding: '15px 12px' }}>
                  <div style={{ fontWeight: 'bold', fontSize: '13px' }}>基本開発費用 ({selectedType?.name || '-'})</div>
                  <div style={{ fontSize: '10px', color: '#64748b' }}>{isAiMode ? '※AI最適化プラン適用' : '標準フルスクラッチ開発'}</div>
                </td>
                <td style={{ padding: '15px 12px', textAlign: 'right', fontSize: '13px' }}>¥{Math.round((selectedType?.price || 0) * (isAiMode ? (1/3) : 1) * scale).toLocaleString()}</td>
                <td style={{ padding: '15px 12px', textAlign: 'center', fontSize: '13px' }}>{screens} 枚</td>
                <td style={{ padding: '15px 12px', textAlign: 'right', fontWeight: 'bold', fontSize: '13px' }}>¥{Math.round((selectedType?.price || 0) * (isAiMode ? (1/3) : 1) * scale * screens).toLocaleString()}</td>
              </tr>
              {options.map(opt => (
                <tr key={opt.id} style={{ borderBottom: '1px solid #e2e8f0' }}>
                  <td style={{ padding: '15px 12px', fontSize: '13px' }}>オプション費用：{opt.label}</td>
                  <td style={{ padding: '15px 12px', textAlign: 'right', fontSize: '13px' }}>¥{opt.price.toLocaleString()}</td>
                  <td style={{ padding: '15px 12px', textAlign: 'center', fontSize: '13px' }}>1 式</td>
                  <td style={{ padding: '15px 12px', textAlign: 'right', fontWeight: 'bold', fontSize: '13px' }}>¥{opt.price.toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr>
                <td colSpan={3} style={{ padding: '30px 12px', textAlign: 'right', fontWeight: 900, fontSize: '16px' }}>合計金額（税込想定）</td>
                <td style={{ padding: '30px 12px', textAlign: 'right', fontWeight: 900, fontSize: '28px', color: '#3182CE' }}>¥ {totalAmount.toLocaleString()}</td>
              </tr>
            </tfoot>
          </table>
          <div style={{ marginTop: '50px', fontSize: '10px', color: '#94a3b8', borderTop: '1px solid #e2e8f0', paddingTop: '20px', lineHeight: 1.6 }}>
            ※本状はウェブサイト上の自動シミュレーション機能によって作成されたものであり、金額の確定を保証するものではありません。<br />
            ※開発要件のヒアリング後、正式な御見積書を改めて発行させていただきます。
          </div>
        </div>

        {/* 2ページ目：想定スケジュール (案) */}
        <div id="pdf-page-2" style={{ width: '210mm', minHeight: '297mm', padding: '20mm', backgroundColor: '#FFFFFF', color: '#1e293b', fontFamily: 'sans-serif' }}>
          <div style={{ borderBottom: '2px solid #00FBFF', paddingBottom: '10px', marginBottom: '30px' }}>
            <h1 style={{ fontSize: '28px', fontWeight: 900, margin: 0 }}>想定スケジュール (案)</h1>
            <p style={{ fontSize: '12px', color: '#64748b', marginTop: '5px' }}>Project Schedule Simulation | 約 {duration} ヶ月</p>
          </div>

          <table style={{ width: '100%', borderCollapse: 'collapse', border: '1px solid #cbd5e1' }}>
            <thead>
              <tr style={{ background: '#f1f5f9' }}>
                <th style={{ width: '120px', border: '1px solid #cbd5e1', padding: '10px', fontSize: '11px' }}>フェーズ</th>
                {Array.from({ length: Math.ceil(duration) }).map((_, i) => (
                  <th key={i} style={{ border: '1px solid #cbd5e1', padding: '10px', fontSize: '11px' }}>{i + 1}ヶ月目</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[
                { name: '要件定義', ratio: 0.2, desc: 'ヒアリング、全体設計' },
                { name: 'デザイン', ratio: 0.25, desc: 'UI制作、プロトタイプ' },
                { name: '開発実装', ratio: 0.4, desc: '機能構築、外部連携' },
                { name: 'テスト公開', ratio: 0.15, desc: '検証、デバッグ、公開' }
              ].map((p, idx) => {
                const accumulated = [0.2, 0.25, 0.4, 0.15].slice(0, idx).reduce((a, b) => a + b, 0);
                const startPos = (accumulated * 100 * (duration / Math.ceil(duration)));
                const widthPos = (p.ratio * 100 * (duration / Math.ceil(duration)));
                return (
                  <tr key={idx} style={{ height: '45px' }}>
                    <td style={{ border: '1px solid #cbd5e1', padding: '10px', fontSize: '12px', fontWeight: 'bold', background: '#f8fafc' }}>{p.name}</td>
                    <td colSpan={Math.ceil(duration)} style={{ border: '1px solid #cbd5e1', position: 'relative', padding: 0, background: '#fff' }}>
                      <div style={{ position: 'absolute', top: '10px', left: `${startPos}%`, width: `${widthPos}%`, height: '25px', background: '#2563eb', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: '10px', fontWeight: 'bold' }}>
                        {Math.round(duration * 4 * p.ratio * 10) / 10}W
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>

          <div style={{ marginTop: '40px', border: '1px solid #e2e8f0', borderRadius: '10px', overflow: 'hidden' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '12px' }}>
              <thead style={{ background: '#f8fafc' }}>
                <tr style={{ borderBottom: '1px solid #e2e8f0' }}>
                  <th style={{ padding: '12px', textAlign: 'left', width: '30%' }}>フェーズ</th>
                  <th style={{ padding: '12px', textAlign: 'left' }}>主な内容</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { name: '要件定義', desc: 'ヒアリング、全体設計' },
                  { name: 'デザイン', desc: 'UI制作、プロトタイプ' },
                  { name: '開発実装', desc: '機能構築、外部連携' },
                  { name: 'テスト公開', desc: '検証、デバッグ、公開' }
                ].map(p => (
                  <tr key={p.name} style={{ borderBottom: '1px solid #eee' }}>
                    <td style={{ padding: '12px', fontWeight: 'bold' }}>{p.name}</td>
                    <td style={{ padding: '12px', color: '#666' }}>{p.desc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <Navbar />
      
      <main>
        {/* 共通のメインビジュアル部品を呼び出し（他ページと余白・構造を統一） */}
        <PageHero 
          label="TOOL / 見積もりシミュレーター"
          titleTop="あなたの物語の費用を、"
          titleGradient="今すぐシミュレート。"
          description="いくつかの質問に答えるだけで、プロジェクトの概算予算を算出します。そのままPDFでの保存や、詳しい相談へのスムーズな移行が可能です。"
          windowWidth={windowWidth}
        />

        <section ref={simulatorRef} style={{ padding: '80px 24px', maxWidth: '1200px', margin: '0 auto' }}>
          {/* AI開発モードトグル：モバイルでの見切れを防止するため flex-direction を可変に */}
          <div style={{ 
            backgroundColor: '#FFFFFF', 
            padding: windowWidth < 768 ? '24px 20px' : '32px', 
            borderRadius: windowWidth < 768 ? '24px' : '40px', 
            display: 'flex', 
            flexDirection: windowWidth < 768 ? 'column' : 'row', // モバイルは縦並び
            justifyContent: 'space-between', 
            alignItems: windowWidth < 768 ? 'flex-start' : 'center',
            marginBottom: windowWidth < 768 ? '32px' : '60px', 
            border: '1px solid #F1F5F9', 
            boxShadow: '0 4px 20px rgba(0,0,0,0.02)',
            width: '100%',
            boxSizing: 'border-box',
            gap: windowWidth < 768 ? '20px' : '0'
          }}>
            <div style={{ flex: 1 }}>
              <h3 style={{ fontSize: windowWidth < 768 ? '18px' : '20px', fontWeight: 900, color: '#0D1B3E', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Sparkles size={windowWidth < 768 ? 20 : 24} color="#319795" /> AI開発モード
              </h3>
              <p style={{ fontSize: windowWidth < 768 ? '12px' : '14px', color: '#6B7280', marginTop: '8px', lineHeight: 1.5 }}>
                デザインの自由度は下がりますが、通常開発の<span style={{ color: '#319795', fontWeight: 700 }}>1/3のコスト</span>で構築が可能です。
              </p>
            </div>
            
            {/* スイッチ部分：モバイル時は右寄せ、または幅を最適化 */}
            <div style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '12px',
              width: windowWidth < 768 ? '100%' : 'auto',
              justifyContent: windowWidth < 768 ? 'flex-end' : 'flex-start',
              paddingTop: windowWidth < 768 ? '16px' : '0',
              borderTop: windowWidth < 768 ? '1px solid #F8FAFC' : 'none'
            }}>
              <span style={{ fontSize: '11px', fontWeight: 900, color: isAiMode ? '#9CA3AF' : '#3182CE', letterSpacing: '0.05em' }}>NORMAL</span>
              <button 
                onClick={() => setIsAiMode(!isAiMode)}
                style={{ 
                  width: '54px', height: '28px', borderRadius: '20px', backgroundColor: isAiMode ? '#3182CE' : '#E2E8F0',
                  position: 'relative', border: 'none', cursor: 'pointer', transition: '0.3s', flexShrink: 0
                }}
              >
                <div style={{ 
                  width: '20px', height: '20px', borderRadius: '50%', backgroundColor: '#FFF',
                  position: 'absolute', top: '4px', left: isAiMode ? '30px' : '4px', transition: '0.3s'
                }} />
              </button>
              <span style={{ fontSize: '11px', fontWeight: 900, color: isAiMode ? '#3182CE' : '#9CA3AF', letterSpacing: '0.05em' }}>AI MODE</span>
            </div>
          </div>

          {/* 対話型ワンビューレイアウト：モバイル時の見切れを防ぐ設定 */}
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: windowWidth < 1024 || currentStep === 4 ? '1fr' : '1.5fr 1fr', 
            gap: windowWidth < 768 ? '16px' : '32px',
            minHeight: windowWidth < 1024 ? 'auto' : '600px',
            alignItems: 'start',
            width: '100%',
            boxSizing: 'border-box'
          }}>
            {/* 左側：質問回答エリア（見積もり中のみ表示） */}
            {currentStep < 4 && (
              <div style={{ 
                backgroundColor: '#FFFFFF', 
                // モバイル時のパディングを 24px から 20px にさらにスリム化
                padding: windowWidth < 768 ? '32px 20px' : '60px', 
                borderRadius: windowWidth < 768 ? '24px' : '48px', 
                boxShadow: '0 20px 60px rgba(0,0,0,0.03)',
                minHeight: windowWidth < 1024 ? 'auto' : '550px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-start',
                width: '100%',
                boxSizing: 'border-box'
              }}>
                
                {/* ステップナビゲーション：モバイル時はさらにコンパクトに */}
                <div style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  gap: windowWidth < 768 ? '12px' : '20px', 
                  marginBottom: windowWidth < 768 ? '32px' : '60px',
                  width: '100%'
                }}>
                  {[1, 2, 3].map((num) => (
                    <React.Fragment key={num}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <div style={{ 
                          width: windowWidth < 768 ? '24px' : '28px', 
                          height: windowWidth < 768 ? '24px' : '28px', 
                          borderRadius: '50%', 
                          backgroundColor: currentStep >= num ? '#0D1B3E' : '#F1F5F9', 
                          color: currentStep >= num ? '#FFFFFF' : '#9CA3AF',
                          display: 'flex', 
                          alignItems: 'center', 
                          justifyContent: 'center', 
                          fontSize: windowWidth < 768 ? '10px' : '12px', 
                          fontWeight: 900 
                        }}>
                          {num}
                        </div>
                        {windowWidth >= 480 && (
                          <span style={{ 
                            fontSize: '11px', 
                            fontWeight: 800, 
                            color: currentStep >= num ? '#0D1B3E' : '#9CA3AF',
                            letterSpacing: '0.1em'
                          }}>
                            STEP 0{num}
                          </span>
                        )}
                      </div>
                      {num < 3 && <div style={{ width: windowWidth < 768 ? '20px' : '40px', height: '2px', backgroundColor: currentStep > num ? '#0D1B3E' : '#F1F5F9' }}></div>}
                    </React.Fragment>
                  ))}
                </div>
                
                {/* ステップ1：領域選択 */}
                {currentStep === 1 && (
                  <div>
                    <h3 style={{ fontSize: '12px', fontWeight: 900, color: '#3182CE', letterSpacing: '0.4em', marginBottom: '16px' }}>STEP 01</h3>
                    <h2 style={{ fontSize: 'clamp(20px, 4vw, 32px)', fontWeight: 900, color: '#0D1B3E', marginBottom: windowWidth < 768 ? '24px' : '40px' }}>プロジェクトの領域を教えてください</h2>
                    <div style={{ display: 'grid', gap: '12px' }}>
                      {[
                        { name: 'HP制作 (極小)', price: 150000, icon: <Monitor />, desc: '簡易的なホームページやテンプレート。', color: '#319795' },
                        { name: 'Webサイト / LP制作', price: 300000, icon: <Layout />, desc: 'ブランディングを重視した高品質構築。', color: '#3182CE' },
                        { name: 'システム開発', price: 15000000, icon: <Code2 />, desc: '通常15人月想定のフルスクラッチ。', color: '#805AD5' }
                      ].map((type) => (
                        <div 
                          key={type.name}
                          onClick={() => { setSelectedType(type); setCurrentStep(2); }}
                          style={{ 
                            padding: windowWidth < 768 ? '16px 20px' : '24px 32px', borderRadius: '20px', cursor: 'pointer',
                            border: selectedType?.name === type.name ? `2px solid ${type.color}` : '2px solid #F1F5F9',
                            backgroundColor: selectedType?.name === type.name ? `${type.color}05` : '#FFF',
                            display: 'flex', alignItems: 'center', gap: windowWidth < 768 ? '16px' : '24px', transition: '0.3s'
                          }}
                        >
                          <div style={{ color: type.color, transform: windowWidth < 768 ? 'scale(0.8)' : 'none' }}>{type.icon}</div>
                          <div>
                            <h4 style={{ fontWeight: 900, color: '#0D1B3E', fontSize: windowWidth < 768 ? '15px' : '18px' }}>{type.name}</h4>
                            <p style={{ fontSize: '11px', color: '#6B7280' }}>{type.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* ステップ2：規模設定 */}
                {currentStep === 2 && (
                  <div>
                    <h3 style={{ fontSize: '12px', fontWeight: 900, color: '#3182CE', letterSpacing: '0.4em', marginBottom: '16px' }}>STEP 02</h3>
                    <h2 style={{ fontSize: 'clamp(20px, 4vw, 32px)', fontWeight: 900, color: '#0D1B3E', marginBottom: windowWidth < 768 ? '24px' : '40px' }}>想定している規模感は？</h2>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                      <div>
                        <label style={{ fontSize: '12px', fontWeight: 900, color: '#9CA3AF', display: 'block', marginBottom: '12px' }}>ボリューム感</label>
                        <select 
                          value={scale} 
                          onChange={(e) => setScale(parseFloat(e.target.value))}
                          style={{ width: '100%', padding: '16px', borderRadius: '12px', border: '2px solid #F1F5F9', fontWeight: 700, fontSize: '15px', outline: 'none' }}
                        >
                          <option value={1}>小規模 (スタートアップ)</option>
                          <option value={1.5}>中規模 (標準的)</option>
                          <option value={2.5}>大規模 (エンタープライズ)</option>
                        </select>
                      </div>
                      <div>
                        <label style={{ fontSize: '12px', fontWeight: 900, color: '#9CA3AF', display: 'block', marginBottom: '12px' }}>概算の画面数</label>
                        <input 
                          type="number" 
                          value={screens} 
                          min={1}
                          onChange={(e) => setScreens(parseInt(e.target.value) || 1)}
                          style={{ width: '100%', padding: '16px', borderRadius: '12px', border: '2px solid #F1F5F9', fontWeight: 700, fontSize: '15px', outline: 'none' }}
                        />
                      </div>
                      <div style={{ display: 'flex', gap: '12px', marginTop: '16px' }}>
                        <button 
                          onClick={() => setCurrentStep(1)} 
                          style={{ flex: 1, padding: '16px', borderRadius: '12px', border: '2px solid #F1F5F9', color: '#0D1B3E', fontWeight: 900, backgroundColor: '#FFF', cursor: 'pointer' }}
                        >
                          戻る
                        </button>
                        <button 
                          onClick={() => setCurrentStep(3)}
                          style={{ flex: 2, padding: '16px', borderRadius: '12px', backgroundColor: '#0D1B3E', color: '#FFF', fontWeight: 900, border: 'none', cursor: 'pointer' }}
                        >
                          次へ進む
                        </button>
                      </div>
                    </div>
                  </div>
                )}

                {/* ステップ3：オプション選択 */}
                {currentStep === 3 && (
                  <div>
                    <h3 style={{ fontSize: '12px', fontWeight: 900, color: '#3182CE', letterSpacing: '0.4em', marginBottom: '16px' }}>STEP 03</h3>
                    <h2 style={{ fontSize: 'clamp(20px, 4vw, 32px)', fontWeight: 900, color: '#0D1B3E', marginBottom: windowWidth < 768 ? '24px' : '40px' }}>必要な機能オプションはありますか？</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: windowWidth < 480 ? '1fr' : 'repeat(2, 1fr)', gap: '10px', marginBottom: '32px' }}>
                      {optionList.map((opt) => {
                        const isSelected = options.find(o => o.id === opt.id);
                        return (
                          <div 
                            key={opt.id}
                            onClick={() => handleOptionChange(opt)}
                            style={{ 
                              backgroundColor: isSelected ? '#3182CE' : '#FFFFFF', 
                              color: isSelected ? '#FFFFFF' : '#0D1B3E',
                              padding: '16px', borderRadius: '12px', cursor: 'pointer', textAlign: 'center',
                              fontWeight: 700, fontSize: '13px', border: '1px solid #F1F5F9', transition: '0.2s'
                            }}
                          >
                            {opt.label}
                          </div>
                        );
                      })}
                    </div>
                    <div style={{ display: 'flex', gap: '12px' }}>
                      <button 
                        onClick={() => setCurrentStep(2)} 
                        style={{ flex: 1, padding: '16px', borderRadius: '12px', border: '2px solid #F1F5F9', color: '#0D1B3E', fontWeight: 900, backgroundColor: '#FFF', cursor: 'pointer' }}
                      >
                        戻る
                      </button>
                      <button 
                        onClick={() => setCurrentStep(4)}
                        style={{ flex: 2, padding: '16px', borderRadius: '12px', backgroundColor: '#0D1B3E', color: '#FFF', fontWeight: 900, border: 'none', cursor: 'pointer' }}
                      >
                        見積もり結果を見る
                      </button>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* 右側：選択内容リスト & リアルタイム結果エリア */}
            <div style={{ 
              backgroundColor: '#0D1B3E', 
              // モバイル時の横パディングを 24px から 20px に調整
              padding: windowWidth >= 1024 && currentStep === 4 ? '60px 80px' : windowWidth >= 1024 ? '60px 40px' : '32px 20px', 
              borderRadius: windowWidth < 768 ? '24px' : '48px', 
              color: '#FFFFFF',
              height: 'fit-content',
              position: windowWidth < 1024 ? 'relative' : 'sticky',
              top: windowWidth < 1024 ? '0' : '90px', 
              boxShadow: '0 40px 100px rgba(13, 27, 62, 0.2)',
              maxWidth: windowWidth >= 1024 && currentStep === 4 ? '1300px' : currentStep === 4 ? '800px' : '100%',
              width: '100%',
              margin: currentStep === 4 ? '0 auto' : '0',
              transition: 'all 0.5s cubic-bezier(0.165, 0.84, 0.44, 1)',
              boxSizing: 'border-box',
              // モバイルで見切れないように横幅の溢れを制御
              overflowX: 'hidden'
            }}>
              {currentStep === 4 && (
                <div style={{ textAlign: 'center', marginBottom: '32px' }}>
                  <div style={{ width: '60px', height: '60px', backgroundColor: 'rgba(0, 251, 255, 0.1)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px' }}>
                    <Sparkles size={32} color="#00FBFF" />
                  </div>
                  <h2 style={{ fontSize: '32px', fontWeight: 900, color: '#FFFFFF', marginBottom: '8px' }}>見積もりが完了しました！</h2>
                  <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '16px' }}>シミュレーション結果は以下の通りです。内容をご確認ください。</p>
                </div>
              )}

              <div style={{ 
                display: 'grid', 
                gridTemplateColumns: windowWidth >= 1024 && currentStep === 4 ? '1fr 1.1fr' : '1fr',
                gap: windowWidth >= 1024 ? '60px' : '40px',
                alignItems: 'start'
              }}>
                {/* 左側：詳細リストエリア */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}> {/* 選択中の見やすさを優先しgapを広げました */}
                  <h4 style={{ fontSize: '11px', fontWeight: 900, color: '#00FBFF', letterSpacing: '0.2em', marginBottom: '8px', textTransform: 'uppercase' }}>Current Selections</h4>
                  
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}> {/* リストの行間を広げました */}
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '12px' }}>
                      <span style={{ fontSize: '13px', color: 'rgba(255,255,255,0.5)', fontWeight: 700 }}>プロジェクト領域</span>
                      <span style={{ fontWeight: 800, fontSize: '16px' }}>{selectedType?.name || '---'}</span>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '12px' }}>
                      <span style={{ fontSize: '13px', color: 'rgba(255,255,255,0.5)', fontWeight: 700 }}>想定ボリューム</span>
                      <span style={{ fontWeight: 800, fontSize: '16px' }}>{scale === 1 ? '小規模' : scale === 1.5 ? '中規模' : '大規模'}</span>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '12px' }}>
                      <span style={{ fontSize: '13px', color: 'rgba(255,255,255,0.5)', fontWeight: 700 }}>概算画面数</span>
                      <span style={{ fontWeight: 800, fontSize: '16px' }}>{screens} 枚</span>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '12px' }}>
                      <span style={{ fontSize: '13px', color: 'rgba(255,255,255,0.5)', fontWeight: 700 }}>想定開発期間</span>
                      <span style={{ fontWeight: 800, fontSize: '16px' }}>約 {duration} ヶ月</span>
                    </div>
                    <div>
                      <span style={{ fontSize: '13px', color: 'rgba(255,255,255,0.5)', fontWeight: 700, display: 'block', marginBottom: '12px' }}>追加オプション</span>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                        {options.length > 0 ? options.map(o => (
                          <span key={o.id} style={{ fontSize: '11px', backgroundColor: 'rgba(255,255,255,0.1)', padding: '8px 18px', borderRadius: '100px', fontWeight: 700 }}>{o.label}</span>
                        )) : <span style={{ fontSize: '12px', color: 'rgba(255,255,255,0.3)' }}>選択なし</span>}
                      </div>
                    </div>
                  </div>
                </div>

                {/* 右側：金額・アクションエリア */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: currentStep === 4 ? '24px' : '16px' }}>
                  <div style={{ 
                    backgroundColor: 'rgba(255,255,255,0.05)', 
                    // パディングを大幅に削り、高さを固定気味にします
                    padding: currentStep === 4 ? '24px' : '16px 20px', 
                    borderRadius: '24px', 
                    textAlign: 'center', 
                    border: isAiMode ? '2px solid #00FBFF' : '1px solid rgba(255,255,255,0.1)',
                    minHeight: currentStep === 4 ? 'auto' : '120px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center'
                  }}>
                    <span style={{ fontSize: '10px', color: '#00FBFF', fontWeight: 900, letterSpacing: '0.1em', textTransform: 'uppercase' }}>Estimated Total</span>
                    <div style={{ 
                      // 金額の長さ（桁数）に応じてフォントサイズを動的に変更
                      fontSize: totalAmount.toString().length > 8 ? '24px' : totalAmount.toString().length > 6 ? '32px' : '40px', 
                      fontWeight: 900, 
                      marginTop: '8px',
                      lineHeight: 1,
                      transition: 'font-size 0.3s ease'
                    }}>
                      <span style={{ fontSize: '0.6em', verticalAlign: 'middle', marginRight: '4px', opacity: 0.8 }}>¥</span>
                      {totalAmount.toLocaleString()}
                      <span style={{ fontSize: '0.4em', verticalAlign: 'middle', marginLeft: '4px', opacity: 0.5 }}>〜</span>
                    </div>
                  </div>

                  {/* 完了時(currentStep === 4)のみ表示するボタンエリア */}
                  {currentStep === 4 && (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                      <button 
                        onClick={scrollToSchedule}
                        style={{ width: '100%', padding: '14px', borderRadius: '12px', backgroundColor: 'transparent', color: '#00FBFF', border: '1px solid #00FBFF', fontWeight: 900, fontSize: '13px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', cursor: 'pointer' }}
                      >
                        <Calendar size={18} /> スケジュールを確認する
                      </button>

                      {/* PDF保存ボタン */}
                    <button 
                      onClick={generatePDF}
                      style={{ width: '100%', padding: '12px', borderRadius: '12px', backgroundColor: '#00FBFF', color: '#0D1B3E', border: 'none', fontWeight: 900, fontSize: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', cursor: 'pointer' }}
                    >
                      <FileDown size={16} /> PDF形式で保存する
                    </button>

                      <button 
                        onClick={() => setIsModalOpen(true)}
                        style={{ width: '100%', padding: '14px', borderRadius: '12px', backgroundColor: 'transparent', color: '#FFFFFF', border: '1px solid rgba(255,255,255,0.2)', fontWeight: 900, fontSize: '13px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', cursor: 'pointer' }}
                      >
                        <Mail size={18} /> 詳細を相談する
                      </button>

                      <button 
                        onClick={() => {
                          setSelectedType(null);
                          setOptions([]);
                          setScreens(1);
                          setCurrentStep(1);
                        }}
                        style={{ 
                          marginTop: '12px', 
                          color: 'rgba(255,255,255,0.6)', 
                          background: 'rgba(255,255,255,0.05)', 
                          border: '1px solid rgba(255,255,255,0.1)', 
                          borderRadius: '10px',
                          padding: '10px',
                          fontWeight: 700, 
                          fontSize: '11px', 
                          cursor: 'pointer', 
                          transition: '0.3s',
                          textAlign: 'center' 
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.15)';
                          e.currentTarget.style.color = '#FFFFFF';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.05)';
                          e.currentTarget.style.color = 'rgba(255,255,255,0.6)';
                        }}
                      >
                        最初からやり直す
                      </button>
                    </div>
                  )}

                  {/* 選択中(Step 1〜3)は、「最初からやり直す」を控えめに下に配置 */}
                  {currentStep < 4 && (
                    <button 
                      onClick={() => {
                        setSelectedType(null);
                        setOptions([]);
                        setScreens(1);
                        setCurrentStep(1);
                      }}
                      style={{ 
                        marginTop: '0px', 
                        color: 'rgba(255,255,255,0.4)', 
                        background: 'none', 
                        border: 'none', 
                        fontWeight: 700, 
                        fontSize: '11px', 
                        cursor: 'pointer', 
                        textDecoration: 'underline', 
                        textAlign: 'center' 
                      }}
                    >
                      最初からやり直す
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section> {/* シミュレーターセクションの閉じタグ */}

        {/* スケジュールセクション：1画面(100vh)に収めるための設定 */}
        <section ref={scheduleRef} style={{ 
          minHeight: '100vh', 
          display: 'flex', 
          alignItems: 'center', 
          padding: '40px 24px', 
          backgroundColor: '#FFFFFF',
          boxSizing: 'border-box'
        }}>
          <div style={{ maxWidth: '1400px', width: '100%', margin: '0 auto' }}>
            {/* 見出しの余白を縮小 */}
            <div style={{ textAlign: 'center', marginBottom: '40px' }}>
              <h2 style={{ fontSize: '12px', fontWeight: 900, color: '#3182CE', letterSpacing: '0.4em', marginBottom: '12px' }}>ESTIMATED SCHEDULE</h2>
              <h3 style={{ fontSize: 'clamp(24px, 4vw, 42px)', fontWeight: 900, color: '#0D1B3E' }}>物語の完成までの、<span style={{ color: '#3182CE' }}>仮スケジュール。</span></h3>
            </div>

            {!selectedType ? (
              <div style={{ padding: '80px', textAlign: 'center', backgroundColor: '#F8F9FB', borderRadius: '40px', border: '2px dashed #E2E8F0' }}>
                <Calendar size={48} color="#CBD5E0" style={{ margin: '0 auto 20px' }} />
                <p style={{ fontWeight: 700, color: '#9CA3AF' }}>プロジェクト領域を選択すると、ガントチャートが生成されます。</p>
              </div>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                {/* ガントチャート：高さを出し、視認性を最大化 */}
                <div style={{ backgroundColor: '#FFFFFF', borderRadius: '32px', border: '1px solid #F1F5F9', overflow: 'hidden', boxShadow: '0 20px 50px rgba(0,0,0,0.04)' }}>
                  <div style={{ display: 'grid', gridTemplateColumns: '200px 1fr', backgroundColor: '#F8F9FB', borderBottom: '1px solid #F1F5F9' }}>
                    <div style={{ padding: '32px 24px', fontSize: '12px', fontWeight: 900, color: '#94A3B8' }}>PHASE / SCOPE</div>
                    <div style={{ display: 'flex', width: '100%' }}>
                      {Array.from({length: Math.ceil(duration)}).map((_, i) => (
                        <div key={i} style={{ flex: 1, padding: '32px 10px', fontSize: '11px', fontWeight: 900, color: '#94A3B8', textAlign: 'center', borderLeft: '1px solid #F1F5F9' }}>{i+1}ヶ月目</div>
                      ))}
                    </div>
                  </div>
                  
                  {[
                    { name: '要件定義', ratio: 0.2 },
                    { name: 'デザイン', ratio: 0.25 },
                    { name: '開発実装', ratio: 0.4 },
                    { name: 'テスト公開', ratio: 0.15 }
                  ].map((phase, idx) => (
                    <div key={phase.name} style={{ display: 'grid', gridTemplateColumns: '200px 1fr', borderBottom: idx === 3 ? 'none' : '1px solid #F8F9FB' }}>
                      <div style={{ padding: '32px 24px', fontSize: '16px', fontWeight: 800, color: '#0D1B3E', borderRight: '1px solid #F1F5F9', backgroundColor: '#FCFDFF' }}>{phase.name}</div>
                      <div style={{ position: 'relative', padding: '24px 0', display: 'flex', alignItems: 'center' }}>
                        <div style={{ 
                          height: '48px', // バーを太くして存在感を強調
                          borderRadius: '16px', 
                          background: 'linear-gradient(90deg, #319795, #3182CE)',
                          width: `${phase.ratio * 80}%`, 
                          marginLeft: `${idx * 15 + 2}%`, 
                          display: 'flex', 
                          alignItems: 'center', 
                          justifyContent: 'center', 
                          color: '#FFF', 
                          fontSize: '13px', 
                          fontWeight: 900,
                          boxShadow: '0 10px 25px rgba(49, 130, 206, 0.2)'
                        }}>
                          {Math.round(duration * 4 * phase.ratio * 10) / 10}W
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* 期間表示ボックス：さらに洗練させて最下部に配置 */}
                <div style={{ 
                  backgroundColor: '#EBF8FF', 
                  padding: '20px 40px', 
                  borderRadius: '24px', 
                  display: 'flex', 
                  justifyContent: 'space-between', 
                  alignItems: 'center',
                  border: '1px solid #BEE3F8',
                  marginTop: '8px'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                    <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: '#FFFFFF', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#3182CE', flexShrink: 0 }}>
                      <Calendar size={20} />
                    </div>
                    <div style={{ display: 'flex', alignItems: 'baseline', gap: '12px' }}>
                      <h4 style={{ fontWeight: 900, color: '#2B6CB0', fontSize: '15px' }}>想定される総開発期間</h4>
                      <p style={{ fontSize: '11px', color: '#3182CE', opacity: 0.7 }}>※要件により変動する可能性があります</p>
                    </div>
                  </div>
                  
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: '4px', color: '#3182CE' }}>
                    <span style={{ fontSize: '14px', fontWeight: 800 }}>約</span>
                    <span style={{ fontSize: '42px', fontWeight: 900, lineHeight: 1 }}>{duration}</span>
                    <span style={{ fontSize: '18px', fontWeight: 800 }}>ヶ月</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* 共通フッターの呼び出し */}
        <Footer />
      </main>

      {/* 問い合わせフォームモーダル */}
      {isModalOpen && (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(13, 27, 62, 0.8)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000, padding: '20px' }}>
          <div style={{ backgroundColor: '#FFFFFF', width: '100%', maxWidth: '600px', borderRadius: '32px', padding: windowWidth < 768 ? '30px 20px' : '40px', position: 'relative', maxHeight: '90vh', overflowY: 'auto' }}>
            <button onClick={() => setIsModalOpen(false)} style={{ position: 'absolute', top: '24px', right: '24px', background: 'none', border: 'none', fontSize: '24px', cursor: 'pointer', color: '#94A3B8' }}>×</button>
            
            <div style={{ textAlign: 'center', marginBottom: '32px' }}>
              <h3 style={{ fontSize: '24px', fontWeight: 900, color: '#0D1B3E' }}>詳細を相談する</h3>
              <p style={{ fontSize: '14px', color: '#64748B', marginTop: '8px' }}>現在のシミュレーション結果を添えて、担当へ相談できます。</p>
            </div>

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div>
                <label style={{ fontSize: '12px', fontWeight: 900, color: '#0D1B3E', display: 'block', marginBottom: '8px' }}>お名前 <span style={{ color: '#EF4444' }}>*</span></label>
                <input required type="text" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} style={{ width: '100%', padding: '12px 16px', borderRadius: '12px', border: '1px solid #E2E8F0', outline: 'none' }} placeholder="お名前" />
              </div>

              <div>
                <label style={{ fontSize: '12px', fontWeight: 900, color: '#0D1B3E', display: 'block', marginBottom: '8px' }}>メールアドレス <span style={{ color: '#EF4444' }}>*</span></label>
                <input required type="email" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} style={{ width: '100%', padding: '12px 16px', borderRadius: '12px', border: '1px solid #E2E8F0', outline: 'none' }} placeholder="メールアドレス" />
              </div>

              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                  <label style={{ fontSize: '12px', fontWeight: 900, color: '#0D1B3E' }}>会社名</label>
                  <label style={{ display: 'flex', alignItems: 'center', gap: '6px', cursor: 'pointer', fontSize: '11px', fontWeight: 700, color: '#64748B' }}>
                    <input type="checkbox" checked={formData.isIndividual} onChange={e => setFormData({...formData, isIndividual: e.target.checked, company: e.target.checked ? '' : formData.company})} />
                    個人事業主の方はこちら
                  </label>
                </div>
                <input type="text" disabled={formData.isIndividual} value={formData.company} onChange={e => setFormData({...formData, company: e.target.value})} style={{ width: '100%', padding: '12px 16px', borderRadius: '12px', border: '1px solid #E2E8F0', outline: 'none', backgroundColor: formData.isIndividual ? '#F8FAFC' : '#FFF', color: formData.isIndividual ? '#94A3B8' : '#0D1B3E' }} placeholder={formData.isIndividual ? '（個人事業主）' : '御社名'} />
              </div>

              <div>
                <label style={{ fontSize: '12px', fontWeight: 900, color: '#0D1B3E', display: 'block', marginBottom: '8px' }}>現在の状況</label>
                <select value={formData.status} onChange={e => setFormData({...formData, status: e.target.value})} style={{ width: '100%', padding: '12px 16px', borderRadius: '12px', border: '1px solid #E2E8F0', outline: 'none', backgroundColor: '#FFF' }}>
                  <option>すぐにでも開発を始めたい</option>
                  <option>社内検討用の正式な見積もりが欲しい</option>
                  <option>まずは技術的な実現可否を相談したい</option>
                </select>
              </div>

              <div>
                <label style={{ fontSize: '12px', fontWeight: 900, color: '#0D1B3E', display: 'block', marginBottom: '8px' }}>ご要望・メモ</label>
                <textarea value={formData.message} onChange={e => setFormData({...formData, message: e.target.value})} style={{ width: '100%', padding: '12px 16px', borderRadius: '12px', border: '1px solid #E2E8F0', outline: 'none', minHeight: '100px' }} placeholder="シミュレーターにない機能の相談など"></textarea>
              </div>

              <button disabled={isSending} type="submit" style={{ width: '100%', padding: '16px', borderRadius: '16px', backgroundColor: '#0D1B3E', color: '#FFF', fontWeight: 900, border: 'none', cursor: isSending ? 'not-allowed' : 'pointer', marginTop: '10px', transition: '0.3s', opacity: isSending ? 0.7 : 1 }}>
                {isSending ? '送信中...' : 'この内容で問い合わせを送信'}
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
 );
}

export default Estimate;