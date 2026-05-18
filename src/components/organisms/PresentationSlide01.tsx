import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface PresentationSlide01Props {
  slideRef: React.RefObject<HTMLDivElement | null>;
  data: {
    label: string;
    description?: string;
  };
}

export const PresentationSlide01: React.FC<PresentationSlide01Props> = ({ slideRef, data }) => {
  const backgroundImages = [
    "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?q=80&w=2044&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?q=80&w=2040&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?q=80&w=2040&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1514565131-fce0801e5785?q=80&w=2112&auto=format&fit=crop"
  ];
  const [bgIndex, setBgIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setBgIndex((prev) => (prev + 1) % backgroundImages.length);
    }, 10000);
    return () => clearInterval(timer);
  }, []);

  return (
    <motion.div
      ref={slideRef}
      key="slide-01"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ scale: 0, opacity: 0, transition: { duration: 0.8, ease: "circIn" } }}
      style={{ position: 'absolute', inset: 0, backgroundColor: '#000814' }}
    >
      {/* 背景：TOPページと同じ都市景色スライドショー */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
        <AnimatePresence mode="popLayout">
          <motion.img
            key={backgroundImages[bgIndex]}
            src={backgroundImages[bgIndex]}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2.0, ease: "easeInOut" }}
            alt="City Background"
            style={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              filter: 'brightness(1.1) contrast(1.05) saturate(1.2) hue-rotate(-5deg)'
            }}
          />
        </AnimatePresence>
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(0, 8, 20, 0.4) 100%)'
        }} />
      </div>

      {/* コンテンツレイヤー */}
      <div style={{ position: 'relative', zIndex: 10, height: '100%', width: '100%', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', padding: '24px 48px' }}>

        {/* 縦書きスローガン: 絶対配置でレイアウトに影響させない */}
        <div style={{ position: 'absolute', top: '24px', right: '48px', maxHeight: '60%', overflow: 'hidden' }}>
          <div style={{
            color: 'white',
            writingMode: 'vertical-rl',
            fontSize: '10px',
            letterSpacing: '0.4em',
            fontWeight: 600,
            textShadow: '0 0 20px rgba(0,251,255,0.5)'
          }}>
            時代をまたぎ、新しいデジタルをデザインする。
          </div>
        </div>

        {/* スペーサー */}
        <div style={{ flex: 1 }} />

        {/* タイトル */}
        <div style={{ marginBottom: '14px' }}>
          <h1 style={{
            color: 'white',
            fontSize: 'clamp(1.6rem, 3.8vw, 3.8rem)',
            fontWeight: 900,
            lineHeight: 0.88,
            letterSpacing: '-0.04em',
            textTransform: 'uppercase',
            margin: 0
          }}>
            DIGITAL<br />
            CREATIVE<br />
            FIRM
          </h1>
        </div>

        {/* 署名バー */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', width: '100%', borderTop: '1px solid rgba(255,255,255,0.2)', paddingTop: '12px', flexShrink: 0 }}>
          <div style={{ backgroundColor: 'white', color: '#000814', padding: '5px 12px', borderRadius: '2px', fontWeight: 950, fontSize: '13px', letterSpacing: '0.1em', flexShrink: 0 }}>
            MEECE
          </div>
          <p style={{ color: 'white', fontSize: '9px', letterSpacing: '0.25em', fontWeight: 800, margin: 0 }}>
            INNOVATION GUIDE 2026
          </p>
        </div>
      </div>
    </motion.div>
  );
};
