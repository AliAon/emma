/** @type {import('next').NextConfig} */

const projectId = process.env.NEXT_PUBLIC_SUPABASE_PROJECT_ID;
const backend_url = process.env.NEXT_PUBLIC_BACKEND_URL;

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
              connect-src 'self' https://*.veriff.com https://${projectId}.supabase.co ${backend_url};
            `.replace(/\s+/g, " "),
          },
        ],
      },
    ];
  },
};

export default nextConfig;
