import { extendTheme, type ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

export const theme = extendTheme({
  config,
  fonts: {
    heading: "'Geist', 'Inter', system-ui, -apple-system, sans-serif",
    body: "'Geist', 'Inter', system-ui, -apple-system, sans-serif",
    mono: "'Geist Mono', ui-monospace, SFMono-Regular, Menlo, monospace",
  },
  colors: {
    brand: {
      50: "#f3f0ff",
      100: "#e4dcff",
      200: "#c4b5fd",
      300: "#a78bfa",
      400: "#8b7bff",
      500: "#7c6bff",
      600: "#6553e6",
      700: "#4c3db3",
      800: "#332880",
      900: "#1c154d",
    },
  },
  styles: {
    global: {
      "html, body": {
        bg: "#07080b",
        color: "#eceef2",
      },
    },
  },
});
