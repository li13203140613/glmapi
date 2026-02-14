import { Metadata } from 'next';
import DocPageContent from '@/components/DocPageContent';
import { docsContent } from '@/lib/docs-data';

const docData = docsContent['image'];

export const metadata: Metadata = {
  title: '图片生成 API - GLM API 代理',
  description: docData.description,
  keywords: ['CogView API', '智谱AI 图片生成', 'GLM 文生图 API', 'CogView-3', '智谱AI 绘画'],
};

export default function ImageDocPage() {
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
