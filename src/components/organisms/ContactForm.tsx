import React, { useState } from 'react';
import { type ContactFormData } from '../../types';
import { Maximize2, Minimize2 } from 'lucide-react';

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSent(true);
      } else {
        const errorData = await response.json();
        alert(errorData.error || '送信に失敗しました。');
      }
    } catch (error) {
      alert('通信エラーが発生しました。');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSent) {
    return (
      <div style={{ textAlign: 'center', padding: '40px 0' }}>
        <div style={{ fontSize: '48px', marginBottom: '20px' }}>✅</div>
        <h3 style={{ color: '#0D1B3E', fontSize: '24px', fontWeight: 900, marginBottom: '16px' }}>
          送信が完了しました
        </h3>
        <p style={{ color: '#6B7280', fontSize: '14px', lineHeight: 1.8 }}>
          お問い合わせいただきありがとうございます。<br />
          内容を確認の上、担当者より折り返しご連絡いたします。
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <div style={{ 
        display: 'flex', 
        flexDirection: window.innerWidth < 768 ? 'column' : 'row', 
        gap: '20px' 
      }}>
        <input 
          type="text" 
          placeholder="お名前" 
          required
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          style={{ 
            flex: 1, 
            padding: '18px 25px', 
            borderRadius: '12px', 
            border: '1px solid #F3F4F6', 
            backgroundColor: '#F9FAFB',
            fontSize: '14px',
            outline: 'none'
          }} 
        />
        <input 
          type="email" 
          placeholder="メールアドレス" 
          required
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          style={{ 
            flex: 1, 
            padding: '18px 25px', 
            borderRadius: '12px', 
            border: '1px solid #F3F4F6', 
            backgroundColor: '#F9FAFB',
            fontSize: '14px',
            outline: 'none'
          }} 
        />
      </div>
      <div style={{ 
        position: isExpanded ? 'fixed' : 'relative',
        inset: isExpanded ? '0' : 'auto',
        zIndex: isExpanded ? 9999 : 'auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: isExpanded ? 'rgba(13, 27, 62, 0.8)' : 'transparent',
        padding: isExpanded ? '20px' : '0',
        transition: 'all 0.3s ease'
      }}>
        <div style={{ 
          position: 'relative', 
          width: isExpanded ? '70%' : '100%', 
          height: isExpanded ? '70%' : 'auto',
          transition: 'all 0.3s ease'
        }}>
          <textarea 
            placeholder="お問い合わせ内容" 
            required
            rows={isExpanded ? 20 : 6} 
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            style={{ 
              width: '100%', 
              height: '100%',
              padding: '40px 25px 25px', 
              borderRadius: '12px', 
              border: '1px solid #F3F4F6', 
              backgroundColor: '#F9FAFB',
              fontSize: isExpanded ? '16px' : '14px',
              outline: 'none',
              resize: 'none',
              boxSizing: 'border-box',
              boxShadow: isExpanded ? '0 20px 50px rgba(0,0,0,0.3)' : 'none'
            }} 
          />
          <button
            type="button"
            onClick={() => setIsExpanded(!isExpanded)}
            style={{
              position: 'absolute',
              top: '10px',
              right: '10px',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              color: '#9CA3AF',
              padding: '5px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            {isExpanded ? <Minimize2 size={20} /> : <Maximize2 size={18} />}
          </button>
        </div>
      </div>
      
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', justifyContent: 'center', marginTop: '10px' }}>
        <input type="checkbox" id="confirm" required style={{ width: '16px', height: '16px' }} />
        <label htmlFor="confirm" style={{ fontSize: '12px', color: '#9CA3AF', cursor: 'pointer' }}>
          入力内容に間違いがないか確認しました
        </label>
      </div>

      <button 
        type="submit"
        disabled={isSubmitting}
        onMouseEnter={(e) => {
          e.currentTarget.style.opacity = '0.9';
          e.currentTarget.style.transform = 'translateY(-2px)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.opacity = '1';
          e.currentTarget.style.transform = 'translateY(0)';
        }}
        style={{ 
          marginTop: '20px',
          padding: '18px',
          borderRadius: '12px',
          background: isSubmitting ? '#9CA3AF' : 'linear-gradient(to right, #319795, #9D72FF)',
          color: '#FFFFFF',
          fontSize: '15px',
          fontWeight: 'bold',
          border: 'none',
          textAlign: 'center',
          cursor: isSubmitting ? 'not-allowed' : 'pointer',
          transition: 'all 0.3s ease',
          boxShadow: '0 10px 20px rgba(49, 130, 206, 0.2)'
        }}
      >
        {isSubmitting ? '送信中...' : 'メッセージを送信'}
      </button>
    </form>
  );
};