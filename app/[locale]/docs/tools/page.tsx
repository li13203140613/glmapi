import { getTranslations } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { docsContent } from "@/lib/docs-data";
import CodeBlock from "@/components/CodeBlock";

const baseUrl = "https://glm-api.org";
const slug = "tools";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata.docsTools" });

  const languages: Record<string, string> = {};
  for (const l of routing.locales) {
    languages[l] =
      l === "en" ? `${baseUrl}/docs/${slug}` : `${baseUrl}/${l}/docs/${slug}`;
  }

  return {
    title: t("title"),
    description: t("description"),
    keywords: t.raw("keywords"),
    alternates: {
      canonical:
        locale === "en"
          ? `${baseUrl}/docs/${slug}`
          : `${baseUrl}/${locale}/docs/${slug}`,
      languages,
    },
  };
}

export default async function ToolsDocPage() {
  const t = await getTranslations("docsDetail");
  const ui = await getTranslations("docPage");
  const content = docsContent[slug];

  const endpointKeys = Object.keys(
    (t.raw as (key: string) => Record<string, string>)(`${slug}.endpoints`)
  );

  return (
    <div className="prose prose-gray max-w-none">
      <h1 className="text-3xl font-bold text-gray-900 mb-3">
        {t(`${slug}.title`)}
      </h1>
      <p className="text-lg text-gray-600 mb-8">
        {t(`${slug}.description`)}
      </p>

      {/* API Endpoints */}
      {content.endpoints && content.endpoints.length > 0 && (
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            {ui("endpoints")}
          </h2>
          <div className="space-y-4 not-prose">
            {content.endpoints.map((ep, i) => (
              <div
                key={i}
                className="bg-gray-50 border border-gray-200 rounded-lg p-4"
              >
                <div className="flex flex-wrap items-center gap-3 mb-2">
                  <span className="px-2.5 py-1 text-xs font-semibold rounded border bg-emerald-100 text-emerald-800 border-emerald-200">
                    {ep.method.toUpperCase()}
                  </span>
                  <code className="text-sm font-mono text-gray-800">
                    {ep.path}
                  </code>
                </div>
                <p className="text-sm text-gray-600">
                  {t(`${slug}.endpoints.${endpointKeys[i]}`)}
                </p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Request Parameters */}
      {content.parameters && content.parameters.length > 0 && (
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            {ui("parameters")}
          </h2>
          <div className="overflow-x-auto not-prose">
            <table className="min-w-full border border-gray-200 rounded-lg">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 border-b border-gray-200">
                    {ui("paramName")}
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 border-b border-gray-200">
                    {ui("paramType")}
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 border-b border-gray-200">
                    {ui("required")}
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 border-b border-gray-200">
                    {ui("description")}
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white">
                {content.parameters.map((p, i) => (
                  <tr
                    key={i}
                    className={
                      i !== content.parameters.length - 1
                        ? "border-b border-gray-200"
                        : ""
                    }
                  >
                    <td className="px-4 py-3 text-sm">
                      <code className="text-gray-800 font-mono">{p.name}</code>
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-600">
                      {p.type}
                    </td>
                    <td className="px-4 py-3 text-sm">
                      {p.required ? (
                        <span className="px-2 py-1 text-xs font-semibold bg-emerald-100 text-emerald-800 rounded">
                          {ui("required")}
                        </span>
                      ) : (
                        <span className="px-2 py-1 text-xs font-semibold bg-gray-100 text-gray-600 rounded">
                          {ui("optional")}
                        </span>
                      )}
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-600">
                      {t(`${slug}.parameters.${p.name}`)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      )}

      {/* Request Example */}
      {content.requestExample && (
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            {ui("requestExample")}
          </h2>
          <div className="not-prose">
            <CodeBlock
              code={content.requestExample}
              language="json"
              title={ui("requestExample")}
            />
          </div>
        </section>
      )}

      {/* Response Example */}
      {content.responseExample && (
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            {ui("responseExample")}
          </h2>
          <div className="not-prose">
            <CodeBlock
              code={content.responseExample}
              language="json"
              title={ui("responseExample")}
            />
          </div>
        </section>
      )}

      {/* Code Examples */}
      {content.codeExamples && content.codeExamples.length > 0 && (
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            {ui("codeExamples")}
          </h2>
          <div className="not-prose space-y-6">
            {content.codeExamples.map((ex, i) => (
              <div key={i}>
                <h3 className="text-lg font-medium text-gray-800 mb-2">
                  {ex.label}
                </h3>
                <CodeBlock code={ex.code} language={ex.language} />
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
