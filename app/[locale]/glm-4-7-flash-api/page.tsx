import EmailForm from "@/components/EmailForm";
import { Link } from "@/i18n/navigation";
import { getTranslations } from "next-intl/server";
import { routing } from "@/i18n/routing";

const baseUrl = "https://glm-api.org";
const pagePath = "/glm-4-7-flash-api";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata.glm47FlashApi" });
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

export default async function GLM47FlashAPIPage() {
  const t = await getTranslations("landing");
  const faqItems = t.raw("glm47FlashApi.faq.items") as Array<{ q: string; a: string }>;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": t("glm47FlashApi.hero.title"),
    "description": t("glm47FlashApi.hero.description"),
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
              <li className="text-gray-900 font-medium">{t("glm47FlashApi.breadcrumb")}</li>
            </ol>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="px-6 py-16 bg-gradient-to-br from-emerald-50 via-white to-emerald-50">
          <div className="mx-auto max-w-4xl">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              {t("glm47FlashApi.hero.title")}
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              {t("glm47FlashApi.hero.description")}
            </p>
          </div>
        </section>

        {/* Main Content */}
        <article className="px-6 py-12">
          <div className="mx-auto max-w-4xl prose prose-lg prose-emerald">

            {/* What is GLM 4.7 Flash */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">What is GLM 4.7 Flash?</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                <strong>GLM 4.7 Flash</strong> (model name: <code className="bg-gray-100 px-2 py-1 rounded text-sm">glm-4-flash</code>) is Zhipu AI&apos;s speed-optimized language model designed for applications where <strong>response time is critical</strong>. It&apos;s part of the GLM-4 family but uses distillation and quantization techniques to deliver <strong>3-5x faster inference</strong> while maintaining impressive quality.
              </p>

              <div className="bg-emerald-50 border-l-4 border-emerald-500 p-6 my-6 rounded-r-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Key Highlights</h3>
                <ul className="space-y-2 text-gray-700">
                  <li><strong>Ultra-Fast Inference:</strong> Average response time under 1 second for typical queries</li>
                  <li><strong>Completely Free:</strong> No cost on official Zhipu AI platform (with rate limits)</li>
                  <li><strong>High Quality:</strong> 85-90% of GLM-4-Plus quality at 5x the speed</li>
                  <li><strong>128K Context:</strong> Same long-context capability as other GLM-4 models</li>
                  <li><strong>Multilingual:</strong> Strong Chinese and English support</li>
                </ul>
              </div>

              <p className="text-gray-700 leading-relaxed">
                The <strong>GLM 4.7 Flash API</strong> is ideal for chatbots, real-time assistants, customer service automation, and any application where users expect instant responses.
              </p>
            </section>

            {/* GLM 4.7 Flash vs GLM 4.7 */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">GLM 4.7 Flash vs GLM 4.7 (Plus)</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Understanding the trade-offs between speed and quality helps you choose the right model:
              </p>

              <div className="overflow-x-auto my-8">
                <table className="min-w-full bg-white border border-gray-300 rounded-lg overflow-hidden">
                  <thead className="bg-emerald-600 text-white">
                    <tr>
                      <th className="px-6 py-4 text-left">Feature</th>
                      <th className="px-6 py-4 text-center">GLM-4-Flash</th>
                      <th className="px-6 py-4 text-center">GLM-4-Air</th>
                      <th className="px-6 py-4 text-center">GLM-4-Plus</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium">Inference Speed</td>
                      <td className="px-6 py-4 text-center text-emerald-600 font-bold">Fastest</td>
                      <td className="px-6 py-4 text-center">Fast</td>
                      <td className="px-6 py-4 text-center">Moderate</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium">Average Response Time</td>
                      <td className="px-6 py-4 text-center text-emerald-600 font-bold">~0.8s</td>
                      <td className="px-6 py-4 text-center">~1.5s</td>
                      <td className="px-6 py-4 text-center">~2.5s</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium">Quality Score</td>
                      <td className="px-6 py-4 text-center">85/100</td>
                      <td className="px-6 py-4 text-center">92/100</td>
                      <td className="px-6 py-4 text-center text-emerald-600 font-bold">98/100</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium">Pricing (Official)</td>
                      <td className="px-6 py-4 text-center text-emerald-600 font-bold">FREE</td>
                      <td className="px-6 py-4 text-center">&yen;0.001/1K tokens</td>
                      <td className="px-6 py-4 text-center">&yen;0.05/1K tokens</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium">Context Window</td>
                      <td className="px-6 py-4 text-center">128K tokens</td>
                      <td className="px-6 py-4 text-center">128K tokens</td>
                      <td className="px-6 py-4 text-center">128K tokens</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* GLM 4.7 Flash API Pricing */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">GLM 4.7 Flash API Pricing</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                One of the biggest advantages of <strong>GLM-4-Flash</strong> is its pricing model:
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-gradient-to-br from-emerald-600 to-emerald-800 text-white rounded-2xl p-8">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-bold">Official Zhipu AI</h3>
                    <span className="bg-white text-emerald-600 px-4 py-2 rounded-full font-bold text-sm">FREE</span>
                  </div>
                  <p className="text-emerald-100 mb-4">
                    GLM-4-Flash is <strong>completely free</strong> on the official platform with reasonable rate limits.
                  </p>
                  <ul className="space-y-2 text-emerald-100 text-sm">
                    <li>Free tier: 60 RPM, 1M tokens/day</li>
                    <li>No credit card required</li>
                    <li>Perfect for learning and prototyping</li>
                  </ul>
                  <Link
                    href="/glm-free-api"
                    className="mt-6 inline-block bg-white text-emerald-600 px-6 py-3 rounded-lg font-semibold hover:bg-emerald-50 transition-colors"
                  >
                    Learn About Free Access
                  </Link>
                </div>

                <div className="bg-gradient-to-br from-blue-600 to-blue-800 text-white rounded-2xl p-8 border-4 border-yellow-400">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-bold">Our Proxy Service</h3>
                    <span className="bg-yellow-400 text-blue-900 px-4 py-2 rounded-full font-bold text-sm">BEST VALUE</span>
                  </div>
                  <p className="text-blue-100 mb-4">
                    For <strong>high-volume production apps</strong>, our proxy offers better reliability and even lower effective costs.
                  </p>
                  <ul className="space-y-2 text-blue-100 text-sm">
                    <li>99.9% uptime SLA guarantee</li>
                    <li>No rate limiting or throttling</li>
                    <li>Access to all GLM models at 40% off</li>
                  </ul>
                  <Link
                    href="/#subscribe"
                    className="mt-6 inline-block bg-yellow-400 text-blue-900 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition-colors"
                  >
                    Get Enterprise Access
                  </Link>
                </div>
              </div>
            </section>

            {/* Use Cases */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Use Cases for GLM Flash API</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Conversational Chatbots</h3>
                  <p className="text-gray-600 mb-3">
                    Real-time chat applications where users expect instant responses. Sub-second latency creates a natural conversation flow.
                  </p>
                </div>

                <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Mobile Applications</h3>
                  <p className="text-gray-600 mb-3">
                    Mobile apps with limited bandwidth benefit from GLM-4-Flash&apos;s efficiency. Faster responses = better user experience.
                  </p>
                </div>

                <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Batch Processing</h3>
                  <p className="text-gray-600 mb-3">
                    Process thousands of items quickly. GLM-4-Flash can handle 5x more throughput than GLM-4-Plus in the same timeframe.
                  </p>
                </div>

                <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Content Moderation</h3>
                  <p className="text-gray-600 mb-3">
                    Automatically filter user-generated content for compliance. Speed is essential to avoid user friction.
                  </p>
                </div>
              </div>
            </section>

            {/* Code Example */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">How to Use GLM 4.7 Flash API</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Using the <strong>GLM-4-Flash API</strong> is identical to other GLM models - just specify the model name:
              </p>

              <div className="bg-gray-900 rounded-xl p-6 overflow-x-auto mb-6">
                <pre className="text-sm text-gray-100">
{`import requests

API_URL = "https://open.bigmodel.cn/api/paas/v4/chat/completions"
API_KEY = "your-api-key"

def chat_with_flash(user_message):
    headers = {
        "Authorization": f"Bearer {API_KEY}",
        "Content-Type": "application/json"
    }

    data = {
        "model": "glm-4-flash",  # The key difference!
        "messages": [
            {"role": "user", "content": user_message}
        ],
        "temperature": 0.7,
        "max_tokens": 1000
    }

    response = requests.post(API_URL, headers=headers, json=data)
    return response.json()['choices'][0]['message']['content']

answer = chat_with_flash("What is machine learning?")
print(answer)`}
                </pre>
              </div>
            </section>

            {/* Related Resources */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">{t("glm47FlashApi.relatedResources")}</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <Link href="/glm-4-7-api" className="border border-gray-200 rounded-lg p-5 hover:border-emerald-400 hover:shadow-md transition-all group">
                  <h3 className="font-semibold text-gray-900 group-hover:text-emerald-600 mb-2">GLM 4.7 API Complete Guide</h3>
                  <p className="text-sm text-gray-600">Learn about all GLM-4.7 models including Plus and Air variants</p>
                </Link>
                <Link href="/glm-free-api" className="border border-gray-200 rounded-lg p-5 hover:border-emerald-400 hover:shadow-md transition-all group">
                  <h3 className="font-semibold text-gray-900 group-hover:text-emerald-600 mb-2">GLM Free API Access</h3>
                  <p className="text-sm text-gray-600">How to get free access to GLM-4-Flash and other free models</p>
                </Link>
                <Link href="/glm-api-key" className="border border-gray-200 rounded-lg p-5 hover:border-emerald-400 hover:shadow-md transition-all group">
                  <h3 className="font-semibold text-gray-900 group-hover:text-emerald-600 mb-2">GLM API Key Setup</h3>
                  <p className="text-sm text-gray-600">Step-by-step guide to obtaining your GLM API key</p>
                </Link>
                <Link href="/docs/text" className="border border-gray-200 rounded-lg p-5 hover:border-emerald-400 hover:shadow-md transition-all group">
                  <h3 className="font-semibold text-gray-900 group-hover:text-emerald-600 mb-2">API Documentation</h3>
                  <p className="text-sm text-gray-600">Complete technical documentation for GLM-4 API</p>
                </Link>
              </div>
            </section>

          </div>
        </article>

        {/* CTA Section */}
        <section className="px-6 py-16 bg-gradient-to-br from-emerald-600 to-emerald-800">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              {t("glm47FlashApi.cta.title")}
            </h2>
            <p className="text-lg text-emerald-100 mb-8">
              {t("glm47FlashApi.cta.description")}
            </p>
            <div className="max-w-md mx-auto">
              <EmailForm source="glm-4-7-flash-api" />
            </div>
            <p className="mt-6 text-emerald-100 text-sm">
              Questions? <Link href="/pricing" className="underline hover:text-white">View pricing</Link> or <Link href="/docs/text" className="underline hover:text-white">read the docs</Link>
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
