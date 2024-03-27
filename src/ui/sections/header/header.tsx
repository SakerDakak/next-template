import Navbar from "./navbar/navbar";
import TranslationX from "@/config/translation/translation";

export default function Header({ locale }: { locale: string }) {
  const t = TranslationX.t(TranslationX.namespace.basic);
  return (
    <header
      className="fixed z-40 top-0 w-full flex
      px-app lg:px-app-lg xl:px-app-xl
      border-b border-border bg-white/80 dark:bg-transparent
      transition-colors duration-500 backdrop-blur supports-backdrop-blur:bg-white/60"
    >
      <Navbar locale={locale} />
    </header>
  );
}
