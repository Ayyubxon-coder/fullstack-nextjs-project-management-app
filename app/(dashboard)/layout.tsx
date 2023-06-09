import '@/styles/global.css';
import { GlassPane, Sidebar } from '@/components';
import { ReactNode } from 'react';
interface DashboardRootLayoutProps {
  children: ReactNode;
}

export default function DashboardRootLayout({
  children,
}: DashboardRootLayoutProps) {
  return (
    <html lang='en'>
      <head />
      <body className='h-screen w-screen candy-mesh p-6'>
        <GlassPane className='w-full h-full flex items-center'>
          <Sidebar />
          {children}
        </GlassPane>
        <div id='modal'></div>
      </body>
    </html>
  );
}
