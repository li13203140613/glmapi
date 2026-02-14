import { Metadata } from 'next';
import DocPageContent from '@/components/DocPageContent';
import { docsContent } from '@/lib/docs-data';

const docData = docsContent['voice'];

export const metadata: Metadata = {
  title: '语音模型 API - GLM API 代理',
  description: docData.description,
  keywords: ['GLM-4-Voice API', '智谱AI 语音 API', 'GLM 语音识别', 'GLM 语音合成', '智谱AI 语音模型'],
};

export default function VoiceDocPage() {
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
