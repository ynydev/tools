import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const NotoSansJP = Noto_Sans_JP();

export const metadata: Metadata = {
  title: "便利ツール | シンプルで使いやすい日常向けWebアプリ集",
  description: "シンプルで使いやすい便利ツールをまとめたサイトです。日常で役立つツールを無料で利用できます。",
  keywords: ["便利ツール", "無料ツール", "日常", "Webアプリ", "シンプル"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={`${NotoSansJP.className}`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
