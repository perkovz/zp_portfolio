import { NextResponse, type NextRequest } from "next/server";
import { routes } from "@/app/resources/config";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const isGallery = pathname === "/gallery" || pathname.startsWith("/gallery/");

  if (isGallery && !routes["/gallery"]) {
    return new NextResponse(null, { status: 404 });
  }

  if (process.env.NODE_ENV !== "production" || isGallery) {
    return NextResponse.next();
  }

  return new NextResponse(null, { status: 404 });
}

export const config = {
  matcher: [
    "/gallery",
    "/gallery/:path*",
    "/work/decor-contractor/:path*",
    "/work/ai-design-lab/:path*",
    "/work/fairway-plus/:path*",
    "/images/projects/decor-contractor/:path*",
    "/images/projects/ai-design-lab/:path*",
    "/images/projects/fairway/:path*",
  ],
};
