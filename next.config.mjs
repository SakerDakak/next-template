// @ts-check
import createNextIntlPlugin from "next-intl/plugin";
import withPWA from "next-pwa";

const withNextIntl = createNextIntlPlugin(
  // Specify a custom path here
  "./src/i18n.ts"
);

// --------------------------- //
// *********** PWA *********** //
// --------------------------- //

const nextConfig = {
  dest: "public",
  register: true,
  skipWaiting: false,
};

const nextConfigWithPWA = withPWA(nextConfig);
export default withNextIntl(nextConfigWithPWA);