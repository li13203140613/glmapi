"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { docSections } from "@/lib/docs-data"

export default function ApiDocSidebar() {
  const pathname = usePathname()

  return (
    <aside className="w-full shrink-0 md:w-64">
      <nav className="sticky top-20 space-y-1">
        <Link
          href="/docs"
          className={`block rounded-lg px-3 py-2 text-sm font-medium transition ${
            pathname === "/docs"
              ? "bg-emerald-50 text-emerald-700 dark:bg-emerald-900/20 dark:text-emerald-400"
              : "text-zinc-600 hover:bg-zinc-100 dark:text-zinc-400 dark:hover:bg-zinc-800"
          }`}
        >
          API 概览
        </Link>
        <div className="py-2">
          <div className="px-3 py-1 text-xs font-semibold uppercase tracking-wider text-zinc-400">
            接口文档
          </div>
        </div>
        {docSections.map((section) => (
          <Link
            key={section.slug}
            href={`/docs/${section.slug}`}
            className={`flex items-center gap-2 rounded-lg px-3 py-2 text-sm transition ${
              pathname === `/docs/${section.slug}`
                ? "bg-emerald-50 font-medium text-emerald-700 dark:bg-emerald-900/20 dark:text-emerald-400"
                : "text-zinc-600 hover:bg-zinc-100 dark:text-zinc-400 dark:hover:bg-zinc-800"
            }`}
          >
            <span>{section.icon}</span>
            <span>{section.title}</span>
          </Link>
        ))}
      </nav>
    </aside>
  )
}
