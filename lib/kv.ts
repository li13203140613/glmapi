import { neon } from "@neondatabase/serverless"

function getSQL() {
  return neon(process.env.DATABASE_URL!)
}

// 首次调用时自动建表
let tableCreated = false
async function ensureTable() {
  if (tableCreated) return
  const sql = getSQL()
  await sql`
    CREATE TABLE IF NOT EXISTS emails (
      id SERIAL PRIMARY KEY,
      email TEXT UNIQUE NOT NULL,
      source TEXT DEFAULT 'unknown',
      site TEXT DEFAULT 'unknown',
      created_at TIMESTAMPTZ DEFAULT NOW()
    )
  `
  // 兼容旧表：如果 site 列不存在则添加
  await sql`
    ALTER TABLE emails ADD COLUMN IF NOT EXISTS site TEXT DEFAULT 'unknown'
  `
  tableCreated = true
}

export async function saveEmail(email: string, source: string, site: string = "unknown"): Promise<boolean> {
  await ensureTable()
  const sql = getSQL()
  await sql`
    INSERT INTO emails (email, source, site)
    VALUES (${email}, ${source}, ${site})
    ON CONFLICT (email) DO NOTHING
  `
  return true
}

export async function getAllEmails() {
  await ensureTable()
  const sql = getSQL()
  const rows = await sql`
    SELECT email, source, site, created_at as "createdAt"
    FROM emails
    ORDER BY created_at DESC
  `
  return rows
}

export async function getEmailCount(): Promise<number> {
  await ensureTable()
  const sql = getSQL()
  const rows = await sql`SELECT COUNT(*) as count FROM emails`
  return Number(rows[0].count)
}
