import { NextResponse } from 'next/server';
import { generateOTP } from '@/lib/utils';
// You'll need to set up your preferred email service
import { sendEmail } from '@/lib/email';
import { otpStore } from '@/lib/otpStore';

export async function POST(request: Request) {
  try {
    const { email } = await request.json();
    
    // Generate a 6-digit OTP
    const otp = generateOTP(6);
    
    // Store OTP with 5-minute expiry
    otpStore.set(email, {
      otp,
      expiry: Date.now() + 5 * 60 * 1000
    });
    
    // Send OTP via email
    await sendEmail({
      to: email,
      subject: 'Your Login OTP',
      text: `Your OTP is: ${otp}. It will expire in 5 minutes.`
    });
    
    return NextResponse.json({ message: 'OTP sent successfully' });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to send OTP' },
      { status: 500 }
    );
  }
} 