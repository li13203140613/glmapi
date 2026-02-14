import fs from "fs"
import path from "path"

interface EmailRecord {
  email: string
  source: string
  createdAt: string
}

const DATA_FILE = path.join(process.cwd(), "data", "emails.json")

function ensureDataFile() {
  const dir = path.dirname(DATA_FILE)
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true })
  }
  if (!fs.existsSync(DATA_FILE)) {
    fs.writeFileSync(DATA_FILE, "[]", "utf-8")
  }
}

function readEmails(): EmailRecord[] {
  ensureDataFile()
  try {
    const raw = fs.readFileSync(DATA_FILE, "utf-8")
    return JSON.parse(raw)
  } catch {
    return []
  }
}

function writeEmails(emails: EmailRecord[]) {
  ensureDataFile()
  fs.writeFileSync(DATA_FILE, JSON.stringify(emails, null, 2), "utf-8")
}

export async function saveEmail(email: string, source: string): Promise<boolean> {
  const emails = readEmails()

  // 去重：同一邮箱不重复存储
  if (emails.some((e) => e.email === email)) {
    return true
  }

  emails.unshift({
    email,
    source,
    createdAt: new Date().toISOString(),
  })

  writeEmails(emails)
  return true
}

export async function getAllEmails(): Promise<EmailRecord[]> {
  return readEmails()
}

export async function getEmailCount(): Promise<number> {
  return readEmails().length
}
