"use client"
import LandingPage from '@/./app/components/landing/landingpage'
import { SessionProvider } from 'next-auth/react';

export default function Home() {
  return (
      <SessionProvider>
    <main className='overflow-x-hidden'>


    <LandingPage />
  </main>
      </SessionProvider>
  );
}
