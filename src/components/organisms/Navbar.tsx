import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronRight, Sparkles } from 'lucide-react';

export const Navbar: React.FC = () => {
  // isScrolled を削除し、isMenuOpen だけ残します
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);

    // メニューが開いている間、背後のスクロールを禁止する
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      window.removeEventListener('resize', handleResize);
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const navLinks = [
    { name: 'TOP', href: '/' },
    { name: 'COMPANY', href: '/company' },
    { name: 'PHILOSOPHY', href: '/philosophy' },
    { 
      name: 'SERVICES', 
      href: '#', 
      dropdown: [
        { name: '受託開発', href: '/services/development' },
        { name: 'AI研究開発', href: '/services/ai' },
        { name: 'ITコンサル', href: '/services/consulting' },
        { name: '多角的事業支援', href: '/services/support' },
        { 
          name: (
            <span style={{ display: 'flex', alignItems: 'center', gap: '6px', justifyContent: 'space-between', width: '100%' }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                AI開発ラボ
                <span style={{ 
                  backgroundColor: '#FF5BAE', 
                  color: '#FFFFFF', 
                  fontSize: '8px', 
                  padding: '2px 6px', 
                  borderRadius: '100px', 
                  fontWeight: 900,
                  lineHeight: 1,
                  letterSpacing: '0.05em'
                }}>NEW</span>
              </span>
              <span style={{ fontSize: '10px', opacity: 0.5 }}>▶</span>
            </span>
          ), 
          href: '/services/rapid-poc',
          subMenu: [
            { name: '最適プランを無料診断', href: '/services/rapid-poc/diagnosis' },
            { name: '大手企業様向け', href: '/services/rapid-poc/enterprise-approach' },
            { name: '中小・スタートアップ様向け', href: '/services/rapid-poc/startup-approach' },
            { name: '営業会社様向け', href: '/services/rapid-poc/sales-approach' },
          ]
        },
      ]
    },
    { name: 'NEWS', href: '/news' },
    { name: 'RECRUIT', href: '/recruit' },
  ];

  return (
    <nav 
      className="fixed top-0 left-0 w-full z-50 transition-all duration-300"
      style={{ 
        // 背景の透明度を少し上げ(0.95→0.85)、ガラスのような質感にします
        backgroundColor: 'rgba(255, 255, 255, 0.85)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
        borderBottom: '1px solid rgba(243, 244, 246, 0.6)',
        paddingTop: '15px',
        paddingBottom: '15px'
      }}
    >
      <div className="max-w-360 mx-auto px-10 flex items-center justify-between">
        {/* ロゴ：HTML版のオリジナルソースコードをReact用に完全再現 */}
        <a href="/" className="shrink-0 transition-all hover:opacity-80">
          <svg width="150" height="58" viewBox="0 0 650 250" className="overflow-visible">
            <defs>
              <linearGradient id="logoLivingGrad" x1="0%" y1="0%" x2="100%" y2="0.1%">
                <stop offset="0%" stopColor="#2EE5F2" />
                <stop offset="28%" stopColor="#5291FF" />
                <stop offset="68%" stopColor="#9870FF" />
                <stop offset="100%" stopColor="#FF70AB" />
              </linearGradient>
            </defs>
            {/* オリジナルの座標とフォント指定をそのまま適用 */}
            <text 
              x="50" y="160" 
              fill="url(#logoLivingGrad)"
              style={{ 
                fontFamily: "'Fredoka', sans-serif", 
                fontSize: '170px', 
                fontWeight: 700, 
                letterSpacing: '-0.02em' 
              }}
            >
              M
            </text>
            <text 
              x="180" y="156" 
              fill="url(#logoLivingGrad)"
              style={{ 
                fontFamily: "'Pacifico', cursive", 
                fontSize: '140px' 
              }}
            >
              eece
            </text>
          </svg>
        </a>

        {/* メニュー：SERVICESにプルダウン機能を実装 */}
        <div className="hidden xl:flex items-center gap-8">
          {navLinks.map((link) => (
            <div key={link.name} className="relative group flex items-center h-full py-4">
              <a 
                href={link.href} 
                className="text-[13px] font-bold tracking-[0.15em] transition-colors whitespace-nowrap"
                style={{ color: '#0D1B3E' }}
                onMouseEnter={(e) => e.currentTarget.style.color = '#3182CE'}
                onMouseLeave={(e) => e.currentTarget.style.color = '#0D1B3E'}
              >
                {link.name}
              </a>

              {/* PC用プルダウンメニュー */}
              {link.dropdown && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                  <div 
                    style={{ 
                      backgroundColor: '#FFFFFF',
                      boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
                      borderRadius: '16px',
                      padding: '12px',
                      minWidth: '250px',
                      border: '1px solid #F3F4F6'
                    }}
                  >
                    {link.dropdown.map((sub: any) => (
                      <div key={sub.href} className="relative group/sub">
                        <a
                          href={sub.href}
                          className="px-5 py-3 text-[12px] font-bold transition-all rounded-lg flex items-center justify-between"
                          style={{ 
                            color: sub.isHighlight ? '#3182CE' : '#4B5563', 
                            textDecoration: 'none',
                            backgroundColor: sub.isHighlight ? '#F0F7FF' : 'transparent'
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.backgroundColor = '#F9FAFB';
                            e.currentTarget.style.color = '#3182CE';
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.backgroundColor = sub.isHighlight ? '#F0F7FF' : 'transparent';
                            e.currentTarget.style.color = sub.isHighlight ? '#3182CE' : '#4B5563';
                          }}
                        >
                          {sub.name}
                        </a>

                        {/* 3階層目のサブメニュー（AI開発ラボの詳細） */}
                        {sub.subMenu && (
                          <div className="absolute left-full top-0 ml-1 opacity-0 invisible group-hover/sub:opacity-100 group-hover/sub:visible transition-all duration-300">
                            <div style={{ 
                              backgroundColor: '#FFFFFF',
                              boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
                              borderRadius: '16px',
                              padding: '12px',
                              minWidth: '220px',
                              border: '1px solid #F3F4F6'
                            }}>
                              {sub.subMenu.map((item: any) => (
                                <a
                                  key={item.href}
                                  href={item.href}
                                  className="block px-5 py-3 text-[11px] font-bold transition-all rounded-lg"
                                  style={{ 
                                    color: item.isHighlight ? '#FFFFFF' : '#4B5563',
                                    backgroundColor: item.isHighlight ? '#3182CE' : 'transparent'
                                  }}
                                  onMouseEnter={(e) => {
                                    if (!item.isHighlight) {
                                      e.currentTarget.style.backgroundColor = '#F9FAFB';
                                      e.currentTarget.style.color = '#3182CE';
                                    }
                                  }}
                                  onMouseLeave={(e) => {
                                    if (!item.isHighlight) {
                                      e.currentTarget.style.backgroundColor = 'transparent';
                                      e.currentTarget.style.color = '#4B5563';
                                    }
                                  }}
                                >
                                  {item.name}
                                </a>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
          <div className="flex items-center gap-4 ml-4 shrink-0">
            {/* ABOUT US ボタン (PresentationRoomへのリンク) */}
            <a 
              href="/presentation" 
              className="px-6 py-2.5 rounded-full text-[12px] font-bold transition-all flex items-center gap-2 tracking-widest uppercase bg-linear-to-r from-meece-blue to-meece-purple text-white hover:shadow-lg hover:scale-105 active:scale-95"
            >
              <Sparkles size={14} /> ABOUT US
            </a>

            <a href="/estimate" className="px-6 py-2.5 rounded-full text-[12px] font-bold transition-all flex items-center gap-2 tracking-widest uppercase bg-[#0D1B3E] text-white hover:bg-[#3182CE]">
              ESTIMATE <ChevronRight size={12} />
            </a>
            <a 
              href="/#contact" 
              className="px-6 py-2.5 rounded-full text-[12px] font-bold border transition-all flex items-center gap-2 tracking-widest uppercase"
              style={{
                backgroundColor: 'transparent',
                color: '#0D1B3E',
                borderColor: '#0D1B3E'
              }}
            >
              CONTACT <ChevronRight size={12} />
            </a>
          </div>
        </div>

       {/* モバイルボタン：白背景でも見えるよう、常に濃い色に固定します */}
        <button 
          className="xl:hidden transition-colors" 
          style={{ color: '#0D1B3E' }}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* モバイルメニュー */}
      {isMenuOpen && (
        <div 
          className="xl:hidden fixed left-0 w-full p-8 flex flex-col items-start shadow-2xl overflow-y-auto"
          style={{ 
            top: '88px',
            height: 'calc(100vh - 88px)',
            backgroundColor: '#FFFFFF',
            borderTop: '1px solid #F3F4F6',
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.1)',
            zIndex: 49
          }}
        >
          <div className="w-full flex flex-col items-stretch gap-6">
            {navLinks.map((link) => (
    <div key={link.name} className="w-full">
      {/* メインリンク */}
      <a
        href={link.href}
        onClick={() => !link.dropdown && setIsMenuOpen(false)}
        className="text-[14px] font-extrabold text-[#0D1B3E] no-underline tracking-widest py-2.5 text-left flex items-center justify-between"
      >
        {link.name}
      </a>
      
      {/* 第2階層：SERVICES配下など */}
      {link.dropdown && (
        <div className="flex flex-col w-full mt-2 ml-4 border-l-2 border-slate-50">
          {link.dropdown.map((sub: any) => (
            <div key={sub.href} className="flex flex-col">
              <a
                          href={sub.href}
                          className="px-5 py-3 text-[12px] font-bold transition-all rounded-lg flex items-center justify-between"
                          style={{ 
                            color: sub.isHighlight ? '#3182CE' : '#4B5563', 
                            textDecoration: 'none',
                            backgroundColor: sub.isHighlight ? '#F0F7FF' : 'transparent'
                          }}
              >
                {sub.name}
              </a>

              {/* 第3階層：AI開発ラボの詳細メニュー */}
              {sub.subMenu && (
                <div className="flex flex-col ml-4 mb-2 bg-slate-50/50 rounded-xl">
                  {sub.subMenu.map((item: any) => (
                    <a
                      key={item.href}
                      href={item.href}
                      onClick={() => setIsMenuOpen(false)}
                      style={{ 
                        color: '#6B7280',
                        fontSize: '12px',
                        fontWeight: 600,
                        textDecoration: 'none',
                        padding: '10px 20px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px'
                      }}
                    >
                      <span style={{ color: '#3182CE' }}>•</span> {item.name}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  ))}
          </div>

          {/* モバイル版アクションボタン：ESTIMATE & CONTACT */}
          <div className="w-full flex flex-col gap-4 mt-4 pt-8 border-t border-gray-100 pb-10">
            <a 
              href="/estimate" 
              className="w-full py-4 rounded-full text-[13px] font-bold transition-all flex items-center justify-center gap-2 tracking-widest uppercase bg-[#0D1B3E] text-white"
              onClick={() => setIsMenuOpen(false)}
            >
              ESTIMATE <ChevronRight size={14} />
            </a>
            <a 
              href="/#contact" 
              className="w-full py-4 rounded-full text-[13px] font-bold border transition-all flex items-center justify-center gap-2 tracking-widest uppercase"
              style={{
                backgroundColor: 'transparent',
                color: '#0D1B3E',
                borderColor: '#0D1B3E'
              }}
              onClick={() => setIsMenuOpen(false)}
            >
              CONTACT <ChevronRight size={14} />
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};