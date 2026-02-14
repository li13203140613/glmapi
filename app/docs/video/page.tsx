import { Metadata } from 'next';
import DocPageContent from '@/components/DocPageContent';
import { docsContent } from '@/lib/docs-data';

const docData = docsContent['video'];

export const metadata: Metadata = {
  title: '视频生成 API - GLM API 代理',
  description: docData.description,
  keywords: ['CogVideoX API', '智谱AI 视频生成', 'GLM 文生视频 API', 'CogVideoX-2', '智谱AI AI视频'],
};

export default function VideoDocPage() {
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
