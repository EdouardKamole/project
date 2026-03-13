import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const body = await req.json();
  // TODO: validate session, then call applyToScholarship action
  return NextResponse.json({ message: "Application submitted" });
}
