import { Metadata } from 'next';
import DocPageContent from '@/components/DocPageContent';
import { docsContent } from '@/lib/docs-data';

const docData = docsContent['text'];

export const metadata: Metadata = {
  title: '文本生成 API - GLM API 代理',
  description: docData.description,
  keywords: ['GLM-4 API', '智谱AI 文本生成', 'GLM Chat API', 'GLM-4-Flash', '智谱AI 对话接口'],
};

export default function TextDocPage() {
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
