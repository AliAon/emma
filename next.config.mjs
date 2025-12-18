/** @type {import('next').NextConfig} */

const projectId = process.env.NEXT_PUBLIC_SUPABASE_PROJECT_ID;
const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;

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
              default-src 'self';
              connect-src 'self'
                http://localhost:3000
                https://*.veriff.com
                https://${projectId}.supabase.co;
              img-src 'self' data: https:;
              script-src 'self' 'unsafe-inline' 'unsafe-eval';
              style-src 'self' 'unsafe-inline';
            `
              .replace(/\s{2,}/g, " ")
              .trim(),
          },
        ],
      },
    ];
  },
};

export default nextConfig;
