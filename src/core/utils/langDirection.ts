/**
 * Array of right-to-left language locale codes.
 */
const rtlLanguages = ["ar", "fa", "he", "dv", "ku", "ur"];

/**
 * Checks if a given locale is right-to-left based on a list of RTL locales.
 *
 * @param locale - The locale to check
 * @returns 'rtl' if the locale is right-to-left, 'ltr' otherwise
 */
export default function getLangDirection(locale: string) : 'rtl' | 'ltr' {
  if (rtlLanguages.find((lang) => lang === locale)) {
    return "rtl";
  } else {
    return "ltr";
  }
}
