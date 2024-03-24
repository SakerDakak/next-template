import ImageX from "@/config/assets/images";
import InfoX from "@/config/info/info";
import Image from "next/image";
import Link from "next/link";

export default function Logo({
  width = 100,
  height = 100,
  isHorizontal = true,
  className,
}: {
  width?: number;
  height?: number;
  isHorizontal?: boolean;
  className?: string;
}) {
  return (
    <Link href="/" className={className}>
      <Image
        className="dark:filter dark:invert"
        width={width}
        height={height}
        alt={`${InfoX.appName} Logo.`}
        src={isHorizontal ? ImageX.logo_h : ImageX.logo_v}
      />
    </Link>
  );
}
