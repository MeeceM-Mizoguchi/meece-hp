import { Routes, Route } from 'react-router-dom';

// ロゴ専用のフォント（Fredoka, Pacifico）を読み込み
const fontLink = document.createElement('link');
fontLink.href = 'https://fonts.googleapis.com/css2?family=Fredoka:wght@700&family=Pacifico&display=swap';
fontLink.rel = 'stylesheet';
document.head.appendChild(fontLink);

import Home from './pages/Home';
import { About } from './pages/About';
import { Company } from './pages/Company';
import { Development } from './pages/Development';
import { AI } from './pages/AI';
import { Consulting } from './pages/Consulting';
import { Support } from './pages/Support';
import { Cases } from './pages/Cases';
import { News } from './pages/News';
import SimulatorArticle from './pages/news/20260126_Simulator';
import VisionArticle from './pages/news/20260105_Vision';
import RenewalArticle from './pages/news/20260105_Renewal';
import NewsDetail from './pages/news/20260311_NewsDetail';
import RapidPOCArticle from './pages/news/20260406_RapidPOC';
import PresentationArticle from './pages/news/20260416_Presentation';
import GWNotice from './pages/news/20260424_GW';
import DigitalCreativeFirmArticle from './pages/news/20260507_DigitalCreativeFirm';
import Estimate from './pages/Estimate';
import { Recruit } from './pages/Recruit';
import PresentationRoom from './pages/PresentationRoom';
// AILab のインポートを削除しました
import RapidDevelopmentPOC from './pages/RapidDevelopmentPOC';
import EnterprisePOCDetail from './pages/EnterprisePOCDetail';
import DiagnosisPage from './pages/DiagnosisPage';
import EnterpriseApproach from './pages/EnterpriseApproach';
import StartupApproach from './pages/StartupApproach';
import SalesApproach from './pages/SalesApproach';
function App() {
  return (
    <>
      <Routes>
          {/* TOPページの設定 */}
          <Route path="/" element={<Home />} />

          {/* Aboutページの設定 */}
          <Route path="/about" element={<About />} />
          {/* PHILOSOPHYからもAboutページを表示するように追加 */}
          <Route path="/philosophy" element={<About />} />

          {/* 会社概要ページの設定 */}
          <Route path="/company" element={<Company />} />

          {/* サービス関連のルーティング設定 */}
          <Route path="/services/development" element={<Development />} />
          <Route path="/services/ai" element={<AI />} />
          {/* AI Lab の Route を削除しました */}

          {/* ITコンサルページ */}
          <Route path="/services/consulting" element={<Consulting />} />
          <Route path="/services/support" element={<Support />} />

          {/* 支援事例ページの設定 */}
          <Route path="/cases" element={<Cases />} />

          {/* ニュースページの設定 */}
          <Route path="/news" element={<News />} />

          {/* ニュース詳細記事の設定 */}
          <Route path="/news/20260507-digital-creative-firm" element={<DigitalCreativeFirmArticle />} />
          <Route path="/news/20260424-gw-notice" element={<GWNotice />} />
          <Route path="/news/20260416-presentation" element={<PresentationArticle />} />
          <Route path="/news/20260401-rapid-poc" element={<RapidPOCArticle />} />
          <Route path="/news/20260311-website-update" element={<NewsDetail />} />
          <Route path="/news/20260126-simulator" element={<SimulatorArticle />} />
          <Route path="/news/20260105-vision" element={<VisionArticle />} />
          <Route path="/news/20260105-renewal" element={<RenewalArticle />} />
          <Route path="/estimate" element={<Estimate />} />
          <Route path="/recruit" element={<Recruit />} />
          <Route path="/presentation" element={<PresentationRoom />} />
          <Route path="/services/rapid-poc" element={<RapidDevelopmentPOC />} />
          <Route path="/services/rapid-poc/enterprise" element={<EnterprisePOCDetail />} />
          <Route path="/services/rapid-poc/diagnosis" element={<DiagnosisPage />} />
          <Route path="/services/rapid-poc/enterprise-approach" element={<EnterpriseApproach />} />
          <Route path="/services/rapid-poc/startup-approach" element={<StartupApproach />} />
          <Route path="/services/rapid-poc/sales-approach" element={<SalesApproach />} />

          {/* スライド13からの短縮URL設定 */}
          <Route path="/diagnosis" element={<DiagnosisPage />} />
          <Route path="/lab" element={<RapidDevelopmentPOC />} />
        </Routes>
    </>
  );
}

export default App;
