import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import TransitionComponent from '@/components/TransitionComponent';

export const metadata: Metadata = {
  title: 'Song and Tae Studio',
  description: 'Art Gallery for Song and Tae Studio',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased dynamic-spacing bg-[#f9f1f1] min-h-[calc(100vh-5vw)] flex flex-col">
        <Navbar />
        <TransitionComponent>{children}</TransitionComponent>
        <Footer />
      </body>
    </html>
  );
}
