import '@/styles/global.css';
import { Inter } from 'next/font/google';
import { GlassPane, Sidebar } from '@/components';
import { ReactNode } from 'react';
import clsx from 'clsx';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

interface DashboardRootLayoutProps {
  children: ReactNode;
}

export default function DashboardRootLayout({
  children,
}: DashboardRootLayoutProps) {
  return (
    <html lang='en' className={clsx(inter.variable, 'dark')}>
      <head />
      <body className='h-screen w-screen candy-mesh p-6'>
        <GlassPane className='w-full h-full p-6 flex align-center container mx-auto'>
          <Sidebar />
          <main className='w-full pl-6 h-full'>{children}</main>
        </GlassPane>
      </body>
    </html>
  );
}
