"use client";

import { Navbar } from "@/components/Navbar";
import { redirect } from 'next/navigation';
import { cookies } from 'next/headers';
import { verify } from 'jsonwebtoken';

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const token = cookies().get('auth-token');
  
  if (!token) {
    redirect('/auth/login');
  }
  
  try {
    verify(token.value, process.env.JWT_SECRET!);
  } catch {
    redirect('/auth/login');
  }

  return <>{children}</>;
}
