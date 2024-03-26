import { AppPathnames } from "@/navigation";
import React from "react";

export interface NavbarItem {
  title: string;
  path: AppPathnames;
  icon?: React.ReactNode;
  list?: NavbarItem[];
}