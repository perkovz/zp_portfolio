import { NextResponse, type NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  if (process.env.NODE_ENV !== "production") {
    return NextResponse.next();
  }

  return new NextResponse(null, { status: 404 });
}

export const config = {
  matcher: [
    "/work/decor-contractor/:path*",
    "/work/ai-design-lab/:path*",
    "/work/fairway-plus/:path*",
    "/images/projects/decor-contractor/:path*",
    "/images/projects/ai-design-lab/:path*",
    "/images/projects/fairway/:path*",
  ],
};
