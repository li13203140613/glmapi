import { Metadata } from 'next';
import ApiDocSidebar from '@/components/ApiDocSidebar';

export const metadata: Metadata = {
  title: 'API 文档 - GLM API 代理',
  description: '完整的 GLM (智谱AI) API 代理服务文档，包括文本生成、多模态理解、图片生成、视频生成、语音模型、向量化和工具调用等功能的详细说明。',
};

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <aside className="w-full lg:w-64 flex-shrink-0">
            <div className="lg:sticky lg:top-8">
              <ApiDocSidebar />
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1 min-w-0">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 sm:p-8">
              {children}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
