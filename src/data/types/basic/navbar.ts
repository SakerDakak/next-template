import React from "react";

export interface NavbarItems{
  title: string;
  path: string;
  icon?: React.ReactNode;
  list?: NavbarItems[];
}