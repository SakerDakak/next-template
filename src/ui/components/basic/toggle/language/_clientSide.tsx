"use client";

import { useParams, useSearchParams } from "next/navigation";
import { useRouter, usePathname } from "@/config/navigation/i18nNavigation";
import { LocaleName } from "@/data/types/basic/translation";

import { DropdownMenuItem } from "@/ui/components/shadcn-ui/dropdown-menu";

interface Props {
  children: React.ReactNode;
  value: LocaleName;
}

export default function LangItem({ children, value }: Props) {
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();
  const searchParams = useSearchParams().toString();
  const changeLanguage = () => {
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
    <DropdownMenuItem onClick={() => changeLanguage()}>
      {children}
    </DropdownMenuItem>
  );
}
