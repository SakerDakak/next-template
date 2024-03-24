import React from "react";
import { IconContext, IconType } from "react-icons";

export default function Icon({
  icon: IconComponent,
  color,
  size,
  className,
  attr,
}: {
  icon: React.ElementType;
  color?: string;
  size?: string;
  className?: string;
  attr?: React.SVGAttributes<SVGElement>;
}) {
  return (
    <IconContext.Provider value={{ color, className, size, attr }}>
      <IconComponent />
    </IconContext.Provider>
  );
}
