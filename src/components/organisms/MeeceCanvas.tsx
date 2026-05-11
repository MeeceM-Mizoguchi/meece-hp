import React from 'react';

export const MeeceCanvas: React.FC = () => {
  return (
    <>
      <style>{`
        @keyframes meece-float {
          0%, 100% { transform: translateY(0); }
          50%       { transform: translateY(-10px); }
        }
        @keyframes meece-blink {
          0%, 86%, 100% { transform: scaleY(1); }
          91%            { transform: scaleY(0.07); }
          93%            { transform: scaleY(1); }
        }
        .meece-wrap {
          position: fixed;
          bottom: 20px;
          right: 20px;
          z-index: 9999;
          pointer-events: none;
          width: 110px;
          animation: meece-float 3.5s ease-in-out infinite;
          filter: drop-shadow(0 6px 16px rgba(0,0,0,0.18));
        }
        .meece-leye, .meece-reye {
          transform-box: fill-box;
          transform-origin: 50% 60%;
        }
        .meece-leye { animation: meece-blink 5s ease-in-out infinite; }
        .meece-reye { animation: meece-blink 5s ease-in-out 0.04s infinite; }
      `}</style>

      <div className="meece-wrap">
        <svg viewBox="0 0 100 224" xmlns="http://www.w3.org/2000/svg">

          {/* ドロップシャドウ */}
          <ellipse cx="50" cy="220" rx="22" ry="4" fill="rgba(0,0,0,0.1)" />

          {/* 後ろ髪 */}
          <ellipse cx="50" cy="40" rx="37" ry="38" fill="#2C1810" />

          {/* 顔 */}
          <circle cx="50" cy="44" r="32" fill="#FFD4A8" />

          {/* 前髪・サイド */}
          <path d="M 18 36 Q 30 8 50 8 Q 70 8 82 36 Q 72 20 50 21 Q 28 20 18 36 Z" fill="#2C1810" />
          <path d="M 18 36 Q 13 55 16 74 Q 20 54 18 36 Z" fill="#2C1810" />
          <path d="M 82 36 Q 87 55 84 74 Q 80 54 82 36 Z" fill="#2C1810" />

          {/* 左目（白目 + まつ毛） */}
          <ellipse cx="37" cy="46" rx="9.5" ry="11.5" fill="white" />
          <path d="M 28 38.5 Q 37.5 35 47 38.5" stroke="#2C1810" strokeWidth="2" fill="none" strokeLinecap="round" />
          <g className="meece-leye">
            <ellipse cx="37" cy="47"   rx="8"   ry="9.8"  fill="#5B9FEE" />
            <ellipse cx="37" cy="48.5" rx="5.2" ry="7.2"  fill="#18104A" />
            <ellipse cx="34" cy="43.5" rx="2.6" ry="3"    fill="white" opacity="0.9" />
            <circle  cx="40" cy="45"   r="1.3"             fill="white" opacity="0.7" />
          </g>

          {/* 右目（白目 + まつ毛） */}
          <ellipse cx="63" cy="46" rx="9.5" ry="11.5" fill="white" />
          <path d="M 53 38.5 Q 62.5 35 72 38.5" stroke="#2C1810" strokeWidth="2" fill="none" strokeLinecap="round" />
          <g className="meece-reye">
            <ellipse cx="63" cy="47"   rx="8"   ry="9.8"  fill="#5B9FEE" />
            <ellipse cx="63" cy="48.5" rx="5.2" ry="7.2"  fill="#18104A" />
            <ellipse cx="60" cy="43.5" rx="2.6" ry="3"    fill="white" opacity="0.9" />
            <circle  cx="66" cy="45"   r="1.3"             fill="white" opacity="0.7" />
          </g>

          {/* 鼻 */}
          <path d="M 47.5 57.5 Q 50 61 52.5 57.5" stroke="#C47850" strokeWidth="1.2" fill="none" strokeLinecap="round" />

          {/* 口 */}
          <path d="M 43 65.5 Q 50 72 57 65.5" stroke="#D47060" strokeWidth="1.8" fill="none" strokeLinecap="round" />

          {/* ほっぺ */}
          <ellipse cx="26" cy="60" rx="7" ry="4.5" fill="#FFB5A0" opacity="0.42" />
          <ellipse cx="74" cy="60" rx="7" ry="4.5" fill="#FFB5A0" opacity="0.42" />

          {/* 首 */}
          <rect x="44" y="75" width="12" height="13" fill="#FFD4A8" rx="2" />

          {/* 白いシャツ衿 */}
          <path d="M 36 82 L 50 93 L 64 82 L 72 77 L 50 89 L 28 77 Z" fill="white" />

          {/* ブレザー本体 */}
          <path d="M 18 82 Q 11 92 12 162 L 88 162 Q 89 92 82 82 L 72 77 L 50 89 L 28 77 Z" fill="#1A3A6C" />

          {/* ブレザー シェーディング */}
          <path d="M 18 85 L 28 77 L 34 128 L 16 128 Z" fill="#0D2444" opacity="0.35" />
          <path d="M 82 85 L 72 77 L 66 128 L 84 128 Z" fill="#0D2444" opacity="0.35" />

          {/* リボン */}
          <path d="M 43 87 L 50 99 L 57 87 L 50 93 Z" fill="#EFC0C0" />
          <circle cx="50" cy="95" r="2.8" fill="#D08080" />

          {/* ボタン */}
          <circle cx="50" cy="118" r="2" fill="#2A4F8A" />
          <circle cx="50" cy="130" r="2" fill="#2A4F8A" />
          <circle cx="50" cy="142" r="2" fill="#2A4F8A" />

          {/* 左腕 */}
          <path d="M 12 88 Q 6 112 8 148 Q 13 158 18 154 Q 21 130 24 102 Z" fill="#1A3A6C" />
          <ellipse cx="11" cy="155" rx="7.5" ry="8.5" fill="#FFD4A8" />

          {/* 右腕 */}
          <path d="M 88 88 Q 94 112 92 148 Q 87 158 82 154 Q 79 130 76 102 Z" fill="#1A3A6C" />
          <ellipse cx="89" cy="155" rx="7.5" ry="8.5" fill="#FFD4A8" />

          {/* スカート */}
          <path d="M 13 160 Q 10 193 14 208 L 86 208 Q 90 193 87 160 Z" fill="#1A3A6C" />
          <path d="M 27 162 Q 25 194 27 206" stroke="#2A4F8A" strokeWidth="0.9" fill="none" opacity="0.55" />
          <path d="M 73 162 Q 75 194 73 206" stroke="#2A4F8A" strokeWidth="0.9" fill="none" opacity="0.55" />

          {/* 脚 */}
          <rect x="31" y="206" width="14" height="13" fill="#FFD4A8" rx="2" />
          <rect x="55" y="206" width="14" height="13" fill="#FFD4A8" rx="2" />

          {/* 靴 */}
          <path d="M 28 216 Q 27 223 34 223 L 47 223 Q 52 222 51 217 L 45 216 Z" fill="#1C1C2E" />
          <path d="M 72 216 Q 73 223 66 223 L 53 223 Q 48 222 49 217 L 55 216 Z" fill="#1C1C2E" />

        </svg>
      </div>
    </>
  );
};
