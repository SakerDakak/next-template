import { AppPathnames } from "@/config/navigation/i18nNavigation";
import React from "react";

export interface NavbarItem {
  title: string;
  path: AppPathnames;
  icon?: React.ReactNode;
  list?: NavbarItem[];
}
