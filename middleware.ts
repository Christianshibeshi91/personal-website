import { NextResponse } from "next/server";

const MAINTENANCE_HTML = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<meta name="robots" content="noindex" />
<title>Site Temporarily Unavailable</title>
<style>
  html, body { height: 100%; margin: 0; }
  body {
    display: flex;
    align-items: center;
    justify-content: center;
    background: #06080f;
    color: #f4f6fb;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Inter, Roboto, sans-serif;
    text-align: center;
    padding: 24px;
  }
  .card { max-width: 28rem; }
  h1 { font-size: 1.5rem; font-weight: 700; margin: 0 0 0.75rem; }
  p { color: #9aa3b8; line-height: 1.6; margin: 0; }
</style>
</head>
<body>
  <div class="card">
    <h1>Site temporarily unavailable</h1>
    <p>This site is offline for maintenance right now. Please check back soon.</p>
  </div>
</body>
</html>`;

export function middleware() {
  return new NextResponse(MAINTENANCE_HTML, {
    status: 503,
    headers: {
      "Content-Type": "text/html; charset=utf-8",
      "Retry-After": "3600",
    },
  });
}

export const config = {
  matcher: "/:path*",
};
