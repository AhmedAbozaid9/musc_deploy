import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const currentUser = request.cookies.get("musc-token")?.value;

  if (!currentUser && request.nextUrl.pathname.startsWith("/account")) {
    return Response.redirect(new URL("/", request.url));
  }
  if (!currentUser && request.nextUrl.pathname.startsWith("/cart")) {
    return Response.redirect(new URL("/", request.url));
  }
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
};
