import { Metadata } from 'next';
import DocPageContent from '@/components/DocPageContent';
import { docsContent } from '@/lib/docs-data';

const docData = docsContent['embedding'];

export const metadata: Metadata = {
  title: '向量化 API - GLM API 代理',
  description: docData.description,
  keywords: ['GLM Embedding API', '智谱AI 向量化', 'Embedding-3', 'GLM 文本嵌入', '智谱AI 语义向量'],
};

export default function EmbeddingDocPage() {
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
