/**
 * ページ識別子（ナビゲーションやルーティングで使用）
 */
export type PageId = 
  | 'top' 
  | 'about' 
  | 'ai' 
  | 'development' 
  | 'consulting' 
  | 'support' 
  | 'cases' 
  | 'company' 
  | 'recruit' 
  | 'estimate' 
  | 'news' 
  | '404';

/**
 * アプリケーション全体のデータモデル
 */
export interface AppData {
  currentPage: PageId;
  isLoading: boolean;
}

/**
 * ニュース記事のデータ型（設計書 10.3.1 参照）
 */
export interface NewsItem {
  id: string;
  date: string;
  category: string;
  title: string;
  url: string;
}

/**
 * お問い合わせフォームの入力データ型
 */
export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}