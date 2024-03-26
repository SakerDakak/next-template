"use client";
import IconX from "@/config/assets/icons";
import ImageX from "@/config/assets/images";
import Icon from "@/ui/components/basic/icon";
import LoadingButtonIcon from "@/ui/components/basic/loading/loadingButtonIcon";
import Logo from "@/ui/components/basic/logo";
import LanguageToggle from "@/ui/components/basic/toggle/languageToggle";
import ThemeToggle from "@/ui/components/basic/toggle/themeToggle";
import { Button } from "@/ui/components/shadcn-ui/button";
import React, { Suspense, useState } from "react";

export default function Navbar({
  logo,
  navbarItems,
}: {
  logo: React.ReactNode;
  navbarItems: React.ReactNode;
}) {
  const [isOpenNav, setIsOpenNav] = useState(false);

  return (
    <div
      className="w-full h-nav py-4 px-app lg:px-app-lg xl:px-app-xl 
      flex justify-between items-center
      border-b border-border bg-white/80 dark:bg-transparent
      transition-colors duration-500 backdrop-blur supports-backdrop-blur:bg-white/60"
    >
      {/* Logo */}
      {logo}
      {/* Nav Items */}
      <div className={isOpenNav ? "" : "hidden" + " md:inline-block"}>
        {navbarItems}
      </div>

      {/* Buttons */}
      <div className="flex gap-2 items-center">
        <ThemeToggle />
        <Suspense fallback={<LoadingButtonIcon />}>
          <LanguageToggle />
        </Suspense>
        {/* Menu Icon */}
        <Button
          variant="outline"
          size="icon"
          className="md:hidden text-xl z-50"
          onClick={() => setIsOpenNav((val) => !val)}
        >
          <Icon icon={isOpenNav ? IconX.menuClose : IconX.menuOpen} />
        </Button>
      </div>
    </div>
  );
}
