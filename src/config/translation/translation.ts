import { useLocale, useTranslations } from "next-intl";
import { getTranslations, unstable_setRequestLocale } from "next-intl/server";
import { Pathnames } from "next-intl/navigation";
import { LocaleName, LocalePrefix } from "../../data/types/basic/translation";
import { TranslationNamespaceX } from "./namespace";

export default class TranslationX {
  //--------------------------------------------------------------------
  // Static
  static readonly namespace = TranslationNamespaceX;

  //--------------------------------------------------------------------
  // Config
  static readonly defaultLocale = "en";
  static readonly locales = ["en", "ar"];
  static readonly localePrefix = LocalePrefix.never;
  // change path name by language
  static readonly pathnames = {
    "/": "/",
    // '/pathname': {
    //   en: '/pathname',
    //   de: '/pfadnamen'
    // }
  } satisfies Pathnames<typeof this.locales>;

  static readonly localeNames: LocaleName[] = [
    { name: "English", code: "en" },
    { name: "عربي", code: "ar" },
  ];
  //--------------------------------------------------------------------
  // Functions
  static currentLocal = () => useLocale();
  static readonly t = (part: string) => useTranslations(part);
  static async getTranslations({
    locale,
    namespace,
  }: {
    locale: string;
    namespace: string;
  }) {
    return await getTranslations({ locale: locale, namespace: namespace });
  }
  static setRequestLocale(locale: string) {
    unstable_setRequestLocale(locale);
  }
}
