import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { sign } from 'jsonwebtoken';
import { otpStore } from '@/lib/otpStore';
import { z } from "zod";

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key';

const otpSchema = z.object({
  email: z.string().email(),
  otp: z.string().length(6)
});

export async function POST(request: Request) {
  try {
    const { email, otp } = await request.json();
    
    const storedData = await otpStore.get(email);
    if (!storedData || typeof storedData !== 'string') {
      return NextResponse.json(
        { error: 'OTP not found' },
        { status: 400 }
      );
    }
    
    const { otp: storedOtp, expiry } = JSON.parse(storedData);
    
    if (Date.now() > expiry) {
      await otpStore.delete(email);
      return NextResponse.json(
        { error: 'OTP expired' },
        { status: 400 }
      );
    }
    
    if (storedOtp !== otp) {
      return NextResponse.json(
        { error: 'Invalid OTP' },
        { status: 400 }
      );
    }
    
    await otpStore.delete(email);
    
    // Generate JWT token
    const token = sign({ email }, JWT_SECRET, { expiresIn: '24h' });
    
    // Set HTTP-only cookie
    cookies().set('auth-token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 24 * 60 * 60 // 24 hours
    });
    
    return NextResponse.json({ message: 'OTP verified successfully' });
  } catch (error) {
    return NextResponse.json(
      { error: 'Invalid OTP' },
      { status: 400 }
    );
  }
} 