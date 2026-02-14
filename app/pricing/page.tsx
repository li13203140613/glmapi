import type { Metadata } from "next";
import PricingTable from "@/components/PricingTable";
import EmailForm from "@/components/EmailForm";
import Link from "next/link";
import {
  textModels,
  visionModels,
  imageModels,
  videoModels,
  voiceModels,
  toolModels,
} from "@/lib/pricing-data";

export const metadata: Metadata = {
  title: "GLM API Pricing - GLM API 定价表 | 官方价格4折",
  description:
    "GLM API 代理服务定价表，官方价格 4 折。包含 GLM-4.7 文本生成、GLM-4V 多模态理解、CogView 图片生成、CogVideoX 视频生成、GLM-4-Voice 语音模型等全套智谱AI能力的透明定价。GLM 4.7 API pricing, GLM free API, GLM API key 详细价格。",
  keywords: [
    "GLM API pricing",
    "GLM API 价格",
    "GLM API 定价",
    "GLM 4.7 API pricing",
    "GLM 4.7 API price",
    "GLM API 折扣",
    "智谱AI 价格",
    "ChatGLM 价格",
    "GLM-4 价格",
    "GLM-4.7 价格",
    "CogVideoX 价格",
    "CogView 价格",
    "便宜的 AI API",
    "GLM API cheap",
    "affordable GLM API",
    "GLM free API pricing",
  ],
  alternates: {
    canonical: "https://glm-api.org/pricing",
  },
};

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-emerald-50">
      {/* Structured Data - FAQ about pricing */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "What is GLM API pricing?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Our GLM API pricing is 40% of the official Zhipu AI pricing. For example, GLM-4-Air costs ¥0.0004 per thousand tokens (vs. official ¥0.001), GLM-4V-Plus costs ¥0.02 per thousand tokens (vs. official ¥0.05), and CogVideoX costs ¥0.40 per second (vs. official ¥1.00).",
                },
              },
              {
                "@type": "Question",
                name: "What is GLM 4.7 API price?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "GLM 4.7 API pricing varies by model tier. GLM-4-Air is ¥0.0004/千tokens, GLM-4-AirX is ¥0.004/千tokens, GLM-4-Flash is ¥0.0004/千tokens, and GLM-4-Plus is ¥0.02/千tokens. All prices are 40% of official pricing.",
                },
              },
              {
                "@type": "Question",
                name: "Is there a GLM free API option?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "While we don't offer a permanent free tier, we provide the lowest GLM API pricing at 40% of official rates. Contact us for trial credits and promotional offers.",
                },
              },
              {
                "@type": "Question",
                name: "How do I get a GLM API key at these prices?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Submit your email on our website to request a GLM API key. We'll contact you within 72 hours to set up your account with our discounted GLM API pricing of 40% off official rates.",
                },
              },
              {
                "@type": "Question",
                name: "Are there hidden fees in GLM API pricing?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "No, our GLM API pricing is transparent with no hidden fees. All listed prices include service costs, and you only pay for actual usage (pay-as-you-go billing).",
                },
              },
            ],
          }),
        }}
      />

      {/* Hero Section */}
      <section className="px-6 py-24 sm:py-32">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-5xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            GLM API Pricing - 透明定价，官方 4 折
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600 max-w-2xl mx-auto">
            所有 GLM API pricing 均为官方价格的 40%，无隐藏费用，按量计费。包括 GLM 4.7 API pricing、GLM free API 试用额度等优惠方案。
          </p>
          <div className="mt-6 inline-flex items-center gap-2 px-4 py-2 bg-emerald-50 border border-emerald-200 rounded-lg">
            <span className="text-sm font-medium text-emerald-800">
              价格单位: 人民币 (CNY)
            </span>
          </div>
        </div>
      </section>

      {/* Pricing Tables */}
      <section className="px-6 pb-24">
        <div className="mx-auto max-w-7xl space-y-16">
          <PricingTable title="文本生成模型 - GLM 4.7 API Pricing" items={textModels} />
          <PricingTable title="多模态理解模型 - GLM-4V API Pricing" items={visionModels} />
          <PricingTable title="图片生成模型 - CogView API Pricing" items={imageModels} />
          <PricingTable title="视频生成模型 - CogVideoX API Pricing" items={videoModels} />
          <PricingTable title="语音模型 - GLM-4-Voice API Pricing" items={voiceModels} />
          <PricingTable title="工具调用 - GLM API Tools Pricing" items={toolModels} />

          {/* Pricing Note */}
          <div className="bg-white p-8 rounded-2xl border border-gray-200 max-w-3xl mx-auto">
            <h2 className="text-xl font-bold text-gray-900 mb-4">GLM API 定价说明</h2>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start">
                <span className="text-emerald-600 mr-2">•</span>
                <span>所有 GLM API pricing 均为实时计费，按实际使用量收费</span>
              </li>
              <li className="flex items-start">
                <span className="text-emerald-600 mr-2">•</span>
                <span>价格已包含所有服务费用，无额外隐藏费用</span>
              </li>
              <li className="flex items-start">
                <span className="text-emerald-600 mr-2">•</span>
                <span>对比价格为 GLM 官方定价，我们的 GLM 4.7 API price 为官方的 40%</span>
              </li>
              <li className="flex items-start">
                <span className="text-emerald-600 mr-2">•</span>
                <span>API 接口完全兼容 GLM 官方接口，无需修改代码</span>
              </li>
              <li className="flex items-start">
                <span className="text-emerald-600 mr-2">•</span>
                <span>联系我们了解 GLM free API 试用额度和企业优惠方案</span>
              </li>
            </ul>
          </div>

          {/* Related Guides */}
          <div className="bg-gradient-to-br from-emerald-50 to-white p-8 rounded-2xl border border-emerald-200 max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              相关指南
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Link
                href="/"
                className="flex items-center gap-3 p-4 bg-white rounded-lg border border-gray-200 hover:border-emerald-400 hover:shadow-md transition-all"
              >
                <span className="text-2xl">🏠</span>
                <div>
                  <h3 className="font-semibold text-gray-900">GLM API 主页</h3>
                  <p className="text-sm text-gray-600">了解 GLM API 代理服务</p>
                </div>
              </Link>

              <Link
                href="/glm-4-7-api"
                className="flex items-center gap-3 p-4 bg-white rounded-lg border border-gray-200 hover:border-emerald-400 hover:shadow-md transition-all"
              >
                <span className="text-2xl">📚</span>
                <div>
                  <h3 className="font-semibold text-gray-900">GLM 4.7 API 完整指南</h3>
                  <p className="text-sm text-gray-600">GLM-4.7 功能和使用方法</p>
                </div>
              </Link>

              <Link
                href="/glm-free-api"
                className="flex items-center gap-3 p-4 bg-white rounded-lg border border-gray-200 hover:border-emerald-400 hover:shadow-md transition-all"
              >
                <span className="text-2xl">🆓</span>
                <div>
                  <h3 className="font-semibold text-gray-900">GLM 免费 API 获取</h3>
                  <p className="text-sm text-gray-600">GLM free API 试用方案</p>
                </div>
              </Link>

              <Link
                href="/glm-api-key"
                className="flex items-center gap-3 p-4 bg-white rounded-lg border border-gray-200 hover:border-emerald-400 hover:shadow-md transition-all"
              >
                <span className="text-2xl">🔑</span>
                <div>
                  <h3 className="font-semibold text-gray-900">GLM API Key 申请</h3>
                  <p className="text-sm text-gray-600">获取 GLM API key 教程</p>
                </div>
              </Link>

              <Link
                href="/glm-4-7-flash-api"
                className="flex items-center gap-3 p-4 bg-white rounded-lg border border-gray-200 hover:border-emerald-400 hover:shadow-md transition-all"
              >
                <span className="text-2xl">⚡</span>
                <div>
                  <h3 className="font-semibold text-gray-900">GLM 4.7 Flash API</h3>
                  <p className="text-sm text-gray-600">高性能 Flash 模型详解</p>
                </div>
              </Link>

              <Link
                href="/glm-coding-plan"
                className="flex items-center gap-3 p-4 bg-white rounded-lg border border-gray-200 hover:border-emerald-400 hover:shadow-md transition-all"
              >
                <span className="text-2xl">💻</span>
                <div>
                  <h3 className="font-semibold text-gray-900">GLM Coding Plan</h3>
                  <p className="text-sm text-gray-600">编程套餐对比评测</p>
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
            准备好开始使用了吗？
          </h2>
          <p className="text-lg text-emerald-100 mb-8">
            留下您的邮箱，我们将在 72 小时内与您联系，为您开通 GLM API key 访问权限，享受 40% 折扣的 GLM API pricing
          </p>
          <div className="max-w-md mx-auto">
            <EmailForm source="pricing" />
          </div>
        </div>
      </section>
    </main>
  );
}
