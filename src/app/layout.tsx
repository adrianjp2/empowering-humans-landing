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
  title: "Empowering Humans - Software de Recursos Humanos SaaS",
  description: "Automatiza fichajes, vacaciones, contratos y expedientes en una única plataforma. El software SaaS de RRHH para el mercado español.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} dark h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#0b0c10] text-zinc-50 font-sans selection:bg-[#ff4d6d] selection:text-white relative">
        {children}
      </body>
    </html>
  );
}
