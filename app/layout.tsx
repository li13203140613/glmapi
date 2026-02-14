import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://glm-api.org"),
  title: {
    template: "%s | GLM API Proxy - 官方4折",
    default: "GLM API Proxy - GLM API 官方价格4折代理 | 智谱AI API",
  },
  description:
    "GLM API 代理服务，官方价格4折。支持 GLM-4.7、GLM-4V、CogView、CogVideoX 全系列模型。稳定快速，完全兼容官方接口。GLM API pricing from 40% off.",
  keywords: [
    "GLM API",
    "GLM API pricing",
    "glm 4.7 api",
    "glm api key",
    "智谱AI API",
    "ChatGLM API",
    "GLM-4.7 API",
    "CogView API",
    "glm free api",
    "glm coding plan",
    "GLM API 代理",
    "GLM API 价格",
    "GLM API 便宜",
    "智谱AI 接口",
    "GLM-4 API",
    "CogVideoX API",
    "GLM API proxy",
    "GLM API cheap",
    "affordable GLM API",
    "GLM-4V Vision",
    "GLM-4-Voice",
    "智谱清言",
    "便宜的 AI API",
    "GLM API 折扣",
    "GLM 4.7 Flash API",
  ],
  alternates: {
    canonical: "https://glm-api.org",
  },
  openGraph: {
    title: "GLM API Proxy - GLM API 官方价格4折代理",
    description:
      "GLM API 代理服务，官方价格4折。支持 GLM-4.7、GLM-4V、CogView、CogVideoX 全系列模型。稳定快速，完全兼容官方接口。",
    type: "website",
    locale: "zh_CN",
    url: "https://glm-api.org",
    siteName: "GLM API Proxy",
  },
  twitter: {
    card: "summary_large_image",
    title: "GLM API Proxy - 官方价格4折",
    description:
      "GLM API 代理服务，官方价格4折。支持 GLM-4.7、GLM-4V、CogView、CogVideoX 全系列模型。稳定快速，完全兼容官方接口。",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "GLM API Proxy",
              description:
                "GLM API 官方代理服务,提供全套智谱AI能力",
              url: "https://glm-api.org",
            }),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
