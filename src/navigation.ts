import { createLocalizedPathnamesNavigation } from "next-intl/navigation";
import TranslationX from "./config/translation/translation";

export const { Link, redirect, usePathname, useRouter } =
  createLocalizedPathnamesNavigation({
    locales: TranslationX.locales,
    pathnames: TranslationX.pathnames,
    localePrefix: TranslationX.localePrefix,
  });
