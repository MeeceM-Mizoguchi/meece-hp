/**
 * Meece株式会社 共通デザイン定数 (設計書 9, 10.5.2 参照)
 */
export const UI_STYLE = {
  // ブランドカラー（サイバーパンク・フューチャー感）
  COLOR: {
    PRIMARY: 'text-[#00D1FF]',      // サイバー水色
    SECONDARY: 'text-[#007AFF]',    // 信頼の青
    ACCENT: 'text-[#9D72FF]',       // 先進的な紫
    GRADIENT: 'bg-gradient-to-r from-[#00FBFF] via-[#007AFF] to-[#FF5BAE]', // メインの三色グラデーション
  },
  
  // 共通レイアウト
  CONTAINER: 'max-w-7xl mx-auto px-6 md:px-8',
  
  // ガラス質感（フューチャー感のある背景）
  GLASS: 'bg-white/10 backdrop-blur-md border border-white/20',
  
  // アニメーション設定（スムーズな出現）
  REVEAL: 'transition-all duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)]',
} as const;