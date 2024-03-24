import createNextIntlPlugin from "next-intl/plugin";
import withPWA from "next-pwa";

const withNextIntl = createNextIntlPlugin();

// --------------------------- //
// *********** PWA *********** //
// --------------------------- //

const nextConfig = {
  disable: process.env.NODE_ENV === "development",
  dest: "public",
  register: true,
  skipWaiting: false,
};

const nextConfigWithPWA = withPWA(nextConfig);
export default withNextIntl(nextConfigWithPWA);