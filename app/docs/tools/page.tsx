import { Metadata } from 'next';
import DocPageContent from '@/components/DocPageContent';
import { docsContent } from '@/lib/docs-data';

const docData = docsContent['tools'];

export const metadata: Metadata = {
  title: '工具调用 API - GLM API 代理',
  description: docData.description,
  keywords: ['GLM Web Search API', '智谱AI 联网搜索', 'GLM 工具调用', 'GLM Function Calling', '智谱AI 网络检索'],
};

export default function ToolsDocPage() {
  return (
    <DocPageContent
      title={docData.title}
      description={docData.description}
      endpoints={docData.endpoints}
      parameters={docData.parameters}
      requestExample={docData.requestExample}
      responseExample={docData.responseExample}
      codeExamples={docData.codeExamples}
    />
  );
}
