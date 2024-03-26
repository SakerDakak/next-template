import ImageX from "@/config/assets/images";
import TranslationX from "@/config/translation/translation";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";

export default function Logo({
  classSize,
  className,
  isHorizontal = false,
  isVertical = false,
  darkMode = false,
}: {
  isHorizontal?: boolean;
  isVertical?: boolean;
  darkMode?: boolean;
  classSize?: string;
  className?: string;
}) {
  const t = TranslationX.t(TranslationX.namespace.basic);
  const img = isHorizontal
    ? ImageX.logo_h
    : isVertical
    ? ImageX.logo_v
    : ImageX.logo;
  return (
    <Link href="/" className={clsx("cursor-pointer", classSize)}>
      <Image
        className={clsx(
          "h-full w-full mx-auto",className,
          darkMode ? "dark:filter dark:invert" : ""
        )}
        alt={t("logo-alt")}
        src={img}
        width={100}
        height={100}
        priority={true}
        placeholder="empty"
      />
    </Link>
  );
}

// "use client";
// import ImageX from "@/config/assets/images";
// import InfoX from "@/config/info/info";
// import Image from "next/image";
// import { useTheme } from "next-themes";
// import { useEffect, useState } from "react";
// import Link from "next/link";
// import ThemeX from "@/config/theme/theme";
// export default function Logo({
//   className,
//   width = 100,
//   height = 100,
//   isHorizontal = false,
//   isVertical = false,
//   isDark = false,
//   isLight = false,
//   isSymbol,
// }: {
//   width?: number;
//   height?: number;
//   isHorizontal?: boolean;
//   isVertical?: boolean;
//   className?: string;
//   isDark?: boolean;
//   isLight?: boolean;
//   isSymbol?: boolean;
// }) {
//   const { resolvedTheme } = useTheme();
//   const isDarkTheme = (): boolean => {
//     if (isLight) {
//       return false;
//     }else if(isDark){
//       return true;
//     } else if (resolvedTheme === undefined) {
//       const theme = ThemeX.currentTheme();
//       if (theme === "dark") {
//         return true;
//       } else {
//         return false;
//       }
//     } else if (resolvedTheme == "dark") {
//       return true;
//     } else {
//       return false;
//     }
//   };
//   const choseImage = (): string => {
//     let value = "";
//     let darkTheme = isDarkTheme();
//     if (isHorizontal) {
//       if (darkTheme) value = ImageX.logo_h_dark;
//       else value = ImageX.logo_h;
//     } else if (isVertical) {
//       if (darkTheme) value = ImageX.logo_v_dark;
//       else value = ImageX.logo_v;
//     } else if (isSymbol) {
//       if (darkTheme) value = ImageX.logo_symbol_dark;
//       else value = ImageX.logo_symbol;
//     } else {
//       if (darkTheme) value = ImageX.logo_dark;
//       else value = ImageX.logo;
//     }
//     if (value.trim().length === 0) return ImageX.logo;
//     else return value;
//   };
//   const [img, setImg] = useState(ImageX.logo);
//   useEffect(() => {
//     return setImg(choseImage());
//   }, [resolvedTheme]);

//   return (
//     <Link href="/" className={className}>
//       <Image
//         width={width}
//         height={height}
//         alt=""
//         // alt={`${InfoX.appName} Logo.`}
//         src={img}
//         className="h-auto w-[60]"
//       />
//     </Link>
//   );
// }
