import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Undangan Khitan Umar & Khaled al-Farouq",
  description:
    "Mohon doa restu untuk acara khitan Umar & Khaled pada 6 Juli 2025",

  openGraph: {
    title: "Undangan Khitan Umar & Khaled al-Farouq",
    description:
      "Mohon doa restu untuk acara khitan Umar & Khaled | 6 Juli 2025 | Perum Villa Batu Ampar",
    url: "https://undangan-umar-khaled.vercel.app/",
    siteName: "Undangan Khitan",
    images: [
      {
        url: "https://undangan-umar-khaled.vercel.app/undangan.jpeg",
        alt: "Undangan Khitan Umar & Khaled",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
