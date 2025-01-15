import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const userAuthToken = request.cookies.get("userauthtoken")?.value;

  const isAccessingFavourites = request.nextUrl.pathname === "/favourites";

  if (!userAuthToken && isAccessingFavourites) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/favourites",
};
