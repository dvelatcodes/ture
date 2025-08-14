import { NextResponse } from "next/server";

export function middleware(req) {
  const { pathname } = req.nextUrl;
  const token = req.cookies.get("Auth_token")?.value;

  if (!token && (pathname.startsWith("/products") || pathname.startsWith("/profile") || pathname.startsWith("/product"))) {
    return NextResponse.redirect(new URL("/form", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/products/:path*", "/profile/:path*", "/product/:path*",],
};
