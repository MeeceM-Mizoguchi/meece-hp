import React from 'react';
import { Sparkles, BarChart3, MessageCircle, Rocket, Presentation } from 'lucide-react';

/**
 * ニュース項目の型定義
 */
export interface NewsItem {
  date: string;
  category: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  url: string;
}

/**
 * ============================================================
 * ニュースデータ管理台帳
 * ============================================================
 * 【ニュースを追加する際の手順】
 * 1. src/pages/news/ 内に新しい記事の .tsx ファイルを作成する
 * 2. src/App.tsx に新しい記事への Route を追加する
 * 3. 以下の newsItems 配列の「一番上」に新しいデータ（{...} の塊）を追加する
 * * ※ ここにデータを追加するだけで、TOPページ（最新3件）と
 * ニュース一覧ページの両方が自動的に更新されます。
 * ============================================================
 */
export const newsItems: NewsItem[] = [
  {
    date: '2026.05.07',
    category: 'ニュース',
    title: '【ビジョン】時代をまたぎ、デジタル・クリエイティブ・ファームへ。',
    description: 'AIという革新と、日本が築いた資産。その両方を等しく尊び、デザインの力で次世代へ繋ぐ。Meeceは、新しい時代のデジタルを形にするファームとして歩み始めます。',
    icon: <Sparkles size={24} style={{ color: '#9870FF' }} />,
    url: '/news/20260507-digital-creative-firm'
  },
  {
    date: '2026.04.24',
    category: '営業日',
    title: '【お知らせ】2026年ゴールデンウィーク休業期間中の営業について',
    description: '2026年5月4日（月）〜5月8日（金）の期間を休業とさせていただきます。期間中のお電話・メール対応の詳細についてご案内いたします。',
    icon: <Sparkles size={24} style={{ color: '#F6AD55' }} />,
    url: '/news/20260424-gw-notice'
  },
  {
    date: '2026.04.16',
    category: 'ニュース',
    title: '【新機能】Meeceの情報をワンビューで集約・閲覧できる「Presentation Room」を公開いたしました',
    description: 'Meece株式会社のビジョン、実績、IT予算の整理戦略など、当社の全体像を一つの空間（ルーム）に集約。静止画だけでは伝わらない当事者意識や熱量を、動く体験として統合しました。',
    icon: <Presentation size={24} style={{ color: '#8B5CF6' }} />,
    url: '/news/20260416-presentation'
  },
  {
    date: '2026.04.06',
    category: 'プレスリリース',
    title: '【新サービス】AI駆動型開発による「AI開発ラボ」特設ページを公開いたしました',
    description: 'アイディアを最短2週間で形にする、新しいPOC開発支援サービスを開始。最新のAIアーキテクチャを活用し、圧倒的なスピードとコストパフォーマンスでお客様のビジネスを加速させます。',
    icon: <Rocket size={24} style={{ color: '#00FBFF' }} />,
    url: '/news/20260401-rapid-poc'
  },
  {
    date: '2026.03.11',
    category: 'ニュース',
    title: '【お知らせ】公式サイトのシステム基盤刷新による表示速度向上とUIデザインの微調整について',
    description: 'より快適な閲覧体験を提供するため、公式サイトのシステム基盤を全面的に刷新いたしました。今回のアップデートにより、各ページの表示速度が大幅に向上し、アクセシビリティの改善を目的とした一部UIデザインの微調整を行っております。',
    icon: <Sparkles size={24} style={{ color: '#F6AD55' }} />,
    url: '/news/20260311-website-update'
  },
  {
    date: '2026.01.26',
    category: 'ニュース',
    title: '【新機能】希望の項目を選択し、その場で概算を算出する「見積もりシミュレーター」を公開',
    description: '開発の「透明性」を追求し、プロジェクトの概算費用とスケジュールを即座に可視化できるシミュレーションツールをリリースしました。',
    icon: <BarChart3 size={24} style={{ color: '#3182CE' }} />,
    url: '/news/20260126-simulator'
  },
  {
    date: '2026.01.05',
    category: 'ニュース',
    title: '【2026年 決意表明】AI新時代におけるシステム開発の刷新と品質向上への挑戦',
    description: '年頭会見を受け、AIによる社会基盤の刷新が加速する中、Meeceはさらなるスピードと精密な品質を追求します。',
    icon: <MessageCircle size={24} style={{ color: '#9CA3AF' }} />,
    url: '/news/20260105-vision'
  },
  {
    date: '2026.01.05',
    category: 'ニュース',
    title: '【謹賀新年】公式サイトをフルリニューアル公開いたしました',
    description: '新年あけましておめでとうございます。Meece株式会社は本日、ブランドメッセージを刷新した新しい公式サイトを公開いたしました。',
    icon: <Sparkles size={24} style={{ color: '#F6AD55' }} />,
    url: '/news/20260105-renewal'
  }
];