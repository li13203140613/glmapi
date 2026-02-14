import { Link } from '@/i18n/navigation';
import { getTranslations } from 'next-intl/server';
import { routing } from '@/i18n/routing';

const baseUrl = "https://glm-api.org";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata.docs" });

  const languages: Record<string, string> = {};
  for (const l of routing.locales) {
    languages[l] = l === "en" ? `${baseUrl}/docs` : `${baseUrl}/${l}/docs`;
  }

  return {
    title: t("title"),
    description: t("description"),
    keywords: t.raw("keywords"),
    alternates: {
      canonical: locale === "en" ? `${baseUrl}/docs` : `${baseUrl}/${locale}/docs`,
      languages,
    },
  };
}

const sectionSlugs = ["text", "vision", "image", "video", "voice", "embedding", "tools"];
const sectionIcons: Record<string, string> = {
  text: "💬",
  vision: "👁️",
  image: "🖼️",
  video: "🎬",
  voice: "🔊",
  embedding: "🔢",
  tools: "🔧",
};

export default async function DocsOverviewPage() {
  const t = await getTranslations("docs");

  return (
    <div className="prose prose-gray max-w-none">
      <h1 className="text-3xl font-bold text-gray-900 mb-4">{t("overview.title")}</h1>
      <p className="text-lg text-gray-600 mb-8">{t("overview.description")}</p>

      {/* Base URL Section */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">{t("baseUrl.title")}</h2>
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
          <code className="text-sm text-gray-800">{t("baseUrl.url")}</code>
        </div>
        <p className="text-gray-600 mt-3">{t("baseUrl.description")}</p>
      </section>

      {/* Authentication Section */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">{t("auth.title")}</h2>
        <p className="text-gray-600 mb-3">{t("auth.description")}</p>
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
          <code className="text-sm text-gray-800">{t("auth.code")}</code>
        </div>
        <p className="text-gray-600 mt-3">{t("auth.warning")}</p>
      </section>

      {/* API Sections Grid */}
      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">{t("sections.title")}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 not-prose">
          {sectionSlugs.map((slug) => {
            const sectionKey = slug === "voice-clone" ? "voiceClone" : slug;
            return (
              <Link
                key={slug}
                href={`/docs/${slug}` as "/docs/text"}
                className="group block p-6 bg-white border border-gray-200 rounded-lg hover:border-emerald-500 hover:shadow-md transition-all duration-200"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 text-3xl">
                    {sectionIcons[slug] || "📄"}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-semibold text-gray-900 group-hover:text-emerald-600 transition-colors mb-1">
                      {t(`sections.${sectionKey}.title`)}
                    </h3>
                    <p className="text-sm text-gray-500 mb-2">
                      {t(`sections.${sectionKey}.titleEn`)}
                    </p>
                    <p className="text-sm text-gray-600 line-clamp-2">
                      {t(`sections.${sectionKey}.description`)}
                    </p>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Help Section */}
      <section className="mt-10 p-6 bg-emerald-50 border border-emerald-200 rounded-lg">
        <h3 className="text-lg font-semibold text-emerald-900 mb-2">
          {t("help.title")}
        </h3>
        <p className="text-emerald-800 text-sm">
          {t("help.description")}
        </p>
      </section>
    </div>
  );
}
