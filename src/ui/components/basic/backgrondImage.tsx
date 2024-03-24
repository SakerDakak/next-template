import ImageX from "@/config/assets/images";
import Image from "next/image";

export default function BackgroundImage() {
  return (
    <Image
      className="-z-50 absolute top-0 w-full opacity-80 dark:opacity-50"
      width={1920}
      height={500}
      alt=""
      src={ImageX.background}
    />
  );
}
