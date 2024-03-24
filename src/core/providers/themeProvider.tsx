"use client";
import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { type ThemeProviderProps } from "next-themes/dist/types";
import ThemeX from "../../config/theme/theme";
import { NextUIProvider } from "@nextui-org/react";

export default function ThemeProvider({
  children,
  ...props
}: ThemeProviderProps) {
  return (
    <NextUIProvider>
      <NextThemesProvider
        attribute="class"
        defaultTheme={ThemeX.defaultTheme}
        enableSystem={ThemeX.enableSystem} // If you don't want a System theme, disable it.
        disableTransitionOnChange // Disable all CSS transitions before the theme is changed.
        themes={ThemeX.themes}
        {...props}
      >
        {children}
      </NextThemesProvider>
    </NextUIProvider>
  );
}
