import * as React from "react";
import { Button } from "@/ui/components/shadcn-ui/button";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/ui/components/shadcn-ui/dropdown-menu";
import IconX from "@/config/assets/icons";
import ThemeX from "@/config/theme/theme";
import TranslationX from "@/config/translation/translation";
import ThemeItem from "./_clientSide";
import Icon from "../../icon";
import getLangDirection from "@/core/utils/langDirection";

export default function ThemeToggle({ locale }: { locale: string }) {
  const t = TranslationX.t(TranslationX.namespace.basic);
  return (
    <DropdownMenu dir={getLangDirection(locale)}>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon" className="z-10">
          <Icon
            icon={IconX.lightTheme}
            size={22}
            className="rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
          />
          <Icon
            icon={IconX.darkTheme}
            size={18}
            className="absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
          />
          <span className="sr-only">{t("Theme.screen-reader")}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {ThemeX.themes.map((value, index) => {
          return (
            <ThemeItem key={index} value={value}>
              {t("Theme." + value)}
            </ThemeItem>
          );
        })}
        {ThemeX.enableSystem && (
          <ThemeItem value="system">{t("Theme.system")}</ThemeItem>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
