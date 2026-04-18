/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'meece-blue': '#00FBFF',
        'meece-purple': '#9D72FF',
        'meece-pink': '#FF5BAE',
        'meece-dark': '#050505',
        'meece-bg': '#F8FAFC', // Slate 50相当
        'meece-success': '#059669', // 深いエメラルド
        'meece-sepia': '#94A3B8', // フロー表示用の落ち着いたグレーブルー
      },
      backgroundImage: {
        'meece-gradient': "linear-gradient(to right, #00FBFF, #007AFF, #FF5BAE)",
        'glass-gradient': "linear-gradient(135deg, rgba(255, 255, 255, 1.0), rgba(248, 250, 252, 0.9))",
        'mesh-gradient-light': "radial-gradient(at 0% 0%, rgba(0, 251, 255, 0.12) 0px, transparent 50%), radial-gradient(at 100% 0%, rgba(157, 114, 255, 0.12) 0px, transparent 50%), radial-gradient(at 100% 100%, rgba(255, 91, 174, 0.12) 0px, transparent 50%), radial-gradient(at 0% 100%, rgba(0, 122, 255, 0.12) 0px, transparent 50%)",
      },
      boxShadow: {
        'meece-soft': '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 4px 6px -2px rgba(0, 0, 0, 0.02)',
        'meece-card': '0 10px 30px -5px rgba(0, 0, 0, 0.1), 0 4px 10px -5px rgba(0, 0, 0, 0.04)',
        'meece-modal': '0 30px 60px -12px rgba(0, 0, 0, 0.25), 0 18px 36px -18px rgba(0, 0, 0, 0.3)',
        'meece-hover': '0 25px 50px -12px rgba(0, 0, 0, 0.15), 0 0 15px rgba(0, 251, 255, 0.2)',
      },
      letterSpacing: {
        'meece-widest': '0.4em',
      },
      animation: {
        'gradient-x': 'gradient-x 15s ease infinite',
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'shimmer': 'shimmer 2s linear infinite',
        'draw-line': 'draw-line 1.5s ease-out forwards',
        'flow-dash': 'flow-dash 3s linear infinite',
      },
      keyframes: {
        'gradient-x': {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center',
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center',
          },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'shimmer': {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        'draw-line': {
          '0%': { height: '0%', opacity: '0' },
          '100%': { height: '100%', opacity: '1' },
        },
        'flow-dash': {
          'to': { 'stroke-dashoffset': '-20' },
        },
      },
    },
  },
  plugins: [],
}