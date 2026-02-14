'use client';

import { useState } from 'react';
import CodeBlock from '@/components/CodeBlock';

interface CodeExample {
  language: string;
  label: string;
  code: string;
}

interface DocPageContentProps {
  title: string;
  description: string;
  endpoints?: Array<{
    method: string;
    path: string;
    description: string;
  }>;
  parameters?: Array<{
    name: string;
    type: string;
    required: boolean;
    description: string;
  }>;
  requestExample?: string;
  responseExample?: string;
  codeExamples?: CodeExample[];
}

export default function DocPageContent({
  title,
  description,
  endpoints,
  parameters,
  requestExample,
  responseExample,
  codeExamples,
}: DocPageContentProps) {
  const [activeTab, setActiveTab] = useState(0);

  const getMethodColor = (method: string) => {
    switch (method.toUpperCase()) {
      case 'GET':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'POST':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'PUT':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'DELETE':
        return 'bg-red-100 text-red-800 border-red-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <div className="prose prose-gray max-w-none">
      {/* Header */}
      <h1 className="text-3xl font-bold text-gray-900 mb-3">{title}</h1>
      <p className="text-lg text-gray-600 mb-8">{description}</p>

      {/* Endpoints */}
      {endpoints && endpoints.length > 0 && (
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">API 端点</h2>
          <div className="space-y-4 not-prose">
            {endpoints.map((endpoint, index) => (
              <div
                key={index}
                className="bg-gray-50 border border-gray-200 rounded-lg p-4"
              >
                <div className="flex flex-wrap items-center gap-3 mb-2">
                  <span
                    className={`px-2.5 py-1 text-xs font-semibold rounded border ${getMethodColor(
                      endpoint.method
                    )}`}
                  >
                    {endpoint.method.toUpperCase()}
                  </span>
                  <code className="text-sm font-mono text-gray-800">
                    {endpoint.path}
                  </code>
                </div>
                <p className="text-sm text-gray-600">{endpoint.description}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Parameters */}
      {parameters && parameters.length > 0 && (
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">请求参数</h2>
          <div className="overflow-x-auto not-prose">
            <table className="min-w-full border border-gray-200 rounded-lg">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 border-b border-gray-200">
                    参数名
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 border-b border-gray-200">
                    类型
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 border-b border-gray-200">
                    必填
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 border-b border-gray-200">
                    说明
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white">
                {parameters.map((param, index) => (
                  <tr
                    key={index}
                    className={index !== parameters.length - 1 ? 'border-b border-gray-200' : ''}
                  >
                    <td className="px-4 py-3 text-sm">
                      <code className="text-gray-800 font-mono">{param.name}</code>
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-600">
                      {param.type}
                    </td>
                    <td className="px-4 py-3 text-sm">
                      {param.required ? (
                        <span className="px-2 py-1 text-xs font-semibold bg-red-100 text-red-800 rounded">
                          必填
                        </span>
                      ) : (
                        <span className="px-2 py-1 text-xs font-semibold bg-gray-100 text-gray-600 rounded">
                          可选
                        </span>
                      )}
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-600">
                      {param.description}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      )}

      {/* Request Example */}
      {requestExample && (
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">请求示例</h2>
          <div className="not-prose">
            <CodeBlock code={requestExample} language="json" title="请求示例" />
          </div>
        </section>
      )}

      {/* Response Example */}
      {responseExample && (
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">响应示例</h2>
          <div className="not-prose">
            <CodeBlock code={responseExample} language="json" title="响应示例" />
          </div>
        </section>
      )}

      {/* Code Examples with Tabs */}
      {codeExamples && codeExamples.length > 0 && (
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">代码示例</h2>
          <div className="not-prose">
            {/* Tabs */}
            <div className="flex flex-wrap gap-2 mb-4 border-b border-gray-200">
              {codeExamples.map((example, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTab(index)}
                  className={`px-4 py-2 text-sm font-medium transition-colors ${
                    activeTab === index
                      ? 'text-blue-600 border-b-2 border-blue-600'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {example.label}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="mt-4">
              {codeExamples[activeTab] && (
                <CodeBlock
                  code={codeExamples[activeTab].code}
                  language={codeExamples[activeTab].language}
                />
              )}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
