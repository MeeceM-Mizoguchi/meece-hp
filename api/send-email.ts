/// <reference types="@vercel/node" />
import { Resend } from 'resend';
import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(
  request: VercelRequest,
  response: VercelResponse
) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  // POSTメソッド以外は受け付けない
  if (request.method !== 'POST') {
    return response.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, message } = request.body;

  try {
    const data = await resend.emails.send({
      from: 'Meece HP <onboarding@resend.dev>', // 送信元（初期設定用）
      to: 'your-registered-email@example.com',           // ★Resend登録時のメールアドレスを入力してください
      subject: `【HPお問い合わせ】${name}様より`,
      html: `
        <p><strong>お名前:</strong> ${name}</p>
        <p><strong>メールアドレス:</strong> ${email}</p>
        <p><strong>内容:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    });

    return response.status(200).json({ success: true, data });
  } catch (error) {
    return response.status(500).json({ error: 'メール送信に失敗しました' });
  }
}