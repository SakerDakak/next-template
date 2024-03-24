import { notFound } from "next/navigation";
import { getRequestConfig } from "next-intl/server";
import TranslationX from "./config/translation/translation";

export default getRequestConfig(async ({ locale }) => {
  // Validate that the incoming `locale` parameter is valid
  if (!TranslationX.locales.includes(locale as any)) notFound();

  return {
    messages: (
      await (locale === "en"
        ? // When using Turbopack, this will enable HMR for `en`
          import("./config/translation/locales/en.json")
        : import(`./config/translation/locales/${locale}.json`))
    ).default,
  };
});
