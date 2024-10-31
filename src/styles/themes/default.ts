export const defaultTheme = {
  colors: {
    bg: {
      primary: "#18181B",
      secondary: "#09090B",
      active: "#F3F4F6",
    },
    fg: {
      primary: "#F3F4F6",
      secondary: "#D4D4D8",
      placeholder: "#71717A",
      onAccent: "#000000",
      onActive: "#000000",
    },
    border: {
      primary: "#3F3F46",
    },
    accent: "#EAB308",
  },
  font: {
    family: {
      regular: "LeagueSpartan_400Regular",
      bold: "LeagueSpartan_700Bold",
    },
    size: {
      xs: 12,
      sm: 14,
      base: 16,
      lg: 18,
      xl: 20,
      xl2: 32,
      xl3: 32,
    },
  },
};

export type ThemeType = typeof defaultTheme;
