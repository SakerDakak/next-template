import LanguageToggle from "@/ui/components/basic/toggle/languageToggle";
import ThemeToggle from "@/ui/components/basic/toggle/themeToggle";

export default function HomePage() {
  return (
    <main>
      <ThemeToggle />
      <LanguageToggle />
    </main>
  );
}
