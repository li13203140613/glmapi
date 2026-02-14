"use client"

import { useState } from "react"
import { useTranslations } from "next-intl"

export default function EmailForm({ source = "homepage" }: { source?: string }) {
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [message, setMessage] = useState("")
  const t = useTranslations("emailForm")

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!email) return

    setStatus("loading")
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, source }),
      })
      const data = await res.json()
      if (res.ok) {
        setStatus("success")
        setMessage(t("success"))
        setEmail("")
      } else {
        setStatus("error")
        setMessage(data.error || t("error"))
      }
    } catch {
      setStatus("error")
      setMessage(t("networkError"))
    }
  }

  return (
    <div id="subscribe" className="w-full max-w-md">
      <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:flex-row">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder={t("placeholder")}
          required
          className="flex-1 rounded-full border border-zinc-300 bg-white px-4 py-3 text-sm outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 dark:border-zinc-700 dark:bg-zinc-900 dark:text-white"
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className="rounded-full bg-emerald-600 px-6 py-3 text-sm font-medium text-white transition hover:bg-emerald-700 disabled:opacity-50"
        >
          {status === "loading" ? t("submitting") : t("submit")}
        </button>
      </form>
      {status !== "idle" && (
        <p className={`mt-2 text-sm ${status === "success" ? "text-green-600" : "text-red-600"}`}>
          {message}
        </p>
      )}
    </div>
  )
}
