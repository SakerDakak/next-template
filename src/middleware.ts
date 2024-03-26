import createMiddleware from 'next-intl/middleware';
import TranslationX from '@/config/translation/translation';
import { pathnames } from './navigation';


export default createMiddleware({
  defaultLocale: TranslationX.defaultLocale,
  locales: TranslationX.locales,
  localePrefix: TranslationX.localePrefix,
  pathnames: pathnames,
});

export const config = {
  matcher: [
    // Enable a redirect to a matching locale at the root
    "/",

    // Set a cookie to remember the previous locale for
    // all requests that have a locale prefix
    '/(ar|en)/:path*',

    // Enable redirects that add missing locales
    // (e.g. `/pathnames` -> `/en/pathnames`)
    "/((?!_next|_vercel|.*\\..*).*)",
  ],
};
// `/(${TranslationX.locales.join("|")})/:path*`,
