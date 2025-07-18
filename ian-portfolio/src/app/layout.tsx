import './globals.css';
import { ThemeProviders } from '@/components/ThemeProviders';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Ian Mwaura Kimani | Systems Analyst Portfolio',
  description: 'Portfolio website of Ian Mwaura Kimani – Systems Analyst specialising in Core Banking, SWIFT, and Cloud Solutions.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-900 text-gray-200 font-sans">
        <ThemeProviders>{children}</ThemeProviders>
      </body>
    </html>
  );
}