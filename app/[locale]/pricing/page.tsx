import PricingTable from "@/components/PricingTable";
import EmailForm from "@/components/EmailForm";
import { Link } from "@/i18n/navigation";
import { getTranslations } from "next-intl/server";
import { routing } from "@/i18n/routing";
import {
  textModels,
  visionModels,
  imageModels,
  videoModels,
  voiceModels,
  toolModels,
} from "@/lib/pricing-data";

const baseUrl = "https://glm-api.org";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata.pricing" });

  const languages: Record<string, string> = {};
  for (const l of routing.locales) {
    languages[l] = l === "en" ? `${baseUrl}/pricing` : `${baseUrl}/${l}/pricing`;
  }

  return {
    title: t("title"),
    description: t("description"),
    keywords: t.raw("keywords"),
    alternates: {
      canonical: locale === "en" ? `${baseUrl}/pricing` : `${baseUrl}/${locale}/pricing`,
      languages,
    },
  };
}

export default async function PricingPage() {
  const t = await getTranslations("pricing");

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-emerald-50">
      {/* Hero Section */}
      <section className="px-6 py-24 sm:py-32">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-5xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            {t("hero.title")}
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600 max-w-2xl mx-auto">
            {t("hero.subtitle")}
          </p>
          <div className="mt-6 inline-flex items-center gap-2 px-4 py-2 bg-emerald-50 border border-emerald-200 rounded-lg">
            <span className="text-sm font-medium text-emerald-800">
              {t("currencyNote")}
            </span>
          </div>
        </div>
      </section>

      {/* Pricing Tables */}
      <section className="px-6 pb-24">
        <div className="mx-auto max-w-7xl space-y-16">
          <PricingTable title={t("tables.textModels")} items={textModels} />
          <PricingTable title={t("tables.visionModels")} items={visionModels} />
          <PricingTable title={t("tables.imageModels")} items={imageModels} />
          <PricingTable title={t("tables.videoModels")} items={videoModels} />
          <PricingTable title={t("tables.voiceModels")} items={voiceModels} />
          <PricingTable title={t("tables.toolModels")} items={toolModels} />

          {/* Pricing Notes */}
          <div className="bg-white p-8 rounded-2xl border border-gray-200 max-w-3xl mx-auto">
            <h2 className="text-xl font-bold text-gray-900 mb-4">{t("notes.title")}</h2>
            <ul className="space-y-3 text-gray-600">
              {(t.raw("notes.items") as string[]).map((item, i) => (
                <li key={i} className="flex items-start">
                  <span className="text-emerald-600 mr-2">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Related Guides */}
          <div className="bg-gradient-to-br from-emerald-50 to-white p-8 rounded-2xl border border-emerald-200 max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              {t("relatedGuides.title")}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Link href="/" className="flex items-center gap-3 p-4 bg-white rounded-lg border border-gray-200 hover:border-emerald-400 hover:shadow-md transition-all">
                <span className="text-2xl">🏠</span>
                <div>
                  <h3 className="font-semibold text-gray-900">{t("relatedGuides.home.title")}</h3>
                  <p className="text-sm text-gray-600">{t("relatedGuides.home.description")}</p>
                </div>
              </Link>
              <Link href="/glm-4-7-api" className="flex items-center gap-3 p-4 bg-white rounded-lg border border-gray-200 hover:border-emerald-400 hover:shadow-md transition-all">
                <span className="text-2xl">📚</span>
                <div>
                  <h3 className="font-semibold text-gray-900">{t("relatedGuides.glm47.title")}</h3>
                  <p className="text-sm text-gray-600">{t("relatedGuides.glm47.description")}</p>
                </div>
              </Link>
              <Link href="/glm-free-api" className="flex items-center gap-3 p-4 bg-white rounded-lg border border-gray-200 hover:border-emerald-400 hover:shadow-md transition-all">
                <span className="text-2xl">🆓</span>
                <div>
                  <h3 className="font-semibold text-gray-900">{t("relatedGuides.free.title")}</h3>
                  <p className="text-sm text-gray-600">{t("relatedGuides.free.description")}</p>
                </div>
              </Link>
              <Link href="/glm-api-key" className="flex items-center gap-3 p-4 bg-white rounded-lg border border-gray-200 hover:border-emerald-400 hover:shadow-md transition-all">
                <span className="text-2xl">🔑</span>
                <div>
                  <h3 className="font-semibold text-gray-900">{t("relatedGuides.apiKey.title")}</h3>
                  <p className="text-sm text-gray-600">{t("relatedGuides.apiKey.description")}</p>
                </div>
              </Link>
              <Link href="/glm-4-7-flash-api" className="flex items-center gap-3 p-4 bg-white rounded-lg border border-gray-200 hover:border-emerald-400 hover:shadow-md transition-all">
                <span className="text-2xl">⚡</span>
                <div>
                  <h3 className="font-semibold text-gray-900">{t("relatedGuides.flash.title")}</h3>
                  <p className="text-sm text-gray-600">{t("relatedGuides.flash.description")}</p>
                </div>
              </Link>
              <Link href="/glm-coding-plan" className="flex items-center gap-3 p-4 bg-white rounded-lg border border-gray-200 hover:border-emerald-400 hover:shadow-md transition-all">
                <span className="text-2xl">💻</span>
                <div>
                  <h3 className="font-semibold text-gray-900">{t("relatedGuides.coding.title")}</h3>
                  <p className="text-sm text-gray-600">{t("relatedGuides.coding.description")}</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="px-6 py-24 bg-gradient-to-br from-emerald-600 to-emerald-800">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            {t("cta.title")}
          </h2>
          <p className="text-lg text-emerald-100 mb-8">
            {t("cta.description")}
          </p>
          <div className="max-w-md mx-auto">
            <EmailForm source="pricing" />
          </div>
        </div>
      </section>
    </main>
  );
}
