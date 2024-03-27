import TranslationX from "@/config/translation/translation";
import { Button } from "@/ui/components/shadcn-ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/ui/components/shadcn-ui/dropdown-menu";
import LangItem from "./_clientSide";
import Icon from "../../icon";
import IconX from "@/config/assets/icons";
import getLangDirection from "@/core/utils/langDirection";

export default function ToggleLanguage({ locale }: { locale: string }) {
  const t = TranslationX.t(TranslationX.namespace.basic);
  return (
    <DropdownMenu dir={getLangDirection(locale)}>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <Icon icon={IconX.language} size={18} />
          {/* <p className="text-xl">{TranslationX.localeNames.find((val)=>val.code==locale)?.show}</p> */}
          <span className="sr-only">{t("Language.screen-reader")}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {TranslationX.localeNames.map((value, index) => {
          return (
            <LangItem key={index} value={value}>
              {value.name}
            </LangItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
