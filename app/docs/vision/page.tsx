import { Metadata } from 'next';
import DocPageContent from '@/components/DocPageContent';
import { docsContent } from '@/lib/docs-data';

const docData = docsContent['vision'];

export const metadata: Metadata = {
  title: '多模态理解 API - GLM API 代理',
  description: docData.description,
  keywords: ['GLM-4V API', '智谱AI 多模态', 'GLM 图片理解 API', 'GLM-4V-Plus', '智谱AI 视觉理解'],
};

export default function VisionDocPage() {
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
