import Logo from "@/ui/components/basic/logo";
import Navbar from "./navbar";
import NavbarItems from "@/ui/components/basic/navItems";

export default function Header() {
  return (
    <header className="fixed z-40 top-0 w-full flex">
      <Navbar
        logo={<Logo classSize="h-nav" darkMode={true} />}
        navbarItems={<NavbarItems />}
      />
    </header>
  );
}
