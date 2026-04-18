import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer style={{ 
      backgroundColor: '#FFFFFF', 
      padding: '80px 0 40px', 
      textAlign: 'center',
      borderTop: '1px solid #F3F4F6',
      width: '100%'
    }}>
      <div style={{ marginBottom: '40px' }}>
        <svg width="120" height="50" viewBox="0 0 650 250" style={{ margin: '0 auto', display: 'block', overflow: 'visible', opacity: 0.8 }}>
          {/* 「M」: Fredokaフォント */}
          <text 
            x="50" y="160" 
            fill="#1e293b"
            style={{ 
              fontFamily: "'Fredoka', sans-serif", 
              fontSize: '170px', 
              fontWeight: 700 
            }}
          >
            M
          </text>
          {/* 「eece」: Pacificoフォント */}
          <text 
            x="180" y="156" 
            fill="#1e293b"
            style={{ 
              fontFamily: "'Pacifico', cursive", 
              fontSize: '140px' 
            }}
          >
            eece
          </text>
        </svg>
      </div>
      <p style={{ color: '#9CA3AF', fontSize: '10px', letterSpacing: '0.2em', fontWeight: 500 }}>
        © 2026 MEECE INC. ALL STORIES RESERVED.
      </p>
    </footer>
  );
};