import Link from "next/link"

export default function Footer() {
  return (
    <footer className="border-t border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-950">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="text-lg font-bold text-zinc-900 dark:text-white">
              <span className="text-emerald-600">GLM</span> API Proxy
            </h3>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
              GLM API 官方价格 4 折，稳定可靠的 API 代理服务。
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-zinc-900 dark:text-white">产品</h4>
            <ul className="mt-2 space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
              <li><Link href="/pricing" className="hover:text-emerald-600">定价</Link></li>
              <li><Link href="/docs" className="hover:text-emerald-600">API 文档</Link></li>
              <li><Link href="/docs/text" className="hover:text-emerald-600">文本生成</Link></li>
              <li><Link href="/docs/vision" className="hover:text-emerald-600">多模态理解</Link></li>
              <li><Link href="/docs/video" className="hover:text-emerald-600">视频生成</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-zinc-900 dark:text-white">API 能力</h4>
            <ul className="mt-2 space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
              <li><Link href="/docs/image" className="hover:text-emerald-600">图片生成</Link></li>
              <li><Link href="/docs/voice" className="hover:text-emerald-600">语音模型</Link></li>
              <li><Link href="/docs/embedding" className="hover:text-emerald-600">向量模型</Link></li>
              <li><Link href="/docs/tools" className="hover:text-emerald-600">工具调用</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-zinc-900 dark:text-white">热门指南</h4>
            <ul className="mt-2 space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
              <li><Link href="/glm-4-7-api" className="hover:text-emerald-600">GLM 4.7 API Guide</Link></li>
              <li><Link href="/glm-free-api" className="hover:text-emerald-600">GLM Free API</Link></li>
              <li><Link href="/glm-api-key" className="hover:text-emerald-600">GLM API Key</Link></li>
              <li><Link href="/glm-4-7-flash-api" className="hover:text-emerald-600">GLM Flash API</Link></li>
              <li><Link href="/glm-coding-plan" className="hover:text-emerald-600">GLM Coding Plan</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-zinc-200 pt-8 text-center text-sm text-zinc-500 dark:border-zinc-800">
          <p>&copy; {new Date().getFullYear()} GLM API Proxy. All rights reserved.</p>
          <p className="mt-1">
            GLM API 代理 | 智谱AI API | ChatGLM API | 低价 GLM 接口
          </p>
        </div>
      </div>
    </footer>
  )
}
