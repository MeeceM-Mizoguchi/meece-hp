interface LogoProps {
  width?: number;
  isDark?: boolean;
  compact?: boolean;
}

export function Logo({ width = 300, isDark = false, compact = false }: LogoProps) {
  const accentColor = isDark ? "#cbd5e1" : "#64748b";

  const viewBox = compact ? "0 14 600 100" : "0 0 600 192";
  const height = compact ? Math.round(width * 0.167) : Math.round(width * 0.32);

  return (
    <svg
      width={width}
      height={height}
      viewBox={viewBox}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="brandGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#22d3ee" />
          <stop offset="25%" stopColor="#3b82f6" />
          <stop offset="60%" stopColor="#a855f7" />
          <stop offset="100%" stopColor="#ec4899" />
        </linearGradient>
        <linearGradient id="mGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#06b6d4" />
          <stop offset="50%" stopColor="#8b5cf6" />
          <stop offset="100%" stopColor="#d946ef" />
        </linearGradient>
      </defs>

      {/*
        compact: M icon を translate(8,21) に上げて「Meece」テキスト視覚中心(y≈65)と揃える
        通常:    元の translate(8,45) を維持
      */}
      <g transform={compact ? "translate(8, 21)" : "translate(8, 45)"}>
        <rect x="0" y="0" width="90" height="90" rx="20"
          stroke="url(#mGradient)" strokeWidth="3" fill="none" opacity="0.6" />
        <path d="M 20 65 L 20 25 L 35 45 L 45 25 L 55 45 L 70 25 L 70 65"
          stroke="url(#mGradient)" strokeWidth="7"
          strokeLinecap="round" strokeLinejoin="round" fill="none" />
        <circle cx="35" cy="45" r="4" fill="url(#mGradient)" opacity="0.7" />
        <circle cx="55" cy="45" r="4" fill="url(#mGradient)" opacity="0.7" />
      </g>

      {/* Meece wordmark */}
      <g transform="translate(115, 90)">
        <text x="0" y="0"
          fontFamily="system-ui, -apple-system, 'Segoe UI', sans-serif"
          fontSize="68" fontWeight="700" letterSpacing="-1"
          fill="url(#brandGradient)">
          Meece
        </text>
      </g>

      {/* Tagline */}
      <g transform={compact ? "translate(115, 105)" : "translate(115, 120)"}>
        <text x="0" y="0"
          fontFamily="system-ui, -apple-system, sans-serif"
          fontSize={compact ? 14 : 13}
          fontWeight="500"
          letterSpacing="3.5"
          fill={accentColor}>
          DIGITAL CREATIVE FIRM
        </text>
      </g>
    </svg>
  );
}
