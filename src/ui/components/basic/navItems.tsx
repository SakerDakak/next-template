import TranslationX from "@/config/translation/translation";
import { NavbarItemList } from "@/data/constant/navbar";
import NavigationLink from "./navigationLink";

export default function NavbarItems() {
  const t = TranslationX.t(TranslationX.namespace.navbar);

  return (
    <ul
      className="flex items-center gap-2 justify-center
    h-screen w-screen flex-col bg-white dark:bg-black absolute top-0 right-0 z-40
    font-medium text-2xl  
    md:h-auto md:w-auto md:flex-row md:bg-inherit md:dark:bg-inherit md:font-normal md:text-start 
    md:relative md:text-base
    "
    >
      {NavbarItemList.map((value, index) => {
        return (
          <li key={index}>
            <NavigationLink href={value.path}> {t(value.title)}</NavigationLink>
          </li>
        );
      })}
    </ul>
  );
}
