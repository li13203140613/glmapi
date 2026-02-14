"use client"

import { useState } from "react"
import { useTranslations } from "next-intl"

interface CodeBlockProps {
  code: string
  language?: string
  title?: string
}

export default function CodeBlock({ code, language = "json", title }: CodeBlockProps) {
  const [copied, setCopied] = useState(false)
  const t = useTranslations("codeBlock")

  function handleCopy() {
    navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="overflow-hidden rounded-lg border border-zinc-200 dark:border-zinc-800">
      {title && (
        <div className="flex items-center justify-between border-b border-zinc-200 bg-zinc-50 px-4 py-2 dark:border-zinc-800 dark:bg-zinc-900">
          <span className="text-xs font-medium text-zinc-500 dark:text-zinc-400">{title}</span>
          <button
            onClick={handleCopy}
            className="text-xs text-zinc-500 transition hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
          >
            {copied ? t("copied") : t("copy")}
          </button>
        </div>
      )}
      {!title && (
        <div className="flex justify-end border-b border-zinc-200 bg-zinc-50 px-4 py-2 dark:border-zinc-800 dark:bg-zinc-900">
          <button
            onClick={handleCopy}
            className="text-xs text-zinc-500 transition hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
          >
            {copied ? t("copied") : t("copy")}
          </button>
        </div>
      )}
      <pre className="overflow-x-auto bg-zinc-950 p-4 text-sm leading-relaxed text-zinc-300">
        <code className={`language-${language}`}>{code}</code>
      </pre>
    </div>
  )
}
