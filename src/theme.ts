import { extendTheme, type ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

export const theme = extendTheme({
  config,
  fonts: {
    heading: "'Fraunces', Georgia, serif",
    body: "'DM Sans', system-ui, -apple-system, sans-serif",
    mono: "'IBM Plex Mono', ui-monospace, SFMono-Regular, Menlo, monospace",
  },
  colors: {
    brand: {
      50: "#fbf3ea",
      100: "#f3dfcb",
      200: "#e9c4a3",
      300: "#e2ad85",
      400: "#d4915f",
      500: "#c47a46",
      600: "#a66236",
      700: "#7f4a2a",
      800: "#58331e",
      900: "#321d11",
    },
  },
  styles: {
    global: {
      "html, body": {
        bg: "#201d1a",
        color: "#f1e9d8",
      },
    },
  },
});
