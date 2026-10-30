import { extendTheme, type ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: "light",
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
      50: "#fbf1ec",
      100: "#f3dcd1",
      200: "#e6b39e",
      300: "#d98a6f",
      400: "#bc6246",
      500: "#a85236",
      600: "#9e4a2f",
      700: "#7c3a25",
      800: "#5a2a1b",
      900: "#371a10",
    },
  },
  styles: {
    global: {
      "html, body": {
        bg: "#f7f3ec",
        color: "#292d2a",
      },
    },
  },
});
