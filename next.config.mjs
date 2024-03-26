// @ts-check
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin(
  // Specify a custom path here
  "./src/i18n.ts"
);

/** @type {import('next').NextConfig} */
const config = {};

export default withNextIntl(config);

