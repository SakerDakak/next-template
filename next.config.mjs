// @ts-check
import createNextIntlPlugin from "next-intl/plugin";
// import withPWA from "next-pwa";

const withNextIntl = createNextIntlPlugin(
  // Specify a custom path here
  "./src/i18n.ts"
);

/** @type {import('next').NextConfig} */
const nextConfig = {
 
};
// const nextConfigWithPWA = withPWA(nextConfig);
export default withNextIntl(nextConfig);

// --------------------------- //
// *********** PWA *********** //
// --------------------------- //
// const nextConfigWithPWA = withPWA({
//   dest: "public",
//   register: true,
//   skipWaiting: false,
// });
// export default withNextIntl(nextConfigWithPWA);