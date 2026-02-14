import EmailForm from "@/components/EmailForm";
import { Link } from "@/i18n/navigation";
import { getTranslations } from "next-intl/server";
import { routing } from "@/i18n/routing";

const baseUrl = "https://glm-api.org";
const pagePath = "/glm-api-key";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata.glmApiKey" });
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

export default async function GLMAPIKeyPage() {
  const t = await getTranslations("landing");
  const faqItems = t.raw("glmApiKey.faq.items") as Array<{ q: string; a: string }>;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": t("glmApiKey.hero.title"),
    "description": t("glmApiKey.hero.description"),
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
              <li className="text-gray-900 font-medium">{t("glmApiKey.breadcrumb")}</li>
            </ol>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="px-6 py-16 bg-gradient-to-br from-emerald-50 via-white to-emerald-50">
          <div className="mx-auto max-w-4xl">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              {t("glmApiKey.hero.title")}
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              {t("glmApiKey.hero.description")}
            </p>
          </div>
        </section>

        {/* Main Content */}
        <article className="px-6 py-12">
          <div className="mx-auto max-w-4xl prose prose-lg prose-emerald">

            {/* What is a GLM API Key */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">What is a GLM API Key?</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                A <strong>GLM API key</strong> (also called <strong>GLM 4.7 API key</strong> or <strong>Zhipu AI API key</strong>) is a unique authentication token that allows you to access Zhipu AI's GLM models programmatically. Think of it as a password that identifies your account and authorizes API requests.
              </p>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 my-6 rounded-r-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">🔑 Key Characteristics</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>
                    <strong>Format:</strong> Typically a long alphanumeric string (e.g., <code className="bg-gray-100 px-2 py-1 rounded text-sm">sk-abcd1234efgh5678...</code>)
                  </li>
                  <li>
                    <strong>Purpose:</strong> Authenticates your requests to GLM API endpoints
                  </li>
                  <li>
                    <strong>Billing:</strong> Usage is tracked and billed to your account via this key
                  </li>
                  <li>
                    <strong>Security:</strong> Must be kept secret - anyone with your key can make API calls on your behalf
                  </li>
                  <li>
                    <strong>Scope:</strong> Each key can be configured with different permissions and rate limits
                  </li>
                </ul>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 my-6 rounded-r-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">⚠️ Important Security Note</h3>
                <p className="text-gray-700">
                  Your <strong>GLM API key</strong> should be treated like a password. Never commit it to public repositories, share it in forums, or expose it in client-side code. Always store it in environment variables or secure secret management systems.
                </p>
              </div>
            </section>

            {/* How to Get Your GLM API Key */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">How to Get Your GLM API Key</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Follow these detailed steps to obtain your <strong>GLM API key</strong> from Zhipu AI:
              </p>

              <div className="space-y-6">
                {/* Step 1 */}
                <div className="bg-gradient-to-r from-emerald-50 to-white border-2 border-emerald-200 rounded-xl p-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-10 h-10 bg-emerald-600 text-white rounded-full flex items-center justify-center font-bold text-lg mr-4">
                      1
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-3">Create a Zhipu AI Account</h3>
                      <p className="text-gray-700 mb-3">
                        Navigate to <a href="https://open.bigmodel.cn" className="text-emerald-600 hover:underline font-semibold" target="_blank" rel="noopener noreferrer">open.bigmodel.cn</a> (智谱AI开放平台)
                      </p>
                      <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                        <li>Click "注册" (Register) or "登录" (Login) in the top right corner</li>
                        <li>Choose registration method: Phone number (手机号) or Email (邮箱)</li>
                        <li>Enter your phone/email and verification code sent to you</li>
                        <li>Set a secure password (at least 8 characters, mix of letters and numbers)</li>
                        <li>Accept the terms of service</li>
                      </ul>
                      <div className="mt-4 bg-white border border-emerald-200 rounded-lg p-4">
                        <p className="text-sm text-gray-600">
                          <strong>💡 Tip:</strong> If you're outside China, use email registration as phone verification may require a Chinese phone number.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="bg-gradient-to-r from-emerald-50 to-white border-2 border-emerald-200 rounded-xl p-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-10 h-10 bg-emerald-600 text-white rounded-full flex items-center justify-center font-bold text-lg mr-4">
                      2
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-3">Complete Identity Verification (Optional)</h3>
                      <p className="text-gray-700 mb-3">
                        Some features require identity verification:
                      </p>
                      <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                        <li>Navigate to "个人中心" (Personal Center) in your dashboard</li>
                        <li>Click "实名认证" (Real-name Verification) if prompted</li>
                        <li>For Chinese users: Submit ID card information</li>
                        <li>For international users: Submit passport or other ID</li>
                        <li>Wait 1-3 business days for approval</li>
                      </ul>
                      <div className="mt-4 bg-white border border-emerald-200 rounded-lg p-4">
                        <p className="text-sm text-gray-600">
                          <strong>Note:</strong> Basic API access doesn't require verification, but it may be needed for higher rate limits or certain paid features.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="bg-gradient-to-r from-emerald-50 to-white border-2 border-emerald-200 rounded-xl p-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-10 h-10 bg-emerald-600 text-white rounded-full flex items-center justify-center font-bold text-lg mr-4">
                      3
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-3">Navigate to API Keys Section</h3>
                      <p className="text-gray-700 mb-3">
                        Once logged in, find the API management area:
                      </p>
                      <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                        <li>Look for "API密钥" (API Keys) or "密钥管理" (Key Management) in the sidebar</li>
                        <li>Alternatively, go to "工作台" (Workbench) → "API管理" (API Management)</li>
                        <li>You should see a list of existing API keys (empty if you're a new user)</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Step 4 */}
                <div className="bg-gradient-to-r from-emerald-50 to-white border-2 border-emerald-200 rounded-xl p-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-10 h-10 bg-emerald-600 text-white rounded-full flex items-center justify-center font-bold text-lg mr-4">
                      4
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-3">Generate a New API Key</h3>
                      <p className="text-gray-700 mb-3">
                        Create your first GLM API key:
                      </p>
                      <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                        <li>Click "创建新密钥" (Create New Key) or "+ 添加密钥" (+ Add Key)</li>
                        <li>Give your key a descriptive name (e.g., "Production App", "Development", "Testing")</li>
                        <li>Optionally set permissions/scopes if the interface allows</li>
                        <li>Click "确定" (Confirm) or "创建" (Create)</li>
                      </ul>
                      <div className="mt-4 bg-red-50 border-2 border-red-400 rounded-lg p-4">
                        <p className="text-sm text-red-700 font-semibold">
                          🚨 <strong>CRITICAL:</strong> The API key will only be shown ONCE after creation. Copy it immediately and store it securely. If you lose it, you'll need to generate a new key.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Step 5 */}
                <div className="bg-gradient-to-r from-emerald-50 to-white border-2 border-emerald-200 rounded-xl p-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-10 h-10 bg-emerald-600 text-white rounded-full flex items-center justify-center font-bold text-lg mr-4">
                      5
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-3">Copy and Store Your API Key</h3>
                      <p className="text-gray-700 mb-3">
                        Securely save your new GLM API key:
                      </p>
                      <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                        <li>Click the "复制" (Copy) button next to your new API key</li>
                        <li>Paste it into a secure password manager (1Password, LastPass, etc.)</li>
                        <li>Or save it in your project's <code className="bg-gray-100 px-2 py-1 rounded text-sm">.env</code> file immediately</li>
                        <li>Never save it in plain text files or commit it to version control</li>
                      </ul>
                      <div className="mt-4 bg-white border border-gray-200 rounded-lg p-4">
                        <p className="text-sm text-gray-700 mb-2"><strong>Example .env file:</strong></p>
                        <pre className="bg-gray-900 text-gray-100 p-3 rounded text-xs overflow-x-auto">
{`# .env file (never commit this to git!)
GLM_API_KEY=sk-your-actual-key-here
GLM_API_URL=https://open.bigmodel.cn/api/paas/v4`}
                        </pre>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Step 6 */}
                <div className="bg-gradient-to-r from-emerald-50 to-white border-2 border-emerald-200 rounded-xl p-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-10 h-10 bg-emerald-600 text-white rounded-full flex items-center justify-center font-bold text-lg mr-4">
                      6
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-3">Test Your API Key</h3>
                      <p className="text-gray-700 mb-3">
                        Verify that your key works with a simple test request:
                      </p>

                      <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto mt-3">
                        <pre className="text-sm text-gray-100">
{`curl https://open.bigmodel.cn/api/paas/v4/chat/completions \\
  -H "Authorization: Bearer YOUR_API_KEY_HERE" \\
  -H "Content-Type: application/json" \\
  -d '{
    "model": "glm-4-flash",
    "messages": [{"role": "user", "content": "Hello!"}]
  }'`}
                        </pre>
                      </div>

                      <p className="text-sm text-gray-600 mt-3">
                        If successful, you'll receive a JSON response with the model's reply. If you get an authentication error, double-check that you copied the key correctly.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Using GLM API Key with Our Proxy */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Using GLM API Key with Our Proxy</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Our proxy service is 100% compatible with the official GLM API. To use your <strong>GLM API key</strong> with our service and save 60%, simply change the base URL:
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-gray-50 border border-gray-300 rounded-xl p-6">
                  <h3 className="font-bold text-gray-900 mb-3">❌ Official Zhipu AI API</h3>
                  <div className="bg-gray-900 rounded-lg p-3 overflow-x-auto">
                    <pre className="text-xs text-gray-100">
{`API_URL = "https://open.bigmodel.cn/api/paas/v4/chat/completions"
API_KEY = "your-zhipu-api-key"`}
                    </pre>
                  </div>
                  <p className="text-sm text-gray-600 mt-3">Costs: 100% of official pricing</p>
                </div>

                <div className="bg-emerald-50 border-2 border-emerald-400 rounded-xl p-6">
                  <h3 className="font-bold text-emerald-900 mb-3">✅ Our Proxy Service (40% Off)</h3>
                  <div className="bg-gray-900 rounded-lg p-3 overflow-x-auto">
                    <pre className="text-xs text-gray-100">
{`API_URL = "https://api.glm-api.org/v1/chat/completions"
API_KEY = "your-proxy-api-key"`}
                    </pre>
                  </div>
                  <p className="text-sm text-emerald-700 font-semibold mt-3">Costs: Only 40% of official pricing 🎉</p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-emerald-600 to-emerald-800 text-white rounded-2xl p-8 my-8">
                <h3 className="text-2xl font-bold mb-4">🚀 Migration is Simple</h3>
                <div className="space-y-3 text-emerald-100">
                  <p><strong>Step 1:</strong> Sign up for our proxy service (leave email below)</p>
                  <p><strong>Step 2:</strong> Receive your proxy API key within 72 hours</p>
                  <p><strong>Step 3:</strong> Replace the base URL in your code</p>
                  <p><strong>Step 4:</strong> Start saving 60% on every API call</p>
                </div>
                <div className="mt-6 flex gap-4">
                  <Link
                    href="/#subscribe"
                    className="inline-block bg-white text-emerald-600 px-6 py-3 rounded-lg font-semibold hover:bg-emerald-50 transition-colors"
                  >
                    Get Started
                  </Link>
                  <Link
                    href="/pricing"
                    className="inline-block bg-emerald-500 border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-emerald-400 transition-colors"
                  >
                    See Pricing
                  </Link>
                </div>
              </div>

              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Code Example with Proxy</h3>
              <div className="bg-gray-900 rounded-xl p-6 overflow-x-auto">
                <pre className="text-sm text-gray-100">
{`import os
from openai import OpenAI

# Load from environment variables
client = OpenAI(
    api_key=os.getenv("GLM_API_KEY"),
    base_url="https://api.glm-api.org/v1"  # Our proxy endpoint
)

# Make API call (saves 60% vs official pricing!)
response = client.chat.completions.create(
    model="glm-4-plus",
    messages=[
        {"role": "user", "content": "Explain machine learning in simple terms"}
    ]
)

print(response.choices[0].message.content)`}
                </pre>
              </div>
            </section>

            {/* GLM API Key Best Practices */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">GLM API Key Best Practices</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Follow these security and operational best practices to protect your <strong>GLM API key</strong>:
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border-2 border-emerald-200 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-emerald-600 mb-4">✅ DO These Things</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-emerald-600 font-bold mr-2">✓</span>
                      <span>Store keys in environment variables or secret managers (AWS Secrets Manager, Azure Key Vault)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-emerald-600 font-bold mr-2">✓</span>
                      <span>Add <code className="bg-gray-100 px-2 py-1 rounded text-sm">.env</code> to your <code className="bg-gray-100 px-2 py-1 rounded text-sm">.gitignore</code> file</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-emerald-600 font-bold mr-2">✓</span>
                      <span>Rotate API keys periodically (every 90 days recommended)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-emerald-600 font-bold mr-2">✓</span>
                      <span>Use different keys for development, staging, and production environments</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-emerald-600 font-bold mr-2">✓</span>
                      <span>Monitor usage regularly for unexpected spikes (could indicate key compromise)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-emerald-600 font-bold mr-2">✓</span>
                      <span>Set up usage alerts and spending limits in your dashboard</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-emerald-600 font-bold mr-2">✓</span>
                      <span>Keep API keys server-side only - never expose in client-side JavaScript</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white border-2 border-red-200 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-red-600 mb-4">❌ NEVER Do These Things</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-red-600 font-bold mr-2">✗</span>
                      <span>Commit API keys to GitHub, GitLab, or any version control system</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-600 font-bold mr-2">✗</span>
                      <span>Hardcode keys directly in your source code</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-600 font-bold mr-2">✗</span>
                      <span>Share keys via email, Slack, or instant messaging</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-600 font-bold mr-2">✗</span>
                      <span>Expose keys in client-side code (React, Vue, HTML)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-600 font-bold mr-2">✗</span>
                      <span>Post keys in public forums, Stack Overflow, or issue trackers</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-600 font-bold mr-2">✗</span>
                      <span>Use the same key across multiple unrelated projects</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-600 font-bold mr-2">✗</span>
                      <span>Leave old/unused keys active - delete them when no longer needed</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mt-8 rounded-r-lg">
                <h4 className="font-semibold text-gray-900 mb-2">💡 Pro Tip: Use Environment-Specific Keys</h4>
                <p className="text-gray-700 text-sm">
                  Create separate API keys for development, staging, and production. This way, if a development key is compromised, your production environment remains secure. Label each key clearly in the Zhipu AI dashboard (e.g., "Production-App-2025", "Dev-Testing").
                </p>
              </div>
            </section>

            {/* Common GLM API Key Issues */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Common GLM API Key Issues</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Troubleshooting guide for the most common <strong>GLM API key</strong> problems:
              </p>

              <div className="space-y-6">
                <div className="border border-gray-300 rounded-lg p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">🔴 Error: "Invalid API Key" or "Authentication Failed"</h3>
                  <p className="text-gray-700 mb-3"><strong>Cause:</strong> The API key is incorrect, malformed, or has been deleted.</p>
                  <p className="text-gray-700 mb-2"><strong>Solutions:</strong></p>
                  <ul className="list-disc list-inside text-gray-600 space-y-1 ml-4">
                    <li>Double-check that you copied the entire key (they're usually 50+ characters)</li>
                    <li>Ensure there are no extra spaces or line breaks in the key</li>
                    <li>Verify the key still exists in your Zhipu AI dashboard</li>
                    <li>Try generating a new key and updating your application</li>
                    <li>Check that you're using the correct header format: <code className="bg-gray-100 px-2 py-1 rounded text-sm">Authorization: Bearer YOUR_KEY</code></li>
                  </ul>
                </div>

                <div className="border border-gray-300 rounded-lg p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">🔴 Error: "Rate Limit Exceeded" (429)</h3>
                  <p className="text-gray-700 mb-3"><strong>Cause:</strong> You've exceeded the requests-per-minute (RPM) or tokens-per-day (TPD) limit for your tier.</p>
                  <p className="text-gray-700 mb-2"><strong>Solutions:</strong></p>
                  <ul className="list-disc list-inside text-gray-600 space-y-1 ml-4">
                    <li>Implement exponential backoff and retry logic in your code</li>
                    <li>Check your current rate limits in the dashboard</li>
                    <li>Upgrade to a paid tier for higher limits</li>
                    <li>Optimize your code to make fewer API calls (batch requests, cache responses)</li>
                    <li>Spread requests out over time instead of bursting</li>
                  </ul>
                </div>

                <div className="border border-gray-300 rounded-lg p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">🔴 Error: "Insufficient Credits" or "Account Balance Too Low"</h3>
                  <p className="text-gray-700 mb-3"><strong>Cause:</strong> Your account has run out of credits or reached spending limits.</p>
                  <p className="text-gray-700 mb-2"><strong>Solutions:</strong></p>
                  <ul className="list-disc list-inside text-gray-600 space-y-1 ml-4">
                    <li>Check your account balance in the "账户中心" (Account Center)</li>
                    <li>Add funds or link a payment method</li>
                    <li>Switch to our proxy service for 60% cost savings (same features, lower price)</li>
                    <li>Review your usage to identify unexpected spikes</li>
                  </ul>
                </div>

                <div className="border border-gray-300 rounded-lg p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">🔴 Error: "Connection Timeout" or "Network Error"</h3>
                  <p className="text-gray-700 mb-3"><strong>Cause:</strong> Network connectivity issues or API server downtime.</p>
                  <p className="text-gray-700 mb-2"><strong>Solutions:</strong></p>
                  <ul className="list-disc list-inside text-gray-600 space-y-1 ml-4">
                    <li>Check if the API endpoint URL is correct</li>
                    <li>Verify your internet connection</li>
                    <li>Check Zhipu AI's status page for service outages</li>
                    <li>Implement retry logic with exponential backoff</li>
                    <li>Increase request timeout values in your HTTP client</li>
                    <li>Consider using our proxy for better reliability (99.9% uptime SLA)</li>
                  </ul>
                </div>

                <div className="border border-gray-300 rounded-lg p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">🔴 Key Accidentally Exposed in Public Repo</h3>
                  <p className="text-gray-700 mb-3"><strong>Immediate Actions:</strong></p>
                  <ul className="list-disc list-inside text-gray-600 space-y-1 ml-4">
                    <li><strong className="text-red-600">IMMEDIATELY</strong> delete the exposed key in your Zhipu AI dashboard</li>
                    <li>Generate a new API key right away</li>
                    <li>Update your application with the new key</li>
                    <li>Check your usage logs for any unauthorized API calls</li>
                    <li>Monitor your account for unexpected charges</li>
                    <li>Remove the key from git history using <code className="bg-gray-100 px-2 py-1 rounded text-sm">git filter-branch</code> or BFG Repo-Cleaner</li>
                  </ul>
                </div>
              </div>
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
                    GLM 4.7 API Guide →
                  </h3>
                  <p className="text-sm text-gray-600">
                    Learn about GLM-4.7 features, capabilities, and how to use the API
                  </p>
                </Link>

                <Link
                  href="/glm-free-api"
                  className="border border-gray-200 rounded-lg p-5 hover:border-emerald-400 hover:shadow-md transition-all group"
                >
                  <h3 className="font-semibold text-gray-900 group-hover:text-emerald-600 mb-2">
                    GLM Free API Access →
                  </h3>
                  <p className="text-sm text-gray-600">
                    How to get free GLM API access with GLM-4-Flash
                  </p>
                </Link>

                <Link
                  href="/docs/text"
                  className="border border-gray-200 rounded-lg p-5 hover:border-emerald-400 hover:shadow-md transition-all group"
                >
                  <h3 className="font-semibold text-gray-900 group-hover:text-emerald-600 mb-2">
                    API Documentation →
                  </h3>
                  <p className="text-sm text-gray-600">
                    Complete technical docs for GLM-4 text generation API
                  </p>
                </Link>

                <Link
                  href="/pricing"
                  className="border border-gray-200 rounded-lg p-5 hover:border-emerald-400 hover:shadow-md transition-all group"
                >
                  <h3 className="font-semibold text-gray-900 group-hover:text-emerald-600 mb-2">
                    Pricing & Cost Calculator →
                  </h3>
                  <p className="text-sm text-gray-600">
                    Compare pricing and calculate your API costs with our 40% discount
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
              {t("glmApiKey.cta.title")}
            </h2>
            <p className="text-lg text-emerald-100 mb-8">
              {t("glmApiKey.cta.description")}
            </p>
            <div className="max-w-md mx-auto">
              <EmailForm source="glm-api-key" />
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
