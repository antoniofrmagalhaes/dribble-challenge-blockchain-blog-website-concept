import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";

const customConfig = defineConfig({
  theme: {
    tokens: {
      fonts: {
        heading: { value: "Open Sans" },
        body: { value: "Open Sans" },
      },
      colors: {
        brand: {
          500: { value: "#384BFF" },
        },
        gray: {
          900: { value: "#181b23" },
          800: { value: "#1f2229" },
          700: { value: "#353646" },
          600: { value: "#4b4d63" },
          500: { value: "#616480" },
          400: { value: "#797d9a" },
          300: { value: "#9699b0" },
          200: { value: "#b3b5c6" },
          100: { value: "#d1d2dc" },
          50: { value: "#eeeef2" },
        },
      },
      breakpoints: {
        xs: { value: "320px" },
        sm: { value: "450px" },
        md: { value: "700px" },
        lg: { value: "1024px" },
        xl: { value: "1280px" },
        xxl: { value: "1440px" },
        xxxl: { value: "1920px" },
      },
    },
  },
  globalCss: {
    "html, body, #__next": {
      height: "100%",
      // overflow: 'hidden',
    },
    "#__next": {
      backgroundColor: "white",
    },
  },
});

export const system = createSystem(defaultConfig, customConfig);
