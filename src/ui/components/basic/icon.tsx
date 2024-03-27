import { IconBaseProps, IconType } from "react-icons";

interface CustomIconProps extends IconBaseProps {
  icon: IconType;
}

const Icon: React.FC<CustomIconProps & React.HTMLProps<SVGElement>> = ({
  icon: Icon,
  ...props
}) => <Icon {...props} />;
export default Icon;
