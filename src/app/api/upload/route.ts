import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  // TODO: handle file upload to S3 or Cloudinary
  return NextResponse.json({ message: "Upload endpoint — configure storage" });
}
