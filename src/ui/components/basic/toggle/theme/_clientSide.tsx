"use client";

import { DropdownMenuItem } from "@/ui/components/shadcn-ui/dropdown-menu";
import { useTheme } from "next-themes";

interface Props {
  children: React.ReactNode;
  value: string;
}

export default function ThemeItem({ children, value }: Props) {
  const { setTheme } = useTheme();
  return (
    <DropdownMenuItem spellCheck={true} onClick={() => setTheme(value)}>
      {children}
    </DropdownMenuItem>
  );
}
