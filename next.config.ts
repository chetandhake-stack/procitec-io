import type { NextConfig } from "next";

const getAllowedDevOrigins = (): string[] => {
  const baseOrigins = ["127.0.0.1", "localhost", "::1"];
  const envOrigins = (process.env.NEXT_PUBLIC_DEV_ORIGINS ?? "")
    .split(",")
    .map((origin) => origin.trim())
    .filter((origin) => origin.length > 0);

  return [...new Set([...baseOrigins, ...envOrigins])];
};

const nextConfig: NextConfig = {
  allowedDevOrigins: getAllowedDevOrigins(),
};

export default nextConfig;
