import EmailForm from "@/components/EmailForm";
import { Link } from "@/i18n/navigation";
import { getTranslations } from "next-intl/server";
import { routing } from "@/i18n/routing";

const baseUrl = "https://glm-api.org";
const pagePath = "/glm-free-api";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata.glmFreeApi" });
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

export default async function GLMFreeAPIPage() {
  const t = await getTranslations("landing");
  const faqItems = t.raw("glmFreeApi.faq.items") as Array<{ q: string; a: string }>;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": t("glmFreeApi.hero.title"),
    "description": t("glmFreeApi.hero.description"),
    "author": {
      "@type": "Organization",
      "name": "GLM API Proxy"
    },
    "publisher": {
      "@type": "Organization",
      "name": "GLM API Proxy",
      "logo": {
        "@type": "ImageObject",
        "url": "https://glm-api.org/logo.png"
      }
    },
    "datePublished": "2025-02-14",
    "dateModified": "2025-02-14",
    "mainEntity": {
      "@type": "FAQPage",
      "mainEntity": faqItems.map((item) => ({
        "@type": "Question",
        "name": item.q,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": item.a,
        },
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
              <li className="text-gray-900 font-medium">{t("glmFreeApi.breadcrumb")}</li>
            </ol>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="px-6 py-16 bg-gradient-to-br from-emerald-50 via-white to-emerald-50">
          <div className="mx-auto max-w-4xl">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              {t("glmFreeApi.hero.title")}
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              {t("glmFreeApi.hero.description")}
            </p>
          </div>
        </section>

        {/* Main Content */}
        <article className="px-6 py-12">
          <div className="mx-auto max-w-4xl prose prose-lg prose-emerald">

            {/* Is GLM API Free? */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Is GLM API Free?</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Yes! <strong>GLM API does offer free access</strong> to certain models, but with limitations. Zhipu AI (智谱AI) provides the <strong>GLM-4-Flash</strong> model completely free of charge, making it an excellent choice for developers who want to experiment with AI capabilities without upfront costs.
              </p>

              <div className="bg-emerald-50 border-l-4 border-emerald-500 p-6 my-6 rounded-r-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">✅ What's Free?</h3>
                <ul className="space-y-2 text-gray-700">
                  <li><strong>GLM-4-Flash:</strong> Completely free with reasonable rate limits</li>
                  <li><strong>New User Credits:</strong> Free trial credits when you sign up (typically ¥18-50)</li>
                  <li><strong>Development Testing:</strong> Free tier perfect for prototyping and learning</li>
                </ul>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 my-6 rounded-r-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">⚠️ What's Not Free?</h3>
                <ul className="space-y-2 text-gray-700">
                  <li><strong>GLM-4-Plus:</strong> Premium model requires payment</li>
                  <li><strong>GLM-4-Air:</strong> Not free (but very affordable at ¥0.001/1K tokens)</li>
                  <li><strong>Multimodal Models:</strong> GLM-4V, CogView, CogVideoX all require payment</li>
                  <li><strong>High Volume Usage:</strong> Once you exceed free tier limits, charges apply</li>
                </ul>
              </div>

              <p className="text-gray-700 leading-relaxed">
                The <strong>GLM free API</strong> is ideal for students, hobbyists, and developers building proof-of-concept projects. For production applications with higher throughput requirements, you'll likely need a paid plan.
              </p>
            </section>

            {/* Free vs Paid Comparison */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Free vs Paid GLM API Models</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Understanding the differences between free and paid GLM models helps you choose the right option for your use case:
              </p>

              <div className="overflow-x-auto my-8">
                <table className="min-w-full bg-white border border-gray-300 rounded-lg overflow-hidden">
                  <thead className="bg-emerald-600 text-white">
                    <tr>
                      <th className="px-6 py-4 text-left">Feature</th>
                      <th className="px-6 py-4 text-center">GLM-4-Flash (Free)</th>
                      <th className="px-6 py-4 text-center">GLM-4-Air (Paid)</th>
                      <th className="px-6 py-4 text-center">GLM-4-Plus (Paid)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium">Pricing</td>
                      <td className="px-6 py-4 text-center text-emerald-600 font-bold">FREE</td>
                      <td className="px-6 py-4 text-center">¥0.0004/1K tokens (our price)</td>
                      <td className="px-6 py-4 text-center">¥0.02/1K tokens (our price)</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium">Speed</td>
                      <td className="px-6 py-4 text-center">⚡ Very Fast</td>
                      <td className="px-6 py-4 text-center">🚀 Fast</td>
                      <td className="px-6 py-4 text-center">⭐ Balanced</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium">Quality</td>
                      <td className="px-6 py-4 text-center">Good</td>
                      <td className="px-6 py-4 text-center">Better</td>
                      <td className="px-6 py-4 text-center">Best</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium">Context Window</td>
                      <td className="px-6 py-4 text-center">128K tokens</td>
                      <td className="px-6 py-4 text-center">128K tokens</td>
                      <td className="px-6 py-4 text-center">128K tokens</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium">Rate Limits</td>
                      <td className="px-6 py-4 text-center">⚠️ Limited</td>
                      <td className="px-6 py-4 text-center">✓ High</td>
                      <td className="px-6 py-4 text-center">✓ Very High</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium">Best For</td>
                      <td className="px-6 py-4 text-center text-sm">Testing, learning, low-volume apps</td>
                      <td className="px-6 py-4 text-center text-sm">Production chatbots, high-volume</td>
                      <td className="px-6 py-4 text-center text-sm">Complex reasoning, coding, analysis</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mt-8">
                <div className="bg-white border-2 border-emerald-200 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-emerald-600 mb-4">✅ When to Use Free (GLM-4-Flash)</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Learning and experimenting with AI</li>
                    <li>• Building proof-of-concept prototypes</li>
                    <li>• Low-traffic personal projects</li>
                    <li>• Simple chatbots with basic responses</li>
                    <li>• Educational applications</li>
                    <li>• Testing API integration before scaling</li>
                  </ul>
                </div>

                <div className="bg-white border-2 border-blue-200 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-blue-600 mb-4">🚀 When to Upgrade to Paid</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Production applications with users</li>
                    <li>• Higher throughput requirements</li>
                    <li>• Need for advanced reasoning/coding</li>
                    <li>• Commercial products requiring SLA</li>
                    <li>• Complex multi-turn conversations</li>
                    <li>• Applications requiring maximum quality</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* How to Get Free Access */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">How to Get GLM Free API Access</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Follow these simple steps to start using the GLM free API:
              </p>

              <div className="space-y-6">
                <div className="bg-gradient-to-r from-emerald-50 to-white border-l-4 border-emerald-500 p-6 rounded-r-lg">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Step 1: Register an Account</h3>
                  <p className="text-gray-700 mb-2">
                    Visit <a href="https://open.bigmodel.cn" className="text-emerald-600 hover:underline font-semibold" target="_blank" rel="noopener noreferrer">open.bigmodel.cn</a> and create a free account.
                  </p>
                  <ul className="list-disc list-inside text-gray-600 space-y-1 ml-4">
                    <li>Use your email or phone number</li>
                    <li>Complete SMS/email verification</li>
                    <li>No credit card required for free tier</li>
                  </ul>
                </div>

                <div className="bg-gradient-to-r from-emerald-50 to-white border-l-4 border-emerald-500 p-6 rounded-r-lg">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Step 2: Get Your API Key</h3>
                  <p className="text-gray-700 mb-2">
                    Navigate to the API Keys section in your dashboard:
                  </p>
                  <ul className="list-disc list-inside text-gray-600 space-y-1 ml-4">
                    <li>Click "Create New API Key"</li>
                    <li>Give it a descriptive name (e.g., "My Free App")</li>
                    <li>Copy and save the key securely</li>
                    <li>⚠️ You can only see the key once - save it immediately!</li>
                  </ul>
                  <p className="text-sm text-gray-500 mt-3 italic">
                    Need help? Check our detailed <Link href="/glm-api-key" className="text-emerald-600 hover:underline">GLM API Key guide</Link>.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-emerald-50 to-white border-l-4 border-emerald-500 p-6 rounded-r-lg">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Step 3: Make Your First API Call</h3>
                  <p className="text-gray-700 mb-4">
                    Use the free GLM-4-Flash model with this Python example:
                  </p>

                  <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
                    <pre className="text-sm text-gray-100">
{`import requests

API_URL = "https://open.bigmodel.cn/api/paas/v4/chat/completions"
API_KEY = "your-api-key-here"

headers = {
    "Authorization": f"Bearer {API_KEY}",
    "Content-Type": "application/json"
}

data = {
    "model": "glm-4-flash",  # FREE model!
    "messages": [
        {"role": "user", "content": "Hello! Tell me a fun fact."}
    ]
}

response = requests.post(API_URL, headers=headers, json=data)
print(response.json()['choices'][0]['message']['content'])`}
                    </pre>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-emerald-50 to-white border-l-4 border-emerald-500 p-6 rounded-r-lg">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Step 4: Monitor Your Usage</h3>
                  <p className="text-gray-700 mb-2">
                    Keep track of your free tier usage:
                  </p>
                  <ul className="list-disc list-inside text-gray-600 space-y-1 ml-4">
                    <li>Check the usage dashboard regularly</li>
                    <li>Set up usage alerts if available</li>
                    <li>Plan for upgrade when approaching limits</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Free API Limitations */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">GLM Free API Limitations</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                While the <strong>GLM free API</strong> is generous, it comes with certain restrictions you should be aware of:
              </p>

              <div className="space-y-4">
                <div className="bg-white border border-gray-300 rounded-lg p-5">
                  <h3 className="font-bold text-gray-900 mb-2 flex items-center">
                    <span className="text-yellow-500 mr-2">⚠️</span>
                    Rate Limits
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Free tier typically allows <strong>60 requests per minute (RPM)</strong> and <strong>1 million tokens per day</strong>. Exceeding these limits results in 429 errors.
                  </p>
                </div>

                <div className="bg-white border border-gray-300 rounded-lg p-5">
                  <h3 className="font-bold text-gray-900 mb-2 flex items-center">
                    <span className="text-yellow-500 mr-2">⚠️</span>
                    Model Availability
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Only <strong>GLM-4-Flash</strong> is truly free. Advanced models like GLM-4-Plus, GLM-4V-Plus, and CogView require payment.
                  </p>
                </div>

                <div className="bg-white border border-gray-300 rounded-lg p-5">
                  <h3 className="font-bold text-gray-900 mb-2 flex items-center">
                    <span className="text-yellow-500 mr-2">⚠️</span>
                    No SLA Guarantees
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Free tier comes with <strong>no uptime guarantees</strong>. Service may be throttled during peak hours, and priority is given to paid users.
                  </p>
                </div>

                <div className="bg-white border border-gray-300 rounded-lg p-5">
                  <h3 className="font-bold text-gray-900 mb-2 flex items-center">
                    <span className="text-yellow-500 mr-2">⚠️</span>
                    Quality Trade-offs
                  </h3>
                  <p className="text-gray-600 text-sm">
                    GLM-4-Flash optimizes for speed over quality. For complex reasoning, coding, or nuanced language understanding, paid models perform significantly better.
                  </p>
                </div>

                <div className="bg-white border border-gray-300 rounded-lg p-5">
                  <h3 className="font-bold text-gray-900 mb-2 flex items-center">
                    <span className="text-yellow-500 mr-2">⚠️</span>
                    Support Limitations
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Free users receive <strong>community support only</strong>. Paid plans include priority technical support and dedicated account managers.
                  </p>
                </div>
              </div>
            </section>

            {/* Affordable Alternative */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Affordable Alternative: 40% Off All GLM Models</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                While the free tier is great for getting started, production applications need reliability and performance. That's where our proxy service comes in.
              </p>

              <div className="bg-gradient-to-br from-emerald-600 to-emerald-800 text-white rounded-2xl p-8 my-8">
                <h3 className="text-2xl font-bold mb-4">🎯 Get 60% Savings on Paid Models</h3>
                <p className="text-emerald-100 mb-6 text-lg">
                  Access all GLM models including GLM-4-Plus, GLM-4-Air, GLM-4V, CogView, and CogVideoX at <strong>only 40% of official pricing</strong>.
                </p>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-white/10 backdrop-blur rounded-lg p-4">
                    <h4 className="font-bold mb-2">Why Choose Our Service?</h4>
                    <ul className="space-y-1 text-sm text-emerald-100">
                      <li>✓ Same API interface - zero code changes</li>
                      <li>✓ 99.9% uptime SLA guarantee</li>
                      <li>✓ 24/7 priority support</li>
                      <li>✓ No rate limiting hassles</li>
                      <li>✓ Transparent usage billing</li>
                    </ul>
                  </div>

                  <div className="bg-white/10 backdrop-blur rounded-lg p-4">
                    <h4 className="font-bold mb-2">Pricing Example</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between border-b border-white/20 pb-1">
                        <span>GLM-4-Air</span>
                        <span className="font-mono">¥0.0004/1K</span>
                      </div>
                      <div className="flex justify-between border-b border-white/20 pb-1">
                        <span>GLM-4-Plus</span>
                        <span className="font-mono">¥0.02/1K</span>
                      </div>
                      <div className="flex justify-between">
                        <span>GLM-4V-Plus</span>
                        <span className="font-mono">¥0.02/1K</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/pricing"
                    className="inline-block bg-white text-emerald-600 px-6 py-3 rounded-lg font-semibold hover:bg-emerald-50 transition-colors text-center"
                  >
                    View Full Pricing
                  </Link>
                  <Link
                    href="/#subscribe"
                    className="inline-block bg-emerald-500 text-white border-2 border-white px-6 py-3 rounded-lg font-semibold hover:bg-emerald-400 transition-colors text-center"
                  >
                    Get Started Now
                  </Link>
                </div>
              </div>

              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Cost Comparison: Free vs Our Service</h3>
              <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="px-6 py-4 text-left">Usage Scenario</th>
                      <th className="px-6 py-4 text-right">Free Tier</th>
                      <th className="px-6 py-4 text-right">Our Service (40% off)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="px-6 py-4">1M tokens/month (GLM-4-Air)</td>
                      <td className="px-6 py-4 text-right">Limited availability</td>
                      <td className="px-6 py-4 text-right text-emerald-600 font-bold">¥0.40</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="px-6 py-4">10M tokens/month (GLM-4-Plus)</td>
                      <td className="px-6 py-4 text-right text-red-600">Not available</td>
                      <td className="px-6 py-4 text-right text-emerald-600 font-bold">¥200</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4">100 image generations (CogView)</td>
                      <td className="px-6 py-4 text-right text-red-600">Not available</td>
                      <td className="px-6 py-4 text-right text-emerald-600 font-bold">¥40</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-gray-700 mt-6">
                <strong>Bottom line:</strong> Start with the free tier to learn and experiment, then upgrade to our discounted service when you're ready to scale. You'll save 60% compared to official pricing while getting enterprise-grade reliability.
              </p>
            </section>

            {/* Related Resources */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Related Resources</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <Link
                  href="/glm-4-7-api"
                  className="border border-gray-200 rounded-lg p-5 hover:border-emerald-400 hover:shadow-md transition-all group"
                >
                  <h3 className="font-semibold text-gray-900 group-hover:text-emerald-600 mb-2">
                    GLM 4.7 API Complete Guide →
                  </h3>
                  <p className="text-sm text-gray-600">
                    Learn about all GLM-4.7 features, capabilities, and integration examples
                  </p>
                </Link>

                <Link
                  href="/glm-api-key"
                  className="border border-gray-200 rounded-lg p-5 hover:border-emerald-400 hover:shadow-md transition-all group"
                >
                  <h3 className="font-semibold text-gray-900 group-hover:text-emerald-600 mb-2">
                    GLM API Key Setup Guide →
                  </h3>
                  <p className="text-sm text-gray-600">
                    Step-by-step instructions for obtaining and configuring your GLM API key
                  </p>
                </Link>

                <Link
                  href="/glm-4-7-flash-api"
                  className="border border-gray-200 rounded-lg p-5 hover:border-emerald-400 hover:shadow-md transition-all group"
                >
                  <h3 className="font-semibold text-gray-900 group-hover:text-emerald-600 mb-2">
                    GLM 4.7 Flash API (Free Model) →
                  </h3>
                  <p className="text-sm text-gray-600">
                    Deep dive into the free GLM-4-Flash model - speed and performance analysis
                  </p>
                </Link>

                <Link
                  href="/pricing"
                  className="border border-gray-200 rounded-lg p-5 hover:border-emerald-400 hover:shadow-md transition-all group"
                >
                  <h3 className="font-semibold text-gray-900 group-hover:text-emerald-600 mb-2">
                    Full Pricing Comparison →
                  </h3>
                  <p className="text-sm text-gray-600">
                    Compare all GLM models pricing with our 40% discount offer
                  </p>
                </Link>
              </div>
            </section>

          </div>
        </article>

        {/* CTA Section */}
        <section className="px-6 py-16 bg-gradient-to-br from-emerald-600 to-emerald-800">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              {t("glmFreeApi.cta.title")}
            </h2>
            <p className="text-lg text-emerald-100 mb-8">
              {t("glmFreeApi.cta.description")}
            </p>
            <div className="max-w-md mx-auto">
              <EmailForm source="glm-free-api" />
            </div>
            <p className="mt-6 text-emerald-100 text-sm">
              Questions? <Link href="/pricing" className="underline hover:text-white">Check pricing</Link> or <Link href="/docs/text" className="underline hover:text-white">read the docs</Link>
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
