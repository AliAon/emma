/** @type {import('next').NextConfig} */

// Helper: build a CSP string
function buildCSP() {
  // Allow Next dev overlay / React Fast Refresh only in dev
  const isDev = process.env.NODE_ENV !== "production";

  // Your Supabase origin (from NEXT_PUBLIC_SUPABASE_URL)
  // e.g. https://abc.supabase.co  -> allow that host in connect-src & img-src
  const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
  const supabaseOrigin = (() => {
    try {
      return new URL(SUPABASE_URL).origin;
    } catch {
      return "";
    }
  })();

  // Core directives
  const directives = {
    "default-src": ["'self'"],
    "base-uri": ["'self'"],
    "object-src": ["'none'"],

    // JS
    "script-src": [
      "'self'",
      "https://cdn.veriff.me",
      ...(isDev ? ["'unsafe-eval'", "'unsafe-inline'"] : []),
    ],
    "script-src-attr": ["'none'"],

    // CSS
    "style-src": [
      "'self'",
      "https://cdn.veriff.me",
      // remove 'unsafe-inline' if you do NOT use inline styles anywhere
      "'unsafe-inline'",
    ],

    // Images
    "img-src": [
      "'self'",
      "data:",
      "blob:",
      "https://*.veriff.com",
      ...(supabaseOrigin ? [supabaseOrigin] : []),
    ],

    // XHR / fetch / websockets
    "connect-src": [
      "'self'",
      "https://*.veriff.com",
      ...(supabaseOrigin ? [supabaseOrigin] : []),
    ],

    // iframes (Veriff embeds)
    "frame-src": ["https://*.veriff.com"],

    // Fonts (add external origins here if you load any)
    "font-src": ["'self'", "data:"],

    // Media (SDKs can use blob streams)
    "media-src": ["'self'", "blob:"],
  };

  // Turn the object into a single header string
  return Object.entries(directives)
    .map(([key, vals]) => `${key} ${vals.join(" ")}`)
    .join("; ");
}
const projectId = process.env.NEXT_PUBLIC_SUPABASE_PROJECT_ID;

const nextConfig = {
  reactStrictMode: true,
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Content-Security-Policy",
            value: `
              connect-src 'self' https://*.veriff.com https://${projectId}.supabase.co;
            `.replace(/\s+/g, " "),
          },
        ],
      },
    ];
  },
};

export default nextConfig;
