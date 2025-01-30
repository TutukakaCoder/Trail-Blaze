import { NextResponse } from 'next/server';
import { functions } from '@/lib/firebase';
import { httpsCallable, HttpsCallableResult } from 'firebase/functions';

interface WelcomeEmailResponse {
  success: boolean;
}

export async function POST(request: Request) {
  try {
    const { email, name, entryId } = await request.json();
    
    const sendWelcomeEmail = httpsCallable<
      { email: string; name: string; entryId: string },
      WelcomeEmailResponse
    >(functions, 'sendWelcomeEmail');
    
    const result = await sendWelcomeEmail({ email, name, entryId });
    
    if (result.data.success) {
      return NextResponse.json({ success: true });
    } else {
      throw new Error('Failed to send email');
    }
  } catch (error) {
    console.error('Failed to send welcome email:', error);
    return NextResponse.json(
      { error: 'Failed to send welcome email' },
      { status: 500 }
    );
  }
} 