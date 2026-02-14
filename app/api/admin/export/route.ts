import { NextRequest, NextResponse } from "next/server";
import { getAllEmails } from "@/lib/kv";

export async function GET(request: NextRequest) {
  try {
    // Check authentication
    const authHeader = request.headers.get("authorization");
    const token = authHeader?.replace("Bearer ", "");

    if (!token || token !== process.env.ADMIN_PASSWORD) {
      return NextResponse.json(
        { success: false, message: "未授权" },
        { status: 401 }
      );
    }

    // Get all emails
    const allEmails = await getAllEmails();

    // Generate CSV content
    const csvHeaders = "邮箱,来源,时间\n";
    const csvRows = allEmails
      .map((entry) => {
        const email = entry.email || "";
        const source = entry.source || "unknown";
        const timestamp = entry.createdAt
          ? new Date(entry.createdAt).toLocaleString("zh-CN")
          : "";
        return `${email},${source},${timestamp}`;
      })
      .join("\n");

    const csvContent = csvHeaders + csvRows;

    // Return CSV file
    return new NextResponse(csvContent, {
      status: 200,
      headers: {
        "Content-Type": "text/csv; charset=utf-8",
        "Content-Disposition": "attachment; filename=emails.csv",
      },
    });
  } catch (error) {
    console.error("Export error:", error);
    return NextResponse.json(
      { success: false, message: "服务器错误" },
      { status: 500 }
    );
  }
}
