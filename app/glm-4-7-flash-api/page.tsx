import EmailForm from "@/components/EmailForm";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "GLM 4.7 Flash API - Fast & Cost-Effective AI API | GLM-4-Flash Guide",
  description: "Complete guide to GLM 4.7 Flash API - the fastest, most cost-effective GLM model. Free tier available. Learn speed benchmarks, use cases, and integration examples.",
  keywords: "glm-4.7-flash api, glm 4.7 flash api, glm-4-flash, glm flash api, free glm api, fast ai api",
  alternates: {
    canonical: "https://glm-api.org/glm-4-7-flash-api",
  },
  openGraph: {
    title: "GLM 4.7 Flash API - Speed Meets Affordability",
    description: "Fast inference, low cost, and free tier available. Learn how GLM-4-Flash compares to GLM-4-Plus.",
    url: "https://glm-api.org/glm-4-7-flash-api",
    type: "article",
  },
};

export default function GLM47FlashAPIPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "GLM 4.7 Flash API - Fast & Cost-Effective AI API",
    "description": "Comprehensive guide to GLM-4-Flash API including performance benchmarks, pricing, and use cases",
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
    "dateModified": "2025-02-14"
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
              <li><Link href="/" className="hover:text-emerald-600">Home</Link></li>
              <li>/</li>
              <li className="text-gray-900 font-medium">GLM 4.7 Flash API</li>
            </ol>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="px-6 py-16 bg-gradient-to-br from-emerald-50 via-white to-emerald-50">
          <div className="mx-auto max-w-4xl">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              GLM 4.7 Flash API - Speed Meets Affordability
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              The fastest GLM model optimized for real-time applications. Completely free on official platform, with even better pricing for high-volume usage through our proxy.
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
                <strong>GLM 4.7 Flash</strong> (model name: <code className="bg-gray-100 px-2 py-1 rounded text-sm">glm-4-flash</code>) is Zhipu AI's speed-optimized language model designed for applications where <strong>response time is critical</strong>. It's part of the GLM-4 family but uses distillation and quantization techniques to deliver <strong>3-5x faster inference</strong> while maintaining impressive quality.
              </p>

              <div className="bg-emerald-50 border-l-4 border-emerald-500 p-6 my-6 rounded-r-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">🚀 Key Highlights</h3>
                <ul className="space-y-2 text-gray-700">
                  <li><strong>⚡ Ultra-Fast Inference:</strong> Average response time under 1 second for typical queries</li>
                  <li><strong>💰 Completely Free:</strong> No cost on official Zhipu AI platform (with rate limits)</li>
                  <li><strong>🎯 High Quality:</strong> 85-90% of GLM-4-Plus quality at 5x the speed</li>
                  <li><strong>📏 128K Context:</strong> Same long-context capability as other GLM-4 models</li>
                  <li><strong>🌐 Multilingual:</strong> Strong Chinese and English support</li>
                </ul>
              </div>

              <p className="text-gray-700 leading-relaxed">
                The <strong>GLM 4.7 Flash API</strong> is ideal for chatbots, real-time assistants, customer service automation, and any application where users expect instant responses. It's the default choice for developers building interactive experiences.
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
                      <td className="px-6 py-4 text-center text-emerald-600 font-bold">⚡⚡⚡ Fastest</td>
                      <td className="px-6 py-4 text-center">⚡⚡ Fast</td>
                      <td className="px-6 py-4 text-center">⚡ Moderate</td>
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
                      <td className="px-6 py-4 text-center">¥0.001/1K tokens</td>
                      <td className="px-6 py-4 text-center">¥0.05/1K tokens</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium">Our Proxy Price</td>
                      <td className="px-6 py-4 text-center text-emerald-600 font-bold">Even cheaper for high volume</td>
                      <td className="px-6 py-4 text-center">¥0.0004/1K tokens</td>
                      <td className="px-6 py-4 text-center">¥0.02/1K tokens</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium">Context Window</td>
                      <td className="px-6 py-4 text-center">128K tokens</td>
                      <td className="px-6 py-4 text-center">128K tokens</td>
                      <td className="px-6 py-4 text-center">128K tokens</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium">Best Use Case</td>
                      <td className="px-6 py-4 text-center text-sm">Chatbots, real-time apps</td>
                      <td className="px-6 py-4 text-center text-sm">General production apps</td>
                      <td className="px-6 py-4 text-center text-sm">Complex reasoning, coding</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="grid md:grid-cols-3 gap-6 mt-8">
                <div className="bg-gradient-to-br from-emerald-50 to-white border-2 border-emerald-300 rounded-xl p-6">
                  <h3 className="text-lg font-bold text-emerald-700 mb-3">🚀 Choose GLM-4-Flash If:</h3>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>✓ Speed is your top priority</li>
                    <li>✓ Building real-time chat interfaces</li>
                    <li>✓ Need instant customer support responses</li>
                    <li>✓ Running on a tight budget (it's free!)</li>
                    <li>✓ Handling simple Q&A or content generation</li>
                    <li>✓ Prototyping and testing</li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-white border-2 border-blue-300 rounded-xl p-6">
                  <h3 className="text-lg font-bold text-blue-700 mb-3">⚖️ Choose GLM-4-Air If:</h3>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>✓ Need balance of speed and quality</li>
                    <li>✓ General-purpose production apps</li>
                    <li>✓ Content generation at scale</li>
                    <li>✓ Want better quality than Flash</li>
                    <li>✓ Budget-conscious but need reliability</li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-purple-50 to-white border-2 border-purple-300 rounded-xl p-6">
                  <h3 className="text-lg font-bold text-purple-700 mb-3">🎯 Choose GLM-4-Plus If:</h3>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>✓ Maximum quality is essential</li>
                    <li>✓ Complex reasoning tasks</li>
                    <li>✓ Professional code generation</li>
                    <li>✓ Advanced analysis and research</li>
                    <li>✓ Can afford premium pricing</li>
                  </ul>
                </div>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mt-8 rounded-r-lg">
                <h4 className="font-semibold text-gray-900 mb-2">💡 Pro Tip: Hybrid Approach</h4>
                <p className="text-gray-700 text-sm">
                  Many developers use <strong>GLM-4-Flash for initial responses</strong> (fast user feedback) and then optionally upgrade to <strong>GLM-4-Plus for follow-up clarifications</strong> or complex tasks. This balances user experience with cost efficiency.
                </p>
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
                    <li>✓ Free tier: 60 RPM, 1M tokens/day</li>
                    <li>✓ No credit card required</li>
                    <li>✓ Perfect for learning and prototyping</li>
                    <li>⚠️ Subject to rate limiting during peak hours</li>
                    <li>⚠️ No SLA guarantees</li>
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
                    <li>✓ Volume discounts for enterprise usage</li>
                    <li>✓ 99.9% uptime SLA guarantee</li>
                    <li>✓ No rate limiting or throttling</li>
                    <li>✓ Priority support 24/7</li>
                    <li>✓ Access to all GLM models at 40% off</li>
                  </ul>
                  <Link
                    href="/#subscribe"
                    className="mt-6 inline-block bg-yellow-400 text-blue-900 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition-colors"
                  >
                    Get Enterprise Access
                  </Link>
                </div>
              </div>

              <h3 className="text-2xl font-semibold text-gray-900 mb-4">When to Use Our Proxy vs Free Tier</h3>
              <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="px-6 py-4 text-left">Scenario</th>
                      <th className="px-6 py-4 text-center">Free Tier</th>
                      <th className="px-6 py-4 text-center">Our Proxy</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="px-6 py-4">Learning / Experimenting</td>
                      <td className="px-6 py-4 text-center text-emerald-600 font-bold">✓ Perfect</td>
                      <td className="px-6 py-4 text-center text-gray-400">Overkill</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="px-6 py-4">Low-traffic personal project (&lt;100 requests/day)</td>
                      <td className="px-6 py-4 text-center text-emerald-600 font-bold">✓ Great</td>
                      <td className="px-6 py-4 text-center text-gray-400">Not needed</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4">Production app (1K-10K requests/day)</td>
                      <td className="px-6 py-4 text-center text-yellow-600">⚠️ May hit limits</td>
                      <td className="px-6 py-4 text-center text-emerald-600 font-bold">✓ Recommended</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="px-6 py-4">Enterprise app (&gt;10K requests/day)</td>
                      <td className="px-6 py-4 text-center text-red-600">✗ Will hit limits</td>
                      <td className="px-6 py-4 text-center text-emerald-600 font-bold">✓ Required</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4">Need SLA guarantees</td>
                      <td className="px-6 py-4 text-center text-red-600">✗ No SLA</td>
                      <td className="px-6 py-4 text-center text-emerald-600 font-bold">✓ 99.9% uptime</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="px-6 py-4">Need priority support</td>
                      <td className="px-6 py-4 text-center text-red-600">✗ Community only</td>
                      <td className="px-6 py-4 text-center text-emerald-600 font-bold">✓ 24/7 support</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Use Cases */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Use Cases for GLM Flash API</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                <strong>GLM-4-Flash</strong> excels in scenarios where speed matters more than absolute perfection:
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                  <div className="text-4xl mb-4">💬</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Conversational Chatbots</h3>
                  <p className="text-gray-600 mb-3">
                    Real-time chat applications where users expect instant responses. GLM-4-Flash's sub-second latency creates a natural conversation flow.
                  </p>
                  <p className="text-sm text-emerald-600 font-semibold">
                    Example: Customer support chat, AI companions, virtual assistants
                  </p>
                </div>

                <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                  <div className="text-4xl mb-4">🎮</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Interactive Gaming</h3>
                  <p className="text-gray-600 mb-3">
                    NPCs (non-player characters) that respond dynamically to player actions. Fast inference ensures smooth gameplay.
                  </p>
                  <p className="text-sm text-emerald-600 font-semibold">
                    Example: AI dungeon masters, game dialogue systems, procedural storytelling
                  </p>
                </div>

                <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                  <div className="text-4xl mb-4">📱</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Mobile Applications</h3>
                  <p className="text-gray-600 mb-3">
                    Mobile apps with limited bandwidth benefit from GLM-4-Flash's efficiency. Faster responses = better user experience on slower networks.
                  </p>
                  <p className="text-sm text-emerald-600 font-semibold">
                    Example: Mobile chatbots, smart keyboard suggestions, voice assistants
                  </p>
                </div>

                <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                  <div className="text-4xl mb-4">⚡</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Real-Time Content Moderation</h3>
                  <p className="text-gray-600 mb-3">
                    Automatically filter user-generated content for compliance. Speed is essential to avoid user friction.
                  </p>
                  <p className="text-sm text-emerald-600 font-semibold">
                    Example: Comment filtering, spam detection, content categorization
                  </p>
                </div>

                <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                  <div className="text-4xl mb-4">📊</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Batch Processing</h3>
                  <p className="text-gray-600 mb-3">
                    Process thousands of items quickly. GLM-4-Flash can handle 5x more throughput than GLM-4-Plus in the same timeframe.
                  </p>
                  <p className="text-sm text-emerald-600 font-semibold">
                    Example: Email classification, sentiment analysis, data enrichment
                  </p>
                </div>

                <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                  <div className="text-4xl mb-4">🔍</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Search Result Enhancement</h3>
                  <p className="text-gray-600 mb-3">
                    Generate quick summaries or Q&A snippets for search results without slowing down the search experience.
                  </p>
                  <p className="text-sm text-emerald-600 font-semibold">
                    Example: Search snippet generation, FAQ auto-responses, query understanding
                  </p>
                </div>
              </div>
            </section>

            {/* How to Use GLM 4.7 Flash API */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">How to Use GLM 4.7 Flash API</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Using the <strong>GLM-4-Flash API</strong> is identical to other GLM models - just specify the model name:
              </p>

              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Python Example (Official API)</h3>
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

# Example usage
answer = chat_with_flash("What is machine learning?")
print(answer)
# Response time: ~0.8 seconds 🚀`}
                </pre>
              </div>

              <h3 className="text-2xl font-semibold text-gray-900 mb-4">JavaScript/Node.js Example</h3>
              <div className="bg-gray-900 rounded-xl p-6 overflow-x-auto mb-6">
                <pre className="text-sm text-gray-100">
{`const axios = require('axios');

const API_URL = "https://open.bigmodel.cn/api/paas/v4/chat/completions";
const API_KEY = process.env.GLM_API_KEY;

async function chatWithFlash(userMessage) {
  const response = await axios.post(API_URL, {
    model: "glm-4-flash",
    messages: [
      { role: "user", content: userMessage }
    ],
    temperature: 0.7,
    max_tokens: 1000
  }, {
    headers: {
      "Authorization": \`Bearer \${API_KEY}\`,
      "Content-Type": "application/json"
    }
  });

  return response.data.choices[0].message.content;
}

// Example usage
chatWithFlash("Tell me a fun fact about AI")
  .then(answer => console.log(answer))
  .catch(err => console.error(err));`}
                </pre>
              </div>

              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Streaming Responses (Recommended for Chat UIs)</h3>
              <div className="bg-gray-900 rounded-xl p-6 overflow-x-auto mb-6">
                <pre className="text-sm text-gray-100">
{`import requests

def chat_with_flash_streaming(user_message):
    headers = {
        "Authorization": f"Bearer {API_KEY}",
        "Content-Type": "application/json"
    }

    data = {
        "model": "glm-4-flash",
        "messages": [{"role": "user", "content": user_message}],
        "stream": True  # Enable streaming for real-time responses
    }

    response = requests.post(API_URL, headers=headers, json=data, stream=True)

    # Print tokens as they arrive
    for line in response.iter_lines():
        if line:
            chunk = line.decode('utf-8')
            if chunk.startswith('data: '):
                print(chunk[6:], end='', flush=True)

# Even faster perceived response time with streaming!
chat_with_flash_streaming("Write a short poem about spring")`}
                </pre>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
                <h4 className="font-semibold text-gray-900 mb-2">💡 Best Practice: Use Streaming</h4>
                <p className="text-gray-700 text-sm">
                  When building chat interfaces, always enable <code className="bg-gray-100 px-2 py-1 rounded text-sm">stream: true</code>. Users see the first tokens in ~200ms, making the experience feel even faster than the already-quick GLM-4-Flash.
                </p>
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
                    GLM 4.7 API Complete Guide →
                  </h3>
                  <p className="text-sm text-gray-600">
                    Learn about all GLM-4.7 models including Plus and Air variants
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
                    How to get free access to GLM-4-Flash and other free models
                  </p>
                </Link>

                <Link
                  href="/glm-api-key"
                  className="border border-gray-200 rounded-lg p-5 hover:border-emerald-400 hover:shadow-md transition-all group"
                >
                  <h3 className="font-semibold text-gray-900 group-hover:text-emerald-600 mb-2">
                    GLM API Key Setup →
                  </h3>
                  <p className="text-sm text-gray-600">
                    Step-by-step guide to obtaining your GLM API key
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
                    Complete technical documentation for GLM-4 API
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
              Ready for Production-Grade GLM-4-Flash?
            </h2>
            <p className="text-lg text-emerald-100 mb-8">
              While the free tier is great for testing, upgrade to our proxy for enterprise reliability, no rate limits, and 24/7 support. Perfect for scaling your application.
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
