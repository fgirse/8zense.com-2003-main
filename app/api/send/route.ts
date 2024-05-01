import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';
import MessageUsEmail from '@/components/share/EmailMessage';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  const { name, email, message } = await req.json();

  try {
    const data = await resend.emails.send({
      from: 'Hello <rayden@sonya.dev>', // your verified domain
        to: `${email}`, // the email address you want to send a message
      subject: `${name} has a message!`,
      react: MessageUsEmail({ name, email, message }),
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
