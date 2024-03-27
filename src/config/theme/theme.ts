
export default class ThemeX {
  static readonly defaultTheme = "system";
  static readonly enableSystem = true;
  static readonly themes = ["dark", "light"];
  static readonly themeColorLight = "#ffffff";
  static readonly themeColorDark = "#000000";
  //--------------------------------------------------------------------
  // Functions
  static currentTheme = () => localStorage.getItem("theme");
}
// import {useTheme} from "next-themes";
// const {resolvedTheme} = useTheme();
// const { theme } = useTheme()

