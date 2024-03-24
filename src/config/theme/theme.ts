
export default class ThemeX {
  static readonly defaultTheme = "system";
  static readonly enableSystem = false;
  static readonly themes = ["dark", "light"];
  //--------------------------------------------------------------------
  // Functions
  static currentLocal = () => localStorage.getItem("theme");
}
// import {useTheme} from "next-themes";
// const {resolvedTheme} = useTheme();
// const { theme } = useTheme()
