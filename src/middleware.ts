import { NextRequest, NextResponse } from "next/server";

const studentRoutes = ["/student"];
const universityRoutes = ["/university"];
const adminRoutes = ["/admin"];

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  const token = req.cookies.get("better-auth.session_token")?.value;

  const isProtected = [...studentRoutes, ...universityRoutes, ...adminRoutes].some((r) => pathname.startsWith(r));

  if (isProtected && !token) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/student/:path*", "/university/:path*", "/admin/:path*"],
};
