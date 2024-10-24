import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Song and Tae Studio",
  description: "Art Gallery for Song and Tae Studio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased dynamic-spacing bg-[#f9f1f1]">
        <Navbar />

        {children}
      </body>
    </html>
  );
}
