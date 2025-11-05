import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";
import SessionProvider from "@/utils/SessionProvider";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PopupWidget }  from "@/components/PopupWidget";
import Head from 'next/head';
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Welcome to P-Show",
  description: "P-show is a dynamic platform designed for students to showcase their innovative projects. It provides a space for sharing, discovering, and gaining recognition for academic and personal projects.",
};

export default function RootLayout({
  children,
  session,
}: Readonly<{
  children: React.ReactNode;
  session:any
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
       <Head>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/downloadjs/1.4.8/download.min.js"></script>
        <script src="/socket.io/socket.io.js"></script>
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2604286882923471"
     crossorigin="anonymous"></script>
      </Head>
      <body className={inter.className}>
      <SessionProvider session={session}>
        <ThemeProvider attribute="class">
          <Navbar />
          <div>{children}</div>
          <Footer />
          <PopupWidget />
        </ThemeProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
