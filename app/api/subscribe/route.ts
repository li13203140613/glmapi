import { NextRequest, NextResponse } from "next/server";
import { saveEmail } from "@/lib/kv";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, source } = body;

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, message: "无效的邮箱格式" },
        { status: 400 }
      );
    }

    // Save email to KV store
    await saveEmail(email, source || "unknown");

    return NextResponse.json(
      { success: true, message: "订阅成功" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Subscribe error:", error);
    return NextResponse.json(
      { success: false, message: "服务器错误" },
      { status: 500 }
    );
  }
}
