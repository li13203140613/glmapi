import EmailForm from "@/components/EmailForm";
import { Link } from "@/i18n/navigation";
import { getTranslations } from "next-intl/server";
import { routing } from "@/i18n/routing";

const baseUrl = "https://glm-api.org";
const pagePath = "/glm-coding-plan";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata.glmCodingPlan" });
  const languages: Record<string, string> = {};
  for (const l of routing.locales) {
    languages[l] = l === "en" ? `${baseUrl}${pagePath}` : `${baseUrl}/${l}${pagePath}`;
  }
  return {
    title: t("title"),
    description: t("description"),
    keywords: t.raw("keywords"),
    alternates: {
      canonical: locale === "en" ? `${baseUrl}${pagePath}` : `${baseUrl}/${locale}${pagePath}`,
      languages,
    },
  };
}

export default async function GLMCodingPlanPage() {
  const t = await getTranslations("landing");
  const faqItems = t.raw("glmCodingPlan.faq.items") as Array<{ q: string; a: string }>;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": t("glmCodingPlan.hero.title"),
    "description": t("glmCodingPlan.hero.description"),
    "author": { "@type": "Organization", "name": "GLM API Proxy" },
    "publisher": {
      "@type": "Organization",
      "name": "GLM API Proxy",
      "logo": { "@type": "ImageObject", "url": "https://glm-api.org/logo.png" }
    },
    "datePublished": "2025-02-14",
    "dateModified": "2025-02-14",
    "mainEntity": {
      "@type": "FAQPage",
      "mainEntity": faqItems.map((item) => ({
        "@type": "Question",
        "name": item.q,
        "acceptedAnswer": { "@type": "Answer", "text": item.a },
      })),
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="min-h-screen bg-white">
        {/* Breadcrumb */}
        <nav className="bg-gray-50 border-b border-gray-200 px-6 py-3">
          <div className="mx-auto max-w-4xl">
            <ol className="flex items-center space-x-2 text-sm text-gray-600">
              <li><Link href="/" className="hover:text-emerald-600">{t("breadcrumb.home")}</Link></li>
              <li>/</li>
              <li className="text-gray-900 font-medium">{t("glmCodingPlan.breadcrumb")}</li>
            </ol>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="px-6 py-16 bg-gradient-to-br from-emerald-50 via-white to-emerald-50">
          <div className="mx-auto max-w-4xl">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              {t("glmCodingPlan.hero.title")}
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              {t("glmCodingPlan.hero.description")}
            </p>
          </div>
        </section>

        {/* Main Content */}
        <article className="px-6 py-12">
          <div className="mx-auto max-w-4xl prose prose-lg prose-emerald">

            {/* What is GLM Coding Plan */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">What is GLM Coding Plan?</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                The <strong>GLM Coding Plan</strong> is Zhipu AI&apos;s subscription-based offering designed specifically for developers who want to integrate GLM AI capabilities into coding tools like <strong>Cursor</strong>, <strong>Continue</strong>, <strong>New API</strong>, and other development environments.
              </p>

              <div className="bg-emerald-50 border-l-4 border-emerald-500 p-6 my-6 rounded-r-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">What&apos;s Included</h3>
                <ul className="space-y-2 text-gray-700">
                  <li><strong>Monthly API Credits:</strong> Pre-allocated credits for GLM-4 API calls</li>
                  <li><strong>Access to All Models:</strong> Use GLM-4-Plus, GLM-4-Air, GLM-4-Flash, and other models</li>
                  <li><strong>Web Interface:</strong> Access to ChatGLM web app with enhanced features</li>
                  <li><strong>Priority Support:</strong> Faster response times for technical questions</li>
                  <li><strong>No Rate Limits:</strong> Higher rate limits compared to free tier</li>
                </ul>
              </div>
            </section>

            {/* GLM Coding Plan Pricing */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">GLM Coding Plan Pricing</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                As of 2025, Zhipu AI offers several tiers of the GLM Coding Plan:
              </p>

              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="bg-white border-2 border-gray-300 rounded-xl p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Basic Plan</h3>
                  <div className="text-3xl font-bold text-gray-900 mb-2">&yen;99<span className="text-lg text-gray-500">/mo</span></div>
                  <p className="text-sm text-gray-600 mb-4">~$13.50 USD/month</p>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>&yen;100 API credits included</li>
                    <li>GLM-4-Air &amp; GLM-4-Flash access</li>
                    <li>Web interface access</li>
                    <li>100 RPM rate limit</li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-emerald-50 to-white border-2 border-emerald-400 rounded-xl p-6 relative">
                  <div className="absolute -top-3 right-4 bg-emerald-600 text-white px-3 py-1 rounded-full text-xs font-bold">
                    POPULAR
                  </div>
                  <h3 className="text-lg font-bold text-emerald-700 mb-2">Pro Plan</h3>
                  <div className="text-3xl font-bold text-gray-900 mb-2">&yen;299<span className="text-lg text-gray-500">/mo</span></div>
                  <p className="text-sm text-gray-600 mb-4">~$40 USD/month</p>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>&yen;500 API credits included</li>
                    <li><strong>All GLM models</strong> (including Plus)</li>
                    <li>Web interface + advanced features</li>
                    <li>300 RPM rate limit</li>
                    <li>Priority email support</li>
                  </ul>
                </div>

                <div className="bg-white border-2 border-purple-300 rounded-xl p-6">
                  <h3 className="text-lg font-bold text-purple-700 mb-2">Enterprise</h3>
                  <div className="text-3xl font-bold text-gray-900 mb-2">Custom</div>
                  <p className="text-sm text-gray-600 mb-4">Contact sales</p>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>Custom credit allocation</li>
                    <li>All models + beta access</li>
                    <li>Dedicated account manager</li>
                    <li>Custom rate limits</li>
                    <li>24/7 priority support</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* GLM Coding Plan vs Google Gemini */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">GLM Coding Plan vs Google Gemini API Pro</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                This is the comparison many developers are searching for. Both offer AI coding assistance, but which is better for your needs?
              </p>

              <div className="overflow-x-auto my-8">
                <table className="min-w-full bg-white border border-gray-300 rounded-lg overflow-hidden">
                  <thead className="bg-gradient-to-r from-emerald-600 to-blue-600 text-white">
                    <tr>
                      <th className="px-6 py-4 text-left">Feature</th>
                      <th className="px-6 py-4 text-center">GLM Coding Plan (Pro)</th>
                      <th className="px-6 py-4 text-center">Google Gemini API Pro</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium">Monthly Cost</td>
                      <td className="px-6 py-4 text-center">&yen;299 (~$40)</td>
                      <td className="px-6 py-4 text-center">Free tier available, then pay-per-use</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium">Chinese Language Support</td>
                      <td className="px-6 py-4 text-center text-emerald-600 font-bold">Native</td>
                      <td className="px-6 py-4 text-center">Good but not native</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium">Context Window</td>
                      <td className="px-6 py-4 text-center">128K tokens</td>
                      <td className="px-6 py-4 text-center text-blue-600 font-bold">2M tokens</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium">Cursor Integration</td>
                      <td className="px-6 py-4 text-center">Supported via OpenAI-compatible API</td>
                      <td className="px-6 py-4 text-center">Native Gemini integration</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium">Pricing Model</td>
                      <td className="px-6 py-4 text-center">Subscription (predictable cost)</td>
                      <td className="px-6 py-4 text-center">Pay-as-you-go (variable cost)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Our Alternative */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Alternative: Pay-As-You-Go at 40% Off</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                While GLM Coding Plan has its merits, our proxy service offers a more flexible and cost-effective alternative:
              </p>

              <div className="bg-gradient-to-br from-emerald-600 to-emerald-800 text-white rounded-2xl p-8 my-8">
                <h3 className="text-2xl font-bold mb-4">Why Choose Our Proxy Over GLM Coding Plan?</h3>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-white/10 backdrop-blur rounded-lg p-5">
                    <h4 className="font-bold text-lg mb-3">Save More Money</h4>
                    <ul className="space-y-2 text-sm text-emerald-100">
                      <li>60% cheaper than official API (40% of official price)</li>
                      <li>No monthly subscription fee</li>
                      <li>Pay only for what you actually use</li>
                      <li>No wasted credits that expire</li>
                    </ul>
                  </div>

                  <div className="bg-white/10 backdrop-blur rounded-lg p-5">
                    <h4 className="font-bold text-lg mb-3">Better Service</h4>
                    <ul className="space-y-2 text-sm text-emerald-100">
                      <li>99.9% uptime SLA guarantee</li>
                      <li>No rate limiting or throttling</li>
                      <li>24/7 priority support (Chinese &amp; English)</li>
                      <li>Same API interface - zero code changes</li>
                    </ul>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/#subscribe"
                    className="inline-block bg-white text-emerald-600 px-8 py-4 rounded-lg font-semibold hover:bg-emerald-50 transition-colors text-center"
                  >
                    Get Started - Save 60% Now
                  </Link>
                  <Link
                    href="/pricing"
                    className="inline-block bg-emerald-500 text-white border-2 border-white px-8 py-4 rounded-lg font-semibold hover:bg-emerald-400 transition-colors text-center"
                  >
                    View Detailed Pricing
                  </Link>
                </div>
              </div>
            </section>

            {/* Cursor Integration */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">GLM API Integration with Cursor</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                <strong>Cursor</strong> is a popular AI-powered code editor. To use GLM API with Cursor:
              </p>

              <div className="bg-gray-900 rounded-xl p-6 mb-6 overflow-x-auto">
                <pre className="text-sm text-gray-100">
{`{
  "models": [
    {
      "name": "GLM-4-Plus",
      "provider": "openai",
      "apiKey": "your-glm-api-key-here",
      "baseURL": "https://open.bigmodel.cn/api/paas/v4",
      "model": "glm-4-plus"
    }
  ]
}`}
                </pre>
              </div>
            </section>

            {/* FAQ Section */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">GLM Coding Plan FAQ</h2>
              <div className="space-y-4">
                {faqItems.map((item, i) => (
                  <div key={i} className="bg-white border border-gray-300 rounded-lg p-6">
                    <h3 className="font-bold text-gray-900 mb-2">{item.q}</h3>
                    <p className="text-gray-700 text-sm">{item.a}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Related Resources */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">{t("glmCodingPlan.relatedResources")}</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <Link href="/glm-4-7-api" className="border border-gray-200 rounded-lg p-5 hover:border-emerald-400 hover:shadow-md transition-all group">
                  <h3 className="font-semibold text-gray-900 group-hover:text-emerald-600 mb-2">GLM 4.7 API Complete Guide</h3>
                  <p className="text-sm text-gray-600">Learn about GLM-4.7 features, capabilities, and integration examples</p>
                </Link>
                <Link href="/glm-free-api" className="border border-gray-200 rounded-lg p-5 hover:border-emerald-400 hover:shadow-md transition-all group">
                  <h3 className="font-semibold text-gray-900 group-hover:text-emerald-600 mb-2">GLM Free API Access</h3>
                  <p className="text-sm text-gray-600">How to get started with GLM API for free using GLM-4-Flash</p>
                </Link>
                <Link href="/glm-api-key" className="border border-gray-200 rounded-lg p-5 hover:border-emerald-400 hover:shadow-md transition-all group">
                  <h3 className="font-semibold text-gray-900 group-hover:text-emerald-600 mb-2">GLM API Key Setup</h3>
                  <p className="text-sm text-gray-600">Step-by-step guide to getting and using your GLM API key</p>
                </Link>
                <Link href="/pricing" className="border border-gray-200 rounded-lg p-5 hover:border-emerald-400 hover:shadow-md transition-all group">
                  <h3 className="font-semibold text-gray-900 group-hover:text-emerald-600 mb-2">Our Pricing (40% Off)</h3>
                  <p className="text-sm text-gray-600">Compare our proxy pricing with GLM Coding Plan and official API</p>
                </Link>
              </div>
            </section>

          </div>
        </article>

        {/* CTA Section */}
        <section className="px-6 py-16 bg-gradient-to-br from-emerald-600 to-emerald-800">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              {t("glmCodingPlan.cta.title")}
            </h2>
            <p className="text-lg text-emerald-100 mb-8">
              {t("glmCodingPlan.cta.description")}
            </p>
            <div className="max-w-md mx-auto">
              <EmailForm source="glm-coding-plan" />
            </div>
            <p className="mt-6 text-emerald-100 text-sm">
              Questions? <Link href="/pricing" className="underline hover:text-white">Compare pricing</Link> or <Link href="/docs/text" className="underline hover:text-white">read the docs</Link>
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
