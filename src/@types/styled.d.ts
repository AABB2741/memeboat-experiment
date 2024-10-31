import "styled-components/native";
import type { ThemeType } from "../styles/themes/default";

declare module "styled-components/native" {
  export interface DefaultTheme extends ThemeType {}
}
