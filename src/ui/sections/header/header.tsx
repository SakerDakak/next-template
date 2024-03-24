import LanguageToggle from "@/ui/components/basic/toggle/languageToggle";
import ThemeToggle from "@/ui/components/basic/toggle/themeToggle";
import CircularProgress from "@/ui/components/next-ui/circularProgress";
import { Suspense } from "react";

export default function Header() {
  return (
    <header className="fixed z-50 top-0 w-full flex">
      <ThemeToggle />
      <Suspense fallback={<CircularProgress />}>
        <LanguageToggle />
      </Suspense>
    </header>
  );
}
