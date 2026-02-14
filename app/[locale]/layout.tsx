import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { Locale } from "@/i18n/config";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const baseUrl = "https://glm-api.org";

const localeToOg: Record<string, string> = {
  en: "en_US",
  zh: "zh_CN",
  ja: "ja_JP",
  ko: "ko_KR",
  de: "de_DE",
  es: "es_ES",
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata.homepage" });

  const languages: Record<string, string> = {};
  for (const l of routing.locales) {
    languages[l] = l === "en" ? baseUrl : `${baseUrl}/${l}`;
  }

  return {
    metadataBase: new URL(baseUrl),
    title: {
      default: t("title"),
      template: t("titleTemplate"),
    },
    description: t("description"),
    keywords: t.raw("keywords"),
    alternates: {
      canonical: locale === "en" ? baseUrl : `${baseUrl}/${locale}`,
      languages,
    },
    openGraph: {
      title: t("title"),
      description: t("description"),
      type: "website",
      locale: localeToOg[locale] || "en_US",
      url: locale === "en" ? baseUrl : `${baseUrl}/${locale}`,
      siteName: "GLM API Proxy",
    },
    twitter: {
      card: "summary_large_image" as const,
      title: t("title"),
      description: t("description"),
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large" as const,
        "max-snippet": -1,
      },
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as Locale)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "GLM API Proxy",
              description:
                "GLM API proxy service at 40% of official pricing, providing full Zhipu AI capabilities",
              url: baseUrl,
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "GLM API Proxy",
              url: baseUrl,
            }),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NextIntlClientProvider messages={messages}>
          <Navbar />
          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
