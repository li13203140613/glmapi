import type { PricingItem } from "@/lib/pricing-data"
import { useTranslations } from "next-intl"

interface PricingTableProps {
  title: string
  items: PricingItem[]
}

export default function PricingTable({ title, items }: PricingTableProps) {
  const t = useTranslations("pricingTable")

  return (
    <div className="overflow-hidden rounded-xl border border-zinc-200 dark:border-zinc-800">
      <div className="bg-zinc-50 px-6 py-4 dark:bg-zinc-900">
        <h3 className="text-lg font-semibold text-zinc-900 dark:text-white">{title}</h3>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-zinc-200 bg-zinc-50/50 dark:border-zinc-800 dark:bg-zinc-900/50">
              <th className="px-6 py-3 text-left font-medium text-zinc-500 dark:text-zinc-400">{t("model")}</th>
              <th className="px-6 py-3 text-right font-medium text-zinc-500 dark:text-zinc-400">
                {t("officialPrice")}
              </th>
              <th className="px-6 py-3 text-right font-medium text-blue-600">{t("ourPrice")}</th>
              <th className="px-6 py-3 text-right font-medium text-green-600">{t("save")}</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-zinc-200 dark:divide-zinc-800">
            {items.map((item) => {
              const saved = item.officialPrice - item.ourPrice
              const savedPercent = Math.round((saved / item.officialPrice) * 100)
              return (
                <tr key={item.model} className="transition hover:bg-zinc-50 dark:hover:bg-zinc-900/50">
                  <td className="px-6 py-4">
                    <div className="font-medium text-zinc-900 dark:text-white">{item.model}</div>
                    {item.description && (
                      <div className="text-xs text-zinc-500 dark:text-zinc-400">{item.description}</div>
                    )}
                  </td>
                  <td className="px-6 py-4 text-right text-zinc-500 line-through dark:text-zinc-400">
                    ¥{item.officialPrice}/{item.unit}
                  </td>
                  <td className="px-6 py-4 text-right font-semibold text-blue-600">
                    ¥{item.ourPrice}/{item.unit}
                  </td>
                  <td className="px-6 py-4 text-right">
                    <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800 dark:bg-green-900/30 dark:text-green-400">
                      {t("savePercent", { percent: savedPercent })}
                    </span>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}
