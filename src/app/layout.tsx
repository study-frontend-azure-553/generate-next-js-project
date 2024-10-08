import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";
import { Noto_Sans_KR } from "next/font/google";

const pretendard = localFont({
  src: "../../public/fonts/PretendardVariable.woff2",
  display: "swap",
  weight: "45 920",
  variable: "--font-pretendard",
});

const notoSansKr = Noto_Sans_KR({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
  variable: "--font-notoSans",
});

export const metadata: Metadata = {
  title: "Lunchlab",
  description: "Lunchlab 과제 전형",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`flex justify-center min-h-dvh ${pretendard.variable} font-pretendard ${notoSansKr.variable}`}
      >
        <div className="p-4 w-full max-w-[600px] bg-background whitespace-pre-wrap">
          {children}
        </div>
      </body>
    </html>
  );
}
