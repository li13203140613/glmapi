import EmailForm from "@/components/EmailForm";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "GLM 4.7 API - Complete Guide to GLM-4.7 API Integration | GLM API Proxy",
  description: "Comprehensive guide to GLM 4.7 API - Learn how to integrate GLM-4.7 API with 128K context window, advanced reasoning, and coding capabilities. Get 40% off official pricing.",
  keywords: "glm 4.7 api, glm-4.7 api, glm 4.7 api key, glm api integration, zhipu ai api",
  alternates: {
    canonical: "https://glm-api.org/glm-4-7-api",
  },
  openGraph: {
    title: "GLM 4.7 API - Complete Developer Guide",
    description: "Learn how to integrate GLM-4.7 API with advanced reasoning and coding capabilities. 40% off official pricing.",
    url: "https://glm-api.org/glm-4-7-api",
    type: "article",
  },
};

export default function GLM47APIPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "GLM 4.7 API - Complete Guide to GLM-4.7 API Integration",
    "description": "Comprehensive guide to integrating GLM 4.7 API with advanced reasoning, coding, and multilingual capabilities",
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
              <li className="text-gray-900 font-medium">GLM 4.7 API</li>
            </ol>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="px-6 py-16 bg-gradient-to-br from-emerald-50 via-white to-emerald-50">
          <div className="mx-auto max-w-4xl">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              GLM 4.7 API - The Complete Developer Guide
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Everything you need to know about integrating GLM 4.7 API into your applications. From basic setup to advanced features, pricing comparisons, and code examples.
            </p>
          </div>
        </section>

        {/* Main Content */}
        <article className="px-6 py-12">
          <div className="mx-auto max-w-4xl prose prose-lg prose-emerald">

            {/* What is GLM 4.7 API */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">What is GLM 4.7 API?</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                The <strong>GLM 4.7 API</strong> (also known as <strong>GLM-4.7 API</strong>) is the latest generation API from Zhipu AI (智谱AI), providing access to the powerful GLM-4.7 language model. This API enables developers to integrate state-of-the-art AI capabilities into their applications with minimal effort.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                GLM-4.7 represents a significant advancement in Chinese-English bilingual language models, combining advanced reasoning capabilities with exceptional performance across multiple benchmarks. The model excels in natural language understanding, code generation, mathematical reasoning, and long-context processing.
              </p>
              <div className="bg-emerald-50 border-l-4 border-emerald-500 p-6 my-6 rounded-r-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Key Benchmarks</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>✓ <strong>MMLU:</strong> 85.2% - Superior general knowledge understanding</li>
                  <li>✓ <strong>HumanEval:</strong> 78.5% - Industry-leading code generation</li>
                  <li>✓ <strong>GSM8K:</strong> 91.3% - Advanced mathematical reasoning</li>
                  <li>✓ <strong>C-Eval:</strong> 88.7% - Top-tier Chinese language comprehension</li>
                </ul>
              </div>
            </section>

            {/* GLM 4.7 API Features */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">GLM 4.7 API Features</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                The GLM-4.7 API offers a comprehensive set of features designed for modern AI applications:
              </p>

              <div className="grid md:grid-cols-2 gap-6 my-8">
                <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">🧠 Advanced Reasoning</h3>
                  <p className="text-gray-600">
                    Chain-of-thought reasoning capabilities enable the model to solve complex problems by breaking them down into logical steps, similar to human problem-solving approaches.
                  </p>
                </div>

                <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">💻 Superior Coding</h3>
                  <p className="text-gray-600">
                    Generate production-ready code in Python, JavaScript, Java, C++, and more. Supports code explanation, debugging, and optimization across multiple programming languages.
                  </p>
                </div>

                <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">🌐 Multilingual Support</h3>
                  <p className="text-gray-600">
                    Native support for Chinese and English with high-quality translations. Also handles Japanese, Korean, German, French, and other major languages.
                  </p>
                </div>

                <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">📚 128K Context Window</h3>
                  <p className="text-gray-600">
                    Process up to 128,000 tokens in a single request - equivalent to approximately 200 pages of text. Perfect for analyzing long documents, codebases, or conversations.
                  </p>
                </div>
              </div>

              <h3 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">Additional Capabilities</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-emerald-600 font-bold mr-2">•</span>
                  <span><strong>Function Calling:</strong> Native tool integration for web search, database queries, and custom APIs</span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-600 font-bold mr-2">•</span>
                  <span><strong>Streaming Responses:</strong> Real-time token-by-token output for responsive user experiences</span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-600 font-bold mr-2">•</span>
                  <span><strong>Low Latency:</strong> Optimized inference engine delivers responses in under 2 seconds for typical queries</span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-600 font-bold mr-2">•</span>
                  <span><strong>High Throughput:</strong> Handles concurrent requests efficiently for production workloads</span>
                </li>
              </ul>
            </section>

            {/* How to Access GLM 4.7 API */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">How to Access GLM 4.7 API</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                There are two main ways to access the GLM-4.7 API:
              </p>

              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Option 1: Official Zhipu AI Platform</h3>
              <ol className="space-y-3 text-gray-700 mb-6 list-decimal list-inside">
                <li>Visit <a href="https://open.bigmodel.cn" className="text-emerald-600 hover:underline" target="_blank" rel="noopener noreferrer">open.bigmodel.cn</a></li>
                <li>Register for an account and complete verification</li>
                <li>Navigate to the API Keys section in your dashboard</li>
                <li>Generate a new API key</li>
                <li>Start making API calls (pay full official pricing)</li>
              </ol>

              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Option 2: Our Proxy Service (Recommended - 40% Off)</h3>
              <div className="bg-gradient-to-br from-emerald-50 to-white border-2 border-emerald-200 rounded-xl p-8 my-6">
                <h4 className="text-xl font-bold text-gray-900 mb-3">Save 60% on API Costs</h4>
                <p className="text-gray-700 mb-4">
                  Get full access to the GLM 4.7 API at only <strong className="text-emerald-600">40% of official pricing</strong>. Our proxy service is fully compatible with the official API - just change the base URL and start saving.
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li>✓ Same API interface - no code changes required</li>
                  <li>✓ Enterprise-grade reliability with 99.9% uptime SLA</li>
                  <li>✓ 24/7 technical support in Chinese and English</li>
                  <li>✓ No hidden fees - transparent pay-as-you-go pricing</li>
                  <li>✓ Easy migration from official API in under 5 minutes</li>
                </ul>
                <div className="flex gap-4">
                  <Link
                    href="/pricing"
                    className="inline-block bg-emerald-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-emerald-700 transition-colors"
                  >
                    View Pricing Details
                  </Link>
                  <Link
                    href="/#subscribe"
                    className="inline-block bg-white text-emerald-600 border-2 border-emerald-600 px-6 py-3 rounded-lg font-semibold hover:bg-emerald-50 transition-colors"
                  >
                    Get Started Now
                  </Link>
                </div>
              </div>
            </section>

            {/* Pricing Comparison */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">GLM 4.7 API Pricing Comparison</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Understanding the pricing structure is crucial for budgeting your AI applications. Here's a detailed comparison between official pricing and our proxy service:
              </p>

              <div className="overflow-x-auto my-8">
                <table className="min-w-full bg-white border border-gray-300 rounded-lg overflow-hidden">
                  <thead className="bg-emerald-600 text-white">
                    <tr>
                      <th className="px-6 py-4 text-left">Model</th>
                      <th className="px-6 py-4 text-right">Official Price</th>
                      <th className="px-6 py-4 text-right">Our Price (40% off)</th>
                      <th className="px-6 py-4 text-right">You Save</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium">GLM-4-Air</td>
                      <td className="px-6 py-4 text-right">¥0.001/1K tokens</td>
                      <td className="px-6 py-4 text-right text-emerald-600 font-bold">¥0.0004/1K tokens</td>
                      <td className="px-6 py-4 text-right text-green-600 font-semibold">60%</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium">GLM-4-Plus</td>
                      <td className="px-6 py-4 text-right">¥0.05/1K tokens</td>
                      <td className="px-6 py-4 text-right text-emerald-600 font-bold">¥0.02/1K tokens</td>
                      <td className="px-6 py-4 text-right text-green-600 font-semibold">60%</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium">GLM-4-Long</td>
                      <td className="px-6 py-4 text-right">¥0.01/1K tokens</td>
                      <td className="px-6 py-4 text-right text-emerald-600 font-bold">¥0.004/1K tokens</td>
                      <td className="px-6 py-4 text-right text-green-600 font-semibold">60%</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
                <h4 className="font-semibold text-gray-900 mb-2">💡 Cost Example</h4>
                <p className="text-gray-700">
                  Processing 10 million tokens with GLM-4-Plus costs ¥500 officially, but only <strong className="text-emerald-600">¥200 with our service</strong> - saving you ¥300 per 10M tokens.
                </p>
              </div>

              <p className="text-gray-700 mt-6">
                For complete pricing details across all GLM models including GLM-4V, CogView, and CogVideoX, visit our <Link href="/pricing" className="text-emerald-600 hover:underline font-semibold">comprehensive pricing page</Link>.
              </p>
            </section>

            {/* Code Example */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">GLM 4.7 API Code Example</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Here's a simple Python example to get started with the GLM-4.7 API:
              </p>

              <div className="bg-gray-900 rounded-xl p-6 overflow-x-auto">
                <pre className="text-sm text-gray-100">
{`import requests
import json

# Using our proxy service (40% off)
API_URL = "https://api.glm-api.org/v1/chat/completions"
API_KEY = "your-api-key-here"

def call_glm_api(prompt):
    headers = {
        "Authorization": f"Bearer {API_KEY}",
        "Content-Type": "application/json"
    }

    data = {
        "model": "glm-4-plus",  # or glm-4-air, glm-4-long
        "messages": [
            {
                "role": "user",
                "content": prompt
            }
        ],
        "temperature": 0.7,
        "max_tokens": 2000,
        "stream": False
    }

    response = requests.post(API_URL, headers=headers, json=data)
    result = response.json()

    return result['choices'][0]['message']['content']

# Example usage
prompt = "Explain quantum computing in simple terms"
answer = call_glm_api(prompt)
print(answer)`}
                </pre>
              </div>

              <h3 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">Streaming Response Example</h3>
              <p className="text-gray-700 mb-4">
                For real-time responses in chatbots or interactive applications:
              </p>

              <div className="bg-gray-900 rounded-xl p-6 overflow-x-auto">
                <pre className="text-sm text-gray-100">
{`import requests

def call_glm_stream(prompt):
    headers = {
        "Authorization": f"Bearer {API_KEY}",
        "Content-Type": "application/json"
    }

    data = {
        "model": "glm-4-plus",
        "messages": [{"role": "user", "content": prompt}],
        "stream": True  # Enable streaming
    }

    response = requests.post(API_URL, headers=headers, json=data, stream=True)

    for line in response.iter_lines():
        if line:
            # Process each chunk as it arrives
            chunk = line.decode('utf-8')
            if chunk.startswith('data: '):
                print(chunk[6:], end='', flush=True)

# Real-time streaming output
call_glm_stream("Write a Python function to sort a list")`}
                </pre>
              </div>

              <p className="text-gray-700 mt-6">
                For more detailed integration guides, check our <Link href="/docs/text" className="text-emerald-600 hover:underline font-semibold">official documentation</Link>.
              </p>
            </section>

            {/* GLM 4.7 vs Competitors */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">GLM 4.7 vs Competitors</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                How does the GLM-4.7 API stack up against other popular AI models?
              </p>

              <div className="overflow-x-auto my-8">
                <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="px-6 py-4 text-left">Feature</th>
                      <th className="px-6 py-4 text-center">GLM-4.7</th>
                      <th className="px-6 py-4 text-center">GPT-4</th>
                      <th className="px-6 py-4 text-center">Claude 3</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="px-6 py-4 font-medium">Context Window</td>
                      <td className="px-6 py-4 text-center">128K tokens</td>
                      <td className="px-6 py-4 text-center">128K tokens</td>
                      <td className="px-6 py-4 text-center">200K tokens</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="px-6 py-4 font-medium">Chinese Support</td>
                      <td className="px-6 py-4 text-center text-emerald-600">★★★★★</td>
                      <td className="px-6 py-4 text-center">★★★☆☆</td>
                      <td className="px-6 py-4 text-center">★★★★☆</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-medium">Code Generation</td>
                      <td className="px-6 py-4 text-center text-emerald-600">★★★★★</td>
                      <td className="px-6 py-4 text-center">★★★★★</td>
                      <td className="px-6 py-4 text-center">★★★★☆</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="px-6 py-4 font-medium">Pricing (per 1M tokens)</td>
                      <td className="px-6 py-4 text-center text-emerald-600 font-bold">$2.80 (ours)</td>
                      <td className="px-6 py-4 text-center">$30.00</td>
                      <td className="px-6 py-4 text-center">$15.00</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-medium">Response Speed</td>
                      <td className="px-6 py-4 text-center text-emerald-600">Fast</td>
                      <td className="px-6 py-4 text-center">Medium</td>
                      <td className="px-6 py-4 text-center">Fast</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mt-8">
                <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-6">
                  <h4 className="font-bold text-gray-900 mb-3">✅ GLM-4.7 Advantages</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Best-in-class Chinese language understanding</li>
                    <li>• Significantly lower pricing (especially with our 40% discount)</li>
                    <li>• Excellent code generation capabilities</li>
                    <li>• Fast inference speed</li>
                    <li>• Native function calling support</li>
                  </ul>
                </div>

                <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                  <h4 className="font-bold text-gray-900 mb-3">⚠️ Considerations</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Smaller context window than Claude (but sufficient for most use cases)</li>
                    <li>• Less established ecosystem compared to OpenAI</li>
                    <li>• Newer model with growing adoption</li>
                  </ul>
                </div>
              </div>

              <p className="text-gray-700 mt-6">
                <strong>Bottom line:</strong> For applications requiring Chinese language support or cost-effective AI integration, GLM-4.7 API offers exceptional value. It competes directly with GPT-4 in code generation while being 10x cheaper.
              </p>
            </section>

            {/* Related Pages */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Related Resources</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <Link
                  href="/glm-free-api"
                  className="border border-gray-200 rounded-lg p-5 hover:border-emerald-400 hover:shadow-md transition-all group"
                >
                  <h3 className="font-semibold text-gray-900 group-hover:text-emerald-600 mb-2">
                    GLM Free API Guide →
                  </h3>
                  <p className="text-sm text-gray-600">
                    Learn how to get free access to GLM API models including GLM-4-Flash
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
                    Step-by-step guide to obtaining and configuring your GLM API key
                  </p>
                </Link>

                <Link
                  href="/glm-4-7-flash-api"
                  className="border border-gray-200 rounded-lg p-5 hover:border-emerald-400 hover:shadow-md transition-all group"
                >
                  <h3 className="font-semibold text-gray-900 group-hover:text-emerald-600 mb-2">
                    GLM 4.7 Flash API →
                  </h3>
                  <p className="text-sm text-gray-600">
                    Faster, more cost-effective version for high-volume applications
                  </p>
                </Link>

                <Link
                  href="/glm-coding-plan"
                  className="border border-gray-200 rounded-lg p-5 hover:border-emerald-400 hover:shadow-md transition-all group"
                >
                  <h3 className="font-semibold text-gray-900 group-hover:text-emerald-600 mb-2">
                    GLM Coding Plan Review →
                  </h3>
                  <p className="text-sm text-gray-600">
                    Compare GLM Coding Plan subscription vs pay-as-you-go API pricing
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
                    Complete technical documentation for GLM-4 text generation API
                  </p>
                </Link>

                <Link
                  href="/pricing"
                  className="border border-gray-200 rounded-lg p-5 hover:border-emerald-400 hover:shadow-md transition-all group"
                >
                  <h3 className="font-semibold text-gray-900 group-hover:text-emerald-600 mb-2">
                    Full Pricing Table →
                  </h3>
                  <p className="text-sm text-gray-600">
                    Compare pricing across all GLM models and capabilities
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
              Ready to Start with GLM 4.7 API?
            </h2>
            <p className="text-lg text-emerald-100 mb-8">
              Get access to GLM-4.7 API at 40% off official pricing. Leave your email and we'll contact you within 72 hours to set up your API access.
            </p>
            <div className="max-w-md mx-auto">
              <EmailForm source="glm-4-7-api" />
            </div>
            <p className="mt-6 text-emerald-100 text-sm">
              Already have an account? <Link href="/pricing" className="underline hover:text-white">View pricing</Link> or <Link href="/docs/text" className="underline hover:text-white">read the docs</Link>
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
