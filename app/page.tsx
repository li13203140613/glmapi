import EmailForm from "@/components/EmailForm";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen">
      {/* Structured Data - WebSite */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "GLM API Proxy",
            url: "https://glm-api.org",
            potentialAction: {
              "@type": "SearchAction",
              target: "https://glm-api.org/search?q={search_term_string}",
              "query-input": "required name=search_term_string",
            },
          }),
        }}
      />

      {/* Structured Data - FAQ */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "What is GLM API?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "GLM API is the official API service provided by Zhipu AI (智谱AI) for accessing their suite of AI models including GLM-4.7 for text generation, GLM-4V for multimodal understanding, CogView for image generation, and CogVideoX for video generation.",
                },
              },
              {
                "@type": "Question",
                name: "How much does GLM API cost?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Our GLM API pricing is 40% of the official price. For example, GLM-4-Air costs ¥0.0004 per thousand tokens (official price ¥0.001), and GLM-4V-Plus costs ¥0.02 per thousand tokens (official price ¥0.05).",
                },
              },
              {
                "@type": "Question",
                name: "How to get GLM API key?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "To get a GLM API key through our proxy service, simply submit your email address on our website. We will contact you within 72 hours to set up your API access with discounted pricing.",
                },
              },
              {
                "@type": "Question",
                name: "Is GLM API compatible with official endpoints?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, our GLM API proxy is fully compatible with the official GLM API endpoints. You can use it as a drop-in replacement without modifying your code.",
                },
              },
            ],
          }),
        }}
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-emerald-50 via-white to-emerald-50 px-6 py-24 sm:py-32">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]" />
        <div className="relative mx-auto max-w-4xl text-center">
          <h1 className="text-5xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-emerald-800 sm:text-7xl">
            GLM API 代理服务
          </h1>
          <p className="mt-6 text-2xl font-semibold text-emerald-600">
            官方价格 4 折,稳定可靠
          </p>
          <p className="mt-4 text-lg leading-8 text-gray-600 max-w-2xl mx-auto">
            享受智谱AI全套能力,包括 GLM-4.7 文本生成、GLM-4V 多模态理解、CogView 图片生成、CogVideoX 视频生成、GLM-4-Voice 语音模型等,价格仅为官方的
            40%。稳定、快速、完全兼容官方接口。
          </p>
          <div className="mt-10 max-w-md mx-auto">
            <EmailForm source="homepage" />
            <p className="mt-3 text-sm text-gray-500">
              留下邮箱,72 小时内联系您
            </p>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 px-6 bg-white">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-16">
            为什么选择我们的 GLM API 服务
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-emerald-50 to-white p-8 rounded-2xl border border-emerald-100 hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                价格优势
              </h3>
              <p className="text-gray-600">
                GLM API pricing 官方价格 4 折,为您节省 60% 的 API 调用成本,让智谱AI能力触手可及。
              </p>
            </div>
            <div className="bg-gradient-to-br from-emerald-50 to-white p-8 rounded-2xl border border-emerald-100 hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                稳定可靠
              </h3>
              <p className="text-gray-600">
                高可用性保障,低延迟响应,7x24
                小时稳定运行,让您的 GLM API 应用无忧运行。
              </p>
            </div>
            <div className="bg-gradient-to-br from-emerald-50 to-white p-8 rounded-2xl border border-emerald-100 hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">🔌</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                兼容性强
              </h3>
              <p className="text-gray-600">
                完全兼容 GLM API 官方接口,无需修改代码,直接替换即可使用。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* API Capabilities Section */}
      <section className="py-24 px-6 bg-gradient-to-br from-gray-50 to-emerald-50">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">
            全套智谱AI能力
          </h2>
          <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">
            一个 GLM API,解锁所有智谱AI能力
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link
              href="/docs/text"
              className="bg-white p-6 rounded-xl border border-gray-200 hover:border-emerald-400 hover:shadow-lg transition-all group"
            >
              <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">
                💬
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                文本生成
              </h3>
              <p className="text-sm text-gray-600 mb-2">GLM-4.7 Chat</p>
              <p className="text-sm text-gray-500">
                强大的 GLM-4.7 对话模型,支持超长上下文、多轮对话、函数调用等高级功能
              </p>
            </Link>

            <Link
              href="/docs/vision"
              className="bg-white p-6 rounded-xl border border-gray-200 hover:border-emerald-400 hover:shadow-lg transition-all group"
            >
              <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">
                👁️
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                多模态理解
              </h3>
              <p className="text-sm text-gray-600 mb-2">GLM-4V Vision</p>
              <p className="text-sm text-gray-500">
                GLM-4V 视觉语言模型,支持图片理解、OCR、视觉问答等多模态任务
              </p>
            </Link>

            <Link
              href="/docs/image"
              className="bg-white p-6 rounded-xl border border-gray-200 hover:border-emerald-400 hover:shadow-lg transition-all group"
            >
              <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">
                🖼️
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                图片生成
              </h3>
              <p className="text-sm text-gray-600 mb-2">CogView</p>
              <p className="text-sm text-gray-500">
                CogView 文生图模型,高质量图片生成,支持多种风格和尺寸
              </p>
            </Link>

            <Link
              href="/docs/video"
              className="bg-white p-6 rounded-xl border border-gray-200 hover:border-emerald-400 hover:shadow-lg transition-all group"
            >
              <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">
                🎬
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                视频生成
              </h3>
              <p className="text-sm text-gray-600 mb-2">CogVideoX</p>
              <p className="text-sm text-gray-500">
                CogVideoX 视频生成模型,从文本或图片生成高质量视频内容
              </p>
            </Link>

            <Link
              href="/docs/voice"
              className="bg-white p-6 rounded-xl border border-gray-200 hover:border-emerald-400 hover:shadow-lg transition-all group"
            >
              <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">
                🎤
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                语音模型
              </h3>
              <p className="text-sm text-gray-600 mb-2">GLM-4-Voice</p>
              <p className="text-sm text-gray-500">
                GLM-4-Voice 端到端语音模型,支持语音对话、语音理解等功能
              </p>
            </Link>

            <Link
              href="/docs/tools"
              className="bg-white p-6 rounded-xl border border-gray-200 hover:border-emerald-400 hover:shadow-lg transition-all group"
            >
              <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">
                🔍
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                工具调用
              </h3>
              <p className="text-sm text-gray-600 mb-2">Web Search & Tools</p>
              <p className="text-sm text-gray-500">
                内置 Web 搜索、代码解释器等工具,让 AI 能力更强大
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* Pricing Preview Section */}
      <section className="py-24 px-6 bg-white">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">
            GLM API Pricing - 透明定价
          </h2>
          <p className="text-center text-gray-600 mb-16">
            所有 GLM API pricing 均为官方价格的 4 折
          </p>
          <div className="bg-gradient-to-br from-emerald-50 to-white p-8 rounded-2xl border border-emerald-200">
            <div className="space-y-4">
              <div className="flex justify-between items-center py-3 border-b border-gray-200">
                <div>
                  <span className="font-semibold text-gray-900">
                    GLM-4-Air
                  </span>
                  <span className="text-sm text-gray-500 ml-2">
                    (文本生成)
                  </span>
                </div>
                <div className="text-right">
                  <span className="text-sm text-gray-400 line-through mr-2">
                    ¥0.001/千tokens
                  </span>
                  <span className="font-bold text-emerald-600">
                    ¥0.0004/千tokens
                  </span>
                </div>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-gray-200">
                <div>
                  <span className="font-semibold text-gray-900">GLM-4V-Plus</span>
                  <span className="text-sm text-gray-500 ml-2">
                    (多模态理解)
                  </span>
                </div>
                <div className="text-right">
                  <span className="text-sm text-gray-400 line-through mr-2">
                    ¥0.05/千tokens
                  </span>
                  <span className="font-bold text-emerald-600">
                    ¥0.02/千tokens
                  </span>
                </div>
              </div>
              <div className="flex justify-between items-center py-3">
                <div>
                  <span className="font-semibold text-gray-900">
                    CogVideoX
                  </span>
                  <span className="text-sm text-gray-500 ml-2">
                    (视频生成)
                  </span>
                </div>
                <div className="text-right">
                  <span className="text-sm text-gray-400 line-through mr-2">
                    ¥1.00/秒
                  </span>
                  <span className="font-bold text-emerald-600">¥0.40/秒</span>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center mt-8">
            <Link
              href="/pricing"
              className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-emerald-600 hover:bg-emerald-700 transition-colors"
            >
              查看完整 GLM API 定价表
            </Link>
          </div>
        </div>
      </section>

      {/* Popular Guides Section */}
      <section className="py-24 px-6 bg-gradient-to-br from-gray-50 to-emerald-50">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">
            热门指南
          </h2>
          <p className="text-center text-gray-600 mb-12">
            深入了解 GLM API 各项功能和使用方法
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link
              href="/glm-4-7-api"
              className="bg-white p-6 rounded-xl border border-gray-200 hover:border-emerald-400 hover:shadow-lg transition-all group"
            >
              <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-emerald-600">
                GLM 4.7 API 完整指南
              </h3>
              <p className="text-sm text-gray-600">
                了解 GLM-4.7 API 的功能特性、使用方法和最佳实践
              </p>
            </Link>

            <Link
              href="/glm-free-api"
              className="bg-white p-6 rounded-xl border border-gray-200 hover:border-emerald-400 hover:shadow-lg transition-all group"
            >
              <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-emerald-600">
                GLM 免费 API 获取方法
              </h3>
              <p className="text-sm text-gray-600">
                探索如何获取 GLM free API 试用额度和免费方案
              </p>
            </Link>

            <Link
              href="/glm-api-key"
              className="bg-white p-6 rounded-xl border border-gray-200 hover:border-emerald-400 hover:shadow-lg transition-all group"
            >
              <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-emerald-600">
                GLM API Key 申请教程
              </h3>
              <p className="text-sm text-gray-600">
                详细步骤教你如何申请和配置 GLM API key
              </p>
            </Link>

            <Link
              href="/glm-4-7-flash-api"
              className="bg-white p-6 rounded-xl border border-gray-200 hover:border-emerald-400 hover:shadow-lg transition-all group"
            >
              <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-emerald-600">
                GLM 4.7 Flash API 详解
              </h3>
              <p className="text-sm text-gray-600">
                深入了解 GLM-4.7-Flash API 的性能优势和应用场景
              </p>
            </Link>

            <Link
              href="/glm-coding-plan"
              className="bg-white p-6 rounded-xl border border-gray-200 hover:border-emerald-400 hover:shadow-lg transition-all group"
            >
              <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-emerald-600">
                GLM Coding Plan 对比评测
              </h3>
              <p className="text-sm text-gray-600">
                对比 GLM coding plan 各套餐的特性和性价比
              </p>
            </Link>

            <Link
              href="/pricing"
              className="bg-white p-6 rounded-xl border border-gray-200 hover:border-emerald-400 hover:shadow-lg transition-all group"
            >
              <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-emerald-600">
                GLM API Pricing 完整定价
              </h3>
              <p className="text-sm text-gray-600">
                查看所有 GLM API 模型的详细定价和费用计算
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-24 px-6 bg-gradient-to-br from-emerald-600 to-emerald-800">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            准备好开始了吗?
          </h2>
          <p className="text-lg text-emerald-100 mb-8">
            留下您的邮箱,我们将在 72 小时内与您联系,为您开通 GLM API 访问权限
          </p>
          <div className="max-w-md mx-auto">
            <EmailForm source="homepage" />
          </div>
        </div>
      </section>
    </main>
  );
}
