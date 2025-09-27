import localFont from 'next/font/local';
import Head from 'next/head';
import { headers } from 'next/headers';
import { getAppConfig, getOrigin } from '@/lib/env';
import { cn } from '@/lib/utils';
import '@/styles/globals.css';

const jakartaSans = localFont({
  src: [
    {
      path: '../fonts/PlusJakartaSans-VariableFont_wght.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../fonts/PlusJakartaSans-VariableFont_wght.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../fonts/PlusJakartaSans-Italic-VariableFont_wght.ttf',
      weight: '400',
      style: 'italic',
    },
    {
      path: '../fonts/PlusJakartaSans-Italic-VariableFont_wght.ttf',
      weight: '700',
      style: 'italic',
    },
  ],
  variable: '--default-font-family',
});

interface RootLayoutProps {
  children: React.ReactNode;
  className?: string;
}

export async function RootLayout({ children, className }: RootLayoutProps) {
  const hdrs = await headers();
  const origin = getOrigin(hdrs);
  const { accent, accentDark } = await getAppConfig(origin);

  const styles = [
    accent ? `:root { --primary: ${accent}; }` : '',
    accentDark ? `.dark { --primary: ${accentDark}; }` : '',
  ]
    .filter(Boolean)
    .join('\n');

  return (
    <html lang="en" suppressHydrationWarning className={cn('scroll-smooth', className)}>
      <Head>{styles && <style>{styles}</style>}</Head>
      <body
        suppressHydrationWarning
        className={cn(jakartaSans.className, jakartaSans.variable, 'overflow-x-hidden antialiased')}
      >
        {children}
      </body>
    </html>
  );
}
