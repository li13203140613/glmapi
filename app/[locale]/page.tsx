import EmailForm from "@/components/EmailForm";
import { Link } from "@/i18n/navigation";
import { getTranslations } from "next-intl/server";
import { routing } from "@/i18n/routing";

const baseUrl = "https://glm-api.org";

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
    title: t("title"),
    description: t("description"),
    keywords: t.raw("keywords"),
    alternates: {
      canonical: locale === "en" ? baseUrl : `${baseUrl}/${locale}`,
      languages,
    },
  };
}

const featureIcons: Record<string, string> = {
  money: "💰",
  rocket: "🚀",
  plug: "🔌",
};

const capabilityIcons: Record<string, string> = {
  chat: "💬",
  eye: "👁️",
  image: "🖼️",
  video: "🎬",
  microphone: "🎤",
  search: "🔍",
};

export default async function HomePage() {
  const t = await getTranslations("homepage");

  const features = t.raw("features.items") as Array<{
    icon: string;
    title: string;
    description: string;
  }>;
  const capabilities = t.raw("capabilities.items") as Array<{
    icon: string;
    title: string;
    subtitle: string;
    description: string;
    href: string;
  }>;
  const pricingItems = t.raw("pricingPreview.items") as Array<{
    model: string;
    type: string;
    officialPrice: string;
    ourPrice: string;
  }>;
  const resources = t.raw("resources.items") as Array<{
    title: string;
    description: string;
    href: string;
  }>;
  const faqItems = t.raw("faq.items") as Array<{ q: string; a: string }>;

  return (
    <main className="min-h-screen">
      {/* FAQ Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqItems.map((item) => ({
              "@type": "Question",
              name: item.q,
              acceptedAnswer: {
                "@type": "Answer",
                text: item.a,
              },
            })),
          }),
        }}
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-emerald-50 via-white to-emerald-50 px-6 py-24 sm:py-32">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]" />
        <div className="relative mx-auto max-w-4xl text-center">
          <h1 className="text-5xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-emerald-800 sm:text-7xl">
            {t("hero.title")}
          </h1>
          <p className="mt-6 text-2xl font-semibold text-emerald-600">
            {t("hero.subtitle")}
          </p>
          <p className="mt-4 text-lg leading-8 text-gray-600 max-w-2xl mx-auto">
            {t.rich("hero.description", {
              pricingLink: (chunks) => (
                <Link href="/pricing" className="text-emerald-600 underline">
                  {chunks}
                </Link>
              ),
            })}
          </p>
          <div className="mt-10 max-w-md mx-auto">
            <EmailForm source="homepage" />
            <p className="mt-3 text-sm text-gray-500">
              {t("hero.emailHint")}
            </p>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 px-6 bg-white">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-16">
            {t("features.sectionTitle")}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((f, i) => (
              <div
                key={i}
                className="bg-gradient-to-br from-emerald-50 to-white p-8 rounded-2xl border border-emerald-100 hover:shadow-lg transition-shadow"
              >
                <div className="text-4xl mb-4">
                  {featureIcons[f.icon] || "✨"}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {f.title}
                </h3>
                <p className="text-gray-600">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* API Capabilities Section */}
      <section className="py-24 px-6 bg-gradient-to-br from-gray-50 to-emerald-50">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">
            {t("capabilities.sectionTitle")}
          </h2>
          <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">
            {t("capabilities.subtitle")}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((c, i) => (
              <Link
                key={i}
                href={c.href as "/docs/text"}
                className="bg-white p-6 rounded-xl border border-gray-200 hover:border-emerald-400 hover:shadow-lg transition-all group"
              >
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">
                  {capabilityIcons[c.icon] || "🔮"}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {c.title}
                </h3>
                <p className="text-sm text-gray-600 mb-2">{c.subtitle}</p>
                <p className="text-sm text-gray-500">{c.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Preview Section */}
      <section className="py-24 px-6 bg-white">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">
            {t("pricingPreview.title")}
          </h2>
          <p className="text-center text-gray-600 mb-16">
            {t("pricingPreview.subtitle")}
          </p>
          <div className="bg-gradient-to-br from-emerald-50 to-white p-8 rounded-2xl border border-emerald-200">
            <div className="space-y-4">
              {pricingItems.map((item, i) => (
                <div
                  key={i}
                  className={`flex justify-between items-center py-3 ${i < pricingItems.length - 1 ? "border-b border-gray-200" : ""}`}
                >
                  <div>
                    <span className="font-semibold text-gray-900">
                      {item.model}
                    </span>
                    <span className="text-sm text-gray-500 ml-2">
                      ({item.type})
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="text-sm text-gray-400 line-through mr-2">
                      {item.officialPrice}
                    </span>
                    <span className="font-bold text-emerald-600">
                      {item.ourPrice}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="text-center mt-8">
            <Link
              href="/pricing"
              className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-emerald-600 hover:bg-emerald-700 transition-colors"
            >
              {t("pricingPreview.viewFull")}
            </Link>
          </div>
        </div>
      </section>

      {/* Resources & Guides Section */}
      <section className="py-24 px-6 bg-gradient-to-br from-gray-50 to-emerald-50">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">
            {t("resources.sectionTitle")}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {resources.map((r, i) => (
              <Link
                key={i}
                href={r.href as "/pricing"}
                className="bg-white p-6 rounded-xl border border-gray-200 hover:border-emerald-400 hover:shadow-lg transition-all group"
              >
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-emerald-600">
                  {r.title}
                </h3>
                <p className="text-sm text-gray-600">{r.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 px-6 bg-white">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            {t("faq.sectionTitle")}
          </h2>
          <div className="space-y-6">
            {faqItems.map((item, i) => (
              <div key={i} className="border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {item.q}
                </h3>
                <p className="text-gray-600">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-24 px-6 bg-gradient-to-br from-emerald-600 to-emerald-800">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            {t("cta.title")}
          </h2>
          <p className="text-lg text-emerald-100 mb-8">
            {t("cta.description")}
          </p>
          <div className="max-w-md mx-auto">
            <EmailForm source="homepage" />
          </div>
        </div>
      </section>
    </main>
  );
}
