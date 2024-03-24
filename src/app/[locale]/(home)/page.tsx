import TranslationX from "@/config/translation/translation";
import LanguageToggle from "@/ui/components/basic/toggle/languageToggle";
import ThemeToggle from "@/ui/components/basic/toggle/themeToggle";

export default function HomePage({ params }: { params: any }) {
  TranslationX.setRequestLocale(params.locale);
  return (
    <main>
      <ThemeToggle />
      <LanguageToggle />
    </main>
  );
}
