import { Resend } from 'resend';
import * as React from 'react';
import { ContactUsEmail } from '@/components/email/contact-us';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const payload = await req.json();

  try {
    const { data, error } = await resend.emails.send({
      from: 'info@8zense.com',
      to: payload.email,
      subject: `Vielen Dank für Interesse an 8zense.com, ${payload.name}`,
      react: ContactUsEmail(payload),
    });

    if (error) {
      return Response.json({ error });
    }

    return Response.json({ data });
  } catch (error) {
    return Response.json({ error });
  }
}