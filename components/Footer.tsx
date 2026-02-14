import { useTranslations } from "next-intl"
import { Link } from "@/i18n/navigation"

export default function Footer() {
  const t = useTranslations("footer")

  return (
    <footer className="border-t border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-950">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div>
            <h3 className="text-lg font-bold text-zinc-900 dark:text-white">
              <span className="text-emerald-600">GLM</span> API Proxy
            </h3>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
              {t("description")}
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-zinc-900 dark:text-white">{t("product")}</h4>
            <ul className="mt-2 space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
              <li><Link href="/pricing" className="hover:text-emerald-600">{t("pricing")}</Link></li>
              <li><Link href="/docs" className="hover:text-emerald-600">{t("docs")}</Link></li>
              <li><Link href="/docs/text" className="hover:text-emerald-600">{t("textGeneration")}</Link></li>
              <li><Link href="/docs/vision" className="hover:text-emerald-600">{t("visionModel")}</Link></li>
              <li><Link href="/docs/video" className="hover:text-emerald-600">{t("videoGeneration")}</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-zinc-900 dark:text-white">{t("apiCapabilities")}</h4>
            <ul className="mt-2 space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
              <li><Link href="/docs/image" className="hover:text-emerald-600">{t("imageGeneration")}</Link></li>
              <li><Link href="/docs/voice" className="hover:text-emerald-600">{t("voiceModel")}</Link></li>
              <li><Link href="/docs/embedding" className="hover:text-emerald-600">{t("embedding")}</Link></li>
              <li><Link href="/docs/tools" className="hover:text-emerald-600">{t("webSearch")}</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-zinc-900 dark:text-white">{t("guides")}</h4>
            <ul className="mt-2 space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
              <li><Link href="/glm-4-7-api" className="hover:text-emerald-600">GLM 4.7 API</Link></li>
              <li><Link href="/glm-free-api" className="hover:text-emerald-600">GLM Free API</Link></li>
              <li><Link href="/glm-api-key" className="hover:text-emerald-600">GLM API Key</Link></li>
              <li><Link href="/glm-4-7-flash-api" className="hover:text-emerald-600">GLM 4.7 Flash</Link></li>
              <li><Link href="/glm-coding-plan" className="hover:text-emerald-600">GLM Coding Plan</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-zinc-200 pt-8 text-center text-sm text-zinc-500 dark:border-zinc-800">
          <p>&copy; {new Date().getFullYear()} {t("copyright")}</p>
          <p className="mt-1">{t("tagline")}</p>
        </div>
      </div>
    </footer>
  )
}
