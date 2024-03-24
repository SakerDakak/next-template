"use client";

import { useLocale } from "next-intl";
import { useParams, useSearchParams } from "next/navigation";
import { useRouter, usePathname } from "@/navigation";
import { LocaleName } from "@/data/types/basic/translation";

import { useState } from "react";

import TranslationX from "@/config/translation/translation";
import { Button } from "@/ui/components/shadcn-ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/ui/components/shadcn-ui/dropdown-menu";

export default function LanguageToggle() {
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();
  const searchParams = useSearchParams().toString();
  const [lang, setLang] = useState(useLocale());

  const changeLanguage = (value: LocaleName) => {
    setLang(value.code);
    // Add current search query parameters
    const path = pathname + "?" + searchParams;
    router.replace(
      // @ts-expect-error -- TypeScript will validate that only known `params`
      // are used in combination with a given `pathname`. Since the two will
      // always match for the current route, we can skip runtime checks.
      { pathname: path, params },
      { locale: value.code }
    );
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <p className="font-medium uppercase">{lang}</p>
          <span className="sr-only">Toggle Language</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {TranslationX.localeNames.map((value, index) => {
          return (
            <DropdownMenuItem key={index} onClick={() => changeLanguage(value)}>
              {value.name}
            </DropdownMenuItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
