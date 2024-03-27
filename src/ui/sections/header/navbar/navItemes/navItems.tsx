import TranslationX from "@/config/translation/translation";
import { NavbarItemList } from "@/data/constant/navbar";
import NavigationLink from "../../../../components/basic/navigationLink";
import NavbarItemsContainer from "./_clientSide";

export default function NavbarItems() {
  const t = TranslationX.t(TranslationX.namespace.navbar);

  return (
    <NavbarItemsContainer>
      {NavbarItemList.map((value, index) => {
        return (
          <li key={index}> 
            <NavigationLink href={value.path}> {t(value.title)}</NavigationLink>
          </li>
        );
      })}
    </NavbarItemsContainer>
  );
}
