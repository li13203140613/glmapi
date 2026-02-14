import { kv } from "@vercel/kv"

interface EmailRecord {
  email: string
  source: string
  createdAt: string
}

export async function saveEmail(email: string, source: string): Promise<boolean> {
  const record: EmailRecord = {
    email,
    source,
    createdAt: new Date().toISOString(),
  }

  // 去重
  const exists = await kv.sismember("emails:set", email)
  if (exists) return true

  const key = `email:${Date.now()}`
  await kv.set(key, JSON.stringify(record))
  await kv.sadd("emails:keys", key)
  await kv.sadd("emails:set", email)

  return true
}

export async function getAllEmails(): Promise<EmailRecord[]> {
  const keys = (await kv.smembers("emails:keys")) as string[]
  if (!keys || keys.length === 0) return []

  const emails: EmailRecord[] = []
  for (const key of keys) {
    const value = (await kv.get(key)) as string | null
    if (value) {
      try {
        const record = typeof value === "string" ? JSON.parse(value) : value
        emails.push(record as EmailRecord)
      } catch {
        // skip
      }
    }
  }

  return emails.sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  )
}

export async function getEmailCount(): Promise<number> {
  return (await kv.scard("emails:set")) ?? 0
}
