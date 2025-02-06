import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ["s3-alpha-sig.figma.com"], // figma 이미지 도메인 허용
    // 또는 더 유연하게:
  },
  output: "export", // 정적 배포 하기 위해서
};

export default nextConfig;
