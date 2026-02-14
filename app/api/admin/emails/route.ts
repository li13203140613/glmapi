import { NextRequest, NextResponse } from "next/server";
import { getAllEmails, getEmailCount } from "@/lib/kv";

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

    // Get pagination parameters
    const searchParams = request.nextUrl.searchParams;
    const page = parseInt(searchParams.get("page") || "1", 10);
    const limit = parseInt(searchParams.get("limit") || "50", 10);

    // Get all emails
    const allEmails = await getAllEmails();
    const total = await getEmailCount();

    // Calculate pagination
    const totalPages = Math.ceil(total / limit);
    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;
    const paginatedEmails = allEmails.slice(startIndex, endIndex);

    return NextResponse.json({
      emails: paginatedEmails,
      total,
      page,
      totalPages,
    });
  } catch (error) {
    console.error("Admin emails error:", error);
    return NextResponse.json(
      { success: false, message: "服务器错误" },
      { status: 500 }
    );
  }
}
