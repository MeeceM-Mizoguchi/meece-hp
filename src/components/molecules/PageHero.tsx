import React from 'react';

interface PageHeroProps {
  label: string;
  titleTop: string;
  titleGradient: string;
  description: string;
  windowWidth: number;
}

export const PageHero: React.FC<PageHeroProps> = ({ 
  label, 
  titleTop, 
  titleGradient, 
  description, 
  windowWidth 
}) => {
  return (
    <section style={{ 
      padding: windowWidth < 768 ? '140px 24px 80px' : '200px 40px 140px',
      maxWidth: '1200px',
      margin: '0 auto',
      width: '100%',
      boxSizing: 'border-box'
    }}>
      {/* ラベル部分 */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '40px' }}>
        <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#00FBFF' }}></div>
        <span style={{ fontSize: '12px', fontWeight: 900, color: '#319795', letterSpacing: '0.2em' }}>{label}</span>
      </div>

      {/* タイトル部分 */}
      <h1 style={{ 
        fontSize: 'clamp(40px, 8vw, 90px)', 
        fontWeight: 900, 
        color: '#0D1B3E', 
        lineHeight: 1.1,
        letterSpacing: '-0.02em',
        marginBottom: '60px'
      }}>
        {titleTop}<br />
        <span style={{ 
          background: 'linear-gradient(to right, #00FBFF, #9D72FF, #FF5BAE)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent'
        }}>
          {titleGradient}
        </span>
      </h1>

      {/* リード文部分 */}
      <p style={{ 
        fontSize: 'clamp(18px, 2.5vw, 24px)',
        color: '#6B7280', 
        lineHeight: 1.8, 
        maxWidth: '650px',
        fontWeight: 500
      }}>
        {description}
      </p>
    </section>
  );
};