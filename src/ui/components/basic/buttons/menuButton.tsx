"use client";
import { Button } from "@/ui/components/shadcn-ui/button";
import Icon from "../icon";
import IconX from "@/config/assets/icons";
import { useNavberHook } from "@/core/hooks/navbar";

export default function MenuButton() {
  const { isOpenNav, setIsOpenNav } = useNavberHook();
  return (
    <Button
      variant="outline"
      size="icon"
      className="md:hidden text-xl z-50"
      onClick={() => setIsOpenNav(!isOpenNav)}
    >
      <Icon icon={isOpenNav ? IconX.menuClose : IconX.menuOpen} />
    </Button>
  );
}
