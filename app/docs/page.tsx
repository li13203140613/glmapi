import { Metadata } from 'next';
import Link from 'next/link';
import { docSections } from '@/lib/docs-data';

export const metadata: Metadata = {
  title: 'API 文档概览 - GLM API 代理',
  description: 'GLM (智谱AI) API 代理服务文档概览，提供文本生成、多模态理解、视频生成、图片生成、语音模型、向量化和工具调用等多种 AI 能力。',
};

export default function DocsOverviewPage() {
  return (
    <div className="prose prose-gray max-w-none">
      <h1 className="text-3xl font-bold text-gray-900 mb-4">GLM API 文档</h1>

      <p className="text-lg text-gray-600 mb-8">
        欢迎使用 GLM (智谱AI) API 代理服务。本文档提供了所有可用 API 端点的详细说明，包括请求参数、响应格式和代码示例。
      </p>

      {/* Base URL Section */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">基础 URL</h2>
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
          <code className="text-sm text-gray-800">https://your-proxy-domain.com/v1</code>
        </div>
        <p className="text-gray-600 mt-3">
          所有 API 请求都应该发送到上述基础 URL，后跟具体的端点路径。
        </p>
      </section>

      {/* Authentication Section */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">身份验证</h2>
        <p className="text-gray-600 mb-3">
          所有 API 请求都需要在请求头中包含有效的 Bearer Token：
        </p>
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
          <code className="text-sm text-gray-800">Authorization: Bearer YOUR_API_KEY</code>
        </div>
        <p className="text-gray-600 mt-3">
          请妥善保管您的 API 密钥，不要在客户端代码中暴露。
        </p>
      </section>

      {/* API Sections Grid */}
      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">API 功能模块</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 not-prose">
          {docSections.map((section) => (
            <Link
              key={section.slug}
              href={`/docs/${section.slug}`}
              className="group block p-6 bg-white border border-gray-200 rounded-lg hover:border-emerald-500 hover:shadow-md transition-all duration-200"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 text-3xl">
                  {section.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg font-semibold text-gray-900 group-hover:text-emerald-600 transition-colors mb-1">
                    {section.title}
                  </h3>
                  <p className="text-sm text-gray-500 mb-2">
                    {section.titleEn}
                  </p>
                  <p className="text-sm text-gray-600 line-clamp-2">
                    {section.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Additional Info */}
      <section className="mt-10 p-6 bg-emerald-50 border border-emerald-200 rounded-lg">
        <h3 className="text-lg font-semibold text-emerald-900 mb-2">
          需要帮助？
        </h3>
        <p className="text-emerald-800 text-sm">
          如果您在使用过程中遇到任何问题，或需要技术支持，请通过文档中提供的联系方式与我们联系。
        </p>
      </section>
    </div>
  );
}
