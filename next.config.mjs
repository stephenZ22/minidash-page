/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
        return [
        {
            source: "/api/:path*", // 前端访问 /api/*
            destination: "http://localhost:3001/:path*", // 转发到 Go 服务
        },
        ];
  },
};

export default nextConfig;
