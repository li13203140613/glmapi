"use client"

import { Link } from "@/i18n/navigation"
import { useState } from "react"
import { useTranslations } from "next-intl"
import LanguageSwitcher from "./LanguageSwitcher"

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const t = useTranslations("nav")

  return (
    <nav className="sticky top-0 z-50 border-b border-zinc-200 bg-white/80 backdrop-blur-md dark:border-zinc-800 dark:bg-zinc-950/80">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2 font-bold text-lg">
          <span className="text-emerald-600">GLM</span>
          <span className="text-zinc-900 dark:text-white">API Proxy</span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-6 md:flex">
          <Link href="/pricing" className="text-sm font-medium text-zinc-600 transition hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white">
            {t("pricing")}
          </Link>
          <Link href="/docs" className="text-sm font-medium text-zinc-600 transition hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white">
            {t("docs")}
          </Link>
          <Link href="/glm-coding-plan" className="text-sm font-medium text-zinc-600 transition hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white">
            {t("codingPlan")}
          </Link>
          <LanguageSwitcher />
          <Link
            href="/#subscribe"
            className="rounded-full bg-emerald-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-emerald-700"
          >
            {t("getStarted")}
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="flex h-10 w-10 items-center justify-center rounded-lg md:hidden"
          aria-label="Toggle menu"
        >
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-zinc-200 bg-white px-4 py-4 md:hidden dark:border-zinc-800 dark:bg-zinc-950">
          <div className="flex flex-col gap-4">
            <Link href="/pricing" onClick={() => setOpen(false)} className="text-sm font-medium text-zinc-600 dark:text-zinc-400">
              {t("pricing")}
            </Link>
            <Link href="/docs" onClick={() => setOpen(false)} className="text-sm font-medium text-zinc-600 dark:text-zinc-400">
              {t("docs")}
            </Link>
            <Link href="/glm-coding-plan" onClick={() => setOpen(false)} className="text-sm font-medium text-zinc-600 dark:text-zinc-400">
              {t("codingPlan")}
            </Link>
            <LanguageSwitcher />
            <Link
              href="/#subscribe"
              onClick={() => setOpen(false)}
              className="rounded-full bg-emerald-600 px-4 py-2 text-center text-sm font-medium text-white"
            >
              {t("getStarted")}
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
