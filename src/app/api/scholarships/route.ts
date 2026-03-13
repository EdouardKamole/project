import { NextRequest, NextResponse } from "next/server";
import { getScholarships } from "@/actions/scholarship.actions";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const country = searchParams.get("country") ?? undefined;
  const scholarships = await getScholarships({ country });
  return NextResponse.json(scholarships);
}
