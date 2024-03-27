import Logo from "@/ui/components/basic/logo";
import NavbarItems from "@/ui/sections/header/navbar/navItemes/navItems";
import LanguageToggle from "@/ui/components/basic/toggle/language/toggleLanguage";
import ThemeToggle from "@/ui/components/basic/toggle/theme/toggleTheme";
import MenuButton from "@/ui/components/basic/buttons/menuButton";

export default function Navbar({ locale }: { locale: string }) {
  return (
    <div className="w-full h-nav py-4 flex justify-between items-center">
      {/* Logo */}
      <Logo className="h-nav p-2" darkMode={true} />
      {/* Nav Items */}
      <NavbarItems />
      {/* Buttons */}
      <div className="flex gap-2 items-center">
        <ThemeToggle locale={locale} />
        <LanguageToggle locale={locale} />
        <MenuButton />
      </div>
    </div>
  );
}
