// middleware.ts
import { NextResponse, userAgent } from "next/server";
import type { NextRequest } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const hostname = request.headers.get("host");
  const { device } = userAgent(request);

  if (hostname === "localhost:3000" && device.type === "mobile") {
    const url = request.nextUrl.clone();
    console.log(url);
    url.hostname = "m.localhost";
    return NextResponse.redirect(url);
  }

  if (hostname === "m.localhost:3000") {
    const url = request.nextUrl.clone();
    url.pathname = "/mobile" + url.pathname;
    return NextResponse.rewrite(url);
  }

  return NextResponse.next();
}
