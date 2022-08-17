/** @type {import('next').NextConfig} */
const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");
const nextConfig = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      reactStrictMode: true,
      swcMinify: true,
      env: {
        db_name: "db.dev.json",
      },
    };
  } else {
    return {
      reactStrictMode: true,
      swcMinify: true,
      env: {
        db_name: "db.prod.json",
      },
    };
  }
};

module.exports = nextConfig;
