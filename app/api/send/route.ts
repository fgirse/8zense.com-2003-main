import { EmailTemplate } from '@/components/share/email-template';
import { Resend } from 'resend';
import { NextRequest, NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  const json = req.json();
  const { username, attachments } = await json;

  try {
    const data = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: ['replace with your adress'],
      subject: 'Hello world',
      text: 'Hello world',
      react: EmailTemplate({ username, }),
      attachments: attachments.map((file : any) => ({
        filename: file.filename,
        content: file.content,
      })),
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
