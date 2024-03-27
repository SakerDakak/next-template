"use client";
import { useNavberHook } from "@/core/hooks/navbar";
import clsx from "clsx";
import { ReactNode } from "react";

export default function NavbarItemsContainer({
  children,
}: {
  children: ReactNode;
}) {
  const { isOpenNav } = useNavberHook();
  return (
    <div className={clsx(isOpenNav ? "" : "hidden", "md:inline-block")}>
      <ul
        className="flex items-center gap-2 justify-center 
         h-screen w-screen flex-col bg-white dark:bg-black absolute top-0 right-0 z-40
         font-medium text-2xl  
         md:h-auto md:w-auto md:flex-row md:bg-inherit md:dark:bg-inherit md:font-normal md:text-start 
         md:relative md:text-base"
      >
        {children}
      </ul>
    </div>
  );
}
